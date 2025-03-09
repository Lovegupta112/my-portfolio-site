
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-dark-accent" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-6">
            <p className="text-gray-300 leading-relaxed reveal">
              I'm a passionate Full Stack Developer with 1.5 years of professional experience, 
              specializing in creating secure, efficient, and user-friendly web applications. 
              My journey in software development began with a strong foundation in computer science, 
              which I've built upon through continuous learning and practical experience.
            </p>
            
            <p className="text-gray-300 leading-relaxed reveal">
              Currently, I work at Varthana Finance Private Limited in Bengaluru, where I develop and 
              optimize scalable web applications using React.js, Node.js, and PostgreSQL. I take pride in 
              streamlining backend workflows and ensuring secure, efficient handling of financial data.
            </p>
            
            <p className="text-gray-300 leading-relaxed reveal">
              Prior to this, I gained valuable experience as a Software Developer Trainee at MountBlue Technologies, 
              where I built robust and responsive front-end interfaces with React.js and developed secure, 
              scalable backend solutions using Node.js.
            </p>
            
            <p className="text-gray-300 leading-relaxed reveal">
              I've also contributed to open-source projects and worked as a Web Development Intern, 
              experiences that have enriched my technical skills and collaborative abilities.
            </p>
          </div>
          
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-lg border border-gray-800 reveal">
              <h3 className="text-xl font-semibold mb-4 text-highlight">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Bachelor of Computer Application</p>
                  <p className="text-gray-400">Dr. Virendra Swarup College of Management Studies</p>
                  <p className="text-gray-500 text-sm">2019-2022</p>
                </div>
                <div>
                  <p className="font-medium">Senior Secondary</p>
                  <p className="text-gray-400">St. John Intermediate College</p>
                  <p className="text-gray-500 text-sm">2019</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg border border-gray-800 reveal">
              <h3 className="text-xl font-semibold mb-4 text-highlight">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Cloud Security', 'Web3', 'Problem Solving', 'Self-learning', 'Adaptability'].map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
