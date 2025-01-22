"use client";

export default function FindOutMore() {
  const scrollToPains = () => {
    const element = document.getElementById("pains");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToPains}
      className="inline-block bg-baseText text-background 
        px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity
        transform hover:scale-105 duration-200 pointer-events-auto"
    >
      Find out more
    </button>
  );
}
