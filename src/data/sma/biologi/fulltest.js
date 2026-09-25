// Bank soal Biologi SMA - Prediksi Paket 1-2 + Tryout Paket 1-5 (140 soal).
// Sumber: 1. BIOLOGI-ED.pdf (PREDIKSI BIOLOGI, TRYOUT BIOLOGI, dan KUNCI JAWABAN).
//
// Struktur mengikuti template fulltest.js Matematika SMA:
//   - gambar di-import dari /images/sma/biologi/
//   - soal bergambar memakai stimulus: { instruction, image, paragraphs }
//   - questionsByCategory diekspor per paket, default export = gabungan semua soal.

const karyotipeTrisomi13 = '/images/sma/biologi/karyotipe-trisomi-13.png'
const skemaRespirasiAerob = '/images/sma/biologi/skema-respirasi-aerob.png'
const bijiMelinjo = '/images/sma/biologi/biji-melinjo.png'
const jaringanKolenkim = '/images/sma/biologi/jaringan-kolenkim.png'
const lentiselBatang = '/images/sma/biologi/lentisel-batang.png'
const penampangAkarX = '/images/sma/biologi/penampang-akar-x.png'
const alurHormonSeks = '/images/sma/biologi/alur-hormon-seks.png'
const meiosisDuaN46 = '/images/sma/biologi/meiosis-2n-46.png'
const tipeKanalPorifera = '/images/sma/biologi/tipe-kanal-porifera.png'
const siklusMateriAlam = '/images/sma/biologi/siklus-materi-alam.png'
const anatomiMata = '/images/sma/biologi/anatomi-mata.png'
const dendogramKekerabatan = '/images/sma/biologi/dendogram-kekerabatan.png'
const grafikInsulinSintetis = '/images/sma/biologi/grafik-insulin-sintetis.png'
const tahapanMitosis = '/images/sma/biologi/tahapan-mitosis.png'
const grafikEnzimPh = '/images/sma/biologi/grafik-enzim-ph.png'

// Gambar per-opsi (setiap opsi jawaban memuat gambarnya sendiri)
const transpirasiOpsiA = '/images/sma/biologi/transpirasi-opsi-a.png'
const transpirasiOpsiB = '/images/sma/biologi/transpirasi-opsi-b.png'
const transpirasiOpsiC = '/images/sma/biologi/transpirasi-opsi-c.png'
const transpirasiOpsiD = '/images/sma/biologi/transpirasi-opsi-d.png'
const transpirasiOpsiE = '/images/sma/biologi/transpirasi-opsi-e.png'

// Bungkus setiap gambar opsi dalam tag <img>, supaya bisa dirender lewat
// v-html di dalam <span> pada label opsi.
const optionImage = (src, label) =>
  `<img src="${src}" alt="${label}" class="option-image" />`

// =====================================================================
// DAFTAR BANTUAN (dipakai sebagai paragraphs pada stimulus)
// =====================================================================
const daftarTahapSpermatogenesis = `
<ol class="statement-list">
  <li>Berdiferensiasi menjadi spermatosit primer</li>
  <li>Epitel germinal seminiferus membelah secara mitosis menjadi spermatogonium</li>
  <li>Membelah secara meiosis menjadi spermatosit sekunder</li>
  <li>Mengalami pematangan menjadi spermatozoa</li>
  <li>Membelah secara meiosis menjadi spermatid</li>
</ol>
`.trim()

const daftarOntogeniFilogeni = `
<ol class="statement-list">
  <li>Perkembangan organik mulai dari filum yang paling sederhana hingga yang paling sempurna merupakan ulangan dari perkembangan organisme dari zigot sampai organisme itu mati</li>
  <li>Mulai dari zigot sampai fase-fase tertentu, berbagai jenis vertebrata menunjukkan adanya persamaan</li>
  <li>Adanya kekerabatan hewan vertebrata mulai dari filum yang paling sederhana hingga yang paling sempurna</li>
  <li>Sejarah perkembangan individu sejak dari sel telur dibuahi hingga individu itu mati</li>
  <li>Sejarah perkembangan organisme dari filum yang paling sederhana hingga filum yang paling sempurna</li>
</ol>
`.trim()

const daftarPeredaranDarahHewan = `
<ol class="statement-list statement-list--roman">
  <li>Hemoglobin merupakan pigmen respirasi umum yang ditemukan pada peredaran darah vertebrata</li>
  <li>Semua pigmen respirasi terletak di sel darah</li>
  <li>Sistem peredaran darah terbuka tidak memiliki pembuluh darah</li>
</ol>
`.trim()

const daftarKloningRekombinan = `
<ol class="statement-list statement-list--roman">
  <li>Pemotongan DNA plasmid dan genomik manusia dengan enzim restriksi</li>
  <li>Transformasi bakteri dengan pustaka DNA rekombinan</li>
  <li>Pencampuran dan ligase DNA plasmid dan genomik manusia untuk membentuk pustaka DNA rekombinan</li>
  <li>Seleksi koloni yang menunjukkan hibridisasi positif, pembiakan dan isolasi DNA rekombinan</li>
  <li>Penyaringan (screening) pustaka DNA rekombinan dengan menumbuhkan pada agar, pemindahan nitroselulosa, dan hibridisasi dengan probe untuk gen yang diinginkan</li>
</ol>
`.trim()

const daftarProsesIntiSel = `
<ol class="statement-list statement-list--roman">
  <li>Sintesis RNA</li>
  <li>Sintesis protein</li>
  <li>Sintesis DNA</li>
</ol>
`.trim()

const daftarHormonAnakGinjal = `
<ol class="statement-list">
  <li>Mineralkortikoid</li>
  <li>Epinefrin</li>
  <li>Norepinefrin</li>
  <li>Glukokortikoid</li>
  <li>Gonadokortikoid</li>
  <li>Adrenalin</li>
</ol>
`.trim()

const daftarAnabolisme = `
<ol class="statement-list">
  <li>Fotosistem I menangkap energi cahaya dengan panjang gelombang 680 nm</li>
  <li>Fotosistem II menangkap energi cahaya matahari dengan panjang gelombang 700 nm</li>
  <li>Energi cahaya diubah menjadi energi kimia dalam bentuk ATP dan NADPH</li>
  <li>Dihasilkan oksigen dari peristiwa fotolisis air</li>
  <li>Proses fotofosforilasi berlangsung di membran tilakoid</li>
</ol>
`.trim()

const daftarSifatAnimalia = `
<ol class="statement-list">
  <li>Poikiloterm</li>
  <li>Kulitnya tidak bersisik</li>
  <li>Berespirasi dengan paru-paru</li>
  <li>Telur berkulit lunak</li>
</ol>
`.trim()

const daftarPernyataanMutasi = `
<ol class="statement-list">
  <li>Berbahaya karena dapat menyebabkan kelainan</li>
  <li>Netral karena tidak berbahaya dan tidak menguntungkan</li>
  <li>Meningkatkan variasi genetik</li>
  <li>Menguntungkan karena mampu meningkatkan kemampuan survival organisme</li>
</ol>
`.trim()

const daftarOrganPencernaan = `
<ol class="statement-list">
  <li>Tenggorokan</li>
  <li>Lambung</li>
  <li>Usus halus</li>
  <li>Pankreas</li>
  <li>Hati</li>
  <li>Ginjal</li>
</ol>
`.trim()

const daftarSyaratHardyWeinberg = `
<ol class="statement-list">
  <li>Ukuran populasi cukup besar</li>
  <li>Populasi bersifat terbuka</li>
  <li>Terjadi perkawinan acak</li>
  <li>Jumlah mutasi gen dalam alel bervariasi</li>
  <li>Kemampuan reproduksi tiap individu sama</li>
</ol>
`.trim()

const daftarStrukturKromosom = `
<ol class="statement-list">
  <li>Untai ganda DNA yang sejajar dengan arah paralel</li>
  <li>Pasangan basa DNA yang tersusun atas dua nukleotida purin atau dua nukleotida pirimidin</li>
  <li>Untai ganda DNA yang terbentuk dengan urutan atom C dari 3' ke 5'</li>
  <li>Untai ganda DNA yang mengikat histon</li>
</ol>
`.trim()

const daftarSintesisProtein = `
<ol class="statement-list">
  <li>dRNA meninggalkan DNA menuju ke ribosom</li>
  <li>DNA melakukan transkripsi sehingga terbentuk dRNA</li>
  <li>Asam amino berderet sesuai dengan kode pembentukan protein</li>
  <li>tRNA menerjemahkan kodon yang dibawa dRNA</li>
  <li>Protein terbentuk dan dapat merupakan enzim yang mengatur metabolisme sel</li>
  <li>tRNA mencari dan membawa asam amino yang sesuai dengan kodon yang dibawa dRNA</li>
</ol>
`.trim()

