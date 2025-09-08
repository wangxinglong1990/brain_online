import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ModelArchitecture.css';

const ModelArchitecture = () => {
  const svgRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView || !svgRef.current) return;

    // Add animation classes when in view
    const paths = svgRef.current.querySelectorAll('.data-flow');
    paths.forEach((path, index) => {
      setTimeout(() => {
        path.classList.add('animate-flow');
      }, index * 100);
    });
  }, [inView]);

  return (
    <div className="model-architecture" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        className="architecture-content"
      >
        <div className="architecture-diagram">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 500"
            xmlns="http://www.w3.org/2000/svg"
            className="architecture-svg"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="grad-input" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="grad-transform" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="grad-attention" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="grad-output" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
              </linearGradient>
              
              {/* Shadow filter */}
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Arrow marker */}
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#8892b0" />
              </marker>
            </defs>
            
            {/* Input Signals */}
            <g className="input-group">
              <rect x="50" y="100" width="180" height="80" rx="10" fill="url(#grad-input)" filter="url(#shadow)"/>
              <text x="140" y="135" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">
                脑电信号
              </text>
              <text x="140" y="155" textAnchor="middle" fill="white" fontSize="12">
                MEG/EEG 多通道采集
              </text>
              
              <rect x="50" y="220" width="180" height="80" rx="10" fill="url(#grad-input)" filter="url(#shadow)"/>
              <text x="140" y="255" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">
                音频信号
              </text>
              <text x="140" y="275" textAnchor="middle" fill="white" fontSize="12">
                语音特征提取
              </text>
            </g>
            
            {/* Data Enhancement */}
            <g className="enhancement-group">
              <rect x="280" y="160" width="140" height="80" rx="10" fill="#f0f2f8" stroke="#cbd5e0" strokeWidth="2" filter="url(#shadow)"/>
              <text x="350" y="190" textAnchor="middle" fill="#4a5568" fontSize="14" fontWeight="600">
                数据增强
              </text>
              <text x="350" y="210" textAnchor="middle" fill="#718096" fontSize="11">
                多维度特征优化
              </text>
            </g>
            
            {/* Transformer */}
            <g className="transformer-group">
              <rect x="470" y="100" width="200" height="100" rx="10" fill="url(#grad-transform)" filter="url(#shadow)"/>
              <text x="570" y="135" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">
                时空 Transformer
              </text>
              <text x="570" y="155" textAnchor="middle" fill="white" fontSize="12">
                深度特征编码
              </text>
              <text x="570" y="175" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">
                多层注意力机制
              </text>
            </g>
            
            {/* Cross-Modal Attention */}
            <g className="attention-group">
              <rect x="470" y="240" width="200" height="80" rx="10" fill="url(#grad-attention)" filter="url(#shadow)"/>
              <text x="570" y="270" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">
                跨模态对齐
              </text>
              <text x="570" y="295" textAnchor="middle" fill="white" fontSize="12">
                脑-语音特征融合
              </text>
            </g>
            
            {/* Multi-Task Learning */}
            <g className="tasks-group">
              <rect x="720" y="120" width="160" height="60" rx="10" fill="#fc8181" filter="url(#shadow)"/>
              <text x="800" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
                对比学习
              </text>
              
              <rect x="720" y="200" width="160" height="60" rx="10" fill="#f6ad55" filter="url(#shadow)"/>
              <text x="800" y="235" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
                特征重建
              </text>
              
              <rect x="720" y="280" width="160" height="60" rx="10" fill="#68d391" filter="url(#shadow)"/>
              <text x="800" y="315" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
                语义分类
              </text>
            </g>
            
            {/* Output */}
            <g className="output-group">
              <circle cx="1000" cy="200" r="60" fill="url(#grad-output)" filter="url(#shadow)"/>
              <text x="1000" y="195" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                意图输出
              </text>
              <text x="1000" y="215" textAnchor="middle" fill="white" fontSize="12">
                高精度解码
              </text>
            </g>
            
            {/* Advanced Features */}
            <g className="features-group">
              <rect x="150" y="380" width="180" height="60" rx="10" fill="#e0e7ff" stroke="#667eea" strokeWidth="2" filter="url(#shadow)"/>
              <text x="240" y="405" textAnchor="middle" fill="#4338ca" fontSize="12" fontWeight="600">
                自监督预训练
              </text>
              <text x="240" y="423" textAnchor="middle" fill="#6366f1" fontSize="10">
                减少标注依赖
              </text>
              
              <rect x="380" y="380" width="180" height="60" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" filter="url(#shadow)"/>
              <text x="470" y="405" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="600">
                知识蒸馏
              </text>
              <text x="470" y="423" textAnchor="middle" fill="#16a34a" fontSize="10">
                高效推理部署
              </text>
              
              <rect x="610" y="380" width="180" height="60" rx="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" filter="url(#shadow)"/>
              <text x="700" y="405" textAnchor="middle" fill="#9f1239" fontSize="12" fontWeight="600">
                元学习适应
              </text>
              <text x="700" y="423" textAnchor="middle" fill="#be185d" fontSize="10">
                个性化调优
              </text>
              
              <rect x="840" y="380" width="180" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)"/>
              <text x="930" y="405" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="600">
                图神经网络
              </text>
              <text x="930" y="423" textAnchor="middle" fill="#b45309" fontSize="10">
                空间拓扑建模
              </text>
            </g>
            
            {/* Connections */}
            <g className="connections" stroke="#8892b0" strokeWidth="2" fill="none">
              <path d="M 230 140 L 280 180" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 230 260 L 280 220" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 420 200 L 470 150" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 420 200 L 470 280" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 670 150 L 720 150" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 670 200 L 720 230" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 670 280 L 720 300" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 880 150 L 940 170" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 880 230 L 940 210" className="data-flow" markerEnd="url(#arrowhead)"/>
              <path d="M 880 310 L 940 230" className="data-flow" markerEnd="url(#arrowhead)"/>
            </g>
          </svg>
          </div>
        </motion.div>
      </div>
  );
};

export default ModelArchitecture; 