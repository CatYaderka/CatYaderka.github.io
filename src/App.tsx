import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans antialiased">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[30%] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      <main>
        <Hero />
        
        {/* About Section - Brief */}
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 opacity-40 uppercase tracking-widest text-sm">Обо мне</h2>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/90">
            Я — независимый разработчик, создающий атмосферные игровые миры. 
            Специализируюсь на <span className="text-blue-400">C#</span> и <span className="text-purple-400">Source 2</span>. 
            Моя страсть — тактические системы и иммерсивный геймплей.
          </p>
        </section>

        <ProjectSection />
        
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
}

export default App;
