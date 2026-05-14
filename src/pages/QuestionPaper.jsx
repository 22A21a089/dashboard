import React from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsFileEarmarkText, BsUpload, BsSearch, BsShieldLock, BsArrowLeft, BsCheckCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QuestionPaper = () => {
  const navigate = useNavigate();

  const papers = [
    { subject: "Data Structures", code: "CS301", type: "Mid-Term", date: "2023-10-01", status: "Secure" },
    { subject: "Computer Networks", code: "CS302", type: "Final Exam", date: "2023-12-15", status: "Draft" },
    { subject: "Operating Systems", code: "CS303", type: "Internal-1", date: "2023-09-10", status: "Secure" }
  ];

  return (
    <div className="question-paper-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <div>
            <h2 className="fw-bold m-0">Secure <span className="text-gradient">Question Paper System</span></h2>
            <p className="text-secondary small">AES-256 Encrypted storage for institutional examinations.</p>
          </div>
          <Button className="btn-premium btn-primary-grad shadow-lg"><BsUpload className="me-2" /> Upload New Paper</Button>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 mb-4 text-center">
              <div className="p-3 rounded-circle bg-primary bg-opacity-10 text-primary mx-auto mb-3" style={{ width: '60px' }}>
                <BsShieldLock size={30} />
              </div>
              <h6 className="fw-bold">Encryption Status</h6>
              <p className="text-secondary small">All papers are currently secured with hardware-level security keys.</p>
              <div className="d-flex align-items-center justify-content-center gap-2 text-success small">
                <BsCheckCircle /> Active Protection
              </div>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="glass-card p-4 border-0">
              <InputGroup className="mb-4 bg-white bg-opacity-5 rounded overflow-hidden">
                <InputGroup.Text className="bg-transparent border-0 text-secondary"><BsSearch /></InputGroup.Text>
                <Form.Control placeholder="Search papers by subject or code..." className="bg-transparent border-0 text-white shadow-none" />
              </InputGroup>

              <div className="d-flex flex-column gap-3">
                {papers.map((p, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded bg-secondary bg-opacity-10 text-secondary"><BsFileEarmarkText size={20} /></div>
                      <div>
                        <h6 className="m-0 fw-bold small text-white">{p.subject} ({p.code})</h6>
                        <small className="text-secondary">{p.type} • {p.date}</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <span className={`badge bg-${p.status === 'Secure' ? 'success' : 'warning'} bg-opacity-10 text-${p.status === 'Secure' ? 'success' : 'warning'}`}>{p.status}</span>
                      <Button variant="link" className="text-primary p-0 small">Manage</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default QuestionPaper;
