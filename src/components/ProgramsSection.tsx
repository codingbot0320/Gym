import { Dumbbell, Heart, Target, Zap } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'FUNCTIONAL FITNESS',
      description: 'Real movements for real life. Build strength, mobility, and endurance through dynamic exercises that translate to everyday activities.',
      icon: <Target className="w-12 h-12" />,
      features: ['Full Body Strength', 'Movement Quality', 'Core Stability', 'Injury Prevention']
    },
    {
      title: 'STRENGTH TRAINING',
      description: 'Progressive overload programs designed to build raw power and muscle mass using compound movements and proven methodologies.',
      icon: <Dumbbell className="w-12 h-12" />,
      features: ['Powerlifting', 'Olympic Lifting', 'Hypertrophy', 'Maximal Strength']
    },
    {
      title: 'CARDIO CONDITIONING',
      description: 'High-intensity interval training and metabolic conditioning to improve cardiovascular health and burn maximum calories.',
      icon: <Heart className="w-12 h-12" />,
      features: ['HIIT Training', 'Metabolic Circuits', 'Endurance Building', 'Fat Loss']
    },
    {
      title: 'ATHLETIC PERFORMANCE',
      description: 'Sport-specific training designed to enhance athletic performance through power, speed, agility, and reaction time development.',
      icon: <Zap className="w-12 h-12" />,
      features: ['Power Development', 'Speed Training', 'Agility Drills', 'Sports Conditioning']
    }
  ];

  return (
    <section id="programs" className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            WHAT IS FUNCTIONAL
            <br />
            <span className="text-gradient">FITNESS</span> ALL ABOUT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to fitness focuses on building real-world strength,
            mobility, and endurance that enhances your daily life and athletic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent mb-6">
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;