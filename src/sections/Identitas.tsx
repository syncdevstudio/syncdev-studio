import { motion } from "motion/react";
import { Users } from "lucide-react";
import { TEAM_MEMBERS } from "../constants";

export function Identitas() {
  return (
    <section
      id="identitas"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cyan mb-4"
          >
            <Users className="w-3.5 h-3.5" />
            <span className="font-mono tracking-wider uppercase font-semibold text-[10px]">
              Identitas Tim
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Siapa saja yang ada di SyncDev Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Berkenalan dengan tim inti yang menggabungkan keahlian desain,
            pengembangan, dan riset untuk menghadirkan produk digital berkelas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full max-w-md bg-white/[0.03] border border-white/5 rounded-3xl p-6 text-center shadow-xl shadow-black/20"
            >
              <div className="mx-auto h-28 w-28 rounded-full overflow-hidden border border-white/10 bg-white/5 mb-5">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-brand-cyan uppercase tracking-[0.18em] font-semibold mt-2">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-slate-400 text-sm mt-3">{member.bio}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
