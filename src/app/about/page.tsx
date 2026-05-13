'use client';

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-earth to-green-emerald text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-100">Learn more about our biogas plant</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to transforming organic waste into clean energy solutions. Our biogas plant 
                represents the intersection of environmental responsibility and economic viability.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through innovative technology and sustainable practices, we help industries reduce their 
                carbon footprint while generating valuable energy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to become a leading provider of biogas energy solutions in India and beyond.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-earth/10 to-green-emerald/10 rounded-xl p-8 border border-green-earth/20">
              <h3 className="text-2xl font-bold text-green-earth mb-6">Key Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">♻️</span>
                  <div>
                    <h4 className="font-bold text-green-earth">Sustainability</h4>
                    <p className="text-sm text-gray-600">Protecting the environment for future generations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-bold text-green-earth">Innovation</h4>
                    <p className="text-sm text-gray-600">Cutting-edge technology and continuous improvement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h4 className="font-bold text-green-earth">Partnership</h4>
                    <p className="text-sm text-gray-600">Collaborating with communities and businesses</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-green-earth font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">20+ years in renewable energy sector</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-6xl mb-4">👨‍🔬</div>
              <h3 className="text-xl font-bold mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-green-earth font-medium mb-2">Chief Technical Officer</p>
              <p className="text-gray-600 text-sm">Expert in biogas technology and processes</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold mb-2">Priya Singh</h3>
              <p className="text-green-earth font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">Ensures smooth daily operations and quality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}