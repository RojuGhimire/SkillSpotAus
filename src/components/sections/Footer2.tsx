import React from 'react';

const Footer2: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white font-poppins py-4">
      <div className="container mx-auto flex flex-wrap justify-center space-x-4">
        <a href="#" aria-label="Terms and Conditions" className="hover:underline">Terms and Conditions</a>
        <span>|</span>
        <a href="#" aria-label="Privacy" className="hover:underline">Privacy</a>
        <span>|</span>
        <a href="#" aria-label="Disclaimer" className="hover:underline">Disclaimer</a>
        <span>|</span>
        <a href="#" aria-label="UWE Blackboard" className="hover:underline">UWE Blackboard</a>
        <span>|</span>
        <a href="#" aria-label="Turnitin" className="hover:underline">Turnitin</a>
        <span>|</span>
        <a href="#" aria-label="Press Archive" className="hover:underline">Press Archive</a>
        <span>|</span>
        <a href="#" aria-label="UWE+TBC" className="hover:underline">UWE+TBC</a>
        <span>|</span>
        <a href="#" aria-label="Downloads" className="hover:underline">Downloads</a>
        <span>|</span>
        <a href="#" aria-label="Vacancies" className="hover:underline">Vacancies</a>
      </div>
      <div className="text-center mt-2 text-muted-foreground">
        © {currentYear} Skill Spot Australia, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer2;
