import { Download, Mail, User } from "lucide-react";

export default function HeroStatic() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // For GitHub Pages, link directly to the PDF in the assets folder
    const link = document.createElement('a');
    link.href = '/ashutosh-portfolio/Ashutosh_Yesekar_Latest.pdf';
    link.download = 'Ashutosh_Yesekar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-secondary-dark border-2 border-accent-blue mb-6 flex items-center justify-center">
            <User className="text-4xl text-accent-blue" size={64} />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Senior DevOps Engineer
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
          Cloud & DevOps Consultant with 5+ years of experience designing scalable infrastructure solutions across Azure, AWS, and GCP
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors hover-glow flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </button>
          <button 
            onClick={downloadResume}
            className="border border-border-dark hover:border-accent-blue text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}