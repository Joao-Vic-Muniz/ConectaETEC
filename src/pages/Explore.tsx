import { Search, Code, Briefcase, Award, Zap, Globe, Users, X, Plus } from "lucide-react";
import { useState } from "react";

const catConfig = {
  desenvolvimento: {
    label: "Desenvolvimento de Sistemas",
    icon: Code,
    badge: "bg-sky-500/10 text-sky-400 border border-sky-500/25",
    emoji: "💻",
  },
  design: {
    label: "Design de Interiores",
    icon: Award,
    badge: "bg-pink-500/10 text-pink-400 border border-pink-500/25",
    emoji: "🛋️",
  },
  administracao: {
    label: "Administração",
    icon: Briefcase,
    badge: "bg-amber-500/10 text-amber-400 border border-amber-500/25",
    emoji: "📊",
  },
  jogos: {
    label: "Jogos Digitais",
    icon: Zap,
    badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
    emoji: "🎮",
  },
};

const projects = [
  {
    id: 1,
    title: "Sistema de Controle de Notas",
    category: "desenvolvimento",
    description: "Sistema web para cadastro de alunos, professores e lançamento de notas escolares",
    members: 4,
    views: 980,
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    id: 2,
    title: "Aplicativo de Agenda Escolar",
    category: "desenvolvimento",
    description: "App para organização de horários, tarefas e atividades dos alunos",
    members: 3,
    views: 760,
    tags: ["Flutter", "Firebase"],
  },
  {
    id: 3,
    title: "Projeto de Sala Sustentável",
    category: "design",
    description: "Planejamento de ambiente escolar com foco em sustentabilidade e conforto",
    members: 5,
    views: 540,
    tags: ["AutoCAD", "SketchUp", "Sustentabilidade"],
  },
  {
    id: 4,
    title: "Reforma de Espaço Comercial",
    category: "design",
    description: "Projeto completo de redesign de loja com identidade visual moderna",
    members: 4,
    views: 620,
    tags: ["Layout", "Decoração", "3D"],
  },
  {
    id: 5,
    title: "Plano de Negócio Escolar",
    category: "administracao",
    description: "Desenvolvimento de um plano de negócio para uma empresa fictícia",
    members: 6,
    views: 1100,
    tags: ["Empreendedorismo", "Gestão", "Financeiro"],
  },
  {
    id: 6,
    title: "Simulação de Empresa",
    category: "administracao",
    description: "Projeto prático de gestão empresarial com tomada de decisões estratégicas",
    members: 5,
    views: 870,
    tags: ["Administração", "Planejamento", "Equipe"],
  },
  {
    id: 7,
    title: "Jogo 2D Plataforma",
    category: "jogos",
    description: "Jogo estilo plataforma com fases progressivas e desafios",
    members: 3,
    views: 1300,
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    id: 8,
    title: "Jogo Educativo",
    category: "jogos",
    description: "Jogo interativo voltado para ensino de matemática básica",
    members: 4,
    views: 950,
    tags: ["Construct", "Educação", "Gamificação"],
  }
];

