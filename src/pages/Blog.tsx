import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

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
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent border-b border-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog de Saúde
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos e dicas sobre medicina, saúde preventiva e bem-estar para
              você e sua família.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Filtro por Categoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">
              Categorias
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-section-alt text-foreground hover:bg-section-alt/80 border border-section-border"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Timeline de Posts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post, index) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <div className="flex gap-6">
                    {/* Timeline Dot e Linha */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          post.featured
                            ? "bg-primary border-primary shadow-lg"
                            : "bg-section-alt border-primary"
                        }`}
                      />
                      {index < sortedPosts.length - 1 && (
                        <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-transparent mt-2" />
                      )}
                    </div>

                    {/* Conteúdo do Post */}
                    <div className="flex-1 pb-8">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-section-alt border-section-border">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-3 flex-wrap">
                                <Badge variant="outline" className="text-xs">
                                  {post.category}
                                </Badge>
                                {post.featured && (
                                  <Badge className="bg-primary text-primary-foreground text-xs">
                                    Destaque
                                  </Badge>
                                )}
                              </div>
                              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </h2>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Metadados */}
                          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-4 pb-4 border-b border-section-border">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              {post.readTime} min de leitura
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex items-center gap-2 flex-wrap mb-4">
                            {post.tags.map((tag) => (
                              <div
                                key={tag}
                                className="flex items-center gap-1 text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                                <Tag size={12} />
                                {tag}
                              </div>
                            ))}
                          </div>

                          {/* Botão Ler Mais */}
                          <a
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                            Ler artigo completo
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum artigo encontrado nesta categoria.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
