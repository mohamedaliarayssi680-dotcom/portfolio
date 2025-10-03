import { useEffect, useState, useRef } from "react";
import pho1 from "../assets/pho1.png";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

function Home() {
  const fullName = "Mohamed Ali Araissi";
  const [displayedName, setDisplayedName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Particules interactives (léger effet au survol)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const particles = sectionRef.current.querySelectorAll(".particle");
      particles.forEach((p) => {
        const rect = p.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 250) {
          const force = (250 - distance) / 250;
          p.style.transform = `translate(${dx * 0.015 * force}px, ${
            dy * 0.015 * force
          }px)`;
          p.style.opacity = `${0.3 + force * 0.5}`;
        } else {
          p.style.transform = "translate(0, 0)";
          p.style.opacity = "0.25";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-10 lg:gap-16 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Animated Background — Cohérent avec le reste du site */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light opacity-15 blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Particules flottantes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1.5 h-1.5 rounded-full bg-cyan-300 opacity-25 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 12}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Photo profil — avec halo dynamique */}
      <div className="text-center z-10 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 animate-pulse-slow"></div>
        <img
          src={pho1}
          alt="Mohamed Ali Araissi"
          className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-white/20 shadow-2xl shadow-cyan-500/30 transition-all duration-700 hover:scale-105 hover:rotate-2"
        />
      </div>

      {/* Texte principal */}
      <div className="text-center lg:text-left max-w-2xl z-10 space-y-7">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
          {displayedName}
          <span
            className={`ml-1 inline-block w-1.5 h-14 bg-cyan-400 align-middle ${
              isLoaded ? "opacity-0" : "opacity-100"
            } animate-pulse`}
          ></span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0">
          Étudiant en <strong className="text-cyan-300">Big Data</strong> et
          développeur web passionné, je construis des solutions avec le{" "}
          <strong className="text-purple-300">stack MERN</strong>, explore les
          outils de <strong className="text-indigo-300">data science</strong>,
          et prépare activement mon avenir en Allemagne 🇩🇪.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-6">
          <a
            href="#contact"
            className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 py-3.5 px-8 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <span className="relative z-10">Contactez-moi</span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <a
            href={resume}
            download
            className="group bg-white/5 backdrop-blur-md py-3.5 px-8 rounded-xl font-medium text-gray-200 border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <span>Télécharger CV</span>
            <FiDownload className="text-lg text-cyan-300 group-hover:text-purple-300 transition-colors" />
          </a>
        </div>
      </div>

      {/* Animations globales */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-25px) translateX(12px);
          }
          50% {
            transform: translateY(-15px) translateX(-12px);
          }
          75% {
            transform: translateY(-35px) translateX(8px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.35;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }

        .animate-pulse-slower {
          animation: pulse-slower 14s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Home;
