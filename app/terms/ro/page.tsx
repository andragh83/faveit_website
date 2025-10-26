import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții - FaveIT",
  description:
    "Termeni și Condiții pentru FaveIT - Aflați despre regulile și ghidurile pentru utilizarea aplicației noastre sociale FAVEs.",
};

export default function TermsPageRO() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-baseText mb-8">
          Termeni și Condiții pentru FaveIT
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-textLighter mb-8">
            <strong>Ultima actualizare:</strong> 26 octombrie 2025
          </p>

          <p className="text-textLighter mb-8">
            <strong>Data efectivă:</strong> 26 octombrie 2025
          </p>

          <p className="text-textLighter mb-8">
            Bine ați venit la FaveIT, o aplicație socială de liste de dorințe
            operată de Andromeda Technologies SRL ("noi", "al nostru", sau
            "noi").
          </p>

          <p className="text-textLighter mb-8">
            Acești Termeni și Condiții ("Termenii") guvernează utilizarea
            aplicației mobile FaveIT ("Aplicația") și serviciilor conexe.
          </p>

          <p className="text-textLighter mb-8">
            Prin crearea unui cont sau utilizarea FaveIT, sunteți de acord cu
            acești Termeni.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              1. Eligibilitate
            </h2>
            <p className="text-textLighter mb-4">
              Pentru a utiliza FaveIT, trebuie să:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Aveți cel puțin 16 ani, sau vârsta consimțământului digital din
                țara dumneavoastră.
              </li>
              <li>
                Aveți capacitatea legală de a fi de acord cu acești Termeni.
              </li>
            </ul>
            <p className="text-textLighter mb-4">
              Dacă aveți sub 16 ani, nu puteți utiliza sau vă puteți înregistra
              pentru FaveIT.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              2. Contul dumneavoastră
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Trebuie să furnizați informații exacte și actualizate când
                creați un cont.
              </li>
              <li>
                Sunteți responsabil pentru păstrarea în siguranță a
                credențialelor de autentificare.
              </li>
              <li>
                Ne rezervăm dreptul de a suspenda sau șterge conturile care
                încalcă acești Termeni sau abuzează platforma.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              3. Conținutul utilizatorului
            </h2>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              a. Proprietatea
            </h3>
            <p className="text-textLighter mb-4">
              Păstrați proprietatea completă asupra conținutului (articole
              FAVEs, fotografii, descrieri, etc.) pe care îl încărcați pe
              FaveIT.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              b. Licența către noi
            </h3>
            <p className="text-textLighter mb-4">
              Prin postarea sau încărcarea conținutului, ne acordați o licență
              non-exclusivă, mondială, fără taxe pentru a stoca, afișa și
              partaja conținutul dumneavoastră în aplicație pentru a oferi
              serviciul.
            </p>
            <p className="text-textLighter mb-4">
              Nu vindem sau partajăm conținutul dumneavoastră cu terți în afara
              ecosistemului FaveIT.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              c. Responsabilitatea
            </h3>
            <p className="text-textLighter mb-4">
              Sunteți singurul responsabil pentru conținutul pe care îl
              partajați. Nu trebuie să încărcați:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Material cu drepturi de autor fără permisiune</li>
              <li>Conținut ilegal, abuziv sau ofensator</li>
              <li>Informații false sau frauduloase despre produse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              4. Funcții sociale și de partajare
            </h2>
            <p className="text-textLighter mb-4">FaveIT vă permite să:</p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Vă conectați cu prietenii căutând handle-urile lor din aplicație
              </li>
              <li>
                Partajați listele de FAVEs și vizualizați listele de FAVEs ale
                altora din aplicație
              </li>
            </ul>
            <p className="text-textLighter mb-4">
              Trebuie să respectați confidențialitatea altor utilizatori și să
              nu abuzați sau redistribuiți conținutul lor partajat în afara
              aplicației fără consimțământ.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              5. Date și confidențialitate
            </h2>
            <p className="text-textLighter mb-4">
              Utilizarea FaveIT de către dumneavoastră este guvernată și de{" "}
              <a href="/privacy/ro" className="text-primary hover:underline">
                Politica noastră de Confidențialitate
              </a>
              , care explică modul în care colectăm și folosim datele personale.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              6. Disponibilitatea aplicației și modificări
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Putem modifica, actualiza sau întrerupe părți din Aplicație în
                orice moment fără notificare.
              </li>
              <li>
                Nu suntem responsabili pentru orice pierdere rezultată din
                modificări sau întreruperi ale serviciului.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              7. Proprietatea intelectuală
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Toate mărcile, logo-urile și componentele software ale FaveIT
                sunt proprietatea Andromeda Technologies SRL.
              </li>
              <li>
                Nu puteți copia, distribui sau reverse-engineer nicio parte din
                Aplicație.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              8. Terminarea
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Vă puteți șterge contul în orice moment din Aplicație.</li>
              <li>
                Putem suspenda sau termina conturile care încalcă acești Termeni
                sau rănesc alți utilizatori sau serviciul.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              9. Limitarea răspunderii
            </h2>
            <p className="text-textLighter mb-4">
              FaveIT este oferit "așa cum este".
            </p>
            <p className="text-textLighter mb-4">
              În măsura permisă de lege, nu suntem responsabili pentru:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Pierderea de date, profituri sau bunăvoință</li>
              <li>Erori sau timp de nefuncționare</li>
              <li>
                Conținut generat de utilizatori sau acțiunile altor utilizatori
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              10. Modificări ale Termenilor
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Putem actualiza acești Termeni ocazional.</li>
              <li>
                Utilizarea continuă a Aplicației după actualizări înseamnă că
                acceptați Termenii revizuiți.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              11. Legea aplicabilă
            </h2>
            <p className="text-textLighter mb-4">
              Acești Termeni sunt guvernați de legile României, iar orice
              dispute vor fi rezolvate în instanțele românești.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              12. Contact
            </h2>
            <p className="text-textLighter mb-4">
              Pentru întrebări despre acești Termeni, ne contactați la:
            </p>
            <div className="bg-primaryLight/20 p-6 rounded-lg">
              <p className="text-textLighter mb-2">
                <a
                  href="mailto:office@andromeda-technologies.com"
                  className="text-primary hover:underline"
                >
                  office[at]andromeda-technologies.com
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