// =====================================================================
// PREDIKSI PAKET 1
// =====================================================================
const prediksi1 = [
  {
    id: 'prediksi-1-1',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Proses pembentukan spesies yang terjadi ketika sebagian kecil populasi organisme terisolasi dalam sebuah lingkungan yang kecil dari populasi tertua disebut ....',
    options: ['Radiasi adaptif', 'Genetik drift', 'Spesiasi peripatrik', 'Spesies simpatrik', 'Spesies allopatrik'],
    answer: 'Spesiasi peripatrik'
  },
  {
    id: 'prediksi-1-2',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Tumbuhan pakis haji dan kelapa memiliki bagian-bagian berikut, kecuali ....',
    options: ['Berkas pengangkutan', 'Polen', 'Karpela', 'Ovarium', 'Ovulum'],
    answer: 'Ovarium'
  },
  {
    id: 'prediksi-1-3',
    category: 'Prediksi Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar kariotipe kromosom berikut!',
      image: karyotipeTrisomi13
    },
    question: 'Kondisi kromosom di atas dapat menyebabkan seseorang mengalami kelainan dengan gejala ....',
    options: ['Telapak tangan mengalami symian crease', 'Abnormalitas pada ukuran payudara', 'Cenderung anti sosial, psikopat, dan kriminal', 'Mengalami polidaktili dan rocker bottom feet', 'Leher bersayap dan jarak payudara yang abnormal'],
    answer: 'Mengalami polidaktili dan rocker bottom feet'
  },
  {
    id: 'prediksi-1-4',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Bagian dari gen yang menjadi penentu sifat bagi makhluk hidup adalah ....',
    options: ['Pasangan basa pada DNA', 'Pasangan basa pada RNA', 'Polinukleotida DNA', 'Polinukleotida RNA', 'Panjang rantai DNA'],
    answer: 'Pasangan basa pada DNA'
  },
  {
    id: 'prediksi-1-5',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Teknik pembuatan tanaman unggul dengan menggunakan radiasi sinar tertentu menghasilkan tanaman yang tidak dapat melakukan reproduksi generatif karena radiasi sinar dapat ....',
    options: ['Menyebabkan mutasi sel', 'Menghilangkan gen tertentu', 'Menjadikan tanaman menjadi steril', 'Menggandakan gen sehingga terjadi perubahan sifat', 'Mengubah kromosom sehingga tidak terbentuk biji'],
    answer: 'Mengubah kromosom sehingga tidak terbentuk biji'
  },
  {
    id: 'prediksi-1-6',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Berkaitan dengan penurunan produktivitas dan transfer energi dari satu tingkatan trofik ke tingkatan trofik berikutnya, manakah yang paling efisien menangkap energi yang diproduksi pada fotosintesis?',
    options: ['Manusia yang memakan sapi yang diberi makan dengan produk samping daging', 'Manusia yang memakan padi dan kacang-kacangan', 'Manusia yang memakan sapi yang diberi makan padi', 'Manusia yang memakan padi dan memakan sapi yang diberi makan padi', 'Manusia yang memakan sapi yang diberi makan dengan kombinasi padi dan produk samping daging'],
    answer: 'Manusia yang memakan padi dan kacang-kacangan'
  },
  {
    id: 'prediksi-1-7',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Hal berikut yang akan segera terjadi setelah terjadi peningkatan H₂CO₃ dalam darah adalah ....',
    options: ['Rangsangan pada medula oblongata untuk meningkatkan laju pernapasan', 'Pemecahan H₂CO₃ segera setelah CO₂ banyak ditransportasikan ke alveolus', 'Pengikatan CO₂ oleh hemoglobin untuk segera didifusikan menuju ke alveolus', 'Peningkatan pH darah dan terjadi penimbunan racun dalam tubuh yang mematikan', 'Kematian sel paru-paru akibat keracunan H₂CO₃ dan ion bikarbonat yang tinggi dalam darah'],
    answer: 'Rangsangan pada medula oblongata untuk meningkatkan laju pernapasan'
  },
  {
    id: 'prediksi-1-8',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Perbedaan mendasar antara tulang dan kartilago adalah bahwa kartilago ....',
    options: ['Merupakan salah satu tipe jaringan ikat', 'Mensekresi matriks padat', 'Tidak memiliki pembuluh darah dan saraf', 'Tersusun atas kolagen dan garam', 'Merupakan bagian dari sistem rangka'],
    answer: 'Tidak memiliki pembuluh darah dan saraf'
  },
  {
    id: 'prediksi-1-9',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Pernyataan yang TIDAK tepat mengenai saraf simpatik adalah ....',
    options: ['Merupakan bagian dari sistem otonom', 'Berpangkal pada medula oblongata', 'Berfungsi menurunkan sekresi ludah', 'Diaktifkan saat tubuh dalam kondisi stres', 'Bekerja berlawanan dengan saraf parasimpatik'],
    answer: 'Berpangkal pada medula oblongata'
  },
  {
    id: 'prediksi-1-10',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Berikut ini adalah ciri-ciri dari kelas Ancylostoma duodenale, kecuali ....',
    options: ['Tubuh panjang silinder', 'Tubuh simetri bilateral', 'Jantan dan betina terpisah', 'Tubuh metameri atau bersegmen', 'Tubuh tertutup kutikula'],
    answer: 'Tubuh metameri atau bersegmen'
  },
  {
    id: 'prediksi-1-11',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Penanaman bunga matahari di lahan yang tercemar bahan radioaktif disebut teknik ....',
    options: ['Bioakumulasi', 'Biodegradasi', 'Bioremediasi', 'Fotofosforilasi', 'Fotoremediasi'],
    answer: 'Fotoremediasi'
  },
  {
    id: 'prediksi-1-12',
    category: 'Prediksi Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Spermatogenesis pada hewan jantan berlangsung dalam tahapan seperti di bawah ini.',
      paragraphs: [daftarTahapSpermatogenesis]
    },
    question: 'Urutan tahapan peristiwa spermatogenesis yang benar adalah ....',
    options: ['1 – 3 – 2 – 5 – 4', '1 – 3 – 5 – 2 – 4', '2 – 3 – 1 – 5 – 4', '2 – 1 – 3 – 5 – 4', '5 – 1 – 3 – 2 – 4'],
    answer: '2 – 1 – 3 – 5 – 4'
  },
  {
    id: 'prediksi-1-13',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Kondisi kromosom yang ditandai dengan lengan panjang dan lengan pendek kromosom menjadi identik ialah ....',
    options: ['Isokromosom', 'Monokromosom', 'Homokromosom', 'Heterokromosom', 'Abnormal kromosom'],
    answer: 'Isokromosom'
  },
  {
    id: 'prediksi-1-14',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Manakah pernyataan berikut ini yang tidak tepat tentang fotosistem I?',
    options: ['Terdapat di membran tilakoid', 'Terlibat dalam oksidasi air', 'Memiliki klorofil berupa P700', 'Memiliki kompleks antena untuk menangkap cahaya', 'Dibutuhkan untuk fotofosforilasi siklik'],
    answer: 'Terlibat dalam oksidasi air'
  },
  {
    id: 'prediksi-1-15',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Pada pengamatan preparat irisan penampang melintang organ tumbuhan, ditemukan sel-sel xilem yang terkonsentrasi di tengah dan berbentuk seperti bintang. Organ yang dimaksud adalah ....',
    options: ['Batang tumbuhan dikotil', 'Batang tumbuhan monokotil', 'Akar tumbuhan dikotil', 'Akar tumbuhan monokotil', 'Akar dan batang tumbuhan monokotil'],
    answer: 'Akar tumbuhan dikotil'
  },
  {
    id: 'prediksi-1-16',
    category: 'Prediksi Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan skema respirasi aerob berikut!',
      image: skemaRespirasiAerob
    },
    question: 'Yang ditunjuk oleh nomor 1 dan hasil dari nomor 2 secara berurutan adalah ....',
    options: ['Glukosa, asetil koA', 'Glukosa, asam sitrat', 'Glukosa, CO₂, dan ATP', 'Glikolisis, asetil koA', 'Glikolisis, CO₂, dan ATP'],
    answer: 'Glikolisis, CO₂, dan ATP'
  },
  {
    id: 'prediksi-1-17',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Berikut merupakan suatu pengamatan yang menjadi dasar seleksi alam, kecuali ....',
    options: ['Keberhasilan reproduksi yang tidak sama pada setiap individu akan menyebabkan terjadinya adaptasi', 'Terdapat variasi yang dapat diwariskan pada individu', 'Individu yang memiliki daya adaptasi rendah tidak pernah meninggalkan keturunan', 'Individu yang mewarisi sifat yang memungkinkan menyesuaikan diri dengan lingkungannya akan meninggalkan keturunan yang lebih banyak', 'Karena hanya sebagian keturunan yang bertahan hidup, pasti terjadi kompetisi untuk mendapatkan sumber makanan yang terbatas'],
    answer: 'Keberhasilan reproduksi yang tidak sama pada setiap individu akan menyebabkan terjadinya adaptasi'
  },
  {
    id: 'prediksi-1-18',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Seseorang meneliti tiga jenis rodensia yang berkerabat dekat dengan variabel perbandingan anatomi ginjal. Hasilnya, ketiga jenis rodensia memiliki panjang loop of henle yang berbeda-beda. Hipotesis yang dapat diajukan adalah ....',
    options: ['Ketiga rodensia memiliki laju filtrasi ginjal yang berbeda-beda', 'Ketiga rodensia memiliki kepekatan urin yang berbeda-beda', 'Ketiga rodensia menghasilkan urin dengan pH yang berbeda-beda', 'Ketiga rodensia memproduksi urin dengan volume urin yang sama', 'Ketiga rodensia hidup pada habitat yang sama'],
    answer: 'Ketiga rodensia memiliki kepekatan urin yang berbeda-beda'
  },
  {
    id: 'prediksi-1-19',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Karakteristik yang membedakan cairan hemolimfe Arthropoda dengan darah pada Vertebrata adalah ....',
    options: ['Merupakan sistem peredaran darah tertutup', 'Peredaran cairan hemolimfe bermuara pada rongga jantung', 'Hanya berfungsi sebagai pengangkut sari makanan', 'Hanya berfungsi sebagai pengangkut oksigen', 'Cairan hemolimfe kembali ke jantung melalui pembuluh darah'],
    answer: 'Hanya berfungsi sebagai pengangkut sari makanan'
  },
  {
    id: 'prediksi-1-20',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Berikut ini yang tidak termasuk sumber tidak spesifik dari limbah B3 adalah ....',
    options: ['Produk kadaluarsa', 'Inhibitor korosi', 'Pelarutan kerak', 'Pemeliharaan alat', 'Pencucian produk'],
    answer: 'Produk kadaluarsa'
  }
]

