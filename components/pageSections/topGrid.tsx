"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./TopGrid.module.css";
import image1 from "@/public/images/gridImages/1.jpg";
import image2 from "@/public/images/gridImages/2.jpg";
import image3 from "@/public/images/gridImages/3.jpg";
import image4 from "@/public/images/gridImages/4.jpg";
import image5 from "@/public/images/gridImages/5.jpg";
import image6 from "@/public/images/gridImages/6.jpg";
import image7 from "@/public/images/gridImages/7.jpg";
import image8 from "@/public/images/gridImages/8.jpg";
import image9 from "@/public/images/gridImages/9.jpg";
import image10 from "@/public/images/gridImages/10.jpg";
import image11 from "@/public/images/gridImages/11.jpg";
import image12 from "@/public/images/gridImages/12.jpg";
import image13 from "@/public/images/gridImages/13.jpg";
import image14 from "@/public/images/gridImages/14.jpg";
import image15 from "@/public/images/gridImages/15.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

export default function TopGrid() {
  // console.log("Rendering TopGrid");
  const [currentMobileImage, setCurrentMobileImage] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setCurrentMobileImage((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div id="top-grid" className={styles.container}>
      {/* Desktop Grid */}
      <div className={`${styles.desktopGrid} animate-gridLoad`}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Grid image ${index + 1}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>
        ))}
      </div>

      {/* Mobile Single Image */}
      <div className={`${styles.mobileImage} animate-gridLoad`}>
        <Image
          src={images[currentMobileImage]}
          alt="Mobile display image"
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
