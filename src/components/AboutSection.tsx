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
            Sobre o meu trabalho - Médico de Família em Caruaru e Região
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Como <strong className="text-foreground">Médico de Família em Caruaru e Região</strong>, minha prática médica é construída sobre um pilar que se tornou raro: o tempo. No atendimento particular, ofereço uma medicina centrada em você, sem a pressa habitual dos prontos-socorros ou planos de saúde. Meu papel como <strong className="text-foreground">médico de confiança</strong> é ser o seu primeiro ponto de contato para toda demanda de saúde. Não olho apenas para uma queixa isolada, mas mapeio seu histórico, estilo de vida e contexto familiar para criar um plano de cuidado altamente personalizado.
            </p>
            <p>
              Como Clínico especialista em <strong className="text-foreground">Medicina de Família</strong>, resolvo a grande maioria das suas demandas de saúde de forma integral, promovendo prevenção real e tratamentos assertivos. Trago para o consultório a expertise de quem atua na formação de novos médicos como <strong className="text-foreground">preceptor de residência</strong>, o que me exige atualização constante e garante a você um cuidado pautado nas melhores evidências científicas.
            </p>
            <p>
              Atendo em Caruaru com consultório moderno e acolhedor, oferecendo também <strong className="text-foreground">teleconsulta para pacientes de Limoeiro e região</strong>, garantindo acesso facilitado ao cuidado médico especializado em medicina de família.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;