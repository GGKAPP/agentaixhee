import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WinnersSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pastWinners = [
    {
      year: "2024",
      theme: "AI for Climate Action",
      projects: [
        {
          position: "1st Place",
          name: "ClimateGuard",
          team: "EcoTech Innovators",
          description: "AI-powered climate monitoring system that predicts environmental changes and suggests mitigation strategies.",
          image: "https://images.pexels.com/photos/7173039/pexels-photo-7173039.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          position: "2nd Place",
          name: "GreenBot",
          team: "Sustainability Squad",
          description: "Chatbot assistant helping users reduce their carbon footprint through personalized recommendations.",
          image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          position: "3rd Place",
          name: "EcoSense",
          team: "Planet Protectors",
          description: "IoT solution with AI analytics for optimizing energy consumption in buildings and industrial facilities.",
          image: "https://images.pexels.com/photos/7048025/pexels-photo-7048025.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="winners" className="py-24">
      <div className="container">
        <div className="section-title">
          <h2>Past Winners</h2>
          <p>
            Discover the innovative projects that won previous editions of our hackathon. These teams demonstrated exceptional creativity, technical skill, and vision.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pastWinners.map((event, index) => (
            <div key={index} className="mb-16">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h3>{event.year} Winners</h3>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm">
                  Theme: {event.theme}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {event.projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
                        {project.position}
                      </div>
                      <h4 className="mb-2">{project.name}</h4>
                      <p className="text-sm font-medium text-gray-500 mb-3">Team: {project.team}</p>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
            <h3 className="mb-4">Your Project Could Be Next!</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              The HackerEarth x Agent.ai 2025 Hackathon is looking for groundbreaking AI agent solutions. Your team could join our hall of fame and win amazing prizes.
            </p>
            <a href="#home" className="btn btn-primary">
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WinnersSection;