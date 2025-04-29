import React, { useState, useEffect } from 'react';
import { useSignup } from '../context/SignupContext';
import { motion } from 'framer-motion';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection: React.FC = () => {
  const { openSignup } = useSignup();
  const [countdownValues, setCountdownValues] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('June 30, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdownValues({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: 'Days', value: countdownValues.days },
    { label: 'Hours', value: countdownValues.hours },
    { label: 'Minutes', value: countdownValues.minutes },
    { label: 'Seconds', value: countdownValues.seconds },
  ];

  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">
              HackerEarth x Agent.ai
              <br />
              <span className="text-secondary">Innovation Hackathon</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Join the most innovative AI hackathon of the year. Build the future of AI agents and win amazing prizes. Don't miss your chance to showcase your talent!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={openSignup}
                className="btn btn-primary"
              >
                Register Now
              </button>
              <a href="#challenges" className="btn btn-outline">
                View Challenges
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-center mb-8">Event Starts In</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {countdownItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white text-2xl md:text-3xl font-bold">
                          {item.value}
                        </span>
                      </div>
                      <motion.div 
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 0, 0]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    </div>
                    <span className="text-secondary font-medium mt-2">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">June 30, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;