// =====================================================================
// PREDIKSI PAKET 2
// =====================================================================
const prediksi2 = [
  {
    id: 'prediksi-2-1',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pertukaran materi genetik sehingga terbentuk rekombinan DNA pada sel bakteri melalui perantaraan profage disebut ....',
    options: ['Konjugasi', 'Transduksi', 'Transformasi', 'Pengkloningan', 'Rekayasa genetika'],
    answer: 'Transduksi'
  },
  {
    id: 'prediksi-2-2',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pernyataan berikut yang benar, kecuali ....',
    options: ['Epitel silindris selapis bermikrofibril terdapat pada jonjot-jonjot usus', 'Epitel silindris selapis tak bersilia terdapat pada uterus', 'Epitel silindris selapis bersilia terdapat pada bronkus', 'Epitel silindris selapis bersilia terdapat pada oviduk', 'Epitel silindris selapis bersilia terdapat pada lambung'],
    answer: 'Epitel silindris selapis bersilia terdapat pada lambung'
  },
  {
    id: 'prediksi-2-3',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Kumpulan DNA pada genom E. coli yang letaknya berdekatan satu sama lain disebut ....',
    options: ['Kodon start', 'Promotor', 'Kodon stop', 'Reading frame', 'Operon'],
    answer: 'Operon'
  },
  {
    id: 'prediksi-2-4',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar penampang biji melinjo berikut ini!',
      image: bijiMelinjo
    },
    question: 'Bagian biji melinjo yang berwarna kecoklatan dan keras sebenarnya berasal dari perkembangan ....',
    options: ['Eksokarp', 'Mesokarp', 'Sarkotesta', 'Sklerotesta', 'Endotesta'],
    answer: 'Sklerotesta'
  },
  {
    id: 'prediksi-2-5',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika dalam satu individu terdapat aneuploidi dan sel diploid normal, maka individu tersebut mengalami kondisi ....',
    options: ['Mutasi sel', 'Mutasi genetik', 'Mosaisme kromosom', 'Duplikasi kromosom', 'Aberasi kromosom'],
    answer: 'Mosaisme kromosom'
  },
  {
    // CATATAN: kunci buku menulis "Jawaban: D" (pernyataan 3 dan 4), sedangkan
    // pembahasannya mengarah ke pernyataan 4 dan 5. Periksa sebelum dipakai.
    id: 'prediksi-2-6',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan tentang ontogeni dan filogeni berikut ini!',
      paragraphs: [daftarOntogeniFilogeni]
    },
    question: 'Pernyataan yang tepat tentang pengertian ontogeni dan filogeni adalah yang bernomor ....',
    options: ['1 dan 2', '1 dan 5', '2 dan 5', '3 dan 4', '4 dan 5'],
    answer: '3 dan 4'
  },
  {
    id: 'prediksi-2-7',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar jaringan tumbuhan berikut!',
      image: jaringanKolenkim
    },
    question: 'Pernyataan berikut ini yang bukan merupakan karakteristik dari jaringan di atas adalah ....',
    options: ['Memiliki selulosa dan lignin', 'Memiliki noktah primer', 'Tidak memiliki dinding sekunder', 'Kandungan airnya cukup banyak', 'Penebalan dinding yang tidak merata'],
    answer: 'Memiliki selulosa dan lignin'
  },
  {
    id: 'prediksi-2-8',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Manakah penjelasan yang paling baik mengenai kehadiran kloroplas dan mitokondria dalam sel tumbuhan?',
    options: ['Saat ada cahaya, tumbuhan adalah organisme autotrof fotosintetik dan saat gelap adalah heterotrof', 'Jika tumbuhan tidak dapat menghasilkan ATP yang cukup dalam proses fotosintesis, tumbuhan dapat memproduksinya dalam respirasi anaerob', 'Gula dihasilkan dalam kloroplas yang dapat disimpan untuk kemudian digunakan, diubah menjadi senyawa kimia lain, atau diuraikan saat respirasi anaerob menghasilkan ATP', 'Daun dan kadang-kadang batang tumbuhan mengandung kloroplas yang dapat menghasilkan ATP untuk memenuhi kebutuhan energi pada bagian tumbuhan tersebut', 'Akar tanaman mengandung mitokondria yang menghasilkan ATP untuk memenuhi kebutuhan energi pada bagian akar tanaman tersebut'],
    answer: 'Gula dihasilkan dalam kloroplas yang dapat disimpan untuk kemudian digunakan, diubah menjadi senyawa kimia lain, atau diuraikan saat respirasi anaerob menghasilkan ATP'
  },
  {
    id: 'prediksi-2-9',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Proses pada siklus asam sitrat yang terdapat reaksi hidrasi ialah pada tahap pengubahan ....',
    options: ['Asam sitrat – isositrat', 'Isositrat – α ketoglutarat', 'Suksinil koA – suksinat', 'Suksinat – fumarat', 'Malat – oksaloasetat'],
    answer: 'Asam sitrat – isositrat'
  },
  {
    id: 'prediksi-2-10',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Berikut merupakan peranan antibodi dalam mengeliminasi partikel atau sel asing yang masuk ke dalam tubuh, kecuali ....',
    options: ['Menempel pada sisi aktif dari partikel atau sel yang masuk ke dalam tubuh', 'Mempermudah makrofag dalam memfagositosis partikel atau sel asing yang masuk ke dalam tubuh', 'Mengendapkan partikel asing yang terlarut di dalam cairan tubuh', 'Menginisiasi kerja dari sistem komplemen', 'Mengeliminasi bakteri yang tumbuh pada endosom makrofag'],
    answer: 'Mengeliminasi bakteri yang tumbuh pada endosom makrofag'
  },
  {
    id: 'prediksi-2-11',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Berikut ini yang tidak dibutuhkan dalam bioteknologi DNA rekombinan adalah ....',
    options: ['Enzim ligase', 'Enzim DNA polimerase', 'Enzim endonuklease restriksi', 'Plasmid bakteri', 'Asam nukleat DNA'],
    answer: 'Enzim DNA polimerase'
  },
  {
    id: 'prediksi-2-12',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pita kaspari yang merupakan bagian dari struktur akar ....',
    options: ['Terletak di antara epidermis dan korteks', 'Mudah dilewati air dan garam-garam mineral', 'Mengalami penebalan dari lignin atau suberin', 'Tersusun dari selapis sel yang rapat', 'Merupakan bagian dari batang dikotil'],
    answer: 'Mengalami penebalan dari lignin atau suberin'
  },
  {
    id: 'prediksi-2-13',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Berkaitan dengan penurunan produktivitas dan transfer energi antartingkatan trofik, manakah yang paling efisien menangkap energi yang diproduksi pada fotosintesis?',
    options: ['Manusia yang memakan sapi yang diberi makan dengan produk samping daging', 'Manusia yang memakan sapi yang diberi makan dengan kombinasi padi dan produk samping daging', 'Manusia yang memakan sapi yang diberi makan padi', 'Manusia yang memakan padi dan memakan sapi yang diberi makan padi', 'Manusia yang memakan padi dan kacang-kacangan'],
    answer: 'Manusia yang memakan padi dan kacang-kacangan'
  },
  {
    id: 'prediksi-2-14',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Manakah pernyataan di bawah ini yang menggambarkan bakteriofage secara tepat?',
    options: ['Bagian bakteri yang tersusun atas asam nukleat', 'Bagian bakteri yang berfungsi sebagai partikel penginfeksi', 'Dapat ditransfer dari satu bakteri ke bakteri lain', 'Virus yang menyerang bakteri dan masuk ordo Caudovirales', 'Partikel penginfeksi virus yang tidak mampu bereplikasi'],
    answer: 'Virus yang menyerang bakteri dan masuk ordo Caudovirales'
  },
  {
    id: 'prediksi-2-15',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Tumbuhan menjadi kerdil dan tidak dapat melakukan fotosintesis diakibatkan terjadi defisiensi unsur berikut secara berturut-turut, yaitu ....',
    options: ['N-P dan Mg-Ca', 'N-Mg dan Ca-P', 'Mg-P dan N-Ca', 'Mg-Ca dan N-P', 'P-Ca dan Mg-N'],
    answer: 'N-P dan Mg-Ca'
  },
  {
    id: 'prediksi-2-16',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Efek apakah yang akan terjadi pada tumbuhan saat terjadi pemotongan pada ujung tanaman?',
    options: ['Penghambatan dominasi apikal', 'Pertumbuhan memanjang secara cepat', 'Pertumbuhan membesar semakin cepat', 'Memicu kekerdilan secara genetik pada tumbuhan', 'Terhambatnya pertumbuhan tunas lateral'],
    answer: 'Penghambatan dominasi apikal'
  },
  {
    id: 'prediksi-2-17',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pernyataan berikut ini benar untuk meiosis, kecuali ....',
    options: ['Berperan dalam membentuk variasi pada keturunan', 'Berperan pada pembentukan spermatozoid paku dan lumut', 'Kromosom yang dihasilkan tidak sama dengan induk', 'Menghasilkan empat gamet haploid', 'Mengalami dua kali pemisahan kromosom'],
    answer: 'Berperan pada pembentukan spermatozoid paku dan lumut'
  },
  {
    id: 'prediksi-2-18',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pada kromosom, gen tertentu akan membentuk alel bila ....',
    options: ['Terdapat pada kromosom yang sama', 'Memiliki fungsi dan struktur yang sama', 'Memiliki simbol yang sama dominan atau resesif', 'Terletak pada lokus yang bersesuaian di kromosom homolog', 'Terletak pada titik yang sama dan memiliki sifat yang sama'],
    answer: 'Terletak pada lokus yang bersesuaian di kromosom homolog'
  },
  {
    id: 'prediksi-2-19',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pernyataan berikut yang tidak tepat tentang produk fermentasi menggunakan mikroorganisme Corynebacterium glutamicum adalah ....',
    options: ['Berfungsi sebagai penyedap rasa makanan', 'Proses fermentasi memerlukan media glukosa', 'Pada media perlu ditambahkan garam mineral', 'Substrat yang digunakan disebut dengan cane molasses', 'Saat proses pembuatan pH harus basa dan suhu pada rentang 20°C'],
    answer: 'Saat proses pembuatan pH harus basa dan suhu pada rentang 20°C'
  },
  {
    // CATATAN: kunci buku menulis "Jawaban: D" (udang), sedangkan pembahasannya
    // menyebut Porifera sebagai contoh monocious. Periksa sebelum dipakai.
    id: 'prediksi-2-20',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Di antara hewan avertebrata berikut yang merupakan monocious adalah ....',
    options: ['Cacing perut (Nematoda)', 'Kerang (Moluska)', 'Ubur-ubur (Cnidaria)', 'Udang (Arthropoda)', 'Spons (Porifera)'],
    answer: 'Udang (Arthropoda)'
  }
]

