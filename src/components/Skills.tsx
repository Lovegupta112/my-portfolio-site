
import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C/C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Material UI', 'Shadcn'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Prisma'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Git', 'GitHub'],
  },
  {
    title: 'Databases',
    skills: ['Firebase', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Self-learning', 'Adaptability'],
  },
];

const Skills = () => {
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
    <section id="skills" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg border border-gray-800 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-highlight mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="group relative px-3 py-2 bg-dark rounded-md text-gray-300 border border-gray-700 hover:border-highlight transition-colors duration-300"
                  >
                    <span>{skill}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
