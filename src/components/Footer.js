import React from 'react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} <span>Kailasaprabu C</span> — Designed & Built with{' '}
          <FiHeart style={{ color: 'var(--accent-1)', display: 'inline', verticalAlign: 'middle' }} />{' '}
          in Coimbatore, India
        </p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
