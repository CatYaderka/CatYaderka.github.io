import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-700"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <img 
            src="https://catyaderka.github.io/assets/profile.jpg" 
            alt="Semyon Kostin" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 object-cover"
            onError={(e) => { e.currentTarget.src = "/profile_new.jpg" }}
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 bg-clip-text">
          Костин Семён
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-medium mb-8">
          @CatYaderka • Разработчик Bleed Control
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-white/80">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2 transition-colors hover:bg-white/10">
            <MapPin size={18} /> Россия
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
            <span className="relative z-10 font-bold bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
              C# / s&box (Source 2)
            </span>
          </span>
        </div>
      </motion.div>
    </section>
  );
};
