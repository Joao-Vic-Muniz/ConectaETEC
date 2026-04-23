import { CalendarDays, BookOpen, Map, ArrowDown, Sparkles } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="w-full font-quicksand bg-gradient-to-b from-[#07111f] via-[#0a1628] to-[#07111f] text-white overflow-hidden relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-16 md:py-16 relative"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Enhanced Background Lights */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/25 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "4s" }} />

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl min-h-[50vh] md:min-h-[60vh] gap-8 md:gap-16 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_100px_-15px_rgba(6,182,212,0.3)] border border-cyan-500/20 relative z-10 hover:border-cyan-400/40 transition-all duration-500">
          <div className="flex-1 z-10 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/40 text-cyan-300 text-sm tracking-wider uppercase font-semibold shadow-lg shadow-cyan-500/10">
                  ✨ Conecta ETEC
                </span>
              </div>

              <h1 className="font-fredoka text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-200 to-blue-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Conecta{" "}
                <span 
                  className="text-cyan-400 italic drop-shadow-lg" 
                  style={{ 
                    background: 'none', 
                    WebkitBackgroundClip: 'initial', 
                    WebkitTextFillColor: 'rgb(34 211 238)' 
                  }}
                >
                  ETEC
                </span>
              </h1>
              <div className="h-2 w-20 md:w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] mx-auto md:mx-0"></div>
            </div>

            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-[550px] mx-auto md:mx-0">
              A plataforma feita para aproximar alunos, projetos e oportunidades
              dentro da nossa comunidade tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
              <Link
                to="/explorar"
                className="group inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-fredoka text-base md:text-lg font-bold transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transform hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  Explorar
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-1 z-10 flex justify-center relative mt-8 md:mt-0">
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse"></div>
            <img
              src={Logo}
              alt="Logo"
              className="relative w-full max-w-xs md:max-w-md lg:max-w-lg object-contain animate-float hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-cyan-400/60 text-sm">Scroll para descobrir</span>
          <ArrowDown className="w-5 h-5 text-cyan-400/60" />
        </div>
      </section>

      {/* Explorar */}
      <section id="explorar" className="py-16 md:py-24 relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="absolute top-16 right-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-16 left-16 w-72 h-72 bg-blue-500/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-500/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-fredoka text-4xl md:text-5xl lg:text-6xl text-white font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-300">
              Sobre a plataforma
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Possuímos uma variedade de recursos para ajudar você a se
              conectar, aprender e crescer dentro da ETEC, com informações de
              eventos, matérias e mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Eventos */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:via-blue-500/5 hover:to-purple-500/5 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/30">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500" style={{ zIndex: -1 }} />

              {/* Glow Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" style={{ opacity: 0.05, borderRadius: '1.5rem' }} />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70 group-hover:opacity-100" />

              <div className="relative z-10 space-y-4">
                {/* Icon Circle with Animation */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors shadow-inner">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                  Eventos
                </h3>

                <p className="text-white/65 leading-relaxed text-base font-light group-hover:text-white/80 transition-colors">
                  A ETEC propõe vários eventos ao longo do ano, incluindo
                  Semana Paulo Freire, TechWeek e Hackaton.
                </p>

                {/* Floating Icon on Hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Card Matérias */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:via-blue-500/5 hover:to-purple-500/5 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/30">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500" style={{ zIndex: -1 }} />

              {/* Glow Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" style={{ opacity: 0.05, borderRadius: '1.5rem' }} />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70 group-hover:opacity-100" />

              <div className="relative z-10 space-y-4">
                {/* Icon Circle with Animation */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors shadow-inner">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                  Matérias
                </h3>

                <p className="text-white/65 leading-relaxed text-base font-light group-hover:text-white/80 transition-colors">
                  Conheça as matérias técnicas de cada curso, 
                  vendo alguns destaque sobre elas.
                </p>

                {/* Floating Icon on Hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Card Excursões */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:via-blue-500/5 hover:to-purple-500/5 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/30 md:col-span-2 lg:col-span-1">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500" style={{ zIndex: -1 }} />

              {/* Glow Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" style={{ opacity: 0.05, borderRadius: '1.5rem' }} />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70 group-hover:opacity-100" />

              <div className="relative z-10 space-y-4">
                {/* Icon Circle with Animation */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors shadow-inner">
                    <Map className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                  Visitas Técnicas
                </h3>

                <p className="text-white/65 leading-relaxed text-base font-light group-hover:text-white/80 transition-colors">
                  A ETEC faz várias visitas técnicas ao longo do ano,
                  como por exemplo a BGS e Hopi Hari.
                </p>

                {/* Floating Icon on Hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent);
          background-size: 60px 60px;
        }

        /* Gradient text */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }

        @supports (animation-timeline: view()) {
          .animate-in {
            animation: slideInUp 0.8s ease-out forwards;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
