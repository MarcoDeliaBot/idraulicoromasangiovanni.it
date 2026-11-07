/**
 * Home Page Principale — idraulicoromasangiovanni.it
 * Regola Aurea 1:1: <title>Idraulico San Giovanni</title> === <h1>Idraulico San Giovanni</h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaPhone from '@/components/CtaPhone';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';
import { SERVICES_DATA } from '@/data/servicesData';
import { ZONES_DATA } from '@/data/zonesData';

export const metadata: Metadata = {
  title: 'Idraulico San Giovanni',
  description:
    'Idraulico San Giovanni a Roma (Quartiere Appio-Latino e Municipio VII): pronto intervento H24 in 20-30 minuti per perdite acqua, scarichi, Pucci/Geberit, caldaie e autoclavi. Chiama 06 8590 2384.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
};

const HOME_FAQS = [
  {
    question: 'Qual è il tempo reale di arrivo del tecnico idraulico a Roma San Giovanni?',
    answer:
      'Grazie al presidio mobile posizionato stabilmente lungo la direttrice Piazza dei Re di Roma – Via Appia Nuova – Porta San Giovanni, garantiamo l’arrivo presso qualsiasi civico del quartiere San Giovanni e Appio-Latino entro 20-30 minuti dalla chiamata al numero 06 8590 2384, 24 ore su 24.',
  },
  {
    question: 'Perché tra Porta San Giovanni e Piazza Zama la pressione dell’acqua è così diversa?',
    answer:
      'Il quartiere San Giovanni presenta un dislivello orografico marcato: si scende dai 48 metri s.l.m. del colle tufaceo di Porta San Giovanni e Via Merulana fino ai 25-28 metri s.l.m. della conca dell’antico alveo dell’Acqua Mariana (Via Sannio, Piazza Epiro, Piazza Zama, Via Latina). Nelle quote basse la pressione statica Acea ATO2 supera i 5,0 - 5,5 bar richiedendo riduttori di pressione a sede compensata, mentre nei piani alti (6°-8° piano) degli edifici umbertini occorrono gruppi autoclave a inverter silenziosi.',
  },
  {
    question: 'Come riparate le perdite d’acqua e le cassette Pucci/Geberit senza rompere le mattonelle storiche?',
    answer:
      'Per le perdite occulte nei solai in ferro e voltine utilizziamo termocamere radiometriche FLIR E8-XT, geofoni digitali Sewerin e gas tracciante Formiergas (95% Azoto, 5% Idrogeno), individuando il guasto su una singola piastrella. Per le cassette incassate Pucci (anche quelle storiche a pulsante tondo), Geberit Twinline/Sigma e vecchie batterie Catis operiamo esclusivamente dall’apertura della placca frontale.',
  },
  {
    question: 'Perché evitate il Canal-Jet ad alta pressione nelle colonne di scarico dei palazzi d’epoca di San Giovanni?',
    answer:
      'Negli stabili umbertini e degli anni ’20-’40 di Via Merulana, Porta San Giovanni, Piazza Tuscolo e Via Taranto, le braghe sono in piombo saldato a stagno e le calate verticali in ghisa con bicchieri piombati e catramati. Un idrogetto superiore a 120 bar scardinerebbe le giunzioni d’epoca causando infiltrazioni nei solai: impieghiamo perciò stasatrici elettromeccaniche Rothenberger a spirali flessibili ad avanzamento controllato.',
  },
  {
    question: 'Rilasciate Dichiarazione di Conformità D.M. 37/2008 e perizia per l’assicurazione condominiale?',
    answer:
      'Sì. Ogni intervento strutturale, rifacimento parziale o ricerca guasto viene corredato da fattura elettronica, relazione tecnica con rilievi strumentali per il rimborso della polizza Globale Fabbricati e Dichiarazione di Conformità ai sensi del D.M. 37/2008.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <JsonLd
        pageTitle="Idraulico San Giovanni"
        pageDescription="Pronto intervento idraulico e termoidraulico H24 a Roma San Giovanni e Quartiere Appio-Latino (Municipio VII e Centro Storico). Telefono 06 8590 2384."
        canonicalPath="/"
        faqs={HOME_FAQS}
      />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
              <span>Presidio Tecnico H24 · Quartiere Appio-Latino &amp; Porta San Giovanni</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Idraulico San Giovanni
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Il pronto intervento idraulico e termoidraulico specializzato per gli stabili storici umbertini, i condomini intensivi anni ’30-’50 e le attività commerciali di <strong>Roma San Giovanni</strong> (Municipio VII e raccordo Municipio I Centro Storico). Interveniamo in <strong>20-30 minuti</strong> con diagnostica termografica non distruttiva, stasatrici elettromeccaniche controllate e ricambistica originale Pucci, Geberit, Catis e Caleffi.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <CtaPhone label="Chiama Subito" size="lg" />
              <Link
                href="/preventivo-gratuito/"
                className="px-6 py-4 rounded-2xl border-2 border-slate-300 hover:border-sky-600 text-slate-900 hover:text-sky-700 font-bold text-sm sm:text-base text-center transition-colors bg-white"
              >
                Richiedi Preventivo Rapido
              </Link>
            </div>

            {/* 4 Indicatori Tecnici */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Arrivo Reale</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">20–30 Minuti</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Pressione Rete</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">3,0 – 5,6 bar</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Durezza Acqua</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">33°F – 36°F</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Abilitazione</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">D.M. 37/2008</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* GLI 8 SERVIZI PILASTRO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="servizi">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            8 Specializzazioni Tecniche Verticali
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Servizi di Termoidraulica e Pronto Intervento a San Giovanni
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ogni intervento è calibrato sulle reali caratteristiche geologiche, idrauliche ed edilizie del quadrante Appio-Latino / San Giovanni: dalla ricerca perdite con gas tracciante alla manutenzione conservativa delle cassette incassate d’epoca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div key={service.slug} className="card-light p-6 flex flex-col justify-between hover:border-sky-400 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200">
                    {service.priceFrom}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Arrivo: {service.responseTime}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  <Link href={`/servizi/${service.slug}/`} className="hover:text-sky-700 transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.heroSummary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/servizi/${service.slug}/`}
                  className="text-xs font-extrabold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                >
                  <span>Approfondimento Tecnico</span>
                  <span>→</span>
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
                >
                  Chiama
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INGEGNERIA IDRAULICA, GEOLOGIA ED EDILIZIA SPECIFICA DI ROMA SAN GIOVANNI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
              Dossier Ingegneristico Territoriale
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Geologia, Rete Idrica Acea ATO2 e Stratificazione Edilizia di San Giovanni
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operare come idraulico a San Giovanni richiede la padronanza tecnica di quattro fattori strutturali che distinguono radicalmente il Municipio VII dal resto di Roma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                1. Orografia e Falda dell’Acqua Mariana (Marrana)
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Dal Colle Tufaceo del Laterano (48 m) alla Valle della Ferratella (25 m)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                San Giovanni presenta una morfologia complessa che degrada dalle alture in tufo litoide del Celio, di Porta San Giovanni e di Viale Carlo Felice (45–48 m s.l.m.) verso la depressione idrogeologica dell’antico alveo dell’<strong>Acqua Mariana (Marrana di San Giovanni)</strong> e della Valle della Ferratella, lungo l’asse Via Sannio, Via Magna Grecia, Piazza Tuscolo, Piazza Epiro e Piazza Zama / Via Latina (25–30 m s.l.m.). Nei piani interrati e nelle autorimesse di Via Sannio e Via Appia Nuova bassa la falda freatica superficiale e la messa in carico dei collettori fognari richiedono l’impiego di elettropompe sommerse vortex Lowara DOMO, Flygt e valvole di non ritorno a clapet in ghisa flangiata o acciaio inox.
              </p>
            </div>

            {/* Box 2 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                2. Rete Idrica Acea ATO2 e Dinamica delle Pressioni
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Sovrapressioni a 5,5 bar a Valle vs Cali di Portata agli Attici Umbertini
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                La rete idrica locale, alimentata dall’interconnessione tra l’Acquedotto del Peschiera-Capore e le diramazioni storiche dell’Acqua Marcia e Appio-Alessandrino, mostra un comportamento bipolare. Nelle quote depresse di <strong>Piazza Zama, Via Imera, Via Britannia e Via Acaia</strong> la pressione statica supera regolarmente i <strong>4,8 – 5,5 bar</strong> (con picchi notturni di 6 bar), innescando violenti colpi d’ariete e perforando membrane e flessibili: qui installiamo riduttori di pressione a sede compensata Caleffi con manometro a glicerina. All’opposto, nei piani alti (6°–8° piano) di <strong>Porta San Giovanni e Piazza dei Re di Roma</strong> installiamo gruppi autoclave silenziosi a inverter DAB e.sybox.
              </p>
            </div>

            {/* Box 3 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                3. Stratificazione Edilizia Umbertina e Anni ’30–’50
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Solai a Voltine, Braghe in Piombo, Colonne Mannesmann e Cassette Pucci
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                L’edilizia umbertina di <strong>Via Merulana, Viale Carlo Felice e Porta Maggiore</strong> presenta solai in ferro a doppio T con voltine in laterizio e scarichi storici in piombo o ghisa con giunti piombati: su queste condotte è vietato il Canal-Jet ad alta pressione (&gt;120 bar) ed è tassativo l’uso di stasatrici elettromeccaniche Rothenberger a spirale flessibile. Nei condomini intensivi anni ’30–’50 di <strong>Via Taranto, Via La Spezia e Villa Fiorelli</strong> risaniamo le colonne montanti in ferro zincato Mannesmann tubercolizzate innestando tubazioni multistrato PE-Xb/Al/PE-Xb a pressare, e ripariamo cassette incassate storiche <strong>Pucci a pulsante tondo</strong>, Geberit Twinline e Catis agendo solo dalla placca frontale.
              </p>
            </div>

            {/* Box 4 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                4. Chimica dell’Acqua e Durezza Calcarea (33°F – 36°F)
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Disincrostazione Chimica Scambiatori e Protezione UNI 8065
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                L’acqua distribuita nel quadrante San Giovanni ha una durezza carbonatica media di <strong>33°F – 36°F (gradi francesi)</strong>. Sopra i 55°C il bicarbonato di calcio precipita rapidamente in carbonato di calcio insolubile, ostruendo gli scambiatori secondari a piastre in acciaio inox delle caldaie a condensazione (Vaillant, Baxi, Ariston, Beretta, Riello, Immergas) e incrostando le resistenze dei boiler elettrici. Eseguiamo lavaggi chimici a ciclo chiuso con pompe ad inversione di flusso Promax e acido inibito tamponato, installando dosatori proporzionali di polifosfati e filtri defangatori magnetici ciclonici conformi alla norma <strong>UNI 8065:2019</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LE 16 MICRO-ZONE TERRITORIALI E ASSI VIARI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="zone">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            Copertura Capillare Toponomastica
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Le 16 Micro-Zone e Assi Viari Presidiati a San Giovanni
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Seleziona il tuo quadrante di residenza o la via della tua attività commerciale per consultare i parametri idraulici di zona (quota s.l.m., pressione statica Acea, tipologia d’impianto prevalente e tempi di arrivo).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ZONES_DATA.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}/`}
              className="card-light p-5 hover:border-sky-500 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-sky-700">
                  <span>CAP {zone.cap}</span>
                  <span>Arrivo: {zone.responseTime}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {zone.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Quota: {zone.altitude} · Pressione: {zone.pressureStatic.split('(')[0].trim()}
                </p>
                <div className="text-[11px] text-slate-600 pt-1">
                  <strong>Vie:</strong> {zone.mainStreets.slice(0, 3).join(', ')}
                </div>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 text-xs font-extrabold text-sky-700 group-hover:text-sky-900 flex items-center justify-between">
                <span>Scheda Tecnica di Zona</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TABELLA PARAMETRI TECNICI E TARIFFARIO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
              Trasparenza Tecnica ed Economica
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Prospetto Prestazioni, Strumentazione e Normative Applicate
            </h2>
            <p className="text-sm text-slate-600">
              Ogni intervento viene quotato preventivamente prima dell’inizio dei lavori, con impiego esclusivo di ricambi certificati e rilascio di garanzia di 24 mesi.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
              <thead className="bg-slate-100 text-slate-900 font-extrabold">
                <tr>
                  <th className="px-4 py-3.5">Servizio Idraulico</th>
                  <th className="px-4 py-3.5">Strumentazione e Protocollo</th>
                  <th className="px-4 py-3.5">Riferimento Normativo</th>
                  <th className="px-4 py-3.5">Tempo Arrivo</th>
                  <th className="px-4 py-3.5">Tariffa Base</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-bold text-slate-900">Ricerca Perdite Acqua</td>
                  <td className="px-4 py-3">Termocamera FLIR E8-XT, Geofono Sewerin, Gas Tracciante H2/N2</td>
                  <td className="px-4 py-3">UNI EN 806-4 / UNI EN 13187</td>
                  <td className="px-4 py-3">25-30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 140</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3 font-bold text-slate-900">Disotturazione WC e Scarichi</td>
                  <td className="px-4 py-3">Stasatrice Rothenberger R600 a spirale flessibile + Videoispezione</td>
                  <td className="px-4 py-3">UNI EN 12056-2</td>
                  <td className="px-4 py-3">20-25 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 85</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-slate-900">Riparazione Cassette Pucci / Geberit</td>
                  <td className="px-4 py-3">Sostituzione campana, sfera, sede e galleggiante da placca frontale</td>
                  <td className="px-4 py-3">UNI EN 14055 / UNI EN 14124</td>
                  <td className="px-4 py-3">20-30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 80</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3 font-bold text-slate-900">Assistenza e Lavaggio Caldaie</td>
                  <td className="px-4 py-3">Pompa disincrostante Promax, analisi combustione, defangatore</td>
                  <td className="px-4 py-3">UNI 8065:2019 / UNI 7129</td>
                  <td className="px-4 py-3">25-30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 90</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-slate-900">Sostituzione Scaldabagni</td>
                  <td className="px-4 py-3">Boiler elettrici Classe A/B e gas Low NOx con giunti dielettrici</td>
                  <td className="px-4 py-3">UNI EN 60335 / UNI 7129</td>
                  <td className="px-4 py-3">30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 90</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3 font-bold text-slate-900">Riparazione Rubinetteria e Sanitari</td>
                  <td className="px-4 py-3">Rettifica passi rapidi, cartucce ceramiche, estrattori filetti spezzati</td>
                  <td className="px-4 py-3">UNI EN 817 / UNI EN 1111</td>
                  <td className="px-4 py-3">25-30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 75</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-slate-900">Pronto Intervento Allagamenti</td>
                  <td className="px-4 py-3">Pompe sommerse Lowara DOMO, congelatore tubi Rofrost -30°C</td>
                  <td className="px-4 py-3">UNI EN 13564 / D.M. 37/2008</td>
                  <td className="px-4 py-3">15-25 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 95</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3 font-bold text-slate-900">Riduttori Pressione e Autoclavi</td>
                  <td className="px-4 py-3">Riduttori Caleffi a sede compensata e inverter DAB e.sybox</td>
                  <td className="px-4 py-3">UNI EN 1567 / UNI 9182</td>
                  <td className="px-4 py-3">30 min</td>
                  <td className="px-4 py-3 font-extrabold text-sky-700">Da € 120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-2 mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            Risposte Tecniche Dirette
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Domande Frequenti su Idraulico San Giovanni Roma
          </h2>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((faq, idx) => (
            <div key={idx} className="card-light p-6 space-y-2">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Banner CTA Scuro ad Alto Contrasto */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-900/80 text-sky-300 border border-sky-700 text-xs font-extrabold uppercase tracking-wider">
            Centrale Operativa Roma San Giovanni H24
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Emergenza Idraulica in Corso a San Giovanni?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Parla direttamente con il tecnico abilitato di turno nel quadrante Appio-Latino / San Giovanni. Arrivo garantito in 20-30 minuti con officina mobile attrezzata.
          </p>
          <div className="pt-2">
            <CtaPhone label="Chiama Subito" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}