const stats = [
  { icon: Code,  label: "Projetos",     value: "48"  },
  { icon: Users, label: "Membros",      value: "100" },
  { icon: Award, label: "Cursos",       value: "4"  },
  { icon: Zap,   label: "Atualizações", value: "152" },
];

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((p) => {
    const matchesCat = !selectedCategory || p.category === selectedCategory;
    const s = searchTerm.toLowerCase();
    const matchesSearch =
      !s ||
      p.title.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.tags.some((t) => t.toLowerCase().includes(s));
    return matchesCat && matchesSearch;
  });

  const clearAll = () => {
    setSelectedCategory(null);
    setSearchTerm("");
  };

  return (
    <div className="w-full font-quicksand bg-bg min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-14 px-6 overflow-hidden">
        {/* Orbs */}
        <div className="pointer-events-none absolute top-12 right-[-80px] w-80 h-80 rounded-full bg-primary/15 blur-[90px] animate-pulse" />
        <div
          className="pointer-events-none absolute top-40 right-20 w-52 h-52 rounded-full bg-primary-light/10 blur-[70px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary-light text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-action-teal animate-pulse" />
            Plataforma de projetos &amp; oportunidades
          </div>

          <h1
            className="font-fredoka font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Explore{" "}
            <span className="bg-gradient-to-r from-primary-light via-accent to-action-teal bg-clip-text text-transparent">
              Oportunidades
            </span>
          </h1>

          <p
            className="mt-4 text-base md:text-lg text-white/55 max-w-xl leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Encontre projetos incríveis, oportunidades de aprendizado e conecte-se com a comunidade da sua ETEC.
          </p>
        </div>
      </section>

      {/* ── STICKY SEARCH + FILTERS ── */}
<div className=" top-[72px] z-30 bg-bg/95 backdrop-blur-md border-b border-white/[0.06] shadow-sm">
  <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col gap-3">

    {/* Search */}
    <div className="relative flex items-center">
      <Search className="absolute left-4 w-4 h-4 text-primary pointer-events-none" />

      <input
        type="text"
        placeholder="Buscar projetos, tecnologias, oportunidades..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white/[0.05] border border-white/10 rounded-2xl pl-11 pr-10 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all duration-200"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 text-white/30 hover:text-primary-light transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>

    {/* Chips */}
    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-fredoka text-sm font-semibold whitespace-nowrap border transition-all duration-200 ${
          !selectedCategory
            ? "bg-gradient-to-r from-primary to-primary-light border-transparent text-white shadow-lg shadow-primary/30"
            : "bg-white/[0.05] border-white/10 text-white/50 hover:border-primary/40 hover:text-white hover:bg-white/[0.08]"
        }`}
      >
        Todos
      </button>

      {(Object.entries(catConfig) as [string, typeof catConfig[keyof typeof catConfig]][]).map(([id, cfg]) => {
        const Icon = cfg.icon;
        const active = selectedCategory === id;

        return (
          <button
            key={id}
            onClick={() => setSelectedCategory(active ? null : id)}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-fredoka text-sm font-semibold whitespace-nowrap border transition-all duration-200 ${
              active
                ? "bg-gradient-to-r from-primary to-primary-light border-transparent text-white shadow-lg shadow-primary/30"
                : "bg-white/[0.05] border-white/10 text-white/50 hover:border-primary/40 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {cfg.label}
          </button>
        );
      })}
    </div>
  </div>
</div>

      {/* ── META ROW ── */}
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        <p className="text-sm text-white/45">
          <span className="text-primary-light font-semibold">{filteredProjects.length}</span>{" "}
          resultado{filteredProjects.length !== 1 ? "s" : ""}
          {selectedCategory && (
            <> em <span className="text-primary-light">{catConfig[selectedCategory as keyof typeof catConfig]?.label}</span></>
          )}
          {searchTerm && (
            <> para "<span className="text-primary-light">{searchTerm}</span>"</>
          )}
        </p>
        {(selectedCategory || searchTerm) && (
          <button
            onClick={clearAll}
            className="text-xs text-primary hover:text-primary-light font-semibold transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* ── CARDS GRID ── */}
      <section className="max-w-screen-xl mx-auto px-6 pb-16">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, i) => {
              const cfg = catConfig[project.category as keyof typeof catConfig];
              return (
                <div
                  key={project.id}
                  className="group relative flex flex-col gap-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-light/0 group-hover:from-primary/[0.06] group-hover:to-accent/[0.04] rounded-2xl transition-all duration-300" />

                  {/* Top: badge */}
                  <div className="relative z-10">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-fredoka font-bold uppercase tracking-wide ${cfg.badge}`}>
                      {cfg.emoji} {cfg.label}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="relative z-10 flex flex-col gap-1.5">
                    <h3 className="font-fredoka font-bold text-xl text-white leading-snug group-hover:text-primary-light transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/45 group-hover:border-primary/30 group-hover:text-primary-light/80 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 mt-auto pt-4 border-t border-white/[0.07] flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-white/40">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        <span className="font-semibold text-white/70">{project.members}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/40">
                        <Globe className="w-3.5 h-3.5 text-primary" />
                        <span className="font-semibold text-white/70">{project.views.toLocaleString("pt-BR")}</span>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-fredoka font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 group-hover:from-primary-light group-hover:to-accent">
                      Ver Mais
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <Search className="w-7 h-7 text-primary/50" />
            </div>
            <h3 className="font-fredoka font-bold text-3xl text-white mb-2">Nenhum resultado</h3>
            <p className="text-white/45 text-base font-light max-w-xs">
              Tente outros filtros ou palavras-chave
            </p>
          </div>
        )}
      </section>

      {/* ── STATS STRIP ── */}
      <section className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/15 hover:bg-white/[0.07] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                <div className="inline-flex p-2.5 rounded-xl bg-primary/12 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-primary-light" />
                </div>
                <p className="text-xs text-white/45 mb-1 font-medium">{stat.label}</p>
                <p className="font-fredoka font-bold text-3xl bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}