'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const mockData = [
  { time: '00:00', production: 480, co2: 950 },
  { time: '04:00', production: 490, co2: 1010 },
  { time: '08:00', production: 510, co2: 1050 },
  { time: '12:00', production: 530, co2: 1100 },
  { time: '16:00', production: 520, co2: 1080 },
  { time: '20:00', production: 500, co2: 1040 },
];

export function MetricsDashboard() {
  const [isLive, setIsLive] = useState(true);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Live Metrics Dashboard</h2>
            <p className="text-gray-600">Real-time plant performance monitoring</p>
          </div>
          <motion.button
            onClick={() => setIsLive(!isLive)}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              isLive ? 'bg-green-earth text-white' : 'bg-gray-100 text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLive ? '🔴 Live' : '⚪ Paused'}
          </motion.button>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Daily Production', value: '500', unit: 'MMBtu', icon: '⚡' },
            { label: 'Temperature', value: '37', unit: '°C', icon: '🌡️' },
            { label: 'Pressure', value: '8.5', unit: 'bar', icon: '📊' },
            { label: 'System Uptime', value: '99.5', unit: '%', icon: '✅' },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <p className="text-3xl font-bold text-green-earth">
                {metric.value}
                <span className="text-lg text-gray-600 ml-2">{metric.unit}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Production Trend */}
          <motion.div
            className="bg-gray-50 rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Production Trend (24h)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  formatter={(value) => `${value} MMBtu`}
                />
                <Line type="monotone" dataKey="production" stroke="#047857" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* CO2 Reduction */}
          <motion.div
            className="bg-gray-50 rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">CO2 Reduction Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  formatter={(value) => `${value} tons`}
                />
                <Bar dataKey="co2" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {[
            { label: 'Waste Processed (Today)', value: '50', unit: 'tons', percent: 100 },
            { label: 'Feedstock Level', value: '78', unit: '%', percent: 78 },
            { label: 'System Status', status: 'All Systems Online', good: true },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-lg border border-gray-200 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-gray-600 mb-4">
                {item.label || 'System Status'}
              </p>
              {item.value && (
                <>
                  <p className="text-3xl font-bold text-green-earth mb-4">
                    {item.value}{item.unit}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-earth h-2 rounded-full transition-all"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </>
              )}
              {item.status && (
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.good ? 'bg-green-600' : 'bg-yellow-600'}`} />
                  <span className="text-sm text-gray-700">{item.status}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </section>
  );
}