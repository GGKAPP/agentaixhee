import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter } from 'lucide-react';

const JudgesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const judges = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Director",
      company: "Agent.ai",
      bio: "Dr. Chen leads AI research at Agent.ai, focusing on developing autonomous agents with human-like reasoning capabilities. She previously worked at leading AI research labs and has published extensively in top AI conferences.",
      image: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Raj Patel",
      title: "CTO",
      company: "HackerEarth",
      bio: "Raj oversees all technical aspects of HackerEarth's platform and developer assessment tools. With 15+ years of experience in tech leadership, he's passionate about innovation in developer tools and AI applications.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Professor of AI Ethics",
      company: "Stanford University",
      bio: "An expert in AI ethics and policy, Dr. Rodriguez researches the societal implications of AI systems and develops frameworks for responsible AI development. He advises several tech companies on ethical AI practices.",
      image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emma Wilson",
      title: "VP of Product",
      company: "AutoAgent",
      bio: "Emma leads product strategy at AutoAgent, a leading AI agent platform. She has a background in UX design and cognitive science, with a focus on creating intuitive interfaces for complex AI systems.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Tom Zhang",
      title: "Venture Partner",
      company: "AI Ventures",
      bio: "A veteran tech investor specializing in AI startups, Tom has backed several successful AI companies. He brings both technical expertise and business acumen to evaluating innovative technologies.",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Aisha Johnson",
      title: "Head of AI Research",
      company: "Global Tech",
      bio: "Dr. Johnson leads a team developing cutting-edge AI systems at Global Tech. Her research focuses on multimodal learning and embodied AI. She holds numerous patents and has published pioneering work in reinforcement learning.",
      image: "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#"
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
    <section id="judges" className="bg-gray-50 py-24">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Judges</h2>
          <p>
            Our distinguished panel of judges brings together expertise from academia, industry, and the investor community to evaluate your innovative solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${judge.image})` }}
              ></div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="mb-1">{judge.name}</h4>
                <p className="text-primary font-medium mb-1">{judge.title}</p>
                <p className="text-sm text-gray-500 mb-4">{judge.company}</p>
                
                <p className="text-sm mb-4 flex-1">{judge.bio}</p>
                
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href={judge.linkedin} 
                    className="w-8 h-8 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                    aria-label={`${judge.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={judge.twitter} 
                    className="w-8 h-8 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    aria-label={`${judge.name}'s Twitter`}
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JudgesSection;