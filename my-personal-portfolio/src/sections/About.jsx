import RevealOnScroll from "../Ui/RevealOnScroll";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSqlite,
  SiLatex,
  SiApache,
} from "react-icons/si";

function About() {
  const skills = [
    { name: "React.js", icon: <FaReact size={20} /> },
    { name: "Node.js", icon: <FaNodeJs size={20} /> },
    { name: "MongoDB", icon: <SiMongodb size={20} /> },
    { name: "Express.js", icon: <SiExpress size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
    { name: "Python", icon: <FaPython size={20} /> },
    { name: "SQL", icon: <SiSqlite size={20} /> },
    { name: "Big Data", icon: <SiApache size={20} /> },
    { name: "Hadoop", icon: <SiApache size={20} /> },
    { name: "Spark", icon: <SiApache size={20} /> },
    { name: "LaTeX", icon: <SiLatex size={20} /> },
    { name: "Git", icon: <FaGitAlt size={20} /> },
  ];

  const languages = [
    {
      name: "Arabe",
      level: "Natif",
      percent: 100,
      color: "from-green-400 via-green-500 to-green-600",
    },
    {
      name: "Français",
      level: "C1",
      percent: 90,
      color: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      name: "Anglais",
      level: "A2",
      percent: 40,
      color: "from-yellow-400 via-yellow-500 to-yellow-600",
    },
    {
      name: "Allemand",
      level: "B2",
      percent: 60,
      color: "from-purple-400 via-purple-500 to-purple-600",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen font-sans py-24 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Animated Background — Cohérent avec Contact & Projects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <RevealOnScroll>
          {/* Titre */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            À propos de moi
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              .
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio + Expériences */}
            <div className="lg:col-span-2 space-y-10">
              {/* Bio */}
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-12 bg-cyan-500 rounded-full animate-pulse"></div>
                  <p className="text-lg text-gray-200 leading-relaxed tracking-wide">
                    Étudiant passionné en <strong>Big Data</strong> et
                    développeur full stack autodidacte, je prépare activement ma
                    candidature à une{" "}
                    <strong className="text-cyan-300">
                      Ausbildung en développement d’applications
                    </strong>{" "}
                    en Allemagne. Grâce à mon expérience pratique avec le{" "}
                    <strong>stack MERN</strong>, mes projets concrets et mon
                    niveau <strong>B2 en allemand</strong>, je suis prêt à
                    m’investir dans un environnement technique structuré et
                    exigeant.
                  </p>
                </div>
              </div>

              {/* Expériences professionnelles */}
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/10 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                  💼 Expériences professionnelles
                </h3>

                <div className="space-y-8 text-gray-300">
                  <div className="border-l-4 border-purple-500 pl-4 hover:bg-white/5 rounded-lg p-2 transition">
                    <h4 className="text-lg font-semibold text-white">
                      Stage PFE – Développeur Web Full Stack
                    </h4>
                    <p className="text-sm text-gray-400">
                      01 Février 2024 — 31 Mai 2024 • HardCode, Béja
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-2">
                      <li>
                        Développement d’une application web complète de gestion
                        d’auto-école avec le stack{" "}
                        <span className="text-purple-300">MERN</span> (MongoDB,
                        Express.js, React.js, Node.js).
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 hover:bg-white/5 rounded-lg p-2 transition">
                    <h4 className="text-lg font-semibold text-white">
                      Stage d’initiation – Département Informatique
                    </h4>
                    <p className="text-sm text-gray-400">
                      01 août 2023 — 31 août 2023 • STEG, Béja
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-2">
                      <li>
                        Support technique et maintenance du parc informatique au
                        sein de l’équipe IT.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-white/5 rounded-lg p-2 transition">
                    <h4 className="text-lg font-semibold text-white">
                      Freelance – Rédaction et mise en page en LaTeX/Overleaf
                    </h4>
                    <p className="text-sm text-gray-400">
                      2023 — Présent • Projets personnels / Missions pour
                      clients
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-2">
                      <li>
                        Création de rapports académiques et techniques
                        professionnels avec{" "}
                        <span className="text-purple-300">LaTeX</span>.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Langues */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  🌍 Langues
                </h3>
                <div className="space-y-5">
                  {languages.map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-gray-400">{lang.level}</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${lang.color}`}
                          style={{ width: `${lang.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formation & Compétences */}
            <div className="space-y-10">
              {/* Formation */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  🎓 Formation
                </h3>
                <ul className="text-gray-300 space-y-3 text-sm">
                  <li>
                    <strong>Mastère Big Data</strong>
                    <br />
                    <span className="text-gray-400">Nabeul (2024–Présent)</span>
                  </li>
                  <li>
                    <strong>Licence Génie Logiciel</strong>
                    <br />
                    <span className="text-gray-400">Béja (2020–2024)</span>
                  </li>
                  <li>
                    <strong>Baccalauréat – Sciences Expérimentales</strong>
                    <br />
                    <span className="text-gray-400">
                      Lycée Ali Belehwene, Béja (2020)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Compétences */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  ⚡ Compétences
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 text-xs rounded-full border border-white/20 text-white shadow-md hover:scale-110 hover:shadow-cyan-400/30 transition-all duration-300"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Animations cohérentes avec les autres sections */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s infinite ease-in-out;
        }
        .animate-pulse-slower {
          animation: pulse-slower 16s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default About;
