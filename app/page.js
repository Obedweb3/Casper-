import Quote from './components/Quote';
import { Server, Download, Shield, Zap, Users, Headphones } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-blue-400">OBED TECH KENYA</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your trusted partner for cutting-edge web hosting and social media downloader solutions. 
              Empowering businesses and creators across Kenya with innovative, reliable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4">
        <Quote />
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Why Choose OBED TECH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Hosting Card */}
            <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Web Hosting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
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
            <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Media Downloader</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
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
            <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Affordable Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Web Hosting</h3>
              <div className="text-4xl font-bold text-gray-800 mb-6">KSh 999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li className="py-1">10GB SSD Storage</li>
                <li className="py-1">Unlimited Bandwidth</li>
                <li className="py-1">Free Domain Registration</li>
                <li className="py-1">Professional Email Accounts</li>
                <li className="py-1">One-Click WordPress Install</li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full font-semibold hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Downloader Pro</h3>
              <div className="text-4xl font-bold text-gray-800 mb-6">KSh 499<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li className="py-1">Unlimited Downloads</li>
                <li className="py-1">HD Quality Videos</li>
                <li className="py-1">Batch Download Support</li>
                <li className="py-1">No Watermarks</li>
                <li className="py-1">Priority Processing</li>
              </ul>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 w-full font-semibold hover:scale-105">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers across Kenya who trust OBED TECH for their digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105">
                Start Your Journey
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
