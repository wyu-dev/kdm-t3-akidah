// ============================================================
// KAFA Digital Montessori
// akidah-tahun3-data.js
// Akidah Tahun 3 — Data Kandungan Pembelajaran
// Versi 2.0 — Struktur Montessori Betul
//
// Corak 3 Peringkat (ikut pedagogi Montessori):
//   Peringkat 1 — KENAL  : Flash Card
//   Peringkat 2 — CUBA   : Aktiviti Hands-on (berbeza setiap topik)
//   Peringkat 3 — INGAT  : Reflection Card (semua topik sama)
//
// Peta Aktiviti (dipersetujui dalam chat pedagogi Montessori):
//   T1 — Kitab           : Matching + Drag & Drop
//   T2 — Hari Kiamat     : Open the Box + Drag & Drop
//   T3 — Mukhalafatu     : Puzzle Ayat + Fill in Blank
//   T4 — Qiyamuhu        : Puzzle Ayat + Kad Gabungan
//   T5 — Haiwan          : Tafakur Card + Matching
// ============================================================

const AKIDAH_TAHUN3 = {

  meta: {
    tahun: 3,
    subjek: "Akidah",
    versi: "2.0",
    jumlahTopik: 5,
    warna: {
      utama: "#2d6a4f",
      sekunder: "#52b788",
      aksen: "#f4a261",
      latar: "#f7f9f4",
    }
  },

  // ============================================================
  // TOPIK 1: BERIMAN KEPADA KITAB
  // Peringkat 2: Matching + Drag & Drop
  // ============================================================
  topik1: {
    id: "t1",
    tajuk: "Beriman kepada Kitab",
    ikon: "📖",
    warna: "#52b788",

    // --- PERINGKAT 1: KENAL ---
    flashcard: [
      {
        id: "t1-fc-01",
        subtopik: "1.1",
        muka: "Kitab",
        belakang: "Kitab suci yang diturunkan Allah kepada para rasul melalui wahyu",
        nota: "Rukun Iman ke-3"
      },
      {
        id: "t1-fc-02",
        subtopik: "1.1",
        muka: "Beriman kepada Kitab",
        belakang: "Mempercayai dengan sepenuh hati bahawa Allah telah menurunkan kitab-kitab suci kepada rasul-rasul pilihan-Nya sebagai panduan untuk manusia",
        nota: "Rukun Iman ke-3"
      },
      {
        id: "t1-fc-03",
        subtopik: "1.2",
        muka: "Taurat",
        belakang: "Kitab suci yang diturunkan kepada Nabi Musa a.s.",
        arab: "التَّوْرَاة",
        nota: "Kitab ke-1"
      },
      {
        id: "t1-fc-04",
        subtopik: "1.2",
        muka: "Zabur",
        belakang: "Kitab suci yang diturunkan kepada Nabi Daud a.s.",
        arab: "الزَّبُور",
        nota: "Kitab ke-2"
      },
      {
        id: "t1-fc-05",
        subtopik: "1.2",
        muka: "Injil",
        belakang: "Kitab suci yang diturunkan kepada Nabi Isa a.s.",
        arab: "الْإِنْجِيل",
        nota: "Kitab ke-3"
      },
      {
        id: "t1-fc-06",
        subtopik: "1.2",
        muka: "Al-Quran",
        belakang: "Kitab suci yang diturunkan kepada Nabi Muhammad s.a.w. — kitab terakhir dan terjaga selamanya",
        arab: "الْقُرْآن",
        nota: "Kitab ke-4, kitab terakhir"
      },
      {
        id: "t1-fc-07",
        subtopik: "1.3",
        muka: "Peranan Al-Quran",
        belakang: "Panduan hidup • Penyembuh hati • Sumber hukum • Pelindung • Pahala membaca • Membenarkan kitab terdahulu",
        nota: "6 peranan utama"
      },
    ],

    // --- PERINGKAT 2: CUBA — Matching + Drag & Drop ---
    aktivitiCuba: {
      jenis: ["matching", "dragdrop"],

      matching: {
        subtopik: "1.2",
        arahan: "Padankan setiap kitab dengan rasul yang menerimanya",
        pasangan: [
          { id: "m1", kiri: "Taurat",   kanan: "Nabi Musa a.s." },
          { id: "m2", kiri: "Zabur",    kanan: "Nabi Daud a.s." },
          { id: "m3", kiri: "Injil",    kanan: "Nabi Isa a.s." },
          { id: "m4", kiri: "Al-Quran", kanan: "Nabi Muhammad s.a.w." },
        ]
      },

      dragdrop: {
        subtopik: "1.3",
        arahan: "Seret setiap peranan ke dalam ruang Al-Quran",
        sasaran: { label: "Peranan Al-Quran", warna: "#52b788" },
        item: [
          { id: "dd1", teks: "Panduan hidup" },
          { id: "dd2", teks: "Penyembuh hati" },
          { id: "dd3", teks: "Sumber hukum" },
          { id: "dd4", teks: "Pelindung" },
          { id: "dd5", teks: "Pahala membaca" },
          { id: "dd6", teks: "Membenarkan kitab terdahulu" },
        ]
      }
    },

    // --- PERINGKAT 3: INGAT — Reflection Card (Subtopik 1.4) ---
    reflectionCard: {
      subtopik: "1.4",
      tajuk: "Mencintai Al-Quran 💚",
      arahan: "Pilih amalan yang SUDAH kamu lakukan hari ini:",
      pilihan: [
        { id: "r1", teks: "Membaca Al-Quran hari ini",              ikon: "📖" },
        { id: "r2", teks: "Mendengar bacaan Al-Quran dengan hormat", ikon: "👂" },
        { id: "r3", teks: "Belajar tajwid",                         ikon: "✏️" },
        { id: "r4", teks: "Cuba faham maksud ayat",                  ikon: "🤔" },
        { id: "r5", teks: "Amalkan ajaran Al-Quran",                 ikon: "⭐" },
        { id: "r6", teks: "Jaga adab ketika pegang Al-Quran",        ikon: "🤲" },
      ],
      pesanTamat: "Syukran! Teruskan usaha kamu. Setiap amalan kecil dikira oleh Allah. 🌟"
    }
  },

  // ============================================================
  // TOPIK 2: BERIMAN KEPADA HARI KIAMAT
  // Peringkat 2: Open the Box + Drag & Drop
  // ============================================================
  topik2: {
    id: "t2",
    tajuk: "Beriman kepada Hari Kiamat",
    ikon: "🌌",
    warna: "#e76f51",

    // --- PERINGKAT 1: KENAL ---
    flashcard: [
      {
        id: "t2-fc-01",
        subtopik: "2.1",
        muka: "Hari Kiamat",
        belakang: "Hari berakhirnya seluruh kehidupan di dunia dan dibangkitkan semula semua makhluk untuk dihisab",
        arab: "يَوْمُ الْقِيَامَة",
        nota: "Rukun Iman ke-5"
      },
      {
        id: "t2-fc-02",
        subtopik: "2.1",
        muka: "Beriman kepada Hari Kiamat",
        belakang: "Mempercayai dengan sepenuh hati bahawa hari kiamat pasti akan berlaku atas kehendak Allah",
        nota: "Rukun Iman ke-5"
      },
      {
        id: "t2-fc-03",
        subtopik: "2.2",
        muka: "Hukum Beriman kepada Hari Kiamat",
        belakang: "Fardu Ain — wajib ke atas setiap Muslim. Sesiapa yang mengingkarinya adalah kafir.",
        nota: "Sangat penting!"
      },
      {
        id: "t2-fc-04",
        subtopik: "2.3",
        muka: "Tanda Kecil Hari Kiamat",
        belakang: "Ilmu agama diangkat • Maksiat berleluasa • Zina berleluasa • Arak diminum terbuka • Fitnah merata • Ramai wanita berbanding lelaki • Banyak pembunuhan • Banyak gempa bumi",
        nota: "Sebahagian sudah berlaku"
      },
      {
        id: "t2-fc-05",
        subtopik: "2.3",
        muka: "Tanda Besar Hari Kiamat",
        belakang: "Imam Mahdi muncul • Nabi Isa a.s. turun • Dajjal muncul • Matahari terbit dari barat • Dabbatul Ardh keluar • Yakjuj & Makjuj • Asap memenuhi timur barat",
        nota: "Belum berlaku lagi"
      },
      {
        id: "t2-fc-06",
        subtopik: "2.4",
        muka: "Kesan Beriman kepada Hari Kiamat",
        belakang: "Berhati-hati dalam perbuatan • Rajin amal soleh • Menjauhi dosa • Tidak tamak harta • Bersabar atas ujian",
        nota: "5 kesan pada diri kita"
      },
    ],

    // --- PERINGKAT 2: CUBA — Open the Box + Drag & Drop ---
    // Catatan: elak visual menakutkan — fokus pemahaman dua kategori
    aktivitiCuba: {
      jenis: ["openthebox", "dragdrop"],

      openthebox: {
        subtopik: "2.3",
        arahan: "Klik setiap kotak untuk lihat tanda-tanda Hari Kiamat",
        kotak: [
          { id: "ob1", label: "Kotak 1", soalan: "Apakah berlaku pada ilmu agama?",               jawapan: "Ilmu agama diangkat — ramai yang lupa agama",     kategori: "kecil" },
          { id: "ob2", label: "Kotak 2", soalan: "Apakah berlaku dengan maksiat?",                 jawapan: "Maksiat berleluasa di mana-mana",                 kategori: "kecil" },
          { id: "ob3", label: "Kotak 3", soalan: "Siapa yang akan muncul sebagai pemimpin ummah?", jawapan: "Imam Mahdi akan muncul sebagai pemimpin ummah",    kategori: "besar" },
          { id: "ob4", label: "Kotak 4", soalan: "Apakah yang berlaku pada matahari?",             jawapan: "Matahari terbit dari barat — bukan dari timur",    kategori: "besar" },
          { id: "ob5", label: "Kotak 5", soalan: "Siapa Nabi yang akan turun semula ke bumi?",     jawapan: "Nabi Isa a.s. akan turun semula ke bumi",         kategori: "besar" },
          { id: "ob6", label: "Kotak 6", soalan: "Apakah berlaku dengan gempa bumi?",              jawapan: "Banyak berlaku gempa bumi di seluruh dunia",       kategori: "kecil" },
        ]
      },

      dragdrop: {
        subtopik: "2.3",
        arahan: "Seret setiap tanda ke kategori yang betul",
        kategori: [
          { id: "kecil", label: "🟡 Tanda Kecil", warna: "#f4a261" },
          { id: "besar", label: "🔴 Tanda Besar", warna: "#e76f51" },
        ],
        item: [
          { id: "dd1", teks: "Ilmu agama diangkat",        kategori: "kecil" },
          { id: "dd2", teks: "Fitnah merata-rata",          kategori: "kecil" },
          { id: "dd3", teks: "Banyak gempa bumi",           kategori: "kecil" },
          { id: "dd4", teks: "Dajjal muncul",               kategori: "besar" },
          { id: "dd5", teks: "Matahari terbit dari barat",  kategori: "besar" },
          { id: "dd6", teks: "Nabi Isa a.s. turun",        kategori: "besar" },
          { id: "dd7", teks: "Imam Mahdi muncul",           kategori: "besar" },
          { id: "dd8", teks: "Maksiat berleluasa",          kategori: "kecil" },
        ]
      }
    },

    // --- PERINGKAT 3: INGAT — Reflection Card (Subtopik 2.4) ---
    reflectionCard: {
      subtopik: "2.4",
      tajuk: "Keperibadianku Hari Ini 🌙",
      arahan: "Pilih perkara yang SUDAH kamu lakukan hari ini kerana ingat akan Hari Kiamat:",
      pilihan: [
        { id: "r1", teks: "Berhati-hati dalam perbuatan saya",        ikon: "🤲" },
        { id: "r2", teks: "Rajin buat amal soleh",                    ikon: "⭐" },
        { id: "r3", teks: "Cuba jauhi perkara yang Allah larang",     ikon: "🚫" },
        { id: "r4", teks: "Tidak tamak mahukan benda orang lain",     ikon: "😌" },
        { id: "r5", teks: "Bersabar apabila diuji",                   ikon: "💪" },
      ],
      pesanTamat: "MasyaAllah! Ingatan kepada Hari Kiamat menjadikan kita insan yang lebih baik. 🌟"
    }
  },

  // ============================================================
  // TOPIK 3: SIFAT MUKHALAFATU LIL HAWADITH
  // Peringkat 2: Puzzle Ayat + Fill in Blank
  // ============================================================
  topik3: {
    id: "t3",
    tajuk: "Sifat Mukhalafatu Lil Hawadith",
    ikon: "✨",
    warna: "#9b5de5",

    // --- PERINGKAT 1: KENAL ---
    // Catatan pedagogi: kad soalanPemikiran dulu (konkrit),
    // baru masukkan istilah — "pengalaman dulu, nama kemudian"
    flashcard: [
      {
        id: "t3-fc-00",
        subtopik: "3.0",
        jenis: "soalanPemikiran",
        muka: "Fikir sebentar... 🤔",
        belakang: "Adakah Allah lapar?\nAdakah Allah tidur?\nAdakah Allah tua?\n\nJawapannya: TIDAK!\nAllah tidak sama dengan kita.",
        nota: "Pengalaman dulu, nama kemudian — prinsip Montessori"
      },
      {
        id: "t3-fc-01",
        subtopik: "3.1",
        muka: "Mukhalafatu Lil Hawadith",
        belakang: "Berbeza / Tidak sama dengan makhluk-Nya — Allah sama sekali tidak menyerupai mana-mana makhluk ciptaan-Nya dalam zat, sifat, dan perbuatan",
        arab: "مُخَالَفَتُهُ لِلْحَوَادِثِ",
        nota: "Sifat Wajib Allah ke-4"
      },
      {
        id: "t3-fc-02",
        subtopik: "3.1",
        muka: "3 Aspek Perbezaan Allah",
        belakang: "Allah berbeza dari makhluk dalam:\n1. Zat (diri-Nya)\n2. Sifat\n3. Perbuatan",
        nota: "Tiga aspek penting"
      },
      {
        id: "t3-fc-03",
        subtopik: "3.2",
        muka: "Dalil Naqli — Surah As-Syura",
        belakang: "\"Tidak ada sesuatupun yang serupa dengan-Nya\"\n— Surah As-Syura (42:11)",
        arab: "لَيْسَ كَمِثْلِهِ شَيْءٌ",
        nota: "Hafal ayat ini!"
      },
      {
        id: "t3-fc-04",
        subtopik: "3.2",
        muka: "Dalil Aqli",
        belakang: "Kalau Allah sama dengan makhluk, bermakna Allah juga lemah, terhad, dan perlu kepada sesuatu — ini mustahil bagi Tuhan",
        nota: "Logik akal pun setuju!"
      },
      {
        id: "t3-fc-05",
        subtopik: "3.3",
        muka: "Kesan Menghayati Sifat Ini",
        belakang: "Tidak sembah patung/gambar • Tidak samakan Allah dengan makhluk • Mengagungkan Allah • Jauh dari syirik • Khusyuk dalam ibadah",
        nota: "5 kesan utama"
      },
    ],

    // --- PERINGKAT 2: CUBA — Puzzle Ayat + Fill in Blank ---
    aktivitiCuba: {
      jenis: ["puzzleayat", "fillinblank"],

      puzzleayat: {
        subtopik: "3.2",
        arahan: "Susun perkataan-perkataan ini untuk membentuk ayat dalil yang betul",
        puzzle: [
          {
            id: "pa1",
            konteks: "Surah As-Syura (42:11)",
            kepingan: ["Tidak", "ada", "sesuatupun", "yang", "serupa", "dengan-Nya"],
            jawapan: "Tidak ada sesuatupun yang serupa dengan-Nya",
            arab: "لَيْسَ كَمِثْلِهِ شَيْءٌ"
          },
        ]
      },

      fillinblank: {
        subtopik: "3.1",
        arahan: "Lengkapkan ayat-ayat berikut",
        soalan: [
          {
            id: "fb1",
            ayat: "Mukhalafatu Lil Hawadith bermaksud Allah _____ dengan makhluk-Nya.",
            jawapan: "berbeza",
            jawapanAlternatif: ["tidak sama", "berbeza/tidak sama"],
            petunjuk: "Bermula dengan huruf 'B'"
          },
          {
            id: "fb2",
            ayat: "Sifat Mukhalafatu Lil Hawadith adalah Sifat Wajib Allah yang ke-_____.",
            jawapan: "4",
            jawapanAlternatif: ["empat"],
            petunjuk: "Nombor"
          },
          {
            id: "fb3",
            ayat: "Allah berbeza dari makhluk dalam tiga aspek: zat, sifat, dan _____.",
            jawapan: "perbuatan",
            petunjuk: "Apa yang Allah lakukan"
          },
          {
            id: "fb4",
            ayat: "Dalil naqli bagi sifat ini terdapat dalam Surah _____.",
            jawapan: "As-Syura",
            jawapanAlternatif: ["as syura", "as-syura", "syura"],
            petunjuk: "Nama surah dalam Al-Quran"
          },
        ]
      }
    },

    // --- PERINGKAT 3: INGAT — Reflection Card (Subtopik 3.3) ---
    reflectionCard: {
      subtopik: "3.3",
      tajuk: "Kerana Allah Maha Berbeza... ✨",
      arahan: "Pilih perkara yang SUDAH kamu amalkan hari ini:",
      pilihan: [
        { id: "r1", teks: "Tidak menyembah patung atau gambar",              ikon: "🚫" },
        { id: "r2", teks: "Tidak bandingkan Allah dengan manusia atau makhluk", ikon: "🤲" },
        { id: "r3", teks: "Mengagungkan Allah dalam hati",                   ikon: "💜" },
        { id: "r4", teks: "Jauhkan diri dari perbuatan syirik",              ikon: "🛡️" },
        { id: "r5", teks: "Khusyuk ketika solat atau berdoa",                ikon: "🌟" },
      ],
      pesanTamat: "Allah Maha Besar! Tiada apa pun yang boleh menandingi-Nya. Teruskan amalan kamu! 💜"
    }
  },

  // ============================================================
  // TOPIK 4: SIFAT QIYAMUHU BINAFSIH
  // Peringkat 2: Puzzle Ayat + Kad Gabungan
  // ============================================================
  topik4: {
    id: "t4",
    tajuk: "Sifat Qiyamuhu Binafsih",
    ikon: "🌟",
    warna: "#0077b6",

    // --- PERINGKAT 1: KENAL ---
    // Catatan pedagogi: soalan konkrit dulu
    // "Adakah Allah perlukan makan? Adakah kamu perlukan Allah?"
    flashcard: [
      {
        id: "t4-fc-00",
        subtopik: "4.0",
        jenis: "soalanPemikiran",
        muka: "Fikir sebentar... 🤔",
        belakang: "Adakah Allah perlukan makan?\nAdakah Allah perlukan tempat tinggal?\nAdakah Allah perlukan bantuan kita?\n\nJawapannya: TIDAK!\nKita yang perlukan Allah, bukan sebaliknya.",
        nota: "Pengalaman dulu, nama kemudian — prinsip Montessori"
      },
      {
        id: "t4-fc-01",
        subtopik: "4.1",
        muka: "Qiyamuhu Binafsih",
        belakang: "Berdiri sendiri / Tidak berhajat kepada sesuatu yang lain — Allah tidak memerlukan bantuan, tempat, atau apa-apa daripada makhluk-Nya",
        arab: "قِيَامُهُ بِنَفْسِهِ",
        nota: "Sifat Wajib Allah ke-3"
      },
      {
        id: "t4-fc-02",
        subtopik: "4.1",
        muka: "Allah Tidak Perlukan...",
        belakang: "✗ Bantuan sesiapa\n✗ Tempat tinggal\n✗ Makanan / minuman\n✗ Masa / rehat\n✗ Apa-apa daripada makhluk",
        nota: "Allah Maha Kaya"
      },
      {
        id: "t4-fc-03",
        subtopik: "4.2",
        muka: "Dalil Naqli — Surah Al-Ankabut",
        belakang: "\"Sesungguhnya Allah Maha Kaya (tidak berhajat) kepada sekalian alam\"\n— Surah Al-Ankabut (29:6)",
        arab: "إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ",
        nota: "Hafal ayat ini!"
      },
      {
        id: "t4-fc-04",
        subtopik: "4.2",
        muka: "Dalil Aqli",
        belakang: "Kalau Allah berhajat kepada sesuatu, bermakna Allah lemah dan tidak sempurna — ini mustahil bagi Tuhan yang Maha Sempurna",
        nota: "Logik akal pun setuju!"
      },
      {
        id: "t4-fc-05",
        subtopik: "4.3",
        muka: "Kesan Menghayati Sifat Ini",
        belakang: "Tidak minta kepada selain Allah • Bertawakkal kepada Allah • Tidak sombong • Rajin berdoa • Bersyukur",
        nota: "5 kesan utama"
      },
    ],

    // --- PERINGKAT 2: CUBA — Puzzle Ayat + Kad Gabungan ---
    aktivitiCuba: {
      jenis: ["puzzleayat", "kadgabungan"],

      puzzleayat: {
        subtopik: "4.2",
        arahan: "Susun perkataan-perkataan ini untuk membentuk ayat dalil yang betul",
        puzzle: [
          {
            id: "pa1",
            konteks: "Surah Al-Ankabut (29:6)",
            kepingan: ["Sesungguhnya", "Allah", "Maha Kaya", "tidak berhajat", "kepada", "sekalian alam"],
            jawapan: "Sesungguhnya Allah Maha Kaya tidak berhajat kepada sekalian alam",
            arab: "إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ"
          },
        ]
      },

      // Kad Gabungan: padankan amalan + sebab
      // Murid faham KENAPA, bukan sekadar hafal AMALAN
      kadgabungan: {
        subtopik: "4.3",
        arahan: "Gabungkan setiap amalan dengan sebabnya yang betul",
        pasangan: [
          {
            id: "kg1",
            amalan: "Tidak minta kepada selain Allah",
            sebab: "Hanya Allah yang tidak berhajat kepada sesiapa"
          },
          {
            id: "kg2",
            amalan: "Bertawakkal kepada Allah",
            sebab: "Yakin Allah mampu mencukupi segala keperluan kita"
          },
          {
            id: "kg3",
            amalan: "Tidak sombong",
            sebab: "Sedar bahawa manusia sentiasa berhajat kepada Allah"
          },
          {
            id: "kg4",
            amalan: "Rajin berdoa",
            sebab: "Sedar Allah sahaja tempat meminta yang sebenar"
          },
          {
            id: "kg5",
            amalan: "Bersyukur kepada Allah",
            sebab: "Allah tidak perlukan kita, tapi masih memberi nikmat kepada kita"
          },
        ]
      }
    },

    // --- PERINGKAT 3: INGAT — Reflection Card (Subtopik 4.3) ---
    reflectionCard: {
      subtopik: "4.3",
      tajuk: "Hanya Allah Tempat Bergantung 🌟",
      arahan: "Pilih perkara yang SUDAH kamu lakukan hari ini:",
      pilihan: [
        { id: "r1", teks: "Hanya berdoa dan meminta kepada Allah",     ikon: "🤲" },
        { id: "r2", teks: "Bertawakkal — serahkan urusan kepada Allah", ikon: "☁️" },
        { id: "r3", teks: "Tidak bersikap sombong dengan orang lain",   ikon: "😊" },
        { id: "r4", teks: "Berdoa kepada Allah hari ini",               ikon: "🌟" },
        { id: "r5", teks: "Bersyukur atas nikmat Allah",                ikon: "💙" },
      ],
      pesanTamat: "Allah tidak perlukan kita, tapi kita sentiasa perlukan Allah. Teruskan bergantung kepada-Nya! 💙"
    }
  },

  // ============================================================
  // TOPIK 5: ISLAM DAN SAINS (HAIWAN)
  // Peringkat 2: Tafakur Card + Matching
  // Catatan: Reflection Card topik ini berbeza —
  //          bukan checklist amalan, tapi ekspresi perasaan kagum
  // ============================================================
  topik5: {
    id: "t5",
    tajuk: "Islam dan Sains — Haiwan",
    ikon: "🐝",
    warna: "#f4a261",

    // --- PERINGKAT 1: KENAL ---
    flashcard: [
      {
        id: "t5-fc-01",
        subtopik: "5.1",
        muka: "Penciptaan Haiwan",
        belakang: "Semua haiwan dicipta oleh Allah — tiada yang wujud dengan sendirinya. Kepelbagaian haiwan menunjukkan kekuasaan dan kebesaran Allah.",
        nota: "Allah = Al-Khaliq, Al-Qadir"
      },
      {
        id: "t5-fc-02",
        subtopik: "5.1",
        muka: "Al-Khaliq 🌿",
        belakang: "Maha Pencipta — Allah mencipta semua haiwan dengan fungsi dan peranan tersendiri dalam alam",
        arab: "الْخَالِق",
        nota: "Salah satu nama Allah"
      },
      {
        id: "t5-fc-03",
        subtopik: "5.1",
        muka: "Al-Qadir ⚡",
        belakang: "Maha Berkuasa — Allah berkuasa mencipta kepelbagaian haiwan di darat, laut, dan udara",
        arab: "الْقَادِر",
        nota: "Salah satu nama Allah"
      },
      {
        id: "t5-fc-04",
        subtopik: "5.2",
        muka: "Lebah 🐝",
        belakang: "Membina sarang heksagon yang sempurna dan menghasilkan madu — Allah ilhamkan lebah dengan kepintaran luar biasa",
        arab: "النَّحْل",
        nota: "Ada surah khas: An-Nahl = Lebah"
      },
      {
        id: "t5-fc-05",
        subtopik: "5.2",
        muka: "Burung 🐦",
        belakang: "Boleh terbang dan navigasi jarak jauh tanpa sesat — Allah kurniakan sistem navigasi semula jadi yang menakjubkan",
        nota: "Terbang ribuan km tanpa GPS!"
      },
      {
        id: "t5-fc-06",
        subtopik: "5.2",
        muka: "Ikan 🐟",
        belakang: "Boleh bernafas dalam air dan hidup dalam tekanan laut dalam — Allah cipta sistem pernafasan sesuai dengan habitatnya",
        nota: "Bernafas menggunakan insang"
      },
      {
        id: "t5-fc-07",
        subtopik: "5.2",
        muka: "Semut 🐜",
        belakang: "Hidup berjemaah, bekerjasama, sangat kuat berbanding saiznya — Allah cipta semut dengan sistem sosial yang teratur",
        arab: "النَّمْل",
        nota: "Ada surah khas: An-Naml = Semut"
      },
    ],

    // --- PERINGKAT 2: CUBA — Tafakur Card + Matching ---
    // Tafakur Card: 3 lapisan — gambar → fakta sains → kaitan Allah → renungan
    // Matching: padankan haiwan dengan keistimewaan
    aktivitiCuba: {
      jenis: ["tafakurcard", "matching"],

      tafakurcard: {
        subtopik: "5.2",
        arahan: "Klik pada setiap haiwan untuk tafakur tentang kebesaran Allah",
        kad: [
          {
            id: "tc1",
            haiwan: "Lebah 🐝",
            warna: "#f4a261",
            faktaSains: "Lebah membina sarang dalam bentuk heksagon yang sempurna — setiap sel sama saiz, jimat ruang dan lilin secara semula jadi",
            faktaQuran: "Allah ilhamkan lebah dalam Surah An-Nahl — kepintaran lebah adalah bukti kebesaran Allah, bukan kebetulan",
            renungan: "Siapa yang ajar lebah matematik? Hanya Allah yang Maha Pencipta! 🌟"
          },
          {
            id: "tc2",
            haiwan: "Burung 🐦",
            warna: "#52b788",
            faktaSains: "Burung boleh terbang ribuan km dari satu benua ke benua lain dan balik ke sarang asal — tanpa peta, tanpa GPS",
            faktaQuran: "Allah kurniakan burung sistem navigasi menggunakan medan magnet bumi — tanda kekuasaan Allah yang nyata",
            renungan: "Siapa yang bagi burung kompas dalam badannya? Hanya Allah! 🌟"
          },
          {
            id: "tc3",
            haiwan: "Ikan 🐟",
            warna: "#0077b6",
            faktaSains: "Ikan boleh bernafas di dalam air menggunakan insang — mengambil oksigen dari air, bukan dari udara seperti manusia",
            faktaQuran: "Allah cipta setiap makhluk dengan sistem yang sesuai dengan habitatnya — ini bukti Allah Maha Bijaksana",
            renungan: "Siapa yang bagi ikan cara bernafas dalam air? Hanya Allah yang Maha Pencipta! 🌟"
          },
          {
            id: "tc4",
            haiwan: "Semut 🐜",
            warna: "#9b5de5",
            faktaSains: "Semut boleh angkat beban 50 kali lebih berat dari badannya. Mereka hidup bermasyarakat dengan ketua, pekerja, dan tentera",
            faktaQuran: "Allah sebut semut dalam Surah An-Naml — sistem sosial semut mengajar kita tentang bekerjasama dan disiplin",
            renungan: "Siapa yang ajar semut cara hidup bermasyarakat? Hanya Allah! 🌟"
          },
        ]
      },

      matching: {
        subtopik: "5.2",
        arahan: "Padankan setiap haiwan dengan kaitan kebesaran Allah",
        pasangan: [
          { id: "m1", kiri: "Lebah 🐝",  kanan: "Allah ilhamkan kepintaran membina sarang heksagon — Surah An-Nahl" },
          { id: "m2", kiri: "Burung 🐦", kanan: "Allah kurniakan sistem navigasi semula jadi ribuan km" },
          { id: "m3", kiri: "Ikan 🐟",   kanan: "Allah cipta sistem pernafasan khusus untuk hidup dalam air" },
          { id: "m4", kiri: "Semut 🐜",  kanan: "Allah cipta sistem sosial yang teratur — Surah An-Naml" },
        ]
      }
    },

    // --- PERINGKAT 3: INGAT — Reflection Card (Perasaan Kagum) ---
    // Topik 5 BERBEZA dari Topik 1-4:
    // Bukan checklist amalan — tapi ekspresi perasaan kagum (tafakur)
    // "Rasa kagum itu sendiri adalah ibadah"
    reflectionCard: {
      subtopik: "5.2",
      jenis: "perasaan", // bukan "amalan" — ini unik untuk Topik 5
      tajuk: "Rasa Kagum Kepada Allah 🌿",
      arahan: "Selepas belajar tentang haiwan-haiwan Allah... apa yang kamu rasa?",
      pilihan: [
        { id: "r1", teks: "Saya kagum dengan ciptaan Allah! 😲",         ikon: "🌟" },
        { id: "r2", teks: "Saya bersyukur Allah cipta alam yang indah",  ikon: "🤲" },
        { id: "r3", teks: "Saya nak belajar lebih banyak tentang alam",  ikon: "🔍" },
        { id: "r4", teks: "Saya sedar betapa Maha Berkuasanya Allah",    ikon: "💚" },
        { id: "r5", teks: "Saya nak lebih banyak tafakur tentang alam",  ikon: "🌿" },
      ],
      pesanTamat: "MasyaAllah! Rasa kagum itu sendiri adalah ibadah — itulah yang dipanggil TAFAKUR. Teruskan! 🌿"
    }
  },

  // ============================================================
  // HELPERS
  // ============================================================
  get semuaTopik() {
    return [this.topik1, this.topik2, this.topik3, this.topik4, this.topik5];
  },

  getTopik(id) {
    return this.semuaTopik.find(t => t.id === id) || null;
  },

  // Peta aktiviti lengkap — rujukan untuk UI navigation
  petaAktiviti: [
    { topik: "t1", tajuk: "Beriman kepada Kitab",       p1: "Flash Card", p2: "Matching + Drag & Drop",     p3: "Reflection Card" },
    { topik: "t2", tajuk: "Beriman kepada Hari Kiamat", p1: "Flash Card", p2: "Open the Box + Drag & Drop",  p3: "Reflection Card" },
    { topik: "t3", tajuk: "Mukhalafatu Lil Hawadith",   p1: "Flash Card", p2: "Puzzle Ayat + Fill in Blank", p3: "Reflection Card" },
    { topik: "t4", tajuk: "Qiyamuhu Binafsih",          p1: "Flash Card", p2: "Puzzle Ayat + Kad Gabungan",  p3: "Reflection Card" },
    { topik: "t5", tajuk: "Islam & Sains (Haiwan)",     p1: "Flash Card", p2: "Tafakur Card + Matching",     p3: "Reflection Card (Perasaan)" },
  ],

  get jumlahFlashcard() {
    return this.semuaTopik.reduce((sum, t) => sum + (t.flashcard?.length || 0), 0);
  },

};

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = AKIDAH_TAHUN3;
}
