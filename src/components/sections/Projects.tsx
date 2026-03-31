"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Full Stack POS & Business Management",
    description: "Sistema integral para la gestión de comercios. Incluye punto de venta híbrido (lector de barras/predictivo), control de stock, gestión de proveedores y cuentas corrientes.",
    tags: ["NestJS", "React", "TypeScript", "SQLite", "TypeORM", "Tailwind"],
    repo: "https://github.com/FacuEspi04/GestorNegocios.git",
    image: "/assets/POS.png"
  },
  {
    title: "Task Management API",
    description: "API RESTful robusta para gestión de tareas, equipos y proyectos. Incluye autenticación JWT y tests e2e.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Jest", "Docker"],
    repo: "https://github.com/tu-usuario/task-api",
    demo: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Automation Workflow",
    description: "Flujo automatizado con n8n que procesa correos entrantes, clasifica el tono con IA y responde al cliente.",
    tags: ["n8n", "OpenAI", "Node.js", "AWS"],
    repo: "https://github.com/tu-usuario/ai-workflow",
    demo: "https://youtube.com/watch?v=demo",
    image: "https://images.unsplash.com/photo-1620712948343-0056ce66114d?q=80&w=800&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proyectos Destacados
            <span className="text-accent"></span>
          </h2>
          <p className="text-mutedForeground max-w-2xl text-lg">
            Una selección de mis trabajos recientes centrados en resolver problemas complejos con código limpio y arquitecturas escalables.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-muted/20 border border-muted rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-mutedForeground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-muted">
                  <a 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-mutedForeground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors ml-auto"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
