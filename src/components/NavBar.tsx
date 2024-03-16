// NavBar.js
import { useEffect, useState } from "react";
import "./../index.css";
import "./../styles.css";
import Dialog from "./Dialog";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Set showNavbar to true after a delay
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Run only once after component mounts

  return (
    <nav
      className={`navbar absolute top-0 left-0 h-4 w-full flex justify-between px-12 py-6 ${
        showNavbar ? "show" : ""
      }`}
    >
      <h1 className="text-xl text-white hover:shadow-2xl hover:shadow-lime-500">
        SATURN
      </h1>
      <Dialog />
    </nav>
  );
};

export default NavBar;
