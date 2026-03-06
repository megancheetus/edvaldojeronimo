import { MapPin, Video, Stethoscope, CalendarCheck, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const planos = [
{
  icon: Stethoscope,
  title: "Consulta Avulsa",
  description:
  "Consulta médica focada em uma queixa específica ou demanda imediata. Ideal para atendimento em clínica geral, avaliações iniciais, renovação de receituário e solicitação de exames. Perfeita para pacientes de Caruaru e Limoeiro que precisam de uma consulta pontual."
},
{
  icon: CalendarCheck,
  title: "Consulta com Direito a Retorno",
  description:
  "Indicada para medicina de família quando há solicitação de exames complementares. Inclui avaliação inicial completa e segunda sessão para análise de resultados, com condutas terapêuticas assertivas em até 30 dias. Atendimento especializados em clínica geral."
},
{
  icon: Layers,
  title: "Pacotes de Acompanhamento Médico",
  description:
  "O modelo ideal da medicina de família para cuidado continuado. Planejado para controle de condições crônicas, check-ups preventivos, hipertensos, diabéticos e saúde mental. Atendimento de médico de confiança ao longo do ano."
}];


const ModalidadesSection = () => {
  return (
    <section id="modalidades" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14">
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Formas de Atendimento - Médico em Caruaru e Limoeiro
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Opções flexíveis para um cuidado integral em clínica geral, presencial em Caruaru ou teleconsulta.
          </p>
        </motion.div>

        {/* Formas de Acesso — Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16">
          
          <Tabs defaultValue="presencial" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="presencial" className="gap-2">
                <MapPin size={16} /> Presencial em Caruaru
              </TabsTrigger>
              <TabsTrigger value="teleconsulta" className="gap-2">
                <Video size={16} /> Teleconsulta 
              </TabsTrigger>
            </TabsList>

            <TabsContent value="presencial">
              <div className="rounded-xl border border-border bg-card p-6 md:p-8 mt-3 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Atendimento Presencial em Caruaru
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Consulta médica com o tempo que você merece no consultório em Caruaru, bairro Mauricio de Nassau. Avaliação clínica completa em ambiente acolhedor, com escuta atenta, exame físico minucioso e construção personalizada de plano de cuidado. Especializado em medicina de família e clínica geral.

                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="teleconsulta">
              <div className="rounded-xl border border-border bg-card p-6 md:p-8 mt-3 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Video size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Teleconsulta para Limoeiro e Região
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Consulta por vídeo segura para pacientes de Limoeiro, Caruaru e região. Ideal para triagens, renovação de receitas, orientações clínicas e seguimento de condições crônicas. Acesso facilitado a médico de família especialista sem necessidade de locomoção.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Tipos de Plano */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
          
          Tipos de Cuidado Médico
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {planos.map((plano, i) =>
          <motion.div
            key={plano.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-xl border border-border bg-card p-7 shadow-sm hover:shadow-md transition-shadow">
            
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <plano.icon size={24} className="text-primary" />
              </div>
              <h4 className="text-base font-semibold text-foreground mb-2">
                {plano.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {plano.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ModalidadesSection;