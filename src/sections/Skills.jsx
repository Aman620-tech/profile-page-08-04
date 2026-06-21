// import { motion } from "framer-motion";
// import { resumeData } from "../utils/resumeData";
// import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

// const { skills } = resumeData;

// const categoryColors = {
//   Frontend: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
//   Backend: "from-accent/10 to-emerald-500/10 border-accent/20",
//   Database: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
//   Cloud: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
//   DevOps: "from-teal-500/10 to-green-500/10 border-teal-500/20",
// };

// const categoryAccent = {
//   Frontend: "text-blue-400",
//   Backend: "text-accent",
//   Database: "text-purple-400",
//   Cloud: "text-orange-400",
// };

// const categoryIcon = {
//   Frontend: "⚡",
//   Backend: "🛠️",
//   Database: "🗄️",
//   Cloud: "☁️",
//   DevOps: "🔧",
// };

// export const Skills = () => {
//   return (
//     <SectionWrapper id="skills" className="section-padding">
//       <div className="section-container">
//         <FadeUp>
//           <span className="accent-text mb-4 block">Expertise</span>
//         </FadeUp>
//         <FadeUp delay={0.05}>
//           <h2 className="heading-lg mb-16">Technical Skills</h2>
//         </FadeUp>

//         <div className="grid sm:grid-cols-2 gap-6">
//           {Object.entries(skills).map(([category, items], ci) => (
//             <FadeUp key={category} delay={0.07 * ci}>
//               {/* Flip card container */}
//               <div className="flip-card h-48 lg:h-56 w-full cursor-pointer">
//                 <div className="flip-card-inner">

//                   {/* FRONT — shows "Skills" heading */}
//                   <div
//                     className={`flip-card-front card-base p-6 lg:p-8 bg-gradient-to-br ${categoryColors[category]} flex flex-col items-center justify-center gap-3`}
//                   >
//                     <span className="text-4xl">{categoryIcon[category]}</span>
//                     <h3 className={`font-display font-bold text-xl tracking-wide ${categoryAccent[category]}`}>
//                       {category}
//                     </h3>
//                     <p className="text-xs text-white/30 uppercase tracking-widest">Hover to explore</p>
//                   </div>

//                   {/* BACK — shows skill badges */}
//                   <div
//                     className={`flip-card-back card-base p-6 lg:p-8 bg-gradient-to-br ${categoryColors[category]}`}
//                   >
//                     <h3 className={`font-display font-bold text-sm mb-4 ${categoryAccent[category]}`}>
//                       {category}
//                     </h3>
//                     <div className="flex flex-wrap gap-2 overflow-y-auto max-h-32">
//                       {items.map((skill, i) => (
//                         <motion.span
//                           key={skill}
//                           className="tech-badge"
//                           initial={{ opacity: 0, scale: 0.85 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: 0.04 * i, duration: 0.3 }}
//                           whileHover={{ scale: 1.05, y: -1 }}
//                         >
//                           {skill}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>
//       </div>

//       {/* Flip card styles */}
//       <style>{`
//         .flip-card {
//           perspective: 1000px;
//         }

//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
//           transform-style: preserve-3d;
//         }

//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }

//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//           border-radius: inherit;
//         }

//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </SectionWrapper>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Network,
  MessageSquareCode,
  Gauge,
  Plug,
} from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { skills } = resumeData;

const CATEGORY_META = {
  Frontend: {
    icon: Layout,
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    accent: "text-blue-400",
  },
  Backend: {
    icon: Server,
    color: "from-accent/10 to-emerald-500/10 border-accent/20",
    accent: "text-accent",
  },
  Database: {
    icon: Database,
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
    accent: "text-purple-400",
  },
  Cloud: {
    icon: Cloud,
    color: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
    accent: "text-orange-400",
  },
  DevOps: {
    icon: Wrench,
    color: "from-teal-500/10 to-green-500/10 border-teal-500/20",
    accent: "text-teal-400",
  },
  "System Design": {
    icon: Network,
    color: "from-indigo-500/10 to-violet-500/10 border-indigo-500/20",
    accent: "text-indigo-400",
  },
  "Messaging & Async": {
    icon: MessageSquareCode,
    color: "from-rose-500/10 to-red-500/10 border-rose-500/20",
    accent: "text-rose-400",
  },
  "Monitoring & Performance": {
    icon: Gauge,
    color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20",
    accent: "text-yellow-400",
  },
  "Tools & Integrations": {
    icon: Plug,
    color: "from-sky-500/10 to-blue-500/10 border-sky-500/20",
    accent: "text-sky-400",
  },
};

// Fallback so any future category never renders blank
const DEFAULT_META = {
  icon: Wrench,
  color: "from-silver/10 to-silver/5 border-silver/20",
  accent: "text-silver",
};

const SkillCard = ({ category, items, index }) => {
  const [flipped, setFlipped] = useState(false);
  const meta = CATEGORY_META[category] || DEFAULT_META;
  const Icon = meta.icon;

  return (
    <FadeUp delay={0.06 * index}>
      <div
        className="flip-card h-48 lg:h-56 w-full cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label={`${category} skills, tap to flip`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
        }}
      >
        <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
          {/* FRONT */}
          <div
            className={`flip-card-front card-base p-6 lg:p-8 bg-gradient-to-br ${meta.color} flex flex-col items-center justify-center gap-3 text-center`}
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-ink-soft/60 border border-white/5 flex items-center justify-center ${meta.accent}`}
            >
              <Icon size={26} strokeWidth={1.75} />
            </div>
            <h3
              className={`font-display font-bold text-lg lg:text-xl tracking-wide ${meta.accent}`}
            >
              {category}
            </h3>
            <p className="text-[11px] text-silver-dim uppercase tracking-widest">
              {items.length} skills · tap to explore
            </p>
          </div>

          {/* BACK */}
          <div
            className={`flip-card-back card-base p-6 lg:p-8 bg-gradient-to-br ${meta.color}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon size={16} className={meta.accent} strokeWidth={1.75} />
              <h3 className={`font-display font-bold text-sm ${meta.accent}`}>
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 overflow-y-auto max-h-32 skills-scroll pr-1">
              {items.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="tech-badge"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i, duration: 0.3 }}
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
  );
};

export const Skills = () => {
  const totalSkills = Object.values(skills).reduce(
    (sum, items) => sum + items.length,
    0
  );

  return (
    <SectionWrapper id="skills" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <span className="accent-text mb-4 block">Expertise</span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <h2 className="heading-lg">Technical Skills</h2>
            <p className="text-silver-dim font-mono text-xs uppercase tracking-widest">
              {totalSkills}+ skills across {Object.keys(skills).length} domains
            </p>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <SkillCard key={category} category={category} items={items} index={ci} />
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

        /* Hover-to-flip on devices that support hover (desktop) */
        @media (hover: hover) {
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        }

        /* Tap-to-flip on touch devices */
        .flip-card-inner.is-flipped {
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

        .skills-scroll::-webkit-scrollbar { width: 3px; }
        .skills-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(100, 255, 180, 0.25);
          border-radius: 999px;
        }
        .skills-scroll { scrollbar-width: thin; }
      `}</style>
    </SectionWrapper>
  );
};