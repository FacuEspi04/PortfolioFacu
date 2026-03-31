import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-muted/30 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-mutedForeground text-center md:text-left">
          © {currentYear} Facundo Espínola.
        </p>

        <div className="flex items-center gap-4 text-mutedForeground">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
