import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Code, Presentation as PresentationChart } from 'lucide-react';

const RequirementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const requirements = [
    {
      icon: <Users size={24} />,
      title: "Team Formation",
      items: [
        "Teams of 1-4 participants",
        "Participants must register individually before forming teams",
        "Team members can be from different organizations or institutions",
        "Teams can be formed until the first week of the hackathon"
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Technical Requirements",
      items: [
        "Solutions must use AI/ML techniques",
        "Code must be original and developed during the hackathon period",
        "Teams can use open-source libraries and frameworks",
        "Solutions should be accessible via web or mobile interfaces",
        "All code must be hosted in a public GitHub repository"
      ]
    },
    {
      icon: <PresentationChart size={24} />,
      title: "Submission Requirements",
      items: [
        "Working prototype or MVP",
        "Source code with documentation",
        "5-minute demo video",
        "Presentation deck (max 10 slides)",
        "README file with setup instructions"
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
    <section id="requirements" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>Requirements from Candidates</h2>
          <p>
            To participate in the HackerEarth x Agent.ai Hackathon, participants must meet the following requirements.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="mb-6 text-primary">
                {requirement.icon}
              </div>
              
              <h3 className="mb-4">{requirement.title}</h3>
              
              <ul className="space-y-3">
                {requirement.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="mb-4 text-center">Eligibility</h3>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h4 className="mb-2 text-primary">Who Can Participate</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Students enrolled in undergraduate or graduate programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Industry professionals with an interest in AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Developers, data scientists, and researchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Individuals of all skill levels, from beginners to experts</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <h4 className="mb-2 text-primary">Required Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Basic programming knowledge in Python, JavaScript, or similar languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Familiarity with AI/ML concepts (beneficial but not required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Understanding of web or mobile application development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary">Problem-solving abilities and creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;