import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 bg-bg/80 backdrop-blur-md border-b border-white/5 font-quicksand">
        
        <div className="flex items-center w-full">
          <div className="flex-1 flex justify-start">
            <NavHashLink smooth to="/#home" className="hover:opacity-80 transition-opacity">
              <img src={Logo} alt="Logo" className="h-10 object-contain" />
            </NavHashLink>
          </div>

          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex items-center gap-12 font-semibold text-accent/80">
              <li>
                <NavHashLink smooth to="/#home" className="hover:text-primary-light hover:scale-105 transition-all duration-200">
                  INÍCIO
                </NavHashLink>
              </li>
              <li>
                <Link to="/explorar" className="hover:text-primary-light hover:scale-105 transition-all duration-200">
                  EXPLORAR
                </Link>
              </li>
              <li>
                <NavHashLink to="/comunidade" className="hover:text-primary-light hover:scale-105 transition-all duration-200">
                  COMUNIDADE
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="/cursos" className="hover:text-primary-light hover:scale-105 transition-all duration-200">
                  CURSOS
                </NavHashLink>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/auth" 
                className="text-white hover:text-primary-light font-bold font-fredoka transition-all duration-300 px-5 py-2 rounded-full hover:bg-white/5"
              >
                Entrar
              </Link>

              <Link 
                to="/auth" 
                className="bg-primary hover:bg-primary-light text-white px-8 py-2 rounded-full font-fredoka font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(47,111,182,0.3)] hover:shadow-[0_6px_20px_rgba(95,163,228,0.4)]"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col space-y-1 p-2 absolute right-8 top-1/2 transform -translate-y-1/2"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/50 z-30 ${isOpen ? 'block' : 'hidden'}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-bg/95 backdrop-blur-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-40 flex flex-col p-8`}>
        <button 
          onClick={() => setIsOpen(false)} 
          className="self-end mb-8 text-white text-2xl"
        >
          ×
        </button>
        <ul className="flex flex-col gap-6 font-semibold text-accent/80">
          <li>
            <NavHashLink smooth to="/#home" className="hover:text-primary-light transition-colors" onClick={() => setIsOpen(false)}>
              INÍCIO
            </NavHashLink>
          </li>
          <li>
            <Link to="/explorar" className="hover:text-primary-light transition-colors" onClick={() => setIsOpen(false)}>
              EXPLORAR
            </Link>
          </li>
          <li>
            <NavHashLink to="/comunidade" className="hover:text-primary-light transition-colors" onClick={() => setIsOpen(false)}>
              COMUNIDADE
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/cursos" className="hover:text-primary-light transition-colors" onClick={() => setIsOpen(false)}>
              CURSOS
            </NavHashLink>
          </li>
        </ul>
        <div className="flex flex-col gap-4 mt-8">
          <Link 
            to="/auth" 
            className="text-white hover:text-primary-light font-bold font-fredoka transition-all duration-300 px-5 py-2 rounded-full hover:bg-white/5 text-center"
            onClick={() => setIsOpen(false)}
          >
            Entrar
          </Link>

          <Link 
            to="/auth" 
            className="bg-primary hover:bg-primary-light text-white px-8 py-2 rounded-full font-fredoka font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(47,111,182,0.3)] hover:shadow-[0_6px_20px_rgba(95,163,228,0.4)] text-center"
            onClick={() => setIsOpen(false)}
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </>
  );
}