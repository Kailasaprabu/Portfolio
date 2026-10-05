import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    emoji: 'https://raw.githubusercontent.com/Kailasaprabu/Weather-Web/5de993e84f0ef95cf3c61520611d305863b7241b/Weather-Web/screenshorts/weather-data.png',
    title: 'Weather Web App',
    desc: 'A responsive and visually engaging weather forecast application built using HTML, CSS, and JavaScript. Users can search any city to get current weather data along with a 3-day forecast, all fetched from a weather API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    github: 'https://github.com/Kailasaprabu/Weather-Web',
    live: '#',
    tag: 'Full Stack',
    color: 'rgba(124,58,237,0.2)',
  },
  {
    emoji: '🌐',
    title: 'Portfolio Website',
    desc: 'This very website — a responsive personal portfolio with smooth animations, dark/light theme, and a contact form.',
    tech: ['React', 'Framer Motion', 'CSS3', 'React Icons'],
    github: 'https://github.com/kailasaprabu2004',
    live: '#',
    tag: 'Frontend',
    color: 'rgba(16,185,129,0.2)',
  },
  {
    emoji: '🌐',
    title: 'E-commerce Website',
    desc: 'This very website — a responsive personal portfolio with smooth animations, dark/light theme, and a contact form.',
    tech: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    github: 'https://github.com/kailasaprabu2004',
    live: '#',
    tag: 'Frontend',
    color: 'rgba(16,185,129,0.2)',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of projects that showcase my skills and passion for building.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card-image" style={{ background: proj.color }}>
                <div className="project-card-image-placeholder"><img src={proj.emoji} className='project-card-img'/></div>
                <div className="project-card-tag">{proj.tag}</div>
                <div className="project-card-overlay">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                    <FiGithub /> GitHub
                  </a>
                  {/* <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                    <FiExternalLink /> Live
                  </a> */}
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.desc}</p>
                <div className="project-card-tech">
                  {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div className="project-card-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-github">
                    <FiGithub /> GitHub
                  </a>
                  {/* <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                    <FiExternalLink /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
