import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <div className="text-cyan-400 text-lg font-semibold tracking-wide animate-fadeIn">
              Hello, I'm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fadeIn delay-200">
                Laxman Rao
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 animate-fadeIn delay-300">
              Data Engineer & Data Analyst
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed animate-fadeIn delay-400">
              Transforming raw data into actionable insights with expertise in big data technologies,
              cloud platforms, and advanced analytics.
            </p>

            <div className="flex gap-4 animate-fadeIn delay-500">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold
                         hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold
                         hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-6 pt-4 animate-fadeIn delay-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:laxmanrao@email.com"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fadeInRight">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75
                            group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="/image.png"
                alt="Laxman Rao"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-gray-900
                         transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
