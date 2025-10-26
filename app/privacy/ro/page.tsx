import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate - FaveIT",
  description:
    "Politica de Confidențialitate pentru FaveIT - Aflați cum colectăm, folosim și protejăm datele dumneavoastră personale.",
};

export default function PrivacyPageRO() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-baseText mb-8">
          Politica de Confidențialitate pentru FaveIT
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-textLighter mb-8">
            <strong>Ultima actualizare:</strong> 26 octombrie 2025
          </p>

          <p className="text-textLighter mb-8">
            Această Politică de Confidențialitate descrie modul în care FaveIT,
            deținut și operat de Andromeda Technologies SRL ("noi", "al nostru",
            sau "noi"), colectează, folosește și protejează datele dumneavoastră
            personale când utilizați aplicația mobilă FaveIT ("Aplicația") și
            serviciile sale conexe.
          </p>

          <p className="text-textLighter mb-8">
            Prin utilizarea Aplicației, sunteți de acord cu această Politică de
            Confidențialitate.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              1. Informațiile pe care le colectăm
            </h2>
            <p className="text-textLighter mb-4">
              Colectăm următoarele tipuri de informații când utilizați FaveIT:
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              a. Informații despre cont
            </h3>
            <p className="text-textLighter mb-4">
              Când vă înregistrați, colectăm adresa dumneavoastră de email și
              alte informații opționale de profil, cum ar fi numele, numele de
              utilizator/handle și fotografia de profil.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              b. Conținutul utilizatorului
            </h3>
            <p className="text-textLighter mb-4">
              Când creați sau editați FAVEs-urile dumneavoastră, colectăm și
              stocăm datele pe care le furnizați, inclusiv:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Titlul, descrierea, prețul și imaginea articolului</li>
              <li>
                Detaliile produsului extras din linkurile pe care le adăugați
              </li>
              <li>Orice fotografii sau text încărcat manual</li>
            </ul>
            <p className="text-textLighter mb-4">
              Aceste date sunt stocate în siguranță în baza noastră de date
              Supabase.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              c. Informații despre utilizare
            </h3>
            <p className="text-textLighter mb-4">
              Putem colecta date limitate despre utilizare, cum ar fi:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Când adăugați, editați sau partajați articole din FAVEs</li>
              <li>
                Interacțiuni sociale (cereri de prietenie, liste partajate,
                etc.)
              </li>
            </ul>
            <p className="text-textLighter mb-4">
              Aceste date ne ajută să îmbunătățim performanța aplicației și să
              prevenim abuzurile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              2. Cum folosim informațiile dumneavoastră
            </h2>
            <p className="text-textLighter mb-4">
              Folosim informațiile dumneavoastră pentru a:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Oferi și menține aplicația FaveIT și funcțiile sale sociale
              </li>
              <li>Salva, sincroniza și afișa listele dumneavoastră de FAVEs</li>
              <li>
                Vă permite să vă conectați cu prietenii și să partajați articole
              </li>
              <li>
                Gestiona în siguranță contul și autentificarea dumneavoastră
              </li>
              <li>
                Comunica actualizări, răspunde la întrebări și oferă suport
              </li>
              <li>
                Îmbunătăți funcționalitatea aplicației și planifica funcții
                viitoare
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              3. Stocarea și securitatea datelor
            </h2>
            <p className="text-textLighter mb-4">
              Datele dumneavoastră personale și listele de FAVEs sunt stocate în
              siguranță folosind{" "}
              <a
                href="https://supabase.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase
              </a>
              .
            </p>
            <p className="text-textLighter mb-4">
              Datele sunt criptate în tranzit și în repaus. Implementăm măsuri
              rezonabile administrative, tehnice și fizice pentru a vă proteja
              datele, dar niciun sistem nu este 100% sigur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              4. Partajarea și vizibilitatea
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                FAVEs-urile și profilul dumneavoastră sunt vizibile doar altor
                utilizatori înregistrați FaveIT din aplicație.
              </li>
              <li>
                Vă puteți căuta și conecta cu alți utilizatori prin handle-urile
                lor din aplicație.
              </li>
              <li>
                Nu facem FAVEs-urile disponibile public în afara aplicației.
              </li>
              <li>Nu vindem sau închiriem date personale către terți.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              5. Servicii terțe
            </h2>
            <p className="text-textLighter mb-4">
              În prezent, FaveIT nu folosește instrumente de analiză sau
              urmărire terțe.
            </p>
            <p className="text-textLighter mb-4">
              Cu toate acestea, putem integra astfel de servicii în viitor (de
              ex. analiză, raportare de erori sau instrumente de monitorizare a
              performanței precum Sentry sau PostHog).
            </p>
            <p className="text-textLighter mb-4">
              Dacă se întâmplă acest lucru, Politica de Confidențialitate va fi
              actualizată pentru a enumera aceste servicii și a explica
              utilizarea datelor de către acestea.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              6. Păstrarea și ștergerea datelor
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Păstrăm datele utilizatorului cât timp contul este activ.</li>
              <li>
                Vă puteți șterge contul și toate datele asociate direct din
                aplicație.
              </li>
              <li>
                Alternativ, ne puteți contacta la email-ul de mai jos pentru a
                solicita ștergerea.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              7. Baza legală pentru procesare (GDPR)
            </h2>
            <p className="text-textLighter mb-4">
              Procesăm datele dumneavoastră personale pe următoarele baze
              legale:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                <strong>Execuția unui contract:</strong> pentru a oferi
                aplicația și funcțiile sale de bază
              </li>
              <li>
                <strong>Consimțământul:</strong> pentru datele opționale de
                profil sau comunicare
              </li>
              <li>
                <strong>Interesele legitime:</strong> pentru a menține
                securitatea și a preveni abuzurile
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              8. Drepturile dumneavoastră (GDPR UE și UK)
            </h2>
            <p className="text-textLighter mb-4">
              Conform GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Accesa, corecta sau șterge datele dumneavoastră personale</li>
              <li>Retrage consimțământul în orice moment</li>
              <li>Solicita portabilitatea datelor</li>
              <li>Restricționa sau obiecta la procesare</li>
            </ul>
            <p className="text-textLighter mb-4">
              Pentru a exercita aceste drepturi, ne contactați la email-ul de
              mai jos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              9. Confidențialitatea copiilor
            </h2>
            <p className="text-textLighter mb-4">
              FaveIT nu este destinat copiilor sub vârsta de 16 ani.
            </p>
            <p className="text-textLighter mb-4">
              Nu culegem date în mod conștient de la copii. Dacă credeți că un
              copil a furnizat date personale, vă rugăm să ne contactați imediat
              și să solicitați ștergerea datelor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              10. Transferuri internaționale de date
            </h2>
            <p className="text-textLighter mb-4">
              Serviciile noastre sunt operate din Uniunea Europeană (România).
            </p>
            <p className="text-textLighter mb-4">
              Dacă accesați aplicația din afara UE/UK, datele dumneavoastră pot
              fi transferate și procesate în România în conformitate cu GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              11. Modificări ale acestei politici
            </h2>
            <p className="text-textLighter mb-4">
              Putem actualiza această Politică de Confidențialitate periodic.
            </p>
            <p className="text-textLighter mb-4">
              Toate modificările vor fi postate la{" "}
              <a
                href="https://www.faveitapp.com/privacy/ro"
                className="text-primary hover:underline"
              >
                https://www.faveitapp.com/privacy/ro
              </a>{" "}
              cu data actualizată "Ultima actualizare".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              12. Ne contactați
            </h2>
            <p className="text-textLighter mb-4">
              Dacă aveți întrebări sau solicitări legate de confidențialitate,
              vă rugăm să ne contactați la:
            </p>
            <div className="bg-primaryLight/20 p-6 rounded-lg">
              <p className="text-textLighter mb-2">
                <a
                  href="mailto:privacy@andromeda-technologies.com"
                  className="text-primary hover:underline"
                >
                  privacy@andromeda-technologies.com
                </a>
              </p>
              <p className="text-textLighter mb-2">
                <a
                  href="https://www.faveitapp.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.faveitapp.com
                </a>
              </p>
              <p className="text-textLighter">
                Andromeda Technologies SRL, România
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
