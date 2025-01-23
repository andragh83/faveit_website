"use client";

import { FC, useState } from "react";
import Image from "next/image";
import InstaIcon from "../icons/insta";
import bannerImage from "@/public/images/form_img.jpg";
import styles from "./Form.module.css";
import { Spinner } from "@/components/ui/spinner";
import CheckCircle from "../icons/checkCircle";
import Error from "../icons/error";
import { Language } from "@/lib/translations";

const FormSection: FC<{ lang: Language | undefined }> = ({ lang }) => {
  // console.log("Rendering FormSection");
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState<string | undefined>(undefined);

  const subscribe = async () => {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, lang }),
    });

    const data = await response.json();

    return {
      message: data.message,
      status: response.ok ? "success" : "error",
    };
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (email && isValidEmail(email)) {
      e.preventDefault();
      setIsLoading(true);

      try {
        const { status } = await subscribe();
        setIsLoading(false);
        setIsSubscribed(status === "success" ? true : false);
      } catch (error) {
        setError("An error occurred. Please try again.");
        console.error(error);
        setIsLoading(false);
      }
    } else {
      if (!email) {
        setInputError(
          lang === "ro"
            ? "Vă rugăm să introduceți adresa de email."
            : "Please enter your email address."
        );
      } else {
        setInputError(
          lang === "ro"
            ? "Vă rugăm să introduceți o adresă de email validă."
            : "Please enter a valid email address."
        );
      }
    }
  };

  return (
    <section className="relative w-full min-h-[400px]">
      {/* Banner Image with Overlay */}
      <div className={styles.imageWrapper}>
        <Image
          src={bannerImage}
          alt="Banner background"
          fill
          className={styles.image}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl min-h-[400px] mx-auto px-4 py-16 md:py-24 flex flex-col justify-center items-center text-center">
        {isSubscribed ? (
          <div className="flex justify-center items-center text-center self-center">
            <div className={`flex items-center gap-4 ${styles.fadeIn}`}>
              <CheckCircle />
              <h3 className="text-lg md:text-xl text-baseText">
                {lang === "ro"
                  ? "Vă mulțumim că v-ați abonat!"
                  : "Thank you for subscribing!"}
              </h3>
            </div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center text-center h-full">
            <div
              className={`flex flex-col items-center gap-4 ${styles.fadeIn}`}
            >
              <div className="flex items-center gap-4">
                <Error color="var(--error)" />
                <p className="text-md md:text-lg text-baseText ">
                  {lang === "ro"
                    ? "A apărut o eroare la abonare. Vă rugăm să încercați din nou."
                    : "There was an error subscribing. Please try again."}
                </p>
              </div>
              <button
                onClick={() => {
                  setError("");
                  setIsLoading(false);
                  setIsSubscribed(false);
                }}
                className="px-6 py-2 border border-baseText hover:opacity-80 text-baseText 
                         rounded-lg transition-colors duration-200"
              >
                OK
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            {/* Main Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-baseText">
              {lang === "ro" ? "Rămâi la curent" : "Stay Updated"}
            </h2>
            <p className="text-md md:text-lg text-textLighter mb-1 max-w-lg">
              {lang === "ro"
                ? "Abonează-te mai jos dacă dorești să fii notificat când lansăm FaveIT și când poți să începi să-l folosești."
                : "Subscribe below if you'd like to be notified when we launch FaveIT and when you can start using it."}
            </p>
            <p className="text-md md:text-lg text-textLighter mb-8 max-w-xl">
              {lang === "ro" ? "Promitem, fără spam!" : "We promise no spam!"}
            </p>

            {/* Form */}
            <div className="w-full max-w-md mb-8">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder={
                    lang === "ro"
                      ? "Introduceți-vă adresa de email"
                      : "Enter your email"
                  }
                  className="flex-1 px-4 py-3 rounded-lg bg-background/80 border border-textLighter/20 
                          text-baseText placeholder-textLighter/50 focus:outline-none focus:ring-2 
                          focus:ring-textLighter/30"
                  required
                  onChange={(event) => {
                    setInputError(undefined);
                    setEmail(event.target.value);
                  }}
                />
                {inputError && (
                  <p className={`text-sm text-red-500 ${styles.fadeIn}`}>
                    {inputError}
                  </p>
                )}
                <button
                  type="submit"
                  className="px-6 p-3 bg-baseText hover:opacity-80 text-background 
                         rounded-lg transition-colors duration-200"
                  onClick={(e: any) => handleSubmit(e)}
                  disabled={isLoading || inputError !== undefined}
                >
                  {isLoading ? (
                    <Spinner size="tiny" label="Subscribing" />
                  ) : lang === "ro" ? (
                    "Abonare"
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-baseText text-lg">
                {lang === "ro" ? "Urmăriți-ne pe" : "Follow us on"}
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://x.com/faveitapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-baseText hover:text-textLighter transition-colors"
                >
                  𝕏
                </a>
                <a
                  href="https://www.instagram.com/faveitapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-baseText hover:text-textLighter transition-opacity"
                >
                  <InstaIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormSection;
