import { Code2, Database, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building scalable data pipelines and ETL processes',
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Extracting insights through statistical analysis',
    },
    {
      icon: Code2,
      title: 'Big Data',
      description: 'Processing large-scale data with modern frameworks',
    },
    {
      icon: Zap,
      title: 'Cloud Solutions',
      description: 'Leveraging AWS, Azure, and GCP platforms',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fadeInLeft">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Data Engineer and Data Analyst with expertise in designing and implementing
              robust data solutions. With a strong foundation in computer science and hands-on experience
              with modern data technologies, I specialize in building scalable data pipelines and deriving
              meaningful insights from complex datasets.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My experience spans across various domains including big data processing, cloud computing,
              machine learning, and business intelligence. I'm committed to leveraging data to drive
              business decisions and create value through innovative solutions.
            </p>
          </div>

          <div className="space-y-4 animate-fadeInRight">
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">3+ years of experience in data engineering</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">Expert in Python, SQL, and Spark</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">AWS & Azure certified professional</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">Strong background in machine learning</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700
                       hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2
                       hover:shadow-xl hover:shadow-cyan-500/20 group animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
