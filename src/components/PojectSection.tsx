import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/Frame 18 1.png"
import image2 from "../assets/Frame 86 2.png";
import image3 from "../assets/Frame 19 3.png";


interface Project {
  id: number;
  image: string;
  caseStudyLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    image: image1,
    caseStudyLink: "/case-study/web3-social",
  },
  {
    id: 2,
    image: image2,
    caseStudyLink: "/case-study/aide-insurance",
  },
  {
    id: 3,
    image: image3,
    caseStudyLink: "/case-study/navigation-app",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-[40px] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full sm:mb-[30px] mb-2"
              />

              {project.caseStudyLink && (
                <div className="">
                  <motion.a
                    href={project.caseStudyLink}
                    className="text-[14px] sm:text-[24px] text-[#5C5C5C] underline "
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View case study
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
