import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const formatDateBadge = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.toLocaleDateString("pt-BR", { day: "2-digit" }),
    month: date
      .toLocaleDateString("pt-BR", { month: "short" })
      .replace(".", "")
      .toLowerCase(),
  };
};

const LatestArticlesSection = () => {
  return (
    <section id="artigos-recentes" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-lg bg-section-alt px-4 py-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase mb-5 border border-border">
            Artigos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Últimos artigos publicados
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Conteúdos recentes sobre prevenção, estilo de vida e cuidado integral em Medicina de Família.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card overflow-hidden card-elevated"
            >
              {post.thumbnail ? (
                <Link to={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-md bg-primary px-2.5 py-1 text-center text-primary-foreground shadow-md">
                    <div className="text-base font-bold leading-none">{formatDateBadge(post.date).day}</div>
                    <div className="text-[11px] font-semibold uppercase leading-none mt-1">
                      {formatDateBadge(post.date).month}
                    </div>
                  </div>
                </Link>
              ) : null}

              <div className="p-6">
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-foreground leading-tight mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {post.excerpt.length > 180 ? `${post.excerpt.slice(0, 180)}...` : post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                  <span>{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime} min
                  </span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Saiba mais
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" className="px-8">
            <Link to="/blog">Ver todos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
