export default function Experience() {
  const experiences = [
    {
      title: "Senior Consultant",
      company: "FreshGravity",
      period: "Jun 2023 – Present",
      achievements: [
        "Designed and implemented scalable, secure cloud infrastructure on Azure and AWS for AI/ML applications",
        "Deployed and optimized Kubernetes clusters (AKS/EKS) for multi-tenant environments",
        "Automated end-to-end CI/CD pipelines using Azure DevOps, GitLab, and Bitbucket",
        "Managed Databricks workflows for secure and cost-efficient data processing",
        "Led implementation of Infrastructure as Code using Terraform and Ansible"
      ]
    },
    {
      title: "Senior DevOps Engineer",
      company: "Techolution",
      period: "Jul 2022 – Jun 2023",
      achievements: [
        "Maintained and modernized cloud infrastructure on Azure and AWS",
        "Integrated automation workflows using ConcourseCI, Terraform, and Ansible",
        "Administered RabbitMQ clusters ensuring high availability",
        "Conducted proactive log monitoring and alerting via Splunk"
      ]
    },
    {
      title: "Cloud Infrastructure Engineer / DevOps Engineer",
      company: "Fujitsu India",
      period: "Mar 2020 – Jul 2022",
      achievements: [
        "Developed full DevOps toolchain and CI/CD workflows using Jenkins, Git, SonarQube, and Docker",
        "Designed and deployed Azure-based infrastructure with VM scale sets and security best practices",
        "Used Kubernetes for container orchestration and microservices deployment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border-dark"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className="absolute left-6 w-4 h-4 bg-accent-blue rounded-full border-4 border-primary-dark"></div>
              <div className="ml-20">
                <div className="bg-secondary-dark border border-border-dark rounded-xl p-8 hover-glow transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-accent-blue">{experience.title}</h3>
                      <h4 className="text-lg font-medium">{experience.company}</h4>
                    </div>
                    <span className="text-text-secondary mt-2 sm:mt-0">{experience.period}</span>
                  </div>
                  <ul className="text-text-secondary space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
