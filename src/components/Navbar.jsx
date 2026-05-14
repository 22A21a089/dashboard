import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsMoon, BsSun, BsPersonCircle, BsBell, BsSearch } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Apply theme
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <Navbar expand="lg" className={`sticky-nav ${scrolled ? 'py-2 shadow-sm' : 'py-3'}`} variant="light">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className="logo-container"
            style={{ background: 'linear-gradient(45deg, #6366f1, #f43f5e)', width: 35, height: 35, borderRadius: '10px' }}
          />
          <span className="fw-bold tracking-tight">EDU<span className="text-primary">CORE</span> ERP</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-lg-4">
            {['Home', 'About', 'Services', 'Features', 'Analytics', 'Contact'].map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="position-relative nav-link-custom"
              >
                {item}
                <motion.div className="nav-underline" />
              </Nav.Link>
            ))}
          </Nav>
          
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className={`search-bar-container ${showSearch ? 'active' : ''}`}>
              <button className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => setShowSearch(!showSearch)}>
                <BsSearch />
              </button>
              <input type="text" placeholder="Search services..." className="search-input" />
            </div>

            <button className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
            
            <div className="position-relative">
              <button 
                className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <BsBell />
              </button>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                5
              </span>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="nav-dropdown glass-card p-3"
                  >
                    <h6 className="fw-bold mb-3">Notifications</h6>
                    <div className="d-flex flex-column gap-2">
                      <div className="small border-bottom border-white border-opacity-10 pb-2">New student registration</div>
                      <div className="small border-bottom border-white border-opacity-10 pb-2">Timetable updated</div>
                      <div className="small border-bottom border-white border-opacity-10 pb-2">Research paper approved</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="position-relative">
              <Button 
                className="btn-premium btn-primary-grad"
                onClick={() => setShowProfile(!showProfile)}
              >
                <BsPersonCircle /> Profile
              </Button>
              
              <AnimatePresence>
                {showProfile && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="nav-dropdown glass-card p-3"
                    style={{ right: 0 }}
                  >
                    <div className="text-center mb-3">
                      <div className="mx-auto bg-primary rounded-circle mb-2" style={{ width: 40, height: 40 }}></div>
                      <h6 className="m-0">Admin User</h6>
                      <small className="text-secondary">Super Admin</small>
                    </div>
                    <hr className="border-white border-opacity-10" />
                    <div className="d-flex flex-column gap-2 small">
                      <div className="cursor-pointer">Settings</div>
                      <div className="cursor-pointer">Activity Log</div>
                      <div className="text-danger cursor-pointer">Logout</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-custom {
          color: var(--text-secondary) !important;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .nav-link-custom:hover {
          color: var(--primary) !important;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: var(--primary);
          transition: all 0.3s ease;
          border-radius: 10px;
          transform: translateX(-50%);
        }
        .nav-link-custom:hover .nav-underline {
          width: 80%;
        }
        .search-bar-container {
          display: flex;
          align-items: center;
          background: rgba(0,0,0,0.03);
          border-radius: 30px;
          padding-right: 0;
          width: 42px;
          height: 42px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .search-bar-container.active {
          width: 220px;
          padding-right: 15px;
          background: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .search-input {
          background: transparent;
          border: none;
          color: var(--text-primary);
          outline: none;
          padding-left: 10px;
          font-size: 14px;
          width: 100%;
        }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          margin-top: 15px;
          width: 280px;
          z-index: 1001;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .cursor-pointer { cursor: pointer; transition: all 0.2s; padding: 8px; border-radius: 8px; }
        .cursor-pointer:hover { color: var(--primary); background: rgba(99,102,241,0.05); }
      `}} />
    </Navbar>
  );
};

export default CustomNavbar;
