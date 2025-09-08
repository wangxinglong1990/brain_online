import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './DataVisualization.css';

const DataVisualization = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const channels = [
    { name: 'MEG传感器', value: '208通道', color: '#5e72eb' },
    { name: '采样率', value: '1000 Hz', color: '#7b68ee' },
    { name: '数据类型', value: '实时数据', color: '#4ecdc4' },
    { name: '精度等级', value: '临床级别', color: '#ff6b6b' }
  ];

  return (
    <section className="data-viz-section section" ref={ref} id="data-viz">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            实时数据
            <span className="title-highlight">可视化展示</span>
          </h2>
          <p className="section-description">
            展示来自Gwilliams2022数据集的真实MEG脑信号记录与分析
          </p>
        </motion.div>

        <div className="viz-container">
          {/* 真实MEG脑电波信号展示 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="wave-display"
          >
            <h3 className="wave-title">真实MEG脑信号记录</h3>
            <div className="meg-visualization-container">
              <img
                src="/newplot.png"
                alt="MEG Brain Signal Visualization"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  background: 'white'
                }}
              />
            </div>
            <div className="wave-info">
              <span className="info-label">📊 真实临床数据</span>
              <span className="info-label">🧠 6个MEG通道</span>
              <span className="info-label">⚡ 10秒记录时长</span>
            </div>
          </motion.div>

          {/* 通道信息 - 横向排列 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="channel-info-bar"
          >
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                className="channel-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="channel-icon"
                  style={{ backgroundColor: channel.color }}
                />
                <div className="channel-content">
                  <span className="channel-name">{channel.name}</span>
                  <span className="channel-value">{channel.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization; 