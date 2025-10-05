import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import cardioImage from '@/assets/cardio-program.jpg';
import strengthImage from '@/assets/strength-program.jpg';

const BlogSection = () => {
  const posts = [
    {
      title: '10 TIPS HOW TO PREPARE MEALS FAST AND EASY',
      excerpt: 'Discover time-saving strategies for meal prep that will fuel your fitness journey and keep you on track with your nutrition goals.',
      image: cardioImage,
      date: '21 JUN',
      category: 'NUTRITION',
      readTime: '5 min read'
    },
    {
      title: 'HOW TO MAXIMISE TIME SPENT AT THE GYM',
      excerpt: 'Learn the most efficient workout strategies to get maximum results from every training session, even with a busy schedule.',
      image: strengthImage,
      date: '21 JUN',
      category: 'TRAINING',
      readTime: '7 min read'
    },
    {
      title: 'SIMPLE CONDITIONS FOR ALL AROUND FITNESS',
      excerpt: 'The fundamental principles every fitness enthusiast should know to build a well-rounded, sustainable training program.',
      image: cardioImage,
      date: '21 JUN',
      category: 'FITNESS',
      readTime: '4 min read'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            LATEST <span className="text-gradient">BLOG</span> POSTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest fitness tips, nutrition advice, and training insights
            from our expert coaches and fitness professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.title}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-bold">
                  {post.category}
                </div>
                <div className="absolute top-4 left-4 bg-background/90 text-foreground p-3 rounded text-center">
                  <div className="text-2xl font-bold leading-none">
                    {post.date.split(' ')[0]}
                  </div>
                  <div className="text-xs font-medium">
                    {post.date.split(' ')[1]}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  to="/blog"
                  className="flex items-center text-accent font-semibold text-sm tracking-wider hover:gap-2 transition-all duration-300 group"
                >
                  VIEW HERE
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-hero">
            VIEW ALL POSTS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;