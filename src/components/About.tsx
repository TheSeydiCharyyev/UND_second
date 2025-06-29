import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Expert Team Members' },
    { icon: Award, number: '25+', label: 'Industry Awards' },
    { icon: Globe, number: '40+', label: 'Countries Served' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI Increase' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Leading the <span className="text-orange-500">Future</span> of Industrial Innovation
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              For over 15 years, IndustryWorks has been at the forefront of industrial transformation, 
              helping businesses optimize their operations, reduce costs, and achieve sustainable growth 
              through innovative engineering solutions.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Mission</h3>
                <p className="text-slate-600">
                  To empower industrial businesses with cutting-edge solutions that drive efficiency, 
                  sustainability, and profitability in an ever-evolving global market.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Vision</h3>
                <p className="text-slate-600">
                  To be the global leader in industrial innovation, setting new standards for 
                  operational excellence and sustainable business practices.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Industrial facility"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border">
              <div className="text-3xl font-bold text-orange-500">15+</div>
              <div className="text-slate-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <stat.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;