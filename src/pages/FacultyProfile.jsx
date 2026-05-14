import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  BsPersonBadge, BsAward, BsBriefcase, BsBook, 
  BsPencilSquare, BsArrowLeft, BsEnvelope, BsTelephone, BsCheckCircle 
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FacultyProfile = () => {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [facultyData, setFacultyData] = useState({
    name: "Dr. Srinivas Rao",
    designation: "Head of Department - Computer Science",
    empId: "FAC-CS-001",
    email: "srinivas.rao@techcollege.edu",
    phone: "+91 98765 43210",
    specialization: "Artificial Intelligence & Distributed Systems",
    qualifications: [
      { degree: "Ph.D. in Computer Science", institution: "IIT Madras", year: "2015" },
      { degree: "M.Tech in Software Engineering", institution: "BITS Pilani", year: "2010" }
    ],
    workload: [
      { subject: "Distributed Systems", year: "3rd Year", section: "A", credits: 4 },
      { subject: "Machine Learning", year: "4th Year", section: "B", credits: 3 }
    ],
    achievements: [
      "Published 25+ International Research Papers",
      "Best Teacher Award 2023",
      "Principal Investigator for AI Research Grant"
    ]
  });

  const [formData, setFormData] = useState({ ...facultyData });

  const handleSave = () => {
    setFacultyData({ ...formData });
    setShowEdit(false);
  };

  return (
    <div className="faculty-profile-page">
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

        <Row className="g-4">
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card p-4 border-0 text-center">
                <div className="mx-auto mb-3 position-relative" style={{ width: '120px' }}>
                  <div className="rounded-circle bg-primary overflow-hidden shadow-lg" style={{ width: '120px', height: '120px' }}>
                    <img src="https://i.pravatar.cc/150?u=fac1" alt="Faculty" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <button 
                    className="position-absolute bottom-0 end-0 btn btn-sm btn-primary rounded-circle p-2 shadow-lg"
                    onClick={() => setShowEdit(true)}
                  >
                    <BsPencilSquare size={14} />
                  </button>
                </div>
                <h4 className="fw-bold mb-1">{facultyData.name}</h4>
                <p className="text-primary small fw-semibold mb-3">{facultyData.designation}</p>
                <div className="d-flex flex-column gap-2 text-secondary small mb-4">
                  <div className="d-flex align-items-center justify-content-center gap-2"><BsEnvelope /> {facultyData.email}</div>
                  <div className="d-flex align-items-center justify-content-center gap-2"><BsTelephone /> {facultyData.phone}</div>
                </div>
                <Button className="btn-premium btn-primary-grad w-100" onClick={() => setShowEdit(true)}>Edit Profile</Button>
              </Card>
            </motion.div>
          </Col>

          {/* Edit Modal */}
          <Modal show={showEdit} onHide={() => setShowEdit(false)} centered className="glass-modal">
            <Modal.Header closeButton className="border-0 bg-transparent text-white">
              <Modal.Title className="fw-bold">Edit Faculty Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-transparent text-white px-4">
              <Form className="d-flex flex-column gap-3">
                <Form.Group>
                  <Form.Label className="small text-secondary">Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white bg-opacity-5 border-white border-opacity-10 text-white shadow-none"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small text-secondary">Designation</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={formData.designation} 
                    onChange={(e) => setFormData({...formData, designation: e.target.value})}
                    className="bg-white bg-opacity-5 border-white border-opacity-10 text-white shadow-none"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small text-secondary">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white bg-opacity-5 border-white border-opacity-10 text-white shadow-none"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 bg-transparent px-4 pb-4">
              <Button variant="secondary" onClick={() => setShowEdit(false)} className="btn-sm rounded-pill">Cancel</Button>
              <Button onClick={handleSave} className="btn-premium btn-primary-grad btn-sm">Save Changes</Button>
            </Modal.Footer>
          </Modal>

          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-0 p-4">
                <Tab.Container defaultActiveKey="info">
                  <Nav variant="pills" className="custom-pills mb-4 gap-2">
                    <Nav.Item>
                      <Nav.Link eventKey="info" className="glass-pill"><BsPersonBadge className="me-2" /> Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="qual" className="glass-pill"><BsBook className="me-2" /> Qualifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="work" className="glass-pill"><BsBriefcase className="me-2" /> Workload</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ach" className="glass-pill"><BsAward className="me-2" /> Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="info">
                      <h5 className="fw-bold mb-4">Professional Summary</h5>
                      <p className="text-secondary small">
                        Senior faculty member with over 15 years of academic and research experience. Leading the Computer Science department with a focus on emerging AI technologies and student-centric research initiatives.
                      </p>
                      <div className="row g-3 mt-2">
                        <div className="col-6">
                          <div className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
                            <small className="text-secondary d-block">Employee ID</small>
                            <span className="fw-bold">{facultyData.empId}</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
                            <small className="text-secondary d-block">Specialization</small>
                            <span className="fw-bold">{facultyData.specialization}</span>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="qual">
                      <h5 className="fw-bold mb-4">Academic Qualifications</h5>
                      {facultyData.qualifications.map((q, i) => (
                        <div key={i} className="mb-3 p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 fw-bold">{q.degree}</h6>
                            <small className="text-secondary">{q.institution}</small>
                          </div>
                          <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25">{q.year}</span>
                        </div>
                      ))}
                    </Tab.Pane>

                    <Tab.Pane eventKey="work">
                      <h5 className="fw-bold mb-4">Current Semester Workload</h5>
                      <div className="table-responsive">
                        <table className="table table-dark table-borderless small">
                          <thead className="text-secondary border-bottom border-white border-opacity-10">
                            <tr><th>Subject</th><th>Target</th><th>Credits</th><th>Status</th></tr>
                          </thead>
                          <tbody>
                            {facultyData.workload.map((w, i) => (
                              <tr key={i}>
                                <td className="py-3 fw-bold">{w.subject}</td>
                                <td className="py-3 text-secondary">{w.year} - Sec {w.section}</td>
                                <td className="py-3">{w.credits}</td>
                                <td className="py-3"><span className="badge bg-success bg-opacity-10 text-success">Active</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="ach">
                      <h5 className="fw-bold mb-4">Key Achievements</h5>
                      <ul className="list-unstyled d-flex flex-column gap-3">
                        {facultyData.achievements.map((a, i) => (
                          <li key={i} className="d-flex align-items-start gap-3 p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10">
                            <BsAward className="text-primary mt-1" />
                            <span className="small">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .glass-pill {
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          color: white !important;
          border-radius: 10px !important;
          padding: 8px 20px !important;
          font-size: 13px !important;
        }
        .nav-link.active.glass-pill {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4) !important;
        }
        .custom-pills .nav-item { margin-bottom: 5px; }
      `}} />
    </div>
  );
};

export default FacultyProfile;
