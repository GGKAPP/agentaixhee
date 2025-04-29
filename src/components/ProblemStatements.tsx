import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Activity, ShoppingCart, BookOpen, Briefcase, Home, Heart, Globe, Shield } from 'lucide-react';

const ProblemStatements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: <MessageSquare size={24} />,
      title: "Conversational AI Assistant",
      description: "Create an AI assistant that can maintain context over long conversations, understand nuanced requests, and provide helpful, accurate responses across various domains.",
      category: "Natural Language Processing"
    },
    {
      icon: <Activity size={24} />,
      title: "Health Monitoring Agent",
      description: "Develop an AI agent that can analyze health data from wearable devices, identify patterns, provide personalized insights, and alert users to potential health concerns.",
      category: "Healthcare"
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Personal Shopping Assistant",
      description: "Build an AI agent that understands user preferences, recommends products across multiple platforms, compares prices, and helps users make informed purchasing decisions.",
      category: "E-commerce"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Personalized Learning Companion",
      description: "Design an AI tutor that adapts to individual learning styles, provides customized educational content, and offers encouragement and guidance to students.",
      category: "Education"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Productivity Workflow Optimizer",
      description: "Create an AI agent that helps professionals optimize their workflow, prioritize tasks, schedule meetings efficiently, and reduce time spent on administrative work.",
      category: "Productivity"
    },
    {
      icon: <Home size={24} />,
      title: "Smart Home Orchestrator",
      description: "Develop an agent that can coordinate multiple smart home devices, learn user preferences, anticipate needs, and create automated routines that enhance comfort and efficiency.",
      category: "IoT"
    },
    {
      icon: <Heart size={24} />,
      title: "Mental Wellness Companion",
      description: "Build an AI companion that provides emotional support, suggests wellness activities, tracks mood patterns, and offers resources for mental health management.",
      category: "Wellness"
    },
    {
      icon: <Globe size={24} />,
      title: "Sustainable Living Guide",
      description: "Create an agent that helps users reduce their environmental impact by providing personalized recommendations for sustainable choices in daily life.",
      category: "Sustainability"
    },
    {
      icon: <Shield size={24} />,
      title: "Personal Cybersecurity Guardian",
      description: "Design an AI agent that monitors digital activities, identifies potential security risks, provides education on safe online practices, and protects personal data.",
      category: "Cybersecurity"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="problem-statements" className="py-24">
      <div className="container">
        <div className="section-title">
          <h2>Problem Statements</h2>
          <p>
            Choose from one of these nine exciting problem statements or propose your own idea that aligns with the hackathon theme.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 hover:translate-y-[-5px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {problem.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                  {problem.category}
                </span>
              </div>
              
              <h4 className="mb-2">{problem.title}</h4>
              <p className="text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatements;