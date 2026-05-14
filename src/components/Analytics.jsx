import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { BsPeople, BsMortarboard, BsJournalBookmark, BsBriefcase } from 'react-icons/bs';

const data = [
  { name: 'Mon', attendance: 85, publications: 10 },
  { name: 'Tue', attendance: 88, publications: 15 },
  { name: 'Wed', attendance: 92, publications: 12 },
  { name: 'Thu', attendance: 90, publications: 20 },
  { name: 'Fri', attendance: 87, publications: 18 },
  { name: 'Sat', attendance: 75, publications: 5 },
];

const pieData = [
  { name: 'Engineering', value: 400 },
  { name: 'Management', value: 300 },
  { name: 'Science', value: 200 },
  { name: 'Arts', value: 100 },
];

const COLORS = ['#4f46e5', '#ec4899', '#06b6d4', '#10b981'];

const stats = [
  { label: "Total Students", value: "8,540", icon: <BsPeople />, color: "primary" },
  { label: "Total Faculty", value: "420", icon: <BsMortarboard />, color: "secondary" },
  { label: "Research Pubs", value: "1,250+", icon: <BsJournalBookmark />, color: "accent" },
  { label: "Placements", value: "92%", icon: <BsBriefcase />, color: "success" },
];

const Analytics = () => {
  return (
    <section className="py-5" id="analytics">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Institutional <span className="text-gradient">Performance Insights</span></h2>
          <p className="text-secondary">Real-time data visualization of campus activities and academic progress.</p>
        </div>

        <Row className="g-4 mb-5">
          {stats.map((stat, i) => (
            <Col key={i} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card p-4 border-0 text-center h-100">
                  <div className={`mx-auto mb-3 p-3 rounded-circle d-flex align-items-center justify-content-center text-${stat.color}`} style={{ width: '60px', height: '60px', background: `rgba(255,255,255,0.05)` }}>
                    {stat.icon}
                  </div>
                  <h3 className="fw-bold mb-1">{stat.value}</h3>
                  <p className="text-secondary small mb-0">{stat.label}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="glass-card p-4 border-0 h-100">
              <h5 className="fw-bold mb-4">Attendance & Research Trends</h5>
              <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="attendance" stroke="#4f46e5" fillOpacity={1} fill="url(#colorAttendance)" />
                    <Line type="monotone" dataKey="publications" stroke="#ec4899" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="glass-card p-4 border-0 h-100">
              <h5 className="fw-bold mb-4">Department Distribution</h5>
              <div style={{ width: '100%', height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3">
                {pieData.map((item, i) => (
                  <div key={i} className="d-flex align-items-center justify-content-between mb-2 small">
                    <span className="text-secondary"><span className="d-inline-block me-2 rounded-circle" style={{ width: '10px', height: '10px', background: COLORS[i] }}></span>{item.name}</span>
                    <span className="fw-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Analytics;
