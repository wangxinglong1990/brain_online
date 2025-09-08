import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CTASection.css';

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="cta-section" ref={ref} id="cta">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <h2 className="cta-title">
            开启思维新纪元
          </h2>
          <p className="cta-description">
            加入我们，共同探索大脑的无限可能，创造人机交互的美好未来
          </p>
          <div className="cta-buttons">
            <a href="tel:15764371743" className="cta-btn-primary">
              立即联系
            </a>
            <a href="#" className="cta-btn-secondary">
              了解更多
            </a>
          </div>
          <div className="cta-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>苏州市高新区济慈路155号1幢102室</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <span>微信公众号：筋斗云生命科技</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="cta-background">
        <div className="cta-gradient"></div>
      </div>
    </section>
  );
};

export default CTASection; 