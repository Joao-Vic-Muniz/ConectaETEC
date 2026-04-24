import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Menu, X, LogOut, User } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  provider: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Erro ao ler usuário");
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 bg-[#0b1120]/95 backdrop-blur-lg border-b border-cyan-500/10 font-quicksand">
        <div className="flex items-center w-full justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-black italic logo-conecta leading-tight tracking-tighter cursor-default select-none">
              Conecta ETEC
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 font-semibold text-white/80">
              <li><NavHashLink smooth to="/#home" className="hover:text-cyan-400 transition-all">INÍCIO</NavHashLink></li>
              <li><Link to="/explorar" className="hover:text-cyan-400 transition-all">EXPLORAR</Link></li>
              <li><Link to="/comunidade" className="hover:text-cyan-400 transition-all">COMUNIDADE</Link></li>
              <li><Link to="/cursos" className="hover:text-cyan-400 transition-all">CURSOS</Link></li>
            </ul>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white">
                  <User size={16} className="text-cyan-400" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 font-bold px-4 py-2 rounded-full hover:bg-white/5 transition-all">
                  <LogOut size={16} /> Sair
                </button>
              </div>
            ) : (
              <>
                <Link to="/auth" className="text-white hover:text-cyan-400 font-bold px-5 py-2">Entrar</Link>
                <Link to="/auth" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold">Cadastrar</Link>
              </>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-[70px] md:hidden bg-[#0b1120]/98 backdrop-blur-xl z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-2">
            <li>
              <NavHashLink smooth to="/#home" onClick={() => setIsOpen(false)} className="block text-white font-semibold py-4 px-4 rounded-xl hover:bg-white/5">
                INÍCIO
              </NavHashLink>
            </li>
            <li>
              <Link to="/explorar" onClick={() => setIsOpen(false)} className="block text-white font-semibold py-4 px-4 rounded-xl hover:bg-white/5">
                EXPLORAR
              </Link>
            </li>
            <li>
              <Link to="/comunidade" onClick={() => setIsOpen(false)} className="block text-white font-semibold py-4 px-4 rounded-xl hover:bg-white/5">
                COMUNIDADE
              </Link>
            </li>
            <li>
              <Link to="/cursos" onClick={() => setIsOpen(false)} className="block text-white font-semibold py-4 px-4 rounded-xl hover:bg-white/5">
                CURSOS
              </Link>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/10 space-y-4">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white">
                  <User size={20} className="text-cyan-400" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full text-red-400 font-bold py-4 rounded-xl bg-red-500/5">
                  <LogOut size={20} /> Encerrar Sessão
                </button>
              </>
            ) : (
              <>
                <Link to="/auth" onClick={() => setIsOpen(false)} className="block w-full text-center text-white font-bold py-4 rounded-xl border border-white/10">
                  Entrar
                </Link>
                <Link to="/auth" onClick={() => setIsOpen(false)} className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 rounded-xl">
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}