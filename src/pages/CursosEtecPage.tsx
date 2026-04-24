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
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

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
      {/* BG */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/15 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 md:w-80 h-72 md:h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-0 right-1/3 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-[130px] animate-pulse delay-1000" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-8 md:px-10 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-200 to-blue-400">
            Construa seu futuro com uma formação que conecta você ao mercado
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Descubra cursos modernos, alinhados às demandas profissionais e
            pensados para transformar conhecimento em oportunidades reais.
          </p>

          <button
            onClick={() => scrollToSection(courses[0].slug)}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold shadow-lg shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            Explorar cursos
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* CURSOS */}
      {courses.map((course, index) => (
        <section
          key={course.slug}
          id={course.slug}
          className="relative min-h-screen w-full flex items-center px-5 sm:px-8 md:px-12 py-20 md:py-24 overflow-hidden"
        >
          {/* BG */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

            <div
              className={`absolute -top-32 -right-32 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br ${course.gradient} rounded-full blur-[130px] opacity-15`}
            />

            <div
              className={`absolute -bottom-32 -left-32 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br ${course.gradient} rounded-full blur-[130px] opacity-10`}
            />
          </div>

          {/* NÚMERO FUNDO */}
          <div className="absolute top-8 right-5 md:right-10 text-[90px] sm:text-[130px] md:text-[220px] font-black text-white/5 select-none leading-none">
            0{index + 1}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <span
                  className={`text-xs sm:text-sm uppercase tracking-[0.25em] font-bold block mb-4 ${
                    course.accentColor === "cyan"
                      ? "text-cyan-400"
                      : course.accentColor === "emerald"
                      ? "text-emerald-400"
                      : course.accentColor === "pink"
                      ? "text-pink-400"
                      : "text-violet-400"
                  }`}
                >
                  ↪ Curso {index + 1}
                </span>

                <h2
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-clip-text text-transparent mb-6 max-w-full break-words ${
                    course.accentColor === "cyan"
                      ? "bg-gradient-to-b from-white to-cyan-300"
                      : course.accentColor === "emerald"
                      ? "bg-gradient-to-b from-white to-emerald-300"
                      : course.accentColor === "pink"
                      ? "bg-gradient-to-b from-white to-pink-300"
                      : "bg-gradient-to-b from-white to-violet-300"
                  }`}
                >
                  {course.title}
                </h2>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {course.intro}
                </p>
              </div>

              {index < courses.length - 1 && (
                <button
                  onClick={() => scrollToSection(courses[index + 1].slug)}
                  className="group w-full sm:w-fit inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl bg-white/10 border border-white/20 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
                >
                  Próximo curso
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* RIGHT */}
            <div className="grid gap-5 sm:gap-6">
              {course.cards.map((card, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 ${
                    course.accentColor === "cyan"
                      ? "border-cyan-500/40 hover:shadow-cyan-500/20"
                      : course.accentColor === "emerald"
                      ? "border-emerald-500/40 hover:shadow-emerald-500/20"
                      : course.accentColor === "pink"
                      ? "border-pink-500/40 hover:shadow-pink-500/20"
                      : "border-violet-500/40 hover:shadow-violet-500/20"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${course.gradient}`}
                  />

                  <div className="space-y-4 relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${course.gradient} p-[1px]`}
                    >
                      <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </div>
                    </div>

                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {card}
                    </p>
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