// =====================================================================
// TRYOUT PAKET 1
// =====================================================================
const tryout1 = [
  {
    id: 'tryout-1-1',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Sifat kimia yang dimiliki oleh semua jenis lipid penyusun membran plasma adalah ....',
    options: ['Kepala bersifat polar', 'Memiliki gugus gula', 'Rangka dari gliserol', 'Komponen utama fosfat', 'Merupakan bagian hidrofobik'],
    answer: 'Merupakan bagian hidrofobik'
  },
  {
    id: 'tryout-1-2',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Enzim yang tidak berperan dalam replikasi DNA adalah ....',
    options: ['DNA polimerase', 'RNA polimerase', 'Helikase', 'Primase', 'Topoisomerase'],
    answer: 'RNA polimerase'
  },
  {
    id: 'tryout-1-3',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Sel kanker merupakan sel yang aktif membelah sehingga pertumbuhannya sulit untuk dikendalikan. Hal ini terjadi karena ....',
    options: ['Mutasi gen p53', 'Mutasi pada spindel', 'Kerusakan kompleks MPF', 'Terhambatnya protein cyclin', 'Abnormalitas replikasi DNA'],
    answer: 'Mutasi gen p53'
  },
  {
    id: 'tryout-1-4',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Dari pasangan filum berikut, manakah yang memiliki hubungan kekerabatan paling dekat pada tingkat larva trochophore?',
    options: ['Arthropoda dan Mollusca', 'Annelida dan Cnidaria', 'Echinodermata dan Mollusca', 'Annelida dan Mollusca', 'Cnidaria dan Porifera'],
    answer: 'Annelida dan Mollusca'
  },
  {
    id: 'tryout-1-5',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Chlorella sebagai salah satu mikroorganisme sumber PST atau Protein Sel Tunggal memiliki ciri yaitu ....',
    options: ['Prokariotik, uniseluler', 'Memiliki flagel pada dinding selnya', 'Dinding sel tersusun atas peptidoglikan', 'Memiliki kloroplas yang berbentuk mangkuk', 'Termasuk organisme heterotrof filter feeder'],
    answer: 'Memiliki kloroplas yang berbentuk mangkuk'
  },
  {
    id: 'tryout-1-6',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Beberapa organisme fotosintetik mengandung kloroplas yang kekurangan fotosistem II, namun mampu bertahan. Cara paling tepat untuk mendeteksi kurangnya fotosistem II pada organisme ini adalah ....',
    options: ['Menentukan apakah mereka memiliki tilakoid di kloroplas', 'Menguji pembebasan O₂ dalam kondisi terang', 'Menguji fiksasi CO₂ dalam kondisi gelap', 'Melakukan eksperimen dengan cahaya berbeda-beda', 'Menguji produksi sukrosa atau pati'],
    answer: 'Menguji pembebasan O₂ dalam kondisi terang'
  },
  {
    id: 'tryout-1-7',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Manakah dari berikut ini yang merupakan bentuk tereduksi dari molekul yang hanya digunakan dalam fotosintesis dan bukan dalam respirasi sel?',
    options: ['NADH', 'FADH₂', 'NAD⁺', 'NADPH', 'NADP'],
    answer: 'NADPH'
  },
  {
    id: 'tryout-1-8',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Enzim yang mengkatalis fiksasi karbondioksida pada fotosintesis tumbuhan jagung dan tebu adalah ....',
    options: ['RuBP karboksilase', 'PEP karboksilase', 'Oksaloasetat reduktase', 'Karbonat anhidrase', 'Karboksidismutase'],
    answer: 'PEP karboksilase'
  },
  {
    id: 'tryout-1-9',
    category: 'Tryout Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar penampang batang berikut ini!',
      image: lentiselBatang
    },
    question: 'Jaringan yang dilingkari pada gambar berperan dalam hal berikut, kecuali ....',
    options: ['Membantu proses pernapasan pada batang tumbuhan', 'Pertukaran gas dengan udara bebas dari atmosfer', 'Pertukaran gas karbondioksida (CO₂) dan oksigen (O₂)', 'Proses perkembangan dan pertumbuhan batang tumbuhan', 'Menyimpan air dan udara terutama pada bagian batang tumbuhan'],
    answer: 'Menyimpan air dan udara terutama pada bagian batang tumbuhan'
  },
  {
    id: 'tryout-1-10',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Berikut ini adalah benar mengenai model aliran-tekanan dari proses translokasi pada floem, kecuali ....',
    options: ['Sukrosa yang diangkut ke komponen tapis akan menurunkan tekanan osmotik pada sel pengantar', 'Sukrosa diangkut ke dalam sel tapis dari sel pengantar secara pasif melalui plasmodesmata', 'Air bergerak turun mengikuti gradien potensial air', 'Di sekitar sink, air mengalir ke xilem dengan mengikuti gradien potensial air', 'Tekanan osmotik yang tinggi pada komponen tapis di sekitar source menyebabkan terjadinya difusi dari xilem di sekitarnya'],
    answer: 'Tekanan osmotik yang tinggi pada komponen tapis di sekitar source menyebabkan terjadinya difusi dari xilem di sekitarnya'
  },
  {
    // CATATAN: kunci buku = C. Secara konsep, opsi B lebih tepat. Periksa kembali.
    id: 'tryout-1-11',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Sistem respiratori penting dalam perolehan oksigen bagi jaringan dan ....',
    options: ['Mengatur pH darah dengan mengendalikan berapa banyak oksigen yang terlarut di dalam plasma', 'Mengatur pH darah dengan mengendalikan karbondioksida yang terlarut di dalam plasma', 'Mengatur tekanan darah dengan melepaskan hormon dari paru-paru yang mengendalikan laju detak jantung', 'Berperan dalam mengatur kadar kolesterol di dalam darah', 'Mengambil beberapa nutrien seperti vitamin K dari atmosfer saat persediaan terbatas'],
    answer: 'Mengatur tekanan darah dengan melepaskan hormon dari paru-paru yang mengendalikan laju detak jantung'
  },
  {
    id: 'tryout-1-12',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Tikus kangguru dapat mengonsentrasikan urin lebih baik daripada manusia. Dibandingkan dengan nefron ginjal manusia, nefron ginjal tikus kangguru memiliki ....',
    options: ['Dinding tebal yang tidak dapat ditembus air', 'Lengkung henle lebih pendek', 'Lengkung henle lebih panjang', 'Duktus pengumpul lebih pendek', 'Tubulus proksimal lebih panjang'],
    answer: 'Lengkung henle lebih panjang'
  },
  {
    id: 'tryout-1-13',
    category: 'Tryout Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Berikut ini adalah pernyataan yang berkaitan dengan sistem peredaran darah hewan.',
      paragraphs: [daftarPeredaranDarahHewan]
    },
    question: 'Pernyataan yang tepat adalah ....',
    options: ['Hanya I', 'Hanya II', 'Hanya III', 'I dan II', 'I dan III'],
    answer: 'Hanya I'
  },
  {
    id: 'tryout-1-14',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Manakah dari pernyataan berikut yang benar sehubungan dengan organ-organ pertukaran gas pada hewan?',
    options: ['Pada bintang laut, insang berperan dalam respirasi tetapi tidak berperan dalam pertukaran gas', 'Pada belalang, otot-otot yang sudah berkembang dengan baik di sekeliling trakea mengontrol pergerakan keluar dan masuknya udara melewati pori eksternal', 'Pada ikan, aliran darah yang melewati kapiler filamen insang arahnya sama seperti arah keluar dari mulut dan faring menuju keluar tubuh', 'Pada burung, kantung udara bagian depan mengempis selama ekspirasi, mendorong udara keluar dan sebaliknya paru-paru terisi udara', 'Ketiadaan surfaktan menyebabkan alveolus tidak dapat bekerja selama ekspirasi, memblokir masuknya udara selama inspirasi'],
    answer: 'Pada burung, kantung udara bagian depan mengempis selama ekspirasi, mendorong udara keluar dan sebaliknya paru-paru terisi udara'
  },
  {
    id: 'tryout-1-15',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Ngengat hawkmoth adalah serangga yang serupa perawakan dan perilakunya dengan burung hummingbird. Manakah pernyataan berikut ini yang kurang tepat dalam kasus tersebut?',
    options: ['Keduanya termasuk contoh evolusi konvergen', 'Keduanya berada pada lingkungan yang sama', 'Keduanya secara genetis memiliki kekerabatan erat', 'Keduanya dapat dikatakan memiliki struktur analog', 'Keduanya hanya dapat bertahan hidup pada lingkungan sama'],
    answer: 'Keduanya secara genetis memiliki kekerabatan erat'
  },
  {
    id: 'tryout-1-16',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Radiasi adaptif seperti terjadinya spesies burung Finch di Galapagos dan terjadinya spesies ikan Cichlid di Danau Victoria disebabkan oleh proses evolusi ....',
    options: ['Konvergensi', 'Divergensi', 'Divergensi diikuti konvergensi', 'Divergensi dan konvergensi', 'Konvergensi diikuti divergensi'],
    answer: 'Divergensi'
  },
  {
    id: 'tryout-1-17',
    category: 'Tryout Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Kloning rekombinan dari gen manusia dapat melibatkan beberapa tahapan berikut ini.',
      paragraphs: [daftarKloningRekombinan]
    },
    question: 'Manakah urutan yang paling tepat?',
    options: ['I-IV-II-III-V', 'I-III-II-V-IV', 'I-II-III-IV-V', 'II-VI-V-III-I', 'III-VI-II-V-I'],
    answer: 'I-III-II-V-IV'
  },
  {
    id: 'tryout-1-18',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Nitrogen merupakan salah satu faktor pembatas pada ekosistem daratan karena ....',
    options: ['Jumlahnya yang terbatas di atmosfer', 'Tidak dapat langsung diserap tanah', 'Sangat kuat terikat senyawa organik', 'Sangat kuat terikat dengan fosfor', 'Tumbuhan tidak mampu mengikatnya langsung'],
    answer: 'Tumbuhan tidak mampu mengikatnya langsung'
  },
  {
    id: 'tryout-1-19',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Sebagian besar biomassa yang diperoleh tumbuhan selama tumbuh berasal dari ....',
    options: ['Karbon dioksida di udara yang memasuki daun melalui stomata', 'Senyawa organik dalam tanah yang diambil oleh akar tumbuhan', 'Mineral yang larut di dalam air dan diambil oleh akar tumbuhan', 'Energi dari matahari yang ditangkap oleh daun', 'Karbon dari seresah daun yang hancur dalam tanah'],
    answer: 'Karbon dioksida di udara yang memasuki daun melalui stomata'
  },
  {
    id: 'tryout-1-20',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Mutasi yang melibatkan pertukaran sebagian lengan kromosom dengan kromosom lain dinamakan ....',
    options: ['Delesi', 'Inversi', 'Translokasi', 'Transversi', 'Transisi'],
    answer: 'Translokasi'
  }
]

