import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Zap, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Cutting-edge Technology',
      description: 'Access to the latest AI technologies and tools for development',
    },
    {
      icon: <Brain size={24} />,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts and AI researchers',
    },
    {
      icon: <Zap size={24} />,
      title: 'Rapid Innovation',
      description: 'Transform your ideas into working prototypes in just days',
    },
    {
      icon: <Users size={24} />,
      title: 'Global Community',
      description: 'Connect with talented developers from around the world',
    },
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
    <section id="about" className="bg-white py-24">
      <div className="container">
        <div className="section-title">
          <h2>About The Organizers</h2>
          <p>
            HackerEarth and Agent.ai have joined forces to bring you the most innovative AI hackathon of 2025. Learn more about the companies behind this exciting event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4">HackerEarth</h3>
            <p className="mb-6">
              HackerEarth is a leading developer assessment platform that helps companies accurately measure, identify, and hire top developer talent. With a community of over 7 million developers, HackerEarth has been at the forefront of innovation in the tech recruitment space.
            </p>
            <p>
              Through hackathons, coding challenges, and assessment solutions, HackerEarth connects businesses with skilled developers while providing developers with opportunities to showcase their talents and learn new skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4">Agent.ai</h3>
            <p className="mb-6">
              Agent.ai is a pioneering artificial intelligence company focused on developing autonomous agents that can understand, learn, and interact with the world in human-like ways. Their cutting-edge research and technology is revolutionizing how AI systems integrate with everyday applications.
            </p>
            <p>
              With a mission to democratize AI and make it accessible to developers worldwide, Agent.ai provides tools and platforms that enable the creation of intelligent applications across various domains including healthcare, finance, education, and entertainment.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h4 className="mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;