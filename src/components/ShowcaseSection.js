import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ShowcaseSection.css';

const ShowcaseSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      number: '01',
      title: '突破性技术',
      description: 'BrainFormer架构实现60%+解码准确率',
      icon: '🚀',
    },
    {
      number: '02',
      title: '安全可靠',
      description: '100%非侵入式，无需手术植入',
      icon: '🛡️',
    },
    {
      number: '03',
      title: '实时响应',
      description: '小于50ms延迟，思维即行动',
      icon: '⚡',
    },
  ];

  return (
    <section className="showcase-section section" ref={ref} id="showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-label">为什么选择我们</span>
          <h2 className="section-title">
            重新定义
            <span className="title-highlight">人机交互</span>
          </h2>
          <p className="section-description">
            我们的脑机接口技术正在改变人类与数字世界的连接方式
          </p>
        </motion.div>

        <div className="showcase-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="showcase-card"
            >
              <div className="card-number">{feature.number}</div>
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="showcase-visual"
        >
          <div className="visual-container">
            <div className="brain-model">
              <div className="brain-core"></div>
              <div className="signal-wave wave-1"></div>
              <div className="signal-wave wave-2"></div>
              <div className="signal-wave wave-3"></div>
            </div>
            <div className="data-points">
              <div className="data-point point-1">
                <span>MEG</span>
              </div>
              <div className="data-point point-2">
                <span>EEG</span>
              </div>
              <div className="data-point point-3">
                <span>AI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection; 