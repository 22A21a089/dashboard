import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsCheckCircle, BsClockHistory, BsBell, BsInfoCircle } from 'react-icons/bs';

const activities = [
  { text: "New Student registered for CSE Department", time: "10 mins ago", type: "success" },
  { text: "Timetable updated for 3rd Year Section B", time: "25 mins ago", type: "info" },
  { text: "Publication added: AI in Modern Healthcare", time: "1 hour ago", type: "success" },
  { text: "Faculty Leave request approved by HOD", time: "2 hours ago", type: "warning" },
  { text: "Placement Drive announced: Google Cloud", time: "4 hours ago", type: "info" },
  { text: "New Internship posted for 2nd Year Students", time: "Yesterday", type: "info" },
  { text: "Counselling Session completed for Arun Kumar", time: "Yesterday", type: "success" },
];

const Activity = () => {
  return (
    <section className="py-5 bg-dark bg-opacity-50">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="glass-card p-4 border-0">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold m-0 d-flex align-items-center gap-2">
                  <BsClockHistory className="text-primary" /> Recent Institutional Activities
                </h5>
                <button className="btn-glass px-3 py-1 rounded-pill small" style={{ fontSize: '12px' }}>View All</button>
              </div>

              <div className="activity-feed">
                {activities.map((act, i) => (
                  <motion.div 
                    key={i} 
                    className="activity-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="activity-info flex-grow-1 pb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="fw-semibold small">{act.text}</span>
                          <span className="text-secondary" style={{ fontSize: '11px' }}>{act.time}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge bg-${act.type} bg-opacity-10 text-${act.type} border border-${act.type} border-opacity-25`} style={{ fontSize: '10px' }}>
                            {act.type === 'success' ? <BsCheckCircle /> : act.type === 'info' ? <BsBell /> : <BsInfoCircle />} {act.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Activity;