// =====================================================================
// TRYOUT PAKET 2
// =====================================================================
const tryout2 = [
  {
    id: 'tryout-2-1',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pernyataan berikut ini yang benar tentang intercelluler junction adalah ....',
    options: ['Salah satu jenisnya berperan dalam melekatkan sel dengan sel tetangganya untuk mencegah merembesnya molekul sehingga disebut anchoring junction', 'Dapat memudahkan pengangkutan satu sel ke sel tetangganya atau biasa disebut sebagai signal-relaying junction', 'Pada sel hewan contohnya berupa gap junction yang homolog dengan plasmodesmata sel tumbuhan', 'Pada sistem saraf dan sistem imun digunakan untuk menyeimbangkan tekanan antara sel dan matriks ekstraseluler', 'Protein perifer antarmembran sel dapat membentuk pelekatan berjenis tight junction'],
    answer: 'Pada sel hewan contohnya berupa gap junction yang homolog dengan plasmodesmata sel tumbuhan'
  },
  {
    id: 'tryout-2-2',
    category: 'Tryout Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan beberapa proses di bawah ini!',
      paragraphs: [daftarProsesIntiSel]
    },
    question: 'Proses berikut ini yang terjadi di dalam inti sel adalah ....',
    options: ['Hanya I', 'Hanya II', 'Hanya III', 'I dan III', 'II dan III'],
    answer: 'I dan III'
  },
  {
    id: 'tryout-2-3',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Sebuah organisme bermembran inti diisolasi dari material limbah organik. Setelah diteliti, organisme ini memiliki dinding sel tetapi tidak memiliki kloroplas. Klasifikasi yang tepat untuk organisme tersebut adalah ....',
    options: ['Domain bacteria, kingdom prokariot', 'Domain archae, kingdom bacteria', 'Domain eukariot, kingdom plantae', 'Domain eukariot, kingdom protista', 'Domain eukariot, kingdom fungi'],
    answer: 'Domain eukariot, kingdom fungi'
  },
  {
    id: 'tryout-2-4',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Archaebacteria berbeda dengan Eubacteria karena Archae ....',
    options: ['Termasuk protista eukariotik dengan sepasang kromosom di tiap selnya', 'Organisme bersel satu yang dapat dimatikan dengan antibiotik tertentu', 'Organisme serupa bakteri yang mampu hidup hanya pada lingkungan dengan salinitas tinggi', 'Organisme yang dapat beradaptasi di lingkungan termofil ekstrim, seperti kawah gunung', 'Organisme ekstrim yang memiliki sifat hampir sama dengan bakteri dan eukariot lainnya'],
    answer: 'Organisme yang dapat beradaptasi di lingkungan termofil ekstrim, seperti kawah gunung'
  },
  {
    // CATATAN: kunci buku = B. Secara konsep, fitokrom (opsi C) lebih tepat. Periksa kembali.
    id: 'tryout-2-5',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Beberapa proses fisiologis pada suatu tanaman hanya terjadi setelah adanya pencahayaan dengan spektrum penuh dari warna cahaya putih atau komponen warna cahaya merah; warna cahaya lain yang monokromatik tidak dapat menyebabkan pengaruh tersebut. Proses tersebut disebabkan karena adanya pengaturan melalui ....',
    options: ['Klorofil', 'Auksin dan giberelin', 'Fitokrom', 'Pigmen flavonoid', 'Fitofotoperiodisme'],
    answer: 'Auksin dan giberelin'
  },
  {
    id: 'tryout-2-6',
    category: 'Tryout Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar penampang melintang akar berikut!',
      image: penampangAkarX
    },
    question: 'Bagian X pada gambar berfungsi penting dalam kelangsungan hidup tanaman. Bagian ini dibentuk oleh jaringan ....',
    options: ['Epidermis', 'Meristem', 'Parenkim', 'Xilem', 'Sklerenkim'],
    answer: 'Epidermis'
  },
  {
    // CATATAN: kunci buku = D. Opsi C juga tampak tidak tepat. Periksa kembali.
    id: 'tryout-2-7',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pernyataan berikut ini benar mengenai kutub animal dan vegetal pada embrio katak, KECUALI ....',
    options: ['Sel-sel di kutub animal membelah lebih cepat dari sel-sel di kutub vegetal', 'Sel-sel di kutub vegetal berukuran lebih besar dari sel-sel di kutub animal', 'Semua lapisan embrional dibentuk di kutub animal', 'Kutub vegetal kaya akan kuning telur', 'Sebagian sel yang menyusun sistem pencernaan berasal dari kutub vegetal'],
    answer: 'Kutub vegetal kaya akan kuning telur'
  },
  {
    id: 'tryout-2-8',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Demam timbul karena produksi pirogen oleh sel darah putih pada saat infeksi terjadi. Pirogen bekerja dengan cara memengaruhi salah satu bagian otak yang berfungsi dalam peningkatan suhu tubuh, yaitu ....',
    options: ['Hipofisa', 'Hipotalamus', 'Epifisa', 'Sistem limbik', 'Korteks otak besar'],
    answer: 'Hipotalamus'
  },
  {
    id: 'tryout-2-9',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Seandainya pada membran plasma tidak terdapat komponen protein, manakah dari peristiwa berikut yang akan terjadi?',
    options: ['Jumlah kolesterol pada membran plasma akan berkurang', 'Makromolekul berukuran besar akan berdifusi keluar sel', 'Pengangkutan sebagian ion melintasi membran plasma akan terhenti', 'Pengangkutan seluruh ion melintasi membran plasma akan terhenti', 'Pengangkutan semua molekul melintasi membran plasma akan terhenti'],
    answer: 'Pengangkutan semua molekul melintasi membran plasma akan terhenti'
  },
  {
    id: 'tryout-2-10',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Inhibitor non-kompetitif mengganggu fungsi enzim sebagai biokatalisator dengan cara ....',
    options: ['Mengubah sisi aktif enzim', 'Menempati sisi aktif enzim', 'Menggantikan posisi substrat', 'Mengubah sisi reaktif substrat', 'Menempati sisi reaktif substrat'],
    answer: 'Mengubah sisi aktif enzim'
  },
  {
    id: 'tryout-2-11',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Deteksi kematian seseorang dapat dilakukan dengan memberikan sorotan cahaya ke mata orang yang diduga telah meninggal. Jika orang tersebut belum meninggal, maka pemberian cahaya akan menimbulkan perubahan pada ....',
    options: ['Diameter lensa', 'Ukuran pupil', 'Ukuran kornea', 'Ukuran retina', 'Ukuran fovea'],
    answer: 'Ukuran pupil'
  },
  {
    id: 'tryout-2-12',
    category: 'Tryout Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Berikut ini adalah gambar mengenai alur sekresi hormon seks di dalam tubuh manusia.',
      image: alurHormonSeks
    },
    question: 'Kombinasi hormon yang tepat untuk menggambarkan bagian 1, 2, dan 3 secara berturut-turut adalah ....',
    options: ['Gonadotropin, gonadotropin releasing hormone, androgen', 'Gonadotropin releasing hormone, gonadotropin, androgen', 'Androgen, gonadotropin releasing hormone, gonadotropin', 'Gonadotropin, androgen, gonadotropin releasing hormone', 'Gonadotropin releasing hormone, androgen, gonadotropin'],
    answer: 'Gonadotropin releasing hormone, gonadotropin, androgen'
  },
  {
    id: 'tryout-2-13',
    category: 'Tryout Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan skema pembelahan meiosis berikut!',
      image: meiosisDuaN46
    },
    question: 'Jika 2n = 46, pernyataan manakah yang tepat mengenai kondisi sel pada akhir meiosis I?',
    options: ['Setiap sel memiliki 46 kromosom; setiap kromosom terdiri dari 2 kromatid', 'Setiap sel memiliki 46 kromosom; setiap kromosom terdiri dari 1 kromatid', 'Setiap sel memiliki 23 kromosom; setiap kromosom terdiri dari 2 kromatid', 'Setiap sel memiliki 23 kromosom; setiap kromosom terdiri dari 1 kromatid', 'Seluruh sel anakan yang dihasilkan bersifat identik satu sama lain'],
    answer: 'Setiap sel memiliki 23 kromosom; setiap kromosom terdiri dari 2 kromatid'
  },
  {
    // CATATAN: kunci buku = A. Umumnya bioma ditentukan curah hujan dan suhu (opsi B). Periksa kembali.
    id: 'tryout-2-14',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Kondisi utama yang menentukan tipe komunitas tumbuhan pada suatu bioma adalah ....',
    options: ['Curah hujan dan penyinaran matahari', 'Curah hujan dan suhu udara', 'Penyinaran matahari dan suhu udara', 'Ketinggian tempat dan suhu udara', 'Ketinggian tempat dan penyinaran matahari'],
    answer: 'Curah hujan dan penyinaran matahari'
  },
  {
    id: 'tryout-2-15',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Semua hal di bawah ini merupakan akibat dari dihilangkannya spesies keystone dari ekosistem, KECUALI ....',
    options: ['Diversitas berkurang', 'Populasi komunitas lain meningkat', 'Salah satu tipe interaksi ekologi meningkat', 'Carrying capacity di satu komunitas berkurang', 'Laju pertumbuhan dari semua populasi meningkat'],
    answer: 'Laju pertumbuhan dari semua populasi meningkat'
  },
  {
    id: 'tryout-2-16',
    category: 'Tryout Paket 2',
    type: 'single',
    question: "Jika satu strand DNA memiliki urutan 5' ATCGTTAAGCGAGTCA 3', maka urutan DNA yang komplemen dengan strand tersebut adalah ....",
    options: ["5' TAGCAATTCGCTCAGT 3'", "5' ACTGAGCGAATTGCTA 3'", "5' TGACTCGCTTAACGAT 3'", "5' ATCGTTAAGCGAGTCA 3'", "5' TGACCCGCTTAACGAT 3'"],
    answer: "5' TGACTCGCTTAACGAT 3'"
  },
  {
    id: 'tryout-2-17',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pembentukan dua spesies berbeda dari sebelumnya hanya satu spesies paling mungkin terjadi melalui ....',
    options: ['Pemisahan populasi menjadi dua kelompok yang dibatasi oleh halangan reproduktif', 'Mutasi pada satu individu yang memberikan keuntungan adaptif kepada individu-individu lainnya', 'Bencana alam yang mengurangi ukuran populasi menjadi hanya 50 individu', 'Masuknya beberapa individu dari spesies yang sama namun berasal dari populasi berbeda', 'Masuknya bibit penyakit yang rentan menyerang sebagian besar anggota populasi'],
    answer: 'Pemisahan populasi menjadi dua kelompok yang dibatasi oleh halangan reproduktif'
  },
  {
    // CATATAN: kunci buku = B. Archaeopteryx umumnya disebut bentuk perantara (opsi D). Periksa kembali.
    id: 'tryout-2-18',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Spesies Archaeopteryx yang punah memiliki ciri-ciri burung dan reptilia. Hal ini menunjukkan sebuah contoh dari ....',
    options: ['Spesies konvergen', 'Jejak fosil', 'Pola dasar', 'Bentuk perantara', 'Spesies polimorfik'],
    answer: 'Jejak fosil'
  },
  {
    id: 'tryout-2-19',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Percobaan kloning pada domba, katak, dan mencit telah memperlihatkan bahwa ....',
    options: ['Nukleus sel dewasa bertotipotensi', 'Nukleus sel embrio dapat bertotipotensi', 'Nukleus sel yang telah berdiferensiasi memiliki gen yang berbeda dibandingkan dengan nukleus yang dimiliki zigot', 'Diferensiasi reversible pada semua sel katak', 'Diferensiasi melibatkan perubahan permanen dalam genom'],
    answer: 'Nukleus sel dewasa bertotipotensi'
  },
  {
    // CATATAN: kunci buku = A. Secara konsep, opsi D lebih tepat. Periksa kembali.
    id: 'tryout-2-20',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pernyataan berikut ini yang benar tentang mekanisme reaksi yang bergantung cahaya pada fotosintesis adalah ....',
    options: ['Elektron dari fotosistem I mereduksi NADPH', 'Elektron dari fotosistem I mereduksi feofitin', 'Elektron dari NADPH mengembalikan keadaan fotosistem II kembali ke keadaan semula (ground state)', 'Ferredoksin-NADP reduktase mereduksi NADP⁺ menjadi NADPH', 'Siklik fotofosforilasi mereduksi NADP⁺ menjadi NADPH'],
    answer: 'Elektron dari fotosistem I mereduksi NADPH'
  }
]

