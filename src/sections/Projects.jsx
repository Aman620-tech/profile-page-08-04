import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { projects } = resumeData;

const INITIAL_COUNT = 6;

const ProjectCard = ({ project, index }) => {
  // convert description into bullet points
  const points = project.description.split("\n");

  return (
    <FadeUp delay={0.08 * index}>
      {/* ✅ Bigger Card */}
      <div className="flip-card h-[320px] lg:h-[360px] w-full cursor-pointer">
        <div className="flip-card-inner">

          {/* FRONT */}
          <motion.div
            className="flip-card-front card-base p-8 flex flex-col items-center justify-center gap-4 bg-ink-soft/40"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="font-display font-bold text-frost text-xl text-center">
              {project.title}
            </h3>

            <p className="text-xs text-silver-dim uppercase tracking-widest">
              Hover to explore
            </p>
          </motion.div>

          {/* BACK */}
          <div className="flip-card-back card-base p-7 flex flex-col bg-ink-soft/40">
            
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-ink-muted flex items-center justify-center text-silver-dim hover:text-frost hover:border-frost/30 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={15} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-ink-muted flex items-center justify-center text-silver-dim hover:text-accent hover:border-accent/40 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display font-bold text-frost text-lg mb-3">
              {project.title}
            </h3>

            {/* ✅ BULLET POINT DESCRIPTION */}
            <div className="flex-grow overflow-y-auto mb-4 pr-1 desc-scroll">
              <ul className="text-silver text-sm space-y-2 list-disc pl-4">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge text-xs">
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
        .desc-scroll { scrollbar-width: thin; }
      `}</style>
    </FadeUp>
  );
};

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
            Production systems and platforms I've built or contributed to.
          </p>
        </FadeUp>

        {/* ✅ 2 PROJECTS PER ROW */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
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
                  className={`transition-transform duration-200 ${
                    showAll ? "rotate-90" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            </div>
          </FadeUp>
        )}
      </div>
    </SectionWrapper>
  );
};