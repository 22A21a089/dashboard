import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsShieldLock, BsBarChartLine, BsFileEarmarkCheck, BsCpu, BsArrowLeft, BsCheckCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IQAC = () => {
  const navigate = useNavigate();

  return (
    <div className="iqac-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <div>
            <h2 className="fw-bold m-0">Project VPN AI <span className="text-gradient">- IQAC Management</span></h2>
            <p className="text-secondary small">AI-Driven Internal Quality Assurance Cell monitoring.</p>
          </div>
          <Button className="btn-premium btn-primary-grad">Generate Annual Report</Button>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 h-100">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2"><BsBarChartLine className="text-primary" /> Quality Metrics</h5>
              <ListGroup variant="flush" className="bg-transparent">
                {[
                  { label: "NAAC Score Prediction", value: "3.8 / 4.0", trend: "up" },
                  { label: "Faculty-Student Ratio", value: "1:18", trend: "stable" },
                  { label: "Curriculum Compliance", value: "98%", trend: "up" }
                ].map((item, i) => (
                  <ListGroup.Item key={i} className="bg-transparent border-white border-opacity-10 px-0 py-3 d-flex justify-content-between align-items-center">
                    <span className="text-secondary small">{item.label}</span>
                    <span className="fw-bold text-white">{item.value}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="glass-card p-4 border-0">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded bg-primary bg-opacity-10 text-primary"><BsCpu size={30} /></div>
                <div>
                  <h5 className="fw-bold m-0">AI Quality Auditor</h5>
                  <p className="text-secondary small m-0">Real-time analysis of institutional documentation.</p>
                </div>
              </div>
              <div className="p-4 rounded bg-white bg-opacity-5 border border-white border-opacity-10 mb-3">
                <div className="d-flex align-items-center gap-2 text-success small mb-2">
                  <BsCheckCircle /> Documentation for Semester 1 Verified
                </div>
                <div className="d-flex align-items-center gap-2 text-warning small mb-2">
                  <BsFileEarmarkCheck /> 3 Patents pending faculty verification
                </div>
                <div className="d-flex align-items-center gap-2 text-info small">
                  <BsShieldLock /> Institutional data integrity: 100% Secure
                </div>
              </div>
              <Button variant="outline-primary" className="btn-sm w-100 rounded-pill">Perform Full Audit</Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default IQAC;
