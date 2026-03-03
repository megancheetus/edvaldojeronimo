import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Sobre o meu trabalho
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Minha prática médica é construída sobre um pilar que se tornou raro: o tempo. No atendimento particular, ofereço uma medicina centrada em você, sem a pressa habitual dos prontos-socorros ou planos de saúde. Como Médico de Família, meu papel é ser o seu <strong className="text-foreground">médico de confiança</strong>. Eu não olho apenas para uma queixa isolada, mas mapeio seu histórico, estilo de vida e contexto familiar para criar um plano de cuidado altamente personalizado.
            </p>
            <p>
              Resolvo a grande maioria das suas demandas de saúde de forma integral, promovendo prevenção real e tratamentos assertivos. Trago para o consultório a expertise de quem atua na formação de novos médicos como <strong className="text-foreground">preceptor de residência</strong>, o que me exige atualização constante e garante a você um cuidado pautado nas melhores evidências científicas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;