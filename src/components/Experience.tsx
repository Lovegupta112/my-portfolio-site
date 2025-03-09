
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Varthana Finance Private Limited',
    location: 'Bengaluru',
    period: 'Jan 2024 - Present',
    description: [
      'Developed and optimized scalable web applications using React.js, Node.js, and PostgreSQL.',
      'Streamlined backend workflows and ensured secure, efficient handling of financial data.',
    ]
  },
  {
    title: 'Software Developer Trainee',
    company: 'MountBlue Technologies',
    location: 'Bengaluru',
    period: 'Aug 2023 - Dec 2023',
    description: [
      'Built robust and responsive front-end interfaces with React.js, ensuring a seamless and secure user experience.',
      'Developed secure, scalable backend solutions using Node.js, optimized database queries, and containerized applications with Docker.',
    ]
  },
  {
    title: 'Open Source Contributor',
    company: 'GirlScript Summer of Code, Social(Formerly Script Foundation)',
    location: 'Remote',
    period: 'May - July 2023',
    description: [
      'Teamwork, version control, code reviews, and issue tracking.',
      'Building relationships and contributing to the programming community.',
      'Etiquette, licensing, and contribution guidelines.',
    ]
  },
  {
    title: 'Web Development Intern',
    company: 'LueurTech',
    location: 'Online',
    period: 'Dec 2021 - Jan 2022',
    description: [
      'Gained proficiency in DOM manipulation and implemented HTML, CSS best practices for web development.',
      'Learned how to efficiently debug and optimize code for better performance.',
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="experience" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-highlight border-4 border-dark" />
                
                {/* Left side (even index) */}
                {index % 2 === 0 && (
                  <>
                    <div className="glass-card p-6 rounded-lg border border-gray-800 relative md:mr-12">
                      {/* Position indicator */}
                      <div className="hidden md:block absolute text-xs font-semibold text-highlight bg-dark-accent px-2 py-1 rounded-full uppercase right-[-5px] top-[-10px]">
                        Left
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white md:text-right">{exp.title}</h3>
                      <p className="text-highlight font-medium mt-1 md:text-right">{exp.company}</p>
                      <div className="flex items-center justify-between mt-2 mb-4">
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                      </div>
                      <ul className="space-y-2 text-gray-300 md:text-right">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                )}
                
                {/* Right side (odd index) */}
                {index % 2 !== 0 && (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="glass-card p-6 rounded-lg border border-gray-800 relative md:ml-12">
                      {/* Position indicator */}
                      <div className="hidden md:block absolute text-xs font-semibold text-highlight bg-dark-accent px-2 py-1 rounded-full uppercase left-[-5px] top-[-10px]">
                        Right
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-highlight font-medium mt-1">{exp.company}</p>
                      <div className="flex items-center justify-between mt-2 mb-4">
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
