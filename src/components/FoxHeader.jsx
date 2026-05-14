import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { BsEnvelope, BsTelephone, BsSearch } from 'react-icons/bs';
import x from '../assets/naac.png'
import y from '../assets/nba.webp'
import z from '../assets/jntuk.png'
import a from '../assets/IIC.png'
import b from '../assets/ARIIA.jpg'
import c from '../assets/autonomous.png'
import logo from "../assets/swarnandhra.png";
const FoxHeader = ({ onSearch }) => {
  const badges = [
    { label: 'NAAC', url: x },
    { label: 'NBA', url: y },
    { label: 'JNTUK', url: z},
    { label: 'IIC', url: a },
    { label: 'ARIIA', url: b },
    { label: 'AUTONOMOUS', url: c },
  ];

  return (
    <>
      <div className="top-header-full">
        <Container fluid className="px-4">
          <Row className="align-items-center">
            {/* Logo Column */}
            <Col lg={1} md={2} className="text-center">
              <img src={logo} alt="SCET Logo" className="college-main-logo" />
            </Col>

            {/* Name Column */}
            <Col lg={4} md={10}>
              <div className="college-name-red">
                <h1>SWARNANDHRA</h1>
                <h6>COLLEGE OF ENGINEERING AND TECHNOLOGY</h6>
                <div className="text-primary fw-bold small">(AUTONOMOUS)</div>
                <div className="college-affiliations mt-1">
                  Permanent Affiliated to JNTUK, Kakinada, Approved by AICTE<br/>
                  Narsapur, Andhra Pradesh 534280, India
                </div>
              </div>
            </Col>

            {/* Badges Column */}
            <Col lg={4} className="d-none d-lg-flex justify-content-center gap-2">
              {badges.map((badge, i) => (
                <div key={i} className="badge-card">
                  <div className="badge-img-box">
                    <img src={badge.url} alt={badge.label} />
                  </div>
                  <div className="badge-label">{badge.label}</div>
                </div>
              ))}
            </Col>

            {/* Excellence & Code Column */}
            <Col lg={3} className="d-none d-lg-flex align-items-center justify-content-end gap-4">
              <div className="excellence-badge">
                <div className="number">25<span style={{fontSize: '1rem'}}>+</span></div>
                <div className="text">YEARS OF<br/>EXCELLENCE</div>
              </div>
              <div className="college-code-card">
                <div className="code-header">COLLEGE CODE</div>
                <div className="code-value">SWRN</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" className="fox-navbar">
        <Container fluid className="px-4">
          <Navbar.Brand href="/" className="d-lg-none text-white fw-bold d-flex align-items-center gap-2">
            <img src="/scet_logo.png" height="35" alt="Logo" />
            SCET COLLEGE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" className="bg-white border-0" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <Nav.Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white px-3 py-3 fw-bold small nav-link-underline"
                  style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center bg-white bg-opacity-10 px-3 py-2 rounded-pill border border-white border-opacity-10" style={{ minWidth: '250px' }}>
              <input
                type="text"
                placeholder="Search services..."
                className="bg-transparent border-0 text-white shadow-none w-100 small"
                style={{ outline: 'none' }}
                onChange={(e) => onSearch(e.target.value)}
              />
              <BsSearch className="text-white opacity-50 ms-2" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FoxHeader;
