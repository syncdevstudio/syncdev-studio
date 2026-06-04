import { useEffect, useRef } from "react";
import { SyncNode } from "../types";

export function InteractiveNodes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: SyncNode[] = [];
    const maxNodes = 65;
    const connectionDistance = 120;

    // Node generator
    const createNodes = (width: number, height: number) => {
      const generated: SyncNode[] = [];
      for (let i = 0; i < maxNodes; i++) {
        generated.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: i % 3 === 0 
            ? "rgba(6, 182, 212, 0.4)"  // cyan
            : i % 3 === 1 
              ? "rgba(37, 99, 235, 0.4)"  // blue
              : "rgba(113, 113, 122, 0.3)" // soft zinc
        });
      }
      return generated;
    };

    // Resize tracking using ResizeObserver to obey container width changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        nodes = createNodes(width, height);
      }
    });

    resizeObserver.observe(container);

    // Track cursor coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Burst of auxiliary connections
      for (let i = 0; i < 5; i++) {
        if (nodes.length > maxNodes + 20) {
          nodes.shift(); // keep safe length limit
        }
        nodes.push({
          id: Date.now() + i,
          x: clickX + (Math.random() - 0.5) * 40,
          y: clickY + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 3 + 1.5,
          color: "rgba(6, 182, 212, 0.8)"
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleCanvasClick);

    // Animating loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce boundaries
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw light particle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Connect with other nodes nearby
        for (let j = i + 1; j < nodes.length; j++) {
          const checkNode = nodes[j];
          const dx = n.x - checkNode.x;
          const dy = n.y - checkNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(checkNode.x, checkNode.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connecting nodes to mouse if nearby
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;
        if (mouseX > 0 && mouseY > 0) {
          const mx = n.x - mouseX;
          const my = n.y - mouseY;
          const mDist = Math.sqrt(mx * mx + my * my);

          if (mDist < 160) {
            const pulseAlpha = (1 - mDist / 160) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(37, 99, 235, ${pulseAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("click", handleCanvasClick);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="nodes-canvas-container"
      className="absolute inset-0 pointer-events-auto h-full w-full opacity-60 overflow-hidden"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
