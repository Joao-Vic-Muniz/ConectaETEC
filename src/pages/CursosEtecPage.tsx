import { ArrowDown, ArrowRight, Zap, Users, Rocket, Palette } from "lucide-react";

type Course = {
  title: string;
  slug: string;
  intro: string;
  cards: string[];
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
};

const courses: Course[] = [
  {
    title: "Desenvolvimento de Sistemas",
    slug: "desenvolvimento-de-sistemas",
    intro:
      "Uma formação moderna para quem quer criar soluções tecnológicas e atuar no universo digital.",
    cards: [
      "Aprendizado de linguagens de programação",
      "Aprofundamento em conhecimentos da web",
      "Matérias técnicas com atividades teóricas e práticas em laboratórios",
    ],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    accentColor: "cyan",
  },
  {
    title: "Administração",
    slug: "administracao",
    intro:
      "Ideal para quem deseja atuar na organização, planejamento e gestão de empresas.",
    cards: [
      "Aprendizado de rotinas administrativas e financeiras",
      "Matérias de gestão com foco em planejamento estratégico",
      "Simulações empresariais com atividades teóricas e práticas",
    ],
    icon: <Users className="w-6 h-6" />,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "emerald",
  },
  {
    title: "Jogos Digitais",
    slug: "jogos-digitais",
    intro:
      "Perfeito para mentes criativas que querem desenvolver experiências interativas.",
    cards: [
      "Desenvolvimento de mecânicas e narrativas de jogos",
      "Aprofundamento em engines e design de interface",
      "Projetos criativos com atividades práticas em laboratórios",
    ],
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    accentColor: "pink",
  },
  {
    title: "Design de Interiores",
    slug: "design-de-interiores",
    intro:
      "Curso voltado para criação de ambientes funcionais, harmônicos e inovadores.",
    cards: [
      "Criação de projetos de iluminação e ergonomia",
      "Aprofundamento em desenho técnico e modelagem 3D",
      "Estudos de layout com atividades práticas e oficinas de design",
    ],
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    accentColor: "violet",
  },
];

export default function CursosEtecPage() {
  const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const smoothScrollTo = (element: HTMLElement, duration = 1000) => {
    const start = window.pageYOffset;
    const end = element.offsetTop;
    const distance = end - start;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (slug: string) => {
    const section = document.getElementById(slug);
    if (section) smoothScrollTo(section, 1200);
  };

  return (
    <main className="bg-gradient-to-b from-[#07111f] via-[#0a1628] to-[#07111f] text-white overflow-hidden relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Background Lights with Animation */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/25 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-4xl">

          <h1 className="text-6xl md:text-8xl font-black mt-8 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-200 to-blue-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Construa seu futuro com uma formação que conecta você ao mercado
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Descubra cursos modernos, alinhados às demandas profissionais e pensados
            para transformar conhecimento em oportunidades reais.
          </p>

          <button
            onClick={() => scrollToSection(courses[0].slug)}
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Explorar cursos
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform " />
          </button>
        </div>

      </section>

      {/* COURSES */}
      {courses.map((course, index) => (
        <section
          key={course.slug}
          id={course.slug}
          className="relative min-h-screen w-full flex items-center px-6 md:px-12 py-24 overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
            <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${course.gradient} rounded-full blur-[140px] opacity-15 animate-float`} />
            <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br ${course.gradient} rounded-full blur-[140px] opacity-10 animate-float`} style={{ animationDelay: "3s" }} />
          </div>

          {/* Course Number Background */}
          <div className="absolute top-10 right-10 text-8xl font-black text-white/5 select-none">
            0{index + 1}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className={`text-sm uppercase tracking-[0.3em] font-bold block mb-4 ${course.accentColor === 'cyan' ? 'text-cyan-400' : course.accentColor === 'emerald' ? 'text-emerald-400' : course.accentColor === 'pink' ? 'text-pink-400' : 'text-violet-400'}`}>
                  ↪ Curso {index + 1}
                </span>

                <h2 className={`text-5xl md:text-7xl font-black leading-tight bg-clip-text text-transparent mb-6 w-2xl ${course.accentColor === 'cyan' ? 'bg-gradient-to-b from-white to-cyan-300' : course.accentColor === 'emerald' ? 'bg-gradient-to-b from-white to-emerald-300' : course.accentColor === 'pink' ? 'bg-gradient-to-b from-white to-pink-300' : 'bg-gradient-to-b from-white to-violet-300'}`}>
                  {course.title}
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl font-light">
                  {course.intro}
                </p>
              </div>

              {index < courses.length - 1 && (
                <button
                  onClick={() => scrollToSection(courses[index + 1].slug)}
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-500 backdrop-blur-md font-semibold shadow-lg hover:shadow-cyan-500/20"
                >
                  Próximo curso
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* Right Cards */}
            <div className="grid gap-6">
              {course.cards.map((card, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-3 cursor-pointer shadow-2xl ${course.accentColor === 'cyan' ? 'hover:shadow-cyan-500/30 border-cyan-500/50' : course.accentColor === 'emerald' ? 'hover:shadow-emerald-500/30 border-emerald-500/50' : course.accentColor === 'pink' ? 'hover:shadow-pink-500/30 border-pink-500/50' : 'hover:shadow-violet-500/30 border-violet-500/50'}`}
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                    borderWidth: '1px',
                  }}
                >
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[1px] bg-gradient-to-br ${course.gradient}`} style={{ zIndex: -1 }} />

                  {/* Glow Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${course.gradient}`} style={{ opacity: 0.05, borderRadius: '1.5rem' }} />

                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${course.gradient} opacity-70 group-hover:opacity-100`} />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon Circle with Animation */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} p-0.5`}>
                      <div className={`w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center group-hover:text-white transition-colors shadow-inner ${course.accentColor === 'cyan' ? 'text-cyan-300' : course.accentColor === 'emerald' ? 'text-emerald-300' : course.accentColor === 'pink' ? 'text-pink-300' : 'text-violet-300'}`}>
                        {course.cards.indexOf(card) + 1}
                      </div>
                    </div>

                    <p className="text-white/65 leading-relaxed text-base font-light group-hover:text-white/80 transition-colors">
                      {card}
                    </p>

                    {/* Floating Icon on Hover */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

    </main>
  );
}