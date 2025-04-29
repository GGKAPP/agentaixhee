import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MessageSquare, Mail } from 'lucide-react';

const AdditionalInfoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const officeHours = [
    {
      day: "Monday & Wednesday",
      time: "2:00 PM - 4:00 PM EST",
      focus: "Technical Support & AI Implementation"
    },
    {
      day: "Tuesday & Thursday",
      time: "10:00 AM - 12:00 PM EST",
      focus: "Project Planning & User Experience"
    },
    {
      day: "Friday",
      time: "1:00 PM - 3:00 PM EST",
      focus: "Open Q&A Session"
    }
  ];

  const contacts = [
    {
      icon: <Mail size={20} />,
      channel: "Email Support",
      contact: "support@hackerearthxagent.ai",
      description: "For general inquiries, technical issues, and submission questions"
    },
    {
      icon: <MessageSquare size={20} />,
      channel: "Discord Community",
      contact: "discord.gg/hackerearthxagent",
      description: "Join our community for real-time discussions, team formation, and mentor interactions"
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
    <section id="support" className="py-24">
      <div className="container">
        <div className="section-title">
          <h2>Additional Information</h2>
          <p>
            Find all the support resources you need to succeed in the hackathon, from expert mentorship to technical assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="bg-primary text-white p-6">
              <div className="flex items-center gap-3">
                <Clock size={24} />
                <h3 className="text-white">Office Hours</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="mb-6">
                During the hackathon, our experts will be available during scheduled office hours to provide guidance, answer questions, and help you overcome challenges.
              </p>
              
              <div className="space-y-6">
                {officeHours.map((session, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-4 pb-4 border-b border-gray-100 last:border-none last:pb-0"
                  >
                    <div className="md:w-2/5">
                      <h4 className="text-lg font-medium">{session.day}</h4>
                      <p className="text-primary font-medium">{session.time}</p>
                    </div>
                    <div className="md:w-3/5">
                      <p className="font-medium mb-1">Focus: {session.focus}</p>
                      <p className="text-sm text-gray-500">
                        Connect with our experts to get guidance on specific aspects of your project. These sessions are held via Zoom.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">How to Join</p>
                <p className="text-sm">
                  Links to the office hours will be shared with registered participants via email and on the hackathon Discord server.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="bg-secondary text-white p-6">
              <div className="flex items-center gap-3">
                <MessageSquare size={24} />
                <h3 className="text-white">Contact Support</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="mb-6">
                Need help? Our support team is available throughout the hackathon to assist you with any questions or issues you may encounter.
              </p>
              
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      {contact.icon}
                      <h4>{contact.channel}</h4>
                    </div>
                    <p className="font-medium">{contact.contact}</p>
                    <p className="text-sm text-gray-500">{contact.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="text-center mb-4">Response Times</h4>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Email Support:</span>
                  <span className="text-sm">Within 12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Discord Support:</span>
                  <span className="text-sm">Within 2 hours during business hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <h3 className="text-center mb-8">Resources & Tools</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h4 className="mb-2">Documentation</h4>
              <p className="text-sm">
                Access comprehensive guides, API documentation, and tutorial videos to help you build your project.
              </p>
            </div>
            
            <div className="p-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
              </div>
              <h4 className="mb-2">Starter Templates</h4>
              <p className="text-sm">
                Get a head start with our curated templates and boilerplate code for various AI agent implementations.
              </p>
            </div>
            
            <div className="p-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>
              </div>
              <h4 className="mb-2">Developer Tools</h4>
              <p className="text-sm">
                Free access to premium developer tools, AI APIs, and cloud resources for the duration of the hackathon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;