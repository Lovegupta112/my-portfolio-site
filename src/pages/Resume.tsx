
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Simulated download functionality
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate delay
    setTimeout(() => {
      setIsDownloading(false);
      // You would normally add a real download link here
    }, 1500);
  };

  // Add scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
            <Button 
              onClick={handleDownload}
              className="bg-highlight text-dark hover:bg-highlight/90 font-medium"
              disabled={isDownloading}
            >
              <Download size={18} className="mr-2" />
              {isDownloading ? 'Downloading...' : 'Download PDF'}
            </Button>
          </div>
          
          <div className="glass-card p-8 rounded-lg border border-gray-800 mb-12 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-32 h-32 rounded-full bg-dark-lighter mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-highlight">LG</span>
                  </div>
                  <h2 className="text-2xl font-bold">Love Gupta</h2>
                  <p className="text-gray-400">Full Stack Developer</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-highlight flex-shrink-0" />
                    <a 
                      href="mailto:loveguptaofficials@gmail.com" 
                      className="text-gray-300 hover:text-white text-sm truncate"
                    >
                      loveguptaofficials@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-highlight flex-shrink-0" />
                    <a 
                      href="tel:+919335958102" 
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      +91 9335958102
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Github size={16} className="text-highlight flex-shrink-0" />
                    <a 
                      href="https://github.com/lovegupta112" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      lovegupta112
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Linkedin size={16} className="text-highlight flex-shrink-0" />
                    <a 
                      href="https://linkedin.com/in/guptalove" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      guptalove
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-highlight mb-3">Summary</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Full Stack Developer with 1.5 years of experience in designing and implementing secure, efficient, 
                      and user-friendly web applications. Proficient in modern technologies like React.js, Node.js, and PostgreSQL, 
                      with a strong focus on scalability and performance optimization.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-highlight mb-3">Experience</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Full Stack Developer</h4>
                            <p className="text-gray-400">Varthana Finance Private Limited, Bengaluru</p>
                          </div>
                          <p className="text-gray-500 text-sm">Jan 2024 - Present</p>
                        </div>
                        <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                          <li>• Developed and optimized scalable web applications using React.js, Node.js, and PostgreSQL.</li>
                          <li>• Streamlined backend workflows and ensured secure, efficient handling of financial data.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Software Developer Trainee</h4>
                            <p className="text-gray-400">MountBlue Technologies, Bengaluru</p>
                          </div>
                          <p className="text-gray-500 text-sm">Aug 2023 - Dec 2023</p>
                        </div>
                        <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                          <li>• Built robust and responsive front-end interfaces with React.js.</li>
                          <li>• Developed secure, scalable backend solutions using Node.js, optimized database queries, and containerized applications with Docker.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Open Source Contributor</h4>
                            <p className="text-gray-400">GirlScript Summer of Code, Remote</p>
                          </div>
                          <p className="text-gray-500 text-sm">May - July 2023</p>
                        </div>
                        <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                          <li>• Teamwork, version control, code reviews, and issue tracking.</li>
                          <li>• Building relationships and contributing to the programming community.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Web Development Intern</h4>
                            <p className="text-gray-400">LueurTech, Online</p>
                          </div>
                          <p className="text-gray-500 text-sm">Dec 2021 - Jan 2022</p>
                        </div>
                        <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                          <li>• Gained proficiency in DOM manipulation and implemented HTML, CSS best practices.</li>
                          <li>• Learned how to efficiently debug and optimize code for better performance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-highlight mb-3">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Bachelor of Computer Application</h4>
                            <p className="text-gray-400">Dr. Virendra Swarup College of Management Studies, Kanpur</p>
                          </div>
                          <p className="text-gray-500 text-sm">2019-2022</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Percentage: 75</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">Senior Secondary</h4>
                            <p className="text-gray-400">St. John Intermediate College Nawabganj, Kanpur</p>
                          </div>
                          <p className="text-gray-500 text-sm">2019</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Percentage: 75</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-highlight mb-3">Technical Skills</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-300">Languages:</p>
                        <p className="text-gray-400 text-sm">C/C++, Java, JavaScript, TypeScript, HTML, CSS</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">Tech Skills:</p>
                        <p className="text-gray-400 text-sm">React.js, Next.js, Material UI, Shadcn, Node.js, Express.js, Prisma, Docker, AWS, Solana</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">Cloud/Databases:</p>
                        <p className="text-gray-400 text-sm">Firebase, Relational DB (MySQL, PostgreSQL), MongoDB</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">Areas of Interest:</p>
                        <p className="text-gray-400 text-sm">Web Design and Development, Cloud Security, Web3</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">Soft Skills:</p>
                        <p className="text-gray-400 text-sm">Problem Solving, Self-learning, Adaptability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg border border-gray-800 reveal">
            <h3 className="text-xl font-semibold text-highlight mb-6">Personal Projects</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white">Podcast App</h4>
                </div>
                <p className="text-gray-400 text-sm italic mt-1">
                  Crafted a user-friendly podcast app with React, Redux, and Firebase for seamless podcast creation and discovery.
                </p>
                <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                  <li>• Developed a podcast creation and discovery application using React, Redux, and Firebase.</li>
                  <li>• Integrated Firebase for user authentication, real-time database management, and data security.</li>
                  <li>• Enabled users to create and share podcasts and episodes seamlessly.</li>
                  <li>• Technology Used: React.js, Redux, Firebase</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white">Fitness Tracker Website</h4>
                </div>
                <p className="text-gray-400 text-sm italic mt-1">
                  A full-stack fitness tracking application designed for activity monitoring, performance analysis, and social connections.
                </p>
                <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                  <li>• Developed a fitness tracking application using React.js, Redux, Node.js, Express, and PostgreSQL.</li>
                  <li>• Implemented secure authentication, profile management, and validation using Zod.</li>
                  <li>• Built a social connection feature for friend requests and activity sharing.</li>
                  <li>• Technology Used: React.js, Redux, Node.js, Express, PostgreSQL, Zod</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
