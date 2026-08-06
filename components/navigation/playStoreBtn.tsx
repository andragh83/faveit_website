"use client";

import Image from "next/image";

interface PlayStoreBtnProps {
  url: string;
}

export default function PlayStoreBtn({ url }: PlayStoreBtnProps) {
  // Play Store asset has ~33% transparent padding; scale so the
  // visible badge matches the App Store button's h-12 (48px).
  // 48 * (250 / 168) ≈ 71px
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-90 transition-opacity
        transform hover:scale-105 duration-200 pointer-events-auto"
    >
      <Image
        src="/images/get_it_on_playstore.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        className="h-[71px] w-auto block"
      />
    </a>
  );
}
