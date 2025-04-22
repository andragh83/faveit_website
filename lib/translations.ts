export const translations = {
  en: {
    hero: {
      title: "The Social Network for Fulfilled Wishes",
      subtitle1: "Keep all your wishlist in one place.",
      subtitle2:
        "Share them with your friends and make gift-giving meaningful.",
      cta: "Find out more",
    },
    pains: {
      duplicate: {
        title: "Duplicate Gifts",
        description: "No more awkward gift duplicates at special occasions",
      },
      uncertainty: {
        title: "Gift Uncertainty",
        description: "End the guessing game of what others truly want",
      },
      waste: {
        title: "Wasted Money",
        description: "Ensure every gift is wanted and appreciated",
      },
    },
    sections: {
      wishlists: "Keep all your wishlists in one place.",
      gifts: "Find the perfect gift for your friends and loved ones!",
    },
    dev: {
      greeting: "Hi! I'm Andra",
      intro:
        "Thank you for being here and checking out my project! I've created FaveIT to fill a need that I had, to use it myself and I hope you will find a use for it too!",
      story:
        "I have always struggled with choosing what to get for loved ones, friends and anyone really. And for some time now I've became convinced that technology could easily solve this problem. Hope you'll enjoy using FaveIT!",
    },
  },
  ro: {
    hero: {
      title: "Aplicația de Socializare pentru Dorințe Împlinite",
      subtitle1: "Păstrează listele de dorințe într-un singur loc.",
      subtitle2:
        "Împărtășește-le cu prietenii și oferă cadouri dorite și cu impact.",
      cta: "Află mai multe",
    },
    pains: {
      duplicate: {
        title: "Cadouri neinspirate",
        description: "Te-ai săturat să primești cadouri neinspirate?",
      },
      uncertainty: {
        title: "Incertitudine",
        description:
          "Vrei să scapi de dilema și efortul alegerii cadoului potrivit?",
      },
      waste: {
        title: "Bani Irosiți",
        description: "Asigură-te că fiecare cadou este dorit și apreciat",
      },
    },
    sections: {
      wishlists: "Păstrează-ți toate listele de dorințe într-un singur loc.",
      gifts: "Găsește cadoul perfect pentru prieteni și cei dragi!",
    },
    dev: {
      greeting: "Hello! Sunt Andra",
      intro:
        "Mă bucur că ești aici și că proiectul meu ți-a trezit curiozitatea! Am creat FaveIT pentru a rezolva o nevoie cu care m-am confruntat eu însămi de-a lungul timpului și sper că vei găsi și tu o utilitate pentru el!",
      story:
        "Mereu mi-a fost greu să aleg ce să cumpăr pentru cei dragi, pentru prieteni și pentru oricine, de fapt. De ceva timp încoace, am devenit convinsă că tehnologia ar putea rezolva ușor această problemă așa că sper să te bucuri de FaveIT și să te ajute să primeși și să oferi cadori memorabile!",
    },
  },
};

export type Language = keyof typeof translations;
