import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsGraphUpArrow, BsBuilding, BsMortarboard, BsBriefcase, BsArrowLeft, BsCheckCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Placements = () => {
  const navigate = useNavigate();

  const companies = [
    { name: "Google", date: "Oct 25, 2023", role: "SDE-1", package: "24 LPA", status: "Upcoming" },
    { name: "Microsoft", date: "Oct 28, 2023", role: "Data Scientist", package: "22 LPA", status: "Registration Open" },
    { name: "Adobe", date: "Nov 05, 2023", role: "Product Designer", package: "20 LPA", status: "Closed" }
  ];

  return (
    <div className="placements-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <h2 className="fw-bold m-0">Career & <span className="text-gradient">Placements</span></h2>
          <Button className="btn-premium btn-primary-grad">View My Applications</Button>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={8}>
            <Card className="glass-card p-4 border-0 mb-4">
              <h5 className="fw-bold mb-4">Placement Statistics (2023 Batch)</h5>
              <div className="d-flex flex-column gap-4">
                <div>
                  <div className="d-flex justify-content-between small mb-1"><span>CSE</span><span>95% Placed</span></div>
                  <ProgressBar now={95} variant="primary" style={{ height: '8px' }} className="bg-white bg-opacity-5" />
                </div>
                <div>
                  <div className="d-flex justify-content-between small mb-1"><span>ECE</span><span>88% Placed</span></div>
                  <ProgressBar now={88} variant="success" style={{ height: '8px' }} className="bg-white bg-opacity-5" />
                </div>
                <div>
                  <div className="d-flex justify-content-between small mb-1"><span>EEE</span><span>75% Placed</span></div>
                  <ProgressBar now={75} variant="info" style={{ height: '8px' }} className="bg-white bg-opacity-5" />
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-primary bg-opacity-10 text-primary" style={{ width: 'fit-content' }}><BsMortarboard size={24} /></div>
              <h3 className="fw-bold m-0">42 LPA</h3>
              <p className="text-secondary small">Highest Package</p>
              <hr className="border-white border-opacity-10" />
              <div className="d-flex justify-content-between small px-2">
                <span>Total Offers</span>
                <span className="fw-bold">850+</span>
              </div>
            </Card>
          </Col>
        </Row>

        <h5 className="fw-bold mb-4">Upcoming Recruitment Drives</h5>
        <div className="d-flex flex-column gap-3">
          {companies.map((c, i) => (
            <motion.div key={i} whileHover={{ x: 5 }} className="p-4 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
              <Row className="align-items-center">
                <Col md={3}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded bg-primary bg-opacity-10 text-primary"><BsBuilding size={20} /></div>
                    <h6 className="m-0 fw-bold">{c.name}</h6>
                  </div>
                </Col>
                <Col md={3} className="text-secondary small">{c.role} • {c.package}</Col>
                <Col md={3} className="text-secondary small">{c.date}</Col>
                <Col md={3} className="text-end">
                  <span className={`badge bg-${c.status.includes('Open') ? 'success' : 'secondary'} bg-opacity-10 text-${c.status.includes('Open') ? 'success' : 'secondary'} me-3`}>{c.status}</span>
                  <Button variant="link" className="text-primary p-0 small fw-bold text-decoration-none">Register</Button>
                </Col>
              </Row>
            </motion.div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Placements;
