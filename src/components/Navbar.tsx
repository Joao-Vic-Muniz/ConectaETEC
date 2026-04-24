import { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 bg-gradient-to-b from-[#0b1120]/95 to-[#0b1120]/90 backdrop-blur-lg border-b border-cyan-500/10 font-quicksand">
        <div className="flex items-center w-full justify-between">
          <div className="flex-1">
            <div className="select-none cursor-default">
              <h2 className="text-2xl font-black italic logo-conecta leading-tight tracking-tighter">
                Conecta ETEC
              </h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 font-semibold text-white/80">
              <li>
                <NavHashLink
                  smooth
                  to="/#home"
                  className="hover:text-cyan-400 transition-all duration-200"
                >
                  INÍCIO
                </NavHashLink>
              </li>

              <li>
                <Link
                  to="/explorar"
                  className="hover:text-cyan-400 transition-all duration-200"
                >
                  EXPLORAR
                </Link>
              </li>

              <li>
                <Link
                  to="/comunidade"
                  className="hover:text-cyan-400 transition-all duration-200"
                >
                  COMUNIDADE
                </Link>
              </li>

              <li>
                <Link
                  to="/cursos"
                  className="hover:text-cyan-400 transition-all duration-200"
                >
                  CURSOS
                </Link>
              </li>
            </ul>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex flex-1 justify-end gap-3">
            <Link
              to="/auth"
              className="text-white hover:text-cyan-400 font-bold px-5 py-2 rounded-full hover:bg-white/5 transition-all"
            >
              Entrar
            </Link>

            <Link
              to="/auth"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-full font-bold transition-all"
            >
              Cadastrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-white transition-transform duration-200" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] md:hidden bg-[#0b1120]/95 backdrop-blur-lg z-40 border-b border-cyan-500/10 animate-in slide-in-from-top-2 duration-300">
          <div className="p-6 space-y-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavHashLink
                  smooth
                  to="/#home"
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-semibold hover:text-cyan-400 hover:translate-x-2 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  INÍCIO
                </NavHashLink>
              </li>
              <li>
                <Link
                  to="/explorar"
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-semibold hover:text-cyan-400 hover:translate-x-2 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  EXPLORAR
                </Link>
              </li>
              <li>
                <Link
                  to="/comunidade"
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-semibold hover:text-cyan-400 hover:translate-x-2 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  COMUNIDADE
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-semibold hover:text-cyan-400 hover:translate-x-2 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  CURSOS
                </Link>
              </li>
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-white hover:text-cyan-400 font-bold px-5 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Entrar
              </Link>

              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Custom scrollbar for mobile menu */
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }

        .mobile-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 2px;
        }

        .mobile-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </>
  );
}
