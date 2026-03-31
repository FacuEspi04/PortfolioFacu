"use client";

import { motion } from "framer-motion";
import { a } from "framer-motion/client";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-accent">Me</span>
          </h2>
          <p className="text-mutedForeground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres que trabajemos juntos? 
            Envíame un mensaje y me pondré en contacto contigo lo antes posible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="p-6 md:p-8 rounded-2xl bg-muted/20 border border-muted/50"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600" 
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600" 
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600 resize-none" 
                  placeholder="¿Cómo puedo ayudarte?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-accent hover:bg-accent-hover text-zinc-950 font-medium rounded-lg flex items-center justify-center gap-2 transition-colors group"
              >
                <span>Enviar Mensaje</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Información Directa</h3>
              <div className="space-y-4">
                <a href="mailto:facunicoespinola123@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-accent transition-colors p-4 rounded-xl hover:bg-muted/20 border border-transparent hover:border-muted/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-mutedForeground">facunicoespinola123@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/facu-espínola-0769a3371" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-accent transition-colors p-4 rounded-xl hover:bg-muted/20 border border-transparent hover:border-muted/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 text-[#0a66c2]">
                    <FaLinkedin size={22} />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-mutedForeground">Conectemos profesionalmente</p>
                  </div>
                </a>

                <a href="https://github.com/FacuEspi04" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-accent transition-colors p-4 rounded-xl hover:bg-muted/20 border border-transparent hover:border-muted/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 text-white">
                    <FaGithub size={22} />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-mutedForeground">Mira mis repositorios</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
