import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsPerson, BsBook, BsAward } from 'react-icons/bs';
import image from "../assets/swarnandhraimage.jpg";

const FoxHero = () => {
  return (
    <>
      <section 
        className="fox-hero d-flex align-items-center" 
        style={{ 
          backgroundImage: 'linear-gradient(90deg, rgba(10, 20, 60, 0.75), rgba(255, 140, 0, 0.35)), url("https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '90vh',
          position: 'relative',
          padding: '100px 0'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <motion.div 
                className="fox-hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff8c00', textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>Innovation & Excellence</h1>
                <p className="lead mb-0 text-white opacity-90">Empowering future engineers at Swarnandhra College of Engineering and Technology.</p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { icon: <BsPerson />, title: 'Certified Teachers', desc: 'Expert faculty with doctoral degrees and industry experience.', color: '#e3f2fd', iconColor: '#2196f3' },
              { icon: <BsAward />, title: 'Special Education', desc: 'Personalized learning pathways designed for every student.', color: '#fff3e0', iconColor: '#ff9800' },
              { icon: <BsBook />, title: 'Book & Library', desc: 'Digitized knowledge hub with access to global journals.', color: '#f1f8e9', iconColor: '#4caf50' }
            ].map((card, i) => (
              <Col key={i} md={4}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="p-4 h-100 rounded-4 border-0 shadow-sm"
                  style={{ background: card.color, transition: 'all 0.3s ease' }}
                >
                  <div className="fs-1 mb-3" style={{ color: card.iconColor }}>{card.icon}</div>
                  <h5 className="fw-bold mb-2" style={{ color: '#333' }}>{card.title}</h5>
                  <p className="m-0 small text-secondary">{card.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FoxHero;
