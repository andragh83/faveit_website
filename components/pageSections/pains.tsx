"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Pains.module.css";
import pain1 from "@/public/images/painsImages/1.jpg";
import pain2 from "@/public/images/painsImages/2.jpg";
import pain3 from "@/public/images/painsImages/3.jpg";

const pains = [
  {
    image: pain1,
    title: "Duplicate Gifts",
    description: "No more awkward gift duplicates at special occasions",
  },
  {
    image: pain2,
    title: "Gift Uncertainty",
    description: "End the guessing game of what others truly want",
  },
  {
    image: pain3,
    title: "Wasted Money",
    description: "Ensure every gift is wanted and appreciated",
  },
];

export default function Pains() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {pains.map((pain, index) => (
          <div
            key={pain.title}
            className={styles.card}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={pain.image}
                alt={pain.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{pain.title}</h3>
              <p className={styles.description}>{pain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
