import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsArrowRight, BsShieldCheck, BsCpu, BsGlobe } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="hero-section py-5 position-relative overflow-hidden" id="home">
      <Container className="py-5">
        <Row className="align-items-center min-vh-75">
          <Col lg={7} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge bg-white text-primary border border-primary border-opacity-10 px-3 py-2 mb-4 shadow-sm">
                <BsShieldCheck className="me-2" /> Next-Gen Institutional ERP
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Smart Campus <span className="text-gradient">Unified Dashboard</span>
              </h1>
              <p className="lead text-secondary mb-5 pe-lg-5">
                Manage all institutional services from one intelligent platform. Experience the future of campus management with AI-driven analytics and seamless glassmorphism UI.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button className="btn-premium btn-primary-grad px-4 py-3 shadow-lg">
                  Explore Services <BsArrowRight />
                </Button>
                <Button className="btn-premium btn-glass px-4 py-3">
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="mt-5 d-flex gap-4 justify-content-center justify-content-lg-start text-secondary opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="d-flex align-items-center gap-2"><BsCpu /> AI Powered</div>
              <div className="d-flex align-items-center gap-2"><BsGlobe /> Cloud Integrated</div>
              <div className="d-flex align-items-center gap-2"><BsShieldCheck /> Secure Data</div>
            </motion.div>
          </Col>
          
          <Col lg={5} className="mt-5 mt-lg-0 position-relative">
            <motion.div
              className="hero-image-container p-4 glass-card"
              initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ perspective: '1000px' }}
            >
              <div className="rounded-4 overflow-hidden shadow-2xl position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard Preview" 
                  className="img-fluid"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-white opacity-10"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="position-absolute top-0 start-0 translate-middle glass-card p-3 d-none d-md-block"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                style={{ width: '160px' }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="p-1 rounded bg-success"><BsShieldCheck size={14} /></div>
                  <small className="fw-bold">Security Active</small>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-success w-75"></div>
                </div>
              </motion.div>

              <motion.div 
                className="position-absolute bottom-0 end-0 translate-middle-y glass-card p-3 d-none d-md-block"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                style={{ width: '180px', marginRight: '-40px' }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="p-1 rounded bg-primary"><BsArrowRight size={14} /></div>
                  <small className="fw-bold">Real-time Analytics</small>
                </div>
                <div className="d-flex gap-1 align-items-end" style={{ height: '30px' }}>
                  {[40, 70, 45, 90, 65].map((h, i) => (
                    <div key={i} className="bg-primary flex-fill rounded-top" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .min-vh-75 { min-height: 75vh; }
        .hero-image-container {
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          background: white !important;
        }
      `}} />
    </section>
  );
};

export default Hero;
