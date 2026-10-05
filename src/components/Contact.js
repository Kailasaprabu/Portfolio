import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactItems = [
    { icon: <FiMail />, label: 'Email', val: 'kailash01112004@gmail.com', href: 'mailto:kailash01112004@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', val: '+91 9344804156', href: 'tel:+919344804156' },
    { icon: <FiMapPin />, label: 'Location', val: 'Coimbatore, Tamil Nadu, India', href: null },
  ];

  const socials = [
    { icon: <FiLinkedin />, href: 'http://www.linkedin.com/in/kailasaprabu2004', label: 'LinkedIn' },
    { icon: <FiGithub />, href: 'https://github.com/Kailasaprabu', label: 'GitHub' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiMail />, href: 'mailto:kailash01112004@gmail.com', label: 'Email' },
  ];

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2 className="contact-heading" variants={fadeUp} custom={0}>
              Let's build something <span className="gradient-text">amazing</span> together
            </motion.h2>

            <motion.p className="contact-subtext" variants={fadeUp} custom={1}>
              I'm currently open to freelance projects, internships, and full-time opportunities.
              Whether you have a question or just want to say hi, my inbox is always open!
            </motion.p>

            <motion.div className="contact-items" variants={fadeUp} custom={2}>
              {contactItems.map(item => (
                <div
                  key={item.label}
                  className="contact-item"
                  {...(item.href ? { as: 'a', href: item.href } : {})}
                  onClick={() => item.href && window.open(item.href)}
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <p className="contact-item-label">{item.label}</p>
                    <p className="contact-item-val">{item.val}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={3}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Social Media
              </p>
              <div className="contact-socials">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact-social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {sent ? (
              <div className="form-success">
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out, Kailasaprabu will get back to you soon.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSent(false)}
                  style={{ marginTop: '20px' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration / Job Opportunity"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={sending}
                >
                  {sending ? (
                    <>Sending... <span style={{ animation: 'loaderPulse 0.8s infinite' }}>⏳</span></>
                  ) : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
