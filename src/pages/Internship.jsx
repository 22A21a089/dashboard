import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsBuilding, BsCalendarCheck, BsClipboardCheck, BsStarFill, BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Internship = () => {
  const navigate = useNavigate();

  const internships = [
    { company: "Google", role: "Software Engineer Intern", duration: "3 Months", status: "Active", stipend: "$5000/mo" },
    { company: "Microsoft", role: "Cloud Research Intern", duration: "6 Months", status: "Completed", stipend: "$4500/mo" },
    { company: "Amazon", role: "Backend Developer Intern", duration: "3 Months", status: "Pending Approval", stipend: "$4800/mo" }
  ];

  return (
    <div className="internship-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Student <span className="text-gradient">Internship Portal</span></h2>
          <p className="text-secondary">Bridge the gap between academics and industry with top-tier internships.</p>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={4} md={6}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-primary bg-opacity-10 text-primary" style={{ width: 'fit-content' }}><BsBuilding size={24} /></div>
              <h3 className="fw-bold m-0">150+</h3>
              <p className="text-secondary small m-0">Partner Companies</p>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-success bg-opacity-10 text-success" style={{ width: 'fit-content' }}><BsCalendarCheck size={24} /></div>
              <h3 className="fw-bold m-0">320</h3>
              <p className="text-secondary small m-0">Active Internships</p>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="glass-card p-4 border-0 text-center h-100">
              <div className="mx-auto mb-3 p-3 rounded bg-info bg-opacity-10 text-info" style={{ width: 'fit-content' }}><BsStarFill size={24} /></div>
              <h3 className="fw-bold m-0">4.8/5</h3>
              <p className="text-secondary small m-0">Avg Mentor Rating</p>
            </Card>
          </Col>
        </Row>

        <Card className="glass-card p-4 border-0">
          <h5 className="fw-bold mb-4">My Internship Applications</h5>
          <div className="table-responsive">
            <table className="table table-dark table-borderless m-0">
              <thead className="border-bottom border-white border-opacity-10 text-secondary small">
                <tr><th>Company</th><th>Role</th><th>Duration</th><th>Stipend</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {internships.map((int, i) => (
                  <tr key={i} className="align-middle">
                    <td className="py-4">
                      <div className="fw-bold">{int.company}</div>
                    </td>
                    <td><div className="text-secondary small">{int.role}</div></td>
                    <td>{int.duration}</td>
                    <td><span className="text-success fw-bold">{int.stipend}</span></td>
                    <td>
                      <Badge bg={int.status === 'Active' ? 'primary' : int.status === 'Completed' ? 'success' : 'warning'} className="bg-opacity-10 text-uppercase" style={{ color: 'inherit', border: '1px solid currentColor' }}>
                        {int.status}
                      </Badge>
                    </td>
                    <td><Button variant="link" className="text-primary p-0 small text-decoration-none fw-bold">View Details</Button></td>
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

export default Internship;
