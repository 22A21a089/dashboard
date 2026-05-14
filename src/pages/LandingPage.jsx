import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Activity from '../components/Activity';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="loader-wrapper"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-content text-center">
              <motion.div 
                className="loader-logo mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.h4 
                className="fw-bold tracking-widest text-uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                EduCore <span className="text-primary">ERP</span>
              </motion.h4>
              <div className="loader-bar mx-auto mt-3">
                <motion.div 
                  className="loader-progress"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <ServicesGrid />
            <Analytics />
            <Features />
            <Activity />
          </main>
          <Footer />
        </motion.div>
      )}

      {/* Floating Chat Widget */}
      <motion.div 
        className="chat-widget position-fixed bottom-0 end-0 m-4 z-index-1000"
        whileHover={{ scale: 1.1 }}
      >
        <button 
          className="btn-premium btn-primary-grad p-3 rounded-circle shadow-2xl"
          onClick={() => setShowChat(!showChat)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      </motion.div>

      <AnimatePresence>
        {showChat && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="chat-drawer glass-card"
          >
            <div className="chat-header d-flex align-items-center justify-content-between">
              <h6 className="m-0 fw-bold">EduCore AI Assistant</h6>
              <button className="btn btn-sm text-white p-0" onClick={() => setShowChat(false)}>✕</button>
            </div>
            <div className="chat-body">
              <div className="d-flex flex-column gap-3">
                <div className="p-2 rounded bg-primary bg-opacity-10 small align-self-start border border-primary border-opacity-10">
                  Hello! I am your AI campus assistant. How can I help you today?
                </div>
                <div className="p-2 rounded bg-white bg-opacity-5 small align-self-end border border-white border-opacity-10 text-end">
                  Show me the latest placement stats.
                </div>
              </div>
            </div>
            <div className="chat-input d-flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="form-control form-control-sm bg-transparent border-white border-opacity-10 text-white"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button className="btn btn-sm btn-primary px-3">Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .loader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #0a0c1b;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .loader-logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #4f46e5, #ec4899);
          border-radius: 12px;
          margin: 0 auto;
        }
        .loader-bar {
          width: 200px;
          height: 3px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        .loader-progress {
          height: 100%;
          background: var(--primary);
        }
        .chat-widget button {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}} />
    </div>
  );
};

export default LandingPage;
