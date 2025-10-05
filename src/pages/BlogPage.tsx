import { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import cardioImage from '@/assets/cardio-program.jpg';
import strengthImage from '@/assets/strength-program.jpg';
import heroImage from '@/assets/hero-fitness.jpg';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: '10 TIPS HOW TO PREPARE MEALS FAST AND EASY',
      excerpt: 'Discover time-saving strategies for meal prep that will fuel your fitness journey and keep you on track with your nutrition goals.',
      content: `
        <h3>Master Your Nutrition with These Time-Saving Meal Prep Strategies</h3>
        
        <p>Nutrition is the foundation of any successful fitness journey. However, many people struggle to maintain consistent healthy eating habits due to time constraints. Here are 10 proven strategies to help you prepare nutritious meals quickly and efficiently.</p>
        
        <h4>1. Plan Your Week Ahead</h4>
        <p>Spend 15-20 minutes every Sunday planning your meals for the week. Create a shopping list and stick to it. This eliminates daily decision-making and ensures you have all necessary ingredients.</p>
        
        <h4>2. Batch Cook Proteins</h4>
        <p>Cook large quantities of chicken, fish, or lean beef at once. Store in portion-sized containers in the refrigerator for up to 4 days. This saves hours during busy weekdays.</p>
        
        <h4>3. Pre-Cut Vegetables</h4>
        <p>Wash and chop vegetables immediately after shopping. Store them in clear containers so you can easily see what's available. This makes throwing together a quick salad or stir-fry effortless.</p>
        
        <h4>4. Use One-Pot Recipes</h4>
        <p>Embrace recipes that require minimal cleanup. Slow cooker meals, sheet pan dinners, and one-pot pasta dishes are perfect for busy schedules.</p>
        
        <h4>5. Invest in Quality Containers</h4>
        <p>Good storage containers keep food fresh longer and make portion control easier. Glass containers are ideal as they're microwave-safe and don't retain odors.</p>
        
        <p>Remember, consistency beats perfection. Start with just one or two of these strategies and gradually incorporate more as they become habits.</p>
      `,
      image: cardioImage,
      date: '21 JUN 2024',
      category: 'NUTRITION',
      readTime: '5 min read',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'HOW TO MAXIMISE TIME SPENT AT THE GYM',
      excerpt: 'Learn the most efficient workout strategies to get maximum results from every training session, even with a busy schedule.',
      content: `
        <h3>Optimize Your Gym Time for Maximum Results</h3>
        
        <p>Time is precious, and when you're at the gym, every minute counts. Whether you have 30 minutes or 2 hours, these strategies will help you maximize your workout efficiency.</p>
        
        <h4>1. Have a Clear Plan</h4>
        <p>Never walk into the gym without knowing exactly what you're going to do. Write down your workout beforehand, including exercises, sets, reps, and rest periods.</p>
        
        <h4>2. Compound Movements First</h4>
        <p>Start with exercises that work multiple muscle groups simultaneously. Squats, deadlifts, pull-ups, and push-ups give you the most bang for your buck.</p>
        
        <h4>3. Minimize Rest Between Sets</h4>
        <p>Keep rest periods between 30-90 seconds for most exercises. This maintains intensity and keeps your heart rate elevated throughout the workout.</p>
        
        <h4>4. Use Supersets and Circuit Training</h4>
        <p>Combine exercises back-to-back without rest. This approach burns more calories and saves time while maintaining muscle-building benefits.</p>
        
        <h4>5. Track Your Progress</h4>
        <p>Use a workout app or journal to track weights, reps, and personal records. This prevents wasted time figuring out what weight to use.</p>
        
        <h4>6. Prepare Your Gear</h4>
        <p>Have your gym bag packed the night before. Include pre-workout, post-workout nutrition, towel, and any specific equipment you might need.</p>
        
        <p>Remember, intensity often matters more than duration. A focused 45-minute workout can be more effective than a distracted 2-hour session.</p>
      `,
      image: strengthImage,
      date: '21 JUN 2024',
      category: 'TRAINING',
      readTime: '7 min read',
      author: 'Mike Rodriguez'
    },
    {
      id: 3,
      title: 'SIMPLE CONDITIONS FOR ALL AROUND FITNESS',
      excerpt: 'The fundamental principles every fitness enthusiast should know to build a well-rounded, sustainable training program.',
      content: `
        <h3>Building a Foundation for Lifelong Fitness</h3>
        
        <p>True fitness isn't just about looking good or lifting heavy weights. It's about creating a sustainable lifestyle that supports your health and well-being for years to come.</p>
        
        <h4>1. Balance Is Key</h4>
        <p>A well-rounded fitness program includes cardiovascular exercise, strength training, flexibility work, and adequate recovery. Don't neglect any component.</p>
        
        <h4>2. Progressive Overload</h4>
        <p>Gradually increase the demands on your body over time. This could mean adding weight, increasing reps, or improving your range of motion.</p>
        
        <h4>3. Listen to Your Body</h4>
        <p>Learn to distinguish between normal exercise discomfort and pain that signals injury. Rest when needed and don't push through sharp or persistent pain.</p>
        
        <h4>4. Consistency Over Intensity</h4>
        <p>Regular moderate exercise is more beneficial than sporadic intense sessions. Aim for consistency over perfection.</p>
        
        <h4>5. Nutrition Supports Training</h4>
        <p>You can't out-train a bad diet. Focus on whole foods, adequate protein, and proper hydration to fuel your workouts and recovery.</p>
        
        <h4>6. Sleep and Recovery</h4>
        <p>Your body adapts and grows stronger during rest, not during the workout itself. Prioritize 7-9 hours of quality sleep each night.</p>
        
        <p>Fitness is a journey, not a destination. Focus on building habits that you can maintain for life rather than pursuing quick fixes.</p>
      `,
      image: cardioImage,
      date: '21 JUN 2024',
      category: 'FITNESS',
      readTime: '4 min read',
      author: 'Emma Chen'
    },
    {
      id: 4,
      title: 'BUILDING MENTAL STRENGTH THROUGH PHYSICAL TRAINING',
      excerpt: 'Explore the powerful connection between physical exercise and mental resilience, and how consistent training builds character.',
      content: `
        <h3>The Mind-Body Connection in Fitness</h3>
        
        <p>Physical training does more than build muscle and improve cardiovascular health—it forges mental strength that translates to every area of life.</p>
        
        <h4>1. Discipline Creates Freedom</h4>
        <p>The discipline required to maintain a consistent workout routine develops self-control that benefits all aspects of life. Each workout is practice in keeping commitments to yourself.</p>
        
        <h4>2. Stress as a Training Tool</h4>
        <p>Physical stress in the gym teaches your body and mind how to handle stress in daily life. You learn to remain calm under pressure and push through discomfort.</p>
        
        <h4>3. Goal Setting and Achievement</h4>
        <p>Fitness goals provide a framework for learning how to set, pursue, and achieve objectives. The process teaches patience, persistence, and strategic thinking.</p>
        
        <h4>4. Confidence Through Competence</h4>
        <p>As you become stronger and more capable physically, your confidence in other areas naturally increases. You prove to yourself that you can overcome challenges.</p>
        
        <h4>5. Present Moment Awareness</h4>
        <p>Intense physical training requires complete focus on the present moment. This mindfulness practice reduces anxiety and improves concentration.</p>
        
        <p>Remember, every rep is a choice to become better. The habits you build in the gym become the foundation for success in all areas of life.</p>
      `,
      image: heroImage,
      date: '20 JUN 2024',
      category: 'MINDSET',
      readTime: '6 min read',
      author: 'David Thompson'
    },
    {
      id: 5,
      title: 'RECOVERY STRATEGIES FOR OPTIMAL PERFORMANCE',
      excerpt: 'Master the art of recovery with proven techniques that accelerate muscle growth, prevent injury, and enhance performance.',
      content: `
        <h3>The Science of Smart Recovery</h3>
        
        <p>Recovery isn't just about rest—it's an active process that can be optimized through strategic techniques and lifestyle choices.</p>
        
        <h4>1. Active Recovery Sessions</h4>
        <p>Light activities like walking, swimming, or yoga on rest days promote blood flow and help clear metabolic waste from muscles.</p>
        
        <h4>2. Sleep Optimization</h4>
        <p>Create a sleep sanctuary: cool room (65-68°F), blackout curtains, no screens 1 hour before bed, and consistent sleep/wake times.</p>
        
        <h4>3. Hydration and Electrolytes</h4>
        <p>Proper hydration supports every recovery process. Add electrolytes after intense sessions to maintain optimal cellular function.</p>
        
        <h4>4. Stress Management</h4>
        <p>Chronic stress impairs recovery. Practice meditation, deep breathing, or other stress-reduction techniques to optimize your body's repair processes.</p>
        
        <h4>5. Mobility and Flexibility Work</h4>
        <p>Regular stretching and mobility work prevents stiffness, improves movement quality, and reduces injury risk. Dedicate 10-15 minutes daily to this practice.</p>
        
        <h4>6. Nutrition Timing</h4>
        <p>Consume protein and carbohydrates within 2 hours post-workout to maximize muscle protein synthesis and glycogen replenishment.</p>
        
        <p>Recovery is when adaptation happens. Prioritize it as much as your training, and you'll see dramatic improvements in performance and results.</p>
      `,
      image: strengthImage,
      date: '19 JUN 2024',
      category: 'RECOVERY',
      readTime: '8 min read',
      author: 'Lisa Martinez'
    }
  ];

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-accent hover:text-accent-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </button>
            
            <div className="mb-8">
              <div className="flex items-center text-muted-foreground text-sm mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-bold mb-4">
                {post.category}
              </div>
              
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h3:text-2xl prose-h4:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Link 
                to="/"
                className="flex items-center text-accent hover:text-accent-foreground mb-8 transition-colors justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="section-title">
                FITNESS <span className="text-gradient">BLOG</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, training tips, and nutrition advice to help you reach your fitness goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow slide-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedPost(post.id)}
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
                    
                    <button className="flex items-center text-accent font-semibold text-sm tracking-wider hover:gap-2 transition-all duration-300 group">
                      READ MORE
                      <Calendar className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;