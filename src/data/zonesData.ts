/**
 * Catalogo delle 16 Micro-Zone Territoriali di Roma San Giovanni — idraulicoromasangiovanni.it
 * Regola Aurea 1:1: title === h1
 * Autore: Marco D'Elia
 */

export interface ZoneTechRow {
  parameter: string;
  value: string;
  note: string;
}

export interface ZoneCaseStudy {
  title: string;
  street: string;
  description: string;
  outcome: string;
}

export interface ZoneFaqItem {
  question: string;
  answer: string;
}

export interface ZoneItem {
  id: number;
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  quadrant: string;
  cap: string;
  altitude: string;
  pressureStatic: string;
  waterHardness: string;
  groundwaterRisk: string;
  dominantBuildingEra: string;
  responseTime: string;
  mainStreets: string[];
  landmarks: string[];
  metaDescription: string;
  heroSummary: string;
  techTable: ZoneTechRow[];
  caseStudies: ZoneCaseStudy[];
  faqs: ZoneFaqItem[];
}

export const ZONES_DATA: ZoneItem[] = [
  {
    id: 1,
    slug: 'idraulico-piazza-dei-re-di-roma',
    title: 'Idraulico Piazza dei Re di Roma',
    h1: 'Idraulico Piazza dei Re di Roma',
    shortName: 'Piazza dei Re di Roma',
    quadrant: 'Snodo Centrale Appio-Latino / Raccordo Tuscolano',
    cap: '00183',
    altitude: '39 – 42 m s.l.m.',
    pressureStatic: '3,4 – 4,1 bar al piano stradale (1,2 bar ai piani 7°–8°)',
    waterHardness: '34 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Vibrazioni sotterranee galleria Metro A',
    dominantBuildingEra: 'Edilizia intensiva signorile anni ’30 e ’40 (8 piani con cortili interni)',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazza dei Re di Roma',
      'Via Aosta',
      'Via Cerveteri',
      'Via Albalonga',
      'Via Pomezia',
      'Via Faleria',
      'Via Vercelli',
      'Via Appia Nuova (tratto Re di Roma)',
    ],
    landmarks: [
      'Piazza dei Re di Roma (grande rotatoria alberata)',
      'Stazione Metro A Re di Roma',
      'Teatro Duse / Via Crema',
      'Istituto Comprensivo Piazza dei Re di Roma',
    ],
    metaDescription:
      'Idraulico Piazza dei Re di Roma: pronto intervento H24 in 15-20 minuti su Via Aosta, Via Cerveteri, Via Albalonga e Via Pomezia. Perdite acqua, scarichi, Pucci e Geberit. Tel: 06 8590 2384.',
    heroSummary:
      'Presidio termoidraulico stanziale nell’anello esagonale di Piazza dei Re di Roma e lungo le sei arterie radiali (Via Appia Nuova, Via Aosta, Via Cerveteri, Via Albalonga, Via Pomezia). Interventi rapidi su colonne montanti Mannesmann, autoclavi condominiali e cassette incassate nei palazzi anni ’30.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Media Piazza dei Re di Roma',
        value: '40,5 metri s.l.m. (terrazzo piroclastico tufaceo)',
        note: 'Caduta piezometrica di 2,4 bar ai piani attici',
      },
      {
        parameter: 'Tipologia Colonne Idriche Prevalenti',
        value: 'Acciaio zincato trafilato Mannesmann Ø 1”1/4 – 1” (impianti 1932–1949)',
        note: 'Rischio corrosione galvanica sugli innesti in rame/multistrato',
      },
      {
        parameter: 'Interferenza Sismica Sottosuolo',
        value: 'Sollecitazioni cicliche da passaggio convogli Metro A sotto l’asse Appia',
        note: 'Micro-fessurazioni ricorrenti su giunti rigidi filettati',
      },
      {
        parameter: 'Cassette di Scarico Storiche Rilevate',
        value: 'Pucci in rame a pulsante tondo, Catis in ghisa e Geberit Twinline anni ’90',
        note: 'Ricambi originali sempre disponibili sul furgone officina',
      },
      {
        parameter: 'Durezza Calcarea Erogata (Acea ATO2)',
        value: '34 °F — Conducibilità 590 µS/cm',
        note: 'Lavaggio chimico scambiatori consigliato ogni 24 mesi',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca perdita occulta su braga in piombo in appartamento d’epoca',
        street: 'Via Cerveteri (angolo Piazza dei Re di Roma)',
        description:
          'Individuata con gas tracciante e termocamera FLIR una lesione da fatica meccanica sulla saldatura tra la scatola sifonata in piombo e il collettore del bidet al 4° piano, senza demolire il pavimento in marmette originali del 1936.',
        outcome: 'Riparazione eseguita su singola mattonella 25x25 cm in 2 ore e rilascio perizia assicurativa.',
      },
      {
        title: 'Ripristino pressione idrica in attico al 7° piano',
        street: 'Via Albalonga',
        description:
          'Installazione di gruppo di pressurizzazione elettronico ultrasilenzioso DAB e.sybox mini3 in vano tecnico balcone per compensare il calo di portata dinamica nelle ore mattutine.',
        outcome: 'Pressione stabilizzata a 3,2 bar costanti su due docce simultanee.',
      },
    ],
    faqs: [
      {
        question: 'In quanto tempo arrivate a Piazza dei Re di Roma per un’emergenza idraulica?',
        answer:
          'Stazionando quotidianamente nel quadrante Re di Roma / Via Appia Nuova, garantiamo l’arrivo del tecnico abilitato entro 15-20 minuti dalla chiamata allo 06 8590 2384.',
      },
      {
        question: 'Perché nei palazzi alti di Piazza dei Re di Roma l’acqua arriva debole al mattino?',
        answer:
          'Gli stabili monumentali costruiti negli anni ’30 attorno a Piazza dei Re di Roma raggiungono i 7-8 piani (oltre 26 metri d’altezza). Quando le vecchie colonne in ferro zincato sono parzialmente ridotte di sezione dal calcare (tubercolizzazione), la perdita di carico idraulica impedisce all’acqua di salire con pressione sufficiente. Interveniamo sia rigenerando le autoclavi condominiali sia installando mini-inverter autonomi silenziosi per singolo appartamento.',
      },
    ],
  },
  {
    id: 2,
    slug: 'idraulico-san-giovanni-in-laterano',
    title: 'Idraulico San Giovanni in Laterano',
    h1: 'Idraulico San Giovanni in Laterano',
    shortName: 'San Giovanni in Laterano',
    quadrant: 'Polo Monumentale Lateranense / Rione Monti-Esquilino',
    cap: '00184',
    altitude: '45 – 48 m s.l.m.',
    pressureStatic: '3,0 – 3,6 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Basso in superficie; cavità tufacee e cunicoli archeologici nel sottosuolo',
    dominantBuildingEra: 'Palazzi umbertini di fine ’800 e primo ’900 in muratura portante di tufo',
    responseTime: '20-25 minuti',
    mainStreets: [
      'Piazza di San Giovanni in Laterano',
      'Via di San Giovanni in Laterano',
      'Via Domenico Fontana',
      'Via Matteo Boiardo',
      'Via Torquato Tasso',
      'Via Emanuele Filiberto (tratto Laterano)',
      'Via Amba Aradam (innesto Laterano)',
    ],
    landmarks: [
      'Arcibasilica Papale di San Giovanni in Laterano',
      'Santuario della Scala Santa e Triclinio Leoniano',
      'Complesso Ospedaliero San Giovanni Addolorata',
      'Obelisco Lateranense',
    ],
    metaDescription:
      'Idraulico San Giovanni in Laterano: assistenza e pronto intervento H24 in Piazza San Giovanni, Via Domenico Fontana, Via Matteo Boiardo e Ospedale San Giovanni. Tel: 06 8590 2384.',
    heroSummary:
      'Assistenza idraulica altamente conservativa per i palazzi storici umbertini, gli studi professionali e le strutture ricettive attorno alla Basilica di San Giovanni in Laterano, Scala Santa, Via Domenico Fontana e complesso ospedaliero.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Dorsale Lateranense',
        value: '46,8 metri s.l.m. (punto sommitale del plateau tufaceo)',
        note: 'Alimentazione storica da diramazione Acquedotto Felice / Marcia',
      },
      {
        parameter: 'Struttura Solai Edifici Storici (1885–1915)',
        value: 'Putrelle in ferro a doppio T con voltine in mattoni pieni e caldana in pozzolana',
        note: 'Divieto assoluto di scassi invasivi non guidati da termografia',
      },
      {
        parameter: 'Scarichi Verticali e Orizzontali',
        value: 'Colonne in ghisa catramata con giunti piombati e braghe in piombo saldato',
        note: 'Disotturazione esclusiva con spirali meccaniche flessibili',
      },
      {
        parameter: 'Tipologia Utenze Presidiate',
        value: 'Residenze storiche, B&B/Case vacanza, studi medici, istituti religiosi',
        note: 'Interventi silenziosi e a zero polvere',
      },
      {
        parameter: 'Pressione Dinamica ai Piani Superiori (5°–6° piano)',
        value: '1,1 – 1,6 bar senza autoclave (soffitti alti 3,80 – 4,20 m)',
        note: 'Necessità di pompe booster o valvole galleggianti bassa pressione',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione scarico in piombo in struttura ricettiva vicino alla Scala Santa',
        street: 'Via Domenico Fontana',
        description:
          'Blocco improvviso di due bagni en-suite in un B&B al secondo piano nobile. Rimozione dell’ostruzione mediante sonda Rothenberger K-45 e rifacimento del raccordo tra sifone e braga in piombo mediante manicotto di transizione elastomerico certificato.',
        outcome: 'Camere nuovamente agibili in 90 minuti senza disagi per gli ospiti.',
      },
      {
        title: 'Revisione batteria Catis e rubinetti d’arresto in appartamento vincolato',
        street: 'Via Matteo Boiardo',
        description:
          'Rigenerazione completa di batteria Catis originale e sostituzione di due saracinesche a muro bloccate dal calcare mediante estrazione del vitone e rettifica sede in ottone.',
        outcome: 'Conservazione integrale delle maioliche d’epoca anni ’20.',
      },
    ],
    faqs: [
      {
        question: 'Operate anche per i B&B, hotel e studi medici vicino all’Ospedale San Giovanni?',
        answer:
          'Sì, garantiamo corsia preferenziale d’emergenza per strutture ricettive, studi odontoiatrici/medici e uffici in Piazza di San Giovanni in Laterano, Via Domenico Fontana e Via di San Giovanni in Laterano, con rilascio immediato di fattura elettronica e certificazione D.M. 37/2008.',
      },
      {
        question: 'Come gestite le perdite nei vecchi solai con camere a canne e voltine di Via Matteo Boiardo e Via Tasso?',
        answer:
          'Nei solai umbertini l’acqua di una perdita scorre lungo l’ala inferiore della trave in ferro ("putrella") e può gocciolare anche a 3-4 metri di distanza dal punto reale di rottura. Per evitare demolizioni inutili usiamo sempre la termocamera FLIR e il gas tracciante prima di aprire la singola mattonella.',
      },
    ],
  },
  {
    id: 3,
    slug: 'idraulico-via-appia-nuova',
    title: 'Idraulico Via Appia Nuova',
    h1: 'Idraulico Via Appia Nuova',
    shortName: 'Via Appia Nuova',
    quadrant: 'Arteria Commerciale Primaria San Giovanni / Ponte Lungo',
    cap: '00183 / 00181',
    altitude: 'da 44 m s.l.m. (Piazzale Appio) a 35 m s.l.m. (Furio Camillo)',
    pressureStatic: '3,6 – 4,5 bar (variabile secondo la quota del civico)',
    waterHardness: '34 – 36 °F',
    groundwaterRisk: 'Medio-Alto nei tratti interrati a ridosso dell’incrocio con l’Acqua Mariana',
    dominantBuildingEra: 'Palazzi misti residenziali-commerciali anni ’20–’60 ad alta densità',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Appia Nuova (dal civico 1 al civico 450)',
      'Via Alba',
      'Via Tortona',
      'Via Mondovì',
      'Via Cesena',
      'Via Enna',
      'Via Adria',
      'Via Camilla',
    ],
    landmarks: [
      'Piazzale Appio e Coin Excelsior San Giovanni',
      'Stazioni Metro A San Giovanni, Re di Roma, Ponte Lungo, Furio Camillo',
      'Stazione Ferroviaria Roma Tuscolana (raccordo)',
      'Mercato di Via Orvieto / Via Appia Nuova',
    ],
    metaDescription:
      'Idraulico Via Appia Nuova a Roma San Giovanni: pronto intervento H24 per appartamenti, negozi, bar e ristoranti da Piazzale Appio a Ponte Lungo e Furio Camillo. Tel: 06 8590 2384.',
    heroSummary:
      'Servizio idraulico rapido lungo l’intero asse di Via Appia Nuova (dal civico 1 di Porta San Giovanni fino a Re di Roma, Ponte Lungo e Furio Camillo) per condomini, negozi su strada, bar, ristoranti e uffici.',
    techTable: [
      {
        parameter: 'Sviluppo Altimetrico Asse Via Appia Nuova',
        value: 'Pendenza da 44 m (Piazzale Appio) a 31 m nell’attraversamento della Marrana',
        note: 'Incremento di +1,3 bar di pressione statica nei civici bassi',
      },
      {
        parameter: 'Problematica Critica Negozi e Ristorazione Piano Terra',
        value: 'Confluenza colonne fecali condominiali nelle braghe dei locali commerciali C/1',
        note: 'Disotturazione prioritaria anti-rigurgito e installazione pozzetti degrassatori',
      },
      {
        parameter: 'Sollecitazioni Meccaniche Tubazioni Interrate',
        value: 'Vibrazioni combinate traffico pesante di superficie + gallerie Metro A',
        note: 'Impiego di giunti antisfilamento e multistrato strutturale',
      },
      {
        parameter: 'Durezza Acqua su Macchine Caffè e Caldaie',
        value: '35 °F — Rapida incrostazione elettrovalvole e scambiatori a piastre',
        note: 'Installazione addolcitori e filtri anticalcare certificati',
      },
      {
        parameter: 'Tempi di Intervento Urgente su Strada',
        value: '15 – 20 minuti con furgone attrezzato',
        note: 'Operatività anche in orario notturno per non fermare i negozi',
      },
    ],
    caseStudies: [
      {
        title: 'Sblocco urgente colonna di scarico in attività di ristorazione su Via Appia Nuova',
        street: 'Via Appia Nuova (tratto tra Re di Roma e Ponte Lungo)',
        description:
          'Occlusione del collettore sub-orizzontale sotto il pavimento del laboratorio per accumulo di grassi saponificati e calcare, con rischio chiusura locale nell’ora di pranzo. Intervento con stasatrice Rothenberger R600 e testina a catene centrifughe.',
        outcome: 'Scarico completamente disostruito in 45 minuti prima dell’apertura al pubblico.',
      },
      {
        title: 'Sostituzione colonna montante lesionata in cavedio condominiale',
        street: 'Via Mondovì (traversa Via Appia Nuova)',
        description:
          'Fessurazione longitudinale di un tratto di 3 metri di colonna in ferro zincato da 1 pollice tra il 2° e il 3° piano. Sezionamento e innesto in multistrato PE-Xb/Al/PE-Xb con raccordi a pressare.',
        outcome: 'Erogazione idrica ripristinata per tutti i 24 condomini in 3 ore.',
      },
    ],
    faqs: [
      {
        question: 'Perché i negozi al piano terra di Via Appia Nuova subiscono spesso allagamenti dagli scarichi condominiali?',
        answer:
          'Negli stabili degli anni ’30-’50 di Via Appia Nuova, le colonne verticali di scarico degli 8 piani superiori curvano a 90 gradi proprio sotto il solaio o nel controsoffitto dei negozi al piano strada. Se al piede della colonna si forma un tappo di calcare o salviette, l’acqua scaricata dai piani alti non riesce a defluire in fogna e fuoriesce dal punto più basso, cioè il bagno del negozio. Interveniamo in 15 minuti per disotturare il piede colonna.',
      },
      {
        question: 'Potete intervenire fuori orario di apertura per bar e negozi su Via Appia Nuova?',
        answer:
          'Certamente: per le attività commerciali di Via Appia Nuova eseguiamo riparazioni, sostituzioni scaldabagni e disotturazioni anche al mattino presto (06:00-08:30) o in fascia serale/notturna.',
      },
    ],
  },
  {
    id: 4,
    slug: 'idraulico-piazza-tuscolo',
    title: 'Idraulico Piazza Tuscolo',
    h1: 'Idraulico Piazza Tuscolo',
    shortName: 'Piazza Tuscolo',
    quadrant: 'Cuore Architettonico Anni ’20–’30 (Complesso ICP Camillo Palmerini)',
    cap: '00183',
    altitude: '33 – 36 m s.l.m.',
    pressureStatic: '4,2 – 4,7 bar',
    waterHardness: '34 °F',
    groundwaterRisk: 'Medio — Versante di compluvio verso Via Magna Grecia e Via Sannio',
    dominantBuildingEra: 'Edilizia barocchetto romano anni ’20 (ICP Palmerini) e condomini anni ’30-’50',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazza Tuscolo',
      'Via Tuscolo',
      'Via Soana',
      'Via Astura',
      'Via Populonia',
      'Via Orvieto',
      'Via Etruria',
      'Via Satrico (innesto Tuscolo)',
    ],
    landmarks: [
      'Piazza Tuscolo e giardini storici centrali',
      'Complesso monumentale ICP di Camillo Palmerini (1922–1926)',
      'Parrocchia della Natività di Nostro Signore Gesù Cristo (Via Gallia)',
      'Mercato rionale di Via Orvieto',
    ],
    metaDescription:
      'Idraulico Piazza Tuscolo Roma: pronto intervento H24 su Via Etruria, Via Soana, Via Populonia, Via Orvieto e Via Tuscolo. Riparazione perdite, cassette Pucci/Geberit e scarichi. Tel: 06 8590 2384.',
    heroSummary:
      'Interventi idraulici specializzati negli stabili storici anni ’20 di Piazza Tuscolo (complessi monumentali con cortili interni) e nei condomini intensivi di Via Etruria, Via Orvieto, Via Populonia e Via Soana.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza Tuscolo',
        value: '34,5 metri s.l.m.',
        note: 'Zona di transizione barica con pressione statica intorno a 4,4 bar',
      },
      {
        parameter: 'Peculiarità Impiantistica Stabili Storici ICP (1922–1930)',
        value: 'Muri perimetrali e tramezzi di spessore elevato in tufo e mattoni pieni',
        note: 'Tubazioni incassate in profondità che richiedono geofono ad alta sensibilità',
      },
      {
        parameter: 'Collettori Fognari di Cortile',
        value: 'Cunicoli e tubazioni in gres ceramico con pozzetti d’ispezione nei giardini condominiali',
        note: 'Soggetti a intrusione di radici di alberature storiche',
      },
      {
        parameter: 'Sistemi di Scarico Bagni Padronali',
        value: 'Forte presenza di cassette Pucci in rame e batterie Catis esterne',
        note: 'Manutenzione conservativa senza opere murarie',
      },
      {
        parameter: 'Riscaldamento e Produzione ACS',
        value: 'Centralizzato con contabilizzatori + scaldabagni a gas/elettrici o caldaie autonome',
        note: 'Sostituzione valvole termostatiche e scaldacqua in giornata',
      },
    ],
    caseStudies: [
      {
        title: 'Disostruzione collettore in gres invaso da radici in cortile storico',
        street: 'Piazza Tuscolo',
        description:
          'Rallentamento grave dello scarico di una intera verticale condominiale. Mediante videoispezione SeeSnake è stata localizzata un’intrusione capillare di radici in un giunto del tubo in gres nel cortile giardino; rimossa con testina taglia-radici su Rothenberger R600.',
        outcome: 'Collettore liberato al 100% evitando lo scavo del vialetto condominiale.',
      },
      {
        title: 'Ricerca perdita acqua calda sotto pavimento in cementine esagonali d’epoca',
        street: 'Via Soana',
        description:
          'Perdita occulta sulla tubazione dell’acqua calda sanitaria proveniente dallo scaldabagno. Localizzata al millimetro con termocamera FLIR E8-XT nel corridoio.',
        outcome: 'Salvate le cementine storiche sollevando un singolo elemento e riparando il tubo.',
      },
    ],
    faqs: [
      {
        question: 'Operate negli stabili storici anni ’20 di Piazza Tuscolo senza rovinare i pavimenti d’epoca?',
        answer:
          'Sì, gli appartamenti del complesso storico di Piazza Tuscolo e Via Soana conservano spesso cementine esagonali e graniglie originali degli anni ’20. Utilizziamo termografia a infrarossi e gas tracciante per individuare la perdita con precisione chirurgica su una sola mattonella.',
      },
      {
        question: 'Quanto costa un intervento idraulico in zona Piazza Tuscolo / Via Etruria?',
        answer:
          'Comunichiamo sempre il preventivo chiaro e trasparente prima di iniziare il lavoro. Le disotturazioni partono da € 85, la revisione di cassette Pucci/Geberit da € 80 e la riparazione di rubinetteria da € 75.',
      },
    ],
  },
  {
    id: 5,
    slug: 'idraulico-via-magna-grecia',
    title: 'Idraulico Via Magna Grecia',
    h1: 'Idraulico Via Magna Grecia',
    shortName: 'Via Magna Grecia',
    quadrant: 'Asse Direzionale e Residenziale Porta Metronia – Piazza Tuscolo',
    cap: '00183',
    altitude: 'da 36 m s.l.m. a 30 m s.l.m. (verso Piazzale Metronio)',
    pressureStatic: '4,3 – 4,9 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Alto nella fascia bassa verso Via Sannio e Piazzale Metronio (alveo Acqua Mariana)',
    dominantBuildingEra: 'Grandi palazzi signorili anni ’30, ’40 e ’50 con studi professionali e negozi',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Magnagrecia / Via Magna Grecia',
      'Via Faleria',
      'Via Amiterno',
      'Via Luni',
      'Via Veio',
      'Via Cutilia',
      'Via Britannia (innesto)',
    ],
    landmarks: [
      'Viale alberato di Via Magna Grecia',
      'Incrocio Piazza Tuscolo / Via Britannia',
      'Piazzale Metronio (sbocco ovest)',
      'Poliambulatori e studi notarili di Via Magna Grecia',
    ],
    metaDescription:
      'Idraulico Via Magna Grecia Roma San Giovanni: pronto intervento H24 in 15-20 minuti per perdite acqua, disotturazioni, caldaie e cassette Geberit/Pucci. Chiama lo 06 8590 2384.',
    heroSummary:
      'Servizio idraulico e termoidraulico dedicato ai grandi condomini signorili, agli studi medici/legali e alle attività commerciali lungo Via Magna Grecia, Via Faleria, Via Veio e Via Luni.',
    techTable: [
      {
        parameter: 'Pressione Statica Rete Idrica Acea ATO2',
        value: '4,5 – 4,9 bar al piano strada (picchi notturni di 5,3 bar verso Piazzale Metronio)',
        note: 'Fortemente raccomandato riduttore di pressione tarato a 3,0 bar',
      },
      {
        parameter: 'Impianti di Scarico Condominiali',
        value: 'Colonne verticali in ghisa e fibrocemento/PVC incassate nei cavedi interni',
        note: 'Frequenti occlusioni ai cambi di pendenza tra 1° piano e piano negozi',
      },
      {
        parameter: 'Rubinetteria e Cassette Bagni Ristrutturati',
        value: 'Geberit Sigma/Unica, Pucci Eco e miscelatori termostatici incassati',
        note: 'Intasamento filtri cartucce termostatiche per calcare a 35°F',
      },
      {
        parameter: 'Falda Sotterranea e Cantine',
        value: 'Umidità di risalita e messa in carico fognaria nei locali interrati S1/S2',
        note: 'Installazione pompe sommerse con galleggiante magnetico verticale',
      },
      {
        parameter: 'Tempo di Arrivo Furgone Officina',
        value: '15 – 20 minuti su tutta Via Magna Grecia',
        note: 'Copertura H24 festivi inclusi',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione perdita su collettore complanare di riscaldamento sotto parquet',
        street: 'Via Magnagrecia',
        description:
          'Calo continuo di pressione della caldaia a condensazione in uno studio notarile al 2° piano con pavimento in parquet di rovere. Mediante termocamera FLIR E8-XT è stato individuato un trafilamento sui codoli del collettore complanare dentro la cassetta a muro, evitando di toccare il parquet.',
        outcome: 'Sostituzione O-ring e detentori nel collettore a muro in 70 minuti.',
      },
      {
        title: 'Sostituzione scaldabagno 80 litri e installazione riduttore di pressione',
        street: 'Via Veio',
        description:
          'Doppio guasto su boiler elettrico bucato dalla sovrapressione notturna (5,1 bar). Installazione nuovo boiler in classe B con riduttore di pressione Caleffi e giunti dielettrici.',
        outcome: 'Impianto protetto e garantito 24 mesi.',
      },
    ],
    faqs: [
      {
        question: 'Intervenite rapidamente negli studi professionali e negozi di Via Magna Grecia?',
        answer:
          'Sì, Via Magna Grecia ospita numerosi studi medici, odontoiatrici, notarili e attività commerciali: garantiamo interventi d’urgenza entro 15-20 minuti riducendo al minimo il fermo dell’attività.',
      },
      {
        question: 'Perché i flessibili dei bagni in Via Magna Grecia si rompono spesso di notte?',
        answer:
          'Scendendo da Piazza Tuscolo verso Piazzale Metronio la quota altimetrica diminuisce e la pressione dell’acqua sale fino a 5 bar durante la notte, quando i consumi del quartiere si azzerano. I vecchi flessibili non certificati cedono improvvisamente: li sostituiamo con flessibili inox AISI 316 abbinati a riduttori di pressione Caleffi.',
      },
    ],
  },
  {
    id: 6,
    slug: 'idraulico-porta-metronia',
    title: 'Idraulico Porta Metronia',
    h1: 'Idraulico Porta Metronia',
    shortName: 'Porta Metronia',
    quadrant: 'Cerniera Mura Aureliane / Celio – Appio-Latino (Nodo Metro C)',
    cap: '00183 / 00184',
    altitude: '29 – 34 m s.l.m. (fondovalle storico della Marrana) fino a 42 m sul Celio',
    pressureStatic: '4,6 – 5,3 bar nella conca di Piazzale Metronio',
    waterHardness: '35 °F',
    groundwaterRisk: 'Molto Elevato — Punto d’ingresso storico dell’Acqua Mariana attraverso le Mura Aureliane',
    dominantBuildingEra: 'Edilizia signorile anni ’30-’50 e villini storici verso il Celio e Via della Navicella',
    responseTime: '20 minuti',
    mainStreets: [
      'Piazzale Metronio',
      'Via della Ferratella in Laterano',
      'Via Gallia',
      'Via Pannonia',
      'Via Vetulonia',
      'Via Ipponio',
      'Via Druso',
      'Via della Navicella',
    ],
    landmarks: [
      'Porta Metronia e Mura Aureliane',
      'Nuova Stazione Archeologica Metro C Porta Metronia',
      'Salita di Via della Ferratella in Laterano',
      'Villa Celimontana (versante Navicella)',
    ],
    metaDescription:
      'Idraulico Porta Metronia Roma: pronto intervento H24 in Piazzale Metronio, Via Gallia, Via Pannonia, Via della Ferratella e Via Druso. Allagamenti, perdite e scarichi. Tel: 06 8590 2384.',
    heroSummary:
      'Presidio tecnico specializzato per il nodo idrogeologico di Porta Metronia, Piazzale Metronio, Via Gallia, Via Pannonia e Via della Ferratella: ricerca perdite con gas tracciante, pompe antiallagamento e manutenzione impianti in stabili signorili.',
    techTable: [
      {
        parameter: 'Idrogeologia Locale Piazzale Metronio',
        value: 'Conca d’ingresso dell’antico alveo dell’Acqua Mariana (quota 29,5 m s.l.m.)',
        note: 'Falda superficiale attiva e forti pressioni idriche di rete (> 5,0 bar)',
      },
      {
        parameter: 'Sollecitazioni del Sottosuolo',
        value: 'Consolidamenti profondi e gallerie della Linea C Metropolitana',
        note: 'Necessità di controllo periodico sulle giunzioni delle condotte interrate',
      },
      {
        parameter: 'Pressione Statica in Via Gallia e Via Pannonia',
        value: '4,8 – 5,3 bar',
        note: 'Obbligo tecnico di riduttori di pressione a sede compensata',
      },
      {
        parameter: 'Tipologia Impianti Bagno nei Condomini Signorili',
        value: 'Doppi servizi con cassette incassate Geberit/Pucci e rubinetteria termostatica',
        note: 'Riparazione conservativa senza demolizione di marmi e mosaici',
      },
      {
        parameter: 'Protezione Piani Seminterrati e Autorimesse',
        value: 'Valvole antiriflusso a clapet inox e stazioni di sollevamento',
        note: 'Conformità UNI EN 13564',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca perdita su condotta interrata in cortile condominiale vicino alle Mura',
        street: 'Via Gallia (tratto Piazzale Metronio)',
        description:
          'Bolletta idrica condominiale anomala (+18 metri cubi/giorno) senza tracce visibili in superficie, poiché l’acqua si disperdeva nel terreno sciolto di riporto storico. Individuata la rottura a 1,4 metri di profondità mediante iniezione di gas tracciante Formiergas.',
        outcome: 'Scavo puntuale di 80x80 cm e riparazione della tubazione in polietilene PE100.',
      },
      {
        title: 'Revisione cassetta Geberit Sigma 12 e sostituzione gruppo doccia incassato',
        street: 'Via Pannonia',
        description:
          'Intervento in appartamento di pregio per bloccare il trafilamento della cassetta WC e sostituire la cartuccia termostatica bloccata dal calcare.',
        outcome: 'Ripristino funzionale completo in 60 minuti senza toccare il rivestimento in travertino.',
      },
    ],
    faqs: [
      {
        question: 'Perché nella zona di Porta Metronia e Via Gallia le perdite sotterranee non affiorano subito in superficie?',
        answer:
          'Il sottosuolo tra Porta Metronia, Via della Ferratella e Via Sannio presenta riporti storici permeabili e cavità legate all’antico corso dell’Acqua Mariana. Quando una tubazione condominiale interrata si rompe, l’acqua viene assorbita verso la falda senza creare pozzanghere sul cortile: l’unico modo per trovarla senza scavare ovunque è usare il nostro sistema a gas tracciante Idrogeno/Azoto e geofono digitale.',
      },
      {
        question: 'In quanto tempo raggiungete Via Gallia, Via Pannonia e Via Vetulonia?',
        answer:
          'Siamo operativi sul posto in 15-20 minuti chiamando lo 06 8590 2384, 24 ore su 24.',
      },
    ],
  },
  {
    id: 7,
    slug: 'idraulico-porta-san-giovanni',
    title: 'Idraulico Porta San Giovanni',
    h1: 'Idraulico Porta San Giovanni',
    shortName: 'Porta San Giovanni',
    quadrant: 'Varco Storico Mura Aureliane / Piazzale Appio – Via Merulana',
    cap: '00183 / 00185',
    altitude: '45 – 48 m s.l.m.',
    pressureStatic: '3,1 – 3,7 bar (cali dinamici ai piani alti 6°–7°)',
    waterHardness: '34 °F',
    groundwaterRisk: 'Basso — Dorsale tufacea elevata lungo le Mura Aureliane',
    dominantBuildingEra: 'Grandi palazzi umbertini (1890–1925) e architettura storica post-unitaria',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazzale Appio',
      'Porta San Giovanni',
      'Viale Carlo Felice (innesto Porta San Giovanni)',
      'Via Merulana (tratto San Giovanni)',
      'Via Emanuele Filiberto (inizio)',
      'Via Sannio (innesto alto)',
      'Via La Spezia (inizio)',
    ],
    landmarks: [
      'Porta San Giovanni nelle Mura Aureliane (XVI secolo)',
      'Piazzale Appio',
      'Snodo interscambio Metro A / Metro C San Giovanni',
      'Basilica di San Giovanni in Laterano',
    ],
    metaDescription:
      'Idraulico Porta San Giovanni e Piazzale Appio Roma: pronto intervento H24 in 15-20 minuti per stabili umbertini, negozi e appartamenti. Perdite, scarichi e caldaie. Tel: 06 8590 2384.',
    heroSummary:
      'Interventi idraulici d’emergenza e manutenzione programmata nel nodo nevralgico di Porta San Giovanni e Piazzale Appio: specialisti in impianti d’epoca umbertini, braghe in piombo, autoclavi per piani alti e pronto intervento per attività commerciali.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Porta San Giovanni',
        value: '46,5 metri s.l.m.',
        note: 'Necessità di gruppi di spinta autoclave per edifici oltre il 5° piano',
      },
      {
        parameter: 'Materiali Impiantistici Storici',
        value: 'Piombo saldato a stagno, ferro zincato prima generazione e ghisa catramata',
        note: 'Raccordi di transizione speciali ottone/multistrato senza fiamma libera',
      },
      {
        parameter: 'Altezza Intersolaio Palazzi Umbertini',
        value: '3,60 – 4,30 metri per piano (controsoffitti con camera a canne)',
        note: 'Utilizzo di videoendoscopi per ispezionare i vani sopra i controsoffitti',
      },
      {
        parameter: 'Sistema di Scarico WC Storico',
        value: 'Batterie alte Catis con tubazione di cacciata esterna in rame/ottone e Pucci incasso',
        note: 'Riparazione in loco con ricambi originali',
      },
      {
        parameter: 'Accessibilità Logistica Varchi Mura Aureliane',
        value: 'Furgoni officina compatti conformi ZTL e corsie di accesso rapido',
        note: 'Arrivo garantito in 15-20 minuti',
      },
    ],
    caseStudies: [
      {
        title: 'Eliminazione infiltrazione in controsoffitto a camera a canne',
        street: 'Piazzale Appio',
        description:
          'Gocciolamento dal soffitto decorato di uno studio professionale al 3° piano. Tramite micro-telecamera endoscopica inserita nel rosone e prova a pressione differenziale al 4° piano, è stato individuato il cedimento del manicotto di scarico della vasca da bagno.',
        outcome: 'Sostituzione sifone e raccordo dal vano ispezione vasca senza demolire né soffitto né pavimento.',
      },
      {
        title: 'Sostituzione saracinesca generale d’appartamento con congelamento tubo',
        street: 'Via Emanuele Filiberto (angolo Porta San Giovanni)',
        description:
          'Impossibilità di chiudere la colonna montante condominiale per l’assenza del portiere. Utilizzato congelatore criogenico Rofrost a -30°C a monte della vecchia saracinesca bloccata e installata nuova valvola a sfera.',
        outcome: 'Sostituzione eseguita in 45 minuti senza interrompere l’acqua al condominio.',
      },
    ],
    faqs: [
      {
        question: 'Potete sostituire la chiave generale dell’acqua del mio appartamento a Porta San Giovanni se la chiave del condominio non chiude?',
        answer:
          'Sì: grazie alla macchina congelatrice criogenica Rofrost Turbo congeliamo a -30°C il tratto di tubo di ingresso per 20 minuti creando un tappo di ghiaccio sicuro, svitiamo la vecchia saracinesca bloccata e montiamo una valvola a sfera nuova senza dover chiudere l’acqua a tutto il palazzo.',
      },
      {
        question: 'Quali sono i tempi di arrivo a Piazzale Appio e Porta San Giovanni?',
        answer:
          'Siamo sul posto in 15-20 minuti dalla chiamata allo 06 8590 2384, a qualsiasi ora del giorno e della notte.',
      },
    ],
  },
  {
    id: 8,
    slug: 'idraulico-villa-fiorelli',
    title: 'Idraulico Villa Fiorelli',
    h1: 'Idraulico Villa Fiorelli',
    shortName: 'Villa Fiorelli',
    quadrant: 'Quadrante Residenziale Giardino Appio-Tuscolano (Villa Lais – Piazza Ragusa)',
    cap: '00182',
    altitude: '41 – 45 m s.l.m.',
    pressureStatic: '3,5 – 4,1 bar',
    waterHardness: '34 °F',
    groundwaterRisk: 'Basso — Banco di tufo litoide e pozzolane compatte',
    dominantBuildingEra: 'Villini cooperativi ferrovieri anni ’20–’30 e palazzine signorili anni ’50 attorno al parco',
    responseTime: '20 minuti',
    mainStreets: [
      'Piazza di Villa Fiorelli',
      'Via Enna',
      'Via Caltanissetta',
      'Via Avezzano',
      'Via Sulmona',
      'Via Chieti',
      'Via Teramo',
      'Via Acireale',
    ],
    landmarks: [
      'Parco pubblico di Piazza di Villa Fiorelli',
      'Parrocchia di Santa Maria Immacolata e San Giuseppe Benedetto Labre',
      'Stazione Ferroviaria Roma Tuscolana (adiacenze)',
      'Stazione Metro C Lodi (raccordo nord)',
    ],
    metaDescription:
      'Idraulico Villa Fiorelli Roma: pronto intervento H24 in Piazza di Villa Fiorelli, Via Enna, Via Sulmona, Via Avezzano e Via Caltanissetta. Perdite, caldaie e scarichi. Tel: 06 8590 2384.',
    heroSummary:
      'Assistenza idraulica specializzata per le palazzine storiche, i villini con giardino e i condomini che circondano Piazza di Villa Fiorelli, Via Enna, Via Avezzano, Via Sulmona e Via Chieti.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza di Villa Fiorelli',
        value: '43,0 metri s.l.m.',
        note: 'Buona stabilità piezometrica della rete idrica fino al 4° piano',
      },
      {
        parameter: 'Tipologia Edilizia Caratteristica',
        value: 'Palazzine signorili di 4–5 piani e villini d’epoca con giardini perimetrali',
        note: 'Frequenti linee idriche e fognarie interrate nei giardini privati',
      },
      {
        parameter: 'Criticità Scarichi Fognari Orizzontali',
        value: 'Intrusione apparati radicali (pini e lecci di Villa Fiorelli) nei collettori in gres',
        note: 'Fresatura meccanica radici e videoispezione digitale',
      },
      {
        parameter: 'Impianti Termici Prevalenti',
        value: 'Alta percentuale di caldaie murali autonome a condensazione su balconi e verande',
        note: 'Protezione antigelo tubi esterni e lavaggio chimico scambiatori (34°F)',
      },
      {
        parameter: 'Cassette WC Incassate',
        value: 'Pucci Sara/Eco e Geberit Sigma in appartamenti ristrutturati',
        note: 'Ricambi originali sempre a bordo',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione perdita su linea idrica giardino e sostituzione collettore',
        street: 'Piazza di Villa Fiorelli',
        description:
          'Perdita occulta di 300 litri/ora sulla derivazione interrata di un villino al piano rialzato. Localizzata con geofono Sewerin sotto il vialetto pavimentato in porfido nei pressi del contatore Acea.',
        outcome: 'Ripristino con giunto meccanico in ottone PN16 per polietilene e ripristino cubetti di porfido in 2 ore.',
      },
      {
        title: 'Lavaggio chimico impianto termosifoni e sostituzione valvole termostatiche',
        street: 'Via Avezzano',
        description:
          'Radiatori in ghisa freddi nella metà inferiore per accumulo di fanghi ferrosi (magnetite) e calcare. Eseguito lavaggio idropneumatico con additivo disperdente UNI 8065 e installato defangatore magnetico sottocaldaia.',
        outcome: 'Resa termica aumentata del 30% e riduzione immediata dei consumi di gas.',
      },
    ],
    faqs: [
      {
        question: 'Intervenite anche sui tubi interrati nei giardini privati e condominiali di Villa Fiorelli?',
        answer:
          'Sì, nei villini e nelle palazzine con spazio verde di Piazza di Villa Fiorelli, Via Enna e Via Sulmona individuiamo le perdite interrate tra il contatore Acea e lo stabile mediante geofono e gas tracciante, evitando di scavare l’intero giardino.',
      },
      {
        question: 'Quanto tempo impiegate per arrivare a Villa Fiorelli e Stazione Tuscolana?',
        answer:
          'Raggiungiamo Piazza di Villa Fiorelli e tutte le vie limitrofe in 15-20 minuti dalla chiamata allo 06 8590 2384.',
      },
    ],
  },
  {
    id: 9,
    slug: 'idraulico-via-taranto',
    title: 'Idraulico Via Taranto',
    h1: 'Idraulico Via Taranto',
    shortName: 'Via Taranto',
    quadrant: 'Dorsale Residenziale Intensiva San Giovanni – Tuscolano',
    cap: '00182',
    altitude: '42 – 45 m s.l.m.',
    pressureStatic: '3,4 – 4,0 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Basso',
    dominantBuildingEra: 'Grandi condomini intensivi anni ’40, ’50 e ’60 (7–9 piani)',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Taranto',
      'Via Monza',
      'Via Bergamo',
      'Via Cremona',
      'Via Voghera',
      'Via Casale Monferrato',
      'Via Biella',
      'Largo Brindisi (innesto nord)',
    ],
    landmarks: [
      'Asse commerciale e residenziale di Via Taranto',
      'Ex Deposito Atac / Piazza Ragusa (raccordo)',
      'Tribunale / Uffici Giudiziari e Poli Scolastici di Via Taranto',
      'Incrocio Via La Spezia / Largo Brindisi',
    ],
    metaDescription:
      'Idraulico Via Taranto Roma San Giovanni: pronto intervento H24 in 15-20 minuti su Via Taranto, Via Monza, Via Voghera e Via Casale Monferrato. Perdite, scarichi e caldaie. Tel: 06 8590 2384.',
    heroSummary:
      'Pronto intervento idraulico per i grandi fabbricati condominiali di 8-9 piani lungo Via Taranto, Via Monza, Via Bergamo, Via Voghera e Via Casale Monferrato: riparazione colonne montanti, disotturazioni, scaldabagni e cassette a incasso.',
    techTable: [
      {
        parameter: 'Tipologia Fabbricati Via Taranto',
        value: 'Condomini intensivi in cemento armato a 8–9 piani fuori terra (30–45 interni per scala)',
        note: 'Elevato carico contemporaneo sulle colonne di scarico e adduzione',
      },
      {
        parameter: 'Problematica Ricorrente Bagni Anni ’50',
        value: 'Corrosione delle scatole sifonate in piombo e dei rami secondari sotto vasca',
        note: 'Sostituzione con sifoni ispezionabili in polipropilene ad innesto',
      },
      {
        parameter: 'Pressione Idrica ai Piani Alti (7°–9° piano)',
        value: 'Dipendente da gruppi autoclave condominiali (spesso con cali nelle ore di punta)',
        note: 'Taratura inverter condominiali o installazione booster domestico',
      },
      {
        parameter: 'Durezza Calcare Acqua Fredda/Calda',
        value: '35 °F — Forte incrostazione su resistenze boiler elettrici e scambiatori caldaia',
        note: 'Manutenzione programmata con anodi al magnesio e polifosfati',
      },
      {
        parameter: 'Tempo di Risposta Emergenza Allagamento',
        value: '15 – 20 minuti H24',
        note: 'Congelatore tubi Rofrost a bordo per evitare fermi idrici all’intera scala',
      },
    ],
    caseStudies: [
      {
        title: 'Rifacimento parziale scarico bagno senza demolire l’intero pavimento',
        street: 'Via Taranto',
        description:
          'Infiltrazione al 5° piano causata dalla foratura della vecchia scatola sifonata in piombo del 6° piano. Rimossa la sola piastrella centrale, estratta la scatola in piombo e innestato nuovo pozzetto sifonato in PP con raccordi multi-diametro a tenuta elastomerica.',
        outcome: 'Intervento concluso in mezza giornata con ripristino immediato della mattonella di scorta.',
      },
      {
        title: 'Sostituzione scaldabagno a gas camera stagna su balcone verandato',
        street: 'Via Voghera (traversa Via Taranto)',
        description:
          'Vecchio scaldabagno a gas bloccato con scambiatore bucato. Installazione nuovo scaldacqua Low NOx con scarico fumi coassiale a norma UNI 7129 e filtro anticalcare magnetico.',
        outcome: 'Acqua calda subito disponibile e rilascio Dichiarazione di Conformità D.M. 37/2008.',
      },
    ],
    faqs: [
      {
        question: 'Nei grandi palazzi di Via Taranto potete lavorare su un tubo rotto senza togliere l’acqua a 40 famiglie?',
        answer:
          'Sì, utilizziamo il sistema di congelamento criogenico elettrico Rofrost che congela a -30°C la diramazione che entra nel tuo appartamento, permettendoci di sostituire la chiave d’arresto o riparare il tubo rotto senza dover chiudere la colonna montante dell’intero condominio.',
      },
      {
        question: 'Riparate le cassette incassate Pucci e Geberit in Via Taranto in giornata?',
        answer:
          'Assolutamente sì: abbiamo sul furgone tutte le campane, sfere, guarnizioni e galleggianti originali Pucci e Geberit per risolvere la perdita in 30-40 minuti senza rompere le mattonelle.',
      },
    ],
  },
  {
    id: 10,
    slug: 'idraulico-via-la-spezia',
    title: 'Idraulico Via La Spezia',
    h1: 'Idraulico Via La Spezia',
    shortName: 'Via La Spezia',
    quadrant: 'Asse Viario San Giovanni – Piazza Lodi (Nodo Metro C)',
    cap: '00182',
    altitude: '43 – 46 m s.l.m.',
    pressureStatic: '3,3 – 3,9 bar',
    waterHardness: '34 °F',
    groundwaterRisk: 'Basso — Terreno tufaceo attraversato dalle gallerie profonde Metro C',
    dominantBuildingEra: 'Edilizia intensiva anni ’30–’50 e complessi residenziali storici',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via La Spezia',
      'Piazza Camerino',
      'Via Oristano',
      'Via Nuoro',
      'Via Pozzuoli',
      'Via Nola',
      'Via Cesena',
      'Piazza Lodi (raccordo)',
    ],
    landmarks: [
      'Stazione Metro C Lodi / Via La Spezia',
      'Largo Brindisi (innesto ovest)',
      'Piazza Camerino',
      'Parrocchia di San Martino I Papa (adiacenze)',
    ],
    metaDescription:
      'Idraulico Via La Spezia e Piazza Lodi Roma San Giovanni: pronto intervento H24 in 15-20 minuti per perdite acqua, scarichi, Pucci/Geberit e caldaie. Chiama lo 06 8590 2384.',
    heroSummary:
      'Pronto intervento idraulico lungo Via La Spezia, Piazza Camerino, Via Oristano, Via Pozzuoli e Piazza Lodi: diagnosi strumentale di perdite occulte, disotturazione colonne e assistenza caldaie e scaldabagni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Asse Via La Spezia',
        value: '44,5 metri s.l.m.',
        note: 'Pressione statica equilibrata ai piani medi, ridotta ai piani 6°–8°',
      },
      {
        parameter: 'Dinamica Strutturale e Vibrazioni',
        value: 'Attraversamento sotterraneo della Linea C (tratta Lodi – San Giovanni)',
        note: 'Controllo giunti filettati in ferro zincato e innesti colonne',
      },
      {
        parameter: 'Tipologia Tubazioni Bagni Ristrutturati Anni ’80–’90',
        value: 'Acciaio zincato, rame ricotto rivestito e polipropilene verde a polifusione (PPR)',
        note: 'Attrezzatura per saldatura a polifusione e pressfitting multistrato a bordo',
      },
      {
        parameter: 'Durezza Acqua Potabile',
        value: '34 °F',
        note: 'Disincrostazione chimica scambiatori e sostituzione cartucce miscelatori',
      },
      {
        parameter: 'Reperibilità Pronto Intervento',
        value: 'H24 — 365 giorni l’anno con arrivo in 15-20 minuti',
        note: 'Centralino diretto 06 8590 2384',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione tubo in polipropilene verde (PPR) fessurato sotto traccia',
        street: 'Via La Spezia',
        description:
          'Perdita sulla linea acqua calda realizzata negli anni ’90 in PPR verde saldato a polifusione. Localizzata la micro-perdita su un manicotto a T con termocamera FLIR, aperta una sola piastrella e saldato un nuovo raccordo tramite polifusore elettronico a 260°C.',
        outcome: 'Tenuta collaudata a 8 bar senza dover rifare l’intero bagno.',
      },
      {
        title: 'Disotturazione WC e colonna secondaria in appartamento al 3° piano',
        street: 'Via Oristano (traversa Via La Spezia)',
        description:
          'Blocco completo del vaso WC causato dal distacco di una gabbietta profumatore finita nel sifone a S della braga. Recuperata meccanicamente con sonda a imbuto Rothenberger senza rompere il sanitario.',
        outcome: 'Ripristino immediato dello scarico in 35 minuti.',
      },
    ],
    faqs: [
      {
        question: 'Avete l’attrezzatura per riparare anche i tubi verdi in plastica saldata (polipropilene PPR) diffusi negli appartamenti ristrutturati di Via La Spezia?',
        answer:
          'Sì, molti appartamenti ristrutturati tra il 1990 e il 2005 in Via La Spezia e Piazza Lodi montano tubazioni in polipropilene verde (Aquatherm/Coes). I nostri furgoni sono equipaggiati sia con saldatori a polifusione a matrici teflonate sia con raccordi meccanici di transizione PPR/Multistrato.',
      },
      {
        question: 'Quanto costa chiamare un idraulico urgente in Via La Spezia?',
        answer:
          'Forniamo sempre una stima chiara al telefono allo 06 8590 2384 e confermiamo il prezzo scritto prima di toccare l’impianto.',
      },
    ],
  },
  {
    id: 11,
    slug: 'idraulico-piazza-asti',
    title: 'Idraulico Piazza Asti',
    h1: 'Idraulico Piazza Asti',
    shortName: 'Piazza Asti',
    quadrant: 'Cuore Residenziale Tuscolano-San Giovanni (Piazza Asti – Via Aosta)',
    cap: '00182',
    altitude: '40 – 43 m s.l.m.',
    pressureStatic: '3,6 – 4,2 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Basso',
    dominantBuildingEra: 'Grandi complessi condominiali anni ’30, ’40 e ’50 con cortili alberati',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazza Asti',
      'Via Aosta (tratto Piazza Asti)',
      'Via Pinerolo',
      'Via Ivrea',
      'Via Susa',
      'Via Moncalieri',
      'Via Saluzzo',
      'Via Acqui',
    ],
    landmarks: [
      'Piazza Asti',
      'Asse commerciale di Via Aosta',
      'Raccordo verso Piazza dei Re di Roma e Piazza Ragusa',
      'Scuole storiche del quadrante Piemonte/Asti',
    ],
    metaDescription:
      'Idraulico Piazza Asti Roma San Giovanni: pronto intervento H24 in Piazza Asti, Via Aosta, Via Pinerolo, Via Ivrea e Via Susa. Perdite acqua, scarichi, caldaie e Pucci. Tel: 06 8590 2384.',
    heroSummary:
      'Servizio idraulico di quartiere per Piazza Asti e tutte le vie a toponomastica piemontese (Via Aosta, Via Pinerolo, Via Ivrea, Via Susa, Via Saluzzo): riparazione perdite non distruttiva, disotturazioni e assistenza caldaie/scaldabagni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza Asti',
        value: '41,5 metri s.l.m.',
        note: 'Pressione di rete stabile intorno a 3,8 bar ai piani bassi',
      },
      {
        parameter: 'Configurazione Impianti Condominiali',
        value: 'Grandi fabbricati a corte chiusa con contatori divisionali spesso nei cavedi o in nicchia',
        note: 'Sostituzione valvole d’arresto e collettori complanari',
      },
      {
        parameter: 'Cassette di Scarico WC Prevalenti',
        value: 'Pucci Sara, Pucci Eco, Geberit Twinline e batterie Catis nei bagni non ristrutturati',
        note: 'Riparazione immediata da placca senza rottura mattonelle',
      },
      {
        parameter: 'Durezza Calcare Acqua Rete Acea',
        value: '35 °F',
        note: 'Protezione caldaie con dosatori di polifosfati e defangatori magnetici',
      },
      {
        parameter: 'Tempo Medio di Arrivo',
        value: '15 – 20 minuti',
        note: 'Presidio fisso nel quadrante Re di Roma / Piazza Asti',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione cassetta Pucci Sara e sostituzione rubinetto d’arresto interno',
        street: 'Piazza Asti',
        description:
          'Acqua che scorreva continuamente nel vaso WC con rubinetto d’arresto interno alla cassetta bloccato dal calcare. Sostituito il rubinetto originale Pucci da 3/8”, il galleggiante silenzioso e la sfera con sede O-ring.',
        outcome: 'Cassetta rimessa a nuovo in 40 minuti senza toccare il rivestimento del bagno.',
      },
      {
        title: 'Disotturazione scarico cucina intasato a 6 metri nel muro',
        street: 'Via Pinerolo (angolo Piazza Asti)',
        description:
          'Tubazione da Ø 40 mm completamente occlusa da depositi di grasso e fondi di caffè lungo la parete divisoria cucina-bagno. Pulizia integrale con spirale flessibile da 10 mm Rothenberger.',
        outcome: 'Deflusso immediato ripristinato senza rompere il muro.',
      },
    ],
    faqs: [
      {
        question: 'Quanto tempo ci vuole per avere un idraulico a Piazza Asti o in Via Pinerolo?',
        answer:
          'Essendo a meno di 400 metri dal nostro presidio di Piazza dei Re di Roma, arriviamo a Piazza Asti, Via Ivrea, Via Susa e Via Pinerolo in 15-20 minuti dalla chiamata allo 06 8590 2384.',
      },
      {
        question: 'Lo scarico del lavandino della cucina gorgoglia quando scarica la lavastoviglie: cosa significa?',
        answer:
          'Il gorgoglio indica che la tubazione secondaria a muro (da 40 o 50 mm) ha la sezione ridotta oltre il 70% da incrostazioni di sapone e calcare: l’aria non riesce a sfiatare e l’acqua rischia di traboccare a breve. Interveniamo con sonda elettromeccanica flessibile per pulire l’intera tratta fino alla colonna.',
      },
    ],
  },
  {
    id: 12,
    slug: 'idraulico-via-sannio-largo-brindisi',
    title: 'Idraulico Via Sannio Largo Brindisi',
    h1: 'Idraulico Via Sannio Largo Brindisi',
    shortName: 'Via Sannio e Largo Brindisi',
    quadrant: 'Conca dell’Acqua Mariana / Via Sannio – Largo Brindisi',
    cap: '00183 / 00182',
    altitude: '31 – 36 m s.l.m. (depressione storica della Marrana)',
    pressureStatic: '4,4 – 5,1 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Molto Elevato — Alveo sotterraneo intubato dell’Acqua Mariana sotto Via Sannio',
    dominantBuildingEra: 'Edilizia intensiva anni ’30–’60 con profondi livelli interrati, garage e magazzini',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Sannio',
      'Largo Brindisi',
      'Via Fregene',
      'Via Locri',
      'Via Sibari',
      'Via Eraclea',
      'Via Corfinio',
      'Via Gallia (tratto basso Via Sannio)',
    ],
    landmarks: [
      'Storico Mercato di Via Sannio e giardini di Porta Asinaria',
      'Largo Brindisi (snodo tra Via Appia Nuova, Via Taranto e Via La Spezia)',
      'Porta Asinaria e Mura Aureliane',
      'Stazione Metro C San Giovanni (uscita Via Sannio)',
    ],
    metaDescription:
      'Idraulico Via Sannio e Largo Brindisi Roma San Giovanni: pronto intervento H24 in 15-20 minuti per allagamenti, perdite acqua, scarichi e caldaie. Chiama lo 06 8590 2384.',
    heroSummary:
      'Presidio idraulico specializzato per la fascia di Via Sannio, Largo Brindisi, Via Locri e Via Corfinio: gestione di alte pressioni di rete, pompaggio allagamenti nei piani interrati sull’alveo dell’Acqua Mariana, ricerca perdite e disotturazioni.',
    techTable: [
      {
        parameter: 'Idrogeologia Critica Via Sannio',
        value: 'Tracciato coincidente con il collettore sotterraneo dell’Acqua Mariana (Marrana)',
        note: 'Rischio elevato di rigurgito fognario nei seminterrati durante nubifragi',
      },
      {
        parameter: 'Pressione Statica Rete Idrica Acea ATO2',
        value: '4,5 – 5,1 bar (soggetta a picchi notturni)',
        note: 'Installazione riduttori di pressione e ammortizzatori colpo d’ariete',
      },
      {
        parameter: 'Sistemi di Pompaggio Autorimesse e Magazzini',
        value: 'Stazioni di sollevamento acque meteoriche e nere con doppia pompa sommersa',
        note: 'Manutenzione e sostituzione d’urgenza pompe Lowara e Flygt',
      },
      {
        parameter: 'Impianti Condominiali Largo Brindisi',
        value: 'Palazzi ad alta densità con colonne verticali in ferro zincato e ghisa',
        note: 'Ricerca perdite strumentale non distruttiva nei cavedi',
      },
      {
        parameter: 'Tempo di Intervento in Emergenza',
        value: '15 – 20 minuti H24',
        note: 'Automezzi attrezzati con motopompe e congelatori tubi',
      },
    ],
    caseStudies: [
      {
        title: 'Sostituzione d’emergenza pompa sommersa bruciata in autorimessa interrata',
        street: 'Via Sannio',
        description:
          'Durante un forte temporale estivo, una delle due pompe della vasca di raccolta acque di rampa si è bloccata con il salvavita scattato, facendo salire il livello dell’acqua nei box. Intervento in 20 minuti con pompa sommersa mobile di soccorso e sostituzione dell’elettropompa guasta con una nuova Lowara DOMO 10 Vortex.',
        outcome: 'Autorimessa messa in sicurezza evitando l’allagamento delle vetture.',
      },
      {
        title: 'Riparazione perdita acqua su colonna montante in negozio a Largo Brindisi',
        street: 'Largo Brindisi',
        description:
          'Infiltrazione copiosa dal soffitto del retrobottega proveniente dal manicotto di derivazione del 1° piano. Individuate le coordinate esatte con termocamera e geofono e riparato il raccordo a pressare.',
        outcome: 'Perdita bloccata in 90 minuti senza fermare l’attività commerciale.',
      },
    ],
    faqs: [
      {
        question: 'Perché i box e le cantine di Via Sannio hanno spesso problemi di allagamento e riflusso fognario?',
        answer:
          'Sotto Via Sannio scorre canalizzato l’antico fosso dell’Acqua Mariana, che raccoglie le acque meteoriche provenienti dai Colli Albani e dal quadrante Appio-Tuscolano prima di attraversare le Mura Aureliane a Porta Metronia. In caso di piogge torrenziali il collettore entra in pressione: per proteggere cantine, taverne e garage installiamo valvole antiriflusso a clapet in ghisa/inox e gruppi di pompaggio con batterie tampone.',
      },
      {
        question: 'Quanto impiegate per arrivare a Largo Brindisi e Via Sannio?',
        answer:
          'Siamo operativi sul posto in 15-20 minuti H24 chiamando lo 06 8590 2384.',
      },
    ],
  },
  {
    id: 13,
    slug: 'idraulico-piazza-zama-via-latina',
    title: 'Idraulico Piazza Zama Via Latina',
    h1: 'Idraulico Piazza Zama Via Latina',
    shortName: 'Piazza Zama e Via Latina',
    quadrant: 'Conca Bassa Appio-Latino / Piazza Zama – Via Latina – Parco Caffarella',
    cap: '00183 / 00179',
    altitude: '25 – 30 m s.l.m. (quota più bassa del quadrante Appio-Latino)',
    pressureStatic: '4,8 – 5,6 bar (con picchi notturni fino a 6,0 bar)',
    waterHardness: '35 – 36 °F',
    groundwaterRisk: 'Alto — Conca geomorfologica verso la Valle della Caffarella e dell’Almone',
    dominantBuildingEra: 'Condomini intensivi signorili e medio-borghesi anni ’50 e ’60',
    responseTime: '20-25 minuti',
    mainStreets: [
      'Piazza Zama',
      'Via Latina',
      'Via Acaia',
      'Via Britannia',
      'Via Imera',
      'Via Satrico',
      'Via Collazia',
      'Via Vetulonia (tratto Piazza Zama)',
    ],
    landmarks: [
      'Piazza Zama (snodo radiale a 7 vie)',
      'Asse storico di Via Latina e Parco Regionale dell’Appia Antica / Caffarella',
      'Piazza Galeria',
      'Via Britannia e Via Acaia',
    ],
    metaDescription:
      'Idraulico Piazza Zama e Via Latina Roma: pronto intervento H24 su Via Britannia, Via Acaia, Via Imera e Via Satrico. Riduttori di pressione, perdite, scarichi e caldaie. Tel: 06 8590 2384.',
    heroSummary:
      'Pronto intervento idraulico per Piazza Zama, Via Latina, Via Britannia, Via Acaia, Via Imera e Via Satrico: specialisti nella gestione dell’altissima pressione idrica locale (5,5 bar), ricerca perdite occulte, riparazione cassette WC e disotturazione scarichi.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza Zama / Via Imera',
        value: '26,0 – 28,5 metri s.l.m. (depressione piezometrica massima)',
        note: 'Pressione statica di rete tra le più alte di Roma Sud-Est (fino a 5,6 bar)',
      },
      {
        parameter: 'Patologia Idraulica Dominante nel Quadrante',
        value: 'Scoppio flessibili, rottura valvole 3 bar caldaie e trafilamento continuo cassette WC',
        note: 'Soluzione definitiva: riduttore di pressione Caleffi a sede compensata tarato a 3 bar',
      },
      {
        parameter: 'Tipologia Tubazioni Condominii Anni ’50–’60',
        value: 'Colonne in ferro zincato e diramazioni bagno in ferro/piombo o multistrato recente',
        note: 'Frequenti colpi d’ariete nelle colonne verticali',
      },
      {
        parameter: 'Durezza dell’Acqua Erogata',
        value: '35 – 36 °F',
        note: 'Rapida calcificazione di scaldabagni elettrici e scambiatori caldaia',
      },
      {
        parameter: 'Tempo di Arrivo Pronto Intervento',
        value: '20 – 25 minuti H24',
        note: 'Chiamata diretta allo 06 8590 2384',
      },
    ],
    caseStudies: [
      {
        title: 'Installazione riduttore di pressione generale e salvataggio caldaia in Via Latina',
        street: 'Via Latina (altezza Piazza Galeria)',
        description:
          'L’utente lamentava la rottura di due scaldabagni e il gocciolamento perenne della cassetta Geberit in 3 anni. La misurazione manometrica ha rilevato 5,7 bar di pressione statica. Installato riduttore Caleffi serie 5350 con manometro a glicerina tarato a 3,0 bar.',
        outcome: 'Pressione stabilizzata a 3,0 bar e fine definitiva dei guasti da sovrapressione.',
      },
      {
        title: 'Ricerca perdita occulta sotto pavimento in marmo botticino anni ’50',
        street: 'Piazza Zama',
        description:
          'Infiltrazione sul soffitto del portone condominiale proveniente dall’appartamento del 1° piano. Localizzata con geofono Sewerin Aquaphon A200 la foratura puntiforme su tubo in ferro da 1/2” nel disimpegno.',
        outcome: 'Riparazione eseguita rimuovendo una sola lastra di marmo poi ricollocata intatta.',
      },
    ],
    faqs: [
      {
        question: 'Perché nelle case di Piazza Zama, Via Britannia, Via Acaia e Via Latina si rompono continuamente i flessibili e le valvole delle caldaie?',
        answer:
          'Piazza Zama e Via Imera si trovano in una conca altimetrica a soli 26 metri s.l.m. (20 metri più in basso rispetto a Porta San Giovanni). Per il principio dei vasi comunicanti, la pressione statica dell’acquedotto Acea in questa zona raggiunge i 5,0 - 5,8 bar, con colpi d’ariete notturni che superano gli 8 bar. Qualsiasi impianto domestico privo di un riduttore di pressione a sede compensata subisce rotture continue di flessibili, galleggianti WC e gruppi idraulici caldaia.',
      },
      {
        question: 'Quanto costa installare un riduttore di pressione a Piazza Zama o Via Latina?',
        answer:
          'L’installazione di un riduttore di pressione professionale Caleffi con manometro parte da € 120 e mette in sicurezza l’intero appartamento in meno di un’ora.',
      },
    ],
  },
  {
    id: 14,
    slug: 'idraulico-porta-maggiore-raccordo-san-giovanni',
    title: 'Idraulico Porta Maggiore Raccordo San Giovanni',
    h1: 'Idraulico Porta Maggiore Raccordo San Giovanni',
    shortName: 'Porta Maggiore e Raccordo San Giovanni',
    quadrant: 'Snodo Storico Degli Acquedotti Romani / Santa Croce in Gerusalemme',
    cap: '00185 / 00182',
    altitude: '46 – 49 m s.l.m.',
    pressureStatic: '3,0 – 3,6 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Basso — Alta dorsale tufacea lungo il tracciato degli acquedotti antichi',
    dominantBuildingEra: 'Edilizia umbertina di inizio ’900 (Santa Croce) e stabili anni ’30 (Via Statilia / Via Eleniana)',
    responseTime: '20-25 minuti',
    mainStreets: [
      'Piazza di Porta Maggiore',
      'Piazza di Santa Croce in Gerusalemme',
      'Via Eleniana',
      'Via Statilia',
      'Via Germano Sommeiller',
      'Via Sessoriana',
      'Via Ludovico di Savoia',
      'Via Monza (raccordo)',
    ],
    landmarks: [
      'Porta Maggiore (antico castellum aquae dell’Acqua Claudia e Anio Novus)',
      'Basilica di Santa Croce in Gerusalemme',
      'Anfiteatro Castrense e Mura Aureliane',
      'Acquedotto Neroniano lungo Via Statilia',
    ],
    metaDescription:
      'Idraulico Porta Maggiore e Santa Croce in Gerusalemme Roma: pronto intervento H24 in Via Statilia, Via Eleniana, Via Sommeiller e Piazza Santa Croce. Tel: 06 8590 2384.',
    heroSummary:
      'Servizio idraulico di pronto intervento per il quadrante di Piazza di Santa Croce in Gerusalemme, Porta Maggiore, Via Statilia, Via Eleniana e Via Germano Sommeiller: manutenzione impianti in stabili umbertini, ricerca perdite e disotturazioni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza Santa Croce / Porta Maggiore',
        value: '47,5 metri s.l.m. (punto più elevato del quadrante)',
        note: 'Soffitti alti umbertini: pressione ai piani 5°–6° spesso < 1,3 bar',
      },
      {
        parameter: 'Vibrazioni Superficiali',
        value: 'Intenso nodo tramviario e ferroviario di Porta Maggiore',
        note: 'Usura accelerata delle giunzioni rigide in piombo e ghisa',
      },
      {
        parameter: 'Tipologia Edilizia Via Statilia / Via Sommeiller',
        value: 'Palazzi d’epoca anni ’10–’30 e villini storici con impianti stratificati',
        note: 'Interventi diagnostici con termocamera FLIR e videoendoscopio',
      },
      {
        parameter: 'Sistemi di Scarico Bagno',
        value: 'Cassette esterne alte Catis, Pucci in rame e sanitari con scarico a pavimento',
        note: 'Ricambistica storica completa a bordo furgone',
      },
      {
        parameter: 'Durezza Calcare Acqua Acea',
        value: '35 °F',
        note: 'Lavaggio chimico scambiatori caldaie e decalcificazione boiler',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione colonna di scarico in ghisa fessurata dalle vibrazioni tramviarie',
        street: 'Via Eleniana (adiacenze Porta Maggiore)',
        description:
          'Perdita verticale nel cavedio di un palazzo del 1914 causata dalla fessurazione di un bicchiere della colonna in ghisa da Ø 100 mm. Sezionamento del tratto lesionato e inserimento di tronco in polipropilene fonoassorbente triplo strato con giunti antisismici Straub/fernco.',
        outcome: 'Riparazione certificata e insonorizzata eseguita in 4 ore.',
      },
      {
        title: 'Sostituzione passo rapido bloccato e revisione batteria Catis',
        street: 'Via Germano Sommeiller',
        description:
          'Intervento in appartamento storico al 4° piano per bloccare una perdita continua sul vaso WC senza demolire le piastrelle originali.',
        outcome: 'Rettifica sede passo rapido e sostituzione guarnizioni in 45 minuti.',
      },
    ],
    faqs: [
      {
        question: 'Operate anche nella zona tra Santa Croce in Gerusalemme, Via Statilia e Porta Maggiore?',
        answer:
          'Sì, copriamo stabilmente tutto il raccordo storico tra San Giovanni in Laterano, Piazza di Santa Croce in Gerusalemme, Via Statilia, Via Sommeiller e Porta Maggiore con tempi di arrivo di 20-25 minuti.',
      },
      {
        question: 'Come risolvete i cali di pressione ai piani alti dei palazzi umbertini di Via Sommeiller e Piazza Santa Croce?',
        answer:
          'Essendo a quasi 48 metri s.l.m. con palazzi dagli alti soffitti (oltre 4 metri per piano), gli ultimi piani soffrono spesso di bassa pressione. Installiamo gruppi di aumento pressione domestici ultrasilenziosi a inverter o revisioniamo l’autoclave condominiale.',
      },
    ],
  },
  {
    id: 15,
    slug: 'idraulico-piazza-epiro-porta-latina',
    title: 'Idraulico Piazza Epiro Porta Latina',
    h1: 'Idraulico Piazza Epiro Porta Latina',
    shortName: 'Piazza Epiro e Porta Latina',
    quadrant: 'Quadrante Signorile Metronio – Porta Latina – Mura Aureliane Sud',
    cap: '00183 / 00179',
    altitude: '28 – 38 m s.l.m. (pendenza da Porta Latina verso Piazza Epiro e Via Lusitania)',
    pressureStatic: '4,2 – 5,0 bar',
    waterHardness: '34 – 35 °F',
    groundwaterRisk: 'Medio-Alto nella conca di Piazza Epiro / Via Lusitania',
    dominantBuildingEra: 'Palazzine signorili anni ’30–’50, attici con terrazzi e villini vicino alle Mura',
    responseTime: '20 minuti',
    mainStreets: [
      'Piazza Epiro',
      'Via di Porta Latina',
      'Via Lusitania',
      'Via Mauritania',
      'Via Numidia',
      'Via Aquitania',
      'Via Vulci',
      'Piazza Galeria (innesto)',
    ],
    landmarks: [
      'Mercato Coperto e Piazza Epiro',
      'Porta Latina e Basilica di San Giovanni a Porta Latina',
      'Parco degli Scipioni e Colombario di Pomponio Hylas',
      'Mura Aureliane tratto Metronia – Latina',
    ],
    metaDescription:
      'Idraulico Piazza Epiro e Porta Latina Roma: pronto intervento H24 in Via Lusitania, Via di Porta Latina, Via Numidia e Via Mauritania. Ricerca perdite non distruttiva e scarichi. Tel: 06 8590 2384.',
    heroSummary:
      'Servizio idraulico di alta precisione per le residenze signorili, i villini e gli attici di Piazza Epiro, Via di Porta Latina, Via Lusitania, Via Mauritania e Via Numidia: diagnostica termografica senza demolizioni, riparazione Geberit/Pucci e assistenza termica.',
    techTable: [
      {
        parameter: 'Morfologia e Pressione Rete Idrica',
        value: 'Da 38 m s.l.m. (Porta Latina) a 28 m s.l.m. (Piazza Epiro) — Pressione 4,2–5,0 bar',
        note: 'Controllo e regolazione pressione per proteggere rubinetterie di pregio',
      },
      {
        parameter: 'Tipologia Finiture Interni Prevalenti',
        value: 'Parquet inchiodato o incollato, marmi policromi, mosaici e sanitari sospesi di design',
        note: 'Protocollo tassativo di ricerca perdite non distruttiva (FLIR + Formiergas)',
      },
      {
        parameter: 'Terrazzi Panoramici e Giardini Pensili',
        value: 'Impianti d’irrigazione automatica e pluviali incassati nei parapetti',
        note: 'Collaudo separato linee idriche in pressione e scarichi meteorici con traccianti UV',
      },
      {
        parameter: 'Cassette WC e Rubinetterie Incassate',
        value: 'Geberit Sigma 8/12, Pucci Eco, rubinetteria termostatica Grohe/Zucchetti/Gessi',
        note: 'Manutenzione dalla placca frontale senza scalfire i rivestimenti',
      },
      {
        parameter: 'Tempo di Arrivo Pronto Intervento',
        value: '20 minuti H24',
        note: 'Furgone officina attrezzato per interventi puliti in abitazioni di pregio',
      },
    ],
    caseStudies: [
      {
        title: 'Localizzazione perdita su impianto d’irrigazione terrazzo attico senza smantellare le fioriere',
        street: 'Via di Porta Latina',
        description:
          'Infiltrazione sul soffitto del salone sottostante un grande terrazzo piantumato. Attraverso test manometrico a settori e iniezione di gas tracciante N2/H2, è stato individuato il gomito a compressione lesionato sotto una singola lastra del camminamento esterno.',
        outcome: 'Riparazione eseguita in 90 minuti senza svuotare le vasche in muratura del terrazzo.',
      },
      {
        title: 'Disotturazione scarico cucina e sostituzione tritarifiuti bloccato',
        street: 'Piazza Epiro (angolo Via Lusitania)',
        description:
          'Blocco completo dello scarico lavello in isola centrale cucina. Rimozione dell’ostruzione con spirale flessibile da 10 mm e ripristino del sifone autopulente.',
        outcome: 'Cucina operativa in 50 minuti con massima pulizia dell’ambiente.',
      },
    ],
    faqs: [
      {
        question: 'Come intervenite negli appartamenti di pregio di Via di Porta Latina e Piazza Epiro per non danneggiare parquet e marmi?',
        answer:
          'I nostri tecnici operano con copriscarpe, teli protettivi impermeabili, aspiratori industriali e strumentazione diagnostica non distruttiva (termocamera FLIR E8-XT, geofono Sewerin e gas tracciante). Non eseguiamo mai rotture esplorative alla cieca.',
      },
      {
        question: 'Riparate anche impianti idraulici di terrazzi, fioriere e giardini nella zona del Parco degli Scipioni e Porta Latina?',
        answer:
          'Sì, siamo specializzati nell’individuazione di perdite occulte su impianti d’irrigazione di terrazzi e giardini, sostituzione di centraline, elettrovalvole, riduttori di pressione e disostruzione di pozzetti pluviali.',
      },
    ],
  },
  {
    id: 16,
    slug: 'idraulico-manzoni-viale-carlo-felice',
    title: 'Idraulico Manzoni Viale Carlo Felice',
    h1: 'Idraulico Manzoni Viale Carlo Felice',
    shortName: 'Manzoni e Viale Carlo Felice',
    quadrant: 'Asse Monumentale Viale Carlo Felice – Piazza Vittorio / Manzoni',
    cap: '00185',
    altitude: '46 – 49 m s.l.m.',
    pressureStatic: '3,0 – 3,6 bar',
    waterHardness: '35 °F',
    groundwaterRisk: 'Basso — Altopiano tufaceo Esquilino-Lateranense',
    dominantBuildingEra: 'Grandi palazzi umbertini di fine ’800 e ’900 (Viale Carlo Felice, Via Emanuele Filiberto, Via Tasso)',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Viale Carlo Felice',
      'Viale Manzoni (tratto San Giovanni)',
      'Via Emanuele Filiberto',
      'Via Ludovico di Savoia',
      'Via Principe Eugenio (innesto Manzoni)',
      'Via Conte Verde',
      'Via Santa Croce in Gerusalemme',
      'Piazza Dante (raccordo)',
    ],
    landmarks: [
      'Giardini monumentali di Viale Carlo Felice lungomura',
      'Stazione Metro A Manzoni e Museo Storico della Liberazione (Via Tasso)',
      'Via Emanuele Filiberto e Piazza Dante',
      'Mura Aureliane tra Porta San Giovanni e Porta Maggiore',
    ],
    metaDescription:
      'Idraulico Manzoni e Viale Carlo Felice Roma San Giovanni: pronto intervento H24 in Via Emanuele Filiberto, Viale Manzoni e Piazza Dante. Perdite, scarichi, caldaie e Pucci/Catis. Tel: 06 8590 2384.',
    heroSummary:
      'Pronto intervento idraulico lungo Viale Carlo Felice, Viale Manzoni, Via Emanuele Filiberto e Piazza Dante: specialisti nel risanamento di impianti idrici e scarichi storici in piombo e ghisa nei palazzi umbertini, ricerca perdite e assistenza caldaie.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Viale Carlo Felice / Manzoni',
        value: '47,0 – 48,5 metri s.l.m.',
        note: 'Necessità di pompe autoclave efficienti per i piani 5°, 6° e attici',
      },
      {
        parameter: 'Architettura e Impianti Palazzi Umbertini (1880–1920)',
        value: 'Murature portanti in tufo da 60–80 cm, solai a voltine e cavedi interni profondi',
        note: 'Uso di videoendoscopi e gas tracciante per ispezioni non invasive',
      },
      {
        parameter: 'Tubazioni di Scarico Storiche',
        value: 'Braghe in piombo lavorato a mano e colonne in ghisa con giunti piombati',
        note: 'Divieto assoluto di idrogetto alta pressione; uso esclusivo di sonde meccaniche',
      },
      {
        parameter: 'Sistemi di Risciacquo WC',
        value: 'Batterie alte Catis, cassette incasso Pucci in rame e Geberit in bagni ristrutturati',
        note: 'Revisione completa senza demolizione delle piastrelle',
      },
      {
        parameter: 'Tempo di Arrivo Furgone Officina',
        value: '15 – 20 minuti H24',
        note: 'Copertura continua per residenze, hotel, B&B e uffici',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca e riparazione perdita su colonna montante in cavedio umbertino',
        street: 'Viale Carlo Felice',
        description:
          'Macchia di umidità estesa lungo la parete del vano scala dal 4° al 2° piano. Attraverso ispezione videoendoscopica e termografia FLIR è stata localizzata la fessurazione di un raccordo a T in ferro zincato del 3° piano.',
        outcome: 'Sostituzione mirata del nodo idraulico in 2 ore e mezza con raccordi multistrato a pressare.',
      },
      {
        title: 'Disotturazione scarico doccia e lavabo in struttura alberghiera / B&B',
        street: 'Via Emanuele Filiberto (altezza Stazione Manzoni)',
        description:
          'Intasamento ricorrente di tre bagni collegati alla stessa dorsale secondaria per accumulo di calcare e residui saponosi. Disostruzione meccanica con Rothenberger R600 e lavaggio enzimatico.',
        outcome: 'Dorsale completamente ripulita in 60 minuti con garanzia di 12 mesi.',
      },
    ],
    faqs: [
      {
        question: 'Siete specializzati negli impianti idraulici dei palazzi umbertini di Viale Carlo Felice e Via Emanuele Filiberto?',
        answer:
          'Sì, conosciamo a fondo la stratificazione impiantistica dei palazzi costruiti tra fine Ottocento e inizio Novecento tra Porta San Giovanni, Viale Carlo Felice, Via Emanuele Filiberto e Piazza Dante: interveniamo su tubazioni in piombo, ferro zincato, ghisa e batterie Catis/Pucci con tecniche conservative che evitano demolizioni distruttive.',
      },
      {
        question: 'In quanto tempo arrivate in zona Manzoni e Viale Carlo Felice?',
        answer:
          'Raggiungiamo qualsiasi civico di Viale Carlo Felice, Via Emanuele Filiberto e Viale Manzoni entro 15-20 minuti dalla chiamata allo 06 8590 2384, 24 ore su 24.',
      },
    ],
  },
];

