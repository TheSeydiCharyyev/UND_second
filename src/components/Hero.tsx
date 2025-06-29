import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-orange-400">Industrial</span> Solutions
                <br />
                for Modern Business
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                We deliver comprehensive industrial services and solutions that drive efficiency, 
                reduce costs, and accelerate your business growth in today's competitive market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-slate-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange-400">98%</div>
                <div className="text-slate-300">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  'Expert industrial engineers and technicians',
                  '24/7 support and maintenance services',
                  'Cutting-edge technology and equipment',
                  'Proven track record across industries'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;