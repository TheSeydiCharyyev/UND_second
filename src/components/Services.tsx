import React from 'react';
import { Cog, Shield, Zap, Wrench, BarChart3, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'Industrial Engineering',
      description: 'Comprehensive engineering solutions for manufacturing, automation, and process optimization.',
      features: ['Process Design', 'System Integration', 'Quality Control']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Ensure your operations meet all regulatory requirements and maintain the highest safety standards.',
      features: ['Safety Audits', 'Compliance Training', 'Risk Assessment']
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Modern automation systems to increase efficiency and reduce operational costs.',
      features: ['PLC Programming', 'Robotics', 'Smart Controls']
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Preventive and predictive maintenance to keep your equipment running at peak performance.',
      features: ['Scheduled Maintenance', 'Emergency Repairs', 'Parts Supply']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Data-driven insights to optimize your operations and maximize productivity.',
      features: ['KPI Monitoring', 'Efficiency Reports', 'Predictive Analytics']
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to minimize downtime and ensure continuous operations.',
      features: ['Remote Monitoring', 'Emergency Response', 'Technical Consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive industrial solutions tailored to meet your specific business needs 
            and drive operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-500 transition-colors">
                <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;