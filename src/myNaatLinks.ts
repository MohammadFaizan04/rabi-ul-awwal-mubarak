/**
 * =======================================================================
 * 🕌 MY NAAT AUDIO LINKS CONFIGURATION FILE
 * =======================================================================
 * 
 * Paste your custom audio MP3 / streaming links below.
 * You can use direct .mp3 / .wav / .m4a links, Google Drive direct audio links,
 * Dropbox audio links, or any online audio stream URL.
 * 
 * If left empty (""), the app will seamlessly use the high-fidelity
 * built-in Islamic flute / vocal melody synthesis!
 */

export interface CustomNaatLinksConfig {
  talaAlBadruUrl: string;
  qasidaBurdaUrl: string;
  balaghalUlaUrl: string;
  duroodETajUrl?: string;
}

export const MY_NAAT_LINKS: CustomNaatLinksConfig = {
  // 1. Tala'al Badru 'Alayna (طَلَعَ الْبَدْرُ عَلَيْنَا)
  // Paste your custom audio URL between the quotes below:
//   talaAlBadruUrl: "https://cdn.islamicfinder.org/audio/tala-al-badru-alayna.mp3",
  talaAlBadruUrl: "/src/public/audio/tala-al-badru.mp3",

  // 2. Qasida Burda Sharif (قَصِيدَةُ الْبُرْدَةِ الشَّرِيفَة)
  // Paste your custom audio URL between the quotes below:
  qasidaBurdaUrl: "/src/public/audio/qasida-burda-shareef.mp3",
  
  // 3. Balaghal Ula Bi Kamaalihi (بَلَغَ الْعُلَى بِكَمَالِهِ)
  // Paste your custom audio URL between the quotes below:
  //   balaghalUlaUrl: "https://ia801604.us.archive.org/16/items/balaghal-ula-bi-kamalihi/Balaghal%20Ula%20Bi%20Kamalihi.mp3",
    balaghalUlaUrl: "/src/public/audio/balaghal-ula-be-kamalehi.mp3",
    // balaghalUlaUrl: "https://naatsharif.com/download-mp3/abdul-rauf-rufi/balaghal-ula-be-kamalehi.mp3",


  // 4. Durood-e-Taj & Salawat (Optional)
//   duroodETajUrl: "https://ia800208.us.archive.org/19/items/DaroodTaj_201605/Darood%20Taj.mp3",
  duroodETajUrl: "/src/public/audio/durood-taj.mp3",
};

export default MY_NAAT_LINKS;
