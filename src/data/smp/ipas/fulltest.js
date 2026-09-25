// Bank soal Ilmu Pengetahuan Alam dan Sosial (IPAS) SMP - Soal Drilling 1 & 2 (80 soal).
// Sumber: IPAS.pdf ("TES KEMAMPUAN AKADEMIK SEKOLAH MENENGAH PERTAMA",
// bagian "Soal Drilling 1" dan "Soal Drilling 2", masing-masing 40 soal).
//
// CATATAN: dokumen sumber tidak menyertakan halaman kunci jawaban, sehingga
// jawaban pada file ini disusun berdasarkan analisis konsep IPA (fisika,
// biologi, kimia) untuk tiap soal, bukan disalin dari kunci cetak.
// Mohon dicek ulang jika ada butir yang meragukan.
//
// Struktur mengikuti template fulltest.js yang sudah ada (mis. Biologi SMA):
//   - objek soal punya id/category/type/options/answer
//   - soal dengan beberapa pernyataan bernomor memakai stimulus: { instruction, paragraphs }
//   - questionsByCategory diekspor per paket, default export = gabungan semua soal.
//
// PEMBAGIAN PAKET (kesulitan rata):
// 80 soal (Drilling 1 = 40 soal, Drilling 2 = 40 soal) dibagi ke 4 paket,
// masing-masing 20 soal (10 dari Drilling 1 + 10 dari Drilling 2), dipilih
// dengan pola round-robin (soal ke-1,5,9,... masuk Paket 1; ke-2,6,10,...
// masuk Paket 2; dst). Karena soal dalam tiap drilling cenderung makin sulit
// di nomor belakang, pola round-robin ini menyebarkan soal mudah-sedang-sulit
// secara merata ke keempat paket, bukan mengelompokkannya berurutan.

const skalaJangkaSorongUangKoin = '/images/smp/ipa/jangka-sorong-uang-koin.png'

