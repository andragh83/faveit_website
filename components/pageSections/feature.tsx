"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./Feature.module.css";
import { generateIcon } from "../icons";
import { useEffect, useRef } from "react";
import CheckCircle from "../icons/checkCircle";

interface FeatureItem {
  title: string;
  icon: string;
  actions: string[];
  screenshots: StaticImageData[];
}

interface FeatureProps {
  feature: FeatureItem;
  textPosition: "left" | "right";
  hasBackground?: boolean;
}

export default function Feature({
  feature,
  textPosition,
  hasBackground = false,
}: FeatureProps) {
  const featureRef = useRef<HTMLElement>(null);
  const contentOrder = textPosition === "left" ? "md:order-1" : "md:order-2";
  const imagesOrder = textPosition === "left" ? "md:order-2" : "md:order-1";
  const slideDirection =
    textPosition === "left" ? styles.slideFromLeft : styles.slideFromRight;

  useEffect(() => {
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

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={featureRef}
      className={`${styles.container} ${
        hasBackground ? styles.withBackground : ""
      } ${slideDirection}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className={`${styles.content} order-1 ${contentOrder} md:w-1/2`}>
          <div className={styles.header}>
            <div className={styles.icon}>{generateIcon(feature.icon)}</div>
            <h2 className={styles.title}>{feature.title}</h2>
          </div>
          <div className={styles.separator} />
          <ul className={styles.actionList}>
            {feature.actions.map((action, index) => (
              <li key={index} className={styles.actionItem}>
                <div className="min-w-6">
                  <CheckCircle color="var(--primary-dark)" />
                </div>
                {action}
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots */}
        <div
          className={`${styles.screenshots} order-2 ${imagesOrder} md:w-1/2`}
        >
          {feature.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`${styles.screenshotWrapper} ${
                styles[`screenshot${index + 1}`]
              }`}
            >
              <Image
                src={screenshot}
                alt={`${feature.title} screenshot ${index + 1}`}
                className={styles.screenshot}
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
