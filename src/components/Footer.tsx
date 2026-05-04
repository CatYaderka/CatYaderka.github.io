import { Send, Globe, MessageSquare, Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">CatYaderka</h2>
          <p className="text-white/40 text-sm">© 2024 Semyon Kostin. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Terminal size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Send size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <MessageSquare size={24} />
          </a>
          <a href="https://catyaderka.github.io" className="text-white/60 hover:text-white transition-colors">
            <Globe size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
