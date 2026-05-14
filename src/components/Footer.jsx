import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsHeartFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="pt-5 pb-4 mt-5 position-relative overflow-hidden border-top border-black border-opacity-5" style={{ backgroundColor: '#ffffff' }}>
      <Container>
        <Row className="g-4 mb-5">
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-4">
              <img src="/scet_logo.png" height="40" alt="Logo" />
              <h5 className="fw-bold m-0" style={{ color: '#1a237e' }}>SCET <span style={{ color: '#b71c1c' }}>ERP</span></h5>
            </div>
            <p className="text-secondary small pe-lg-5">
              The next generation of institutional management systems. Powering smart campuses with AI analytics, seamless integration, and advanced security protocols.
            </p>
            <div className="d-flex gap-3 mt-4">
              {[BsGithub, BsLinkedin, BsTwitter, BsInstagram].map((Icon, i) => (
                <a key={i} href="#" className="btn-glass p-2 rounded-circle text-secondary opacity-75 hover-opacity-100 bg-light border-0 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Col>
          
          <Col lg={2} md={4} className="col-6">
            <h6 className="fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li><a href="#" className="text-decoration-none text-secondary">Home</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Services</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Features</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Analytics</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={4} className="col-6">
            <h6 className="fw-bold mb-4">Resources</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li><a href="#" className="text-decoration-none text-secondary">Documentation</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Support Center</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Terms of Service</a></li>
            </ul>
          </Col>
          
          <Col lg={4} md={4}>
            <h6 className="fw-bold mb-4">Contact Us</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>Email: contact@educore-erp.com</li>
              <li>Phone: +1 (555) 000-0000</li>
              <li>Address: Narsapur,534280</li>
            </ul>
            <div className="mt-4 glass-card p-3">
              <small className="d-block mb-2 fw-bold">ERP Version 5.4.0</small>
              <div className="progress" style={{ height: '4px' }}>
                <div className="progress-bar bg-primary" style={{ width: '100%' }}></div>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="text-center pt-4 border-top border-black border-opacity-5 small" style={{ color: '#1a237e' }}>
          <p className="mb-0 fw-bold">© {new Date().getFullYear()} Swarnandhra College of Engineering and Technology. All Rights Reserved.</p>
          <div className="mt-2" style={{ height: '4px', background: '#b71c1c', width: '50px', margin: '0 auto' }}></div>
        </div>
      </Container>
      
      <div className="mt-4 py-3 text-center text-white" style={{ backgroundColor: '#1a237e' }}>
        <small>Designed & Developed for a Smarter SCET Campus</small>
      </div>
      
      {/* Wave Background placeholder */}
      <div className="position-absolute bottom-0 start-0 w-100 opacity-5" style={{ pointerEvents: 'none', zIndex: -1 }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6366f1" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,240C672,224,768,192,864,186.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hover-opacity-100:hover { opacity: 1 !important; transition: opacity 0.3s; }
      `}} />
    </footer>
  );
};

export default Footer;
