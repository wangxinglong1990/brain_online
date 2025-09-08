import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '首页', sectionId: 'home' },
    { label: '研究成果', sectionId: 'research' },
    { label: '数据分析', sectionId: 'data-viz' },
    { label: '核心技术', sectionId: 'tech' },
    { label: '应用场景', sectionId: 'applications' },
    { label: '联系我们', sectionId: 'contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">筋斗云</span>
          <span className="logo-subtitle">生命科技</span>
        </div>

        <div className="navbar-menu">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              className={`nav-link ${item.label === '联系我们' ? 'nav-link-highlight' : ''}`}
              onClick={() => scrollToSection(item.sectionId)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`mobile-nav-link ${item.label === '联系我们' ? 'mobile-nav-link-highlight' : ''}`}
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 