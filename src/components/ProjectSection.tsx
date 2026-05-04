import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Eye, Droplets, Volume2, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Eye className="text-blue-400" />,
    title: "Bodycam Vision",
    desc: "Полное погружение: вид от первого лица без HUD, имитация реальной нательной камеры."
  },
  {
    icon: <Droplets className="text-red-500" />,
    title: "Система Кровотечения",
    desc: "Ранения влияют на видимость — кровь заливает объектив, искажая реальность."
  },
  {
    icon: <ShieldCheck className="text-green-400" />,
    title: "Тактика 5x5",
    desc: "Переосмысление классики. Каждое решение имеет цену, а каждая пуля — последствия."
  },
  {
    icon: <Volume2 className="text-purple-400" />,
    title: "ASMR Ужаса",
    desc: "Звуковой дизайн, который заставляет слышать собственное сердцебиение."
  }
];

export const ProjectSection = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Проект: Bleed Control</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Тактический шутер в стиле "found footage". Самое страшное — не враг. Это твоя собственная кровь на объективе.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <GlassCard className="relative min-h-[400px] flex flex-col group">
          <img 
            src="https://catyaderka.github.io/assets/projects/bleed-control.jpg" 
            alt="Bleed Control Gameplay" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = "/bleed_control.jpg" }}
          />
          <div className="relative z-10 mt-auto p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30 mb-4">
              В АКТИВНОЙ РАЗРАБОТКЕ
            </span>
            <h3 className="text-3xl font-bold text-white mb-2">Bleed Control</h3>
            <p className="text-white/70">
              Разрабатывается на C# под движок s&box (Source 2).
            </p>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <GlassCard key={i} className="p-6 flex flex-col gap-4 group hover:bg-white/15 transition-colors">
              <div className="p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">{f.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
