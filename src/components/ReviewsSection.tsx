import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Julia Gabriela Barboza",
    rating: 5,
    comment:
      "Dr. Edvaldo acolheu com muita atenção e cuidado, sem pressa e com uma escuta realmente interessada no que eu estava sentindo. Isso fez toda a diferença. O atendimento foi humanizado e pensado de forma individual, respeitando minhas necessidades. O tratamento foi explicado de maneira clara e conduzido de forma prática, sempre priorizando meu conforto. Obrigada pelo cuidado, pela dedicação e pela forma tão atenciosa.",
    date: "04/03/2026",
    avatar: "/lovable-uploads/avatar-julia.jpg",
  },
  {
    id: 2,
    name: "Vitória Vaz",
    rating: 5,
    comment:
      "Edvaldo é um excelente médico! Sabe ouvir o paciente, atencioso nos mínimos detalhes, assertivo nos diagnósticos e consequentemente no tratamento também. Recomendo a todo mundo.",
    date: "04/03/2026",
    avatar: "/lovable-uploads/avatar-vitoria.jpg",
  },
  {
    id: 3,
    name: "Gabrielly Oliveira",
    rating: 5,
    comment:
      "Dr. Edvaldo é um dos médicos mais humanos que já tive o prazer de conhecer. É holístico, cuidadoso e, sobretudo, excelente no que faz. Indico de olhos fechados!",
    date: "04/03/2026",
    avatar: "/lovable-uploads/avatar-gabrielly.jpg",
  },
  {
    id: 4,
    name: "Emiliana Duarte",
    rating: 5,
    comment:
      "Conheço o dr. Edvaldo desde o início de sua carreira. Sempre muito atencioso, inteligente e prestativo. Muitas vezes cuidou de mim e da minha família com muita dedicação e responsabilidade. Sou muito grata pelo excelente trabalho e recomendo a todos.",
    date: "04/03/2026",
    avatar: "/lovable-uploads/avatar-emiliana.jpg",
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover bg-slate-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
            {review.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {Array(review.rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
        </div>

        {/* Comment */}
        <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
      </div>
    </div>
  </Card>
);

const ReviewsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Avaliações de Pacientes</h2>
        <p className="text-lg text-gray-600">Confira o que meus pacientes têm a dizer sobre o atendimento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Rating Summary */}
      <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="flex justify-center gap-1 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">5.0 de 5 estrelas</p>
        <p className="text-gray-600 mb-6">(4 avaliações verificadas)</p>

        {/* Google Reviews Button */}
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
        >
          <a href="https://g.page/r/CQQZiGW2lDCQEAE/review" target="_blank" rel="noopener noreferrer">
            <Star className="w-4 h-4" />
            Deixar uma Avaliação no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ReviewsSection;
