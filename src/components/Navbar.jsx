import React from "react";

const PremiumNavbar = () => {
  // You can use state to manage the active link, here it's hardcoded for demonstration
  const activeLink = "Work with us";

  const navLinks = ["Services", "Community", "Work with us"];

  return (
    <header className="fixed top-0 w-full flex justify-center py-8 z-50">
      <nav className="bg-black/20 backdrop-blur-lg rounded-full border border-white/10 shadow-lg transition-all duration-300">
        <ul className="flex items-center space-x-1 p-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`
                  text-sm font-medium px-4 py-4 rounded-full transition-all duration-300
                  ${
                    activeLink === link
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default PremiumNavbar;
