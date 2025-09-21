import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-fitness.jpg';
import RegistrationModal from './RegistrationModal';

const HeroSection = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="hero-content max-w-6xl mx-auto">
        <h1 className="hero-title mb-8 fade-in-up">
          NOT YOUR
          <br />
          T<span className="text-accent">Y</span>PICAL
          <br />
          FITNESS
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-up">
          Transform your body and mind with our revolutionary functional fitness approach. 
          Experience training that challenges every limit.
        </p>
        
        <div className="flex justify-center items-center fade-in-up">
          <button 
            onClick={() => setIsRegistrationOpen(true)}
            className="btn-hero group"
          >
            START YOUR JOURNEY
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </section>
  );
};

export default HeroSection;