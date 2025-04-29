import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Lightbulb, Zap, Award } from 'lucide-react';

const EvaluationParameters: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const evaluationParams = [
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation & Creativity",
      weight: "25%",
      description: "Originality of the idea and creative approach to solving the problem. Novel use of AI techniques and unique value proposition.",
      criteria: [
        "Uniqueness of the solution",
        "Creative use of AI/ML technologies",
        "Differentiation from existing solutions",
        "Innovative approach to user experience"
      ]
    },
    {
      icon: <Zap size={28} />,
      title: "Technical Implementation",
      weight: "25%",
      description: "Quality of code, architecture, and implementation. Appropriate use of AI/ML technologies and technical complexity.",
      criteria: [
        "Code quality and organization",
        "Technical complexity and sophistication",
        "Effective use of AI/ML models",
        "Performance and scalability"
      ]
    },
    {
      icon: <Star size={28} />,
      title: "Impact & Practicality",
      weight: "25%",
      description: "Potential impact of the solution in addressing the chosen problem. Practicality and feasibility for real-world implementation.",
      criteria: [
        "Addresses a significant problem",
        "Potential for real-world impact",
        "Feasibility of implementation",
        "Market potential or social value"
      ]
    },
    {
      icon: <Award size={28} />,
      title: "User Experience & Design",
      weight: "25%",
      description: "Usability, interface design, and overall user experience. Ease of interaction with the AI agent and quality of user interface.",
      criteria: [
        "Intuitive interface and interaction",
        "Visual design quality",
        "Accessibility and inclusivity",
        "User journey and flow"
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="evaluation" className="py-24">
      <div className="container">
        <div className="section-title">
          <h2>Evaluation Parameters</h2>
          <p>
            All submitted projects will be evaluated based on the following criteria by our panel of expert judges.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {evaluationParams.map((param, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {param.icon}
                  </div>
                  <h3>{param.title}</h3>
                </div>
                <div className="text-lg font-bold text-primary">{param.weight}</div>
              </div>
              
              <p className="mb-4">{param.description}</p>
              
              <h4 className="text-sm font-semibold mb-2">Key Criteria:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {param.criteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <h3 className="mb-2">Judging Process</h3>
          <p className="mb-4">
            Projects will undergo a two-round evaluation process:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Round 1: Initial Screening</h4>
              <p className="text-sm">
                All submissions will be evaluated by the HackerEarth and Agent.ai technical teams to select the top 20 projects based on the above criteria.
              </p>
            </div>
            <div className="flex-1 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Round 2: Final Judging</h4>
              <p className="text-sm">
                The top 20 teams will present their projects to our panel of expert judges who will select the winners based on a comprehensive evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationParameters;