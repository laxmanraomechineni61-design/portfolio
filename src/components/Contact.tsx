import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Let's discuss how I can help with your data engineering needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300 group">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a href="mailto:laxmanrao@email.com" className="text-white hover:text-cyan-400 transition-colors">
                      laxmanrao@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300 group">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300 group">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300
                           text-gray-400 hover:text-cyan-400 transform hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300
                           text-gray-400 hover:text-cyan-400 transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Availability</h3>
              <p className="text-gray-300">
                I'm currently open to new opportunities and consulting projects. Feel free to reach out for
                collaborations, job opportunities, or just to chat about data engineering!
              </p>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white
                           focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20
                           transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white
                           focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20
                           transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white
                           focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20
                           transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white
                           focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20
                           transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold
                         hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
            <p className="text-gray-400 mb-2">
              Thank you for visiting my portfolio!
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Made with ♥ by Laxman Rao
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
