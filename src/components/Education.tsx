import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2017',
      description: 'Specialized in Data Science and Machine Learning',
      gpa: '3.9/4.0',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Engineering College',
      period: '2011 - 2015',
      description: 'Focus on Software Engineering and Database Systems',
      gpa: '3.7/4.0',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Data Analytics - Specialty',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      year: '2023',
    },
    {
      name: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      year: '2022',
    },
    {
      name: 'Apache Spark 3 - Beyond Basics',
      issuer: 'Databricks',
      year: '2022',
    },
    {
      name: 'Data Engineering with Python',
      issuer: 'DataCamp',
      year: '2021',
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera',
      year: '2021',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Academic background and professional certifications</p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-cyan-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700
                         hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20
                         transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <BookOpen className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-gray-300 font-semibold mb-1">{edu.institution}</div>
                    <div className="text-gray-400 text-sm mb-3">{edu.period}</div>
                    <p className="text-gray-400 mb-2">{edu.description}</p>
                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-cyan-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700
                         hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20
                         transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Award className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                      {cert.name}
                    </h4>
                    <div className="text-gray-400 text-sm mb-1">{cert.issuer}</div>
                    <div className="text-cyan-400 text-sm font-semibold">{cert.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-cyan-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm committed to staying current with the latest technologies and best practices in data engineering.
              I regularly participate in online courses, attend conferences, and contribute to open-source projects
              to expand my knowledge and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
