'use client';
import { useState } from 'react';

export default function FarmerRegistration() {
  const [form, setForm] = useState({ name: '', village: '', crop: '', mobile: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.village || !form.crop || !form.mobile) {
      setError('Please fill in all fields to register interest.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-earth-green/8 border border-earth-green/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-earth-green/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">Thank you, {form.name}!</h3>
        <p className="text-muted-sage text-sm max-w-xs mx-auto">
          We have received your details and our team will contact you within 2 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-earth-beige/50 text-sm text-charcoal placeholder:text-earth-beige focus:outline-none focus:border-earth-green transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
            Village / District *
          </label>
          <input
            name="village"
            value={form.village}
            onChange={handleChange}
            placeholder="e.g. Raipur, Chhattisgarh"
            className="w-full px-4 py-3 rounded-xl border border-earth-beige/50 text-sm text-charcoal placeholder:text-earth-beige focus:outline-none focus:border-earth-green transition-colors bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
            Primary Crop *
          </label>
          <select
            name="crop"
            value={form.crop}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-earth-beige/50 text-sm text-charcoal focus:outline-none focus:border-earth-green transition-colors bg-white"
          >
            <option value="">Select crop type</option>
            <option value="paddy">Paddy Straw</option>
            <option value="napier">Napier Grass</option>
            <option value="corn">Corn / Maize Stover</option>
            <option value="sugarcane">Sugarcane Bagasse</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
            Mobile Number *
          </label>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 XXXXXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-earth-beige/50 text-sm text-charcoal placeholder:text-earth-beige focus:outline-none focus:border-earth-green transition-colors bg-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-earth-green text-white py-4 rounded-xl font-bold hover:bg-deep-forest transition-colors duration-200 text-sm tracking-wide"
      >
        Register My Interest
      </button>
      <p className="text-xs text-muted-sage text-center">
        No commitment required. Our team will reach out within 2 working days.
      </p>
    </form>
  );
}
