import { useParams } from "react-router-dom";

const courseData: Record<string, { title: string; description: string }> = {
  "desenvolvimento-de-sistemas": {
    title: "Desenvolvimento de Sistemas",
    description:
      "Página dedicada ao curso de Desenvolvimento de Sistemas com informações gerais sobre a formação.",
  },
  administracao: {
    title: "Administração",
    description:
      "Página dedicada ao curso de Administração com informações gerais sobre a formação.",
  },
  "jogos-digitais": {
    title: "Jogos Digitais",
    description:
      "Página dedicada ao curso de Jogos Digitais com informações gerais sobre a formação.",
  },
  "design-de-interiores": {
    title: "Design de Interiores",
    description:
      "Página dedicada ao curso de Design de Interiores com informações gerais sobre a formação.",
  },
};

export default function CursoDetalhe() {
  const { slug } = useParams();
  const course = slug ? courseData[slug] : null;

  if (!course) {
    return <div className="text-white p-10">Curso não encontrado.</div>;
  }

  return (
    <section className="min-h-screen bg-[#0b1120] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-300 mb-6">
          {course.title}
        </h1>

        <p className="text-white/70 text-lg leading-relaxed">
          {course.description}
        </p>
      </div>
    </section>
  );
}