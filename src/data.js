// data
export const data = [
  {
    q: "Keluhan apa saja yang sedang anda rasakan saat ini?",
    a: [
      "makanan menyelip",
      "gigi terasa ngilu",
      "gigi terasa sakit",
      "area sekitar gusi / gusi disertai pembengkakan",
    ],
    id: 1,
  },
  {
    q: "Dimanakah lokasi yang terasa sakit? ",
    a: ["rahang atas", "rahang bawah"],
    id: 2,
  },
  {
    q: "Pada gigi bagian mana rasa sakit tersebut dirasakan?",
    a: ["gigi bagian depan", "gigi bagian belakang"],
    id: 3,
  },
  {
    q: "Sejak kapan rasa sakit tersebut berlangsung? ",
    a: [
      "beberapa jam yang lalu",
      "beberapa hari yang lalu",
      "beberapa minggu yang lalu",
      "beberapa bulan yang lalu",
      "beberapa tahun yang lalu",
    ],
    id: 4,
  },
  {
    q: "Bagaimana rasa sakit tersebut dapat timbul?  ",
    a: ["spontanitas", "hilang timbul"],
    id: 5,
  },
  {
    q: "Seberapa berat rasa sakit yang dirasakan?   ",
    a: ["ringan", "sedang", "berat"],
    id: 6,
  },

  {
    q: "Apa saja faktor yang memperparah rasa sakit? ",
    a: [
      "makanan asam / manis",
      "makanan / minuman dingin",
      "makanan / minuman panas",
    ],
    id: 7,
  },
  {
    q: "Apakah rasa sakit timbul saat dipakai mengunyah?    ",
    a: ["ya", "tidak"],
    id: 8,
  },
  {
    q: "Apakah saat rasa sakit timbul, disertai dengan demam?     ",
    a: ["ya", "tidak"],
    id: 9,
  },
  {
    q: "Bagaimana radiopasitas pada bagian mahkota?",
    a: [
      { l: "radioopak", id: 0 },
      { l: "radiolusen", id: 1 },
    ],
    id: 10,
  },

  {
    q: "Dimana lokasinya?",
    a: [
      { l: "mesial", id: 0 },
      { l: "distal", id: 1 },
      { l: "oklusal", id: 2 },
      { l: "incisal", id: 3 },
      { l: "servikal", id: 4 },
    ],
    id: 11,
  },
  {
    q: "Bagaimana kedalamannya?",
    a: [
      { l: "bagian enamelnya saja", id: 0 },
      { l: "dari enamel hingga dentin", id: 1 },
      { l: "dari enamel hingga pulpa", id: 2 },
    ],
    id: 12,
  },
  {
    q: "Berapa jumlah akarnya?",
    a: [
      { l: "1", id: 0 },
      { l: "2", id: 1 },
      { l: "3", id: 2 },
    ],
    id: 13,
  },
  {
    q: "Bagaimana bentuk akarnya?",
    a: [
      { l: "lurus", id: 0 },
      { l: "Bengkok kearah distal", id: 1 },
      { l: "bengkok kearah mesial", id: 2 },
      { l: "konvergen", id: 3 },
      { l: "divergen", id: 4 },
    ],
    id: 14,
  },
  {
    q: "Bagaimana radiopasitasnya?",
    a: [
      { l: "Seperti bahan salaruan akar", id: 0 },
      { l: "seperti pasak", id: 1 },
    ],
    id: 15,
  },
  {
    q: "Bagaimana kondisi ruang membran periodontalnya?",
    a: [
      { l: "Dalam batas normal", id: 0 },
      { l: "melebar", id: 1 },
      { l: "menghilang", id: 2 },
    ],
    id: 16,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { l: "1/3 apika", id: 0 },
      { l: "1/3 servikal", id: 1 },
      { l: "2/3 apikal", id: 2 },
      { l: "2/3 servika", id: 3 },
      { l: "seluruh bagian akar", id: 4 },
      { l: "dalam batas normal", id: 5 },
    ],
    id: 17,
  },
  {
    q: "Bagaimana kondisi lamina duranya?",
    a: [
      { l: "Dalam batas normal", id: 0 },
      { l: "melebar", id: 1 },
      { l: "menghilang", id: 2 },
    ],
    id: 18,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { l: "1/3 apika", id: 0 },
      { l: "1/3 servika", id: 1 },
      { l: "2/3 apikal", id: 2 },
      { l: "2/3 servikal", id: 3 },
      { l: "seluruh bagian akar", id: 4 },
      { l: "dalam batas normal", id: 5 },
    ],
    id: 19,
  },
  {
    q: "Bagaimana kondisi puncak tulang alveolarnya?",
    a: [
      { l: "Dalam batas normal", id: 0 },
      { l: "mengalami penurunan tulang secara horizontal", id: 1 },
      { l: "mengalami penurunan tulang secara vertikal", id: 2 },
    ],
    id: 20,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { l: "1/3 apikal", id: 0 },
      { l: "1/3 servikal", id: 1 },
      { l: "2/3 apikal", id: 2 },
      { l: "2/3 servikal", id: 3 },
      { l: "seluruh bagian akar", id: 4 },
      { l: "dalam batas normal", id: 5 },
    ],
    id: 21,
  },
  {
    q: "Seberapa banyak puncak tulang alveolar mengalami penurunan?",
    a: [
      { l: "1 mm", id: 0 },
      { l: "2 mm", id: 1 },
      { l: "3 mm", id: 2 },
      { l: "4 mm", id: 3 },
      { l: "5 mm", id: 4 },
      { l: "6 mm", id: 5 },
      { l: "dalam batas normal", id: 6 },
    ],
    id: 22,
  },
  {
    q: "Bagaimana kondisi radiopasitas dari furkasinya",
    a: [
      { l: "Dalam batas normal", id: 0 },
      { l: "terdapat gambaran lesi radiolusen", id: 1 },
      { l: "terdapat gambaran lesi radiopak", id: 2 },
    ],
    id: 23,
  },

  {
    q: "Bagimana kondisi pada bagian periapikalnya?",
    a: [
      { l: "Dalam batas normal", id: 0 },
      { l: "terdapat lesi", id: 1 },
    ],
    id: 24,
  },
  {
    q: "Bagaimana radiopasitas dari lesi tersebut?",
    a: [
      { l: "Terdapat gambaran lesi radiolusen", id: 0 },
      { l: "terdapat gambaran lesi radiopak", id: 1 },
      { l: "dalam batas normal", id: 2 },
    ],
    id: 25,
  },
  {
    q: "Bagaimana batas lesinya?",
    a: [
      { l: "Difuse (batas tidak jelas dan tidak tegas)", id: 0 },
      { l: "batas jelas dan tidak tegas", id: 1 },
      { l: "batas jelas dan tegas", id: 2 },
      { l: "dalam batas normal", id: 3 },
    ],
    id: 26,
  },
  {
    q: "Berapa ukuran lesinya?",
    a: [
      { l: "1 mm", id: 0 },
      { l: "2 mm", id: 1 },
      { l: "3 mm", id: 2 },
      { l: "4 mm", id: 3 },
      { l: "5 mm", id: 4 },
      { l: "6 mm", id: 5 },
      { l: "dalam batas normal", id: 6 },
    ],
    id: 27,
  },
];
