import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../utils/resumeData";

const { personal } = resumeData;

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-muted bg-ink py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-800 text-frost">AKP</span>
          <span className="text-accent">.</span>
          <span className="text-silver-dim font-mono text-xs ml-2">© {year} Aman Kumar Pandey</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-dim hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-silver-dim hover:text-accent transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
