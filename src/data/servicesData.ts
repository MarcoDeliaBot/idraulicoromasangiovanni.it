/**
 * Catalogo degli 8 Servizi Pilastro — idraulicoromasangiovanni.it
 * Regola Aurea 1:1: title === h1
 * Autore: Marco D'Elia
 */

export interface ServiceParameterRow {
  parameter: string;
  value: string;
  normative: string;
}

export interface ServiceCaseStudy {
  title: string;
  street: string;
  buildingType: string;
  problem: string;
  solution: string;
  result: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  category: string;
  metaDescription: string;
  heroSummary: string;
  responseTime: string;
  priceFrom: string;
  instrumentation: string[];
  normativeRefs: string[];
  techTable: ServiceParameterRow[];
  caseStudies: ServiceCaseStudy[];
  faqs: ServiceFaqItem[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    slug: 'ricerca-perdite-acqua-san-giovanni',
    title: 'Ricerca Perdite Acqua San Giovanni',
    h1: 'Ricerca Perdite Acqua San Giovanni',
    shortName: 'Ricerca Perdite Acqua',
    category: 'Diagnostica Strumentale Non Distruttiva',
    metaDescription:
      'Ricerca perdite acqua occulte a Roma San Giovanni con termocamera FLIR, geofono Sewerin e gas tracciante Formiergas. Interventi senza demolizioni distruttive. Tel: 06 8590 2384.',
    heroSummary:
      'Localizzazione millimetrica e non invasiva di infiltrazioni idriche sottotraccia nei solai in ferro e voltine degli stabili umbertini di Porta San Giovanni e Via Merulana, e nei massetti dei condomini anni ’30-’50 di Piazza dei Re di Roma, Via Taranto e Villa Fiorelli.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 140',
    instrumentation: [
      'Termocamera radiometrica FLIR E8-XT a microbolometro non raffreddato (sensibilità termica NETD < 0,05°C)',
      'Geofono elettroacustico digitale Sewerin Aquaphon A200 con filtri passa-banda antirumore urbano',
      'Generatore e analizzatore di gas tracciante ecologico Formiergas (95% Azoto N2 + 5% Idrogeno H2)',
      'Igrometro capacitivo ad alta frequenza Tramex per mappatura umidità nei muri in tufo e mattoni pieni',
      'Videoendoscopio industriale articolato Full HD con sonda da 5,5 mm per cavedi e intercapedini',
    ],
    normativeRefs: [
      'UNI EN 806-4 (Installazione e collaudo impianti idrici sanitari interni)',
      'UNI 10824-1 (Sistemi di tubazioni multistrato per adduzione idrica)',
      'D.M. 37/2008 art. 7 (Dichiarazione di conformità per rifacimento parziale tratti idrici)',
      'Linee Guida ANIA per perizie tecniche strumentali su polizze Globale Fabbricati',
    ],
    techTable: [
      {
        parameter: 'Risoluzione Termica Sensore IR',
        value: '320 × 240 pixel (MSX) con sensibilità < 50 mK (0,05 °C)',
        normative: 'UNI EN 13187 / ISO 6781',
      },
      {
        parameter: 'Range Frequenze Geofono Acustico',
        value: 'da 30 Hz a 4.000 Hz con soppressione rumore tramviario e Metro A/C',
        normative: 'Standard Sewerin Water Leak Detection',
      },
      {
        parameter: 'Miscela Gas Tracciante in Pressione',
        value: '95% Azoto (N2) + 5% Idrogeno (H2) inerte, atossico e non infiammabile',
        normative: 'ISO 10156 / UNI EN 1779',
      },
      {
        parameter: 'Pressione di Collaudo Idrostatico',
        value: '1,5 volte la pressione d’esercizio (fino a 8,0 bar nei tratti a valle)',
        normative: 'UNI EN 806-4 par. 6.1',
      },
      {
        parameter: 'Profondità Massima Rilevazione Sottotraccia',
        value: 'Fino a 180 cm sotto massetti storici, graniglie e solai voltati',
        normative: 'Protocollo Diagnostico Non Distruttivo',
      },
    ],
    caseStudies: [
      {
        title: 'Perdita occulta su montante in ferro zincato sotto graniglia storica',
        street: 'Via Carlo Felice (adiacenze Basilica di San Giovanni)',
        buildingType: 'Palazzo umbertino del 1912 con solai a voltine in laterizio e pavimenti in marmette di graniglia',
        problem:
          'Macchia di umidità progressiva sul soffitto a cassettoni del terzo piano senza evidenza di gocciolamento superficiale nel bagno del quarto piano soprastante.',
        solution:
          'Scansione combinata con geofono Sewerin Aquaphon A200 e iniezione di gas tracciante H2/N2 nella linea acqua fredda. Individuata micro-fessurazione per corrosione galvanica su gomito in ferro Mannesmann da 1/2 pollice sotto una sola mattonella.',
        result:
          'Rimozione conservativa di una singola marmetta 20x20 cm, sostituzione del raccordo con giunto multistrato a pressare e rilascio di perizia termografica certificata per rimborso assicurativo condominiale.',
      },
      {
        title: 'Infiltrazione da terrazzo a livello su attico anni ’40',
        street: 'Via Magnagrecia (tratto Piazza Tuscolo)',
        buildingType: 'Condominio signorile in cemento armato e cortina del 1948',
        problem:
          'Distacco d’intonaco nell’appartamento del sesto piano causato da perdita mista tra collettore d’irrigazione terrazzo e pluviale incassato.',
        solution:
          'Indagine termografica differenziale con traccianti UV biodegradabili negli scarichi e prova manometrica separata sulla linea idrica esterna.',
        result:
          'Individuato raccordo in polietilene lesionato dal gelo vicino al pozzetto sifonato; riparazione mirata in 90 minuti senza smantellare l’impermeabilizzazione dell’intero terrazzo.',
      },
    ],
    faqs: [
      {
        question: 'Come riuscite a trovare una perdita d’acqua a San Giovanni senza rompere il pavimento?',
        answer:
          'Utilizziamo una tripla triangolazione strumentale: la termocamera FLIR rileva il gradiente termico delle tubazioni dell’acqua calda e del riscaldamento; il geofono Sewerin amplifica il fruscio meccanico dell’acqua che fuoriesce in pressione dalle tubazioni fredde; il gas tracciante Formiergas attraversa anche massetti spessi in pozzolana e graniglia indicando il punto esatto di rottura entro un raggio di 10 centimetri.',
      },
      {
        question: 'Le vibrazioni della Metro A e Metro C disturbano l’ascolto con il geofono?',
        answer:
          'Lunghe arterie come Via Appia Nuova, Piazza dei Re di Roma e Piazzale Appio presentano un forte rumore sismico di fondo dovuto ai convogli della Metropolitana Linea A e Linea C. Per azzerare le interferenze impieghiamo geofoni digitali con filtri DSP passa-alto (>450 Hz) abbinati sistematicamente alla prova con gas tracciante idrogeno/azoto, immune a qualsiasi vibrazione meccanica.',
      },
      {
        question: 'La vostra relazione tecnica è valida per l’assicurazione del condominio?',
        answer:
          'Sì, rilasciamo un dossier diagnostico completo di fotogrammi radiometrici IR, valori igrometrici, coordinate del punto di perdita, fattura elettronica dettagliata per ricerca guasto e Dichiarazione di Conformità D.M. 37/2008, pienamente conforme agli standard richiesti dai periti delle compagnie assicurative.',
      },
      {
        question: 'Quanto dura mediamente un intervento di ricerca perdita in appartamento?',
        answer:
          'Un’indagine strumentale completa su un appartamento standard di 80-130 mq a San Giovanni richiede tra i 60 e i 120 minuti, al termine dei quali possiamo eseguire immediatamente la riparazione circoscritta sulla singola piastrella.',
      },
    ],
  },
  {
    id: 2,
    slug: 'disotturazione-wc-scarichi-san-giovanni',
    title: 'Disotturazione WC Scarichi San Giovanni',
    h1: 'Disotturazione WC Scarichi San Giovanni',
    shortName: 'Disotturazione WC e Scarichi',
    category: 'Stasatura Elettromeccanica e Videoispezione',
    metaDescription:
      'Disotturazione WC, lavandini e colonne di scarico a Roma San Giovanni con stasatrici elettromeccaniche Rothenberger a spirale flessibile senza danneggiare tubi in piombo o ghisa. Tel: 06 8590 2384.',
    heroSummary:
      'Sblocco rapido e sicuro di WC intasati, braghe in piombo d’epoca, sifoni cucina e colonne fecali condominiali in ghisa o gres mediante sonde elettromeccaniche a coppia controllata, preservando i solai storici del quartiere San Giovanni.',
    responseTime: '20-25 minuti',
    priceFrom: 'Da € 85',
    instrumentation: [
      'Stasatrice elettromeccanica professionale Rothenberger R600 con spirali sezionali da 16 mm e 22 mm',
      'Stasatrice a tamburo compatta Ridgid K-45AF con anima interna per sifoni in piombo e curve strette',
      'Testine intercambiabili a bulbo, a lancia, a imbuto recuperatore e a lame dentate anti-calcare',
      'Pompa disostruente idropneumatica a pressione calibrata Ropump Super Plus per sanitari in ceramica',
      'Telecamera d’ispezione fognaria Ridgid SeeSnake con contametri digitale e trasmettitore 512 Hz',
    ],
    normativeRefs: [
      'UNI EN 12056-2 (Sistemi di scarico delle acque reflue all’interno degli edifici)',
      'UNI EN 752 (Sistemi di connessioni di scarico e collettori fognari esterni)',
      'Regolamento Idrico e Fognario Acea ATO2 Roma Capitale',
      'Tutela strutturale solai storici in ferro e voltine contro sovrapressioni idrodinamiche',
    ],
    techTable: [
      {
        parameter: 'Pressione Massima Ammessa su Braghe in Piombo',
        value: 'Esclusivamente azione meccanica rotativa (divieto assoluto di Canal-Jet > 120 bar)',
        normative: 'Protocollo Conservativo Edilizia Storica',
      },
      {
        parameter: 'Diametro Spirali Flessibili Impiegate',
        value: 'Ø 8 mm / 10 mm per lavabi e bidet; Ø 16 mm / 22 mm per WC e colonne da Ø 100-125 mm',
        normative: 'UNI EN 12056-2',
      },
      {
        parameter: 'Velocità di Rotazione Mandrino Rothenberger',
        value: '467 giri/min con frizione di sicurezza meccanica anti-torsione',
        normative: 'Direttiva Macchine 2006/42/CE',
      },
      {
        parameter: 'Lunghezza Operativa Sonda Elettromeccanica',
        value: 'Fino a 35 metri lineari attraverso braghe, ispezioni e calate verticali',
        normative: 'Standard Manutenzione Condominiale',
      },
      {
        parameter: 'Risoluzione Videoispezione Endoscopica',
        value: 'Sensore CMOS 1080p autolivellante con illuminazione a 12 LED ad alta intensità',
        normative: 'UNI EN 13508-2',
      },
    ],
    caseStudies: [
      {
        title: 'Disotturazione braga storica in piombo senza rottura del pavimento',
        street: 'Via Merulana (tratto Porta San Giovanni)',
        buildingType: 'Palazzo storico del 1905 con impianto di scarico originario e scatola sifonata in piombo a pavimento',
        problem:
          'Blocco totale dello scarico del vaso WC e rigurgito nella piletta a pavimento, causato da stratificazione calcarea (acqua a 35°F) combinata a salviette non biodegradabili.',
        solution:
          'Smontaggio conservativo del vaso sanitario, introduzione di spirale flessibile Rothenberger da 16 mm con testina a bulbo elastico senza lame taglienti per non incidere il piombo tenero, seguita da fresatura dolce delle incrostazioni.',
        result:
          'Ripristino integrale del deflusso verso la colonna montante in ghisa, verifica videoendoscopica dell’integrità della saldatura a stagno e rimontaggio del sanitario con nuova guarnizione eccentrica.',
      },
      {
        title: 'Sblocco colonna secondaria cucine ostruita da saponificazione grassi',
        street: 'Via Taranto (incrocio Via Monza)',
        buildingType: 'Condominio intensivo di 8 piani degli anni ’50',
        problem:
          'Allagamento ricorrente dei lavelli cucina al primo e secondo piano per occlusione del piede colonna orizzontale nei fondi cantina.',
        solution:
          'Apertura del tappo d’ispezione in ghisa nel corridoio cantine, disostruzione meccanica con spirale da 22 mm e testina a crociera per frantumare i blocchi di detersivo calcificato, lavaggio a bassa pressione controllata.',
        result:
          'Rimozione di oltre 6 metri di deposito saponificato e ripristino della pendenza idraulica originaria.',
      },
    ],
    faqs: [
      {
        question: 'Perché nei palazzi d’epoca di San Giovanni è pericoloso usare il Canal-Jet ad alta pressione?',
        answer:
          'Negli stabili umbertini e degli anni ’20-’40 di San Giovanni (Via Merulana, Piazza Tuscolo, Via Sannio, Porta Metronia) le calate sono in ghisa lamellare con giunti a bicchiere sigillati a piombo e stoppa catramata, mentre le braghe a pavimento sono in piombo saldato. Un getto idrodinamico a 150-200 bar squarcia le pareti assottigliate del piombo e fa saltare le giunzioni dei bicchieri, provocando infiltrazioni liquami nei solai sottostanti. Le nostre stasatrici elettromeccaniche Rothenberger lavorano invece a secco per rotazione controllata, pulendo la tubazione in totale sicurezza.',
      },
      {
        question: 'Cosa fare se la scatola sifonata in piombo al centro del bagno perde o trabocca?',
        answer:
          'La scatola sifonata raccoglie gli scarichi di lavabo, bidet e vasca/doccia prima di immetterli nella braga del WC. Se trabocca, interveniamo aspirando i residui, passando spirali flessibili da 8 mm su ogni singolo ramo e sostituendo il tappo in ottone con guarnizione ad espansione ermetica.',
      },
      {
        question: 'Intervenite anche di notte o nei festivi per un WC completamente bloccato?',
        answer:
          'Sì, il servizio di disotturazione WC e scarichi è operativo 24 ore su 24, 7 giorni su 7, chiamando lo 06 8590 2384. Arriviamo in 20-25 minuti in tutto il quadrante San Giovanni / Appio-Latino.',
      },
      {
        question: 'L’uso di acido muriatico o soda caustica può risolvere un intasamento grave?',
        answer:
          'Lo sconsigliamo categoricamente: la soda caustica in scaglie spesso solidifica sul fondo del sifone creando un tappo pietrificato, mentre gli acidi aggressivi corrodono le braghe in piombo d’epoca e bruciano le guarnizioni elastomeriche degli innesti in PVC/polipropilene.',
      },
    ],
  },
  {
    id: 3,
    slug: 'riparazione-cassette-pucci-geberit-san-giovanni',
    title: 'Riparazione Cassette Pucci Geberit San Giovanni',
    h1: 'Riparazione Cassette Pucci Geberit San Giovanni',
    shortName: 'Riparazione Cassette Pucci e Geberit',
    category: 'Manutenzione Conservativa Cassette Incasso e Catis',
    metaDescription:
      'Riparazione cassette incasso Pucci, Geberit e batterie Catis a Roma San Giovanni senza rompere le piastrelle. Ricambi originali a bordo furgone. Tel: 06 8590 2384.',
    heroSummary:
      'Revisione interna e sostituzione di galleggianti, campane, sfere e guarnizioni su cassette a incasso storiche Pucci a pulsante tondo, Pucci Sara/Eco, Geberit Twinline/Sigma e cassette alte Catis, operando esclusivamente dalla finestra d’ispezione senza mai demolire maioliche e marmi d’epoca.',
    responseTime: '20-30 minuti',
    priceFrom: 'Da € 80',
    instrumentation: [
      'Kit ricambi originali Pucci (gruppo sfera, sede estraibile con O-ring, galleggiante silenzioso regolabile)',
      'Kit ricambi originali Geberit (campana Twinline 240.501.00.1, Unica, Sigma 8/12 cm, valvola Impuls380/Tipo 380)',
      'Componentistica originale in ottone cromato per batterie Catis e tubi pneumatici in rame ricotto',
      'Estrattori telescopici angolari per rimozione sedi valvola incrostate da calcare a 35°F',
      'Decalcificante organico tamponato non aggressivo per pulizia vasca interna in polietilene o rame',
    ],
    normativeRefs: [
      'UNI EN 14055 (Cassette di scarico per vasi e orinatoi con troppo-pieno integrato)',
      'UNI EN 14124 (Valvole di riempimento a galleggiante con requisito acustico Gruppo I < 20 dB)',
      'Regolamento Condominiale sul contenimento dei rumori idraulici notturni (D.P.C.M. 5/12/1997)',
      'Criteri di conservazione rivestimenti storici non più in produzione',
    ],
    techTable: [
      {
        parameter: 'Accessibilità di Intervento Tecnico',
        value: '100% dalla finestra frontale della placca (0% demolizione piastrelle)',
        normative: 'Protocollo Conservativo Zero-Macerie',
      },
      {
        parameter: 'Rumorosità Valvola Galleggiante Installata',
        value: 'Classe Acustica I (≤ 17 dB(A) a 3 bar di pressione dinamica)',
        normative: 'UNI EN ISO 3822 / DIN 4109',
      },
      {
        parameter: 'Resistenza Pressione Massima Galleggiante',
        value: 'Collaudato fino a 10 bar (ideale per i 5,5 bar notturni di Piazza Zama e Via Latina)',
        normative: 'UNI EN 14124',
      },
      {
        parameter: 'Materiale Guarnizioni di Fondo e Sfera',
        value: 'Silicone vergine ed EPDM perossidico resistente a durezza 36°F e cloro',
        normative: 'UNI EN 681-1',
      },
      {
        parameter: 'Modelli Storici Supportati a Magazzino Mobile',
        value: 'Pucci Rame anni ’70-’80, Pucci Sara/Eco, Geberit 110.700/110.857 Twinline, Sigma, Catis',
        normative: 'Ricambistica Originale Certificata',
      },
    ],
    caseStudies: [
      {
        title: 'Revisione cassetta Pucci storica in rame anni ’70 con placca tonda in ottone',
        street: 'Piazza Tuscolo',
        buildingType: 'Appartamento signorile con bagno rivestito in maioliche dipinte a mano Vietri degli anni ’70',
        problem:
          'Trafelamento continuo d’acqua nella tazza WC (oltre 400 litri al giorno sprecati) dovuto alla deformazione della sfera e al deposito calcareo sulla sede di tenuta inferiore.',
        solution:
          'Smontaggio della placca circolare con vite centrale, decalcificazione chimica della sede in ottone sul fondo della cassa in rame, installazione di nuovo gruppo sfera + asta + galleggiante originale Pucci.',
        result:
          'Tenuta idraulica perfetta al 100% senza scalfire alcuna piastrella storica e riduzione immediata del rumore di ricarica.',
      },
      {
        title: 'Ripristino Geberit Twinline fine anni ’90 bloccata dal calcare',
        street: 'Via La Spezia',
        buildingType: 'Appartamento ristrutturato in stabile anni ’40',
        problem:
          'Il doppio pulsante frontale rimaneva incastrato a fine corsa provocando lo scarico ininterrotto dell’acqua nella colonna condominiale.',
        solution:
          'Estrazione della campana bistabile Geberit Twinline attraverso la dima frontale, sostituzione del bacino di base con guarnizione siliconica originale e installazione di nuovo rubinetto a galleggiante Geberit Tipo 380 in ottone.',
        result:
          'Ripristino del doppio flusso ecologico (3/6 litri) in 40 minuti di lavoro con garanzia di 24 mesi.',
      },
    ],
    faqs: [
      {
        question: 'Si può riparare una vecchia cassetta Pucci o Geberit di 30 anni fa senza rompere il muro?',
        answer:
          'Assolutamente sì. Tutte le cassette da incasso Pucci (incluse quelle storiche in rame con placca tonda e vite centrale) e Geberit (serie Unica, Twinline dal 1988 in poi e Sigma) sono progettate per essere ispezionate e rigenerate al 100% passando dalla finestra della placca di comando. Non rompiamo mai le mattonelle.',
      },
      {
        question: 'Perché la cassetta del WC ricomincia a perdere acqua dopo pochi mesi a San Giovanni?',
        answer:
          'Le cause a San Giovanni sono due: la durezza dell’acqua Acea (33-36°F) che incrosta la guarnizione di fondo e la pressione statica notturna che nelle zone basse (Piazza Zama, Via Sannio, Via Magna Grecia) supera i 5 bar, vincendo la spinta del galleggiante usurato. Per questo installiamo solo guarnizioni in silicone puro e galleggianti ad alta tenuta.',
      },
      {
        question: 'Riparate anche le vecchie cassette esterne alte Catis con pulsante pneumatico a muro?',
        answer:
          'Sì, le batterie Catis in ghisa o ceramica sono ancora diffusissime nei palazzi storici di Via Merulana, Porta San Giovanni e Piazza dei Re di Roma. Sostituiamo la batteria interna in ottone, il galleggiante con sfera in rame o polietilene e il pulsante pneumatico a parete che spinge l’aria nel tubicino di rame.',
      },
      {
        question: 'Quanto tempo richiede la sostituzione dei meccanismi interni della cassetta?',
        answer:
          'Disponendo di tutti i ricambi originali Pucci, Geberit, Grohe, Valsir, Oliveira e Catis direttamente sul furgone officina, l’intervento completo dura mediamente dai 30 ai 45 minuti.',
      },
    ],
  },
  {
    id: 4,
    slug: 'assistenza-caldaie-san-giovanni',
    title: 'Assistenza Caldaie San Giovanni',
    h1: 'Assistenza Caldaie San Giovanni',
    shortName: 'Assistenza e Riparazione Caldaie',
    category: 'Termoidraulica, Lavaggio Chimico e Blocco Caldaia',
    metaDescription:
      'Assistenza caldaie multimarca a Roma San Giovanni: sblocco urgente, lavaggio chimico anticalcare 35°F, sostituzione scambiatori e valvole a 3 vie. Chiama 06 8590 2384.',
    heroSummary:
      'Pronto intervento tecnico, diagnosi elettronica, disincrostazione chimica degli scambiatori a piastre intasati dal calcare (33-36°F) e sostituzione caldaie murali a condensazione Vaillant, Baxi, Ariston, Beretta, Riello e Immergas nel quartiere San Giovanni.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 90',
    instrumentation: [
      'Pompa disincrostante ad inversione di flusso Promax 20 per lavaggio chimico scambiatori a ciclo chiuso',
      'Analizzatore di combustione digitale Testo 300 certificato UNI 10389-1 per verifica rendimento e CO',
      'Manometro differenziale digitale per taratura valvola gas elettronica e pressione dinamica metano',
      'Cercafughe elettronico per gas metano ad altissima sensibilità (ppm) conforme UNI 7129',
      'Filtri defangatori magnetici ciclonici Caleffi Dirtmag e dosatori proporzionali di polifosfati',
    ],
    normativeRefs: [
      'UNI 7129:2015 (Impianti a gas per uso domestico e similare alimentati da rete di distribuzione)',
      'UNI 8065:2019 (Trattamento dell’acqua negli impianti termici ad uso civile)',
      'D.P.R. 74/2013 e D.M. 37/2008 Lettere C ed E (Abilitazione impianti termici e gas)',
      'UNI 10845 (Verifica e risanamento dei sistemi di evacuazione fumi)',
    ],
    techTable: [
      {
        parameter: 'Durezza Media Acqua Rete San Giovanni',
        value: '33 °F – 36 °F (elevato rischio calcificazione scambiatori secondari sanitari)',
        normative: 'Obbligo trattamento UNI 8065:2019',
      },
      {
        parameter: 'Pressione Precarica Vaso d’Espansione Caldaia',
        value: '0,8 – 1,0 bar (con pressione circuito primario a freddo tarata a 1,2 – 1,5 bar)',
        normative: 'Specifiche Costruttori OEM',
      },
      {
        parameter: 'Tiraggio Minimo e Tenuta Condotto Fumi',
        value: 'Verifica depressione e tenuta scarico condensa acida (pH 3,5 – 4,5)',
        normative: 'UNI 7129-3 / UNI 11071',
      },
      {
        parameter: 'Temperatura Critica Precipitazione Calcare',
        value: '> 58 °C (consigliata taratura ACS a 48–50 °C con dosatore polifosfati)',
        normative: 'Chimica delle Acque Potabili',
      },
      {
        parameter: 'Efficienza di Scambio Post-Lavaggio Chimico',
        value: 'Ripristino del 98% della portata nominale ACS (11–14 litri/minuto)',
        normative: 'Protocollo Manutenzione Termica',
      },
    ],
    caseStudies: [
      {
        title: 'Sblocco caldaia a condensazione in errore sovratemperatura per scambiatore calcificato',
        street: 'Via Britannia (zona Piazza Zama)',
        buildingType: 'Appartamento al 4° piano in stabile anni ’50 con impianto autonomo',
        problem:
          'Acqua calda sanitaria tiepida e intermittente con blocco continuo della caldaia Vaillant EcoTEC per mancata circolazione nello scambiatore secondario a 16 piastre.',
        solution:
          'Smontaggio dello scambiatore a piastre in acciaio inox AISI 316, collegamento alla pompa disincrostante Promax con reagente acido inibito e neutralizzatore alcalino, sostituzione O-ring EPDM e installazione di dosatore polifosfati sottocaldaia.',
        result:
          'Portata acqua calda tornata a 13,5 l/min con temperatura stabile al grado e azzeramento dei blocchi.',
      },
      {
        title: 'Rottura valvola di sicurezza 3 bar per eccesso di pressione idrica notturna',
        street: 'Via Imera',
        buildingType: 'Condominio residenziale quota bassa Valle della Ferratella',
        problem:
          'Pressione del circuito termosifoni che saliva autonomamente oltre i 3 bar facendo gocciolare la valvola di sicurezza, a causa del rubinetto di carico trafilante sollecitato da 5,4 bar di rete Acea.',
        solution:
          'Sostituzione del rubinetto di riempimento e della valvola di sicurezza 3 bar, ritaratura del vaso d’espansione con compressore e installazione di riduttore di pressione tarato a 3,0 bar sull’ingresso generale dell’appartamento.',
        result:
          'Pressione impianto stabile a 1,3 bar sia a freddo che a caldo senza più perdite dal gruppo idraulico.',
      },
    ],
    faqs: [
      {
        question: 'Perché a San Giovanni l’acqua calda della caldaia esce a filo mentre l’acqua fredda ha una pressione fortissima?',
        answer:
          'Quando la pressione dell’acqua fredda ai rubinetti è normale ma girando la leva sull’acqua calda il flusso si riduce a un filo, il problema è l’occlusione calcarea dello scambiatore secondario della caldaia (o della serpentina). L’acqua di San Giovanni (33-36°F) deposita carbonato di calcio all’interno dei passaggi millimetrici dello scambiatore: risolviamo in giornata con il lavaggio chimico ad inversione di flusso o la sostituzione dello scambiatore.',
      },
      {
        question: 'Perché la caldaia va in blocco quando più appartamenti aprono l’acqua contemporaneamente?',
        answer:
          'Nei piani alti (6°-8° piano) dei palazzi umbertini di Porta San Giovanni, Piazza dei Re di Roma e Via Merulana privi di autoclave efficiente, nelle ore di punta mattutine la pressione dinamica scende sotto 1,0 bar, non riuscendo ad attivare il flussostato sanitario della caldaia. Inoltre, se la pressione del circuito termosifoni scende sotto 0,6 bar, il pressostato di minima blocca il bruciatore.',
      },
      {
        question: 'Ogni quanto va sostituito il filtro defangatore e ricaricato il dosatore di polifosfati?',
        answer:
          'Con la durezza calcarea del Municipio VII, la ricarica di polifosfati alimentari va verificata ogni 4-6 mesi, mentre la pulizia del magnete del defangatore ciclonico (che cattura la magnetite nera staccata dai vecchi termosifoni in ghisa) va eseguita annualmente prima dell’accensione invernale.',
      },
      {
        question: 'Su quali marchi di caldaie operate a San Giovanni?',
        answer:
          'Interveniamo fuori garanzia su tutti i principali marchi diffusi a Roma: Vaillant, Baxi, Ariston, Beretta, Riello, Junkers Bosch, Immergas, Ferroli, Hermann Saunier Duval e Viessmann, con ricambi idraulici ed elettronici prontamente disponibili.',
      },
    ],
  },
  {
    id: 5,
    slug: 'sostituzione-scaldabagni-san-giovanni',
    title: 'Sostituzione Scaldabagni San Giovanni',
    h1: 'Sostituzione Scaldabagni San Giovanni',
    shortName: 'Sostituzione e Riparazione Scaldabagni',
    category: 'Boiler Elettrici Classe A/B e Scaldabagni a Gas',
    metaDescription:
      'Sostituzione e riparazione scaldabagni elettrici e a gas a Roma San Giovanni in giornata. Rimozione calcare, sostituzione resistenza, anodo magnesio e valvola sicurezza. Tel: 06 8590 2384.',
    heroSummary:
      'Installazione in giornata, decalcificazione e riparazione di scaldabagni elettrici ad accumulo (50, 80, 100 litri) e scaldacqua istantanei a gas metano Low NOx negli appartamenti con riscaldamento centralizzato di Piazza dei Re di Roma, Via Appia Nuova e Villa Fiorelli.',
    responseTime: '30 minuti',
    priceFrom: 'Da € 90',
    instrumentation: [
      'Valvole di sicurezza idraulica calibrate a 7-8 bar con leva di spurgo certificata CE',
      'Giunti dielettrici isolanti da 1/2 pollice contro le correnti vaganti e la corrosione galvanica',
      'Resistenze corazzate in rame e steatite anticalcare con anodi sacrificali al magnesio maggiorati',
      'Flessibili in acciaio inox austenitico AISI 316L ad alta tenuta e riduttori di pressione dedicati',
      'Analizzatore di tiraggio e tenuta gas secondo norma UNI 7129 per scaldabagni a camera stagna/aperta',
    ],
    normativeRefs: [
      'UNI EN 60335-2-21 (Sicurezza degli scaldacqua elettrici ad accumulo)',
      'UNI 7129:2015 e UNI 10683 (Installazione apparecchi a gas per produzione ACS)',
      'Regolamento UE 814/2013 ErP (Ecodesign per scaldacqua ad alta efficienza e Low NOx)',
      'CEI 64-8 Sezione 701 (Distanze di sicurezza elettrica nelle zone 0, 1, 2 dei locali bagno)',
    ],
    techTable: [
      {
        parameter: 'Accumulo Medio Calcare in Boiler non Manutenuto',
        value: 'da 3,5 a 6,0 kg di fanghi calcarei sul fondo flangia ogni 24 mesi a 35°F',
        normative: 'Analisi Chimica Acqua Roma Est/Sud',
      },
      {
        parameter: 'Taratura Valvola di Sicurezza Sovrapressione',
        value: '7,0 – 8,0 bar (abbinata a riduttore di pressione se rete statica > 4,5 bar)',
        normative: 'UNI EN 1488',
      },
      {
        parameter: 'Isolamento Galvanico Attacchi Idraulici',
        value: 'Doppia coppia di raccordi dielettrici su ingresso fredda e uscita calda',
        normative: 'UNI EN 806-2',
      },
      {
        parameter: 'Soglia Intervento Interruttore Differenziale',
        value: 'Idn ≤ 30 mA con sezionatore bipolare dedicato',
        normative: 'Norma CEI 64-8',
      },
      {
        parameter: 'Emissioni Ossidi di Azoto (Scaldabagni a Gas)',
        value: 'Classe 6 Low NOx (< 56 mg/kWh)',
        normative: 'Regolamento Europeo ErP',
      },
    ],
    caseStudies: [
      {
        title: 'Sostituzione d’urgenza boiler elettrico 80 litri bucato dalla corrosione galvanica',
        street: 'Via Faleria (Piazza dei Re di Roma)',
        buildingType: 'Stabile anni ’40 con riscaldamento centralizzato a colonne e produzione ACS autonoma',
        problem:
          'Perdita copiosa d’acqua rugginosa dalla calotta inferiore dello scaldabagno elettrico Ariston di 9 anni e scatto continuo del salvavita generale dell’appartamento.',
        solution:
          'Svuotamento rapido del serbatoio tramite raccordo a T, smontaggio del vecchio appareccio, installazione di nuovo Ariston Velis Evo 80 litri a doppio serbatoio piatto con raccordi dielettrici isolanti, valvola di sicurezza Caleffi e riduttore di pressione.',
        result:
          'Messa in funzione in meno di 2 ore comprensiva di ritiro e smaltimento del vecchio boiler.',
      },
      {
        title: 'Revisione gruppo acqua e membrana su scaldabagno a gas Rinnai/Junkers',
        street: 'Via Vetulonia (zona Porta Metronia)',
        buildingType: 'Appartamento al 2° piano in comprensorio anni ’50',
        problem:
          'Lo scaldabagno a gas non faceva partire la scintilla d’accensione all’apertura del rubinetto doccia nonostante la buona pressione di rete.',
        solution:
          'Apertura del gruppo acqua in ottone, sostituzione della membrana elastomerica forata dal calcare, pulizia del filtro venturi e decalcificazione della serpentina in rame.',
        result:
          'Accensione immediata anche con prelievi minimi di acqua calda senza dover sostituire l’intero apparecchio.',
      },
    ],
    faqs: [
      {
        question: 'Perché lo scaldabagno elettrico fa scattare il salvavita nelle case di San Giovanni?',
        answer:
          'L’acqua molto calcarea di San Giovanni (33-36°F) crea uno spesso involucro di pietra attorno alla resistenza elettrica in rame. Non riuscendo più a cedere calore all’acqua circostante, la resistenza si surriscalda fino a fessurare la guaina metallica: l’acqua entra a contatto con il filamento elettrico mandando in dispersione a terra il boiler e facendo scattare l’interruttore differenziale. Sostituiamo flangia, resistenza, termostato e anodo in magnesio in 45 minuti.',
      },
      {
        question: 'Perché la valvola di sicurezza sotto lo scaldabagno gocciola continuamente di notte?',
        answer:
          'Nelle vie a quota più bassa (Piazza Zama, Via Sannio, Via Magna Grecia, Via Appia Nuova bassa) la pressione dell’acquedotto Acea di notte sale oltre i 5 bar. Quando il boiler scalda l’acqua, il volume si dilata e la pressione interna supera gli 8 bar facendo aprire la valvola di sicurezza. La soluzione definitiva è installare un riduttore di pressione o un piccolo vaso d’espansione sanitario.',
      },
      {
        question: 'In quanto tempo sostituite uno scaldabagno che perde acqua?',
        answer:
          'Operiamo in giornata entro 30-60 minuti dalla chiamata allo 06 8590 2384, fornendo e installando modelli da 30, 50, 80 e 100 litri (Ariston, Baxi, Chaffoteaux, Bosch, Rinnai, Vaillant) con staffe rinforzate per pareti in tufo o forati.',
      },
      {
        question: 'A cosa servono i giunti dielettrici sullo scaldabagno?',
        answer:
          'Nei palazzi storici di San Giovanni dove coesistono vecchie colonne in ferro zincato e tratti rifatti in rame o multistrato, si generano correnti galvaniche che bucano il bollitore in acciaio vetrificato. I giunti dielettrici interrompono il ponte elettrico raddoppiando la vita utile dello scaldabagno.',
      },
    ],
  },
  {
    id: 6,
    slug: 'riparazione-rubinetteria-sanitari-san-giovanni',
    title: 'Riparazione Rubinetteria Sanitari San Giovanni',
    h1: 'Riparazione Rubinetteria Sanitari San Giovanni',
    shortName: 'Riparazione Rubinetteria e Sanitari',
    category: 'Miscelatori, Passi Rapidi, Sifoni e Sanitari',
    metaDescription:
      'Riparazione e sostituzione rubinetteria, miscelatori termostatici, passi rapidi incassati e sanitari a Roma San Giovanni. Interventi precisi e puliti. Tel: 06 8590 2384.',
    heroSummary:
      'Sostituzione cartucce ceramiche, revisione vitoni e passi rapidi a muro bloccati dal calcare, montaggio miscelatori cucina/bagno, sostituzione sifoni in ottone o polipropilene e installazione sanitari filo muro o tradizionali nel quartiere San Giovanni.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 75',
    instrumentation: [
      'Chiavi a tubo esagonali cave Rothenberger per estrazione vitoni e cartucce incassate a muro',
      'Fresa rettificatrice per sedi di tenuta in ottone di rubinetti d’arresto e passi rapidi',
      'Cartucce a dischi ceramici originali Ø 25, 35, 40 mm (Grohe, Hansgrohe, Ideal Standard, Paffoni, Zucchetti)',
      'Raccordi eccentrici in ottone pesante con rosone copriforo e sigillante anaerobico professionale',
      'Siliconi acetici e neutri antimuffa certificati per sigillatura sanitari su marmo e gres',
    ],
    normativeRefs: [
      'UNI EN 817 (Rubinetteria sanitaria — Miscelatori meccanici PN 10)',
      'UNI EN 1111 (Miscelatori termostatici per impianti sanitari)',
      'UNI EN 997 (Vasi igienici in ceramica con sifone integrato)',
      'UNI EN 274 (Dispositivi di scarico e sifoni per apparecchi sanitari)',
    ],
    techTable: [
      {
        parameter: 'Pressione d’Esercizio Ideale Rubinetteria',
        value: 'da 1,0 a 5,0 bar (con differenza max ± 0,5 bar tra calda e fredda per i termostatici)',
        normative: 'UNI EN 817 / UNI EN 1111',
      },
      {
        parameter: 'Cicli di Vita Cartucce Ceramiche Installate',
        value: '> 70.000 cicli di apertura/chiusura certificati',
        normative: 'UNI EN 817',
      },
      {
        parameter: 'Materiale Flessibili di Allaccio Sottolavabo',
        value: 'Treccia in acciaio Inox AISI 304/316 con interno in EPDM atossico',
        normative: 'D.M. 174/2004 (Acque destinate al consumo umano)',
      },
      {
        parameter: 'Tipologia Sifoni Installati',
        value: 'Ottone cromato pesante a bottiglia o PP autofilettante ispezionabile',
        normative: 'UNI EN 274-1',
      },
      {
        parameter: 'Tenuta Filettature Idrauliche',
        value: 'Canapa pettinata + pasta verde atossica o filo in poliammide Loctite 55',
        normative: 'UNI EN 751-2',
      },
    ],
    caseStudies: [
      {
        title: 'Revisione passo rapido da 3/4” bloccato a muro senza rompere le mattonelle',
        street: 'Via Amiterno (adiacenze Porta Metronia)',
        buildingType: 'Palazzo storico anni ’30 con impianto idrico dotato di passo rapido per lo scarico del WC',
        problem:
          'Il passo rapido incassato perdeva copiosamente dal premistoppa bagnando la parete e non chiudeva più il flusso verso il vaso WC.',
        solution:
          'Chiusura della chiave d’arresto condominiale per 20 minuti, estrazione del vitone interno del passo rapido con chiave a bussola profonda, rettifica con fresa millimetrica della sede in ottone nel muro e montaggio di nuovo gruppo vitone completo di O-ring e manopola cromata.',
        result:
          'Chiusura morbida e tenuta ermetica ripristinata senza alcuna opera muraria.',
      },
      {
        title: 'Sostituzione rubinetti filtro sottolavabo spezzati nella filettatura a muro',
        street: 'Via Orvieto (zona Piazza Tuscolo)',
        buildingType: 'Appartamento al 5° piano in stabile anni ’50',
        problem:
          'Durante il tentativo di chiudere l’acqua per cambiare il miscelatore cucina, il vecchio rubinetto filtro in zama si era spezzato a filo del gomito femmina incassato nel muro.',
        solution:
          'Estrazione del moncone filettato da 1/2 pollice mediante estrattore conico sinistrorso senza danneggiare la filettatura interna del gomito a muro, ripassatura con maschio da 1/2” Gas e installazione di rubinetti filtro a sfera Caleffi in ottone anticalcare.',
        result:
          'Installazione del nuovo miscelatore cucina completata in 50 minuti evitando di spaccare il rivestimento della cucina.',
      },
    ],
    faqs: [
      {
        question: 'Perché i rubinetti d’arresto sottolavabo e le chiavi generali si bloccano sempre a San Giovanni?',
        answer:
          'La durezza dell’acqua (33-36°F) fa cristallizzare il calcare sulle sedi dei rubinetti che rimangono aperti nella stessa posizione per anni. Quando si tenta di chiuderli in emergenza, l’alberino si blocca o si spezza. Sostituiamo le vecchie saracinesche a vite con valvole a sfera a passaggio totale con sfere rivestite in PTFE anticalcare.',
      },
      {
        question: 'Riparate anche i miscelatori doccia incassati e termostatici Grohe, Ideal Standard o Paffoni?',
        answer:
          'Sì, interveniamo sui corpi incasso doccia sostituendo la cartuccia termostatica o a dischi ceramici, il deviatore vasca/doccia e le valvole di ritegno integrate, senza mai toccare le piastrelle del box doccia.',
      },
      {
        question: 'Un filetto di rubinetto spezzato dentro il muro obbliga a rompere la piastrella?',
        answer:
          'Assolutamente no: disponiamo di estrattori meccanici calibrati per tubazioni da 3/8”, 1/2” e 3/4” che estraggono il moncone d’ottone o ferro spezzato dall’interno della curva a muro lasciando intatta la filettatura e la piastrella.',
      },
      {
        question: 'Installate sanitari a filo muro al posto dei vecchi sanitari tradizionali?',
        answer:
          'Sì, grazie a curve tecniche traslate ed eccentriche certificate possiamo sostituire vecchi vasi e bidet con attacco a pavimento standard installando moderni sanitari filo parete senza dover rifare l’intero impianto di scarico.',
      },
    ],
  },
  {
    id: 7,
    slug: 'pronto-intervento-allagamenti-san-giovanni',
    title: 'Pronto Intervento Allagamenti San Giovanni',
    h1: 'Pronto Intervento Allagamenti San Giovanni',
    shortName: 'Pronto Intervento Allagamenti',
    category: 'Emergenza H24, Pompaggio e Messa in Sicurezza',
    metaDescription:
      'Pronto intervento allagamenti H24 a Roma San Giovanni per appartamenti, cantine, negozi e garage. Aspirazione acqua con pompe sommerse e riparazione tubi rotti. Tel: 06 8590 2384.',
    heroSummary:
      'Intervento d’urgenza 24 ore su 24 in 20 minuti per rottura tubazioni in pressione, flessibili esplosi per colpi d’ariete, rigurgiti fognari nei seminterrati dell’alveo dell’Acqua Mariana (Via Sannio, Piazza Epiro, Via Appia Nuova) e messa in sicurezza condominiale.',
    responseTime: '15-25 minuti',
    priceFrom: 'Da € 95',
    instrumentation: [
      'Elettropompe sommerse svuotatutto a pavimento raso ("dry-floor" 2 mm) Lowara DOC e DOMO Vortex',
      'Aspiratori industriali bi-stadio per liquidi e fanghi ad alta capienza per parquet e marmi',
      'Congelatore elettrico portatile per tubazioni Rofrost Turbo (da Ø 10 a Ø 42 mm) per interventi senza chiudere la colonna condominiale',
      'Pinze pressatrici elettroidrauliche Ridgid con ganasce profilo TH, U, V e M per rame, multistrato e acciaio',
      'Valvole antiriflusso fognarie a clapet in ghisa/inox e palloni otturatori pneumatici di emergenza',
    ],
    normativeRefs: [
      'UNI EN 13564 (Dispositivi antiriflusso per gli edifici contro gli allagamenti fognari)',
      'UNI EN 12056-4 (Impianti di sollevamento acque reflue e stazioni di pompaggio)',
      'D.M. 37/2008 (Messa in sicurezza d’urgenza e ripristino impianti idrosanitari)',
      'Piano di Protezione Civile Roma Capitale per criticità idrauliche bacino Marrana / Ferratella',
    ],
    techTable: [
      {
        parameter: 'Tempo di Arrivo Squadra Emergenza a San Giovanni',
        value: '15 – 25 minuti H24 (presidio mobile stazionante in zona Appio-Latino)',
        normative: 'Protocollo Pronto Intervento H24',
      },
      {
        parameter: 'Portata di Svuotamento Pompe Sommerse a Bordo',
        value: 'Fino a 18.000 litri/ora (300 l/min) con passaggio corpi solidi fino a 35 mm',
        normative: 'UNI EN 12050-1 / Lowara DOMO',
      },
      {
        parameter: 'Livello Residuo Aspirazione a Pavimento ("Dry-Floor")',
        value: '1 – 2 millimetri (protezione immediata per parquet e archivi)',
        normative: 'Tecnologia Aspirazione Raso Suolo',
      },
      {
        parameter: 'Temperatura Criogenica Congelamento Tubi',
        value: '-30 °C in 8 minuti (consente di sezionare un tubo rotto anche se la saracinesca generale è bloccata)',
        normative: 'Rothenberger Rofrost System',
      },
      {
        parameter: 'Tenuta Valvole Antiriflusso Installate',
        value: 'Doppio clapet a chiusura automatica + leva di blocco manuale in acciaio Inox AISI 316',
        normative: 'UNI EN 13564 Tipo 3',
      },
    ],
    caseStudies: [
      {
        title: 'Allagamento notturno al 1° piano per scoppio flessibile con pressione di rete a 5,5 bar',
        street: 'Piazza Zama',
        buildingType: 'Condominio di 7 piani nella conca altimetrica bassa (26 m s.l.m.)',
        problem:
          'Alle 02:30 di notte il flessibile di carico dello scaldabagno è esploso a causa del picco di pressione statica notturna della rete Acea, riversando 5 centimetri d’acqua nell’appartamento e minacciando il soffitto del negozio sottostante.',
        solution:
          'Arrivo in 18 minuti, intercettazione della saracinesca nel cavedio scale, aspirazione immediata dell’acqua con aspiraliquidi industriale bi-motore, sostituzione dei flessibili con tubi in acciaio inox certificati PN16 e installazione di valvola d’arresto a sfera con riduttore.',
        result:
          'Appartamento asciugato e impianto rimesso in funzione entro le 04:00 del mattino, evitando danni strutturali al solaio.',
      },
      {
        title: 'Rigurgito fognario in locale seminterrato durante nubifragio estivo',
        street: 'Via Sannio (tratto Largo Brindisi)',
        buildingType: 'Locale commerciale e magazzino al piano S1 sull’antico alveo dell’Acqua Mariana',
        problem:
          'Messa in carico del collettore fognario stradale durante una bomba d’acqua, con risalita di acque miste dai pozzetti e dai sanitari del piano seminterrato.',
        solution:
          'Prosciugamento d’emergenza con pompa sommersa vortex Lowara DOMO, sanificazione delle condotte e installazione nel pozzetto d’ispezione interno di una valvola antiriflusso fognaria a doppio clapet certificata UNI EN 13564.',
        result:
          'Protezione definitiva del seminterrato contro qualsiasi futuro ritorno di fogna dalla rete pubblica.',
      },
    ],
    faqs: [
      {
        question: 'Cosa devo fare nei primi minuti se scoppia un tubo in casa e la chiave generale gira a vuoto?',
        answer:
          'Se la saracinesca del tuo appartamento è bloccata dal calcare o gira a vuoto, chiama immediatamente lo 06 8590 2384. Mentre il nostro furgone arriva sul posto (15-25 minuti a San Giovanni), ti guidiamo telefonicamente per individuare il contatore condominiale o utilizziamo al nostro arrivo il congelatore elettrico Rofrost che crea un tappo di ghiaccio a -30°C dentro il tubo, bloccando l’allagamento anche senza chiudere l’acqua dell’intero palazzo.',
      },
      {
        question: 'Perché i piani bassi e i seminterrati di Via Sannio, Piazza Epiro e Piazza Zama si allagano quando piove forte?',
        answer:
          'Quest’area di San Giovanni ricalca la depressione morfologica dell’antico fosso dell’Acqua Mariana (Marrana di San Giovanni) e della Valle della Ferratella. Durante i nubifragi i collettori fognari vanno in pressione e l’acqua reflua risale negli scarichi posti sotto il livello stradale. L’unica difesa tecnica definitiva è installare una valvola antiriflusso a clapet o una stazione di sollevamento acque reflue.',
      },
      {
        question: 'Avete pompe per svuotare cantine, box auto e ascensori allagati?',
        answer:
          'Sì, ogni furgone di pronto intervento trasporta elettropompe sommerse ad alta portata per acque scure/fangose e pompe "dry-floor" che aspirano l’acqua fino a 1-2 millimetri dal pavimento.',
      },
      {
        question: 'Siete realmente operativi di notte, la domenica e ad agosto a San Giovanni?',
        answer:
          'Sì, il centralino 06 8590 2384 risponde direttamente H24 tutti i 365 giorni dell’anno, attivando il tecnico reperibile di turno nel quadrante San Giovanni / Appio-Latino.',
      },
    ],
  },
  {
    id: 8,
    slug: 'riduttori-pressione-autoclavi-san-giovanni',
    title: 'Riduttori Pressione Autoclavi San Giovanni',
    h1: 'Riduttori Pressione Autoclavi San Giovanni',
    shortName: 'Riduttori di Pressione e Autoclavi',
    category: 'Regolazione Pressione Idrica, Colpi d’Ariete e Gruppi Inverter',
    metaDescription:
      'Installazione riduttori di pressione Caleffi, ammortizzatori colpo d’ariete e assistenza autoclavi condominiali e domestiche a Roma San Giovanni. Tel: 06 8590 2384.',
    heroSummary:
      'Stabilizzazione ingegneristica della pressione idrica Acea ATO2: installazione di riduttori di pressione a sede compensata nelle zone basse soggette a 5,5 bar (Piazza Zama, Via Latina, Via Britannia) e gruppi di pressurizzazione silenziosi a inverter DAB e.sybox per gli attici e i piani alti di Porta San Giovanni e Piazza dei Re di Roma.',
    responseTime: '30 minuti',
    priceFrom: 'Da € 120',
    instrumentation: [
      'Riduttori di pressione a pistone e sede compensata Caleffi serie 5350 / Honeywell Braukmann con manometro in glicerina',
      'Ammortizzatori di colpo d’ariete idropneumatici Caleffi 525 per salvataggio elettrovalvole e tubazioni',
      'Gruppi di pressurizzazione elettronici a inverter DAB e.sybox / e.sybox mini3 (< 43 dB) e Grundfos Scala2',
      'Data-logger manometrici digitali per registrazione picchi di pressione notturna sulle 24 ore',
      'Vasi d’espansione a membrana alimentare Zilmet/Elbi PN10-PN16 e pressostati digitali',
    ],
    normativeRefs: [
      'UNI EN 1567 (Valvole riduttrici di pressione per l’acqua negli edifici — Requisiti e prove)',
      'UNI EN 806-2 (Progettazione impianti idrici sanitari: limiti di pressione massima e velocità di flusso)',
      'UNI 9182 (Impianti di alimentazione e distribuzione d’acqua fredda e calda — Dimensionamento autoclavi)',
      'Regolamento Tecnico Acea ATO2 per disconnessione idraulica e serbatoi di prima raccolta',
    ],
    techTable: [
      {
        parameter: 'Pressione Statica Rilevata in Quota Bassa (Piazza Zama / Via Latina)',
        value: '4,8 – 5,6 bar diurni / fino a 6,2 bar notturni (oltre il limite di sicurezza domestico)',
        normative: 'Rilievi Rete Acea ATO2',
      },
      {
        parameter: 'Pressione Dinamica Rilevata ai Piani Alti (Porta S. Giovanni / Re di Roma)',
        value: '0,9 – 1,5 bar ai piani 6°–8° nelle ore di punta (07:30–09:00 e 19:30–21:30)',
        normative: 'Perdita piezometrica 0,1 bar/metro',
      },
      {
        parameter: 'Taratura Ottimale Riduttore di Pressione Domestico',
        value: '3,0 bar statici / 2,8 bar dinamici con filtro ispezionabile 100 micron',
        normative: 'UNI EN 806-2 / UNI EN 1567',
      },
      {
        parameter: 'Sovrapressione da Colpo d’Ariete (Senza Ammortizzatore)',
        value: 'Picchi istantanei fino a +12 / +15 bar alla chiusura rapida di lavatrici e miscelatori',
        normative: 'Formula di Joukowsky (ΔP = ρ·c·Δv)',
      },
      {
        parameter: 'Emissione Acustica Autoclave Inverter da Appartamento',
        value: '43 – 45 dB(A) (installabile in ripostiglio, balcone tecnico o sottolavello)',
        normative: 'D.P.C.M. 5/12/1997 Requisiti Acustici',
      },
    ],
    caseStudies: [
      {
        title: 'Eliminazione colpi d’ariete e rotture flessibili in condominio privo di riduttore',
        street: 'Via Acaia (quadrante Piazza Zama / Via Latina)',
        buildingType: 'Stabile di 6 piani situato a quota 28 m s.l.m. con allaccio diretto su adduttrice Acea',
        problem:
          'Forti boati metallici nelle tubazioni a muro ad ogni chiusura dei rubinetti o della lavatrice, con rottura di due flessibili e perdita continua dalla valvola della caldaia in un appartamento al primo piano (pressione misurata: 5,6 bar).',
        solution:
          'Sezionamento della tubazione montante d’ingresso appartamento, installazione di riduttore di pressione Caleffi in bronzo a sede compensata con cartuccia estraibile e manometro a bagno di glicerina tarato a 3,0 bar, più coppia di ammortizzatori colpo d’ariete sottolavabo.',
        result:
          'Scomparsa immediata dei rumori nelle murature e messa in sicurezza definitiva di caldaia, cassette WC ed elettrodomestici.',
      },
      {
        title: 'Installazione autoclave compatta a inverter per attico con pressione insufficiente',
        street: 'Piazza dei Re di Roma',
        buildingType: 'Palazzo storico anni ’30 di 7 piani privo di autoclave condominiale moderna',
        problem:
          'Nell’attico al 7° piano la pressione dinamica scendeva a 0,8 bar non appena i piani inferiori aprivano l’acqua, impedendo l’accensione della caldaia e l’uso simultaneo di due bagni.',
        solution:
          'Installazione in vano tecnico esterno coibentato di un sistema integrato DAB e.sybox mini3 a inverter con serbatoio di disconnessione compatto a norma Acea e valvola di ritegno silenziosa.',
        result:
          'Pressione costante di 3,2 bar su tutte le docce dell’attico a qualsiasi ora del giorno con rumorosità impercettibile.',
      },
    ],
    faqs: [
      {
        question: 'Perché tra Piazza San Giovanni e Piazza Zama la pressione dell’acqua cambia così drasticamente?',
        answer:
          'Il quartiere San Giovanni presenta un dislivello altimetrico di oltre 22 metri: si passa dai 48 metri s.l.m. di Porta San Giovanni e Via Merulana ai 26 metri s.l.m. della conca di Piazza Zama, Via Imera e Via Sannio. Poiché la rete idrica Acea ATO2 (alimentata dal Peschiera-Capore e dall’Appio-Alessandrino) deve garantire pressione anche alle quote alte, nelle zone basse la colonna piezometrica genera pressioni statiche di 5,0 - 5,8 bar che distruggono guarnizioni, scaldabagni e cassette WC se non si installa un riduttore di pressione.',
      },
      {
        question: 'Che differenza c’è tra un riduttore di pressione economico e uno a sede compensata Caleffi?',
        answer:
          'Un riduttore economico a membrana semplice subisce le variazioni della pressione di monte: se di notte la pressione Acea sale da 4 a 6 bar, aumenta anche la pressione in casa. I riduttori a sede compensata con filtro che installiamo mantengono invece i 3,0 bar impostati in modo rigoroso sia di giorno che di notte, e dispongono di cartuccia estraibile per pulire i detriti ferrosi.',
      },
      {
        question: 'Cosa sono quei colpi sordi ("colpo d’ariete") che si sentono nei tubi quando chiudo il miscelatore o stacca la lavatrice?',
        answer:
          'Il colpo d’ariete è un’onda d’urto idraulica causata dall’arresto istantaneo dell’acqua che scorre ad alta velocità nelle tubazioni rigide in ferro o multistrato. L’energia cinetica si trasforma in un picco di pressione che può superare i 12 bar, facendo vibrare i tubi nel muro e lesionando le saldature. Si elimina riducendo la pressione a 3 bar e montando ammortizzatori a molla/membrana vicino alle elettrovalvole.',
      },
      {
        question: 'Riparate anche autoclavi condominiali in blocco a San Giovanni?',
        answer:
          'Sì, interveniamo d’urgenza su centrali idriche condominiali per la sostituzione di pressostati, inverter guasti, valvole di fondo, galleggianti elettrici dei serbatoi di accumulo e vasi di espansione bucati.',
      },
    ],
  },
];

