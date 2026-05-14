import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsAward, BsJournalText, BsGraphUp, BsDownload, BsPlusCircle, BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
  const navigate = useNavigate();

  const pubs = [
    { title: "Deep Learning in Edge Computing", journal: "IEEE Transactions", year: "2023", citations: 45 },
    { title: "Block-chain Security for IoT Devices", journal: "ACM Digital Library", year: "2022", citations: 120 },
    { title: "Optimized Routing in WSN", journal: "Springer Nature", year: "2021", citations: 88 }
  ];

  return (
    <div className="research-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0">Research <span className="text-gradient">& Publications</span></h2>
          <Button className="btn-premium btn-primary-grad"><BsPlusCircle className="me-2" /> Add Publication</Button>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 h-100 text-center">
              <div className="mx-auto mb-3 p-3 rounded bg-primary bg-opacity-10 text-primary" style={{ width: 'fit-content' }}><BsAward size={24} /></div>
              <h3 className="fw-bold m-0">12</h3>
              <p className="text-secondary small m-0">Total Patents</p>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-secondary bg-opacity-10 text-secondary" style={{ width: 'fit-content' }}><BsJournalText size={24} /></div>
              <h3 className="fw-bold m-0">450+</h3>
              <p className="text-secondary small m-0">Journal Articles</p>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-accent bg-opacity-10 text-accent" style={{ width: 'fit-content' }}><BsGraphUp size={24} /></div>
              <h3 className="fw-bold m-0">2.4k</h3>
              <p className="text-secondary small m-0">Total Citations</p>
            </Card>
          </Col>
        </Row>

        <Card className="glass-card p-4 border-0">
          <h5 className="fw-bold mb-4">Institutional Research Papers</h5>
          <div className="d-flex flex-column gap-3">
            {pubs.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.01 }} className="p-4 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h6 className="fw-bold text-white mb-2">{p.title}</h6>
                    <div className="d-flex gap-3 text-secondary small">
                      <span><BsJournalText className="me-1" /> {p.journal}</span>
                      <span><BsAward className="me-1" /> {p.year}</span>
                    </div>
                  </Col>
                  <Col md={2} className="text-center">
                    <div className="fw-bold text-primary">{p.citations}</div>
                    <small className="text-secondary" style={{ fontSize: '10px' }}>Citations</small>
                  </Col>
                  <Col md={2} className="text-end">
                    <Button variant="link" className="text-secondary p-0"><BsDownload size={18} /></Button>
                  </Col>
                </Row>
              </motion.div>
            ))}
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Research;
