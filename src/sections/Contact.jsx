import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Linkedin, Mail, Phone } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import { resumeData } from "../utils/resumeData";
import { SectionWrapper, FadeUp } from "../components/SectionWrapper";

const { personal } = resumeData;

const InputField = ({ label, name, type = "text", value, error, onChange, rows }) => {
  const Tag = rows ? "textarea" : "input";
  return (
    <div>
      <label className="block font-mono text-xs text-silver-dim mb-2 tracking-wider uppercase">
        {label}
      </label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full bg-ink-muted border rounded-xl px-4 py-3 text-frost text-sm font-body
          placeholder-silver-dim/40 outline-none transition-all duration-200 resize-none
          ${error
            ? "border-red-500/60 focus:border-red-500"
            : "border-ink-soft focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(0,255,135,0.06)]"
          }`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && (
        <p className="mt-1.5 text-red-400 text-xs font-mono flex items-center gap-1">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
};

export const Contact = () => {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();

  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <FadeUp>
              <span className="accent-text mb-4 block">Get In Touch</span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="heading-lg mb-6 leading-snug">
                Let's build something great together
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-silver leading-relaxed mb-10">
                I'm open to full-time roles, freelance projects, and collaborative opportunities. 
                Whether it's a greenfield system, a scaling challenge, or a team that needs a senior 
                backend engineer — I'd love to hear from you.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                  // { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                  { icon: Linkedin, label: "LinkedIn", value: "aman-k-pandey", href: personal.linkedin },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ink-muted border border-ink-soft flex items-center justify-center text-silver-dim group-hover:border-accent/30 group-hover:text-accent transition-all duration-200">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-silver-dim uppercase tracking-wider">{label}</p>
                      <p className="text-silver text-sm group-hover:text-frost transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Form */}
          <FadeUp delay={0.1}>
            <div className="card-base p-6 lg:p-8 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-4">
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="font-display font-700 text-frost text-xl mb-2">Message Sent!</h3>
                    <p className="text-silver text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <InputField
                      label="Name"
                      name="name"
                      value={values.name}
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      error={errors.email}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Message"
                      name="message"
                      value={values.message}
                      error={errors.message}
                      onChange={handleChange}
                      rows={5}
                    />
                    {status === "error" && (
                      <p className="text-red-400 text-xs font-mono flex items-center gap-1">
                        <AlertCircle size={11} />
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === "submitting" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-ink/40 border-t-ink rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={14} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </SectionWrapper>
  );
};

