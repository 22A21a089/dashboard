import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsEnvelopePaper, BsPlusCircle, BsCheck2Circle, BsXCircle, BsClockHistory, BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LeaveManagement = () => {
  const navigate = useNavigate();

  const leaves = [
    { type: "Sick Leave", from: "2023-10-01", to: "2023-10-02", days: 2, status: "Approved" },
    { type: "Personal Leave", from: "2023-10-15", to: "2023-10-15", days: 1, status: "Pending" },
    { type: "On Duty", from: "2023-09-20", to: "2023-09-22", days: 3, status: "Rejected" }
  ];

  return (
    <div className="leave-management-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0">Leave <span className="text-gradient">Management</span></h2>
          <Button className="btn-premium btn-primary-grad"><BsPlusCircle className="me-2" /> Apply for Leave</Button>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={3} md={6}>
            <Card className="glass-card p-4 border-0 text-center">
              <h6 className="text-secondary small">Total Balance</h6>
              <h3 className="fw-bold m-0">12 Days</h3>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="glass-card p-4 border-0 text-center">
              <h6 className="text-secondary small">Consumed</h6>
              <h3 className="fw-bold m-0 text-primary">05 Days</h3>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="glass-card p-4 border-0 text-center">
              <h6 className="text-secondary small">Approved</h6>
              <h3 className="fw-bold m-0 text-success">04</h3>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="glass-card p-4 border-0 text-center">
              <h6 className="text-secondary small">Pending</h6>
              <h3 className="fw-bold m-0 text-warning">01</h3>
            </Card>
          </Col>
        </Row>

        <Card className="glass-card p-4 border-0">
          <h5 className="fw-bold mb-4 d-flex align-items-center gap-2"><BsClockHistory className="text-secondary" /> Recent Requests</h5>
          <div className="table-responsive">
            <table className="table table-dark table-borderless m-0">
              <thead className="border-bottom border-white border-opacity-10 text-secondary small">
                <tr><th>Leave Type</th><th>Date Range</th><th>Duration</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {leaves.map((l, i) => (
                  <tr key={i} className="align-middle border-bottom border-white border-opacity-5">
                    <td className="py-4 fw-bold">{l.type}</td>
                    <td className="text-secondary small">{l.from} to {l.to}</td>
                    <td>{l.days} Day(s)</td>
                    <td>
                      <Badge bg={l.status === 'Approved' ? 'success' : l.status === 'Pending' ? 'warning' : 'danger'} className="bg-opacity-10" style={{ color: 'inherit', border: '1px solid currentColor' }}>
                        {l.status}
                      </Badge>
                    </td>
                    <td><Button variant="link" className="text-secondary p-0"><BsClockHistory /></Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default LeaveManagement;
