import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { education } = resumeData;

export const Education = () => {
  return (
    <SectionWrapper id="education" className="section-padding bg-ink-soft/30">
      <div className="section-container">
        <FadeUp>
          <span className="accent-text mb-4 block">Background</span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="heading-lg mb-12">Education</h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={0.1 * i}>
              <div className="card-base card-hover p-6 lg:p-8 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-200">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display font-700 text-frost text-lg mb-1">{edu.degree}</h3>
                <p className="text-accent font-mono text-sm mb-3">{edu.field}</p>
                <p className="text-silver text-sm font-body mb-4">{edu.institution}</p>
                <div className="flex flex-col gap-1.5 text-silver-dim text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <MapPin size={11} />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
