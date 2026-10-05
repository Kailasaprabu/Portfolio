import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiHtml5, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiPython,
  SiGit, SiGithub, SiPostman, SiVscodium,
  SiRedux, SiTailwindcss, SiMysql
} from 'react-icons/si';

const categories = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', icon: <SiReact color="#61dafb" />, pct: 88 },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript color="#f7df1e" />, pct: 85 },
      { name: 'HTML5', icon: <SiHtml5 color="#e34f26" />, pct: 92 },
      { name: 'CSS3', icon: <SiHtml5 color="#1572b6" />, pct: 85 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#68a063" />, pct: 82 },
      { name: 'Express.js', icon: <SiExpress color="#fff" />, pct: 80 },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" />, pct: 70 },
      { name: 'Python', icon: <SiPython color="#3776ab" />, pct: 65 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: <SiGit color="#f05032" />, pct: 85 },
      { name: 'GitHub', icon: <SiGithub color="#fff" />, pct: 88 },
      { name: 'VS Code', icon: <SiVscodium color="#007acc" />, pct: 92 },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" />, pct: 80 },
    ],
  },
];

function SkillBar({ pct, inView }) {
  return (
    <div className="skill-bar-track">
      <div
        className={`skill-bar-fill ${inView ? 'animated' : ''}`}
        style={{ '--target-width': `${pct}%` }}
      />
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">A curated set of tools and technologies I use to build great products.</p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="skills-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
            >
              <div className="skills-category-header">
                <div className="skills-category-icon">{cat.icon}</div>
                <span className="skills-category-name">{cat.name}</span>
                <span className="skills-category-count">{cat.skills.length} skills</span>
              </div>
              <div className="skills-grid">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.15 + si * 0.07, duration: 0.5 }}
                  >
                    <div className="skill-meta">
                      <span className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <SkillBar pct={skill.pct} inView={inView} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
