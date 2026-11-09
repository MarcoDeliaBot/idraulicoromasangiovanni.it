'use client';

/**
 * Modulo Contatti Rapido per Preventivi o Interventi Programmati — idraulicoromasangiovanni.it
 * Autore: Marco D'Elia
 */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/data/siteConfig';

interface ContactFormProps {
  defaultLocation?: string;
  defaultService?: string;
}

export default function ContactForm({
  defaultLocation = '',
  defaultService = '',
}: ContactFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: defaultLocation,
    service: defaultService,
    details: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || submitting) return;
    setSubmitting(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          telefono: formData.phone,
          indirizzo: formData.address,
          servizio: formData.service,
          dettagli: formData.details,
          _subject: `Nuova richiesta da ${SITE_CONFIG.domain} - ${formData.name}`,
          _captcha: 'false',
        }),
      });
    } catch {
      // Fallback: prosegue comunque alla pagina di ringraziamento
    } finally {
      router.push('/grazie/');
    }
  };

  return (
    <form
      action={`https://formsubmit.co/${SITE_CONFIG.email}`}
      method="POST"
      onSubmit={handleSubmit}
      className="card-light p-6 sm:p-8 space-y-4"
      aria-label="Modulo richiesta preventivo o intervento programmato"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${SITE_CONFIG.url}/grazie/`} />
      <input
        type="hidden"
        name="_subject"
        value={`Nuova richiesta preventivo da ${SITE_CONFIG.domain}`}
      />
      <div className="border-b border-slate-200 pb-3">
        <div className="text-lg font-extrabold text-slate-900">
          Richiedi Preventivo o Intervento Programmato
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Per urgenze con perdita o allagamento in corso chiama direttamente lo{' '}
          <a href={SITE_CONFIG.phoneHref} className="text-sky-700 font-bold underline">
            {SITE_CONFIG.phoneDisplay}
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold text-slate-700 mb-1">
            Nome o Condominio / Attività *
          </label>
          <input
            id="cf-name"
            name="nome"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Inserisci nominativo o studio"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-bold text-slate-700 mb-1">
            Recapito Telefonico *
          </label>
          <input
            id="cf-phone"
            name="telefono"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Es. 333 1234567 o 06 ..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-address" className="block text-xs font-bold text-slate-700 mb-1">
            Via o Piazza a San Giovanni *
          </label>
          <input
            id="cf-address"
            name="indirizzo"
            type="text"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Es. Piazza dei Re di Roma / Via Taranto"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="block text-xs font-bold text-slate-700 mb-1">
            Servizio Richiesto
          </label>
          <input
            id="cf-service"
            name="servizio"
            type="text"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            placeholder="Es. Ricerca perdita / Cassetta Pucci / Caldaia"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-details" className="block text-xs font-bold text-slate-700 mb-1">
          Dettagli Tecnici del Guasto o Richiesta
        </label>
        <textarea
          id="cf-details"
          name="dettagli"
          rows={3}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Indica il piano dell'immobile, il tipo di anomalia riscontrata e la fascia oraria preferita..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="cf-consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <label htmlFor="cf-consent" className="text-xs text-slate-600 leading-relaxed">
          Dichiaro di aver letto la{' '}
          <a href="/privacy-policy/" className="text-sky-700 underline font-semibold">
            Privacy Policy
          </a>{' '}
          e autorizzo il trattamento dei dati per la gestione della richiesta tecnica.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-sky-primary w-full py-3.5 px-6 rounded-xl text-sm font-extrabold disabled:opacity-60 transition-opacity"
      >
        {submitting ? 'Invio in corso...' : 'Invia Richiesta al Presidio Tecnico'}
      </button>
    </form>
  );
}

