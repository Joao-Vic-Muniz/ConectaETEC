import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (isLogin) navigate("/");
      else setIsLogin(true);
    }, 1200);
  };

  const inputStyle =
    "w-full h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] px-12 pr-12 text-white placeholder:text-white/30 outline-none focus:border-primary-light/70 focus:ring-2 focus:ring-primary-light/15 transition-all";

  return (
    <div className="min-h-screen text-white flex items-start justify-center px-4 pt-16 pb-10 relative overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#111827]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[-120px] w-96 h-96 rounded-full bg-primary/20 blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 left-[-80px] w-80 h-80 rounded-full bg-primary-light/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[150px] animate-pulse delay-500" />
      </div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_-15px_rgba(47,111,182,0.30)] min-h-[760px] mt-10">
        {/* LEFT */}
        <div className="hidden lg:flex flex-col min-h-[760px] p-12 border-r border-white/[0.06] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />

          <div className="relative z-10 flex flex-col h-full justify-between gap-10">
            {/* TOP */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-10">
                Plataforma Oficial
              </div>

              <h1 className="font-fredoka font-bold text-5xl xl:text-6xl leading-[1.15] pt-2">
                <span className="block text-white">Acesse</span>

                <span className="block text-primary">
                  sua conta
                </span>
              </h1>

              <p className="text-white/55 text-lg max-w-md leading-relaxed mt-8">
                Entre ou crie sua conta para explorar projetos,
                oportunidades e conexões dentro da plataforma.
              </p>
            </div>

            {/* BOTTOM */}
            <div className="grid grid-cols-2 gap-4">
              {[
                ["+100", "Usuários"],
                ["10", "Projetos"],
                ["4", "Cursos"],
                ["24h", "Online"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary-light/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-white font-semibold text-xl">
                    {item[0]}
                  </p>
                  <span className="text-white/45 text-sm">
                    {item[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-6 md:p-10 min-h-[760px] flex flex-col">
          {/* TABS */}
          <div className="flex bg-white/[0.03] p-1 rounded-2xl mb-8 border border-white/[0.08]">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 h-12 rounded-xl font-fredoka font-bold transition-all ${
                isLogin
                  ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Entrar
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 h-12 rounded-xl font-fredoka font-bold transition-all ${
                !isLogin
                  ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Criar Conta
            </button>
          </div>

          {/* TITLE */}
          <h2 className="font-fredoka font-bold text-4xl text-white mb-2">
            {isLogin ? "Bem-vindo de volta" : "Criar sua conta"}
          </h2>

          <p className="text-white/45 mb-8">
            {isLogin
              ? "Entre para continuar na plataforma."
              : "Cadastre-se para começar agora."}
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col flex-1"
          >
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-4.5 w-5 h-5 text-primary-light" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-4.5 w-5 h-5 text-primary-light" />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4.5 w-5 h-5 text-primary-light" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleChange}
                className={inputStyle}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-white/40 hover:text-primary-light"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-4 top-4.5 w-5 h-5 text-primary-light" />

                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-4 text-white/40 hover:text-primary-light"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary-light hover:text-accent"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-fredoka font-bold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Entrar" : "Criar Conta"}
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="relative py-2">
              <div className="border-t border-white/[0.08]" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 bg-[#0f172a] px-4 text-sm text-white/30">
                ou
              </span>
            </div>

            <button
              type="button"
              className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary-light/40 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-3"
            >
              <Globe size={18} />
              Continuar com Google
            </button>
          </form>

          <p className="text-center text-white/40 mt-auto pt-8">
            {isLogin ? "Não possui conta?" : "Já possui conta?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary-light hover:text-accent font-semibold"
            >
              {isLogin ? "Cadastrar" : "Entrar"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}