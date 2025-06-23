import { useEffect, useRef, useState } from "react";
import { Cloud, Settings, Container, RefreshCw, BarChart3, Brain } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Azure", level: 90 },
        { name: "AWS", level: 85 },
        { name: "GCP", level: 75 }
      ]
    },
    {
      title: "IaC & Automation",
      icon: <Settings className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 85 },
        { name: "ARM Templates", level: 80 }
      ]
    },
    {
      title: "Containerization",
      icon: <Container className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "AKS/EKS", level: 80 }
      ]
    },
    {
      title: "CI/CD Pipelines",
      icon: <RefreshCw className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Azure DevOps", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "GitLab CI", level: 80 }
      ]
    },
    {
      title: "Monitoring & Security",
      icon: <BarChart3 className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Splunk", level: 85 },
        { name: "Dynatrace", level: 80 },
        { name: "RBAC", level: 90 }
      ]
    },
    {
      title: "Data & ML",
      icon: <Brain className="text-accent-blue text-2xl" />,
      skills: [
        { name: "Databricks", level: 85 },
        { name: "Azure ADF", level: 80 },
        { name: "Azure AI Studio", level: 75 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 sm:px-8 bg-secondary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-primary-dark border border-border-dark rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <div className="w-24 bg-border-dark rounded-full h-2">
                      <div 
                        className="bg-accent-blue h-2 rounded-full skill-bar" 
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
