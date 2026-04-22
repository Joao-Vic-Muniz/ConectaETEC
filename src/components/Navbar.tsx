import { NavHashLink } from 'react-router-hash-link';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-bg/80 backdrop-blur-md border-b border-white/5 font-quicksand">
      
      <div className="flex items-center">
        <NavHashLink smooth to="/#home" className="hover:opacity-80 transition-opacity">
          <img src={Logo} alt="Logo" className="h-10 object-contain" />
        </NavHashLink>
      </div>

      <ul className="hidden md:flex items-center gap-8 font-semibold text-accent/80">
        <li>
          <NavHashLink smooth to="/#home" className="hover:text-primary-light transition-colors">
            INÍCIO
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#explorar" className="hover:text-primary-light transition-colors">
            EXPLORAR
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#comunidade" className="hover:text-primary-light transition-colors">
            COMUNIDADE
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/cursos" className="hover:text-primary-light transition-colors">
            CURSOS
          </NavHashLink>
        </li>
      </ul>

<div className="flex items-center gap-6">
  <NavHashLink 
    to="/login" 
    className="text-white hover:text-primary-light font-bold font-fredoka transition-all duration-300 px-5 py-2 rounded-full hover:bg-white/5"
  >
    Entrar
  </NavHashLink>

  <NavHashLink 
    to="/cadastro" 
    className="bg-primary hover:bg-primary-light text-white px-8 py-2 rounded-full font-fredoka font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(47,111,182,0.3)] hover:shadow-[0_6px_20px_rgba(95,163,228,0.4)]"
  >
    Cadastrar
  </NavHashLink>
</div>
    </nav>
  );
}