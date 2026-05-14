import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsCalendar3, BsClock, BsPerson, BsGeoAlt, BsArrowLeft, BsDownload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Timetable = () => {
  const navigate = useNavigate();

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const periods = [
    { time: "09:00 - 10:00", subject: "Data Structures", room: "L-101", faculty: "Prof. Rao" },
    { time: "10:00 - 11:00", subject: "Operating Systems", room: "L-102", faculty: "Prof. Priya" },
    { time: "11:15 - 12:15", subject: "Digital Electronics", room: "Lab-A", faculty: "Prof. Anitha" },
    { time: "01:15 - 02:15", subject: "Discrete Maths", room: "L-101", faculty: "Prof. Varma" },
    { time: "02:15 - 03:15", subject: "Web Technologies", room: "L-105", faculty: "Prof. Deepa" }
  ];

  return (
    <div className="timetable-page">
      <Navbar />
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
          <Button variant="link" className="text-primary text-decoration-none p-0 d-flex align-items-center gap-2 fw-semibold" onClick={() => navigate('/')}>
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </motion.div>

        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <h2 className="fw-bold m-0">Smart <span className="text-gradient">Timetable</span></h2>
          <div className="d-flex gap-2">
            <Button variant="outline-primary" className="btn-sm rounded-pill"><BsDownload className="me-2" /> Download PDF</Button>
            <Button className="btn-premium btn-primary-grad btn-sm">Edit Schedule</Button>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={12}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 border-0 overflow-hidden">
              <div className="table-responsive">
                <Table className="table-dark table-borderless m-0">
                  <thead className="border-bottom border-white border-opacity-10 text-secondary small">
                    <tr>
                      <th className="py-3">Time</th>
                      {days.map(day => <th key={day} className="py-3">{day}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {periods.map((period, i) => (
                      <tr key={i} className="border-bottom border-white border-opacity-5">
                        <td className="py-4 text-primary fw-bold" style={{ width: '150px' }}>
                          <BsClock className="me-2 opacity-50" /> {period.time}
                        </td>
                        {days.map(day => (
                          <td key={day} className="py-4">
                            <motion.div whileHover={{ scale: 1.05 }} className="p-2 rounded bg-white bg-opacity-5 border border-white border-opacity-10 cursor-pointer">
                              <div className="fw-bold small mb-1">{period.subject}</div>
                              <div className="d-flex flex-column gap-1" style={{ fontSize: '10px', opacity: 0.7 }}>
                                <span><BsGeoAlt /> {period.room}</span>
                                <span><BsPerson /> {period.faculty}</span>
                              </div>
                            </motion.div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Timetable;
