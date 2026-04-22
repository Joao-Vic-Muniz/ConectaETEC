import Logo from '../assets/Logo.png'

export default function Home() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-bg font-quicksand overflow-hidden">
      
      {/* Ajuste na cor do card: de bg-bg-soft/30 para um mix mais escuro e elegante */}
      <div className="flex flex-row items-center justify-between w-full max-w-screen-2xl min-h-[50vh] gap-16 bg-primary-dark/20 backdrop-blur-3xl p-16 rounded-[2.5rem] shadow-[0_25px_100px_-15px_rgba(0,0,0,0.8)] border border-white/5 relative">
        
        <div className="flex-[1.2] z-10 space-y-8">
          <div className="space-y-3">
            {/* Fonte principal reduzida de text-9xl para text-7xl/8xl */}
            <h1 className="font-fredoka text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight tracking-tighter">
              Conecta <span className="text-primary-light italic drop-shadow-lg">ETEC</span>
            </h1>
            <div className="h-1.5 w-20 bg-action-teal rounded-full"></div>
          </div>
          
          <p className="text-xl text-white/80 font-medium leading-relaxed max-w-[550px]">
            A plataforma feita para aproximar alunos, projetos e oportunidades dentro da nossa comunidade tecnológica.
          </p>

          <div className="flex flex-row gap-6">
            <button className="bg-action-teal text-white px-10 py-3 rounded-full font-fredoka text-lg font-bold hover:scale-105 transition-transform cursor-pointer">
              Explorar
            </button>
            <button className="bg-transparent text-action-green border-2 border-action-green/50 px-10 py-3 rounded-full font-fredoka text-lg font-bold hover:bg-action-green hover:text-white hover:scale-105 transition-all cursor-pointer">
              Contato
            </button>
          </div>
        </div>

        <div className="flex-1 z-10 flex justify-center relative">
          {/* Aura de destaque atrás da logo */}
          <div className="absolute w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full"></div>
          <img 
            src={Logo} 
            alt="Logo" 
            className="relative w-full max-w-md lg:max-w-lg object-contain animate-float"
          />
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  )
}