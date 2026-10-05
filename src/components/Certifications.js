import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certs = [
  { emoji: '⚛️', name: 'React – The Complete Guide', issuer: 'Udemy / Maximilian Schwarzmüller', year: '2024' },
  { emoji: '🟢', name: 'Node.js, Express & MongoDB Bootcamp', issuer: 'Udemy / Jonas Schmedtmann', year: '2024' },
  { emoji: '🌐', name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2023' },
  { emoji: '☁️', name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', year: '2024' },
  { emoji: '🐙', name: 'Git & GitHub – Complete Masterclass', issuer: 'Udemy', year: '2023' },
  { emoji: '🔐', name: 'Web Security Fundamentals', issuer: 'OWASP / Coursera', year: '2024' },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section certifications" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Verified skills and knowledge from industry-recognized platforms.</p>
        </motion.div>

        <div className="cert-grid">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="cert-badge">{cert.emoji}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">📅 {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