// =====================================================================
// TRYOUT PAKET 3
// =====================================================================
const tryout3 = [
  {
    id: 'tryout-3-1',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Senyawa yang memberikan warna merah pada darah disebut ....',
    options: ['Zat besi', 'Hemoglobin', 'Globin', 'Protein', 'Oksihemoglobin'],
    answer: 'Hemoglobin'
  },
  {
    id: 'tryout-3-2',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Plastida yang tidak mengandung pigmen dan biasanya terdapat di dalam jaringan yang tidak terkena sinar disebut ....',
    options: ['Kloroplas', 'Kromoplas', 'Karotenoid', 'Leukoplas', 'Non plastida'],
    answer: 'Leukoplas'
  },
  {
    id: 'tryout-3-3',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Manakah pernyataan yang salah jika dikaitkan dengan reaksi gelap?',
    options: ['Terjadi pada kloroplas yang bernama stroma', 'Sumber energi berupa ATP dan NADH₂', 'Hasilnya berupa karbohidrat sederhana', 'Proses yang terjadi yaitu pengikatan CO₂', 'Terjadi pemecahan air menjadi ion hidrogen'],
    answer: 'Terjadi pemecahan air menjadi ion hidrogen'
  },
  {
    id: 'tryout-3-4',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berdasarkan fungsinya, daun tumbuhan paku yang berfungsi untuk melakukan asimilasi adalah ....',
    options: ['Makrofil', 'Mikrofil', 'Sporofil', 'Tropofil', 'Mesofil'],
    answer: 'Tropofil'
  },
  {
    id: 'tryout-3-5',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Mineralokortikoid adalah hormon steroid yang merupakan bagian dari sistem renin-angiotensin-aldosteron yang berfungsi ....',
    options: ['Mengatur metabolisme karbohidrat, protein, dan lemak', 'Mengatur tekanan darah dan keseimbangan cairan dalam tubuh', 'Berperan dalam konversi mineral menjadi glukosa', 'Meningkatkan kadar gula darah dan mengalirkan ke otot-otot', 'Mengendalikan kadar kalsium dalam darah'],
    answer: 'Mengatur tekanan darah dan keseimbangan cairan dalam tubuh'
  },
  {
    id: 'tryout-3-6',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Isolasi yang menghalangi perkawinan akibat struktur kelamin yang berbeda disebut ....',
    options: ['Isolasi musim', 'Isolasi tingkah laku', 'Isolasi ekologi', 'Isolasi gamet', 'Isolasi mekanik'],
    answer: 'Isolasi mekanik'
  },
  {
    id: 'tryout-3-7',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Manakah pernyataan yang salah jika dikaitkan dengan karakteristik DNA?',
    options: ['Komponen gulanya deoksiribosa', 'Berupa rantai panjang dan ganda', 'Hanya ditemukan di dalam nukleus', 'Kadarnya dipengaruhi oleh aktivitas sintesis protein', 'Fungsinya berhubungan erat dengan penurunan sifat'],
    answer: 'Kadarnya dipengaruhi oleh aktivitas sintesis protein'
  },
  {
    id: 'tryout-3-8',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berikut yang bukan merupakan modifikasi dari jaringan epidermis adalah ....',
    options: ['Kutikula', 'Stomata', 'Trikoma', 'Bulliform', 'Mesofil'],
    answer: 'Mesofil'
  },
  {
    id: 'tryout-3-9',
    category: 'Tryout Paket 3',
    type: 'single',
    stimulus: {
      instruction: 'Di bawah ini beberapa hormon!',
      paragraphs: [daftarHormonAnakGinjal]
    },
    question: 'Hormon yang dikeluarkan oleh kelenjar anak ginjal bagian korteks adrenal adalah ....',
    options: ['2 dan 3', '1 dan 4', '5 dan 6', '1 dan 3', '2 dan 6'],
    answer: '1 dan 4'
  },
  {
    id: 'tryout-3-10',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Pneumonia merupakan penyakit pada sistem pernapasan yang disebabkan oleh ....',
    options: ['Gangguan dalam pengangkutan oksigen ke jaringan', 'Meningkatnya kadar asam karbonat dan asam bikarbonat', 'Peradangan paru-paru karena alveolus berisi cairan', 'Kontraksi yang kaku dari bronkiolus', 'Peradangan pada faring sehingga timbul rasa nyeri'],
    answer: 'Peradangan paru-paru karena alveolus berisi cairan'
  },
  {
    id: 'tryout-3-11',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Di bawah ini yang bukan merupakan faktor yang memengaruhi laju anabolisme adalah ....',
    options: ['Kualitas protoplasma', 'Morfologi daun', 'Klorofil', 'Membuka dan menutupnya stomata', 'Anatomi daun'],
    answer: 'Kualitas protoplasma'
  },
  {
    id: 'tryout-3-12',
    category: 'Tryout Paket 3',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar tipe sistem kanal pada Porifera di bawah ini!',
      image: tipeKanalPorifera
    },
    question: 'Tipe sistem kanal pada gambar di atas adalah ....',
    options: ['Ascon', 'Leucon', 'Canal', 'Sycon', 'Incurrent'],
    answer: 'Sycon'
  },
  {
    id: 'tryout-3-13',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Pada filum Echinodermata sistem pergerakannya menggunakan sistem ambulakral berupa celah atau saluran air yang disebut dengan ....',
    options: ['Pediselaria', 'Madreporit', 'Kaki tabung', 'Papula', 'Statocyst'],
    answer: 'Madreporit'
  },
  {
    id: 'tryout-3-14',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Contoh tumbuhan yang berkembang biak dengan umbi akar adalah ....',
    options: ['Kentang dan ubi jalar', 'Bengkuang dan lobak', 'Kentang dan wortel', 'Singkong dan ubi jalar', 'Singkong dan wortel'],
    answer: 'Singkong dan wortel'
  },
  {
    id: 'tryout-3-15',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berikut yang bukan merupakan fungsi saccus pneumaticus pada aves adalah ....',
    options: ['Membantu pernapasan waktu terbang', 'Berguna untuk terbang dan kemudi', 'Membungkus alat-alat dalam', 'Mencegah hilangnya panas badan', 'Membantu memperkeras suara'],
    answer: 'Berguna untuk terbang dan kemudi'
  },
  {
    id: 'tryout-3-16',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Manakah pernyataan yang salah mengenai proses gutasi?',
    options: ['Bentuk air yang dilepaskan berbentuk titik-titik air', 'Air yang dilepaskan mengandung garam dan mineral', 'Air dilepaskan melalui hidatoda', 'Pembukaan hidatoda tidak dapat diregulasi', 'Berlangsung sepanjang hari'],
    answer: 'Berlangsung sepanjang hari'
  },
  {
    id: 'tryout-3-17',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berikut yang bukan merupakan prinsip-prinsip rekayasa genetika dalam pembuatan vaksin adalah ....',
    options: ['Mencampur gen-gen dari dua individu kemudian dilakukan proses pemurnian', 'Mengisolasi gen-gen dari organisme penyebab penyakit', 'Mengekstraksi antigen yang kemudian digunakan sebagai vaksin', 'Mengkulturkan organisme hasil rekayasa', 'Menyisipkan gen-gen yang telah diisolasi ke tubuh organisme'],
    answer: 'Mencampur gen-gen dari dua individu kemudian dilakukan proses pemurnian'
  },
  {
    id: 'tryout-3-18',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Jika seorang laki-laki bergigi coklat menikah dengan seorang perempuan bergigi normal, maka berapa persen anak perempuannya akan bergigi coklat dan berapa persen anak laki-lakinya akan bergigi normal?',
    options: ['Anak perempuan bergigi coklat 50% dan anak laki-laki bergigi normal 50%', 'Anak perempuan bergigi coklat 75% dan anak laki-laki bergigi normal 75%', 'Anak perempuan bergigi coklat 100% dan anak laki-laki bergigi normal 100%', 'Anak perempuan bergigi coklat 75% dan anak laki-laki bergigi normal 25%', 'Anak perempuan bergigi coklat 50% dan anak laki-laki bergigi normal 25%'],
    answer: 'Anak perempuan bergigi coklat 100% dan anak laki-laki bergigi normal 100%'
  },
  {
    id: 'tryout-3-19',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Suami istri masing-masing pengecap heterozigotik mempunyai dua anak, yaitu anak laki-laki pengecap dan anak perempuan buta kecap. Berapakah kemungkinannya bahwa anak laki-laki itu pengecap?',
    options: ['1/2', '3/4', '1/4', '1/3', '2/3'],
    answer: '2/3'
  },
  {
    id: 'tryout-3-20',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Tanaman transgenik dapat diperoleh dengan rekayasa genetika melalui ....',
    options: ['Teknik hibridoma', 'Teknik plasmid', 'Terapi genetik', 'Kultur jaringan', 'Protein sel tunggal'],
    answer: 'Teknik plasmid'
  }
]