// =====================================================================
// DRILLING 1 (40 soal)
// =====================================================================
const drilling1 = [
  {
    id: 'drilling1-01',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Seorang siswa berdiri di depan sebuah cermin datar dan mengamati pantulan dirinya. Bayangan yang terbentuk tampak seolah-olah berada di belakang cermin, tegak lurus terhadap tubuh asli, dan tidak mengalami perubahan ukuran. Berdasarkan ciri tersebut, sifat bayangan pada cermin datar adalah ....',
    options: ['Nyata, terbalik, diperbesar', 'Maya, tegak, sama besar', 'Maya, terbalik, diperkecil', 'Nyata, tegak, sama besar'],
    answer: 'Maya, tegak, sama besar'
  },
  {
    id: 'drilling1-02',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam suatu percobaan kelistrikan, diketahui bahwa beda potensial pada suatu hambatan adalah 9 volt dan hambatannya 30 ohm. Berdasarkan hukum Ohm, berapakah besar arus listrik yang mengalir dalam rangkaian tersebut?',
    options: ['0,3 ampere', '3 ampere', '27 ampere', '270 ampere'],
    answer: '0,3 ampere'
  },
  {
    id: 'drilling1-03',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Untuk meningkatkan tegangan listrik yang dihasilkan oleh suatu kumparan dalam percobaan induksi elektromagnetik, tindakan manakah yang paling tepat dilakukan?',
    options: [
      'Memperlebar jarak antar lilitan dan memperkecil diameter kawat',
      'Memperkuat intensitas medan magnet dan mempercepat pergerakan magnet',
      'Mengurangi jumlah lilitan dan memperbesar diameter kawat',
      'Memperkuat medan magnet dan memperkecil panjang kawat'
    ],
    answer: 'Memperkuat intensitas medan magnet dan mempercepat pergerakan magnet'
  },
  {
    id: 'drilling1-04',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dari pernyataan berikut, manakah yang tergolong besaran pokok dalam sistem satuan internasional (SI)?',
    options: [
      'Panjang, massa, waktu, suhu, kuat arus listrik, jumlah zat, dan intensitas cahaya',
      'Massa, gaya, suhu, energi, dan tekanan',
      'Panjang, volume, massa, dan energi',
      'Waktu, gaya, tekanan, dan suhu'
    ],
    answer: 'Panjang, massa, waktu, suhu, kuat arus listrik, jumlah zat, dan intensitas cahaya'
  },
  {
    id: 'drilling1-05',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Di bawah ini yang merupakan contoh dari kelompok besaran turunan adalah ....',
    options: ['Panjang, waktu, massa', 'Kecepatan, gaya, dan percepatan', 'Waktu, intensitas cahaya, suhu', 'Massa, panjang, kuat arus listrik'],
    answer: 'Kecepatan, gaya, dan percepatan'
  },
  {
    id: 'drilling1-06',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Urutan fase-fase yang terjadi selama pembelahan mitosis yang berlangsung pada sel tubuh adalah ....',
    options: ['Profase, metafase, anafase, telofase', 'Interfase, profase I, metafase I, telofase', 'Anafase, profase, telofase, metafase', 'Profase II, metafase II, anafase II, telofase II'],
    answer: 'Profase, metafase, anafase, telofase'
  },
  {
    id: 'drilling1-07',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam sistem reproduksi wanita, terdapat saluran yang menghubungkan ovarium ke rahim dan merupakan tempat terjadinya pembuahan. Saluran tersebut dinamakan ....',
    options: ['Oviduk (tuba falopi)', 'Serviks', 'Vagina', 'Uterus'],
    answer: 'Oviduk (tuba falopi)'
  },
  {
    id: 'drilling1-08',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Seorang siswa melakukan identifikasi organ pernapasan manusia menggunakan torso. Ia menemukan organ yang:',
      paragraphs: [
        '<ol class="statement-list"><li>Terletak di saluran pernapasan atas</li><li>Mengandung rambut-rambut halus untuk menyaring udara</li><li>Memiliki permukaan yang berkonka untuk memanaskan udara yang masuk</li></ol>'
      ]
    },
    question: 'Organ yang dimaksud kemungkinan besar adalah ....',
    options: ['Bronkus', 'Faring', 'Trakea', 'Rongga hidung'],
    answer: 'Rongga hidung'
  },
  {
    id: 'drilling1-09',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Indikator lakmus biru yang dicelupkan ke dalam larutan asam akan berubah warna menjadi ....',
    options: ['Merah', 'Biru', 'Kuning', 'Hijau'],
    answer: 'Merah'
  },
  {
    id: 'drilling1-10',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Proses pembuatan garam dapur yang biasa dilakukan oleh petani garam melibatkan tahapan ....',
    options: ['Penguapan dan kristalisasi dari air laut', 'Penyaringan air laut', 'Pengembunan dari air laut', 'Sublimasi'],
    answer: 'Penguapan dan kristalisasi dari air laut'
  },
  {
    id: 'drilling1-11',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Jika suhu pada thermometer Celsius menunjukkan 30°C, maka suhu yang tercatat pada thermometer Fahrenheit adalah ....',
    options: ['104°F', '98°F', '86°F', '68°F'],
    answer: '86°F'
  },
  {
    id: 'drilling1-12',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Rel kereta api memiliki sambungan renggang di setiap titiknya. Hal ini bertujuan agar ....',
    options: ['Rel tidak melengkung saat terpapar panas', 'Kereta api mengeluarkan bunyi saat melewati sambungan', 'Pemasangan rel menjadi lebih mudah', 'Biaya pembuatan rel menjadi lebih murah'],
    answer: 'Rel tidak melengkung saat terpapar panas'
  },
  {
    id: 'drilling1-13',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Perhatikan fenomena berikut ini: Tanaman pot di dalam ruangan yang selalu menghadap ke arah cahaya. Fenomena ini menunjukkan bahwa makhluk hidup memiliki ciri hidup yang berupa ....',
    options: ['Berkembang biak', 'Bergerak', 'Peka terhadap rangsang', 'Memerlukan makan'],
    answer: 'Peka terhadap rangsang'
  },
  {
    id: 'drilling1-14',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Pada pelajaran IPA, langkah pertama yang dilakukan untuk memahami objek-objek yang ada di sekitar kita adalah dengan melakukan ....',
    options: ['Pengamatan', 'Pengukuran', 'Perhitungan', 'Penilaian'],
    answer: 'Pengamatan'
  },
  {
    id: 'drilling1-15',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Berdasarkan perubahan-perubahan yang terjadi di bawah ini,',
      paragraphs: [
        '<ol class="statement-list"><li>Nasi menjadi basi</li><li>Es batu meleleh menjadi air</li><li>Perubahan warna tembok akibat lumut</li><li>Pembakaran kembang api</li></ol>'
      ]
    },
    question: 'Manakah yang termasuk perubahan kimia?',
    options: ['1 dan 2', '1 dan 4', '2 dan 3', '3 dan 4'],
    answer: '1 dan 4'
  },
  {
    id: 'drilling1-16',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan berbagai jenis gerakan berikut:',
      paragraphs: [
        '<ol class="statement-list"><li>Batang tanaman bergerak mengarah ke matahari</li><li>Daun putri malu mengucup saat disentuh</li><li>Bunga pukul empat mekar pada sore hari</li><li>Sulur tanaman melilit pada penyangganya</li></ol>'
      ]
    },
    question: 'Gerakan tropisme ditunjukkan oleh nomor ...',
    options: ['1 dan 3', '1 dan 4', '2 dan 3', '2 dan 4'],
    answer: '1 dan 4'
  },
  {
    id: 'drilling1-17',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Sebuah mobil bergerak dengan kecepatan konstan 72 km/jam. Jarak yang ditempuh mobil setelah bergerak selama 15 detik adalah ....',
    options: ['144 m', '300 m', '400 m', '1.080 m'],
    answer: '300 m'
  },
  {
    id: 'drilling1-18',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Edo mendorong meja dengan gaya 30 N hingga meja bergerak sejauh 2 m</li><li>Seekor kuda menarik delman dengan gaya 4.000 N dan delman berpindah sejauh 15 m</li><li>Sebuah mobil menabrak pohon dengan gaya 2.000 N hingga pohon tumbang</li></ol>'
      ]
    },
    question: 'Pernyataan yang menggambarkan contoh usaha dalam ilmu fisika adalah ....',
    options: ['1 dan 2', '1, 2, dan 3', '3 dan 1', '3 dan 2'],
    answer: '1, 2, dan 3'
  },
  {
    id: 'drilling1-19',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Simak pernyataan berikut ini dengan saksama:',
      paragraphs: [
        '<ol class="statement-list"><li>Memiliki bentuk yang tidak bergantung pada wadah</li><li>Volumenya konstan meskipun ditempatkan dalam wadah berbeda</li><li>Susunan partikel sangat rapat dan teratur</li><li>Interaksi antar partikel sangat lemah</li></ol>'
      ]
    },
    question: 'Manakah kombinasi yang benar untuk mendeskripsikan sifat fisis zat padat?',
    options: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    answer: '(1) dan (3)'
  },
  {
    id: 'drilling1-20',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Cermati fenomena gerak benda berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Buah mangga jatuh dari pohon ke tanah secara vertikal</li><li>Bola menggelinding melewati permukaan berpasir</li><li>Kelereng meluncur pada bidang miring tanpa hambatan</li><li>Peluru ditembakkan lurus ke atas dari permukaan tanah</li></ol>'
      ]
    },
    question: 'Yang termasuk contoh gerak lurus berubah beraturan diperlambat adalah ....',
    options: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    answer: '(2) dan (4)'
  },
  {
    id: 'drilling1-21',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam sistem gerak manusia, bagian tubuh yang menghubungkan antara dua tulang dan memungkinkan terjadinya pergerakan adalah ....',
    options: ['Ligamen', 'Otot lurik', 'Sendi', 'Tulang rawan'],
    answer: 'Sendi'
  },
  {
    id: 'drilling1-22',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan-pernyataan berikut ini terkait benda langit:',
      paragraphs: [
        '<ol class="statement-list"><li>Bergerak mengelilingi bintang (revolusi) dan pada porosnya (rotasi)</li><li>Tidak memancarkan cahaya sendiri</li><li>Memancarkan cahaya hasil dari reaksi fusi di dalamnya</li><li>Menghasilkan energi sendiri dalam bentuk panas dan cahaya</li></ol>'
      ]
    },
    question: 'Pernyataan yang tepat untuk planet dan bintang secara berurutan adalah ....',
    options: ['(3), (4) dan (1), (2)', '(2), (4) dan (1), (3)', '(1), (3) dan (2), (4)', '(1), (2) dan (3), (4)'],
    answer: '(1), (2) dan (3), (4)'
  },
  {
    id: 'drilling1-23',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Berikut ini adalah beberapa jenis ikan yang ditemukan di lingkungan perairan:',
      paragraphs: [
        '<ol class="statement-list"><li>Hiu</li><li>Ikan Gurame</li><li>Ikan Tongkol</li><li>Ikan Sarden</li><li>Ikan Bandeng</li><li>Ikan Teri</li><li>Ikan Mas</li><li>Ikan Pari</li></ol>'
      ]
    },
    question: 'Manakah di antara ikan-ikan tersebut yang merupakan contoh komponen biotik khas air tawar?',
    options: ['(1) dan (5)', '(2) dan (7)', '(3) dan (4)', '(6) dan (8)'],
    answer: '(2) dan (7)'
  },
  {
    id: 'drilling1-24',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Salah satu fenomena yang muncul selama pandemi Covid-19 adalah membaiknya kualitas lingkungan di beberapa wilayah. Faktor penyebab utama dari kondisi ini adalah ....',
    options: [
      'Peningkatan kandungan oksigen akibat penurunan polusi',
      'Berkurangnya aktivitas kendaraan dan industri',
      'Penurunan jumlah air limbah ke sungai dan laut',
      'Bertambahnya pekerjaan informal seperti pemulung'
    ],
    answer: 'Berkurangnya aktivitas kendaraan dan industri'
  },
  {
    id: 'drilling1-25',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam interaksi antara lebah dan bunga, terjadi hubungan saling menguntungkan yang disebut simbiosis mutualisme. Keuntungan yang diperoleh oleh bunga berupa ....',
    options: [
      'Bunga menyerap nektar yang dibawa oleh lebah',
      'Lebah menggunakan bunga sebagai tempat berlindung',
      'Bunga dibantu penyerbukannya oleh aktivitas lebah',
      'Lebah menjadikan serbuk sari bunga sebagai sumber makanan'
    ],
    answer: 'Bunga dibantu penyerbukannya oleh aktivitas lebah'
  },
  {
    id: 'drilling1-26',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam proses pembuatan magnet secara elektromagnetik, teknik yang tepat untuk menghasilkan medan magnet yang kuat adalah ....',
    options: [
      'Mengalirkan arus AC melalui kawat yang dililitkan pada batang logam',
      'Melilitkan kawat tembaga pada besi atau baja dan dialiri arus searah',
      'Menggosok kawat berarus listrik pada permukaan batang logam',
      'Menyambungkan kawat ke kutub-kutub baterai lalu disentuhkan ke magnet permanen'
    ],
    answer: 'Melilitkan kawat tembaga pada besi atau baja dan dialiri arus searah'
  },
  {
    id: 'drilling1-27',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Generator bekerja berdasarkan prinsip konversi energi. Energi awal yang diubah menjadi energi listrik oleh alat ini berasal dari ....',
    options: ['Energi kimia yang dihasilkan dari reaksi bahan bakar', 'Energi panas dari inti bumi', 'Energi gerak dari perputaran turbin', 'Energi listrik dari arus bolak-balik'],
    answer: 'Energi gerak dari perputaran turbin'
  },
  {
    id: 'drilling1-28',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam teknologi kereta cepat maglev, gaya angkat dan gerak diperoleh melalui pemanfaatan medan magnet yang berasal dari ....',
    options: ['Elektromagnet biasa', 'Magnet sementara berbasis logam ringan', 'Bahan superkonduktor dengan suhu sangat rendah', 'Magnet permanen dari paduan neodymium'],
    answer: 'Bahan superkonduktor dengan suhu sangat rendah'
  },
  {
    id: 'drilling1-29',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Beberapa jenis burung memiliki kemampuan alami untuk mengenali arah medan magnet bumi. Hal ini dimungkinkan karena keberadaan senyawa ....',
    options: ['Feritin di tulang paruh', 'Magnetit pada jaringan otak', 'Hemoglobin yang terpolarisasi', 'Greigite dalam sel saraf sensorik'],
    answer: 'Magnetit pada jaringan otak'
  },
  {
    id: 'drilling1-30',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Andi menemukan magnet batang, namun tidak mengetahui kutub-kutubnya. Cara ilmiah paling akurat untuk menentukan kutub utara dan selatan magnet tersebut adalah ....',
    options: [
      'Menggantungkan magnet dengan benang dan mengamati arahnya saat diam',
      'Menggosokkan magnet ke benda logam lalu melihat efek tarikannya',
      'Menghubungkan magnet ke rangkaian listrik searah',
      'Mendeteksinya dengan menggunakan kawat berarus listrik'
    ],
    answer: 'Menggantungkan magnet dengan benang dan mengamati arahnya saat diam'
  },
  {
    id: 'drilling1-31',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Rilda diminta membuat elektromagnet untuk eksperimen sekolah. Bahan utama yang seharusnya ia siapkan antara lain ....',
    options: [
      'Paku besi, kawat tembaga, dan baterai sebagai sumber arus',
      'Magnet batang, aluminium foil, dan kabel serat optik',
      'Emas, logam tembaga, dan catu daya AC',
      'Besi, kawat besi, dan batu baterai'
    ],
    answer: 'Paku besi, kawat tembaga, dan baterai sebagai sumber arus'
  },
  {
    id: 'drilling1-32',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Gaya Lorentz muncul akibat interaksi medan magnet dengan arus listrik dalam konduktor. Di bawah ini, manakah faktor yang tidak memengaruhi besar kecilnya gaya Lorentz?',
    options: ['Panjang penghantar', 'Kuat medan magnet', 'Kuat arus listrik', 'Volume logam penghantar'],
    answer: 'Volume logam penghantar'
  },
  {
    id: 'drilling1-33',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Beberapa tindakan berikut dapat memengaruhi keberadaan sifat kemagnetan suatu benda.',
      paragraphs: [
        '<ol class="statement-list"><li>Menggosok-gosok besi dengan magnet secara terus-menerus</li><li>Mengaliri magnet dengan arus AC</li><li>Memanaskan magnet hingga suhu tinggi</li><li>Menginduksi besi dengan magnet kuat</li></ol>'
      ]
    },
    question: 'Pilihlah tindakan yang dapat menyebabkan hilangnya sifat magnet pada benda tersebut!',
    options: ['(1) dan (2)', '(1) dan (3)', '(2) dan (3)', '(3) dan (4)'],
    answer: '(2) dan (3)'
  },
  {
    id: 'drilling1-34',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Sebuah trafo step-down memiliki perbandingan lilitan primer dan sekunder sebesar 5:1. Jika arus listrik yang masuk ke kumparan primer sebesar 5 A, maka arus yang mengalir pada kumparan sekunder adalah ....',
    options: ['1 A', '5 A', '25 A', '50 A'],
    answer: '25 A'
  },
  {
    id: 'drilling1-35',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan daftar peristiwa berikut ini!',
      paragraphs: [
        '<ol class="statement-list"><li>Sebuah balon pecah saat tertusuk benda tajam</li><li>Sebatang lilin terbakar menghasilkan nyala api dan gas</li><li>Mentega meleleh saat dipanaskan</li><li>Paku dibiarkan di udara lembap hingga berkarat</li></ol>'
      ]
    },
    question: 'Manakah dari peristiwa tersebut yang termasuk ke dalam perubahan kimia yang bersifat permanen dan tidak dapat dikembalikan seperti semula?',
    options: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    answer: '(2) dan (4)'
  },
  {
    id: 'drilling1-36',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam dunia industri makanan, beberapa bahan aditif digunakan untuk meningkatkan mutu dan ketahanan makanan. Urutan yang benar mengenai zat aditif berikut: monosodium glutamat, aspartam, dan natrium benzoat adalah ....',
    options: [
      'Penambah rasa, pemanis buatan, dan pengawet',
      'Pemanis alami, pengawet, dan penambah aroma',
      'Pewarna makanan, pemanis, dan antioksidan',
      'Pengawet, penyedap, dan penambah tekstur'
    ],
    answer: 'Penambah rasa, pemanis buatan, dan pengawet'
  },
  {
    id: 'drilling1-37',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Seorang remaja mengalami kecanduan psikotropika dan ingin berhenti total. Upaya yang paling tepat dan aman untuk menghentikan ketergantungan terhadap zat tersebut adalah ....',
    options: [
      'Menahan diri dengan paksa tanpa bantuan medis, meskipun menimbulkan efek samping fisik',
      'Menggunakan bahan alternatif yang dianggap tidak berbahaya sebagai pengganti',
      'Mengurangi dosis secara mandiri sesuai kenyamanan pribadi',
      'Mencari bantuan profesional untuk menjalani terapi medis dan rehabilitasi psikologis'
    ],
    answer: 'Mencari bantuan profesional untuk menjalani terapi medis dan rehabilitasi psikologis'
  },
  {
    id: 'drilling1-38',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Jika dilihat dari ada atau tidaknya perubahan kecepatan, maka klasifikasi dasar gerak dalam ilmu fisika dibagi menjadi ....',
    options: ['Gerak tetap dan gerak jatuh bebas', 'Gerak dengan dan tanpa lintasan', 'Gerak beraturan dan gerak berubah beraturan', 'Gerak rotasi dan gerak translasi'],
    answer: 'Gerak beraturan dan gerak berubah beraturan'
  },
  {
    id: 'drilling1-39',
    source: 'Soal Drilling 1',
    type: 'single',
    stimulus: {
      instruction: 'Cermati beberapa fenomena berikut!',
      paragraphs: [
        '<ol class="statement-list"><li>Bola basket menggelinding dengan kecepatan konstan di lantai datar</li><li>Bola basket jatuh dari tangan Budi di lantai dua sekolah</li><li>Sebuah mobil mainan yang dinyalakan dengan baterai</li><li>Mobil balap mini (Tamiya) melaju lebih cepat di lintasan menurun</li></ol>'
      ]
    },
    question: 'Peristiwa yang menunjukkan gerak lurus dengan percepatan tetap adalah ....',
    options: ['(1) dan (2)', '(1) dan (4)', '(2) dan (3)', '(2) dan (4)'],
    answer: '(2) dan (4)'
  },
  {
    id: 'drilling1-40',
    source: 'Soal Drilling 1',
    type: 'single',
    question: 'Dalam hukum Newton tentang gerak, semakin besar gaya yang diterapkan pada suatu benda dengan massa tetap, maka ....',
    options: [
      'Kecepatan benda akan menurun karena hambatan',
      'Jarak tempuh benda menjadi lebih singkat',
      'Percepatan benda akan meningkat sesuai besar gaya',
      'Benda akan tetap diam jika tidak ada gaya gesek'
    ],
    answer: 'Percepatan benda akan meningkat sesuai besar gaya'
  }
]

