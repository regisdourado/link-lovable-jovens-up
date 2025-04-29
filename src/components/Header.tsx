
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl p-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
            <span className="gradient-text">LinkedIn</span> 
            <span className="text-gray-800"> Jovens</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => navigate('/')}>Início</Button>
          <Button variant="ghost" onClick={() => navigate('/modulos')}>Módulos</Button>
          <Button variant="ghost" onClick={() => navigate('/conquistas')}>Conquistas</Button>
          <Button variant="ghost" onClick={() => navigate('/comunidade')}>Comunidade</Button>
          <Button onClick={() => navigate('/meu-perfil')}>Meu Perfil</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="container flex flex-col py-4 gap-2">
            <Button variant="ghost" onClick={() => { navigate('/'); setMenuOpen(false); }}>Início</Button>
            <Button variant="ghost" onClick={() => { navigate('/modulos'); setMenuOpen(false); }}>Módulos</Button>
            <Button variant="ghost" onClick={() => { navigate('/conquistas'); setMenuOpen(false); }}>Conquistas</Button>
            <Button variant="ghost" onClick={() => { navigate('/comunidade'); setMenuOpen(false); }}>Comunidade</Button>
            <Button onClick={() => { navigate('/meu-perfil'); setMenuOpen(false); }}>Meu Perfil</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
