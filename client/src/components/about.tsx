import { Linkedin, Github, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-accent-blue">Professional Overview</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Experienced Cloud & DevOps Consultant with deep expertise in designing, implementing, and automating cloud infrastructure solutions. Strong focus on building enterprise-grade CI/CD pipelines and implementing Infrastructure as Code (IaC) using modern tools and best practices.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Currently serving as Senior Consultant at FreshGravity, where I design scalable cloud infrastructure for AI/ML applications and lead implementation of DevOps best practices for enterprise clients.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/ashutosh-yesekar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-blue-400 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="#" 
                className="text-accent-blue hover:text-blue-400 transition-colors"
              >
                <Github size={32} />
              </a>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="bg-secondary-dark border border-border-dark rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Experience</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Specialization</span>
                  <span className="font-medium">Cloud & DevOps</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Location</span>
                  <span className="font-medium">Pune, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Focus</span>
                  <span className="font-medium">AI/ML Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
