import { MY_NAAT_LINKS } from '../myNaatLinks';

export interface NaatTrack {
  id: string;
  title: string;
  arabicTitle: string;
  reciter: string;
  category: string;
  audioUrl: string;
  durationApprox?: string;
  lyrics: {
    arabic: string;
    transliteration: string;
    english: string;
  }[];
  isCustom?: boolean;
}

export const DEFAULT_NAAT_TRACKS: NaatTrack[] = [
  {
    id: 'tala-al-badru',
    title: "Tala'al Badru 'Alayna",
    arabicTitle: 'طَلَعَ الْبَدْرُ عَلَيْنَا',
    reciter: 'Traditional Islamic Chorus',
    category: 'Historic Welcome Nasheed',
    audioUrl: MY_NAAT_LINKS.talaAlBadruUrl || 'https://cdn.islamicfinder.org/audio/tala-al-badru-alayna.mp3',
    durationApprox: '3:45',
    lyrics: [
      {
        arabic: 'طَلَعَ الْبَدْرُ عَلَيْنَا مِنْ ثَنِيَّاتِ الْوَدَاعِ',
        transliteration: "Tala'a al-badru 'alayna, min thaniyyati al-wada'",
        english: 'The full moon has risen upon us, from the valleys of Wada (Madinah).',
      },
      {
        arabic: 'وَجَبَ الشُّكْرُ عَلَيْنَا مَا دَعَا لِلّٰهِ دَاعِ',
        transliteration: "Wajaba al-shukru 'alayna, ma da'a lillahi da'",
        english: 'Gratitude is obligatory upon us, as long as a caller calls to Allah.',
      },
      {
        arabic: 'أَيُّهَا الْمَبْعُوثُ فِينَا جِئْتَ بِالأَمْرِ الْمُطَاعِ',
        transliteration: "Ayyuha al-mab'uthu feena, ji'ta bil-amri al-muta'",
        english: 'O you who were sent amongst us, you have come with a command to be obeyed.',
      },
      {
        arabic: 'جِئْتَ شَرَّفْتَ الْمَدِينَةَ مَرْحَبًا يَا خَيْرَ دَاعِ',
        transliteration: "Ji'ta sharrafta al-madinah, marhaban ya khayra da'",
        english: 'You have ennobled the city of Madinah, welcome O best of summoners!',
      },
    ],
  },
  {
    id: 'qasida-burda',
    title: 'Qasida Burda Sharif',
    arabicTitle: 'قَصِيدَةُ الْبُرْدَةِ الشَّرِيفَة',
    reciter: 'Imam Al-Busiri • Classic Nasheed',
    category: 'Sacred Eulogy of the Prophet ﷺ',
    audioUrl: MY_NAAT_LINKS.qasidaBurdaUrl || 'https://ia800301.us.archive.org/15/items/QasidaBurdaShareef_888/QasidaBurdaShareef.mp3',
    durationApprox: '4:20',
    lyrics: [
      {
        arabic: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
        transliteration: "Mawlaya salli wa sallim da'iman abada, 'Ala habibika khayril khalqi kullihimi",
        english: 'My Lord, send peace and blessings constantly and forever upon Your Beloved, the best of all creation.',
      },
      {
        arabic: 'مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ',
        transliteration: "Muhammadun sayyidul kawnayni wath-thaqalayni, wal fareeqayni min 'urbin wa min 'ajami",
        english: 'Muhammad is the leader of both worlds, of men and jinn, and of both Arabs and non-Arabs.',
      },
      {
        arabic: 'هُوَ الْحَبِيبُ الَّذِي تُرْجَى شَفَاعَتُهُ لِكُلِّ هَوْلٍ مِنَ الْأَهْوَالِ مُقْتَحِمِ',
        transliteration: "Huwal habeebul ladhee turja shafa'atuhu, Likulli hawlin minal ahwali muqtahami",
        english: 'He is the beloved whose intercession is hoped for, against every terror that suddenly descends.',
      },
    ],
  },
  {
    id: 'durood-e-taj',
    title: 'Durood-e-Taj & Salawat',
    arabicTitle: 'دُرُودِ تَاج وَ الصَّلَاةُ وَالسَّلَام',
    reciter: 'Melodious Salawat Chorus',
    category: 'Blessings Upon the Messenger ﷺ',
    audioUrl: MY_NAAT_LINKS.duroodETajUrl || 'https://ia800208.us.archive.org/19/items/DaroodTaj_201605/Darood%20Taj.mp3',
    durationApprox: '5:10',
    lyrics: [
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَاحِبِ التَّاجِ وَالْمِعْرَاجِ وَالْبُرَاقِ وَالْعَلَمِ',
        transliteration: "Allahumma salli 'ala sayyidina wa mawlana Muhammadin, Sahibi-t-taji wal-mi'raji wal-buraqi wal-'alam",
        english: 'O Allah, send blessings upon our Master and Leader Muhammad ﷺ, possessor of the Crown, the Ascension, the Buraq, and the Standard.',
      },
      {
        arabic: 'دَافِعِ الْبَلَاءِ وَالْوَبَاءِ وَالْقَحْطِ وَالْمَرَضِ وَالْأَلَمِ',
        transliteration: "Dafi'il bala-i wal-waba-i wal-qahti wal-maradi wal-alam",
        english: 'The repeller of affliction, pestilence, famine, disease, and pain.',
      },
    ],
  },
  {
    id: 'balaghal-ula',
    title: 'Balaghal Ula Bi Kamaalihi',
    arabicTitle: 'بَلَغَ الْعُلَى بِكَمَالِهِ',
    reciter: 'Shaykh Saadi Shirazi Eulogy',
    category: 'Heartfelt Tribute',
    audioUrl: MY_NAAT_LINKS.balaghalUlaUrl || 'https://ia801604.us.archive.org/16/items/balaghal-ula-bi-kamalihi/Balaghal%20Ula%20Bi%20Kamalihi.mp3',
    durationApprox: '3:50',
    lyrics: [
      {
        arabic: 'بَلَغَ الْعُلَى بِكَمَالِهِ ، كَشَفَ الدُّجَى بِجَمَالِهِ',
        transliteration: 'Balaghal ula bi kamalihi, Kashafad-duja bi jamalihi',
        english: 'He reached the highest station through his perfection, he dispelled darkness through his celestial beauty.',
      },
      {
        arabic: 'حَسُنَتْ جَمِيعُ خِصَالِهِ ، صَلُّوا عَلَيْهِ وَآلِهِ',
        transliteration: "Hasunat jamee'u khisalihi, Sallu 'alayhi wa aalihi",
        english: 'Beauteous are all of his qualities and virtues; send blessings upon him and his noble family ﷺ.',
      },
    ],
  },
];
