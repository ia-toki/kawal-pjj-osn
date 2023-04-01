const psetSlugs = ["osn-2022", "ksn-2021", "ksn-2020", "osn-2019", "osn-2018"];

const usernames = [
  "nasya_kenzia29",
  "devanriog",
  "Lilo14",
  "petu",
  "Aulia N.",
  "Takeshi02",
  "niko__",
  "radhya",
  "Imperion ",
  "AndreaSonic",
  "CavP1",
  "bananade",
  "lanangz",
  "kenpegrasio",
  "Vetto28",
  "akram1717",
  "maryoyoyo",
  "DhanesMahendra",
  "VincentK",
  "fqhhusain",
  "ketuabpb",
  "vinren",
  "splaypancake",
  "MichaelBx0",
  "azraf1107",
  "kritzan",
  "AdielRum",
  "KimiJT",
  "MikiMiku",
  "hafizlascarian",
  "JellyFiish",
  "ndhfrayyan",
  "koonxx",
  "fathmubina",
  "mjedor",
  "AmilLabib",
  "the_dydwjd",
  "Satria11",
  "Nyomantayo",
  "POTato3141",
  "nobelsu",
  "kayna",
  " Goodwill_Lion",
  "Jason.Sidharta123",
  "Blebbyblub",
  "Nabil_Alhanif",
  "ByeWorld",
  "ARK19",
  "Homies",
  "memememememe1oo",
  "devitoSans",
  "galihnur",
  "febyyy_",
  "rararana",
  "FinerKun",
  "jplembong",
  "aufan",
  "Roberto_Eugenio88",
  "Bitshift",
  "Wraithraiser",
  "daffanandamath",
  "Irfan.wk",
  "muh.farizzi",
  "Anders",
  "Lefi",
  "lalaiing",
  "Todoroki_Shouto",
  "thawvv",
  "jyanz",
  "Tannn.",
  "tut_tut",
  "Shofie",
  "zendy",
  "natkeith14",
  "Aurelian",
  "#N/A",
  "Angelica",
  "vitoYou7",
  "nabilalfik",
  "Frolentika",
  "rafi.alfd",
  "Benedict_p",
  "kmdavidds",
  "Troll321",
  "Andreast12",
  "Michael1905",
  "hamizghanii1706",
  "lha.kim",
  "SirHippo",
  "Maskrio",
  "khaleee",
  "NocEnryu",
  "Dussss45",
  "zeroth",
  "rsmn",
  "Danils",
  "GoldLight",
  "bipz",
];

