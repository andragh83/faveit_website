"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
}

export default function SectionTitle({ title, image, imageAlt }: TitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, [mounted]);

  return mounted ? (
    <div ref={titleRef} className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={styles.image}
          priority
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  ) : (
    <div />
  );
}
