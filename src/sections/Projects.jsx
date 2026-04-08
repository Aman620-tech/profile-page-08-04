import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { projects } = resumeData;

const INITIAL_COUNT = 6; // how many to show by default

const ProjectCard = ({ project, index }) => (
  <FadeUp delay={0.08 * index}>
    <div className="flip-card h-64 lg:h-72 w-full cursor-pointer">
      <div className="flip-card-inner">

        {/* FRONT */}
        <motion.div
          className="flip-card-front card-base p-6 lg:p-8 flex flex-col items-center justify-center gap-4 bg-ink-soft/40"
          whileHover={{ y: 0 }}
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-sm">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display font-bold text-frost text-lg text-center">
            {project.title}
          </h3>
          <p className="text-xs text-silver-dim uppercase tracking-widest">Hover to explore</p>
        </motion.div>

        {/* BACK */}
        <div className="flip-card-back card-base p-6 lg:p-8 flex flex-col bg-ink-soft/40">
          <div className="flex items-start justify-between mb-4">
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-xs">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex gap-2">
              {project.github && (
               <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-ink-muted flex items-center justify-center text-silver-dim hover:text-frost hover:border-frost/30 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                </a>
              )}
              {project.live && (
                
                <a  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-ink-muted flex items-center justify-center text-silver-dim hover:text-accent hover:border-accent/40 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display font-bold text-frost text-base mb-2">
            {project.title}
          </h3>

          <div className="flex-grow overflow-y-auto mb-4 pr-1 desc-scroll">
            <p className="text-silver text-xs leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>

    <style>{`
      .flip-card { perspective: 1000px; }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
        transform-style: preserve-3d;
      }
      .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: inherit;
      }
      .flip-card-back { transform: rotateY(180deg); }
      .desc-scroll::-webkit-scrollbar { width: 3px; }
      .desc-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(100, 255, 180, 0.25);
        border-radius: 999px;
      }
      .desc-scroll::-webkit-scrollbar-thumb:hover {
        background-color: rgba(100, 255, 180, 0.45);
      }
      .desc-scroll::-webkit-scrollbar-track { background: transparent; }
      .desc-scroll { scrollbar-width: thin; }
    `}</style>
  </FadeUp>
);

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <SectionWrapper id="projects" className="section-padding bg-ink-soft/30">
      <div className="section-container">
        <FadeUp>
          <span className="accent-text mb-4 block">Work</span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-silver max-w-xl mb-12 text-base">
            Production systems and platforms I've built or significantly contributed to.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <FadeUp delay={0.2}>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-secondary group"
              >
                {showAll ? "Show Less" : `Show ${hiddenCount} More`}
                <ArrowRight
                  size={14}
                  className={`transition-transform duration-200 ${showAll ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </FadeUp>
        )}
      </div>
    </SectionWrapper>
  );
};