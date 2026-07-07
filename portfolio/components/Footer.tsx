import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-black/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {year} Aashutosh Gandotra</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/aashutosh-gandotra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Aashu-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:ashugandotra14@gmail.com"
            className="hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
