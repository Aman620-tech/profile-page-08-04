import { motion } from "framer-motion";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { skills } = resumeData;

const categoryColors = {
  Frontend: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
  Backend: "from-accent/10 to-emerald-500/10 border-accent/20",
  Database: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
  Cloud: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
};

const categoryAccent = {
  Frontend: "text-blue-400",
  Backend: "text-accent",
  Database: "text-purple-400",
  Cloud: "text-orange-400",
};

const categoryIcon = {
  Frontend: "⚡",
  Backend: "🛠️",
  Database: "🗄️",
  Cloud: "☁️",
};

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <span className="accent-text mb-4 block">Expertise</span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="heading-lg mb-16">Technical Skills</h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <FadeUp key={category} delay={0.07 * ci}>
              {/* Flip card container */}
              <div className="flip-card h-48 lg:h-56 w-full cursor-pointer">
                <div className="flip-card-inner">

                  {/* FRONT — shows "Skills" heading */}
                  <div
                    className={`flip-card-front card-base p-6 lg:p-8 bg-gradient-to-br ${categoryColors[category]} flex flex-col items-center justify-center gap-3`}
                  >
                    <span className="text-4xl">{categoryIcon[category]}</span>
                    <h3 className={`font-display font-bold text-xl tracking-wide ${categoryAccent[category]}`}>
                      {category}
                    </h3>
                    <p className="text-xs text-white/30 uppercase tracking-widest">Hover to explore</p>
                  </div>

                  {/* BACK — shows skill badges */}
                  <div
                    className={`flip-card-back card-base p-6 lg:p-8 bg-gradient-to-br ${categoryColors[category]}`}
                  >
                    <h3 className={`font-display font-bold text-sm mb-4 ${categoryAccent[category]}`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 overflow-y-auto max-h-32">
                      {items.map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.04 * i, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Flip card styles */}
      <style>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: inherit;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </SectionWrapper>
  );
};