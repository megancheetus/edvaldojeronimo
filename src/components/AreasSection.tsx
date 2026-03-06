import { HeartPulse, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  {
    icon: HeartPulse,
    title: "Atendimento em Clínica Geral",
    description:
      "Acompanhamento longitudinal especializado em medicina de família, prevenção e tratamento no contexto familiar e comunitário. Atendo em Caruaru e ofereço teleconsulta para Limoeiro.",
  },
  {
    icon: GraduationCap,
    title: "Preceptoria de Residência",
    description:
      "Formação prática de médicos residentes no SUS, garantindo atualização constante em medicina de família e as melhores evidências clínicas para seus atendimentos.",
  },
];

const AreasSection = () => {
  return (
    <section id="atuacao" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-14 text-center"
        >
          Áreas de Atuação - Especialista em Medicina de Família
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-xl p-8 border border-border card-elevated cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <area.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
