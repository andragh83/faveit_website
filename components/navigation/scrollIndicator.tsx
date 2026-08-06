"use client";

export default function ScrollIndicator() {
  const scrollToPains = () => {
    const element = document.getElementById("pains");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToPains}
      aria-label="Scroll to learn more"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10
        pointer-events-auto text-baseText/60 hover:text-baseText
        transition-colors"
    >
      <span className="block animate-scroll-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>
  );
}
