import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  label: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  label,
}) => {
  return (
    <motion.div
      className="flex flex-col w-full lg:max-w-[500px] group"
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6 }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-64 w-full rounded-xl lg:h-[320px] object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-xl">
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-center py-3 px-6 rounded-lg font-overpass transition-all hover:bg-primary">
          {label}
        </div>

        <div className="bg-[#F6ECED] w-[90%] sm:w-[80%] lg:w-[309px] h-[169px] absolute top-[200px] sm:top-[240px] lg:top-[240px] left-1/2 transform -translate-x-1/2 pt-[15.6px] gap-[15.6px] rounded-lg px-4 font-overpass shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Skilled Counsellor",
      description:
        "Connect with our skilled counselors at Skill Spot Australia. Receive personalized guidance and support tailored to your career goals and aspirations. Start your journey to success today.",
      imageUrl: "/ser1.png",
      label: "Skilled Counsellor",
    },
    {
      title: "Online/Physical",
      description:
        "Skill Spot Australia offers both online and physical learning options. Choose the mode that suits you best and embark on your journey to skill enhancement and career success.",
      imageUrl: "/ser2.png",
      label: "Online/Physical",
    },
    {
      title: "All Over Australia",
      description:
        "Skill Spot Australia serves students all over the country. Wherever you are in Australia, access our quality education and training services to advance your skills and career.",
      imageUrl: "/ser3.png",
      label: "All Over Australia",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 lg:mt-8 lg:h-[600px] mb-20 md:mb-4">
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-overpass font-bold text-center mb-4">
          Services
        </h2>
        <p className="text-center text-[#A4A4A4] font-overpass mb-12">
          At Skill Spot Australia, we provide top-notch facilities for effective
          learning
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  lg:gap-[56px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-40 lg:mb-2">
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                label={service.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
