import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsCpu, BsBuilding, BsWallet2, BsPeople, BsShieldCheck, BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SmartERP = () => {
  const navigate = useNavigate();

  const erpModules = [
    { title: "Admin & Academics", icon: <BsBuilding />, color: "#4f46e5", status: "Operational" },
    { title: "Finance & Accounts", icon: <BsWallet2 />, color: "#10b981", status: "Operational" },
    { title: "Student Management", icon: <BsPeople />, color: "#f59e0b", status: "Maintenance" },
    { title: "Exam Cell Control", icon: <BsShieldCheck />, color: "#ef4444", status: "Operational" }
  ];

  return (
    <div className="smart-erp-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Smart Campus <span className="text-gradient">Unified ERP</span></h2>
          <p className="text-secondary">Comprehensive administration, academics, and finance management.</p>
        </div>

        <Row className="g-4 mb-5">
          {erpModules.map((m, i) => (
            <Col key={i} lg={3} md={6}>
              <Card className="glass-card p-4 border-0 text-center h-100">
                <div className="mx-auto mb-3 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}30` }}>
                  {m.icon}
                </div>
                <h6 className="fw-bold m-0">{m.title}</h6>
                <div className="mt-3">
                  <span className={`badge bg-${m.status === 'Operational' ? 'success' : 'warning'} bg-opacity-10 text-${m.status === 'Operational' ? 'success' : 'warning'} small`}>
                    {m.status}
                  </span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="glass-card p-4 border-0">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="fw-bold m-0">System Performance Monitor</h5>
            <Button variant="outline-primary" className="btn-sm rounded-pill">View Server Logs</Button>
          </div>
          <div className="p-4 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
            <Row className="g-4">
              <Col md={4} className="text-center border-end border-white border-opacity-10">
                <h4 className="fw-bold m-0 text-primary">99.9%</h4>
                <small className="text-secondary uppercase">Uptime</small>
              </Col>
              <Col md={4} className="text-center border-end border-white border-opacity-10">
                <h4 className="fw-bold m-0 text-success">42ms</h4>
                <small className="text-secondary uppercase">Latency</small>
              </Col>
              <Col md={4} className="text-center">
                <h4 className="fw-bold m-0 text-warning">8.4k</h4>
                <small className="text-secondary uppercase">Active Sessions</small>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default SmartERP;
