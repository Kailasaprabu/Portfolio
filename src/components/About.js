import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import aboutImg from '../image/photo.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4,0,0.2,1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } }
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const infos = [
    { icon: <FiMail />, label: 'Email', val: 'kailash01112004@gmail.com', href: 'mailto:kailash01112004@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', val: '+91 9344804156', href: 'tel:+919344804156' },
    { icon: <FiMapPin />, label: 'Location', val: 'Coimbatore, India', href: null },
    { icon: <FiLinkedin />, label: 'LinkedIn', val: 'kailasaprabu2004', href: 'http://www.linkedin.com/in/kailasaprabu2004' },
  ];

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Image */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="about-image-frame">
              <div className="about-image-initials">
                <img src={aboutImg} className='about-img'/>
              </div>
            </div>
            <div className="about-deco-box" />
            <div className="about-deco-dot" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="about-content"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.span className="about-greeting" variants={fadeUp}>
              &lt; About Me /&gt;
            </motion.span>

            <motion.h2 className="about-heading" variants={fadeUp}>
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h2>

            <motion.p className="about-text" variants={fadeUp}>
              I'm a passionate MERN Stack Developer with a strong foundation in building
              full-stack web applications. Currently based in Coimbatore, India, I thrive on
              solving complex problems and delivering clean, performant code.
            </motion.p>

            <motion.p className="about-text" variants={fadeUp}>
              My journey into web development started with curiosity and grew into a deep
              love for building things people use. I specialize in the MERN ecosystem —
              MongoDB, Express.js, React.js, and Node.js — and I'm always learning
              new technologies to stay ahead of the curve.
            </motion.p>

            <motion.div className="about-info-grid" variants={fadeUp}>
              {infos.map((item) => (
                <div className="about-info-item" key={item.label}>
                  <span className="about-info-icon">{item.icon}</span>
                  <div className="about-info-content">
                    <span className="about-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="about-info-val" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {item.val}
                      </a>
                    ) : (
                      <span className="about-info-val">{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="mailto:kailash01112004@gmail.com"
                className="btn btn-primary"
                style={{ width: 'fit-content' }}
              >
                Get In Touch <FiMail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
