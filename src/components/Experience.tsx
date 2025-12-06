import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Data Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: [
        'Designed and implemented scalable data pipelines processing 10TB+ daily data using Apache Spark and Airflow',
        'Optimized ETL processes reducing processing time by 60% and infrastructure costs by 40%',
        'Led migration of on-premise data infrastructure to AWS, improving reliability and scalability',
        'Mentored junior engineers and established best practices for data engineering team',
      ],
      technologies: ['Python', 'Spark', 'AWS', 'Airflow', 'Kafka', 'PostgreSQL'],
    },
    {
      title: 'Data Engineer',
      company: 'DataFlow Analytics',
      period: '2019 - 2021',
      description: [
        'Built real-time data streaming pipelines using Apache Kafka and Spark Streaming',
        'Developed data quality frameworks ensuring 99.9% data accuracy',
        'Implemented automated testing and CI/CD pipelines for data applications',
        'Created dashboards and reports using Power BI for business stakeholders',
      ],
      technologies: ['Python', 'Kafka', 'Spark', 'Azure', 'Power BI', 'MongoDB'],
    },
    {
      title: 'Junior Data Analyst',
      company: 'Business Intelligence Corp',
      period: '2017 - 2019',
      description: [
        'Performed data analysis and created visualizations for executive reporting',
        'Developed SQL queries and stored procedures for data extraction and transformation',
        'Automated reporting processes reducing manual effort by 70%',
        'Collaborated with business teams to understand requirements and deliver insights',
      ],
      technologies: ['SQL', 'Python', 'Tableau', 'Excel', 'MySQL'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">My professional journey in data engineering</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-start gap-8 animate-fadeIn`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:order-2'}`}>
                <div
                  className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700
                           hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20
                           transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4 text-cyan-400">
                    <Briefcase size={24} />
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <div className="text-xl font-semibold text-gray-300">{exp.company}</div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className={`text-cyan-400 ${index % 2 === 0 ? 'md:order-2' : ''}`}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30
                                 hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
