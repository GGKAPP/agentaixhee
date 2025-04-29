import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Gift } from 'lucide-react';

const PrizesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainPrizes = [
    {
      position: "1st Place",
      icon: <Trophy size={32} />,
      prize: "$10,000",
      color: "bg-primary",
      benefits: [
        "Cash prize of $10,000",
        "Opportunity to present at AI Agent Summit 2026",
        "Exclusive mentorship from industry leaders",
        "Feature on HackerEarth and Agent.ai platforms",
        "AI developer kit with latest hardware"
      ]
    },
    {
      position: "2nd Place",
      icon: <Award size={32} />,
      prize: "$5,000",
      color: "bg-secondary",
      benefits: [
        "Cash prize of $5,000",
        "Exclusive mentorship from industry leaders",
        "Feature on HackerEarth and Agent.ai platforms",
        "Cloud credits worth $10,000",
        "Premium developer subscriptions"
      ]
    },
    {
      position: "3rd Place",
      icon: <Gift size={32} />,
      prize: "$2,500",
      color: "bg-accent",
      benefits: [
        "Cash prize of $2,500",
        "Feature on HackerEarth and Agent.ai platforms",
        "Cloud credits worth $5,000",
        "Premium developer subscriptions",
        "Exclusive swag kit"
      ]
    }
  ];

  const specialPrizes = [
    {
      category: "Most Innovative Solution",
      prize: "$1,500",
      sponsor: "TechInnovate"
    },
    {
      category: "Best User Experience",
      prize: "$1,500",
      sponsor: "DesignFirst"
    },
    {
      category: "Best Use of Large Language Models",
      prize: "$1,500",
      sponsor: "AI Foundation"
    },
    {
      category: "Most Impactful Solution",
      prize: "$1,500",
      sponsor: "Global Impact Initiative"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="prizes" className="py-24">
      <div className="container">
        <div className="section-title">
          <h2>Prizes</h2>
          <p>
            Win incredible prizes and opportunities to showcase your innovation to the world. Over $25,000 in total prizes!
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                index === 0 ? 'md:transform md:-translate-y-4' : ''
              }`}
            >
              <div className={`${prize.color} text-white p-6 text-center`}>
                <div className="flex justify-center mb-2">
                  {prize.icon}
                </div>
                <h3 className="text-white mb-1">{prize.position}</h3>
                <div className="text-3xl font-bold">{prize.prize}</div>
              </div>
              
              <div className="p-6">
                <h4 className="mb-4 text-center">Prize Package</h4>
                <ul className="space-y-3">
                  {prize.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-center mb-8">Special Category Prizes</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h4 className="mb-2">{prize.category}</h4>
                <p className="text-lg font-semibold text-primary mb-1">{prize.prize}</p>
                <p className="text-sm text-gray-500">Sponsored by {prize.sponsor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gray-50 rounded-xl p-8 mt-12 text-center"
        >
          <h3 className="mb-4">Additional Benefits for All Participants</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Gift size={24} />
              </div>
              <h4 className="text-lg mb-2">Swag Kits</h4>
              <p className="text-sm">Exclusive hackathon merchandise for all participants</p>
            </div>
            
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Gift size={24} />
              </div>
              <h4 className="text-lg mb-2">Cloud Credits</h4>
              <p className="text-sm">$2,000 in cloud computing credits for every team</p>
            </div>
            
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Gift size={24} />
              </div>
              <h4 className="text-lg mb-2">Networking</h4>
              <p className="text-sm">Access to exclusive networking events with industry leaders</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;