// =====================================================================
// DRILLING 2 (40 soal)
// =====================================================================
const drilling2 = [
  {
    id: 'drilling2-01',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Cermatilah berbagai peristiwa berikut yang berkaitan dengan perubahan materi:',
      paragraphs: [
        '<ol class="statement-list"><li>Buah anggur difermentasi menjadi minuman beralkohol</li><li>Air laut dibekukan dalam mesin pembeku menjadi es balok</li><li>Serbuk besi yang dibiarkan di udara terbuka berkarat setelah beberapa minggu</li><li>Biji kopi digiling menjadi bubuk kopi</li></ol>'
      ]
    },
    question: 'Dari keempat kejadian tersebut, manakah yang menunjukkan terjadinya perubahan kimia?',
    options: ['(1) dan (3)', '(2) dan (4)', '(1) dan (2)', '(3) dan (4)'],
    answer: '(1) dan (3)'
  },
  {
    id: 'drilling2-02',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Dalam proses produksi garam dapur di pesisir pantai, para petani garam memanfaatkan metode pemisahan campuran berdasarkan perbedaan titik didih pelarut dan zat terlarutnya. Teknik pemisahan yang digunakan dalam proses ini disebut ....',
    options: ['Distilasi', 'Kristalisasi', 'Evaporasi', 'Dekantasi'],
    answer: 'Distilasi'
  },
  {
    id: 'drilling2-03',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan fenomena berikut yang berkaitan dengan konsep gerak:',
      paragraphs: [
        '<ol class="statement-list"><li>Sebuah mobil listrik dipercepat pada lintasan lurus oleh kendali remote</li><li>Sebuah apel jatuh dari pohon dan kecepatannya bertambah seiring waktu</li><li>Sebuah sepeda bergerak dengan kecepatan tetap di jalan datar</li><li>Bola ditendang dan menggelinding, lalu melambat hingga berhenti</li></ol>'
      ]
    },
    question: 'Manakah yang merupakan contoh dari gerak lurus berubah beraturan (GLBB) dipercepat?',
    options: ['(1) dan (2)', '(2) dan (4)', '(1) dan (3)', '(3) dan (4)'],
    answer: '(1) dan (2)'
  },
  {
    id: 'drilling2-04',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Saat sebuah benda meluncur di atas lantai kasar tanpa diberikan gaya tambahan, lama-kelamaan benda tersebut melambat dan berhenti. Gaya apa yang paling dominan menyebabkan benda tersebut kehilangan kecepatannya?',
    options: ['Gaya gravitasi', 'Gaya normal', 'Gaya gesek', 'Gaya sentripetal'],
    answer: 'Gaya gesek'
  },
  {
    id: 'drilling2-05',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Amati berbagai fenomena berikut ini yang terjadi secara rutin di permukaan Bumi:',
      paragraphs: [
        '<ol class="statement-list"><li>Matahari tampak bergerak dari timur ke barat setiap hari</li><li>Selisih waktu antara kota Jayapura dan Jakarta</li><li>Terjadinya perubahan musim antara kemarau dan penghujan</li><li>Perbedaan lama siang dan malam sepanjang tahun di wilayah khatulistiwa</li></ol>'
      ]
    },
    question: 'Dari pernyataan tersebut, manakah yang merupakan konsekuensi langsung dari rotasi Bumi pada porosnya?',
    options: ['(1) dan (3)', '(1) dan (2)', '(2) dan (3)', '(3) dan (4)'],
    answer: '(1) dan (2)'
  },
  {
    id: 'drilling2-06',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Seorang bayi mengalami peningkatan tinggi badan secara signifikan dalam waktu satu bulan. Hal ini menunjukkan bahwa makhluk hidup mengalami proses biologis yang disebut ....',
    options: ['Metabolisme', 'Adaptasi', 'Pertumbuhan', 'Reproduksi'],
    answer: 'Pertumbuhan'
  },
  {
    id: 'drilling2-07',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan berbagai organisme berikut:',
      paragraphs: [
        '<ol class="statement-list"><li>Padi</li><li>Katak</li><li>Belalang</li><li>Ular sawah</li><li>Burung pipit</li><li>Kelinci</li><li>Petani</li><li>Alga</li></ol>'
      ]
    },
    question: 'Dari daftar tersebut, manakah yang tergolong komponen biotik khas ekosistem pertanian sawah?',
    options: ['1, 3, 4, dan 7', '1, 2, 6, dan 8', '1, 3, 5, dan 8', '2, 4, 5, dan 6'],
    answer: '1, 3, 4, dan 7'
  },
  {
    id: 'drilling2-08',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Fenomena meningkatnya kasus serangan macan tutul terhadap hewan ternak di kawasan sekitar hutan dipengaruhi oleh beberapa faktor ekologis, antara lain:',
      paragraphs: [
        '<ol class="statement-list"><li>Menyusutnya wilayah hutan sebagai tempat tinggal macan tutul</li><li>Berkurangnya populasi mangsa alami di habitat aslinya</li><li>Semakin dekatnya aktivitas manusia ke wilayah konservasi</li><li>Pola adaptasi makhluk hidup terhadap tekanan lingkungan</li></ol>'
      ]
    },
    question: 'Faktor-faktor yang paling memungkinkan menjadi penyebab meningkatnya konflik antara satwa liar dan manusia ditunjukkan oleh ....',
    options: ['1, 2, dan 3', '1, 2, dan 4', '1, 3, dan 4', '2, 3, dan 4'],
    answer: '1, 2, dan 3'
  },
  {
    id: 'drilling2-09',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan beberapa perilaku manusia berikut ini terkait dengan pengelolaan limbah:',
      paragraphs: [
        '<ol class="statement-list"><li>Sampah rumah tangga dibuang sembarangan ke sungai</li><li>Sampah anorganik didaur ulang menjadi perabotan rumah tangga</li><li>Limbah pabrik dialirkan langsung ke sungai tanpa proses netralisasi</li><li>Sisa panen dibakar di lahan pertanian tanpa pengolahan</li></ol>'
      ]
    },
    question: 'Dari keempat perilaku tersebut, yang termasuk contoh tindakan ramah lingkungan adalah ....',
    options: ['Nomor 1 dan 2', 'Nomor 2 dan 4', 'Hanya nomor 2', 'Semua nomor di atas'],
    answer: 'Hanya nomor 2'
  },
  {
    id: 'drilling2-10',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Dalam kajian biologi, struktur kehidupan tersusun secara hierarki dari satuan terkecil hingga satuan yang kompleks. Urutan yang tepat dari unit terkecil hingga menjadi satu sistem organisme utuh adalah ....',
    options: [
      'Organisme – Sel – Organ – Jaringan – Sistem Organ',
      'Sel – Organ – Jaringan – Sistem Organ – Organisme',
      'Sel – Jaringan – Organ – Sistem Organ – Organisme',
      'Organ – Jaringan – Sistem Organ – Organisme – Sel'
    ],
    answer: 'Sel – Jaringan – Organ – Sistem Organ – Organisme'
  },
  {
    id: 'drilling2-11',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Sel tumbuhan memiliki kekhasan struktur yang membuatnya lebih tegar dan mempertahankan bentuk lebih baik dibandingkan sel hewan. Struktur atau organel manakah yang paling berperan dalam memberikan kekuatan mekanik tersebut?',
    options: ['Mitokondria yang menghasilkan energi', 'Membran sel yang bersifat semi-permeabel', 'Dinding sel yang tersusun atas selulosa', 'Kloroplas sebagai tempat fotosintesis'],
    answer: 'Dinding sel yang tersusun atas selulosa'
  },
  {
    id: 'drilling2-12',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Seorang siswa terbiasa membawa tas ransel berat setiap hari di punggungnya. Lama-kelamaan, postur tubuhnya berubah menjadi membungkuk ke depan. Berdasarkan gejala tersebut, jenis kelainan tulang belakang yang mungkin terjadi adalah ....',
    options: [
      'Lordosis, karena lengkungan tulang belakang ke depan berlebihan',
      'Skoliosis, karena kelengkungan tulang belakang ke samping',
      'Kifosis, karena kelengkungan tulang belakang berlebih ke belakang',
      'Rakitis, karena kelainan akibat kekurangan vitamin D'
    ],
    answer: 'Kifosis, karena kelengkungan tulang belakang berlebih ke belakang'
  },
  {
    id: 'drilling2-13',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'AIDS adalah penyakit yang menyerang sistem imun tubuh dan ditularkan melalui cairan tubuh. Salah satu langkah preventif yang paling efektif untuk mencegah penularan HIV/AIDS adalah ....',
    options: [
      'Menjaga pola makan dan olahraga secara rutin',
      'Menjaga jarak dengan penderita saat berbicara',
      'Menjauhi perilaku seksual bebas dan penggunaan narkoba suntik',
      'Mengonsumsi makanan bergizi tinggi setiap hari'
    ],
    answer: 'Menjauhi perilaku seksual bebas dan penggunaan narkoba suntik'
  },
  {
    id: 'drilling2-14',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Fenomena tumbuhnya gulma air seperti eceng gondok secara berlebihan di suatu danau menjadi indikator penting adanya pencemaran air. Peningkatan pertumbuhan tanaman air tersebut umumnya disebabkan oleh tingginya kandungan senyawa fosfat dan nitrogen yang berasal dari ....',
    options: [
      'Limbah pestisida hasil penyemprotan hama tanaman',
      'Limbah detergen rumah tangga yang masuk ke perairan',
      'Sisa-sisa radioaktif dari instalasi nuklir',
      'Tumpahan limbah logam berat dari kawasan industri'
    ],
    answer: 'Limbah detergen rumah tangga yang masuk ke perairan'
  },
  {
    id: 'drilling2-15',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Bioteknologi terbagi menjadi dua jenis, yaitu konvensional dan modern. Amati ciri-ciri berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Dilakukan secara turun-temurun berdasarkan pengalaman</li><li>Menggunakan rekayasa genetika</li><li>Umumnya diterapkan dalam skala industri besar</li><li>Memanfaatkan mikroorganisme alami tanpa modifikasi</li><li>Menghasilkan produk seperti tape, tempe, atau yoghurt</li></ol>'
      ]
    },
    question: 'Ciri-ciri tersebut menggambarkan bioteknologi konvensional yang ditunjukkan oleh nomor ....',
    options: ['1), 3), dan 4)', '2), 3), dan 5)', '1), 4), dan 5)', '2), 4), dan 5)'],
    answer: '1), 4), dan 5)'
  },
  {
    id: 'drilling2-16',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Beberapa fenomena berikut terjadi akibat sifat kapilaritas zat cair dalam kehidupan sehari-hari. Kapilaritas merupakan peristiwa naiknya zat cair melalui celah sempit karena adanya adhesi dan kohesi. Cermatilah peristiwa-peristiwa berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Air meresap ke serat kain pel yang diletakkan di lantai</li><li>Minyak goreng naik melalui sumbu pada lampu minyak</li><li>Air tanah naik melalui jaringan xilem pada tumbuhan</li><li>Tekanan air dalam bejana berhubungan menyebabkan permukaannya sejajar</li></ol>'
      ]
    },
    question: 'Dari peristiwa tersebut, manakah yang merupakan contoh nyata dari gejala kapilaritas?',
    options: ['2, 3, dan 4', '1, 3, dan 4', '1, 2, dan 4', '1, 2, dan 3'],
    answer: '1, 2, dan 3'
  },
  {
    id: 'drilling2-17',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Seorang siswa melakukan percobaan untuk membandingkan skala suhu dari berbagai termometer. Ia mengamati bahwa suatu zat cair menunjukkan suhu 40°C pada termometer Celsius, dan suhu yang sama terbaca sebagai 104 pada termometer A. Berdasarkan data tersebut, tentukan jenis termometer A yang digunakan dan nilai suhu dalam satuan Kelvin!',
    options: [
      'Termometer Fahrenheit, dengan suhu 72°F, dan suhu dalam Kelvin 413 K',
      'Termometer Fahrenheit, dengan suhu 104°F, dan suhu dalam Kelvin 413 K',
      'Termometer Kelvin, dengan suhu 313 K, dan Fahrenheit 72°F',
      'Termometer Fahrenheit, dengan suhu 104°F, dan suhu dalam Kelvin 313 K'
    ],
    answer: 'Termometer Fahrenheit, dengan suhu 104°F, dan suhu dalam Kelvin 313 K'
  },
  {
    id: 'drilling2-18',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Seorang siswa sedang memanaskan air sebanyak 250 gram dari suhu awal 20°C hingga mencapai titik didih. Jika kalor jenis air adalah 4200 J/kg°C, jumlah kalor minimum yang dibutuhkan untuk proses tersebut adalah .... (1 gram = 0,001 kg)',
    options: ['20.000 joule', '84.000 joule', '200.000 joule', '84.000.000 joule'],
    answer: '84.000 joule'
  },
  {
    id: 'drilling2-19',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Dalam sebuah eksperimen, seorang siswa meniup peluit ke arah tembok datar yang berjarak 85 meter. Ia mendengar bunyi pantul 0,5 detik setelah suara peluit ditiup. Hitung kecepatan rambat bunyi saat percobaan dilakukan!',
    options: ['170 m/s', '340 m/s', '360 m/s', '425 m/s'],
    answer: '340 m/s'
  },
  {
    id: 'drilling2-20',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Perhatikan peristiwa berikut! Sebuah penggaris plastik digosokkan secara berulang-ulang ke kain wol, kemudian didekatkan ke potongan kecil kertas dan ternyata kertas tersebut tertarik. Proses tersebut menunjukkan bahwa penggaris mengalami peristiwa muatan listrik karena ....',
    options: [
      'Menerima elektron dari kain wol sehingga bermuatan negatif',
      'Melepaskan proton ke kain wol sehingga bermuatan negatif',
      'Menyerap proton dari kain wol sehingga bermuatan positif',
      'Kehilangan elektron ke kain wol sehingga bermuatan positif'
    ],
    answer: 'Menerima elektron dari kain wol sehingga bermuatan negatif'
  },
  {
    id: 'drilling2-21',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Sebuah rumah menggunakan perangkat elektronik berikut selama 30 hari berturut-turut: 5 lampu masing-masing 20 W, dinyalakan 10 jam/hari, 1 televisi 60 W, dinyalakan 8 jam/hari, 1 setrika 250 W, digunakan 4 jam/hari. Hitunglah total energi listrik yang dikonsumsi dalam satuan kWh selama 30 hari!',
    options: ['5,04 kWh', '7,44 kWh', '50,4 kWh', '74,4 kWh'],
    answer: '74,4 kWh'
  },
  {
    id: 'drilling2-22',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Sebuah lampu sepeda yang digerakkan dengan dinamo akan semakin terang saat sepeda melaju lebih cepat. Fenomena ini terjadi karena ....',
    options: [
      'Kecepatan garis gaya magnet yang memotong kumparan semakin meningkat',
      'Jumlah garis gaya magnet yang melewati kumparan bertambah seiring kecepatan',
      'Kumparan pada dinamo menghasilkan medan magnet yang semakin kuat',
      'Perubahan medan magnet dalam kumparan semakin besar akibat peningkatan kecepatan'
    ],
    answer: 'Kecepatan garis gaya magnet yang memotong kumparan semakin meningkat'
  },
  {
    id: 'drilling2-23',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Cermati ciri-ciri berikut yang berkaitan dengan meteor:',
      paragraphs: [
        '<ol class="statement-list"><li>Memiliki lintasan yang sangat elips</li><li>Lintasannya terletak antara planet Mars dan Jupiter</li><li>Dari bumi, tampak bergerak seperti bintang yang berpindah</li><li>Ketika memasuki atmosfer bumi, meteor akan terbakar dan bercahaya</li></ol>'
      ]
    },
    question: 'Fenomena yang berlaku pada meteor sesuai dengan ciri nomor ....',
    options: ['1 dan 2', '1 dan 3', '2 dan 3', '3 dan 4'],
    answer: '3 dan 4'
  },
  {
    id: 'drilling2-24',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Amati beberapa zat berikut ini dan tentukan yang termasuk unsur murni:',
      paragraphs: [
        '<ol class="statement-list"><li>Seng</li><li>Aluminium</li><li>Gula</li><li>Cuka</li><li>Besi</li></ol>'
      ]
    },
    question: 'Zat yang tergolong unsur adalah ....',
    options: ['1, 2, dan 3', '1, 2, dan 5', '2, 3, dan 4', '3, 4, dan 5'],
    answer: '1, 2, dan 5'
  },
  {
    id: 'drilling2-25',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Kayu memiliki sifat-sifat tertentu yang dapat dikenali. Berdasarkan pengamatan berikut, pilihlah sifat fisik kayu yang tepat:',
      paragraphs: [
        '<ol class="statement-list"><li>Mudah lapuk di tempat yang lembab</li><li>Tidak dapat menghantarkan arus listrik dengan baik</li><li>Dapat terbakar dengan mudah</li><li>Berwujud padat pada suhu kamar</li><li>Tidak efisien dalam menghantarkan panas</li></ol>'
      ]
    },
    question: 'Sifat fisika kayu yang benar ditunjukkan oleh nomor ....',
    options: ['1, 2, dan 3', '1, 2, dan 4', '2, 4, dan 5', '3, 4, dan 5'],
    answer: '2, 4, dan 5'
  },
  {
    id: 'drilling2-26',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Ibu mencampur 2 kg air yang suhunya 100°C dengan 5 kg air yang suhunya 30°C. Berapa suhu akhir campuran?',
    options: ['75°C', '50°C', '45°C', '30°C'],
    answer: '50°C'
  },
  {
    id: 'drilling2-27',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan kelompok besaran berikut ini!',
      paragraphs: [
        '<ol class="statement-list"><li>Volume</li><li>Panjang</li><li>Suhu</li><li>Tekanan</li><li>Jumlah zat</li><li>Gaya</li></ol>'
      ]
    },
    question: 'Yang termasuk kelompok besaran turunan adalah ....',
    options: ['1, 2, dan 4', '1, 4, dan 6', '2, 3, dan 5', '2, 4, dan 6'],
    answer: '1, 4, dan 6'
  },
  {
    id: 'drilling2-28',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Ani mengukur diameter uang koin menggunakan jangka sorong, berdasarkan pengukuran menunjukkan skala pada gambar di bawah ini: (Jika ketelitiannya = 0,01 mm)',
      image: skalaJangkaSorongUangKoin
    },
    question: 'Diameter uang koin skala yang ditunjukkan pada gambar tersebut yaitu ....',
    options: ['4,3 cm ± 5 mm', '4,3 cm ± 0,05 mm', '4,3 cm ± 50 mm', '4,3 cm ± 0,5 mm'],
    answer: '4,3 cm ± 0,05 mm'
  },
  {
    id: 'drilling2-29',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Jarak rumah Sista ke sekolah sejauh 2,3 km. Jika dikonversikan ke dalam satuan SI yang benar adalah ....',
    options: ['2.300 meter', '230 meter', '23 meter', '2,3 meter'],
    answer: '2.300 meter'
  },
  {
    id: 'drilling2-30',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Mempunyai rasa masam</li><li>Korosif terhadap logam</li><li>Mengubah warna lakmus biru menjadi merah</li><li>Bersifat licin</li><li>Melepaskan ion hidrogen</li></ol>'
      ]
    },
    question: 'Berdasarkan pernyataan diatas yang merupakan ciri-ciri dari larutan asam adalah ....',
    options: ['1, 2, 3, dan 4', '1, 2, 3, dan 5', '1, 2, 3, 4 dan 5', '2, 3, 4, dan 5'],
    answer: '1, 2, 3, dan 5'
  },
  {
    id: 'drilling2-31',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Di bawah ini merupakan data nama ilmiah makhluk hidup:',
      paragraphs: [
        '<ol class="statement-list"><li><em>Zea mays</em></li><li><em>Oryza sativa</em></li><li><em>Tamarindus indica</em></li><li><em>Allium cepa</em></li><li><em>Manihot esculenta</em></li></ol>'
      ]
    },
    question: 'Yang merupakan tumbuhan rempah ditunjukkan pada nomor ....',
    options: ['1 dan 3', '2 dan 4', '3 dan 4', '4 dan 5'],
    answer: '3 dan 4'
  },
  {
    id: 'drilling2-32',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Mempunyai bunga yang sesungguhnya</li><li>Memiliki akar tunggang</li><li>Memiliki daun yang kaku dan sempit</li><li>Biji terletak di dalam buah</li><li>Tidak menggugurkan daunnya</li></ol>'
      ]
    },
    question: 'Yang termasuk ciri-ciri tumbuhan biji tertutup adalah ....',
    options: ['1, 2 dan 3', '1 dan 4', '2, 3 dan 4', '3 dan 4'],
    answer: '1 dan 4'
  },
  {
    id: 'drilling2-33',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Organel yang ada pada sel hewan namun tidak dimiliki oleh sel tumbuhan adalah ....',
    options: ['Lisosom', 'Dinding sel', 'Ribosom', 'Vakuola'],
    answer: 'Lisosom'
  },
  {
    id: 'drilling2-34',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Jaringan pada tumbuhan yang memiliki fungsi untuk menyimpan cadangan makanan adalah ....',
    options: ['Meristem', 'Epidermis', 'Pengangkut', 'Parenkim'],
    answer: 'Parenkim'
  },
  {
    id: 'drilling2-35',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Populasi burung Rangkong Sumba terus menurun dan kini hanya tersisa sekitar 4100 ekor di alam liar. Langkah strategis berbasis ekologi konservasi yang paling tepat untuk menjaga keberlangsungan populasi burung ini adalah ....',
    options: [
      'Membangun pusat perawatan satwa liar di luar habitat asli mereka',
      'Memperbaiki ekosistem alami yang rusak agar mendukung kehidupan satwa',
      'Mengembangkan program penangkaran dengan memperbanyak spesies',
      'Membuat sarang buatan di tempat-tempat penampungan satwa'
    ],
    answer: 'Memperbaiki ekosistem alami yang rusak agar mendukung kehidupan satwa'
  },
  {
    id: 'drilling2-36',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Aktivitas manusia seperti penggunaan kendaraan bermotor secara masif, pembakaran hutan, serta deforestasi menghasilkan akumulasi gas-gas rumah kaca. Jika kondisi ini terus berlanjut, dampak utama yang akan dirasakan bumi adalah ....',
    options: [
      'Terjadinya hujan asam secara berkala',
      'Perubahan iklim global akibat efek rumah kaca',
      'Meningkatnya penyebaran penyakit tropis',
      'Penipisan lapisan ozon yang semakin cepat'
    ],
    answer: 'Perubahan iklim global akibat efek rumah kaca'
  },
  {
    id: 'drilling2-37',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Pemerintah mendorong masyarakat untuk menerapkan pola keluarga kecil sebagai upaya menekan laju pertumbuhan penduduk. Tujuan dari kebijakan ini secara jangka panjang adalah ....',
    options: [
      'Menjaga stabilitas pangan nasional',
      'Menjamin pelayanan kesehatan yang optimal',
      'Meningkatkan efisiensi pengelolaan sumber daya',
      'Mengontrol angka kelahiran agar tidak melebihi daya dukung lingkungan'
    ],
    answer: 'Mengontrol angka kelahiran agar tidak melebihi daya dukung lingkungan'
  },
  {
    id: 'drilling2-38',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Transfusi darah yang tidak sesuai golongan dapat menyebabkan aglutinasi. Mengapa darah golongan A tidak dapat diberikan kepada penerima bergolongan darah B?',
    options: [
      'Karena antigen A pada darah donor bereaksi dengan antibodi anti-A pada penerima',
      'Karena antibodi anti-B pada darah penerima menyerang antigen A dari donor',
      'Karena antibodi anti-A dari darah donor menggumpalkan antigen B penerima',
      'Karena antibodi anti-B pada donor menyerang antibodi a pada penerima'
    ],
    answer: 'Karena antigen A pada darah donor bereaksi dengan antibodi anti-A pada penerima'
  },
  {
    id: 'drilling2-39',
    source: 'Soal Drilling 2',
    type: 'single',
    question: 'Ketika glomerulus ginjal mengalami kerusakan, molekul protein seperti albumin bisa bocor ke dalam urin. Dampak klinis yang mungkin timbul dari kondisi ini adalah ...',
    options: [
      'Terbentuknya endapan kalsium di saluran kemih',
      'Pembengkakan jaringan tubuh akibat kehilangan protein plasma',
      'Perut mengalami distensi karena retensi cairan',
      'Timbulnya nyeri di daerah pinggang akibat tekanan urin'
    ],
    answer: 'Pembengkakan jaringan tubuh akibat kehilangan protein plasma'
  },
  {
    id: 'drilling2-40',
    source: 'Soal Drilling 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan berbagai bentuk penyesuaian makhluk hidup terhadap lingkungan berikut ini:',
      paragraphs: [
        '<ol class="statement-list"><li>Beberapa jenis mamalia laut secara berkala naik ke permukaan untuk bernapas.</li><li>Hewan pemakan tumbuhan memiliki kemampuan mencerna selulosa melalui bantuan enzim tertentu.</li><li>Larva rayap mendapatkan mikroorganisme pencerna selulosa dari individu dewasa melalui perilaku tertentu.</li><li>Penduduk yang tinggal di wilayah pegunungan cenderung memiliki jumlah eritrosit lebih banyak daripada yang hidup di dataran rendah.</li></ol>'
      ]
    },
    question: 'Dari peristiwa-peristiwa di atas, manakah yang mencerminkan bentuk adaptasi secara fisiologis?',
    options: ['1 dan 2', '2 dan 3', '2 dan 4', '3 dan 4'],
    answer: '2 dan 4'
  }
]

// =====================================================================
// PEMBAGIAN 4 PAKET (round-robin, 20 soal/paket: 10 Drilling 1 + 10 Drilling 2)
// =====================================================================
const byRoundRobin = (arr, group, groupCount) =>
  arr.filter((_, idx) => idx % groupCount === group)

const buildPaket = (n) => [
  ...byRoundRobin(drilling1, n - 1, 4),
  ...byRoundRobin(drilling2, n - 1, 4)
].map((q) => ({ ...q, category: `Paket ${n}` }))

const paket1 = buildPaket(1)
const paket2 = buildPaket(2)
const paket3 = buildPaket(3)
const paket4 = buildPaket(4)

export const questionsByCategory = {
  paket1,
  paket2,
  paket3,
  paket4
}

// Gabungan seluruh 80 soal, urut sesuai dokumen sumber (IPAS.pdf)
const fulltestQuestions = [...drilling1, ...drilling2]

export default fulltestQuestions
