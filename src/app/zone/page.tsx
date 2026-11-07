/**
 * Pagina Indice delle 16 Micro-Zone di San Giovanni — idraulicoromasangiovanni.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';
import { ZONES_DATA } from '@/data/zonesData';

export const metadata: Metadata = {
  title: 'Zone Idraulico San Giovanni',
  description:
    'Mappa e schede idrauliche delle 16 micro-zone e assi viari di Roma San Giovanni: Piazza dei Re di Roma, Via Appia Nuova, Piazza Tuscolo, Via Magna Grecia, Piazza Zama. Tel: 06 8590 2384.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/zone/`,
  },
};

export default function ZoneIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Zone Idraulico San Giovanni"
        pageDescription="Le 16 micro-zone territoriali e assi viari presidiati da Idraulico San Giovanni Roma."
        canonicalPath="/zone/"
        breadcrumbs={[
          { name: 'Idraulico San Giovanni', url: '/' },
          { name: 'Zone Idraulico San Giovanni', url: '/zone/' },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-10">
        <Breadcrumbs items={[{ label: 'Zone Idraulico San Giovanni' }]} />

        <div className="card-light p-8 sm:p-12 space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
            Presidio Capillare Municipio VII e Raccordo Municipio I
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Zone Idraulico San Giovanni
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Dal plateau tufaceo di Porta San Giovanni e Viale Carlo Felice (48 m s.l.m.) fino alla depressione dell’Acqua Mariana di Via Sannio e Piazza Zama (25 m s.l.m.), copriamo tutte le 16 micro-zone del quartiere con arrivo garantito in 15-25 minuti.
          </p>
          <div className="pt-2">
            <CtaPhone label="Chiama Subito" size="md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ZONES_DATA.map((z) => (
            <div key={z.slug} className="card-light p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                    CAP {z.cap} · Quota {z.altitude}
                  </span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Arrivo: {z.responseTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  <Link href={`/zone/${z.slug}/`} className="hover:text-sky-700 transition-colors">
                    {z.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{z.heroSummary}</p>
                <div className="text-xs text-slate-700 pt-1">
                  <strong>Pressione Rete Acea:</strong> {z.pressureStatic}
                </div>
                <div className="text-xs text-slate-600">
                  <strong>Arterie principali:</strong> {z.mainStreets.join(', ')}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/zone/${z.slug}/`}
                  className="btn-sky-primary px-5 py-2.5 rounded-xl text-xs font-extrabold"
                >
                  Apri Dossier di Zona →
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-xs font-extrabold text-amber-700 hover:underline"
                >
                  Tel: {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

