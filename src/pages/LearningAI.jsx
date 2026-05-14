import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsLightbulb, BsCpu, BsRobot, BsChatDots, BsArrowLeft, BsMic, BsLink45Deg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LearningAI = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-ai-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <Row className="g-4 align-items-center mb-5">
          <Col lg={7}>
            <h2 className="display-5 fw-bold mb-3">AI-Powered <span className="text-gradient">Learning Companion</span></h2>
            <p className="text-secondary lead">Get instant academic assistance, personalized study plans, and smart summaries using our institutional AI engine.</p>
            <div className="d-flex gap-3 mt-4">
              <Button className="btn-premium btn-primary-grad px-4">Start Learning</Button>
              <Button className="btn-premium btn-glass px-4">Browse Library</Button>
            </div>
          </Col>
          <Col lg={5}>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="text-center">
              <div className="p-5 rounded-circle bg-primary bg-opacity-10 border border-primary border-opacity-10 d-inline-block shadow-2xl">
                <BsRobot size={100} className="text-primary" />
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 h-100">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2"><BsCpu className="text-primary" /> Core Features</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 small text-secondary">
                <li className="d-flex align-items-center gap-2"><BsChatDots className="text-success" /> 24/7 Academic Q&A</li>
                <li className="d-flex align-items-center gap-2"><BsLightbulb className="text-warning" /> Smart Notes Summarizer</li>
                <li className="d-flex align-items-center gap-2"><BsLink45Deg className="text-info" /> Automated Citation Tool</li>
                <li className="d-flex align-items-center gap-2"><BsMic className="text-danger" /> Voice Interaction</li>
              </ul>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="glass-card p-4 border-0">
              <div className="chat-interface p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 mb-3" style={{ height: '250px', overflowY: 'auto' }}>
                <div className="d-flex flex-column gap-3">
                  <div className="p-2 rounded bg-primary bg-opacity-10 small align-self-start border border-primary border-opacity-10" style={{ maxWidth: '80%' }}>
                    How can I help you with your studies today? You can ask me to summarize a topic or solve a math problem.
                  </div>
                </div>
              </div>
              <Form className="d-flex gap-2">
                <Form.Control placeholder="Ask AI anything about your course..." className="bg-transparent border-white border-opacity-10 text-white shadow-none" />
                <Button className="btn-primary px-4">Ask</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LearningAI;
