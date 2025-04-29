import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, FileCheck, Clock } from 'lucide-react';

const SubmissionGuidelines: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="submission" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>Submission Guidelines</h2>
          <p>
            Follow these guidelines carefully to ensure your project is eligible for judging. All submissions must be received by July 14, 2025, 11:59 PM EST.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100 mb-12"
        >
          <h3 className="mb-6 text-center">Submission Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center gap-2 mb-4">
                <FileText size={20} className="text-primary" />
                Required Documentation
              </h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Project README</p>
                    <p className="text-sm text-gray-600">Comprehensive README file with project description, features, technologies used, and setup instructions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Presentation Slides</p>
                    <p className="text-sm text-gray-600">10-slide maximum presentation explaining your solution, approach, and impact (PDF format).</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Demo Video</p>
                    <p className="text-sm text-gray-600">5-minute video demonstrating your application's functionality and features.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">System Architecture</p>
                    <p className="text-sm text-gray-600">Diagram illustrating your solution's architecture and data flow.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center gap-2 mb-4">
                <FileCheck size={20} className="text-primary" />
                Code Requirements
              </h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Source Code</p>
                    <p className="text-sm text-gray-600">Complete source code in a public GitHub repository with clear folder structure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Deployment Instructions</p>
                    <p className="text-sm text-gray-600">Detailed instructions for deploying and running your application locally or in the cloud.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">API Documentation</p>
                    <p className="text-sm text-gray-600">Documentation for any APIs created or used, including endpoints and request/response formats.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Dependencies</p>
                    <p className="text-sm text-gray-600">List of all dependencies, libraries, and frameworks used in your project.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Download size={20} />
              </div>
              <h4>Submission Platform</h4>
            </div>
            
            <p className="mb-4">
              All project submissions must be made through the HackerEarth platform. You'll need to:
            </p>
            
            <ol className="space-y-3 pl-5 list-decimal">
              <li className="text-secondary">
                Log in to your HackerEarth account
              </li>
              <li className="text-secondary">
                Navigate to the "HackerEarth x Agent.ai Hackathon" page
              </li>
              <li className="text-secondary">
                Click on "Submit Project" button
              </li>
              <li className="text-secondary">
                Fill out the submission form with all required information
              </li>
              <li className="text-secondary">
                Upload your files or provide links as specified
              </li>
            </ol>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium">Need help with your submission?</p>
              <p className="text-sm">Contact our support team at support@hackerearthxagent.ai</p>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <h4>Important Dates & Deadlines</h4>
            </div>
            
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Project Submission Opens</span>
                <span className="text-primary font-semibold">July 10, 2025</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Final Submission Deadline</span>
                <span className="text-primary font-semibold">July 14, 2025 (11:59 PM EST)</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Initial Judging Period</span>
                <span className="text-primary font-semibold">July 15-18, 2025</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Finalist Announcement</span>
                <span className="text-primary font-semibold">July 20, 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Final Presentations</span>
                <span className="text-primary font-semibold">July 25, 2025</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm font-medium text-red-600">Late Submission Policy</p>
              <p className="text-sm text-red-600">No extensions will be granted. Submissions received after the deadline will not be considered for judging.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;