import { Languages } from "lucide-react";

export default function Education() {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Japanese", level: "Working Experience" },
    { name: "German", level: "Basic" }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 bg-secondary-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="bg-primary-dark border border-border-dark rounded-xl p-8 hover-glow transition-all duration-300 mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-accent-blue mb-2">Bachelor of Engineering</h3>
              <p className="text-lg">GHRCE, Nagpur | RTMNU</p>
              <p className="text-text-secondary">GPA: 8.7 / 10.0</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-text-secondary">2015 - 2019</span>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Languages className="text-xl text-white" size={24} />
                </div>
                <p className="font-medium">{language.name}</p>
                <p className="text-text-secondary text-sm">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
