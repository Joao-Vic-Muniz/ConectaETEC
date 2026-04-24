import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Award,
  Lightbulb,
  Target,
  Brain,
  Heart,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import ChatAI from "../components/ChatAI";

const stats = [
  {
    label: "Redução de Evasão",
    value: "34%",
    icon: TrendingUp,
    color: "from-primary to-primary-light",
  },
  {
    label: "Engajamento",
    value: "+58%",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Projetos Ativos",
    value: "12",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    label: "Alunos Impactados",
    value: "240+",
    icon: Target,
    color: "from-rose-500 to-pink-500",
  },
];

const initiatives = [
  {
    title: "Mentoria Entre Alunos",
    description:
      "Uma conexão entre alunos mais novos e alunos mais experientes para resolver dúvidas e criar um ambiente mais acolhedor.",
    icon: Users,
  },
  {
    title: "Grupos de Apoio",
    description:
      "Um ambiente onde as pessoas podem se comunicar com outras pessoas sem se sentirem inseguras.",
    icon: HeartHandshake,
  },
  {
    title: "Atividades de Lazer",
    description:
      "Atividades permitidas pela administração para lazer dos alunos, como integração e festa junina.",
    icon: Sparkles,
  },
];

export default function Comunity() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser);
  }, []);

  const handleChatOpen = () => {
    if (!isLoggedIn) {
      window.location.href = "/auth";
      return;
    }
    setIsChatOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-bg text-white font-quicksand">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-16 md:py-16 animate-section">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 blur-3xl rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/3 blur-3xl rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-screen-2xl mx-auto w-full relative z-10 space-y-8">
          <div className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary animate-fade-in">
              <ShieldCheck size={18} />
              Comunidade ETEC
            </span>
            <h1 className="font-fredoka text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
              Juntos contra a{" "}
              <span className="text-primary-light">evasão escolar</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Conheça como planejamos criar um ambiente acolhedor e de apoio
              para nossos alunos, fortalecendo a comunidade e garantindo que
              ninguém fique para trás.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-fredoka font-bold transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95">
              Participe Agora
              <Sparkles size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${stat.color} p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-default`}
                  style={{
                    opacity: 0.9,
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative z-10 space-y-3">
                    <Icon size={28} className="text-white/80" />
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/80 mt-1">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 animate-section">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold">
              Nossas Iniciativas
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Programas e ações que fazem a diferença no nosso dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-300"></div>

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                      <Icon size={32} className="text-primary-light" />
                    </div>
                    <h3 className="font-fredoka text-2xl font-bold text-white">
                      {initiative.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 relative overflow-hidden animate-section">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute -right-20 bottom-1/2 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-2 text-sm font-semibold text-purple-400 animate-fade-in">
              <Brain size={18} />
              Saúde Mental
            </span>
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold">
              A importância do apoio psicológico
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A saúde mental é fundamental para o sucesso acadêmico. Entendemos
              que cada aluno enfrenta desafios únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="group relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm p-8 hover:bg-purple-500/10 transition-all duration-300 w-full max-w-sm text-center">
              <div className="relative z-10 space-y-4 flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/20">
                  <Heart size={32} className="text-purple-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">
                  Por que buscar ajuda?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Muitos alunos enfrentam ansiedade, estresse, depressão ou
                  outros desafios emocionais que podem impactar diretamente no
                  desempenho escolar.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-8 hover:bg-pink-500/10 transition-all duration-300 w-full max-w-sm text-center">
              <div className="relative z-10 space-y-4 flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-500/20">
                  <MessageCircle size={32} className="text-pink-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">
                  Conversa confidencial
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Aqui você pode conversar abertamente sobre seus sentimentos em
                  um ambiente seguro, sem julgamentos.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm p-8 hover:bg-blue-500/10 transition-all duration-300 w-full max-w-sm text-center md:col-span-2 lg:col-span-1">
              <div className="relative z-10 space-y-4 flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20">
                  <BookOpen size={32} className="text-blue-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">
                  Recursos disponíveis
                </h3>
                <div className="space-y-3 pt-2 text-left w-full">
                  {[
                    "Atendimento com psicólogos especializados",
                    "Grupos de apoio entre alunos",
                    "Técnicas de gerenciamento de estresse",
                    "Acompanhamento individualizado",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-white/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Heart size={40} className="text-white" />
              </div>

              <div className="space-y-4">
                <h3 className="font-fredoka text-2xl md:text-4xl font-bold text-white">
                  Você não está sozinho
                </h3>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  Se você está passando por um momento difícil, saiba que pode
                  contar com a gente. Conversar sobre o que sente é um sinal de
                  força, não de fraqueza.
                  <br />
                  <span className="text-purple-400 font-semibold">
                    Estamos aqui para ouvir você.
                  </span>
                </p>
              </div>

              <button
                onClick={handleChatOpen}
                className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-10 py-4 rounded-full font-fredoka font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95 hover:scale-105"
              >
                {isLoggedIn ? "Quer conversar?" : "Faça login para conversar"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 relative overflow-hidden animate-fade-up animate-section">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary-light/10 blur-3xl rounded-full"></div>

        <div className="max-w-screen-2xl mx-auto relative z-10 space-y-20">
          <div className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/10">
              <HeartHandshake size={18} />
              Apoio ao Estudante
            </span>

            <h2 className="font-fredoka text-4xl md:text-6xl font-bold leading-tight">
              Seu futuro merece{" "}
              <span className="text-primary-light">mais uma chance</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Sabemos que continuar estudando nem sempre é fácil. Problemas
              emocionais, familiares, financeiros e acadêmicos podem fazer
              parecer impossível seguir em frente.
              <span className="text-white font-medium">
                {" "}
                Mas você não está sozinho nessa caminhada.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ansiedade e Pressão",
                text: "A pressão por resultados pode ser sufocante, mas pedir ajuda é o primeiro passo para recuperar sua força e continuar.",
                icon: Brain,
              },
              {
                title: "Problemas Familiares",
                text: "Dificuldades em casa afetam o rendimento, mas apoio e acolhimento podem ajudar você a permanecer firme.",
                icon: Heart,
              },
              {
                title: "Desmotivação",
                text: "Quando parece que nada vale a pena, lembrar dos seus sonhos pode reacender sua vontade de continuar.",
                icon: Target,
              },
              {
                title: "Solidão",
                text: "Sentir-se sozinho é doloroso, mas criar conexões dentro da escola pode transformar sua jornada.",
                icon: Users,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-black/10 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={30} className="text-primary-light" />
                    </div>

                    <h3 className="font-fredoka text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 p-10 md:p-16 text-center shadow-2xl shadow-primary/10 animate-fade-up">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]"></div>

            <div className="relative z-10 space-y-6">
              <h3 className="font-fredoka text-3xl md:text-5xl font-bold text-white leading-tight">
                Não desista agora
              </h3>

              <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
                A evasão escolar pode parecer uma saída nos momentos difíceis,
                mas continuar estudando é investir no seu futuro. Cada aula
                assistida, cada esforço feito e cada obstáculo vencido aproxima
                você de uma vida com mais oportunidades.
              </p>

              <p className="text-primary-light font-semibold text-xl md:text-2xl">
                Você é mais forte do que imagina.
              </p>

              <button
                onClick={handleChatOpen}
                className="mt-4 bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-fredoka font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/30"
              >
                {isLoggedIn
                  ? "Quero apoio agora"
                  : "Faça login para buscar apoio"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <ChatAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <style>{`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sectionReveal {
    from {
      opacity: 0;
      transform: translateY(50px);
      filter: blur(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
  }

  .animate-section {
    opacity: 0;
    animation: sectionReveal 1s ease-out forwards;
  }

  .animate-section:nth-of-type(1) {
    animation-delay: 0.1s;
  }

  .animate-section:nth-of-type(2) {
    animation-delay: 0.3s;
  }

  .animate-section:nth-of-type(3) {
    animation-delay: 0.5s;
  }

  .animate-section:nth-of-type(4) {
    animation-delay: 0.7s;
  }
`}</style>
    </main>
  );
}
