import Quote from './components/Quote';
import { Server, Download, Shield, Zap, Users, Headphones } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 relative">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">OBED TECH KENYA</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Your trusted partner for cutting-edge web hosting and social media downloader solutions. 
            Empowering businesses and creators across Kenya with innovative, reliable technology.
          </p>
        </div>
      </section>

      <Quote />

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose OBED TECH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Hosting Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Web Hosting</h3>
              <p className="text-gray-600 mb-4">
                Experience blazing-fast website performance with our optimized hosting infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  99.9% Uptime Guarantee
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  Free SSL Certificates
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Technical Support
                </li>
              </ul>
            </div>

            {/* Social Media Downloader Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Media Downloader</h3>
              <p className="text-gray-600 mb-4">
                Download videos and content from all major social media platforms with ease.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  Lightning Fast Downloads
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  Secure & Private
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-green-500 mr-2" />
                  Multiple Platform Support
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600 mb-4">
                Our Kenyan-based support team understands your local business needs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-green-500 mr-2" />
                  Local Expertise
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  Quick Response Time
                </li>
                <li className="flex items-center">
                  <Headphones className="w-4 h-4 text-green-500 mr-2" />
                  Multilingual Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4">
        <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Affordable Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-blue-200 rounded-xl p-6 text-center hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 bg-white">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Web Hosting</h3>
              <div className="text-4xl font-bold text-gray-800 mb-4">KSh 999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>10GB SSD Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Free Domain Registration</li>
                <li>Email Accounts</li>
                <li>One-Click WordPress Install</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Get Started
              </button>
            </div>

            <div className="border-2 border-green-200 rounded-xl p-6 text-center hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 bg-white">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Downloader Pro</h3>
              <div className="text-4xl font-bold text-gray-800 mb-4">KSh 499<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>Unlimited Downloads</li>
                <li>HD Quality Videos</li>
                <li>Batch Download Support</li>
                <li>No Watermarks</li>
                <li>Priority Processing</li>
              </ul>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Kenya who trust OBED TECH for their digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold hover:transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold hover:transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
