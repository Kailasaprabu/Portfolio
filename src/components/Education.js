import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    icon: '🎓',
    degree: 'Bachelor Degree of Engineering – Computer Science and Engineering',
    institution: 'Tamilnadu College of Engineering',
    period: '2022 – 2026',
    detail: 'Currently pursuing a B.E. in Computer Science and Engineering with a focus on Data Structures, Algorithms, Database Management Systems, Web Technologies, and Software Engineering. Maintaining a CGPA of 8.1.',
  },
  {
    icon: '🏫',
    degree: 'Higher Secondary Course (HSC)',
    institution: 'Don Bosco Higher Secondary School',
    period: '2020 – 2022',
    detail: 'Completed 12th grade with Computer Science as the main subject and secured 79.3% overall. Strong academic performance in Mathematics and Computer Science.',
  },
  {
    icon: '📚',
    degree: 'Secondary School Leacing Certificate (SSLC)',
    institution: 'Government High School',
    period: '2019 – 2020',
    detail: 'Completed 10th grade with 80.6% overall score. Developed a strong foundation in Science, Mathematics, and logical reasoning.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">The academic foundation that fuels my passion for technology.</p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="edu-icon">{edu.icon}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-period">{edu.period}</p>
              <p className="edu-detail">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
