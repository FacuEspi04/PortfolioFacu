"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-muted-foreground/20 text-sm font-medium text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Disponible para nuevas oportunidades
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hola, soy <span className="text-accent">Facundo Espínola</span>. <br />
            <span className="text-muted-foreground">Software Engineer.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Estudiante avanzado de Ingeniería en Sistemas y Full-Stack Developer. Construyo experiencias digitales
            escalables usando arquitecturas modernas con Next.js, React y TypeScript.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-accent px-8 font-medium text-background transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Ver mis proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-muted bg-transparent px-8 font-medium text-foreground transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 hover:text-accent"
            >
              Contactarme
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
