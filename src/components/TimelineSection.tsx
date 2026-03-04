import { Award, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Award,
    title: "Título de Especialista em Medicina de Família e Comunidade",
    subtitle: "Sociedade Brasileira de Medicina de Família e Comunidade (SBMFC)",
    year: "2024",
  },
  {
    icon: GraduationCap,
    title: "Preceptor de Residência Médica em MFC",
    subtitle: "Formação prática de residentes no contexto do SUS",
    year: "2025",
  },
  {
    icon: BookOpen,
    title: "Graduação em Medicina",
    subtitle: "Universidade de Pernambuco, Faculdade de Ciências Médicas, Recife - PE",
    year: "2020",
  },
];

const TimelineSection = () => {
  return (
    <section id="formacao" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-14 text-center"
        >
          Formação
        </motion.h2>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 md:gap-8 items-start"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
