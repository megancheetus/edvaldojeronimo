import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import fotoProfissional from "@/assets/foto-profissional.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1">
            
            <img src={logo} alt="Logo Edvaldo Jerônimo" className="h-32 md:h-64 lg:h-72 w-auto mb-4 md:mb-6" />
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Cuidado integral e contínuo
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
              Médico de Família<br />e Comunidade.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md">
              Foco na pessoa e promoção da saúde.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              
              <a
                href="https://wa.me/5581992871707"
                target="_blank"
                rel="noopener noreferrer">
                
                <MessageCircle size={20} />
                Agendar Atendimento
              </a>
            </Button>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center">
            
            <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-2xl bg-secondary flex items-center justify-center border border-border overflow-hidden shadow-lg">
              <img
                src={fotoProfissional}
                alt="Dr. Edvaldo Jerônimo da Silva Júnior"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;