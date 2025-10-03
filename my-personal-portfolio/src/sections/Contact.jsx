import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 bg-black text-white overflow-hidden"
    >
      {/* Animated Background — Subtle & Elegant */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse-slower"></div>
      </div>

      <RevealOnScroll>
        <div className="relative px-4 max-w-2xl w-full z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight">
            Parlons
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}
              ensemble
            </span>
          </h2>

          <form
            action="https://formsubmit.co/araysimohamedali@gmail.com"
            method="POST"
            className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Écrivez-moi ce que vous avez en tête…"
                required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform"
            >
              ✨ Envoyer avec style
            </button>
          </form>

          <p className="text-center mt-10 text-gray-400 text-sm">
            Préférez l’email direct ? Écrivez-moi à{" "}
            <a
              href="mailto:araysimohamedali@gmail.com"
              className="inline-block text-cyan-300 hover:text-purple-300 underline decoration-dotted underline-offset-4 transition-colors duration-300"
            >
              araysimohamedali@gmail.com
            </a>
          </p>
        </div>
      </RevealOnScroll>

      {/* Custom Animations */}
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
};
