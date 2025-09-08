import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ApplicationsSection.css';

const ApplicationsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const applications = [
    {
      icon: '🏥',
      title: '医疗康复',
      description: '帮助瘫痪患者恢复运动功能，重获生活自理能力',
      color: '#FF6B6B'
    },
    {
      icon: '🎮',
      title: '智能交互',
      description: '通过思维直接控制智能设备，实现无障碍交互',
      color: '#4ECDC4'
    },
    {
      icon: '🧠',
      title: '认知增强',
      description: '提升记忆力、注意力和学习效率',
      color: '#5C4EFF'
    },
    {
      icon: '💬',
      title: '辅助沟通',
      description: '为失语症患者提供思维转文字的沟通方式',
      color: '#FFD93D'
    },
    {
      icon: '🌐',
      title: '虚拟现实',
      description: '沉浸式脑机接口体验，开启元宇宙新世界',
      color: '#6BCF7F'
    },
    {
      icon: '❤️',
      title: '情绪管理',
      description: '实时监测和调节情绪状态，改善心理健康',
      color: '#FF6B9D'
    }
  ];

  return (
    <section className="applications-section section" ref={ref} id="applications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            广阔的
            <span className="title-highlight">应用前景</span>
          </h2>
          <p className="section-description">
            脑机接口技术正在改变医疗、教育、娱乐等多个领域
          </p>
        </motion.div>

        <div className="applications-grid">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="application-card"
                style={{ '--app-color': app.color }}
              >
                <div className="app-icon">{app.icon}</div>
                <h3 className="app-title">{app.title}</h3>
                <p className="app-description">{app.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection; 