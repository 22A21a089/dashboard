import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  BsBook, BsGraphUp, BsClockHistory, BsDownload, 
  BsFileEarmarkPdf, BsArrowLeft, BsCheck2Circle, BsXCircle, BsCalendarPlus 
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Table } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AcademicSupport = () => {
  const navigate = useNavigate();
  const [showMark, setShowMark] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { subject: "Data Structures", percentage: 92, status: "Good" },
    { subject: "Computer Networks", percentage: 88, status: "Good" },
    { subject: "Operating Systems", percentage: 74, status: "Low" },
    { subject: "Digital Electronics", percentage: 95, status: "Excellent" }
  ]);

  const academicData = {
    gpa: "3.85 / 4.0",
    resources: [
      { name: "DS & Algorithms Notes", type: "PDF", size: "2.4 MB" },
      { name: "OS Previous Year Papers", type: "PDF", size: "1.8 MB" },
      { name: "Computer Networks Lab Manual", type: "PDF", size: "3.1 MB" }
    ],
    upcomingTasks: [
      { task: "OS Assignment Submission", date: "Oct 15", priority: "High" },
      { task: "Quiz: Network Layers", date: "Oct 18", priority: "Medium" }
    ]
  };

  return (
    <div className="academic-support-page">
      <Navbar />
      
      <Container className="py-5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <Button 
            variant="link" 
            className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold"
            onClick={() => navigate('/')}
          >
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <Row className="g-4 mb-5">
          <Col lg={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-4 border-0 d-flex align-items-center justify-content-between flex-wrap gap-4"
            >
              <div>
                <h2 className="fw-bold mb-1">Academic <span className="text-gradient">Support Center</span></h2>
                <p className="text-secondary m-0">Track your performance, attendance, and study resources in one place.</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <Button className="btn-premium btn-glass btn-sm rounded-pill" onClick={() => setShowMark(true)}>
                  <BsCalendarPlus className="me-2" /> Mark Attendance
                </Button>
                <div className="text-center p-3 rounded bg-primary bg-opacity-10 border border-primary border-opacity-10">
                  <small className="text-secondary d-block mb-1">Current Cumulative GPA</small>
                  <h3 className="fw-bold text-primary m-0">{academicData.gpa}</h3>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Attendance Analytics */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card p-4 border-0 h-100">
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <BsGraphUp className="text-primary" /> Attendance Analytics
                </h5>
                <div className="d-flex flex-column gap-4">
                  {attendanceData.map((sub, i) => (
                    <div key={i}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-semibold small">{sub.subject}</span>
                        <span className={`badge bg-${sub.percentage >= 75 ? 'success' : 'danger'} bg-opacity-10 text-${sub.percentage >= 75 ? 'success' : 'danger'}`}>
                          {sub.percentage}% - {sub.status}
                        </span>
                      </div>
                      <ProgressBar 
                        now={sub.percentage} 
                        variant={sub.percentage >= 75 ? 'primary' : 'danger'} 
                        className="bg-white bg-opacity-5" 
                        style={{ height: '8px' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded bg-info bg-opacity-10 border border-info border-opacity-10 small text-info">
                  <BsCheck2Circle className="me-2" /> You are eligible for the semester examinations. Keep it up!
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Resources & Tasks */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4">
              {/* Study Materials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="glass-card p-4 border-0">
                  <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                    <BsBook className="text-secondary" /> Study Materials
                  </h5>
                  <ListGroup variant="flush" className="bg-transparent">
                    {academicData.resources.map((res, i) => (
                      <ListGroup.Item key={i} className="bg-transparent border-white border-opacity-10 px-0 py-3 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="p-2 rounded bg-primary bg-opacity-10 text-primary">
                            <BsFileEarmarkPdf size={20} />
                          </div>
                          <div>
                            <h6 className="m-0 fw-bold small text-white">{res.name}</h6>
                            <small className="text-secondary">{res.size} • {res.type}</small>
                          </div>
                        </div>
                        <Button variant="link" className="text-secondary p-0">
                          <BsDownload size={18} />
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button variant="outline-primary" className="btn-sm w-100 mt-3 rounded-pill">View All Library</Button>
                </Card>
              </motion.div>

              {/* Upcoming Tasks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="glass-card p-4 border-0 shadow-glow-sm">
                  <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                    <BsClockHistory className="text-warning" /> Academic Tasks
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {academicData.upcomingTasks.map((task, i) => (
                      <div key={i} className="d-flex justify-content-between align-items-center p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
                        <div>
                          <h6 className="m-0 fw-bold small text-white">{task.task}</h6>
                          <small className="text-secondary">Due: {task.date}</small>
                        </div>
                        <span className={`badge ${task.priority === 'High' ? 'bg-danger' : 'bg-warning'} bg-opacity-10 text-${task.priority === 'High' ? 'danger' : 'warning'}`}>
                          {task.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </Col>
        </Row>

        {/* Attendance Modal */}
        <Modal show={showMark} onHide={() => setShowMark(false)} size="lg" centered className="glass-modal">
          <Modal.Header closeButton className="border-0 bg-transparent text-white">
            <Modal.Title className="fw-bold">Daily Attendance Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-transparent text-white px-4">
            <Table className="table-dark table-borderless small m-0">
              <thead className="border-bottom border-white border-opacity-10">
                <tr><th>Student Name</th><th>Roll No</th><th>Status</th></tr>
              </thead>
              <tbody>
                {[
                  { name: "Rahul Sharma", roll: "22A21A0501" },
                  { name: "Priya Singh", roll: "22A21A0502" },
                  { name: "Amit Kumar", roll: "22A21A0503" }
                ].map((s, i) => (
                  <tr key={i} className="border-bottom border-white border-opacity-5">
                    <td className="py-3">{s.name}</td>
                    <td className="py-3 text-secondary">{s.roll}</td>
                    <td className="py-3">
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-success border-opacity-25 py-0">P</button>
                        <button className="btn btn-sm btn-outline-danger border-opacity-25 py-0">A</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer className="border-0 bg-transparent px-4 pb-4">
            <Button variant="secondary" onClick={() => setShowMark(false)} className="btn-sm rounded-pill">Close</Button>
            <Button onClick={() => setShowMark(false)} className="btn-premium btn-primary-grad btn-sm">Submit Attendance</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-glow-sm { box-shadow: 0 10px 20px rgba(79, 70, 229, 0.1); }
      `}} />
    </div>
  );
};

export default AcademicSupport;
