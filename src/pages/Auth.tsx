import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Globe } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular API call
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        navigate('/');
      } else {
        setIsLogin(true);
      }
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating orbs with improved animations */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-2xl"></div>

        {/* Additional floating elements for more life */}
        <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-bounce opacity-30" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-primary/25 rounded-full blur-lg animate-pulse opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-pulse opacity-25" style={{animationDelay: '3s'}}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl animate-fade-in-up">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-down">
          <h1 className="text-4xl md:text-6xl font-bold font-fredoka text-white mb-4 animate-glow">
            Conecta<span className="text-primary animate-pulse-glow">ETEC</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
            {isLogin ? 'Bem-vindo de volta!' : 'Junte-se à nossa comunidade'}
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full animate-scale-in" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        {/* Main Container */}
        <div className="relative">
          {/* Enhanced Toggle Buttons */}
          <div className="flex justify-center mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 flex shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-black/30 transition-all duration-500">
              <button
                onClick={() => setIsLogin(true)}
                className={`relative px-8 py-3 rounded-xl font-fredoka font-bold transition-all duration-500 overflow-hidden ${
                  isLogin
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                <span className="relative z-10">Entrar</span>
                {isLogin && (
                  <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/40 animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`relative px-8 py-3 rounded-xl font-fredoka font-bold transition-all duration-500 overflow-hidden ${
                  !isLogin
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                <span className="relative z-10">Cadastrar</span>
                {!isLogin && (
                  <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/40 animate-pulse"></div>
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Form Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className={`flex transition-all duration-700 ease-out ${
                isLogin ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              {/* Login Form */}
              <div className="w-full shrink-0 animate-slide-in-left" style={{animationDelay: isLogin ? '0.4s' : '0s'}}>
                <div className="bg-white/8 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 hover:border-white/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slide-in-up" style={{animationDelay: '0.5s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="animate-slide-in-up" style={{animationDelay: '0.6s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Senha</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 accent-primary" />
                        <span className="text-gray-300 text-sm">Lembrar-me</span>
                      </label>
                      <a href="#" className="text-primary hover:text-primary-light text-sm transition-colors">
                        Esqueceu a senha?
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full relative bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-fredoka font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Entrar
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-[#121212] text-gray-400">ou</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-all duration-300 border border-white/20 flex items-center justify-center gap-3"
                    >
                      <Globe className="w-5 h-5" />
                      Continuar com Google
                    </button>
                  </form>
                </div>
              </div>

              {/* Register Form */}
              <div className="w-full shrink-0 animate-slide-in-right" style={{animationDelay: !isLogin ? '0.4s' : '0s'}}>
                <div className="bg-white/8 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 hover:border-white/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slide-in-up" style={{animationDelay: '0.5s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Nome Completo</label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                    </div>

                    <div className="animate-slide-in-up" style={{animationDelay: '0.6s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="animate-slide-in-up" style={{animationDelay: '0.7s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Senha</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="animate-slide-in-up" style={{animationDelay: '0.8s'}}>
                      <label className="block text-white font-medium mb-2 transition-colors duration-300">Confirmar Senha</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 accent-primary" required />
                      <span className="text-gray-300 text-sm">
                        Concordo com os <a href="#" className="text-primary hover:text-primary-light">Termos de Uso</a> e <a href="#" className="text-primary hover:text-primary-light">Política de Privacidade</a>
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full relative bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-fredoka font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Criar Conta
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-[#121212] text-gray-400">ou</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-all duration-300 border border-white/20 flex items-center justify-center gap-3"
                    >
                      <Globe className="w-5 h-5" />
                      Cadastrar com Google
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button
                onClick={toggleMode}
                className="text-primary hover:text-primary-light font-medium ml-2 transition-colors"
              >
                {isLogin ? 'Cadastre-se' : 'Entre aqui'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;