'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiMysql,
  SiN8N,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-white' },
  { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933]' },
  { name: 'NestJS', icon: SiNestjs, color: 'hover:text-[#E0234E]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1]' },
  { name: 'Docker', icon: SiDocker, color: 'hover:text-[#2496ED]' },
  { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032]' },
  { name: 'MySQL', icon: SiMysql, color: 'hover:text-[#4479A1]' },
  { name: 'n8n', icon: SiN8N, color: 'hover:text-[#FF6A5C]' },
  { name: 'AWS', icon: FaAws, color: 'hover:text-[#232F3E]' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Mi <span className="text-accent">Stack</span>
          </h2>
          <p className="text-mutedForeground max-w-2xl text-lg">
            Tecnologías y herramientas que utilizo para construir aplicaciones web modernas, rápidas y escalables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/30 border border-muted hover:bg-muted/50 transition-colors duration-300 group ${skill.color}`}
            >
              <skill.icon className="h-10 w-10 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-mutedForeground group-hover:text-current transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
