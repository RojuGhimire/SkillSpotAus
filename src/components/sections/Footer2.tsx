const currentYear: number = new Date().getFullYear();

export const Footer2 = () => {
  return (
    <div>
         {/* Footer Bottom Links */}
         <div className="bg-primary text-white font-poppins py-4 mx-auto flex  flex-wrap justify-center space-x-4 text-sm lg:text-base">
          <a
            href="#"
            aria-label="Terms and Conditions"
            className="hover:underline"
          >
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" aria-label="Privacy" className="hover:underline">
            Privacy
          </a>
          <span>|</span>
          <a href="#" aria-label="Disclaimer" className="hover:underline">
            Disclaimer
          </a>
          <span>|</span>
          <a href="#" aria-label="UWE Blackboard" className="hover:underline">
            UWE Blackboard
          </a>
          <span>|</span>
          <a href="#" aria-label="Turnitin" className="hover:underline">
            Turnitin
          </a>
          <span>|</span>
          <a href="#" aria-label="Press Archive" className="hover:underline">
            Press Archive
          </a>
          <span>|</span>
          <a href="#" aria-label="UWE+TBC" className="hover:underline">
            UWE+TBC
          </a>
          <span>|</span>
          <a href="#" aria-label="Downloads" className="hover:underline">
            Downloads
          </a>
          <span>|</span>
          <a href="#" aria-label="Vacancies" className="hover:underline">
            Vacancies
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center bg-primary text-white font-overpass text-sm lg:text-base py-2">
          © {currentYear} Skill Spot Australia, All Rights Reserved
        </div>
    </div>
  )
}
