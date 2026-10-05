import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi';
import { SiMongodb, SiReact, SiNodedotjs } from 'react-icons/si';
import '../styles/Hero.css';
import profileImage from '../image/photo.png'

const roles = [
  'MERN Stack Developer',
  'Web Deveploper',
  'React js Engineer',
  'Node.js Engineer',
  'Full Stack Builder',
];

function useTyping(words, speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timer;
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

export default function Hero() {
  const typedText = useTyping(roles);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-inner">
        {/* Left: Content */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={fadeUp} custom={0}>
            <span className="hero-badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-name" variants={fadeUp} custom={1}>
            Hi, I'm
            <span className="hero-name-highlight">Kailasaprabu</span>
          </motion.h1>

          <motion.div className="hero-role" variants={fadeUp} custom={2}>
            <span className="typing-text">{typedText}</span>
            <span className="cursor" />
          </motion.div>

          <motion.p className="hero-desc" variants={fadeUp} custom={3}>
            Passionate MERN Stack Developer from Coimbatore, India. I craft
            scalable web applications with clean code and great user experiences.
            Turning ideas into reality, one commit at a time.
          </motion.p>

          <motion.div className="hero-stats" variants={fadeUp} custom={4}>
            <div className="hero-stat">
              <span className="hero-stat-num">Freasher</span>
              <span className="hero-stat-label"></span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num"></span>
              <span className="hero-stat-label"></span>
            </div>
          </motion.div>

          <motion.div className="hero-ctas" variants={fadeUp} custom={5}>
            <button className="btn btn-primary" onClick={() => handleScroll('projects')}>
              View Projects <FiArrowRight />
            </button>
            <button className="btn btn-outline" onClick={() => handleScroll('contact')}>
              Contact Me <FiMail />
            </button>
          </motion.div>

          <motion.div
            className="hero-badge"
            variants={fadeUp}
            custom={6}
            style={{ background: 'rgba(6,182,212,0.08)', borderColor: 'rgba(6,182,212,0.2)', color: 'var(--accent-2)' }}
          >
            <FiMapPin size={12} /> Coimbatore, India
          </motion.div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar-bg">
              <div className="hero-avatar-placeholder">
                <img src={profileImage} className='hero-avatar-img'/>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero-float-badge hero-float-badge-1">
              <div className="hero-float-icon" style={{ background: 'rgba(97,218,251,0.1)', color: '#61dafb' }}>
                <SiReact />
              </div>
              React.js
            </div>

            <div className="hero-float-badge hero-float-badge-2">
              <div className="hero-float-icon" style={{ background: 'rgba(77,153,114,0.1)', color: '#4db96f' }}>
                <SiMongodb />
              </div>
              MongoDB
            </div>

            <div className="hero-float-badge hero-float-badge-3">
              <div className="hero-float-icon" style={{ background: 'rgba(104,160,99,0.1)', color: '#68a063' }}>
                <SiNodedotjs />
              </div>
              Node.js
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}
