
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thanks for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-dark-accent">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center">
                  <Mail size={18} className="text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:loveguptaofficials@gmail.com" 
                    className="text-gray-200 hover:text-highlight transition-colors duration-300"
                  >
                    loveguptaofficials@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center">
                  <Phone size={18} className="text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href="tel:+919335958102" 
                    className="text-gray-200 hover:text-highlight transition-colors duration-300"
                  >
                    +91 9335958102
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/lovegupta112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-300 hover:text-highlight transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/guptalove" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-300 hover:text-highlight transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-gray-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-gray-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-gray-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-highlight text-dark hover:bg-highlight/90 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