// =====================================================================
// TRYOUT PAKET 4
// =====================================================================
const tryout4 = [
  {
    id: 'tryout-4-1',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pernyataan berikut ini yang benar mengenai fungi, kecuali ....',
    options: ['Pada reproduksi seksual fungi, setelah karyogami terjadi meiosis menghasilkan spora', 'Plasmogami fungi melibatkan peleburan protoplasma dua sel hifa termasuk intinya', 'Fungi yang bereproduksi seksual mengalami plasmogami dan karyogami', 'Fungi yang tidak diketahui cara reproduksi seksualnya disebut fungi imperfekti', 'Fungi memiliki tahap heterokariotik antara tahap plasmogami dan karyogami'],
    answer: 'Plasmogami fungi melibatkan peleburan protoplasma dua sel hifa termasuk intinya'
  },
  {
    id: 'tryout-4-2',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Dalam kondisi apakah kloroplas mempunyai kemiripan seperti mitokondria?',
    options: ['Keduanya dapat memanfaatkan sinar matahari sebagai sumber energi', 'Morfologi keduanya mirip satu dengan yang lainnya', 'Keduanya mengandung DNA dalam jumlah besar', 'Keduanya ditemukan dalam sebagian sel bakteri dan tumbuhan', 'Keduanya memiliki sistem membran dalam dan luar'],
    answer: 'Keduanya memiliki sistem membran dalam dan luar'
  },
  {
    id: 'tryout-4-3',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pernyataan manakah yang TIDAK tepat perihal aliran energi di ekosistem?',
    options: ['Sifat energi di ekosistem sesuai dengan hukum Termodinamika 1 dan 2', 'Menurut hukum Termodinamika 1, energi tidak dapat diciptakan dan dimusnahkan tetapi dapat diubah menjadi tipe energi lain', 'Aliran energi semakin efisien manakala jumlah struktur trofik pada jaring makanan semakin banyak', 'Jika aliran energi ke konsumen 1 lebih rendah, maka aliran energi ke konsumen 2 justru semakin tinggi', 'Aliran energi di suatu ekosistem selalu tetap selama jumlah struktur trofik juga tetap'],
    answer: 'Jika aliran energi ke konsumen 1 lebih rendah, maka aliran energi ke konsumen 2 justru semakin tinggi'
  },
  {
    // CATATAN: kunci buku = D. Periksa kembali arah panah pada gambar siklus.
    id: 'tryout-4-4',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Gambar di bawah ini secara sederhana memvisualisasikan salah satu siklus materi yang terjadi di alam, dengan q dan r merupakan kompartemen atau unit yang menyuplai sekaligus menerima materi tersebut. Y dan Z adalah proses-proses yang terlibat dalam siklus materi ini.',
      image: siklusMateriAlam
    },
    question: 'Simbol Y, Z, q, r, dan x berturut-turut mewakili ....',
    options: ['Fotosintesis, respirasi, udara, makhluk hidup, panas', 'Respirasi, fotosintesis, udara, makhluk hidup, panas', 'Fotosintesis, respirasi, panas, makhluk hidup, udara', 'Transpirasi, fotosintesis, makhluk hidup, panas, udara', 'Transpirasi, fotosintesis, makhluk hidup, udara, panas'],
    answer: 'Transpirasi, fotosintesis, makhluk hidup, panas, udara'
  },
  {
    id: 'tryout-4-5',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Pernyataan di bawah ini adalah tentang anabolisme.',
      paragraphs: [daftarAnabolisme]
    },
    question: 'Manakah yang berkaitan dengan fosforilasi nonsiklik reaksi terang fotosintesis?',
    options: ['(1) dan (2)', '(2) dan (3)', '(3) dan (4)', '(3) dan (5)', '(4) dan (5)'],
    answer: '(3) dan (5)'
  },
  {
    id: 'tryout-4-6',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Keunggulan struktural tumbuhan Spermatophyta yang sekaligus merupakan perkembangan evolusioner yang lebih maju sebagai tumbuhan darat dibandingkan Bryophyta adalah ....',
    options: ['Daun berupa makrofil', 'Memiliki xilem dan floem', 'Habitus berupa herba atau pohon', 'Reproduksi secara vegetatif atau generatif', 'Pergiliran generasi gametofit dan sporofit'],
    answer: 'Memiliki xilem dan floem'
  },
  {
    id: 'tryout-4-7',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar penampang mata berikut!',
      image: anatomiMata
    },
    question: 'Berdasarkan gambar tersebut, tempat otot mata melekat yang di dalamnya terdapat jaringan ikat berwarna putih adalah ....',
    options: ['Otot silia', 'Retina', 'Koroid', 'Sklera', 'Fovea'],
    answer: 'Sklera'
  },
  {
    id: 'tryout-4-8',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pankreas sebagai sistem endokrin dapat menghasilkan hormon somatostatin, yaitu hormon yang dihasilkan ....',
    options: ['Sel alfa dan berfungsi meningkatkan penguraian glikogen hati menjadi glukosa sehingga kadar gula darah meningkat', 'Sel beta dan berfungsi menurunkan katabolisme lemak dan protein, menurunkan gula darah serta meningkatkan sintesis protein dan lemak', 'Sel delta dan merupakan penghalang hormon pertumbuhan dan penghambat sekresi glukagon dan insulin', 'Sel beta dan berfungsi sebagai penghalang hormon pertumbuhan dan penghambat sekresi glukagon dan insulin', 'Sel alfa dan berfungsi menurunkan katabolisme lemak dan protein, menurunkan gula darah, serta meningkatkan sintesis protein dan lemak'],
    answer: 'Sel delta dan merupakan penghalang hormon pertumbuhan dan penghambat sekresi glukagon dan insulin'
  },
  {
    id: 'tryout-4-9',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pada proses respirasi sel, tahap yang paling banyak menghasilkan ATP adalah ....',
    options: ['Glikolisis', 'Siklus krebs', 'Transpor elektron', 'Oksidasi asetil CoA', 'Oksidasi asam piruvat'],
    answer: 'Transpor elektron'
  },
  {
    id: 'tryout-4-10',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Bakteri gram negatif dan positif mempunyai perbedaan pada hal-hal berikut, kecuali ....',
    options: ['Jumlah flagella pada permukaan sel', 'Keberadaan pilus pada permukaan sel', 'Kandungan lipid pada dinding sel', 'Struktur basal flagela pada permukaan sel', 'Jumlah lapisan peptidoglikan pada dinding sel'],
    answer: 'Struktur basal flagela pada permukaan sel'
  },
  {
    id: 'tryout-4-11',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan sifat-sifat animalia berikut!',
      paragraphs: [daftarSifatAnimalia]
    },
    question: 'Sifat yang membedakan antara amfibi dengan reptilia adalah ....',
    options: ['(1) dan (2)', '(2) dan (3)', '(3) dan (4)', '(1) dan (3)', '(2) dan (4)'],
    answer: '(2) dan (4)'
  },
  {
    id: 'tryout-4-12',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Kultur jaringan dengan tujuan untuk perbaikan sifat tanaman dengan membuat varietas baru dinamakan ....',
    options: ['Persilangan somatik', 'Kultur kloroplas', 'Kultur protoplas', 'Kultur polen/serbuk sari', 'Kultur meristem'],
    answer: 'Persilangan somatik'
  },
  {
    id: 'tryout-4-13',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Diketahui urutan basa nitrogen pada rantai nukleotida DNA awal adalah ACC-GGC-TAA. Jika terjadi adisi basa nitrogen T di awal rantai, maka rantai akan berubah menjadi ....',
    options: ['AAC-CGG-CTA', 'TAC-CGG-CTA', 'ACC-GTG-CTA', 'CCG-GCT-TAA', 'TAA-CGC-AAT'],
    answer: 'TAC-CGG-CTA'
  },
  {
    id: 'tryout-4-14',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Yang TIDAK termasuk dalam mekanisme kerja senyawa antimikrobia adalah penghambatan terhadap ....',
    options: ['Sintesis dinding sel', 'Fungsi membran sel', 'Sintesis protein', 'Fungsi dinding sel', 'Sintesis asam nukleat'],
    answer: 'Fungsi dinding sel'
  },
  {
    id: 'tryout-4-15',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Industri keju menggunakan laktase sebagai biokatalis untuk mengubah ....',
    options: ['Laktosa menjadi glukosa dan galaktosa', 'Laktosa menjadi glukosa dan fruktosa', 'Maltosa menjadi laktosa', 'Glukosa menjadi laktosa', 'Fruktosa menjadi laktosa'],
    answer: 'Laktosa menjadi glukosa dan galaktosa'
  },
  {
    id: 'tryout-4-16',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan dendogram hubungan kekerabatan beberapa kelompok hewan berikut!',
      image: dendogramKekerabatan
    },
    question: 'Kekerabatan hewan kelompok 3 dan 4 dikenal dengan istilah ....',
    options: ['Fenetik', 'Parafiletik', 'Filogenetik', 'Monofiletik', 'Polifiletik'],
    answer: 'Parafiletik'
  },
  {
    id: 'tryout-4-17',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Jika batang dipotong melintang, urutan struktur batang dari luar ke dalam adalah ....',
    options: ['Epidermis, korteks, empulur', 'Empulur, korteks, epidermis', 'Epidermis, empulur, korteks', 'Epidermis, endodermis, empulur, korteks', 'Epidermis, empulur, endodermis, korteks'],
    answer: 'Epidermis, korteks, empulur'
  },
  {
    id: 'tryout-4-18',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Sepasang suami istri bertengkar mempermasalahkan seorang anaknya yang bergolongan darah O, sedangkan suami istri tersebut masing-masing bergolongan darah A dan B. Penjelasan yang tepat adalah ....',
    options: ['Istri A homozigot dan suami B homozigot', 'Istri A homozigot dan suami B heterozigot', 'Istri A heterozigot dan suami B homozigot', 'Istri A heterozigot dan suami B heterozigot', 'Bukan anak pasangan suami istri tersebut'],
    answer: 'Istri A heterozigot dan suami B heterozigot'
  },
  {
    id: 'tryout-4-19',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Fungsi enzim restriksi endonuklease dalam rekayasa genetika adalah untuk ....',
    options: ['Menambahkan nukleotida baru ke untai asam nukleat', 'Menambahkan nukleotida dalam proses replikasi', 'Menambahkan nukleotida dalam proses transkripsi', 'Memotong untai asam nukleat di tempat tertentu', 'Memperbaiki ujung patahan untai asam nukleat'],
    answer: 'Memotong untai asam nukleat di tempat tertentu'
  },
  {
    id: 'tryout-4-20',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan mengenai mutasi berikut!',
      paragraphs: [daftarPernyataanMutasi]
    },
    question: 'Pernyataan yang benar mengenai mutasi adalah ....',
    options: ['(1) dan (2)', '(1) dan (3)', '(3) dan (4)', '(2) dan (3)', '(2) dan (4)'],
    answer: '(1) dan (3)'
  }
]

