import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Real-Time Data Pipeline',
      description: 'Built an end-to-end real-time data pipeline processing streaming data from IoT devices',
      technologies: ['Kafka', 'Spark Streaming', 'AWS', 'Python', 'Redis'],
      highlights: [
        'Processing 1M+ events per second',
        'Sub-second latency for real-time analytics',
        'Fault-tolerant architecture with 99.99% uptime',
      ],
      github: 'https://github.com',
    },
    {
      title: 'Data Warehouse Modernization',
      description: 'Migrated legacy data warehouse to modern cloud-based solution using Snowflake',
      technologies: ['Snowflake', 'DBT', 'Airflow', 'Python', 'SQL'],
      highlights: [
        'Reduced query time by 80%',
        'Implemented incremental data loading',
        'Cost optimization saving $50K annually',
      ],
      link: 'https://example.com',
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'Developed automated ML pipeline for predictive analytics and model deployment',
      technologies: ['Python', 'TensorFlow', 'MLflow', 'Docker', 'Kubernetes'],
      highlights: [
        'Automated model training and deployment',
        'A/B testing framework for model comparison',
        '95% prediction accuracy achieved',
      ],
      github: 'https://github.com',
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Created comprehensive BI dashboard for executive decision-making',
      technologies: ['Power BI', 'SQL', 'Azure', 'Python', 'DAX'],
      highlights: [
        'Real-time KPI monitoring',
        'Interactive visualizations for 20+ metrics',
        'Automated daily refresh and alerts',
      ],
      link: 'https://example.com',
    },
    {
      title: 'Data Quality Framework',
      description: 'Implemented automated data quality monitoring and validation system',
      technologies: ['Python', 'Great Expectations', 'Airflow', 'PostgreSQL'],
      highlights: [
        '200+ data quality rules automated',
        'Early detection of data anomalies',
        'Reduced data incidents by 90%',
      ],
      github: 'https://github.com',
    },
    {
      title: 'ETL Optimization Project',
      description: 'Optimized existing ETL processes for improved performance and cost efficiency',
      technologies: ['Spark', 'Python', 'AWS Glue', 'S3', 'Athena'],
      highlights: [
        '60% reduction in processing time',
        '40% cost savings on infrastructure',
        'Improved data freshness to near real-time',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Some of my notable work in data engineering and analytics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700
                       hover:border-cyan-500 transition-all duration-300 overflow-hidden
                       hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-cyan-400 text-sm font-semibold mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-cyan-400">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/30
                               hover:bg-cyan-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
