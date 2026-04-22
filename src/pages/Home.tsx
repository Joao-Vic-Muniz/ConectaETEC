import Logo from '../assets/Logo.png'

export default function Home() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-bg font-quicksand overflow-hidden px-6">
      
      {/* Card Principal */}
      <div className="flex flex-row items-center justify-between w-full max-w-screen-2xl min-h-[60vh] gap-16 bg-primary-dark/20 backdrop-blur-3xl p-16 rounded-[2.5rem] shadow-[0_25px_100px_-15px_rgba(0,0,0,0.8)] border border-white/5 relative">
        
        {/* Lado Esquerdo: Texto e Ações */}
        <div className="flex-[1.2] z-10 space-y-8">
          <div className="space-y-3">
            <h1 className="font-fredoka text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight tracking-tighter">
              Conecta <span className="text-primary-light italic drop-shadow-lg">ETEC</span>
            </h1>
            {/* Trocado verde por azul de destaque */}
            <div className="h-1.5 w-20 bg-primary-light rounded-full shadow-[0_0_15px_rgba(95,163,228,0.5)]"></div>
          </div>
          
          <p className="text-xl text-white/80 font-medium leading-relaxed max-w-[550px]">
            A plataforma feita para aproximar alunos, projetos e oportunidades dentro da nossa comunidade tecnológica.
          </p>

          <div className="flex flex-row gap-6">
            {/* Botão Explorar - Agora combinando com o tema azul */}
            <button className="bg-primary hover:bg-primary-light text-white px-12 py-4 rounded-full font-fredoka text-lg font-bold transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer active:scale-95">
              Explorar
            </button>
            
            {/* Botão Secundário opcional caso queira equilíbrio */}
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-12 py-4 rounded-full font-fredoka text-lg font-bold transition-all duration-300 cursor-pointer">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Lado Direito: Logo e Aura */}
        <div className="flex-1 z-10 flex justify-center relative">
          {/* Aura de destaque aumentada para combinar com o azul */}
          <div className="absolute w-[100%] h-[100%] bg-primary-light/10 blur-[120px] rounded-full animate-pulse"></div>
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
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  )
}