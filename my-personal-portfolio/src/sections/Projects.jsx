import { useState } from "react";
import RevealOnScroll from "../Ui/RevealOnScroll";

// 🔹 Import des images locales
import projet1 from "../assets/projet1.JPG";
import projet2 from "../assets/projet2.JPG";

function Projects() {
  const projects = [
    {
      name: "Gestion d’Auto-École",
      brief:
        "Application web full stack pour la gestion complète d’une école de conduite : élèves, cours, paiements et planning.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
      image: projet1,
      link: "#",
    },
    {
      name: "Dashboard Agricole",
      brief:
        "Interface interactive dédiée à la visualisation et gestion des données agricoles : parcelles, récoltes, équipements.",
      tech: ["React.js", "Tailwind CSS", "Frontend"],
      image: projet2,
      link: "#",
    },
  ];

  const certifications = [
    {
      title: "Formation MERN Stack – Développeur Web Full Stack",
      issuer: "HardCode, Béja",
      date: "Février – Mai 2024",
      description:
        "Réalisation de projets pratiques en Node.js, Express.js, React.js et MongoDB.",
    },
    {
      title: "Introduction à la Science des Données",
      issuer: "Networking Academy, Cisco",
      date: "Prévu en juillet 2025",
    },
    {
      title: "Entrepreneuriat",
      issuer: "Networking Academy, Cisco",
      date: "Prévu en juillet 2025",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center font-sans justify-center py-20 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Animated Background — Identique à la section Contact */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slower"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
          {/* === PROJETS === */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
            Projets Réalisés
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              .
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/30 text-xs rounded-full border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* === CERTIFICATIONS === */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight">
            Certifications
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              .
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/10 transition-all duration-400"
              >
                {/* Barre latérale colorée */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${
                    index % 2 === 0 ? "bg-purple-400" : "bg-cyan-400"
                  }`}
                ></span>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  {cert.description && (
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Animations personnalisées — identiques à la section Contact */}
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

export default Projects;
