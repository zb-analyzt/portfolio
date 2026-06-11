import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaKaggle,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";

const links = [
  {
    label: "Email",
    value: "zohaib.dataanalyst@gmail.com",
    href: "mailto:zohaib.dataanalyst@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+92 317 067 4509",
    href: "tel:+923170674509",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    value: "zohaib-zulfiqar-data-analyst",
    href: "https://www.linkedin.com/in/zohaib-zulfiqar-data-analyst",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "Zb-analyzt",
    href: "https://github.com/Zb-analyzt",
    icon: FaGithub,
  },
  {
    label: "Kaggle",
    value: "/zbanalyzt",
    href: "https://www.kaggle.com/zbanalyzt",
    icon: FaKaggle,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      nextErrors.email = "Valid email is required.";
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      window.alert(
        "Thanks for reaching out. This demo form is ready for integration.",
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="For freelance work, internships or collaboration on data and frontend projects."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 rounded-2xl p-4 transition hover:border-sky-400 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{link.label}</p>
                    <p className="text-base font-medium text-slate-100">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  className={`input-base ${errors.name ? "border-red-400" : ""}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name ? (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <input
                  className={`input-base ${errors.email ? "border-red-400" : ""}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-4">
              <input
                className={`input-base ${errors.subject ? "border-red-400" : ""}`}
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject ? (
                <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
              ) : null}
            </div>
            <div className="mt-4">
              <textarea
                className={`input-base min-h-40 resize-none ${errors.message ? "border-red-400" : ""}`}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
