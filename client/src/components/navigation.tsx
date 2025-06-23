import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-primary-dark/90 backdrop-blur-sm border-b border-border-dark z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold">Ashutosh Yesekar</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-text-secondary hover:text-white transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-text-secondary hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-dark">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-text-secondary hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-text-secondary hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
