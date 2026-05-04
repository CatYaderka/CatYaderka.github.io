import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    year: "2024",
    title: "Концепция и дизайн",
    desc: "Разработка идеи 'найденных кадров', написание GDD, создание moodboard.",
    status: "done"
  },
  {
    year: "2025",
    title: "Прототип и Сеть",
    desc: "Стрельба, кровотечение, базовая серверная логика 5x5 на Source 2.",
    status: "done"
  },
  {
    year: "2026",
    title: "Альфа-тестирование",
    desc: "Создание карт, оптимизация производительности, первые тесты сообществом.",
    status: "current"
  },
  {
    year: "2026—2027",
    title: "Бета-тестирование",
    desc: "Финальный баланс, полировка, закрытые тесты для приглашенных игроков.",
    status: "upcoming"
  },
  {
    year: "2028",
    title: "Релиз в Steam",
    desc: "Полный релиз, поддержка, сезонный контент и рейтинговые матчи.",
    status: "upcoming"
  }
];

export const Roadmap = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Road Map</h2>
          <p className="text-white/60">Путь от идеи до полноценного релиза в Steam</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 size={16} /> Завершено
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-400">
            <Circle size={16} /> В процессе
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className={cn(
              "p-8 h-full flex flex-col gap-6 transition-all duration-300",
              step.status === 'current' ? "ring-2 ring-blue-500/50 bg-blue-500/5" : "hover:bg-white/15"
            )}>
              <div className="flex justify-between items-start">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                  {step.year}
                </span>
                {step.status === 'done' ? (
                  <CheckCircle2 className="text-green-400" />
                ) : step.status === 'current' ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Circle className="text-blue-400 fill-blue-400/20" />
                  </motion.div>
                ) : (
                  <Calendar className="text-white/20" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
