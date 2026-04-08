import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Download } from "lucide-react";
import { resumeData } from "../utils/resumeData";

const { personal } = resumeData;

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1tT2W-Fha_N1pPomLwnWRq11QeN0F2RnE";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const handleResumeDownload = () => {
    window.open(RESUME_DOWNLOAD_URL, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-dots overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse2 pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse2 pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="section-container w-full py-24 pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent font-mono text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-800 text-5xl sm:text-7xl lg:text-8xl text-frost leading-[0.95] tracking-tight mb-6"
          >
            {personal.name.split(" ").map((word, i) => (
              <span
                key={i}
                className={i === 0 ? "block" : i === 1 ? "block" : "block gradient-text"}
              >
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              {personal.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-silver text-lg lg:text-xl font-body font-300 leading-relaxed max-w-2xl mb-12"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={16} />
            </a>
            <button onClick={handleResumeDownload} className="btn-secondary">
              <Download size={16} />
              Download Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-silver-dim hover:text-frost transition-colors text-sm font-mono"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="w-px h-4 bg-ink-muted" />
            
            <a  href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-silver-dim hover:text-frost transition-colors text-sm font-mono"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">{personal.email}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver-dim"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};