"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Pains.module.css";
import pain1 from "@/public/images/painsImages/1.jpg";
import pain2 from "@/public/images/painsImages/2.jpg";
import pain3 from "@/public/images/painsImages/3.jpg";
import { Language } from "@/lib/translations";
import { getTranslations } from "@/lib/getTranslations";

const pains = (lang: Language | undefined) => [
  {
    image: pain1,
    title:
      lang === "ro"
        ? getTranslations("ro").pains.duplicate.title
        : getTranslations("en").pains.duplicate.title,
    description:
      lang === "ro"
        ? getTranslations("ro").pains.duplicate.description
        : getTranslations("en").pains.duplicate.description,
  },
  {
    image: pain2,
    title:
      lang === "ro"
        ? getTranslations("ro").pains.uncertainty.title
        : getTranslations("en").pains.uncertainty.title,
    description:
      lang === "ro"
        ? getTranslations("ro").pains.uncertainty.description
        : getTranslations("en").pains.uncertainty.description,
  },
  {
    image: pain3,
    title:
      lang === "ro"
        ? getTranslations("ro").pains.waste.title
        : getTranslations("en").pains.waste.title,
    description:
      lang === "ro"
        ? getTranslations("ro").pains.waste.description
        : getTranslations("en").pains.waste.description,
  },
];

export default function Pains({ lang }: { lang: Language | undefined }) {
  // console.log("Rendering Pains");
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

  return (
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
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
