import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  BsPersonBadge, BsCalendar3, BsFileEarmarkText, BsBuilding, 
  BsMortarboard, BsPeople, BsEnvelopePaper, BsAward, 
  BsCpu, BsLightbulb, BsBriefcase, BsShieldCheck, BsArrowRight 
} from 'react-icons/bs';
import { redirectToApp } from '../config/services';

const services = [
  { 
    title: "Faculty Management", 
    icon: <BsPersonBadge />, 
    desc: "Comprehensive profile and professional management for teaching staff.", 
    color: "#4f46e5", 
    users: "150+ Faculty", 
    serviceKey: "faculty_management" 
  },
  { 
    title: "Timetable Management", 
    icon: <BsCalendar3 />, 
    desc: "Smart scheduling and real-time classroom allocation system.", 
    color: "#10b981", 
    users: "85 Classes", 
    serviceKey: "timetable_management" 
  },
  { 
    title: "Question Paper System", 
    icon: <BsFileEarmarkText />, 
    desc: "Secure AES-256 encrypted repository for institutional examinations.", 
    color: "#f59e0b", 
    users: "1.2k Papers", 
    serviceKey: "question_paper" 
  },
  { 
    title: "Student Internship", 
    icon: <BsBuilding />, 
    desc: "Bridge the gap between academics and top-tier industry placements.", 
    color: "#ef4444", 
    users: "300+ Partners", 
    serviceKey: "internships" 
  },
  { 
    title: "Academic Support", 
    icon: <BsMortarboard />, 
    desc: "Attendance analytics, resource library, and performance tracking.", 
    color: "#8b5cf6", 
    users: "4k+ Students", 
    serviceKey: "academic_support" 
  },
  { 
    title: "Development & Counselling", 
    icon: <BsPeople />, 
    desc: "Personal mentoring, career guidance, and wellness support.", 
    color: "#ec4899", 
    users: "45 Mentors", 
    serviceKey: "counselling" 
  },
  { 
    title: "Leave Management", 
    icon: <BsEnvelopePaper />, 
    desc: "Digital leave application and approval workflow for staff & students.", 
    color: "#06b6d4", 
    users: "24/7 Portal", 
    serviceKey: "leave_management" 
  },
  { 
    title: "Research & Publications", 
    icon: <BsAward />, 
    desc: "Track institutional patents, journal articles, and research metrics.", 
    color: "#f97316", 
    users: "500+ Papers", 
    serviceKey: "research" 
  },
  { 
    title: "Smart Campus ERP", 
    icon: <BsCpu />, 
    desc: "Unified administration, finance, and accounts management system.", 
    color: "#6366f1", 
    users: "All Departments", 
    serviceKey: "smart_campus_erp" 
  },
  { 
    title: "Academic Support AI", 
    icon: <BsLightbulb />, 
    desc: "AI-powered learning companion for students and educators.", 
    color: "#22c55e", 
    users: "Active 24/7", 
    serviceKey: "learning_resources" 
  },
  { 
    title: "Career & Placements", 
    icon: <BsBriefcase />, 
    desc: "Manage recruitment drives, student resumes, and company visits.", 
    color: "#a855f7", 
    users: "95% Placed", 
    serviceKey: "placements" 
  },
  { 
    title: "IQAC Management System", 
    icon: <BsShieldCheck />, 
    desc: "AI-driven internal quality assurance cell for accreditation monitoring.", 
    color: "#3b82f6", 
    users: "NAAC/NBA Ready", 
    serviceKey: "iqac_management" 
  }
];

const ServicesGrid = ({ searchTerm = "" }) => {
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-5" id="services">
      <Container>
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="fw-bold"
            style={{ color: '#1a237e' }}
          >
            Digital <span style={{ color: '#b71c1c' }}>Services</span>
          </motion.h2>
          <p className="text-secondary">Access all SCET institutional applications from a single centralized portal.</p>
        </div>
        
        <Row className="g-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <Col key={index} lg={4} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="h-100"
                >
                  <Card 
                    className="h-100 p-4 border-0 shadow cursor-pointer service-main-card"
                    style={{ 
                      background: '#ffffff', 
                      borderRadius: '24px',
                      boxShadow: '0 20px 40px rgba(26,35,126,0.12)',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => redirectToApp(service.serviceKey)}
                  >
                    <div 
                      className="service-icon mb-4 shadow-sm" 
                      style={{ 
                        color: service.color, 
                        background: 'white',
                        border: `1px solid rgba(0,0,0,0.05)`
                      }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="fw-bold mb-3 text-dark">{service.title}</h5>
                    <p className="text-secondary small mb-4 flex-grow-1">
                      {service.desc}
                    </p>
                    <div className="d-flex align-items-center justify-content-between pt-3 border-top border-black border-opacity-5">
                      <div className="d-flex align-items-center gap-2 text-secondary small">
                        <div className="pulse-dot" style={{ backgroundColor: service.color }}></div>
                        {service.users}
                      </div>
                      <Button 
                        variant="link" 
                        className="text-primary p-0 text-decoration-none fw-bold small"
                        onClick={(e) => {
                          e.stopPropagation();
                          redirectToApp(service.serviceKey);
                        }}
                      >
                        Open App <BsArrowRight className="ms-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <h5 className="text-secondary">No services found matching "{searchTerm}"</h5>
            </Col>
          )}
        </Row>
      </Container>

      <footer className="mt-5 py-4 text-center text-white" style={{ backgroundColor: '#1a237e', borderTop: '4px solid #b71c1c' }}>
        <Container>
          <p className="mb-0 fw-bold">SCET ERP &copy; {new Date().getFullYear()} - Institutional Management System</p>
        </Container>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
      `}} />
    </section>
  );
};

export default ServicesGrid;
