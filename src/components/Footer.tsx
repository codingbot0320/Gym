const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black text-gradient tracking-tight mb-4">
              ELITE FITNESS
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your body and mind with our revolutionary functional fitness approach. 
              Experience training that challenges every limit and delivers real results.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2024 Elite Fitness. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#trainers" className="hover:text-accent transition-colors">Trainers</a></li>
              <li><a href="#schedule" className="hover:text-accent transition-colors">Schedule</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Functional Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Strength Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cardio Conditioning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Athletic Performance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Personal Training</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;