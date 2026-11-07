/**
 * Pagina Chi Siamo Istituzionale — idraulicoromasangiovanni.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Chi Siamo Idraulico San Giovanni',
  description:
    'Presidio tecnico Termoidraulica San Giovanni Roma: tecnici abilitati D.M. 37/2008 specializzati negli impianti civili e condominiali del quartiere Appio-Latino. Tel: 06 8590 2384.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/chi-siamo/`,
  },
};

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Chi Siamo Idraulico San Giovanni"
        pageDescription="Struttura tecnica, strumentazione e abilitazioni normative di Idraulico San Giovanni Roma."
        canonicalPath="/chi-siamo/"
        breadcrumbs={[
          { name: 'Idraulico San Giovanni', url: '/' },
          { name: 'Chi Siamo Idraulico San Giovanni', url: '/chi-siamo/' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: 'Chi Siamo Idraulico San Giovanni' }]} />

        <div className="card-light p-8 sm:p-12 space-y-6">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
            Presidio Istituzionale D.M. 37/2008 · Roma Municipio VII
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Chi Siamo Idraulico San Giovanni
          </h1>
          <p className="text-base text-slate-700 leading-relaxed">
            <strong>Idraulico San Giovanni Roma</strong> (divisione operativa di <em>Termoidraulica San Giovanni</em>) è il presidio tecnico specializzato nella diagnostica strumentale, nella manutenzione conservativa e nel pronto intervento idraulico per gli stabili storici e condominiali del quartiere Appio-Latino e dell’area Lateranense.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 pt-2">
            Approccio Ingegneristico al Patrimonio Edilizio di San Giovanni
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A differenza dei servizi generici privi di radicamento territoriale, il nostro protocollo operativo nasce dallo studio diretto della stratificazione edilizia tra Porta San Giovanni, Piazza dei Re di Roma, Piazza Tuscolo e Piazza Zama. Operiamo quotidianamente su solai in ferro a doppio T e voltine dei palazzi umbertini di inizio ’900 e sulle colonne montanti in ferro zincato Mannesmann dei grandi fabbricati intensivi degli anni ’30, ’40 e ’50.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-extrabold text-slate-900">
                Diagnostica Zero-Demolizioni
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dotazione completa con termocamere radiometriche FLIR a microbolometro, geofoni digitali Sewerin e cercafughe a gas tracciante Formiergas (H2/N2) per localizzare perdite occulte sotto graniglie, cementine e parquet senza demolizioni esplorative.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-extrabold text-slate-900">
                Conformità Normativa e Perizie
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Abilitazione completa ai sensi del D.M. 37/2008 (Lettere C, D, E) e applicazione rigorosa delle norme UNI EN 806, UNI 7129, UNI 8065 e UNI EN 12056, con redazione di perizie tecniche valide per i sinistri assicurativi condominiali.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <CtaPhone label="Chiama il Presidio Tecnico" size="lg" />
          </div>
        </div>
      </div>
    </main>
  );
}

