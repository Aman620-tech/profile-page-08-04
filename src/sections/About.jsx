import { CheckCircle2 } from "lucide-react";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { summary, highlights, personal } = resumeData;

export const About = () => {
  return (
    <SectionWrapper id="about" className="section-padding bg-ink-soft/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <FadeUp>
              <span className="accent-text mb-4 block">About Me</span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="heading-lg mb-6 leading-snug">
                Backend-Focused Full Stack Developer | Node.js, AWS, Scalable
                Systems{" "}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-silver leading-relaxed text-base lg:text-lg mb-6">
                {summary}
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a
                // href={`mailto:${personal.email}`}
                href="#contact"
                className="btn-primary inline-flex"
              >
                Let's Talk 
              </a>
            </FadeUp>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <FadeUp key={i} delay={0.08 * i}>
                <div className="flex items-start gap-4 card-base card-hover p-5 group">
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-silver text-sm leading-relaxed">{h}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
