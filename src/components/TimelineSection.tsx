import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      date: "June 1, 2025",
      title: "Registration Opens",
      description: "Registration portal opens for individuals and teams. Sign up early to receive exclusive resources and early access to workshops."
    },
    {
      date: "June 20, 2025",
      title: "Registration Closes",
      description: "Last day to register for the hackathon. Make sure your team is complete and registered by this date."
    },
    {
      date: "June 25, 2025",
      title: "Pre-Hackathon Workshop",
      description: "Virtual workshop covering AI technologies, tools, and tips for the hackathon. Perfect for beginners and advanced participants alike."
    },
    {
      date: "June 30, 2025",
      title: "Hackathon Kickoff",
      description: "Official start of the hackathon with an opening ceremony, keynote speakers, and detailed problem statement presentations."
    },
    {
      date: "July 1-14, 2025",
      title: "Hacking Period",
      description: "Two weeks of intense development. Mentorship sessions, tech talks, and office hours will be available throughout this period."
    },
    {
      date: "July 14, 2025",
      title: "Submission Deadline",
      description: "All projects must be submitted by 11:59 PM EST. Late submissions will not be accepted."
    },
    {
      date: "July 15-20, 2025",
      title: "Judging Period",
      description: "Projects will be evaluated by our expert panel of judges. Top 20 teams will be selected for the final round."
    },
    {
      date: "July 25, 2025",
      title: "Finals & Award Ceremony",
      description: "Top teams will present their projects, winners will be announced, and prizes will be awarded during a virtual ceremony."
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
    <section id="timeline" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>Event Timeline</h2>
          <p>
            Mark your calendar with these important dates for the HackerEarth x Agent.ai Hackathon. All times are in Eastern Standard Time (EST).
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-0.5px]"></div>

          {/* Timeline Events */}
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-[20px] h-[20px] bg-primary rounded-full transform translate-x-[-10px] md:translate-x-[-10px] mt-1.5"></div>
                
                {/* Date Column */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right flex flex-col justify-center">
                  <div className={`inline-block px-3 py-1 rounded-lg mb-2 font-semibold text-white text-sm ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} bg-primary`}>
                    {event.date}
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="md:w-1/2 pl-12 md:pl-8 flex flex-col justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="mb-2">{event.title}</h4>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;