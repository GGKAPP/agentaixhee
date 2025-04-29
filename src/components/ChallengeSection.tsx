import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb } from 'lucide-react';

const ChallengeSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="challenges" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>About The Challenge</h2>
          <p>
            The HackerEarth x Agent.ai Hackathon challenges participants to reimagine AI agents and create innovative solutions that push the boundaries of what's possible.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Lightbulb size={32} />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="mb-4">Challenge Overview</h3>
              <p className="mb-6">
                The future of AI lies in autonomous agents that can perform complex tasks, make decisions, and adapt to changing conditions without constant human intervention. This hackathon invites you to develop innovative AI agent solutions that address real-world problems across various domains.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2">Theme: "Building Intelligent Agents for a Better Tomorrow"</h4>
                  <p>
                    Create AI agents that can understand context, learn from interactions, and provide valuable assistance in everyday scenarios. Your solution should demonstrate both technical excellence and practical application.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-2">Core Challenge</h4>
                  <p>
                    Develop an AI agent that can perform a specific task or solve a particular problem with minimal human intervention. Your agent should be able to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                    <li>Process and understand natural language inputs</li>
                    <li>Make contextually appropriate decisions</li>
                    <li>Learn and improve from feedback</li>
                    <li>Execute actions to achieve specified goals</li>
                    <li>Provide clear and helpful responses to users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeSection;