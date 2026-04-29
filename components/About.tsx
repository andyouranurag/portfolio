"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const experience = [
  {
    title: "Database management",
    organization: "ET Edge · Internship",
    date: "Apr 2025 - Jul 2025",
    location: "Mumbai, Maharashtra, India · On-site",
    description: "Managing large-scale datasets of 450,000+ records with a focus on data cleaning, validation, updating, and extraction. Utilizing Salesforce and Excel to ensure data accuracy and consistency across platforms. Supporting the team in maintaining high data integrity standards. Skills: Customer Relationship Management (CRM).",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Full Stack Developer",
    organization: "Freelance / Projects",
    date: "2023 - Present",
    description: "Developing scalable web applications using MERN stack and Next.js. Implementing AI integrations.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Leadership in PR & Hospitality",
    organization: "Event Management",
    date: "2022 - 2024",
    description: "Led public relations and hospitality teams for major events. Developed strong multi-tasking and problem-solving skills.",
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const education = [
  {
    title: "Master's Degree",
    organization: "Amity University, Noida",
    date: "2025 - Present",
    description: "Specializing in Data Science and Machine Learning. Advanced coursework in predictive modeling.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Bachelor of Science (BSc) Data Science",
    organization: "SIES College of Arts, Science and Commerce",
    date: "2022 - 2025",
    description: "Core computer science principles, Statistics,database management, and programming foundations.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "HSC",
    organization: "Ramniranjan Jhunjhunwala College",
    date: "2020 - 2022",
    description: "Completed secondary and higher secondary education with a focus on PCMB.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Top: Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">Me</span>
        </h2>
        
        <div className="prose prose-lg dark:prose-invert text-foreground/80 mx-auto">
          <p>
            I am a results-driven <strong>Data Analyst and Full Stack Developer</strong> with a passion for transforming raw data into actionable insights and building seamless web experiences.
          </p>
          <p>
            My journey bridges the analytical rigor of Data Science with the creative problem-solving of Software Engineering. I leverage tools like Python, SQL, and Power BI to analyze complex datasets, while utilizing the MERN stack and Next.js to craft robust applications.
          </p>
          <p>
            Beyond coding, my background in Public Relations and Hospitality has equipped me with excellent leadership, multi-tasking, and communication skills, allowing me to thrive in dynamic, fast-paced environments.
          </p>
        </div>
      </motion.div>

      {/* Bottom: Timelines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24">
        
        {/* Left Column: Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-10 flex items-center justify-center lg:justify-start gap-3">
            <Briefcase className="text-accent" /> Experience & Volunteer
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent hidden sm:block"></div>

            <div className="space-y-10 relative">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative sm:pl-20"
                >
                  {/* Dot / Icon */}
                  <div className="absolute left-4 -translate-x-1/2 top-1 w-10 h-10 rounded-full items-center justify-center border-4 border-background bg-foreground text-background shadow-sm z-10 hidden sm:flex">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border border-glass-border">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 whitespace-nowrap w-fit">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-accent font-medium">{item.organization}</h4>
                    {item.location && <p className="text-xs text-foreground/50 mb-3 mt-1">{item.location}</p>}
                    {!item.location && <div className="mb-3"></div>}
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div>
          <h3 className="text-2xl font-bold mb-10 flex items-center justify-center lg:justify-start gap-3">
            <GraduationCap className="text-accent-light" /> Education
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-light/50 to-transparent hidden sm:block"></div>

            <div className="space-y-10 relative">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative sm:pl-20"
                >
                  {/* Dot / Icon */}
                  <div className="absolute left-4 -translate-x-1/2 top-1 w-10 h-10 rounded-full items-center justify-center border-4 border-background bg-accent-light text-white shadow-sm z-10 hidden sm:flex">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border border-glass-border">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 whitespace-nowrap w-fit">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-accent-light font-medium mb-3">{item.organization}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