// =====================================================================
// TRYOUT PAKET 5
// =====================================================================
const tryout5 = [
  {
    id: 'tryout-5-1',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Bagian dari struktur DNA yang mengalami mutasi akibat terpapar agen mutagenik bromourasil adalah ....',
    options: ['Gugus gula', 'Nukleotida', 'Pasangan basa', 'Ikatan hidrogen', 'Ikatan fosfodiester'],
    answer: 'Ikatan hidrogen'
  },
  {
    id: 'tryout-5-2',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Grafik yang menunjukkan pengaruh kelembaban terhadap laju transpirasi pada tanaman adalah ....',
    options: [
      optionImage(transpirasiOpsiA, 'Grafik transpirasi opsi A'),
      optionImage(transpirasiOpsiB, 'Grafik transpirasi opsi B'),
      optionImage(transpirasiOpsiC, 'Grafik transpirasi opsi C'),
      optionImage(transpirasiOpsiD, 'Grafik transpirasi opsi D'),
      optionImage(transpirasiOpsiE, 'Grafik transpirasi opsi E')
    ],
    answer: optionImage(transpirasiOpsiB, 'Grafik transpirasi opsi B')
  },
  {
    id: 'tryout-5-3',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Grafik berikut menunjukkan kinerja insulin sintetis.',
      image: grafikInsulinSintetis
    },
    question: 'Berdasarkan grafik di atas, insulin yang paling cepat membantu penyerapan gula adalah ....',
    options: ['NPH', 'Aspart', 'Detemir', 'Glasgine', 'Insulin biasa'],
    answer: 'Aspart'
  },
  {
    id: 'tryout-5-4',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Tempe gembus adalah makanan fermentasi tradisional Indonesia yang menggunakan ampas tahu yang dicampur dengan ....',
    options: ['Aspergillus soyae', 'Aspergillus wentii', 'Mucor hiemalis', 'Monilia sitophila', 'Rhizopus oryzae'],
    answer: 'Rhizopus oryzae'
  },
  {
    id: 'tryout-5-5',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Hewan avertebrata yang fungsi darahnya mirip dengan darah manusia dalam mengikat oksigen dan mengedarkan sari makanan adalah ....',
    options: ['Arthropoda', 'Moluska', 'Plathyhelminthes', 'Cnidaria', 'Apoda'],
    answer: 'Moluska'
  },
  {
    id: 'tryout-5-6',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Metabolisme fermentatif memiliki karakter ....',
    options: ['Donor elektron senyawa organik dan aseptor elektron senyawa anorganik', 'Donor dan akseptor elektron senyawa anorganik', 'Fosforilasi sistem transpor elektron', 'Fosforilasi oksidatif', 'Oksidasi tidak sempurna'],
    answer: 'Oksidasi tidak sempurna'
  },
  {
    id: 'tryout-5-7',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Salah satu contoh program pelestarian satwa secara in situ adalah ....',
    options: ['Pengamanan burung kakatua di balai karantina', 'Pemeliharaan harimau di kebun binatang', 'Pelepasliaran kera di hutan belantara', 'Penangkaran buaya di peternakan', 'Pemeliharaan unta di taman safari'],
    answer: 'Pelepasliaran kera di hutan belantara'
  },
  {
    id: 'tryout-5-8',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Berikut adalah berbagai organ.',
      paragraphs: [daftarOrganPencernaan]
    },
    question: 'Organ di atas yang terlibat dalam proses pencernaan adalah ....',
    options: ['1, 2, 3, 4, 5, dan 6', '2, 3, 4, 5, dan 6', '2, 3, 4, dan 5', '2, 3, dan 4', '2 dan 3'],
    answer: '2, 3, 4, dan 5'
  },
  {
    id: 'tryout-5-9',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pernyataan yang paling tepat tentang vakuola adalah ....',
    options: ['Ruangan di dalam sel hewan yang berisi cairan', 'Ruangan di dalam sel tumbuhan tempat berlangsungnya respirasi', 'Ruangan di dalam sel yang dibatasi dinding sel dan berisi ion-ion', 'Ruang yang berperan dalam turgiditas sel tumbuhan', 'Ruang tempat berlangsungnya proses translasi'],
    answer: 'Ruang yang berperan dalam turgiditas sel tumbuhan'
  },
  {
    id: 'tryout-5-10',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Berdasarkan teori Hardy-Weinberg, keseimbangan Hardy-Weinberg sama dengan 1 apabila ....',
    options: ['Terjadi aliran gen', 'Alel pada gen dalam populasi berubah', 'Frekuensi mutasi pada gen tidak sama', 'Perkawinan tidak acak dalam populasi', 'Populasi dalam jumlah besar'],
    answer: 'Populasi dalam jumlah besar'
  },
  {
    id: 'tryout-5-11',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan gambar tahapan mitosis di bawah ini!',
      image: tahapanMitosis
    },
    question: 'Tahap telofase, metafase, anafase, dan profase ditunjukkan oleh angka ....',
    options: ['1 – 3 – 2 – 4', '1 – 3 – 4 – 2', '1 – 4 – 3 – 2', '4 – 1 – 2 – 3', '4 – 1 – 3 – 2'],
    answer: '1 – 3 – 4 – 2'
  },
  {
    id: 'tryout-5-12',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Jaringan periderm akan segera menggantikan jaringan yang rusak pada batang. Jaringan yang digantikan tersebut adalah ....',
    options: ['Felem', 'Lentisel', 'Felogen', 'Kambium', 'Epidermis'],
    answer: 'Epidermis'
  },
  {
    id: 'tryout-5-13',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan berikut!',
      paragraphs: [daftarSyaratHardyWeinberg]
    },
    question: 'Kombinasi yang sesuai dengan syarat berlakunya hukum Hardy-Weinberg adalah ....',
    options: ['1, 2, dan 3', '1, 3, dan 5', '1, 4, dan 5', '2, 3, dan 4', '3, 4, dan 5'],
    answer: '1, 3, dan 5'
  },
  {
    id: 'tryout-5-14',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan tentang struktur kromosom berikut!',
      paragraphs: [daftarStrukturKromosom]
    },
    question: 'Pernyataan yang benar tentang struktur kromosom adalah ....',
    options: ['(1) dan (2)', '(2) dan (3)', '(2) dan (4)', '(1) dan (3)', '(3) dan (4)'],
    answer: '(2) dan (4)'
  },
  {
    id: 'tryout-5-15',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pasangan organisme dan tingkat trofiknya berikut berperan dalam keseimbangan kehidupan di alam, kecuali ....',
    options: ['Alga – produsen', 'Fungi – pengurai', 'Larva ikan – konsumen sekunder', 'Fitoplankton – konsumen primer', 'Elang – konsumen sekunder'],
    answer: 'Fitoplankton – konsumen primer'
  },
  {
    id: 'tryout-5-16',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Di bawah ini proses-proses dalam sintesis protein.',
      paragraphs: [daftarSintesisProtein]
    },
    question: 'Urutan proses sintesis protein yang terjadi pada tahap translasi adalah ....',
    options: ['(2) – (1) – (6) – (3)', '(1) – (2) – (5) – (6)', '(3) – (5) – (4) – (2)', '(4) – (6) – (3) – (5)', '(4) – (6) – (5) – (3)'],
    answer: '(4) – (6) – (3) – (5)'
  },
  {
    id: 'tryout-5-17',
    category: 'Tryout Paket 5',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan grafik hubungan antara kecepatan reaksi dan faktor yang memengaruhi kerja enzim berikut!',
      image: grafikEnzimPh
    },
    question: 'Apabila X adalah pH, pernyataan berikut yang sesuai dengan grafik tersebut adalah ....',
    options: ['Enzim bekerja baik pada suasana asam', 'Kerja enzim tidak terlalu dipengaruhi oleh pH', 'Pada pH lebih dari 10 enzim masih bekerja dengan baik', 'Enzim bekerja optimal pada pH tertentu', 'Tiap enzim memiliki pH optimum yang berbeda-beda'],
    answer: 'Tiap enzim memiliki pH optimum yang berbeda-beda'
  },
  {
    id: 'tryout-5-18',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Sel prokariotik seperti Escherichia coli memiliki dinding sel kaku yang di dalamnya terdapat membran sel. Bila menggunakan mikroskop elektron dapat terlihat bagian yang mengandung DNA. Bagian apa yang dimaksud?',
    options: ['Nukleus', 'Nukleoid', 'Nukleolus', 'Kromosom', 'Sitosol'],
    answer: 'Nukleoid'
  },
  {
    id: 'tryout-5-19',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pernyataan berikut ini benar mengenai oncom merah, kecuali ....',
    options: ['Dibuat dari ampas tahu', 'Mengandung aflatoksin', 'Mengandung protein tinggi', 'Agen fermentasinya adalah Neurospora sitophila', 'Kapang oncom menghasilkan enzim lipase dan protease'],
    answer: 'Mengandung aflatoksin'
  },
  {
    id: 'tryout-5-20',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pernyataan di bawah ini menyatakan mitosis dan meiosis, kecuali ....',
    options: ['Mitosis dihasilkan 2 sel anak dan meiosis dihasilkan 6 sel anak', 'Mitosis tidak terjadi crossing over dan meiosis terjadi crossing over', 'Mitosis struktur genetik sama dengan induknya dan meiosis jumlah kromosom sel anak ½ dari kromosom induk', 'Mitosis terjadi 1 tahap dan meiosis 2 tahap', 'Meiosis terjadi pada sel gamet dan mitosis terjadi pada semua sel'],
    answer: 'Mitosis dihasilkan 2 sel anak dan meiosis dihasilkan 6 sel anak'
  }
]

export const questionsByCategory = {
  prediksi1,
  prediksi2,
  tryout1,
  tryout2,
  tryout3,
  tryout4,
  tryout5
}

// Gabungan seluruh 140 soal, urut sesuai dokumen sumber (1. BIOLOGI-ED.pdf)
const fulltestQuestions = [
  ...prediksi1,
  ...prediksi2,
  ...tryout1,
  ...tryout2,
  ...tryout3,
  ...tryout4,
  ...tryout5
]

export default fulltestQuestions
