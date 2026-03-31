"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";

const cards = [
  {
    title: "Ingeniería en Sistemas",
    description: "Estudiante avanzado con sólidas bases en arquitectura y algoritmos.",
    icon: Cpu,
  },
  {
    title: "Desarrollo Full-Stack",
    description: "Creación de aplicaciones web escalables de principio a fin.",
    icon: Globe,
  },
  {
    title: "Resolución de Problemas",
    description: "Enfoque analítico para transformar requisitos complejos en soluciones limpias.",
    icon: Code2,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Columna Izquierda - Título Pinned */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            >
              Sobre mí
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-12 h-1 bg-accent mt-6 rounded-full"
            />
          </div>

          {/* Columna Derecha - Contenido */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-mutedForeground text-lg sm:text-xl leading-relaxed space-y-6"
            >
              <p>
                Soy un estudiante avanzado de <span className="text-foreground font-medium">Ingeniería en Sistemas</span> con una profunda pasión por el desarrollo de software. Mi formación me ha proporcionado una base sólida en arquitectura de sistemas, algoritmos y resolución de problemas algorítmicos.
              </p>
              <p>
                Como <span className="text-foreground font-medium">Full-Stack Developer</span>, disfruto construyendo productos digitales desde cero. No solo escribo código; diseño soluciones eficientes y escalables. Me enfoco en crear interfaces de usuario minimalistas e intuitivas (UX/UI) respaldadas por arquitecturas de backend robustas.
              </p>
              <p>
                Mi objetivo es seguir evolucionando profesionalmente, aportando valor y aplicando mi pensamiento analítico para construir herramientas modernas que generen impacto.
              </p>
            </motion.div>

            {/* Tarjetas de valores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-muted/30 border border-muted p-6 rounded-2xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent transition-transform group-hover:scale-110 duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-foreground font-medium mb-2">{card.title}</h3>
                    <p className="text-sm text-mutedForeground leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
