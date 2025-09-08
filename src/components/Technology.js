import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Technology.css';

const Technology = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const technologies = [
    {
      title: '非侵入式采集',
      description: '使用MEG/EEG技术，无需手术植入，安全可靠',
      value: '100%',
      label: '安全性',
    },
    {
      title: '实时解码',
      description: '毫秒级响应，实现思维与行动的无缝连接',
      value: '<50ms',
      label: '延迟',
    },
    {
      title: '深度学习',
      description: '基于Transformer的创新架构，持续自我优化',
      value: '10亿+',
      label: '参数量',
    },
    {
      title: '多模态融合',
      description: '整合视觉、听觉、触觉等多种感知通道',
      value: '5+',
      label: '模态数',
    },
  ];

  return (
    <section className="technology" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">核心技术</h2>
          <p className="section-subtitle">
            突破性的脑机接口技术，开启人机交互新纪元
          </p>
        </motion.div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="tech-card"
            >
              <div className="tech-content">
                <h3 className="tech-title">{tech.title}</h3>
                <p className="tech-description">{tech.description}</p>
                <div className="tech-metric">
                  <span className="metric-value">{tech.value}</span>
                  <span className="metric-label">{tech.label}</span>
                </div>
              </div>
              <div className="tech-visual">
                <div className="tech-graph"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="tech-highlight"
        >
          <div className="highlight-content">
            <h3>BrainFormer 2025</h3>
            <p>
              我们的第四代脑机接口系统，融合了最新的人工智能技术，
              实现了前所未有的思维解码精度和速度。
            </p>
            <div className="highlight-features">
              <span>零样本学习</span>
              <span>跨模态对齐</span>
              <span>自适应优化</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology; 