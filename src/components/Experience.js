import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    icon: '💼',
    period: '1 Jul 2025 – 31 Jul 2025',
    role: 'Full Stack Development Intern',
    company: 'ETS Academy',
    desc: 'Gained practical experience in full-stack web development, building responsive and functional web applications.',
    tags: ['React', 'Node.js', 'SQL', 'Express', 'REST API'],
  },
  {
    icon: '🎓',
    period: 'Jun 2023 – Dec 2023',
    role: 'Web Development Intern',
    company: 'Local Tech Startup, Coimbatore',
    desc: 'Contributed to front-end development of a SaaS product. Implemented responsive UI components, integrated third-party APIs, and participated in Agile sprint cycles.',
    tags: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Agile'],
  },
  {
    icon: '🚀',
    period: 'Mar 2023 – May 2023',
    role: 'Open Source Contributor',
    company: 'Various GitHub Projects',
    desc: 'Contributed to open-source React and Node.js projects. Fixed bugs, improved documentation, and added new features to community libraries.',
    tags: ['GitHub', 'React', 'Node.js', 'Open Source'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">The milestones and roles that shaped me as a developer.</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">{exp.icon}</div>
              </div>
              <div className="timeline-content">
                <p className="timeline-period">{exp.period}</p>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="timeline-tags">
                  {exp.tags.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
