"use client";

interface FindOutMoreProps {
  text: string;
}

export default function FindOutMore({ text }: FindOutMoreProps) {
  // console.log("Rendering FindOutMore");
  const scrollToPains = (e: React.MouseEvent) => {
    e.preventDefault();
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
      {text}
    </button>
  );
}
