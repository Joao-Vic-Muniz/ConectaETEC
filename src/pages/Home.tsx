import { CalendarDays, BookOpen, Map } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <div className="w-full font-quicksand bg-bg">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-16 md:py-16 relative"
      >
        {/* Manchas no BG */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-light/3 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/2 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl min-h-[50vh] md:min-h-[60vh] gap-8 md:gap-16 bg-primary-dark/20 backdrop-blur-3xl p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_100px_-15px_rgba(0,0,0,0.8)] border border-white/5 relative z-10">
          <div className="flex-1 z-10 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="font-fredoka text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight tracking-tighter">
                Conecta{" "}
                <span className="text-primary-light italic drop-shadow-lg">
                  ETEC
                </span>
              </h1>
              <div className="h-1.5 w-16 md:w-20 bg-primary-light rounded-full shadow-[0_0_15px_rgba(95,163,228,0.5)] mx-auto md:mx-0"></div>
            </div>

            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-[550px] mx-auto md:mx-0">
              A plataforma feita para aproximar alunos, projetos e oportunidades
              dentro da nossa comunidade tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
              <button className="bg-primary hover:bg-primary-light text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-fredoka text-base md:text-lg font-bold transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer active:scale-95">
                Explorar
              </button>

              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 md:px-12 py-3 md:py-4 rounded-full font-fredoka text-base md:text-lg font-bold transition-all duration-300 cursor-pointer">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="flex-1 z-10 flex justify-center relative mt-8 md:mt-0">
            <div className="absolute w-[120%] h-[120%] bg-primary-light/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse"></div>
            <img
              src={Logo}
              alt="Logo"
              className="relative w-full max-w-xs md:max-w-md lg:max-w-lg object-contain animate-float"
            />
          </div>
        </div>
      </section>

      {/* Explorar */}
      <section id="explorar" className="py-16 md:py-24 relative">
        {/* Background blur effects */}
        <div className="absolute top-16 right-16 w-48 h-48 bg-primary/3 blur-2xl rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-primary-light/2 blur-2xl rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/3 blur-xl rounded-full"></div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
              Sobre a plataforma
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Possuímos uma variedade de recursos para ajudar você a se
              conectar, aprender e crescer dentro da ETEC, com informações de
              eventos, matérias e mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Eventos */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CalendarDays className="text-white" size={24} />
              </div>
              <h3 className="font-fredoka text-xl text-accent font-bold mb-2">
                Eventos
              </h3>
              <p className="text-white/70">
                Veja os principais eventos da escola como a Semana Paulo Freire,
                TechWeek e Feira do Empreendedor.
              </p>
            </div>

            {/* Card Matérias */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="font-fredoka text-xl text-accent font-bold mb-2">
                Matérias
              </h3>
              <p className="text-white/70">
                Conheça algumas das principais disciplinas oferecidas pelos
                cursos e também o que é ensinado em cada uma delas.
              </p>
            </div>

            {/* Card Excursões */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Map className="text-white" size={24} />
              </div>
              <h3 className="font-fredoka text-xl text-accent font-bold mb-2">
                Excursões
              </h3>
              <p className="text-white/70">
                A ETEC também costuma passear bastante por ai, indo direto para
                diversos eventos como BGS, Bienal do Livro e muito mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidade */}
      <section id="comunidade" className="pt-2 pb-16 md:pt-4 md:pb-24 relative">
        {/* Background blur effects */}
        <div className="absolute top-8 left-8 w-40 h-40 bg-primary/4 blur-2xl rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-52 h-52 bg-primary-light/3 blur-2xl rounded-full"></div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seja parte de uma rede crescente de inovadores e criativos da ETEC.
          </p>

          <button
            className="
      bg-primary text-white 
      px-10 md:px-14 py-3 md:py-4 rounded-full font-fredoka text-base md:text-lg font-bold 
      transition-all duration-300 shadow-lg shadow-primary/20 
      hover:bg-primary-light hover:shadow-primary-light/40 hover:-translate-y-1
      cursor-pointer active:scale-95
    "
          >
            Participar Agora
          </button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