const usernameToUserDataMap = {
  tut_tut: {
    name: "Hetty Sarlini",
    province: "Luar Negeri",
  },
  Shofie: {
    name: "Siti Shofi Nadhifa",
    province: "Aceh",
  },
  kmdavidds: {
    name: "Komang David Dananjaya Suartana",
    province: "Bali",
  },
  devitoSans: {
    name: "Devito Sanjaya Putra",
    province: "Bali",
  },
  zeroth: {
    name: "Joe Mathew Rusli",
    province: "Bali",
  },
  Satria11: {
    name: "Satria Edafausta Tjiaman",
    province: "Bali",
  },
  Nyomantayo: {
    name: "Nyoman Wiprayanka",
    province: "Bali",
  },
  akram1717: {
    name: "Nashiruddin Akram",
    province: "Banten",
  },
  Lefi: {
    name: "Vincent Wesley Liem",
    province: "Banten",
  },
  MichaelBx0: {
    name: "Michael Ballard Isaiah Silaen",
    province: "Banten",
  },
  Nabil_Alhanif: {
    name: "Muhamad Nabil Alhanif",
    province: "Banten",
  },
  hafizlascarian: {
    name: "Hafiz Fauzi",
    province: "Banten",
  },
  zendy: {
    name: "Muhammad Zendy Zainuddin",
    province: "Banten",
  },
  maryoyoyo: {
    name: "Maryo Marcelino",
    province: "Banten",
  },
  azraf1107: {
    name: "Muhammad Azraf Putra Repol",
    province: "Banten",
  },
  nasya_kenzia29: {
    name: "Nasya Kenzia Syaira Alifa",
    province: "Bengkulu",
  },
  SirHippo: {
    name: "Danar Abiyoga Prakosa",
    province: "D. I. Yogyakarta",
  },
  radhya: {
    name: "Radhya Cahya Kusuma",
    province: "D. I. Yogyakarta",
  },
  Troll321: {
    name: "Atila Ghulwani Altamis",
    province: "D. I. Yogyakarta",
  },
  natkeith14: {
    name: "Nathan Keith Poernama",
    province: "DKI Jakarta",
  },
  POTato3141: {
    name: "Benedikt Rio Widjaja",
    province: "DKI Jakarta",
  },
  nobelsu: {
    name: "Nobel Suhendra",
    province: "DKI Jakarta",
  },
  ByeWorld: {
    name: "Nathan Allan",
    province: "DKI Jakarta",
  },
  jplembong: {
    name: "Jeremy Philip Lembong",
    province: "DKI Jakarta",
  },
  JellyFiish: {
    name: "Vincent Gaudeo Lie",
    province: "DKI Jakarta",
  },
  kayna: {
    name: "Kayna Mufidah",
    province: "DKI Jakarta",
  },
  DhanesMahendra: {
    name: "Sandhya Mahendra Dhaneswara",
    province: "DKI Jakarta",
  },
  ndhfrayyan: {
    name: "Mochammad Nadhif Arfa Rayyan",
    province: "DKI Jakarta",
  },
  Aurelian: {
    name: "Filbert Aurelian Tjiaranata",
    province: "DKI Jakarta",
  },
  rsmn: {
    name: "Muh. Rusmin Nurwadin",
    province: "Gorontalo",
  },
  Andreast12: {
    name: "Andreas Timothy",
    province: "Jambi",
  },
  Michael1905: {
    name: "Michael Ignasius",
    province: "Jambi",
  },
  aufan: {
    name: "Aufan Ahmad Mumtaza",
    province: "Jawa Barat",
  },
  koonxx: {
    name: "Fauzan Maulandhika",
    province: "Jawa Barat",
  },
  kritzan: {
    name: "Kenneth Feivel Johannsen Hosannah",
    province: "Jawa Barat",
  },
  Lilo14: {
    name: "Muhammad Aqila",
    province: "Jawa Barat",
  },
  Maskrio: {
    name: "Yose Yehezkiel Maranata",
    province: "Jawa Barat",
  },
  AdielRum: {
    name: "Adiel Rum",
    province: "Jawa Barat",
  },
  "Imperion ": {
    name: "Jefferson Abraham Dermawan",
    province: "Jawa Barat",
  },
  fathmubina: {
    name: "Fathan Mubina",
    province: "Jawa Barat",
  },
  VincentK: {
    name: "Vincent Kristian Waluyo",
    province: "Jawa Barat",
  },
  MikiMiku: {
    name: "Jonathan Irvin Susanto",
    province: "Jawa Barat",
  },
  mjedor: {
    name: "Muhammad Haidar",
    province: "Jawa Tengah",
  },
  thawvv: {
    name: "Muhammad Adi Brata Tata Negoro Saputra",
    province: "Jawa Tengah",
  },
  hamizghanii1706: {
    name: "Muhammad Hamiz Ghani Ayusha",
    province: "Jawa Tengah",
  },
  Roberto_Eugenio88: {
    name: "Roberto Eugenio Sugiarto",
    province: "Jawa Tengah",
  },
  Bitshift: {
    name: "Auladi Fachry Assidiqi",
    province: "Jawa Tengah",
  },
  fqhhusain: {
    name: "Muhammad Faqih Husain",
    province: "Jawa Tengah",
  },
  jyanz: {
    name: "M. Arvin Wijayanto",
    province: "Jawa Tengah",
  },
  galihnur: {
    name: "Galih Nur Rizqy",
    province: "Jawa Tengah",
  },
  AndreaSonic: {
    name: "Andreas Surya Tanjung",
    province: "Jawa Tengah",
  },
  daffanandamath: {
    name: "Daffa Rayhan Ananda",
    province: "Jawa Tengah",
  },
  AmilLabib: {
    name: "Moch. Amil Labib Makarim",
    province: "Jawa Timur",
  },
  lanangz: {
    name: "Muhammad Lanang Zalkifla Harits",
    province: "Jawa Timur",
  },
  the_dydwjd: {
    name: "Leontina Maydeline Davidson",
    province: "Jawa Timur",
  },
  Wraithraiser: {
    name: "Ahmad Wasis Shofiyulloh",
    province: "Jawa Timur",
  },
  CavP1: {
    name: "Raihan Akbar",
    province: "Jawa Timur",
  },
  " Goodwill_Lion": {
    name: "Goodwill Bryan Lion",
    province: "Jawa Timur",
  },
  kenpegrasio: {
    name: "Jansen Ken Pegrasio",
    province: "Jawa Timur",
  },
  lalaiing: {
    name: "Stella Ling Raharjo",
    province: "Jawa Timur",
  },
  "Jason.Sidharta123": {
    name: "Christopher Jason Sidharta",
    province: "Jawa Timur",
  },
  Vetto28: {
    name: "Rayyan Aqsha Raditya",
    province: "Jawa Timur",
  },
  petu: {
    name: "Calson Aryaputra",
    province: "Kalimantan Barat",
  },
  ARK19: {
    name: "Adha Rizki Khawa Rizmi",
    province: "Kalimantan Barat",
  },
  "Irfan.wk": {
    name: "Muhammad Irfan Wira Kusuma",
    province: "Kalimantan Selatan",
  },
  FinerKun: {
    name: "Stefanus Derren Kurniawan",
    province: "Kalimantan Selatan",
  },
  ketuabpb: {
    name: "Ahmad Rizqi",
    province: "Kalimantan Tengah",
  },
  "Tannn.": {
    name: "Utandra Nur Ahmad Jais",
    province: "Kalimantan Timur",
  },
  "Aulia N.": {
    name: "Aulia Nakaeisha",
    province: "Kalimantan Utara",
  },
  "rafi.alfd": {
    name: "Muhammad Rafi Alfirdaus",
    province: "Kep. Bangka Belitung",
  },
  khaleee: {
    name: "Khalit Putra Afana",
    province: "Kep. Riau",
  },
  NocEnryu: {
    name: "Nevin Thang",
    province: "Lampung",
  },
  vinren: {
    name: "Vincent Valentino Oei",
    province: "Maluku",
  },
  "#N/A": {
    name: "Muhammad Ilham Syafik",
    province: "Sumatera Selatan",
  },
  Homies: {
    name: "Randi Palguna Artayasa",
    province: "Nusa Tenggara Barat",
  },
  febyyy_: {
    name: "Paula Vebrianti Kewa Payon Riantobi",
    province: "Nusa Tenggara Timur",
  },
  Blebbyblub: {
    name: "Raenault Maxine Salle Bandaso",
    province: "Papua",
  },
  Angelica: {
    name: "Angelica Audeska Sali",
    province: "Papua Barat",
  },
  memememememe1oo: {
    name: "Athar Bakhtiar Aziz",
    province: "Riau",
  },
  Danils: {
    name: "Danniel",
    province: "Riau",
  },
  bananade: {
    name: "Franklin Filbert Irwan",
    province: "Riau",
  },
  vitoYou7: {
    name: "Muhammad Arkan Anzuye",
    province: "Riau",
  },
  GoldLight: {
    name: "Muhammad Naufal Muzaki",
    province: "Riau",
  },
  KimiJT: {
    name: "Kimi Jenson Tjan",
    province: "Riau",
  },
  rararana: {
    name: "Ranashahira Reztaputri",
    province: "Riau",
  },
  splaypancake: {
    name: "Ahmad Dzaky",
    province: "Sulawesi Barat",
  },
  bipz: {
    name: "Joceline Araki",
    province: "Sulawesi Selatan",
  },
  Takeshi02: {
    name: "Takeshi Henderson Herman",
    province: "Sulawesi Selatan",
  },
  "muh.farizzi": {
    name: "Muh. Farizzi",
    province: "Sulawesi Tengah",
  },
  nabilalfik: {
    name: "Nabil Hakim Alfikri",
    province: "Sulawesi Tenggara",
  },
  Dussss45: {
    name: "Benedict Dustin Tanex",
    province: "Sulawesi Utara",
  },
  "lha.kim": {
    name: "Luqmanul Hakim",
    province: "Sumatera Barat",
  },
  devanriog: {
    name: "Devanrio Geofendra",
    province: "Sumatera Selatan",
  },
  niko__: {
    name: "Niko Samuel Simanjuntak",
    province: "Sumatera Utara",
  },
  Anders: {
    name: "Anders Willard Leo",
    province: "Sumatera Utara",
  },
  Benedict_p: {
    name: "Benedict Presley",
    province: "Sumatera Utara",
  },
  Frolentika: {
    name: "Frolentika",
    province: "Sumatera Utara",
  },
  Todoroki_Shouto: {
    name: "Evelyn",
    province: "Sumatera Utara",
  },
};

export { usernames, usernameToUserDataMap, psetSlugs };
