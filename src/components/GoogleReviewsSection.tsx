import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GoogleReviewsSection = () => {
  const renderStars = () => {
    return (
      <div className="flex gap-3 justify-center mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}>
            <Star
              size={48}
              className="fill-yellow-400 text-yellow-400"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Avaliações do Google
            </h2>
            <p className="text-muted-foreground text-lg">
              Sua opinião é importante para melhorar cada vez mais o atendimento. 
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}>
            <Card className="bg-gradient-to-br from-section-alt to-background border-section-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center">
                  {renderStars()}
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
                    Deixe sua avaliação
                  </h3>
                  
                  <p className="text-muted-foreground text-center mb-8 max-w-md leading-relaxed">
                    Sua opinião sobre o atendimento é fundamental para que eu continue melhorando cada dia mais. Clique no botão abaixo e compartilhe sua experiência no Google.
                  </p>
                  
                  <a
                    href="https://g.page/r/CQQZiGW2lDCQEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    <Star size={20} className="fill-current" />
                    Avaliar no Google
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
