import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsPeople, BsChatDots, BsCalendarPlus, BsArrowLeft, BsCheck2Circle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Counselling = () => {
  const navigate = useNavigate();

  const sessions = [
    { type: "Academic Counselling", date: "2023-10-12", time: "10:00 AM", status: "Scheduled", counsellor: "Dr. Srinivas" },
    { type: "Career Guidance", date: "2023-09-28", time: "02:30 PM", status: "Completed", counsellor: "Prof. Priya" },
    { type: "Personal Mentoring", date: "2023-09-15", time: "11:00 AM", status: "Completed", counsellor: "Dr. Srinivas" }
  ];

  return (
    <div className="counselling-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <Row className="g-4">
          <Col lg={8}>
            <h2 className="fw-bold mb-4">Development & <span className="text-gradient">Counselling</span></h2>
            <Card className="glass-card p-4 border-0 mb-4">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2"><BsChatDots className="text-primary" /> Upcoming & Past Sessions</h5>
              <div className="d-flex flex-column gap-3">
                {sessions.map((s, i) => (
                  <div key={i} className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="m-0 fw-bold">{s.type}</h6>
                      <small className="text-secondary">{s.date} at {s.time} • with {s.counsellor}</small>
                    </div>
                    <span className={`badge bg-${s.status === 'Scheduled' ? 'primary' : 'success'} bg-opacity-10 text-${s.status === 'Scheduled' ? 'primary' : 'success'}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2"><BsCalendarPlus className="text-secondary" /> Book a Session</h5>
              <Form className="d-flex flex-column gap-3">
                <Form.Group>
                  <Form.Label className="small text-secondary">Counselling Type</Form.Label>
                  <Form.Select className="bg-transparent text-white border-white border-opacity-10 small shadow-none">
                    <option className="bg-dark">Academic</option>
                    <option className="bg-dark">Career</option>
                    <option className="bg-dark">Personal</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small text-secondary">Preferred Date</Form.Label>
                  <Form.Control type="date" className="bg-transparent text-white border-white border-opacity-10 small shadow-none" />
                </Form.Group>
                <Button className="btn-premium btn-primary-grad mt-2 w-100">Schedule Now</Button>
              </Form>
              <div className="mt-4 p-3 rounded bg-primary bg-opacity-5 small border border-white border-opacity-5">
                <BsCheck2Circle className="text-success me-2" /> 24/7 Helpline available for urgent matters.
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Counselling;
