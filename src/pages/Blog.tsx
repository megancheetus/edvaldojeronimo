import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
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

  // Update document title and meta tags when on Blog page
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Edvaldo Jerônimo - Blog";

    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    const prevOg = ogTitle?.getAttribute("content") ?? null;
    const prevTwitter = twitterTitle?.getAttribute("content") ?? null;

    if (ogTitle) ogTitle.setAttribute("content", "Edvaldo Jerônimo - Blog");
    if (twitterTitle) twitterTitle.setAttribute("content", "Edvaldo Jerônimo - Blog");

    return () => {
      document.title = previousTitle;
      if (ogTitle) {
        if (prevOg !== null) ogTitle.setAttribute("content", prevOg);
        else ogTitle.removeAttribute("content");
      }
      if (twitterTitle) {
        if (prevTwitter !== null) twitterTitle.setAttribute("content", prevTwitter);
        else twitterTitle.removeAttribute("content");
      }
    };
  }, []);

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
      <Navbar />
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent border-b border-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Blog de Saúde
              </h1>
              <p className="text-lg text-muted-foreground">
                Artigos e dicas sobre medicina, saúde preventiva e bem-estar para
                você e sua família.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center justify-center">
              <div className="w-288 h-96 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={new URL("../assets/logo.png", import.meta.url).href}
                  alt="Logo"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </motion.div>
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
                          <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="flex-1">
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
                              <Link to={`/blog/${post.id}`} className="block">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                                  {post.title}
                                </h2>
                              </Link>
                            </div>
                            {post.thumbnail && (
                              <div className="w-full md:w-40 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                                <img
                                  src={post.thumbnail}
                                  alt={post.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
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
