import { Instagram, Linkedin, Twitter } from 'lucide-react';
import trainer1 from '@/assets/Trainer 1.jpg';
import trainer2 from '@/assets/trainer2.jpg';
import trainer3 from '@/assets/trainer3.jpg';

const TrainersSection = () => {
  const trainers = [
    {
      name: 'Niharika SINGH',
      title: 'CROSSFIT COACH',
      image: trainer1,
      specialties: ['Olympic Lifting', 'Functional Movement', 'Injury Prevention'],
      bio: 'Former competitive athlete with 8+ years coaching experience.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Pranav KUMAR',
      title: 'CARDIO & CONDITIONING',
      image: trainer2,
      specialties: ['HIIT Training', 'Metabolic Conditioning', 'Weight Loss'],
      bio: 'Certified personal trainer specializing in high-intensity workouts.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Nikhil SHARMA',
      title: 'BODYBUILDING COACH',
      image: trainer3,
      specialties: ['Strength Training', 'Muscle Building', 'Competition Prep'],
      bio: 'Professional bodybuilder and strength coach with 10+ years experience.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            TEAM OF <span className="text-gradient">EXPERT</span>
            <br />
            COACHES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified trainers bring decades of combined experience to help you achieve
            your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={trainer.name}
              className="trainer-card slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-4">
                      <a href={trainer.social.instagram} className="text-white hover:text-accent transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href={trainer.social.twitter} className="text-white hover:text-accent transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={trainer.social.linkedin} className="text-white hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  {trainer.name}
                </h3>
                <p className="text-accent font-semibold mb-3 tracking-wide">
                  {trainer.title}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {trainer.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;