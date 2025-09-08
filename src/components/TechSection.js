import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ModelArchitecture from './ModelArchitecture';
import './TechSection.css';

const TechSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const techSteps = [
    {
      title: '信号采集',
      description: '高密度MEG/EEG采集',
      icon: '📡'
    },
    {
      title: '智能解码',
      description: 'Transformer深度学习',
      icon: '🧬'
    },
    {
      title: '意图识别',
      description: '实时思维转换',
      icon: '💡'
    },
    {
      title: '精准控制',
      description: '无缝人机交互',
      icon: '⚙️'
    }
  ];

  return (
    <section className="tech-section section" ref={ref} id="tech">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            BrainFormer
            <span className="title-highlight">技术架构</span>
          </h2>
          <p className="section-description">
            融合神经科学与人工智能的革命性脑机接口技术
          </p>
        </motion.div>

        <div className="tech-container">
          {/* 架构图 */}
          <ModelArchitecture />
          
          {/* 技术步骤 */}
          <div className="tech-grid tech-grid-compact">
            {techSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-card"
              >
                <div className="tech-icon">{step.icon}</div>
                <div className="tech-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="tech-title">{step.title}</h3>
                <p className="tech-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection; 