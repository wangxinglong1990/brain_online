import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResearchSection.css';
import figure1 from '../assets/figure1.png';
import figure2 from '../assets/figure2.png';
import figure3 from '../assets/figure3.png';

const ResearchSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState(0);

  const researchData = [
    {
      id: 0,
      title: '解码技术突破',
      subtitle: '多模态融合技术',
      image: figure1,
      description: '通过创新的BrainFormer架构，我们在非侵入式脑机接口领域实现了革命性突破，达到业界领先水平。',
      stats: [
        { label: '解码准确率', value: '业界领先' },
        { label: '响应速度', value: '毫秒级' },
        { label: '信号通道', value: '高密度' }
      ]
    },
    {
      id: 1,
      title: '架构创新',
      subtitle: '端到端深度学习',
      image: figure2,
      description: '采用时空Transformer结构，结合对比学习和自监督学习，实现了对大脑信号的革命性解码能力。',
      stats: [
        { label: '模型规模', value: '大规模' },
        { label: '训练数据', value: '海量' },
        { label: '推理效率', value: '实时' }
      ]
    },
    {
      id: 2,
      title: '临床验证',
      subtitle: '真实场景应用',
      image: figure3,
      description: '在多个医疗机构完成临床验证，帮助众多患者显著改善生活质量，获得医疗界高度认可。',
      stats: [
        { label: '临床试验', value: '广泛验证' },
        { label: '效果评价', value: '显著有效' },
        { label: '用户反馈', value: '高度认可' }
      ]
    }
  ];

  return (
    <section className="research-section section" ref={ref} id="research">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            科学验证的
            <span className="title-highlight">突破性进展</span>
          </h2>
          <p className="section-description">
            基于最新的神经科学研究和深度学习技术，我们取得了多项重要突破
          </p>
        </motion.div>

        <div className="research-tabs">
          {researchData.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`research-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="tab-title">{item.title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="research-content"
        >
          <div className="research-grid">
            <div className="research-image-container">
              <img 
                src={researchData[activeTab].image} 
                alt={researchData[activeTab].title}
                className="research-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>{researchData[activeTab].subtitle}</h4>
                </div>
              </div>
            </div>
            
            <div className="research-info">
              <h3 className="research-title">{researchData[activeTab].title}</h3>
              <p className="research-description">{researchData[activeTab].description}</p>
              
              <div className="research-stats">
                {researchData[activeTab].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="stat-item"
                  >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection; 