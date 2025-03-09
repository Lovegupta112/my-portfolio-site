import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const text = "Full Stack Developer";
    const title = titleRef.current;
    let i = 0;
    
    if (title) {
      title.textContent = "";
      
      const typeWriter = () => {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 500);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-accent" />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 md:order-1 order-2 animate-fade-in-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm md:text-base tracking-wider font-mono">Hi, my name is</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Love Gupta
                </h1>
                <h2 
                  ref={titleRef} 
                  className="text-xl md:text-3xl font-bold text-highlight h-10 md:h-12"
                />
              </div>
              
              <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                Full Stack Developer with 1.5 years of experience in designing and implementing secure, efficient, 
                and user-friendly web applications. Proficient in modern technologies like React.js, Node.js, and PostgreSQL, 
                with a strong focus on scalability and performance optimization.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-highlight text-dark hover:bg-highlight/90 font-medium">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                  <Link to="/resume">View Resume</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a 
                  href="https://github.com/lovegupta112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/guptalove" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:loveguptaofficials@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+919335958102" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 md:order-2 order-1 flex justify-center animate-fade-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-highlight/20 to-highlight/5 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-dark-accent" />
              <div className="absolute inset-8 rounded-full border-2 border-highlight/30 overflow-hidden flex items-center justify-center animate-float">
                <svg className="w-full h-full text-highlight/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M40,-65.5C53.2,-59.1,66.2,-51.5,74.9,-39.9C83.5,-28.4,87.9,-14.2,85.8,-1.2C83.8,11.8,75.3,23.5,66.7,34.7C58.1,45.8,49.3,56.3,38.3,63.7C27.3,71.2,13.7,75.5,0.1,75.4C-13.5,75.3,-27,70.8,-38.6,63.5C-50.1,56.2,-59.8,46.1,-67.4,34.2C-75,22.3,-80.5,8.6,-79.6,-4.9C-78.7,-18.5,-71.3,-31.8,-61.9,-42.4C-52.4,-53,-40.8,-60.8,-28.8,-67.4C-16.7,-74,-8.4,-79.4,2.2,-83C12.7,-86.6,25.5,-88.3,40,-65.5Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-highlight">LG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
