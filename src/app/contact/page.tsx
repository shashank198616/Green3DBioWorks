'use client';

import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-earth to-green-emerald text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">Get in touch with our team</p>
        </div>
      </div>
      
      <ContactForm />
    </>
  );
}