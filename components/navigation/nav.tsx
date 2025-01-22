"use client";

import Logo from "@/components/icons/logo";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topGridHeight =
        document?.getElementById("top-grid")?.offsetHeight ?? 0;
      setHasScrolled(window.scrollY > topGridHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById("top-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? styles.scrolled : "py-2 md:py-6"
      }`}
    >
      <nav className="max-w-4xl mx-auto flex gap-4 md:gap-8 items-center justify-center px-4">
        <button
          onClick={() => scrollToSection("wishlists")}
          className="uppercase text-baseText hover:opacity-70 transition-opacity text-xs md:text-base"
        >
          Wishlists
        </button>
        <button
          onClick={() => scrollToSection("gifts")}
          className="uppercase text-baseText hover:opacity-70 transition-opacity text-xs md:text-base"
        >
          Give
        </button>
        <button onClick={scrollToTop}>
          <Logo size={80} />
        </button>
        <button
          onClick={() => scrollToSection("dev")}
          className="uppercase text-baseText hover:opacity-70 transition-opacity text-xs md:text-base"
        >
          Dev
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="uppercase text-baseText hover:opacity-70 transition-opacity text-xs md:text-base"
        >
          Contact
        </button>
      </nav>
    </div>
  );
}
