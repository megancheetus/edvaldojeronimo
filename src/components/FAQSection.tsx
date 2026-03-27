import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import fotoProfissional from "@/assets/asda.jpg";

const faqs = [
  {
    question: "Quando devo procurar um Médico de Família em vez de um especialista?",
    answer:
      "O Médico de Família deve ser o seu primeiro contato para qualquer queixa de saúde. Ele é treinado para resolver a grande maioria dos problemas de forma integral, considerando seu histórico e contexto de vida. Caso seja necessária uma intervenção mais específica, ele fará o encaminhamento ao especialista adequado, garantindo que você não perca tempo na especialidade errada.",
  },
  {
    question: "A teleconsulta resolve quais tipos de atendimento?",
    answer:
      "Com a teleconsulta, conseguimos dar andamento ao seu cuidado no conforto da sua casa. Ela é a ferramenta ideal para revisarmos exames, ajustarmos tratamentos em andamento e resolvermos problemas de saúde mais simples. Porém, a segurança vem em primeiro lugar: se o seu caso exigir uma avaliação presencial ou apresentar qualquer sinal de gravidade, você será orientado a buscar o consultório ou uma emergência.",
  },
  {
    question: "Quais exames devo levar na primeira consulta?",
    answer:
      "Para a nossa primeira consulta, traga tudo o que puder ajudar a contar a sua história de saúde. Isso inclui: exames recentes (de sangue ou imagem), receitas ou as caixas das medicações que você usa, carteira de vacinação e relatórios anteriores. Quanto mais informações você trouxer, mais preciso e personalizado será o seu plano de cuidado.",
  },
  {
    question: "Com que frequência devo fazer acompanhamento médico?",
    answer:
      "A ideia de que todos precisam de um 'check-up anual' com dezenas de exames não se aplica na prática. Se você é um adulto jovem e saudável, consultas a cada um ou dois anos para avaliação clínica e atualização vacinal costumam ser suficientes. Já se você tem condições crônicas, como pressão alta ou diabetes, ou está em faixas etárias que exigem rastreamentos específicos, o acompanhamento deve ser mais frequente, geralmente a cada 3 a 6 meses. Seu plano será definido na nossa primeira consulta.",
  },
  {
    question: "Você atende crianças, adultos e idosos?",
    answer:
      "Sim. A Medicina de Família acompanha pessoas em diferentes fases da vida, com foco em prevenção, diagnóstico precoce e tratamento contínuo, sempre considerando o contexto familiar e social.",
  },
];

const FAQSection = () => {
  return (
    <section id="duvidas" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-block rounded-lg bg-background px-4 py-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase mb-5 border border-border">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-6">
              Principais dúvidas dos pacientes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Separei as respostas para as perguntas que mais escuto no dia a dia. Leia para entender como o acompanhamento em Medicina de Família funciona na prática e como organizamos o seu cuidado entre o presencial e o online.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <img
                src={fotoProfissional}
                alt="Dr. Edvaldo Jerônimo"
                className="h-16 w-16 rounded-full object-cover object-top border border-border"
              />
              <div>
                <p className="text-2xl font-bold text-primary leading-tight">
                  Dr. Edvaldo Jerônimo
                </p>
                <p className="text-base font-semibold uppercase tracking-wide text-muted-foreground">
                  Medicina de Família
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index + 1}`}
                  className="rounded-xl border border-border bg-background px-6 card-elevated"
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-primary hover:no-underline">
                    <span>{`0${index + 1}. ${item.question}`}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
