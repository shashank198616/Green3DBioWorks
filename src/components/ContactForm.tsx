'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: 'general',
    consentGiven: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.consentGiven) newErrors.consent = 'You must consent';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', inquiryType: 'general', consentGiven: false });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            <p className="font-medium">Thank you for your inquiry!</p>
            <p className="text-sm">We'll get back to you within 24 hours.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-earth"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-earth"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-earth"
            >
              <option value="general">General Inquiry</option>
              <option value="investment">Investment Interest</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="support">Technical Support</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-earth resize-none"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consentGiven"
                checked={formData.consentGiven}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-green-earth focus:ring-green-earth"
              />
              <span className="text-sm text-gray-600">
                I consent to being contacted about my inquiry and agree to the privacy policy *
              </span>
            </label>
            {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-earth text-white py-3 rounded-lg font-bold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}