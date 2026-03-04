export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Muito além do check-up: O que é a verdadeira prevenção em saúde?",
    excerpt: "Fazer dezenas de exames sem necessidade não é prevenção. Entenda como a Medicina de Família atua para proteger você de intervenções desnecessárias.",
    content: `Existe um mito muito comum na medicina moderna: a ideia de que fazer uma bateria de exames (o famoso "check-up" completo) todo ano é sinônimo de prevenção. Na realidade, a verdadeira medicina preventiva vai muito além de buscar doenças com exames de imagem ou sangue.

## Prevenção Quaternária: Protegendo você do excesso de medicina
Como Médico de Família, um dos meus maiores papéis é proteger o paciente da **iatrogenia** — os danos causados por intervenções médicas desnecessárias. Fazer exames sem indicação clínica clara frequentemente leva a "falsos positivos", gerando ansiedade, biópsias desnecessárias e tratamentos para problemas que nunca afetariam sua qualidade de vida.

## O que realmente previne doenças?
A prevenção eficaz é baseada em evidências científicas e no seu histórico pessoal e familiar. Ela se divide em:

- **Mudança estrutural de hábitos:** Ajustes reais no sono, controle de estresse e alimentação, que reduzem drasticamente o risco de síndromes metabólicas.
- **Rastreamento inteligente:** Exames solicitados na idade certa e no intervalo correto (como mamografia, pesquisa de sangue oculto nas fezes ou papanicolau), direcionados para o seu perfil.
- **Continuidade do cuidado:** Ter um médico de confiança que conhece sua história ao longo do tempo é mais eficaz do que consultar especialistas diferentes para cada sintoma isolado.

Investir em saúde não é colecionar laudos normais, mas sim construir um plano de cuidado focado no que realmente impacta o seu bem-estar.`,
    author: "Dr. Edvaldo Jerônimo",
    date: "2026-03-04",
    readTime: 4,
    category: "Saúde Preventiva",
    tags: ["prevenção", "medicina de família", "check-up"],
    featured: true,
  },
  {
    id: "2",
    title: "Por que você não consegue dormir? O perigo das pílulas mágicas",
    excerpt: "A insônia é um sintoma, não a doença. Descubra por que a higiene do sono é o único tratamento real e definitivo a longo prazo.",
    content: `Vivemos uma epidemia de uso de medicamentos para dormir. Fármacos como o zolpidem e os benzodiazepínicos (clonazepam, diazepam) são frequentemente prescritos como primeira linha para a insônia, mas a ciência nos mostra que essa é uma abordagem perigosa e insustentável.

## O problema dos indutores de sono
Os remédios "tarja preta" não produzem um sono natural. Eles atuam sedando o cérebro, o que altera a arquitetura do sono (reduzindo fases vitais como o sono REM). O resultado? Você "apaga", mas acorda cansado, com a memória prejudicada e, em pouco tempo, desenvolve dependência química e tolerância.

## Higiene do Sono: O tratamento padrão-ouro
A insônia crônica é um comportamento aprendido pelo cérebro, muitas vezes associado a quadros de ansiedade ou depressão não diagnosticados. O tratamento real exige recondicionamento:

1. **Desmame luminoso:** Reduzir drasticamente a exposição a luzes brancas e telas (celular, TV) pelo menos 90 minutos antes de deitar. A luz bloqueia a produção natural de melatonina.
2. **Restrição de leito:** A cama deve ser usada apenas para dormir e intimidade. Ler, comer ou trabalhar na cama ensina o seu cérebro que aquele é um lugar de vigília.
3. **Controle de estímulos:** O consumo de cafeína tem uma meia-vida longa. Cortar o café e estimulantes logo após o almoço (14h) faz diferença clínica real na indução do sono à noite.

Se o sono não vem, não lute na cama. Levante-se, vá para um ambiente com luz fraca, faça uma atividade monótona (como ler um livro físico) e só retorne quando o cansaço chegar.`,
    author: "Dr. Edvaldo Jerônimo",
    date: "2026-03-02",
    readTime: 5,
    category: "Saúde do Sono",
    tags: ["insônia", "higiene do sono", "ansiedade"],
    featured: true,
  },
  {
    id: "3",
    title: "Exercício físico não é sobre estética, é prescrição médica",
    excerpt: "Entenda por que a atividade física é o tratamento de primeira linha para hipertensão, diabetes e saúde mental.",
    content: `No consultório, costumo dizer aos pacientes que se os benefícios do exercício físico pudessem ser colocados em uma pílula, ela seria o medicamento mais prescrito, mais eficaz e com menos efeitos colaterais da história da medicina. 

## A biologia do movimento
Deixar o sedentarismo de lado não é uma questão de alcançar um padrão estético, mas sim uma intervenção médica direta na fisiologia do seu corpo. Durante a contração muscular ativa, o corpo libera *miocinas*, substâncias anti-inflamatórias potentes que atuam sistemicamente. 

Como resultado clínico, o exercício atua como:
- **Anti-hipertensivo natural:** Promove vasodilatação prolongada, reduzindo os níveis de pressão arterial ao longo do dia.
- **Regulador glicêmico:** Melhora a sensibilidade à insulina, permitindo que a glicose entre nas células sem sobrecarregar o pâncreas, sendo fundamental no tratamento do diabetes tipo 2.
- **Antidepressivo e ansiolítico:** Regula neurotransmissores como a serotonina e a dopamina, com eficácia semelhante à terapia medicamentosa em casos de depressão leve a moderada.

## Como quebrar a inércia?
A barreira inicial é o maior desafio. Você não precisa começar correndo uma maratona ou passando duas horas na academia. A regra é consistência, não intensidade extrema.

- **Comece com a dose mínima eficaz:** 15 a 20 minutos de caminhada acelerada todos os dias já tiram você da zona de risco do sedentarismo.
- **O poder do NEAT:** Aumente sua Termogênese de Atividade Não-Relacionada ao Exercício. Troque o elevador pelas escadas, estacione o carro mais longe, levante-se a cada hora de trabalho.

A prescrição é simples: encontre uma atividade que você tolere fazer pelo resto da vida e comece hoje.`,
    author: "Dr. Edvaldo Jerônimo",
    date: "2026-02-28",
    readTime: 4,
    category: "Estilo de Vida",
    tags: ["exercício", "hipertensão", "diabetes"],
  },
];