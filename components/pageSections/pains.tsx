"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Pains.module.css";
import pain1 from "@/public/images/painsImages/1.jpg";
import pain2 from "@/public/images/painsImages/2.jpg";
import pain3 from "@/public/images/painsImages/3.jpg";
import { Language } from "@/lib/translations";

const pains = (lang: Language | undefined) => [
  {
    image: pain1,
    title: lang === "ro" ? "Cadouri Duplicate" : "Duplicate Gifts",
    description:
      lang === "ro"
        ? "Te-ai săturat să primești cadouri neinspirate?"
        : "No more awkward gift duplicates at special occasions",
  },
  {
    image: pain2,
    title: lang === "ro" ? "Incertitudine" : "Gift Uncertainty",
    description:
      lang === "ro"
        ? "Vrei să scapi de dilema și efortul alegerii cadoului potrivit?"
        : "End the guessing game of what others truly want",
  },
  {
    image: pain3,
    title: lang === "ro" ? "Banii aruncați" : "Wasted Money",
    description:
      lang === "ro"
        ? "Asigură-te că fiecare cadou este dorit și apreciat"
        : "Ensure every gift is wanted and appreciated",
  },
];

export default function Pains({ lang }: { lang: Language | undefined }) {
  const [mounted, setMounted] = useState(false);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Initialize on mount
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
      {
        threshold: 0.3,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [mounted, lang]);

  return mounted ? (
    <section className={styles.container}>
      <div className={styles.grid}>
        {pains(lang).map((pain, index) => (
          <div
            key={pain.title}
            className={styles.card}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
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
  ) : (
    <div />
  );
}
