
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
