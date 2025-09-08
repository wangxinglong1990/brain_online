import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Activity, Globe, Users, Rocket, Award } from 'lucide-react';
import './Features.css';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Shield size={40} />,
      title: '医疗康复',
      description: '帮助瘫痪患者恢复运动功能，重获生活自理能力',
    },
    {
      icon: <Activity size={40} />,
      title: '意念控制',
      description: '通过思维直接控制智能设备，实现无障碍交互',
    },
    {
      icon: <Globe size={40} />,
      title: '虚拟现实',
      description: '沉浸式脑机接口体验，开启元宇宙新世界',
    },
    {
      icon: <Users size={40} />,
      title: '辅助沟通',
      description: '为失语症患者提供思维转文字的沟通方式',
    },
    {
      icon: <Rocket size={40} />,
      title: '认知增强',
      description: '提升记忆力、注意力和学习效率',
    },
    {
      icon: <Award size={40} />,
      title: '情绪管理',
      description: '实时监测和调节情绪状态，改善心理健康',
    },
  ];

  return (
    <section className="features" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">应用场景</h2>
          <p className="section-subtitle">
            脑机接口技术正在改变人类生活的方方面面
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="features-cta"
        >
          <h3>开启思维新纪元</h3>
          <p>加入我们，共同探索大脑的无限可能</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 