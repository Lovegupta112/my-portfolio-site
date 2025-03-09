
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Podcast App',
    description: 'A user-friendly podcast app with React, Redux, and Firebase for seamless podcast creation and discovery.',
    technologies: ['React.js', 'Redux', 'Firebase'],
    points: [
      'Developed a podcast creation and discovery application using React, Redux, and Firebase.',
      'Integrated Firebase for user authentication, real-time database management, and data security.',
      'Enabled users to create and share podcasts and episodes seamlessly.',
    ],
    github: 'https://github.com/lovegupta112',
    live: '#',
  },
  {
    title: 'Fitness Tracker Website',
    description: 'A full-stack fitness tracking application designed for activity monitoring, performance analysis, and social connections.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Zod'],
    points: [
      'Developed a fitness tracking application using React.js, Redux, Node.js, Express, and PostgreSQL.',
      'Implemented secure authentication, profile management, and validation using Zod.',
      'Built a social connection feature for friend requests and activity sharing.',
    ],
    github: 'https://github.com/lovegupta112',
    live: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" className="section-padding bg-dark-accent" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-lg border border-gray-800 h-full"
              variants={item}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 30px -15px rgba(255, 215, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-dark rounded-full text-xs text-gray-300 border border-gray-700"
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: 'rgba(255, 215, 0, 0.5)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <ul className="space-y-2 text-gray-300 mb-6 flex-grow">
                  {project.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="leading-relaxed text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      • {point}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex gap-4 mt-auto">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-300 hover:text-white border border-gray-700"
                    asChild
                  >
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="mr-2" /> Code
                    </motion.a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-highlight hover:text-highlight border border-highlight/30 hover:border-highlight/60"
                    asChild
                  >
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight size={16} className="mr-2" /> Live Demo
                    </motion.a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
