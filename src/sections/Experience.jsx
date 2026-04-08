import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { experience } = resumeData;

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <span className="accent-text mb-4 block">Career</span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="heading-lg mb-16">Experience</h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-ink-muted to-transparent hidden lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {experience.map((exp, i) => (
              <FadeUp key={exp.id} delay={0.1 * i}>
                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i > 0 ? "lg:mt-16" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-[calc(50%-5px)] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-ink shadow-[0_0_12px_rgba(0,255,135,0.5)] hidden lg:block z-10" />

                  {/* Left: Meta */}
                  <div className={`lg:text-right mb-6 lg:mb-0 lg:pr-10 ${i % 2 === 1 ? "lg:order-2 lg:text-left lg:pr-0 lg:pl-10" : ""}`}>
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent font-mono text-xs px-3 py-1 rounded-full mb-3">
                      {exp.type}
                    </div>
                    <h3 className="font-display font-700 text-frost text-xl mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-2 lg:justify-end flex-wrap">
                      {exp.url !== "#" ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent hover:underline flex items-center gap-1 text-sm"
                        >
                          {exp.company}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-accent text-sm font-body">{exp.company}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-silver-dim text-xs font-mono">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Right: Card */}
                  <div className={`lg:pl-10 ${i % 2 === 1 ? "lg:order-1 lg:pl-0 lg:pr-10" : ""}`}>
                    <div className="card-base card-hover p-6">
                      <p className="text-silver text-sm mb-5 italic">{exp.description}</p>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, ai) => (
                          <motion.li
                            key={ai}
                            className="flex items-start gap-3 text-silver text-sm leading-relaxed"
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.06 * ai }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {a}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-ink-muted">
                        {exp.tech.map((t) => (
                          <span key={t} className="tech-badge text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
