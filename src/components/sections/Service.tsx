import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  label: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, label }) => {
  return (
    <div className="flex flex-col w-full lg:max-w-[500px] ">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-64 w-full rounded-xl lg:h-[320px] object-cover"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-center py-3 px-6 rounded-lg font-overpass transition-all hover:bg-primary">
          {label}
        </div>
        <div className="bg-[#F6ECED] w-[90%] sm:w-[80%] lg:w-[309px] h-[169px] absolute top-[250px] sm:top-[240px] lg:top-[240px] left-1/2 transform -translate-x-1/2 pt-[15.6px] gap-[15.6px] rounded-lg px-4 font-overpass shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Skilled Counsellor',
      description:
        'Connect with our skilled counselors at Skill Spot Australia. Receive personalized guidance and support tailored to your career goals and aspirations. Start your journey to success today.',
      imageUrl: '/ser1.png',
      label: 'Skilled Counsellor',
    },
    {
      title: 'Online/Physical',
      description:
        'Skill Spot Australia offers both online and physical learning options. Choose the mode that suits you best and embark on your journey to skill enhancement and career success.',
      imageUrl: '/ser2.png',
      label: 'Online/Physical',
    },
    {
      title: 'All Over Australia',
      description:
        'Skill Spot Australia serves students all over the country. Wherever you are in Australia, access our quality education and training services to advance your skills and career.',
      imageUrl: '/ser3.png',
      label: 'All Over Australia',
    },
  ];

  return (
    <section className="py-12 lg:h-[600px] mb-10">
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-overpass font-bold text-center mb-4">Services</h2>
        <p className="text-center text-gray-500 font-overpass mb-12">
          At Skill Spot Australia, we provide top-notch facilities for effective learning
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[56px]">
          {services.map((service, index) => (
            <ServiceCard

              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              label={service.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
