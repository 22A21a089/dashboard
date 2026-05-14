import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsEye, BsFlag, BsCheck2Circle } from 'react-icons/bs';

const Features = () => {
  return (
    <section className="py-5" id="about">
      <Container>
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="fw-bold"
            style={{ color: '#1a237e' }}
          >
            About <span style={{ color: '#b71c1c' }}>Swarnandhra</span>
          </motion.h2>
          <p className="text-secondary">Dedicated to nurturing global engineering leaders through excellence in education.</p>
        </div>

        <Row className="g-4">
            <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-100"
            >
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100" style={{ background: '#fffefb', border: '1px solid rgba(26,35,126,0.05)' }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-3 rounded-circle bg-primary bg-opacity-10 text-primary">
                    <BsEye size={30} />
                  </div>
                  <h3 className="fw-bold m-0" style={{ color: '#1a237e' }}>Our Vision</h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  "To produce global standard engineers by imparting high-quality technical education and to become a leading hub of academic and research excellence, fostering innovation and ethical leadership in the field of engineering."
                </p>
                <ul className="list-unstyled mt-4">
                  {['Academic Excellence', 'Innovative Research', 'Ethical Values'].map((item, i) => (
                    <li key={i} className="d-flex align-items-center gap-2 mb-2 text-secondary small">
                      <BsCheck2Circle className="text-success" /> {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </Col>

            <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-100"
            >
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100" style={{ background: '#fffefb', border: '1px solid rgba(183,28,28,0.05)' }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-3 rounded-circle bg-danger bg-opacity-10 text-danger">
                    <BsFlag size={30} />
                  </div>
                  <h3 className="fw-bold m-0" style={{ color: '#b71c1c' }}>Our Mission</h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  "To provide a stimulating environment for learning and development, to collaborate with industry for practical exposure, and to empower students with skills that make them industry-ready while contributing to the socio-economic growth of the nation."
                </p>
                <div className="mt-4 p-3 rounded-3 bg-light border-start border-4 border-danger">
                  <small className="fst-italic text-dark">
                    "Empowering minds, Engineering the future."
                  </small>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
