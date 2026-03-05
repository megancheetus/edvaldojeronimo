import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 md:pt-28 min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Artigo não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              Desculpe, o artigo que você procura não existe.
            </p>
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-6 rounded-lg transition-colors">
              <ArrowLeft size={18} />
              Voltar ao Blog
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-primary/5 to-transparent border-b border-primary/10">
        <div className="container mx-auto px-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/blog")}
            className="mb-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
            <ArrowLeft size={18} />
            Voltar
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant="outline">{post.category}</Badge>
              {post.featured && (
                <Badge className="bg-primary text-primary-foreground">
                  Destaque
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime} min de leitura
              </div>
              <div className="font-medium text-foreground">{post.author}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-10 mb-6" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-6 mb-3" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-lg md:text-xl font-bold text-foreground mt-5 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="mb-2" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-bold text-foreground" {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="italic text-muted-foreground" {...props} />
                ),
                code: ({ node, children, ...props }: any) => (
                  <code className="bg-section-alt text-foreground px-2 py-1 rounded text-sm font-mono" {...props} />
                ),
                pre: ({ node, ...props }) => (
                  <pre className="bg-section-alt text-foreground p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-primary hover:text-primary/80 underline" {...props} />
                ),
                img: ({ node, ...props }: any) => (
                  <img className="max-w-full h-auto rounded-lg my-4" {...props} />
                ),
              }}>
              {post.content}
            </ReactMarkdown>
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-12 pt-8 border-t border-section-border">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-muted-foreground">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1 text-sm bg-section-alt text-foreground px-3 py-1 rounded-full border border-section-border hover:bg-section-alt/80 transition-colors cursor-pointer">
                  <Tag size={14} />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA - Compartilhar ou Próximo Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mt-12 p-8 bg-section-alt rounded-lg border border-section-border">
            <h3 className="text-lg font-bold text-foreground mb-3">
              Gostou deste artigo?
            </h3>
            <p className="text-muted-foreground mb-4">
              Compartilhe com seus amigos nas redes sociais ou continue
              explorando nosso blog para mais conteúdos sobre saúde e bem-estar.
            </p>
            <button
              onClick={() => navigate("/blog")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-6 rounded-lg transition-colors">
              Ver mais artigos
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
