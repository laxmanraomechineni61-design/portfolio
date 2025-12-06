import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'SQL', level: 90, category: 'Programming' },
    { name: 'Scala', level: 80, category: 'Programming' },
    { name: 'Apache Spark', level: 90, category: 'Big Data' },
    { name: 'Hadoop', level: 85, category: 'Big Data' },
    { name: 'Kafka', level: 80, category: 'Big Data' },
    { name: 'AWS', level: 88, category: 'Cloud' },
    { name: 'Azure', level: 82, category: 'Cloud' },
    { name: 'GCP', level: 75, category: 'Cloud' },
    { name: 'Airflow', level: 85, category: 'Tools' },
    { name: 'Docker', level: 80, category: 'Tools' },
    { name: 'Kubernetes', level: 75, category: 'Tools' },
    { name: 'Machine Learning', level: 85, category: 'Analytics' },
    { name: 'Power BI', level: 88, category: 'Analytics' },
    { name: 'Tableau', level: 82, category: 'Analytics' },
  ];

  const categories = ['Programming', 'Big Data', 'Cloud', 'Tools', 'Analytics'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12 animate-fadeIn" style={{ animationDelay: `${catIndex * 100}ms` }}>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700
                             hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 3 + index) * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-gray-900 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              5+
            </div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              10+
            </div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
