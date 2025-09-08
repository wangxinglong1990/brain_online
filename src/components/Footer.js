import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">筋斗云生命科技</h3>
            <p className="footer-tagline">解码思维 · 连接未来</p>
          </div>
          
          <div className="footer-info">
            <div className="footer-contact">
              <h4>联系方式</h4>
              <p>📍 苏州市高新区济慈路155号1幢102室</p>
              <p>📞 15764371743</p>
              <p>💬 微信公众号：筋斗云生命科技</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 苏州筋斗云生命科技有限公司 版权所有</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 