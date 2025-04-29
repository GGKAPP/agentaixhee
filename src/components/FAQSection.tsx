import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to students, professionals, and enthusiasts from around the world who are interested in AI and software development. Participants can join individually or as part of a team with up to 4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the HackerEarth x Agent.ai Hackathon is completely free. All you need to do is register through our platform before the registration deadline."
    },
    {
      question: "Do I need to have AI experience to participate?",
      answer: "While some background in programming is recommended, you don't need extensive AI experience. We'll provide resources, workshops, and mentorship to help you get started. Teams with diverse skills (development, design, domain expertise) often perform well."
    },
    {
      question: "Can I use pre-existing code or projects?",
      answer: "Your submission must be original work developed during the hackathon period. However, you can use open-source libraries, frameworks, and APIs as building blocks. Any pre-existing code must be clearly documented and referenced in your submission."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, we'll have mentors from HackerEarth, Agent.ai, and our partner organizations available during scheduled office hours to provide guidance and support. You'll be able to book sessions with mentors through our platform."
    },
    {
      question: "How will the projects be judged?",
      answer: "Projects will be evaluated based on four key criteria: Innovation & Creativity (25%), Technical Implementation (25%), Impact & Practicality (25%), and User Experience & Design (25%). Our panel of judges includes industry experts, academics, and investors."
    },
    {
      question: "What if I don't have a team?",
      answer: "You can participate as an individual or join our team formation activities. We'll host virtual networking sessions before the hackathon and provide a dedicated channel on our Discord server for team formation."
    },
    {
      question: "Will I own the intellectual property of my project?",
      answer: "Yes, you will retain ownership of your intellectual property. However, by participating, you grant the organizers the right to showcase your project for promotional purposes."
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about the HackerEarth x Agent.ai Hackathon. If you don't see your question here, feel free to contact our support team.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  expandedFaq === index 
                    ? 'bg-white shadow-md border-primary' 
                    : 'bg-white hover:bg-gray-50 shadow-sm'
                } border`}
                aria-expanded={expandedFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 className="pr-8">{faq.question}</h4>
                <span className="text-primary flex-shrink-0">
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              {expandedFaq === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="bg-white p-6 rounded-b-lg shadow-md border border-t-0 border-primary/20 animate-fade-in"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="mb-4">Still have questions?</p>
          <a 
            href="mailto:support@hackerearthxagent.ai" 
            className="btn btn-primary"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;