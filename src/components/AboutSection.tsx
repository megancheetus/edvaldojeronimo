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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Sobre o meu trabalho
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Acredito em uma medicina centrada na pessoa, que enxerga o paciente além da queixa
              pontual. Minha prática é guiada pela <strong className="text-foreground">visão sistêmica</strong>, 
              considerando o contexto familiar, social e emocional de cada indivíduo.
            </p>
            <p>
              Como médico de família, atuo na <strong className="text-foreground">Atenção Primária à Saúde (APS)</strong>, 
              porta de entrada do cuidado no SUS. Acompanho pessoas ao longo de toda a vida, 
              promovendo prevenção, diagnóstico precoce e tratamento contínuo.
            </p>
            <p>
              Também exerço o papel de <strong className="text-foreground">preceptor de residência médica</strong>, 
              contribuindo para a formação de novos médicos de família comprometidos com a 
              saúde pública de qualidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
