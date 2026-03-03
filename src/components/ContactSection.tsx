import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Contato e Localização
          </h2>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={18} />
            <p className="text-sm md:text-base">
              Rua Artur Antônio da Silva, 481 — Bairro Universitário, Caruaru-PE, 55002-970
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-10 py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <a
              href="https://wa.me/5581992871707"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
