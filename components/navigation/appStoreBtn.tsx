"use client";

import Image from "next/image";

interface AppStoreBtnProps {
  url: string;
}

export default function AppStoreBtn({ url }: AppStoreBtnProps) {
  // console.log("Rendering FindOutMore");
  const scrollToPains = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("pains");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-baseText text-background 
        h-12 w-auto rounded-lg font-medium hover:opacity-90 transition-opacity
        transform hover:scale-105 duration-200 pointer-events-auto"
    >
      <Image
        src="/images/download_appstore.png"
        alt="download from appstore"
        width={200}
        height={160}
        className="h-12 w-auto"
      />
    </a>
  );
}
