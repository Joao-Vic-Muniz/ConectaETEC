import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Globe,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

// Simulated Google Auth
const mockGoogleAuth = () => {
  return new Promise<{ name: string; email: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Usuário Google",
        email: "usuario@gmail.com",
      });
    }, 1500);
  });
};

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [success, setSuccess] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleGoogleLogin = async () => {
    setSocialLoading(true);
    
    try {
      const user = await mockGoogleAuth();
      
      localStorage.setItem("user", JSON.stringify({
        name: user.name,
        email: user.email,
        provider: "google"
      }));
      
      setSuccess(true);
      
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      console.error("Google login failed:", error);
    } finally {
      setSocialLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirme sua senha";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "As senhas não coincidem";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((old) => ({
      ...old,
      [name]: value,
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((old) => ({ ...old, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    setTimeout(() => {
      const userData = {
        name: isLogin ? formData.email.split('@')[0] : formData.name,
        email: formData.email,
        provider: "email"
      };

      localStorage.setItem("user", JSON.stringify(userData));
      
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }, 1200);
  };

  const inputStyle = (hasError: boolean) =>
    `w-full h-14 rounded-2xl bg-white/[0.03] border ${
      hasError ? "border-red-500/50" : "border-white/[0.08]"
    } px-12 pr-12 text-white placeholder:text-white/30 outline-none focus:border-primary-light/70 focus:ring-2 focus:ring-primary-light/15 transition-all`;

  return (
    <div className={`min-h-screen text-white flex items-start justify-center px-4 pt-16 pb-10 relative overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#111827] transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[-120px] w-96 h-96 rounded-full bg-primary/20 blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 left-[-80px] w-80 h-80 rounded-full bg-primary-light/10 blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className={`relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl shadow-2xl min-h-[760px] mt-10 transition-all duration-700 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="hidden lg:flex flex-col min-h-[760px] p-12 border-r border-white/[0.06] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-10">
                Plataforma Oficial
              </div>
              <h1 className="font-fredoka font-bold text-5xl xl:text-6xl leading-[1.15] pt-2">
                <span className="block text-white">Acesse</span>
                <span className="block text-primary-light">sua conta</span>
              </h1>
              <p className="text-white/55 text-lg max-w-md leading-relaxed mt-8">
                Entre ou crie sua conta para explorar projetos e conexões dentro da plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-6 md:p-10 min-h-[760px] flex flex-col">
          {/* Auth Tabs */}
          <div className="flex bg-white/[0.03] p-1 rounded-2xl mb-8 border border-white/[0.08]">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 h-12 rounded-xl font-fredoka font-bold transition-all ${
                isLogin ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg" : "text-white/40"
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 h-12 rounded-xl font-fredoka font-bold transition-all ${
                !isLogin ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg" : "text-white/40"
              }`}
            >
              Criar Conta
            </button>
          </div>

          <h2 className="font-fredoka font-bold text-4xl text-white mb-2">
            {isLogin ? "Bem-vindo de volta" : "Criar sua conta"}
          </h2>
          <p className="text-white/45 mb-8">
            {isLogin ? "Entre para continuar." : "Cadastre-se para começar agora."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-light" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle(!!errors.name)}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-light" />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle(!!errors.email)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-light" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleChange}
                className={inputStyle(!!errors.password)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary-light"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm text-primary-light">Esqueceu a senha?</button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white font-fredoka font-bold transition-all flex items-center justify-center gap-2 ${
                success ? "from-green-500 to-emerald-500" : ""
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : success ? (
                <><CheckCircle size={18} /> Sucesso!</>
              ) : (
                <>{isLogin ? "Entrar" : "Criar Conta"} <ArrowRight size={18} /></>
              )}
            </button>

            <div className="relative py-2 text-center">
              <span className="text-sm text-white/30">ou</span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={socialLoading || loading}
              className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] text-white flex items-center justify-center gap-3"
            >
              <Globe size={18} />
              {socialLoading ? "Conectando..." : "Continuar com Google"}
            </button>
          </form>

          <p className="text-center text-white/40 mt-auto pt-8">
            {isLogin ? "Não possui conta?" : "Já possui conta?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary-light font-semibold"
            >
              {isLogin ? "Cadastrar" : "Entrar"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}