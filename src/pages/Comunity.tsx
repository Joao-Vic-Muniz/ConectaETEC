import { useState } from 'react';
import { ShieldCheck, Users, HeartHandshake, Sparkles, TrendingUp, Award, Lightbulb, Target, Brain, Heart, MessageCircle, BookOpen } from 'lucide-react';
import ChatAI from '../components/ChatAI';

const faqs = [
  {
    question: 'O que é evasão escolar e por que acontece?',
    answer:
      'Evasão escolar é o abandono precoce dos estudos por parte de alunos. Ela ocorre por motivos financeiros, falta de conexão com a escola, insuficiência de apoio familiar ou dificuldades acadêmicas.',
  },
  {
    question: 'Como a comunidade pode ajudar a reduzir a evasão?',
    answer:
      'Ao criar um ambiente acolhedor, oferecer mentorias, divulgar oportunidades e promover apoio emocional, a comunidade fortalece o vínculo do aluno com a escola.',
  },
  {
    question: 'Quais sinais avisam que um aluno corre risco?',
    answer:
      'Faltas frequentes, queda no rendimento, isolamento social e desmotivação são sinais importantes de que o aluno pode precisar de ajuda extra.',
  },
  {
    question: 'Quais são as ações mais efetivas?',
    answer:
      'Programas de mentoria, acolhimento inicial, atividades extracurriculares, suporte psicológico e integração social são as mais eficazes.',
  },
];

const stats = [
  { label: 'Redução de Evasão', value: '34%', icon: TrendingUp, color: 'from-primary to-primary-light' },
  { label: 'Engajamento', value: '+58%', icon: Award, color: 'from-emerald-500 to-teal-500' },
  { label: 'Projetos Ativos', value: '12', icon: Lightbulb, color: 'from-amber-500 to-orange-500' },
  { label: 'Alunos Impactados', value: '240+', icon: Target, color: 'from-rose-500 to-pink-500' },
];

const initiatives = [
  {
    title: 'Mentoria Entre Alunos',
    description: 'Uma conexão entre alunos mais novos e alunos mais experientes para resolver as dúvidas e também fazer um ambiente mais acolhedor.',
    icon: Users,
  },
  {
    title: 'Grupos de Apoio',
    description: 'Um ambiente onde as pessoas podem se comunicar com outras pessoas, sem se sentirem inseguras.',
    icon: HeartHandshake,
  },
  {
    title: 'Atividades de Lazer',
    description: 'Atividades permitidas pela administração para lazer dos alunos, como por exemplo a integração e a festa junina.',
    icon: Sparkles,
  },
];

export default function Comunity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-bg text-white font-quicksand">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-16 md:py-16">
        {/* Background effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/3 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-screen-2xl mx-auto w-full relative z-10 space-y-8">
          <div className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary animate-fade-in">
              <ShieldCheck size={18} />
              Comunidade ETEC
            </span>
            <h1 className="font-fredoka text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
              Juntos contra a <span className="text-primary-light">evasão escolar</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Conheça como planejamos criar um ambiente acolhedor e de apoio para nossos alunos, fortalecendo a comunidade e garantindo que ninguém fique para trás.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-fredoka font-bold transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95">
              Participe Agora
              <Sparkles size={20} />
            </button>
          </div>

          {/* Stats Grid */}
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
                      <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-white/80 mt-1">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Iniciativas */}
      <section className=" relative px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold">Nossas Iniciativas</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Programas e ações que fazem a diferença no nosso dia a dia.</p>
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
                    <h3 className="font-fredoka text-2xl font-bold text-white">{initiative.title}</h3>
                    <p className="text-white/70 leading-relaxed">{initiative.description}</p>
                    <div className="pt-4 border-t border-white/10">
                      <a href="#" className="text-primary-light hover:text-primary font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                        Saiba mais →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impacto Visual */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-primary-dark/40 to-primary/10 border border-white/10 backdrop-blur-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-fredoka text-4xl md:text-5xl font-bold">Por que nossa comunidade importa</h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Cada aluno que se sente incluído, acolhido e apoiado tem muito mais chances de sucesso, além de contribuir para uma convivência melhor tanto entre alunos e também professores e profissionais da escola.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {['Conversas', 'Brincadeiras', 'Atividades em grupos'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-primary-light group-hover:scale-150 transition-transform"></div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { num: '240+', label: 'Alunos apoiados' },
                  { num: '95%', label: 'Taxa de permanência' },
                  { num: '3+', label: 'Projetos em andamento' },
                ].map((item, i) => (
                  <div key={i} className="group flex items-end gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-primary-light font-fredoka group-hover:text-primary transition-colors">{item.num}</div>
                    <div className="text-white/70 text-lg">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-light/3 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-primary uppercase tracking-widest font-semibold">Dúvidas Frequentes</p>
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold">Perguntas sobre evasão escolar</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Encontre respostas sobre como podemos agir juntos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="group w-full text-left"
              >
                <div className={`rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden ${openFaq === index ? 'bg-white/10' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <h3 className="font-fredoka font-semibold text-lg text-white pr-4">{faq.question}</h3>
                    <span className={`text-primary text-2xl font-light flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>

                  {openFaq === index && (
                    <div className="mt-4 pt-4 border-t border-white/10 relative z-10 overflow-hidden">
                      <div className="animate-faq-open">
                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Saúde Mental e Psicologia */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute -right-20 bottom-1/2 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-2 text-sm font-semibold text-purple-400 animate-fade-in">
              <Brain size={18} />
              Saúde Mental
            </span>
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold">A importância do apoio psicológico</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A saúde mental é fundamental para o sucesso acadêmico. Entendemos que cada aluno enfrenta desafios únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm p-8 hover:bg-purple-500/10 transition-all duration-300">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors duration-300"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                  <Heart size={32} className="text-purple-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">Por que buscar ajuda?</h3>
                <p className="text-white/70 leading-relaxed">
                  Muitos alunos enfrentam ansiedade, estresse, depressão ou outros desafios emocionais que podem impactar diretamente no desempenho escolar e na qualidade de vida.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-8 hover:bg-pink-500/10 transition-all duration-300">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-colors duration-300"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-500/20 group-hover:bg-pink-500/30 transition-all duration-300 group-hover:scale-110">
                  <MessageCircle size={32} className="text-pink-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">Conversa confidencial</h3>
                <p className="text-white/70 leading-relaxed">
                  Aqui você pode conversar abertamente sobre seus sentimentos. Nosso ambiente é seguro, sem julgamentos, onde sua voz é importante e suas preocupações são ouvidas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm p-8 hover:bg-blue-500/10 transition-all duration-300 md:lg:col-span-2">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-300"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <BookOpen size={32} className="text-blue-400" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">Recursos disponíveis</h3>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <p className="text-white/80 text-sm">Atendimento com psicólogos especializados</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <p className="text-white/80 text-sm">Grupos de apoio entre alunos</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <p className="text-white/80 text-sm">Técnicas de gerenciamento de estresse</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <p className="text-white/80 text-sm">Acompanhamento individualizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem especial */}
          <div className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Heart size={40} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left space-y-4">
                <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-white">Você não está sozinho</h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                  Se você está passando por um momento difícil, sabe que pode contar com a gente. 
                  Conversar sobre o que sente é um sinal de força, não de fraqueza. 
                  <span className="text-purple-400 font-semibold">Estamos aqui para ouvir você.</span>
                </p>
              </div>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 rounded-full font-fredoka font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95"
              >
                Quer conversar?
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes faq-open {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes faq-close {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-faq-open {
          animation: faq-open 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
