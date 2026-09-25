// Bank soal Sosiologi SMA - Tryout Paket 1-6 (120 soal).
// Sumber: 1. SOSIOLOGI-ED.pdf (bagian PAKET TRYOUT + KUNCI JAWABAN).
//
// Struktur mengikuti template dua sisi:
//   - stimulus !== null  -> tampilan dua panel (petunjuk di sisi kiri, soal di sisi kanan)
//   - stimulus === null  -> soal pilihan ganda biasa satu kolom
// Hanya soal bertipe PETUNJUK B (PERNYATAAN-SEBAB-ALASAN) dan PETUNJUK C
// (pilihan pernyataan (1)-(4)) yang memiliki stimulus.

// ---------------------------------------------------------------------------
// Tryout Paket 1
// ---------------------------------------------------------------------------
const paket1 = [
  {
    id: "paket-1-1",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Praktik penggandaan uang masih diminati oleh masyarakat yang percaya pada kekuatan supernatural. Dalam konsep Auguste Comte, percaya terhadap kekuatan gaib berada dalam tahap yang bersifat ....",
    options: [
      "Irasional",
      "Teologis",
      "Metafisik",
      "Positivistik",
      "Tradisional",
    ],
    answer: "Metafisik"
  },

  {
    id: "paket-1-2",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Ibu Nia ditugaskan dinas luar kota, tetapi anak balitanya sakit. Atasannya mengalihkan tugas tersebut dan memberi Ibu Nia kesempatan merawat anaknya. Sikap atasan menunjukkan ....",
    options: [
      "Diskriminasi gender",
      "Bias gender",
      "Sensitif gender",
      "Peran gender",
      "Beban ganda",
    ],
    answer: "Sensitif gender"
  },

  {
    id: "paket-1-3",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Seorang kepala daerah ditetapkan menjadi pemimpin meskipun memperoleh jabatan itu dengan cara curang. Bentuk interaksi sosial tersebut termasuk ....",
    options: [
      "Konflik",
      "Kontravensi",
      "Asosiatif",
      "Disosiatif",
      "Koalisi",
    ],
    answer: "Disosiatif"
  },

  {
    id: "paket-1-4",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Melimpahnya sumber daya alam belum tentu meningkatkan kesejahteraan; daerah tersebut dapat tertinggal dari daerah yang sumber daya alamnya terbatas. Ketimpangan sosial ini dipengaruhi oleh faktor ....",
    options: [
      "Ketersediaan modal",
      "Kreativitas mengolah sumber daya",
      "Kemampuan mencari donatur",
      "Kesiapan masyarakat untuk maju",
      "Ketidaksiapan sumber daya alam untuk dikelola",
    ],
    answer: "Kreativitas mengolah sumber daya"
  },

  {
    id: "paket-1-5",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Seorang remaja lahir dalam keluarga Minang dan berkepribadian Minang yang diperoleh saat pembentukan kepribadian. Hal ini menunjukkan hubungan sosialisasi dengan ....",
    options: [
      "Faktor askripsi",
      "Daerah asal",
      "Pengaruh masyarakat",
      "Faktor kebudayaan",
      "Identitas primordial",
    ],
    answer: "Faktor kebudayaan"
  },

  {
    id: "paket-1-6",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Banyaknya pendatang memengaruhi komposisi penduduk berdasarkan ras, agama, etnis, dan budaya. Disintegrasi tersebut disebabkan faktor ....",
    options: [
      "Persaingan ekonomi",
      "Lambatnya IPTEK",
      "Nilai dan norma tidak dipatuhi",
      "Pertambahan penduduk cepat",
      "Masuknya unsur kebudayaan lain",
    ],
    answer: "Masuknya unsur kebudayaan lain"
  },

  {
    id: "paket-1-7",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Modernisasi rasional dan pragmatis yang mengesampingkan ajaran agama (sekulerisme), bila terus terjadi, berdampak negatif berupa ....",
    options: [
      "Sikap egosentris",
      "Keimanan berkurang",
      "Hubungan sosial terganggu",
      "Minim waktu ibadah",
      "Tidak percaya Tuhan",
    ],
    answer: "Tidak percaya Tuhan"
  },

  {
    id: "paket-1-8",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Keluarga Pak Slamet dari Jawa telah merantau di Bandung, tetapi tetap memegang prinsip dan budaya asalnya. Perilaku ini terikat oleh ....",
    options: [
      "Modernisme",
      "Chauvinisme",
      "Primordialisme",
      "Determinisme",
      "Hedonisme",
    ],
    answer: "Primordialisme"
  },

  {
    id: "paket-1-9",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Iklan rokok yang tersebar bebas membuat konsumsi rokok meningkat meski ada kampanye dan larangan merokok di tempat umum. Hal tersebut disebabkan oleh ....",
    options: [
      "Sosialisasi tidak sempurna",
      "Peniruan generalized other yang salah",
      "Subkebudayaan menyimpang",
      "Dekulturasi budaya",
      "Transformasi budaya perilaku masyarakat",
    ],
    answer: "Subkebudayaan menyimpang"
  },

  {
    id: "paket-1-10",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Rehabilitasi di BNN bagi pengguna narkoba, ditinjau dari pengendalian sosial, tergolong pengendalian sosial yang bersifat ....",
    options: [
      "Preventif",
      "Represif",
      "Kompulsi",
      "Pervasi",
      "Edukasi",
    ],
    answer: "Represif"
  },

  {
    id: "paket-1-11",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Penelitian pendidikan masyarakat dilakukan secara sampling. Agar efisien karena masyarakat tersebar di beberapa kecamatan, teknik yang sesuai adalah ....",
    options: [
      "Incidental sampling",
      "Purposive sampling",
      "Cluster sampling",
      "Area sampling",
      "Stratified sampling",
    ],
    answer: "Area sampling"
  },

  {
    id: "paket-1-12",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Karakteristik masyarakat dengan sistem stratifikasi sosial terbuka antara lain ....",
    options: [
      "Pencapaian berdasarkan askripsi",
      "Mobilitas sosial rendah",
      "Stratifikasi berdasarkan kepemilikan materi",
      "Kesempatan hanya untuk kelas tertentu",
      "Perkawinan endogami mudah",
    ],
    answer: "Stratifikasi berdasarkan kepemilikan materi"
  },

  {
    id: "paket-1-13",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Pembantu rumah tangga merantau ke luar negeri untuk gaji lebih tinggi. Hal tersebut merupakan mobilitas horizontal karena ....",
    options: [
      "Status berpindah tanpa berpindah lapisan sosial",
      "Lapisan sosial berpindah ke status berbeda",
      "Terjadi atas kehendak sendiri",
      "Didukung kondisi pekerjaan",
      "Untuk kepentingan ekonomi",
    ],
    answer: "Status berpindah tanpa berpindah lapisan sosial"
  },

  {
    id: "paket-1-14",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Peer group, keluarga, tetangga, teman asrama, teman kos, dan komunitas hobi memenuhi ciri gemeinschaft menurut Ferdinand Tonnies, kecuali ....",
    options: [
      "Bertahan lama",
      "Hubungan impersonal",
      "Hubungan informal",
      "Relasi intim",
      "Eksklusif",
    ],
    answer: "Hubungan impersonal"
  },

  {
    id: "paket-1-15",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Menurut Kinloch, hubungan antarkelompok memiliki kriteria; pengelompokan berdasarkan agama dapat dimasukkan pada kriteria ....",
    options: [
      "Fisiologis",
      "Arkeologis",
      "Teologis",
      "Budaya",
      "Perilaku",
    ],
    answer: "Budaya"
  },

  {
    id: "paket-1-16",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Panji membuat karya dari sampah plastik demi kelestarian lingkungan, bukan demi ekonomi. Nilai yang dijunjung Panji adalah ....",
    options: [
      "Nilai vital",
      "Nilai moral",
      "Nilai religius",
      "Nilai estetika",
      "Nilai material",
    ],
    answer: "Nilai moral"
  },

  {
    id: "paket-1-17",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Kemiskinan absolut dilihat dari garis batas kemiskinan. Daerah dengan lumbung padi tidak memiliki warga miskin absolut karena ....",
    options: [
      "Pendapatan tetap tidak tercukupi",
      "Pendapatan besar tidak tercukupi",
      "Pendapatan tetap tercukupi",
      "Pendapatan besar tercukupi",
      "Pendapatan tidak besar tidak tercukupi",
    ],
    answer: "Pendapatan tetap tercukupi"
  },

  {
    id: "paket-1-18",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Demonstrasi serikat buruh yang menuntut pengusaha memenuhi kesejahteraan buruh merupakan konflik ....",
    options: [
      "Vertikal",
      "Horizontal",
      "Tertutup",
      "Politik",
      "Nonrealistis",
    ],
    answer: "Vertikal"
  },

  {
    id: "paket-1-19",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Pekerja perusahaan produksi tas ternama tidak mampu membeli tas yang dihasilkannya karena harganya mahal. Pekerja tersebut mengalami ....",
    options: [
      "Anomi",
      "Alienasi",
      "Adaptasi",
      "Beban ganda",
      "Subordinasi",
    ],
    answer: "Alienasi"
  },

  {
    id: "paket-1-20",
    category: "Tryout Paket 1",
    type: "single",
    stimulus: null,
    question: "Sebagai lembaga pendidikan, fungsi sekolah yang tidak diharapkan anggota masyarakat adalah ....",
    options: [
      "Menjaga gelar dan harta warisan",
      "Mempersiapkan mencari nafkah",
      "Menjamin kesejahteraan umum",
      "Merusak lingkungan",
      "Mengurangi pengendalian orang tua",
    ],
    answer: "Mengurangi pengendalian orang tua"
  }
]

// ---------------------------------------------------------------------------
// Tryout Paket 2
// ---------------------------------------------------------------------------
const paket2 = [
  {
    id: "paket-2-1",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Reformasi agama yang digerakkan oleh Martin Luther menjadi salah satu peristiwa yang melatarbelakangi kelahiran Sosiologi. Reformasi agama tersebut dipicu oleh ....",
    options: [
      "Masuknya pengaruh agama dan kepercayaan baru",
      "Penyelewengan dan penyalahgunaan kekuasaan pimpinan gereja",
      "Penganut agama yang taat terlalu mengultuskan diri",
      "Kondisi ekonomi dan politik yang tidak stabil",
      "Kesadaran bahwa konsep agama tidak rasional",
    ],
    answer: "Penyelewengan dan penyalahgunaan kekuasaan pimpinan gereja"
  },

  {
    id: "paket-2-2",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Menurut Emile Durkheim, integrasi sosial yang sangat kuat dalam kelompok dapat menyebabkan terjadinya bunuh diri yang bertipe ....",
    options: [
      "Altruistik",
      "Anomik",
      "Normatif",
      "Fatalistik",
      "Egoistik",
    ],
    answer: "Altruistik"
  },

  {
    id: "paket-2-3",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Seno penyuka penyanyi Korea mengeluarkan banyak uang untuk membeli bantal, poster, gantungan kunci, dan pernak-pernik lain yang berhubungan dengan idolanya. Tindakan Seno didorong oleh faktor ....",
    options: [
      "Imitasi",
      "Identifikasi",
      "Sugesti",
      "Fanatisme",
      "Empati",
    ],
    answer: "Sugesti"
  },

  {
    id: "paket-2-4",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Kedua belah pihak yang berkonflik sepakat melakukan perundingan yang difasilitasi oleh pihak ketiga demi penyelesaian konflik. Akomodasi tersebut berbentuk ....",
    options: [
      "Arbitrasi",
      "Mediasi",
      "Konsiliasi",
      "Ajudikasi",
      "Negosiasi",
    ],
    answer: "Konsiliasi"
  },

  {
    id: "paket-2-5",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Integrasi merupakan proses penyatuan unsur-unsur yang berbeda di dalam masyarakat. Pernyataan yang menunjukkan bentuk integrasi fungsional adalah ....",
    options: [
      "Pemerintah menetapkan larangan mudik lebaran",
      "Warga menjunjung tinggi tata krama",
      "Gotong royong menjadi prinsip yang selalu dipegang warga",
      "Hubungan kerja di sebuah perusahaan",
      "Kepolisian menggelar razia tertib berlalu lintas",
    ],
    answer: "Hubungan kerja di sebuah perusahaan"
  },

  {
    id: "paket-2-6",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Siska menghitung kebutuhan dan biaya untuk meningkatkan nilai tes Bahasa Inggrisnya, lalu menghemat uang jajan dengan membawa bekal dari rumah. Ilustrasi tersebut menunjukkan wujud tindakan sosial ....",
    options: [
      "Subjektif",
      "Rasional instrumental",
      "Tradisional",
      "Rasional orientasi nilai",
      "Afektif",
    ],
    answer: "Rasional instrumental"
  },

  {
    id: "paket-2-7",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Dalam masyarakat tidak memungkinkan jika tanpa adanya stratifikasi sosial, karena selalu ada lapisan sosial di manapun berada. Hal ini disebabkan karena ....",
    options: [
      "Masyarakat mengutamakan ketidakadilan",
      "Terdapat golongan yang ingin mempertahankan posisi atas",
      "Ada hal yang lebih dihargai dalam masyarakat",
      "Adanya tujuan untuk memecah belah masyarakat",
      "Semua unsur dalam masyarakat sifatnya bertingkat",
    ],
    answer: "Ada hal yang lebih dihargai dalam masyarakat"
  },

  {
    id: "paket-2-8",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Masyarakat yang kecewa terhadap kedua calon presiden memilih menjadi golongan putih. Perilaku tersebut dalam kajian Robert K. Merton disebut pola adaptasi ....",
    options: [
      "Retreatism",
      "Rebellion",
      "Ritualism",
      "Conformity",
      "Innovation",
    ],
    answer: "Retreatism"
  },

  {
    id: "paket-2-9",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Agen pengendalian sosial yang paling berperan dalam proses pengawasan terhadap remaja, terutama di lingkungan sekolah adalah ....",
    options: [
      "Keluarga",
      "Teman",
      "Wakasek",
      "Kepala sekolah",
      "Guru",
    ],
    answer: "Guru"
  },

  {
    id: "paket-2-10",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Sebuah penelitian berjudul Perbandingan Tingkat Pelanggaran Tata Tertib di Sekolah antara Siswa Laki-Laki dengan Siswa Perempuan telah selesai mengumpulkan data. Tahap pengolahan data yang harus dilakukan adalah ....",
    options: [
      "Reduksi data",
      "Editing",
      "Coding",
      "Verifikasi",
      "Tabulasi data",
    ],
    answer: "Editing"
  },

  {
    id: "paket-2-11",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Perubahan sosial yang dialami masyarakat suku Badui Dalam lebih lambat dibandingkan suku Badui Luar. Hal tersebut dipengaruhi oleh faktor ....",
    options: [
      "Kondisi alam yang subur",
      "Kurang kontak dengan masyarakat lain",
      "Kebijakan pemerintah daerah",
      "Prasangka terhadap hal asing",
      "Perbedaan tingkat pertumbuhan masyarakat",
    ],
    answer: "Kurang kontak dengan masyarakat lain"
  },

  {
    id: "paket-2-12",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Gender merupakan konstruksi sosial yang membedakan peran antara laki-laki dan perempuan. Salah satu peran gender yang selalu dilekatkan pada perempuan adalah ....",
    options: [
      "Mengandung",
      "Menstruasi",
      "Melahirkan",
      "Menyusui",
      "Mengasuh anak",
    ],
    answer: "Mengasuh anak"
  },

  {
    id: "paket-2-13",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Masih kuatnya keyakinan bahwa perempuan tidak mampu menjadi pemimpin yang baik menghambat peran perempuan dalam bidang politik. Faktor penghambat mobilitas sosial tersebut adalah faktor ....",
    options: [
      "Biologis",
      "Ideologi",
      "Budaya",
      "Kepentingan",
      "Pengetahuan",
    ],
    answer: "Budaya"
  },

  {
    id: "paket-2-14",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Abi telah lulus dua tahun lalu tetapi belum bekerja karena sungkan mendatangi job fair tanpa rekan yang menemani. Ilustrasi tersebut memicu ketimpangan sosial yang disebabkan oleh ....",
    options: [
      "Faktor globalisasi",
      "Perbedaan sumber daya alam",
      "Kebijakan pemerintah",
      "Letak dan kondisi geografis",
      "Faktor internal individu",
    ],
    answer: "Faktor internal individu"
  },

  {
    id: "paket-2-15",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Setelah menempuh 4 tahun perkuliahan, seorang sarjana Sosiologi diterima bekerja sebagai penyuluh sosial di lembaga pemerintahan. Hal ini menunjukkan fungsi lembaga pendidikan, yaitu ....",
    options: [
      "Memberikan kasih sayang dan perlindungan",
      "Menjamin kesejahteraan umum masyarakat",
      "Mengajarkan prinsip benar-salah",
      "Mempersiapkan anggota masyarakat untuk mencari nafkah",
      "Mentransmisikan ilmu pengetahuan",
    ],
    answer: "Mempersiapkan anggota masyarakat untuk mencari nafkah"
  },

  {
    id: "paket-2-16",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Adanya Transjakarta menuntut masyarakat menyesuaikan diri dengan kedisiplinan baru di jalan raya, tetapi masih ada yang melanggar dengan memasuki jalur Transjakarta. Hal ini menunjukkan dampak negatif perubahan sosial berupa fenomena ....",
    options: [
      "Globalisasi",
      "Cultural lag",
      "Cultural shock",
      "Fungsional",
      "Konflik",
    ],
    answer: "Cultural lag"
  },

  {
    id: "paket-2-17",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Seorang guru merasa bersalah akibat gagal melihat siswanya diterima di perguruan tinggi negeri favorit di kota. Hal ini menunjukkan klasifikasi nilai ....",
    options: [
      "Dominant value",
      "Internalized value",
      "Nilai material",
      "Nilai vital",
      "Nilai immaterial",
    ],
    answer: "Internalized value"
  },

  {
    id: "paket-2-18",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Menurut Charles Horton Cooley pembentukan diri seseorang terjadi melalui looking glass-self. Dalam proses tersebut, penanda terbentuknya diri adalah ....",
    options: [
      "Kegagalan dalam menyesuaikan diri",
      "Peniruan yang dijalankan oleh orang dewasa",
      "Kesadaran akan peran yang harus dijalankan",
      "Kemampuan mengambil peran orang lain secara lebih luas",
      "Kemampuan menjadi diri sendiri",
    ],
    answer: "Kemampuan menjadi diri sendiri"
  },

  {
    id: "paket-2-19",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Di bandara terdapat sekelompok orang yang akan pergi ke Nusa Tenggara Timur yang terkena bencana alam untuk membantu sanak saudara yang menjadi korban. Kumpulan orang-orang itu disebut ....",
    options: [
      "Crowds",
      "Massa",
      "Panic crowds",
      "Homogen",
      "Heterogen",
    ],
    answer: "Crowds"
  },

  {
    id: "paket-2-20",
    category: "Tryout Paket 2",
    type: "single",
    stimulus: null,
    question: "Dalam masyarakat multikultural terdapat individu yang memiliki keanggotaan ganda pada beberapa kelompok tertentu. Struktur sosial tersebut adalah ....",
    options: [
      "Diskriminasi",
      "Etnosentrisme",
      "Primordialisme",
      "Konsolidasi",
      "Interseksi",
    ],
    answer: "Interseksi"
  }
]

// ---------------------------------------------------------------------------
// Tryout Paket 3
// ---------------------------------------------------------------------------
const paket3 = [
  {
    id: "paket-3-1",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Menurut paradigma ini, pokok persoalan yang dipelajari dalam sosiologi adalah tindakan sosial seperti yang didefinisikan oleh pelaku, dan tindakan sosial menjadi dasar terbentuknya hubungan sosial. Paradigma ini disebut ....",
    options: [
      "Fakta sosial",
      "Definisi sosial",
      "Tindakan sosial",
      "Perilaku sosial",
      "Behaviorisme",
    ],
    answer: "Definisi sosial"
  },

  {
    id: "paket-3-2",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Saat berinteraksi dengan teman spesial, kita harus memerhatikan etika, waktu berkunjung yang tepat, dan jam malam yang harus dipatuhi. Dengan demikian, ciri interaksi sosial yang harus diperhatikan adalah ....",
    options: [
      "Pelaku minimal dua orang",
      "Ada komunikasi yang dilakukan",
      "Memerhatikan kaidah/norma yang berlaku",
      "Memiliki dimensi waktu yang khusus",
      "Interaksi berjalan secara terus-menerus",
    ],
    answer: "Memerhatikan kaidah/norma yang berlaku"
  },

  {
    id: "paket-3-3",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Nilai sosial merupakan sesuatu yang abstrak dan ideal bagi masyarakat. Nilai sosial hadir dalam masyarakat untuk menjalankan fungsi ....",
    options: [
      "Alat untuk menetapkan harga sosial seseorang",
      "Dapat membiarkan pemimpin berbuat sesuka hatinya",
      "Menjadi pedoman bagi seseorang melakukan kejahatan",
      "Mencapai tujuan yang diimpikan oleh pemimpin setempat",
      "Sebagai pelengkap kehidupan di masyarakat",
    ],
    answer: "Alat untuk menetapkan harga sosial seseorang"
  },

  {
    id: "paket-3-4",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Raka patuh terhadap nasihat orang tuanya dan enggan melanggar peraturan. Kini ia mengurus perizinan bisnis kulinernya sesuai ketentuan yang ada. Tahapan sosialisasi Raka berada pada tahapan ....",
    options: [
      "Preparatory stage",
      "Play stage",
      "Game stage",
      "Generalized other",
      "Maturity stage",
    ],
    answer: "Generalized other"
  },

  {
    id: "paket-3-5",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Seorang ibu muda menganiaya anaknya sendiri yang masih balita karena kesal pada suaminya. Tindakan tersebut merupakan penyimpangan sekunder sebab ....",
    options: [
      "Dilakukan berkali-kali",
      "Masih ditoleransi oleh masyarakat",
      "Kategori penyimpangan ringan menuju sedang",
      "Melanggar hukum keluarga",
      "Merugikan pihak lain",
    ],
    answer: "Merugikan pihak lain"
  },

  {
    id: "paket-3-6",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Akibat bapaknya melakukan kekerasan hingga ibunya meninggal, Ridwan sering mendapatkan ejekan sebagai anak pembunuh. Hal yang dialami Ridwan merupakan pengendalian sosial berupa ....",
    options: [
      "Cemoohan",
      "Gosip",
      "Ostrasisme",
      "Fraundulens",
      "Ajaran agama",
    ],
    answer: "Cemoohan"
  },

  {
    id: "paket-3-7",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Arif mengumpulkan data dengan wawancara, tetapi meskipun menanyakan berbagai jenis pertanyaan, jawaban responden tetap sama. Kelemahan metode wawancara adalah ....",
    options: [
      "Cara-cara bertanya lebih fleksibel",
      "Informasi yang diperoleh lebih dipercayai",
      "Terdapat kesangsian akan kebenaran jawaban yang diperoleh",
      "Kondisi pewawancara selalu sehat dan fit",
      "Hindari pertanyaan-pertanyaan yang membingungkan",
    ],
    answer: "Terdapat kesangsian akan kebenaran jawaban yang diperoleh"
  },

  {
    id: "paket-3-8",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Kelompok sosial yang tercipta karena hubungan darah seperti kelompok marga, trah, dan bani merupakan contoh nyata kelompok ....",
    options: [
      "Gemeinschaft of place",
      "Gemeinschaft by blood",
      "Gemeinschaft of mind",
      "Kelompok formal",
      "Kelompok nonformal",
    ],
    answer: "Gemeinschaft by blood"
  },

  {
    id: "paket-3-9",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Kemiskinan menimbulkan kesulitan hidup seperti persoalan kecemburuan antara kelas bawah dengan kelas atas. Dengan demikian, kemiskinan mengakibatkan ....",
    options: [
      "Pengangguran",
      "Kriminalitas",
      "Putus sekolah",
      "Konflik sosial",
      "Terorisme",
    ],
    answer: "Konflik sosial"
  },

  {
    id: "paket-3-10",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Fenomena diferensiasi dan stratifikasi sosial memberikan dampak bagi kehidupan masyarakat. Dampak tersebut terjadi pada bidang ....",
    options: [
      "Pelayanan kesehatan yang diberikan sama antara kelas elit, kelas atas, dan kelas bawah",
      "Harapan hidup masyarakat bawah lebih tinggi daripada kelas atas karena aktif secara fisik",
      "Masyarakat bawah memiliki hak politik dan akses hukum yang memadai",
      "Kelompok sosialita sering mengadakan arisan sebagai ajang eksistensi diri",
      "Masyarakat bawah sulit mengakses pendidikan yang tinggi dan berkualitas, kecuali ada beasiswa yang ditawarkan",
    ],
    answer: "Masyarakat bawah sulit mengakses pendidikan yang tinggi dan berkualitas, kecuali ada beasiswa yang ditawarkan"
  },

  {
    id: "paket-3-11",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Pasca terjadinya konflik, masyarakat melakukan upaya pemulihan agar norma-norma baru bisa serasi dengan lembaga kemasyarakatan yang telah mengalami perubahan. Hal ini disebut dengan konsep ....",
    options: [
      "Integrasi",
      "Reduksi",
      "Resosialisasi",
      "Reintegrasi",
      "Remisi",
    ],
    answer: "Reintegrasi"
  },

  {
    id: "paket-3-12",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Dalam kenyataannya integrasi sosial sulit diwujudkan. Hal ini terjadi karena adanya faktor penghambat berupa ....",
    options: [
      "Perasaan bahwa kebudayaannya lebih unggul daripada yang lain",
      "Kebudayaan masyarakat bersifat terbuka terhadap siapa pun",
      "Sikap masyarakat yang permisif",
      "Golongan penguasa memperhatikan semua golongan yang ada",
      "Antarpribadi terjalin hubungan yang harmonis dan serasi",
    ],
    answer: "Perasaan bahwa kebudayaannya lebih unggul daripada yang lain"
  },

  {
    id: "paket-3-13",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Pemetaan sosial menjadi alat untuk mendapatkan gambaran tentang kondisi suatu masyarakat. Kelebihan metode pemetaan sosial, yaitu ....",
    options: [
      "Di desa kadang tidak memiliki aturan yang jelas",
      "Masyarakat tidak bisa mengubah lembaga sosial yang ada",
      "Merumuskan desain pemanfaatan modal sosial untuk menanggulangi kemiskinan",
      "Untuk mengukur dan mendekati orang-orang kaya di desa agar membantu program ini",
      "Menganalisis keterkaitan modal sosial dan modal politik yang biasanya saling berkaitan",
    ],
    answer: "Merumuskan desain pemanfaatan modal sosial untuk menanggulangi kemiskinan"
  },

  {
    id: "paket-3-14",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Hadirnya berbagai aplikasi memudahkan aktivitas manusia sehingga perubahan sosial terjadi dengan mudah. Dengan demikian perubahan sosial disebabkan oleh faktor ....",
    options: [
      "Bertambah dan berkurangnya jumlah penduduk",
      "Penemuan-penemuan baru",
      "Sikap masyarakat yang terbuka terhadap budaya lain",
      "Rasa tidak puas terhadap kondisi yang ada",
      "Pertentangan dalam masyarakat",
    ],
    answer: "Penemuan-penemuan baru"
  },

  {
    id: "paket-3-15",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Di era modernisasi kita dituntut untuk bisa menyesuaikan diri. Berikut ini ciri-ciri manusia modern, yaitu ....",
    options: [
      "Merasa dirinya yang paling hebat dan paling benar",
      "Masih terjebak dalam kenangan kejayaan masa lalu",
      "Kurang peka terhadap masalah di sekitarnya",
      "Lebih percaya pada mitos daripada sains",
      "Menghormati hak dan kewajiban orang lain",
    ],
    answer: "Menghormati hak dan kewajiban orang lain"
  },

  {
    id: "paket-3-16",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Di wilayah Jabodetabek banyak perusahaan multinasional beroperasi, mulai dari elektronik Jepang, makanan dan minuman Eropa, hingga kosmetik. Mudahnya perusahaan asing beroperasi di Indonesia merupakan bagian globalisasi yang didorong oleh faktor ....",
    options: [
      "Kemajuan ilmu pengetahuan",
      "Terbukanya sistem perekonomian negara berkembang",
      "Mengglobalnya pasar uang dan modal",
      "Jatuhnya negara-negara komunis",
      "Berkembangnya organisasi internasional dan regional",
    ],
    answer: "Terbukanya sistem perekonomian negara berkembang"
  },

  {
    id: "paket-3-17",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Indonesia sebagai salah satu negara berkembang mengalami ketimpangan sosial pada beberapa bidang, di antaranya adalah ....",
    options: [
      "Ketimpangan penyebaran aset di kalangan swasta",
      "Ketimpangan antara berbagai profesi yang ada di masyarakat",
      "Kesenjangan penghasilan antara artis dengan seniman",
      "Kecemburuan antarpemerintah daerah di Pulau Jawa",
      "Ketidakadilan negara terhadap pemerintah daerah Papua",
    ],
    answer: "Ketimpangan penyebaran aset di kalangan swasta"
  },

  {
    id: "paket-3-18",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Pelanggan yang tampak kaya diperlakukan berbeda, pelaku korupsi mendapat hukuman ringan, bahkan koruptor mendapat fasilitas nyaman di penjara. Ketimpangan sosial terjadi di masyarakat karena ....",
    options: [
      "Pengaruh modernisasi pada berbagai bidang kehidupan",
      "Pengaruh globalisasi di negara-negara maju",
      "Masing-masing daerah memiliki sumber daya yang bisa diolah",
      "Kebijakan pemerintah (struktural) yang dianggap tidak adil",
      "Kondisi geografis yang memiliki potensi cukup tinggi",
    ],
    answer: "Kebijakan pemerintah (struktural) yang dianggap tidak adil"
  },

  {
    id: "paket-3-19",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Kearifan lokal merupakan kebijaksanaan manusia dalam hal nilai, etika, dan perilaku yang sudah melembaga. Kearifan lokal memiliki ciri sebagai berikut ....",
    options: [
      "Mudah berubah ketika budaya global masuk",
      "Tidak mampu bertahan terhadap budaya luar",
      "Mampu mengakomodasi unsur-unsur budaya luar",
      "Bisa memberi arah pada budaya lainnya",
      "Tidak mampu mengendalikan perilaku warga",
    ],
    answer: "Mampu mengakomodasi unsur-unsur budaya luar"
  },

  {
    id: "paket-3-20",
    category: "Tryout Paket 3",
    type: "single",
    stimulus: null,
    question: "Pemberdayaan masyarakat merupakan kegiatan untuk memampukan dan memandirikan masyarakat. Kegiatan pemberdayaan ini dilaksanakan dengan memerhatikan beberapa prinsip seperti ....",
    options: [
      "Demokrasi dan demonstrasi",
      "Minat, kebutuhan, dan gengsi",
      "Organisasi masyarakat bawah dan menengah",
      "Keragaman budaya dan gaya hidup",
      "Kerja sama, partisipasi, dan demokrasi",
    ],
    answer: "Kerja sama, partisipasi, dan demokrasi"
  }
]

// ---------------------------------------------------------------------------
// Tryout Paket 4
// ---------------------------------------------------------------------------
const paket4 = [
  {
    id: "paket-4-1",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Bagi Karl Marx, keberadaan masyarakat identik dengan sejarah perjuangan kelas sosial. Struktur masyarakat yang terbentuk dilandaskan pada ....",
    options: [
      "Jenjang ekonomi",
      "Kepemilikan alat produksi",
      "Prestise",
      "Kekuasaan",
      "Keturunan",
    ],
    answer: "Kepemilikan alat produksi"
  },

  {
    id: "paket-4-2",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Lahirnya sosiologi dilatarbelakangi oleh peristiwa penting yang mengubah tatanan sosial masyarakat Eropa secara mendasar di abad pertengahan. Salah satu peristiwa tersebut adalah ....",
    options: [
      "Meletusnya Perang Dunia I",
      "Munculnya fasisme di Jerman",
      "Revolusi komunis di Rusia",
      "Revolusi politik di Perancis",
      "Imperialisme perdagangan",
    ],
    answer: "Imperialisme perdagangan"
  },

  {
    id: "paket-4-3",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Tahap masyarakat di mana gejala sosial dijelaskan dengan menggunakan hukum-hukum ilmiah disebut tahap ....",
    options: [
      "Globalisasi",
      "Modernisasi",
      "Positif",
      "Metafisik",
      "Teologis",
    ],
    answer: "Positif"
  },

  {
    id: "paket-4-4",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Dua kelompok masyarakat yang berbeda kebudayaan saling bertemu dan melakukan kontak sosial intensif sehingga terjadi pembaharuan budaya, tetapi tidak menghilangkan budaya aslinya disebut ....",
    options: [
      "Akulturasi",
      "Asimilasi",
      "Amalgamasi",
      "Kooperasi",
      "Akomodasi",
    ],
    answer: "Akulturasi"
  },

  {
    id: "paket-4-5",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Dalam masyarakat, semakin banyak status yang dimiliki individu, semakin terjadi konflik peran. Berikut ini yang mencerminkan konflik peran adalah ....",
    options: [
      "Dua orang sahabat yang kedudukannya sama, tetapi berbeda pendapat",
      "Seorang ibu rumah tangga yang juga berkarier di luar rumah",
      "Dua pemain bola profesional bersaudara, tetapi berbeda klub",
      "Seorang ibu yang menjadi guru di sekolah anaknya",
      "Seorang hakim yang harus mengadili anaknya sendiri sebagai terdakwa",
    ],
    answer: "Seorang ibu rumah tangga yang juga berkarier di luar rumah"
  },

  {
    id: "paket-4-6",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Masyarakat praindustri dan masyarakat agraris umumnya menganut sistem stratifikasi yang tertutup. Berikut ini akibat yang terjadi pada individu dalam masyarakat tersebut, kecuali ....",
    options: [
      "Status sosial yang sama sepanjang hidup",
      "Apatis dalam kehidupan",
      "Tidak terjadi persaingan",
      "Mencari peluang di tempat lain",
      "Mobilitas sosial rendah",
    ],
    answer: "Apatis dalam kehidupan"
  },

  {
    id: "paket-4-7",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Adolf Hitler sebagai keturunan bangsa Arya merasa memiliki keunggulan dan mampu menguasai dunia sehingga berperilaku sewenang-wenang terhadap bangsa Yahudi. Kasus tersebut merupakan bentuk diskriminasi ....",
    options: [
      "Suku",
      "Agama",
      "Ras",
      "Ekonomi",
      "Sosial",
    ],
    answer: "Ras"
  },

  {
    id: "paket-4-8",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Penemuan baru yang secara matang ditemukan dalam waktu relatif singkat dan langsung dapat diaplikasikan terjadi pada kegiatan ....",
    options: [
      "Ritual agama",
      "Sosial politik",
      "Seni dan budaya",
      "Pemanfaatan teknologi",
      "Penyusunan peraturan negara",
    ],
    answer: "Pemanfaatan teknologi"
  },

  {
    id: "paket-4-9",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Sejak pemerintahan Presiden Abdurrahman Wahid, Imlek menjadi libur nasional dan kini warga non-Tionghoa pun ikut merayakan sebagai bentuk penghargaan. Integrasi seperti ini termasuk bentuk integrasi ....",
    options: [
      "Fungsional",
      "Budaya",
      "Koersi",
      "Geografis",
      "Normatif",
    ],
    answer: "Normatif"
  },

  {
    id: "paket-4-10",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Ketika Jakarta menghadapi ancaman bom di Sarinah, berita menyebar cepat di media sosial dan elektronik, lalu empati dari berbagai negara disampaikan kepada bangsa Indonesia. Fenomena ini menggambarkan dampak positif dari ....",
    options: [
      "Demokratisasi",
      "Modernisasi",
      "Globalisasi",
      "Westernisasi",
      "McDonaldisasi",
    ],
    answer: "Globalisasi"
  },

  {
    id: "paket-4-11",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Pemilu serentak dengan berbagai persiapan, pelaksanaan, serta penghitungan suara dari 5 kartu pencoblosan menyebabkan kelelahan dan jatuhnya ratusan korban jiwa. Hal ini menunjukkan terjadinya kekerasan ....",
    options: [
      "Kolektif",
      "Struktural",
      "Kultural",
      "Natural",
      "Individual",
    ],
    answer: "Struktural"
  },

  {
    id: "paket-4-12",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Masyarakat suku pedalaman memiliki hubungan antaranggota yang bersifat kekerabatan, ikatan batin yang kuat, keanggotaan tertutup, dan sulit menerima orang lain di luar kelompoknya. Masyarakat tersebut dikategorikan dalam tipe gemeinschaft, menurut ....",
    options: [
      "C. Horton Cooley",
      "Ferdinand Tonnies",
      "Sumner",
      "Max Weber",
      "Karl Marx",
    ],
    answer: "Ferdinand Tonnies"
  },

  {
    id: "paket-4-13",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Corak masyarakat fungsionalis ditandai oleh adanya ....",
    options: [
      "Kerja sama antarkelompok sosial",
      "Pertentangan antarkelompok sosial",
      "Simbolisasi kelompok sosial",
      "Pemaksaan norma oleh kelompok sosial tertentu",
      "Konsensus nilai oleh kelompok dominan",
    ],
    answer: "Kerja sama antarkelompok sosial"
  },

  {
    id: "paket-4-14",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: null,
    question: "Kerja sama dalam pemikiran Charles H. Cooley akan timbul apabila orang menyadari bahwa mereka ....",
    options: [
      "Mempunyai karakteristik yang sama",
      "Perlu mengadakan kontak sosial",
      "Mempunyai orientasi dan kepentingan yang sama",
      "Dapat berdiri sendiri dengan kelompok masing-masing",
      "Mampu menyelesaikan masalah mereka",
    ],
    answer: "Mempunyai orientasi dan kepentingan yang sama"
  },

  {
    id: "paket-4-15",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Tingkat pendidikan merupakan contoh dari suatu variabel.\nSEBAB\nVariabel adalah konsep yang memiliki dua atau lebih nilai.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat"
  },

  {
    id: "paket-4-16",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Sosialisasi dapat membentuk perilaku individu sebagai anggota masyarakat.\nSEBAB\nSosialisasi merupakan suatu proses belajar nilai dan norma yang berlaku dalam masyarakat.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat"
  },

  {
    id: "paket-4-17",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Munculnya seorang pimpinan dalam kerumunan memungkinkan terbentuknya suatu sistem pembagian kerja serta sistem pelapisan sosial.\nSEBAB\nTradisi dan kebudayaan yang spesifik merupakan produk dari suatu kerumunan.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan dan alasan keduanya salah"
  },

  {
    id: "paket-4-18",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Hasil pengamatan/observasi merupakan bentuk data kuantitatif.\nSEBAB\nData kuantitatif menyajikan data yang beragam, seperti foto dan narasi.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan dan alasan keduanya salah"
  },

  {
    id: "paket-4-19",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Manusia lanjut usia (manula) lebih senang berada di tengah keluarga daripada di panti wreda. Dalam hal ini keluarga menjalankan fungsi ....\n(1) membagi warisan\n(2) berbagi kasih sayang\n(3) menjalankan aktivitas ekonomi\n(4) perlindungan fisik",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (2) dan (4) benar"
  },

  {
    id: "paket-4-20",
    category: "Tryout Paket 4",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Contoh sanksi pelanggaran norma sosial dalam masyarakat adalah ....\n(1) cemoohan oleh masyarakat\n(2) hukuman denda\n(3) pengucilan oleh masyarakat\n(4) hukuman penjara",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Semua pernyataan benar"
  }
]

// ---------------------------------------------------------------------------
// Tryout Paket 5
// ---------------------------------------------------------------------------
const paket5 = [
  {
    id: "paket-5-1",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Masyarakat subsisten pedesaan memiliki kesederhanaan dan kesamaan dalam berpikir serta bertindak. Hal tersebut menunjukkan masyarakat terikat pada solidaritas ....",
    options: [
      "Organik",
      "Mekanik",
      "Primitif",
      "Modern",
      "Tradisional",
    ],
    answer: "Mekanik"
  },

  {
    id: "paket-5-2",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Sikap yang menyebabkan terjadinya kecintaan yang mendalam terhadap suatu kelompok sosial sehingga menimbulkan permusuhan atau kebencian pada kelompok sosial yang lain adalah ....",
    options: [
      "Primary dan secondary groups",
      "Wesenwille dan kurwille",
      "Private dan exclusive feeling",
      "Casual dan panic groups",
      "In group dan out group",
    ],
    answer: "In group dan out group"
  },

  {
    id: "paket-5-3",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Penyebab terjadinya perspektif konflik yang memandang kelas-kelas di masyarakat memiliki potensi konflik yang inheren adalah ....",
    options: [
      "Tiap-tiap kelas memiliki kepentingan yang sama",
      "Tiap-tiap kelas terbentuk karena memiliki alat/kekayaan produktif",
      "Tiap-tiap kelompok menginginkan masyarakat tanpa kelas",
      "Ada kelas yang menguasai alat produksi, ada pula yang tidak",
      "Kelompok proletar jumlahnya lebih sedikit daripada kelompok borjuis",
    ],
    answer: "Ada kelas yang menguasai alat produksi, ada pula yang tidak"
  },

  {
    id: "paket-5-4",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Penentuan sistem pelapisan sosial dalam masyarakat kasta didasarkan atas ....",
    options: [
      "Askripsi",
      "Kekayaan",
      "Achievement",
      "Pendidikan",
      "Status",
    ],
    answer: "Askripsi"
  },

  {
    id: "paket-5-5",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Menurut Charles Horton Cooley pembentukan diri seseorang terjadi melalui looking-glass self. Dalam proses tersebut penanda terbentuknya diri adalah ....",
    options: [
      "Peniruan peran yang dijalankan oleh orang tuanya atau orang yang paling sering berinteraksi dengannya (significant other)",
      "Kemampuan mengambil peran orang lain secara lebih luas",
      "Kesadaran akan peran yang ia jalankan dan peran yang dijalankan orang lain",
      "Kemampuan menjadi diri sendiri",
      "Kegagalan dalam menyesuaikan diri",
    ],
    answer: "Kemampuan menjadi diri sendiri"
  },

  {
    id: "paket-5-6",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Mobilitas sosial horizontal merupakan peralihan individu dari suatu kelompok sosial ke kelompok lain yang sederajat. Berikut ini adalah contoh mobilitas sosial horizontal, kecuali ....",
    options: [
      "Beralih kewarganegaraan",
      "Rotasi pekerjaan",
      "Berganti keyakinan",
      "Perpindahan tempat tinggal",
      "Promosi jabatan",
    ],
    answer: "Promosi jabatan"
  },

  {
    id: "paket-5-7",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Alasan perlunya expected roles (peran yang diharapkan) dalam proses sosial dilakukan dengan cermat dan sesuai dengan ketentuan yang ada adalah ....",
    options: [
      "Tertib sosial hanya berlangsung sesuai dengan norma yang ada",
      "Aktivitas yang ideal memerlukan kerja keras sekaligus dijalankan sesuai dengan norma yang berlaku",
      "Diperlukan adanya konsistensi dalam proses sosial",
      "Proses sosial yang tidak sesuai dengan ketentuan yang ada dapat menimbulkan dislokasi sosial",
      "Peran sosial hanya dilakukan selama yang bersangkutan diuntungkan",
    ],
    answer: "Aktivitas yang ideal memerlukan kerja keras sekaligus dijalankan sesuai dengan norma yang berlaku"
  },

  {
    id: "paket-5-8",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Sebagai salah satu bentuk proses sosial yang disosiatif, kompetisi atau persaingan adalah ....",
    options: [
      "Proses sosial yang memungkinkan terjadinya disintegrasi sosial",
      "Proses sosial untuk mempertahankan eksistensi individu/kelompok dan bertujuan untuk membinasakan lawannya",
      "Interaksi sosial yang mengandung perjuangan untuk mendapatkan sesuatu yang terbatas dan diinginkan oleh orang banyak",
      "Sikap mental yang tersembunyi terhadap orang lain atau unsur-unsur kebudayaan baru",
      "Aktivitas untuk merintangi/menghalangi pihak lain dalam mencapai tujuan",
    ],
    answer: "Interaksi sosial yang mengandung perjuangan untuk mendapatkan sesuatu yang terbatas dan diinginkan oleh orang banyak"
  },

  {
    id: "paket-5-9",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Berikut ini merupakan proses perubahan jangka panjang yang mendukung kelahiran Sosiologi, kecuali ....",
    options: [
      "Penggunaan rasio dan penelitian empiris",
      "Tumbuhnya kapitalisme",
      "Perubahan sosial dan politik",
      "Meningkatnya individualisme",
      "Lahirnya ilmu pengetahuan modern",
    ],
    answer: "Penggunaan rasio dan penelitian empiris"
  },

  {
    id: "paket-5-10",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: null,
    question: "Masyarakat terbentuk karena adanya kebutuhan dasar yang harus dipenuhi untuk keberlangsungan hidup manusia. Berikut ini adalah kebutuhan dasar tersebut, kecuali ....",
    options: [
      "Produksi",
      "Konsumsi",
      "Reproduksi",
      "Rekreasi",
      "Interaksi",
    ],
    answer: "Rekreasi"
  },

  {
    id: "paket-5-11",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Biasanya prinsip mekanisme modernisasi sebagai sebuah perubahan sosial sebagian disebabkan oleh penggunaan paradigma fungsionalisme.\nSEBAB\nPembangunan yang bersifat linier dari masyarakat tradisional menjadi modern menggunakan analogi pertumbuhan organisme tubuh.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan salah"
  },

  {
    id: "paket-5-12",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Terdapat anggapan umum di masyarakat bahwa perilaku menyimpang diartikan tindakan yang kontraproduktif terhadap norma-norma yang berlaku di masyarakat.\nSEBAB\nAturan-aturan yang ada dalam masyarakat cenderung dibuat oleh kelompok elit politik tidak berbasis kepentingan masyarakat.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan salah"
  },

  {
    id: "paket-5-13",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Pengumpulan data penelitian kuantitatif memerlukan editing dalam proses pengolahan data.\nSEBAB\nEditing data merupakan kegiatan yang merekap semua data responden, termasuk kelengkapan dan konsistensi jawaban.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat"
  },

  {
    id: "paket-5-14",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Setiap masyarakat memiliki norma-norma sosial yang dijunjung tinggi oleh masyarakat karena ....\n(1) memberikan petunjuk bagi tingkah laku seseorang yang hidup di dalam masyarakat\n(2) memberikan sanksi bagi anggota masyarakat yang melanggarnya\n(3) memaksa anggota masyarakat agar menaati norma-norma yang bersangkutan\n(4) memberikan pedoman dalam mengatasi masalah-masalah sosial bagi anggota masyarakat",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  },

  {
    id: "paket-5-15",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Perkelahian antarpelajar yang sering terjadi di perkotaan dan disertai dengan penjarahan, pelemparan, dan perusakan fasilitas umum merupakan perilaku menyimpang ....\n(1) non conformist\n(2) antisosial\n(3) radikal\n(4) kriminal",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Semua pernyataan benar"
  },

  {
    id: "paket-5-16",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Penggunaan ojek berbasis online diatur dalam norma formal ....\n(1) Peraturan Daerah\n(2) Undang-Undang\n(3) Keputusan Menteri\n(4) hukum adat",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  },

  {
    id: "paket-5-17",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Berikut ini merupakan fungsi yang tidak diharapkan dari lembaga pendidikan, yaitu ....\n(1) transmisi ilmu pengetahuan\n(2) mempersiapkan anggotanya mencari nafkah\n(3) melestarikan kebudayaan\n(4) mengajarkan berpikir kritis",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Hanya pernyataan (4) yang benar"
  },

  {
    id: "paket-5-18",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Saat ini orang bisa mengambil uang dan belanja dengan debit card atau credit card, tetapi di sisi lain muncul pembobolan di ATM. Kondisi ini merupakan dampak modernisasi yang berupa ....\n(1) perkembangan IPTEK\n(2) kesenjangan sosial dan ekonomi\n(3) meningkatnya kriminalitas\n(4) gaya hidup konsumtif",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Semua pernyataan benar"
  },

  {
    id: "paket-5-19",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Konflik sosial sering dipicu oleh sikap primordialisme, yakni sikap berpegang teguh pada hal-hal yang sejak semula melekat pada diri individu. Sikap-sikap yang melekat pada primordialisme adalah ....\n(1) suku bangsa\n(2) ras\n(3) agama\n(4) gender",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  },

  {
    id: "paket-5-20",
    category: "Tryout Paket 5",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Faktor-faktor yang mempermudah proses asimilasi dalam masyarakat majemuk di Indonesia adalah ....\n(1) penghargaan terhadap perbedaan\n(2) sifat masyarakat yang tertutup\n(3) kesamaan berbagai unsur budaya\n(4) kurangnya pengetahuan terhadap kebudayaan lain",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1) dan (3) benar"
  }
]

// ---------------------------------------------------------------------------
// Tryout Paket 6
// ---------------------------------------------------------------------------
const paket6 = [
  {
    id: "paket-6-1",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Tindakan sosial merupakan tindakan yang mempertimbangkan keberadaan orang lain, maka tindakan sosial bersifat ....",
    options: [
      "Objektif",
      "Subjektif",
      "Memaksa",
      "Mengikat",
      "Resiprokal",
    ],
    answer: "Subjektif"
  },

  {
    id: "paket-6-2",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Tahap di mana seorang individu mulai pandai meniru serta mampu mengenali significant other menurut George H. Mead dalam proses role taking diistilahkan dengan ....",
    options: [
      "Preparatory stage",
      "Play stage",
      "Game stage",
      "Generalized other",
      "Generalized stage",
    ],
    answer: "Play stage"
  },

  {
    id: "paket-6-3",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Sebutan status sosial untuk Barrack Obama yang menjadi presiden melalui pemilu, dan Pangeran William yang menjadi raja karena ia cucu Ratu Elizabeth II berturut-turut adalah ....",
    options: [
      "Ascribed status, achieved status",
      "Achieved status, assigned status",
      "Achieved status, ascribed status",
      "Assigned status, ascribed status",
      "Ascribed status, assigned status",
    ],
    answer: "Achieved status, ascribed status"
  },

  {
    id: "paket-6-4",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Masyarakat memberikan julukan negatif kepada seorang anak yang banyak tingkah sehingga anak tersebut menjadi nakal. Hal ini berkaitan dengan teori ....",
    options: [
      "Differential association",
      "Anomie",
      "Sosialisasi",
      "Labelling",
      "Imitasi",
    ],
    answer: "Labelling"
  },

  {
    id: "paket-6-5",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Perolehan kepercayaan masyarakat pada kasus mobil Kiat Esemka karena wali kota Solo memperkenalkan mobil tersebut dan menggunakannya sebagai mobil dinas dilakukan melalui ....",
    options: [
      "Promosi",
      "Pengalaman",
      "Otoritas",
      "Pribadi",
      "Media",
    ],
    answer: "Otoritas"
  },

  {
    id: "paket-6-6",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Dalam masyarakat terasing, masih ada tradisi hidup tanpa listrik dan tidak menggunakan kendaraan bermotor sebagai alat transportasi. Hal ini menunjukkan bahwa kebudayaan dalam masyarakat tersebut berperan sebagai ....",
    options: [
      "Penjaga kontrol sosial",
      "Pelestari ketidaksamaan sosial",
      "Pengatur stabilitas sosial",
      "Pengubah sistem sosial",
      "Penghambat perubahan sosial",
    ],
    answer: "Penghambat perubahan sosial"
  },

  {
    id: "paket-6-7",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Faktor pendorong untuk mempercepat perubahan sosial berkaitan dengan ciri manusia modern yang dikemukakan oleh Alex Inkeles adalah ....",
    options: [
      "Mengikuti ideologi dan paham Barat",
      "Menerima teknologi modern",
      "Menganggap kebudayaannya paling unggul",
      "Membatasi penggunaan telepon genggam",
      "Mengubah kebiasaan-kebiasaan konsumtif",
    ],
    answer: "Menerima teknologi modern"
  },

  {
    id: "paket-6-8",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Seorang buruh tani beralih menjadi pengusaha pupuk yang sukses dan saat ini menjadi seseorang yang dihargai di desanya. Contoh ini menunjukkan bahwa mobilitas sosial terkait erat dengan ....",
    options: [
      "Tatanan sosial",
      "Diferensiasi sosial",
      "Kelompok sosial",
      "Integrasi sosial",
      "Stratifikasi sosial",
    ],
    answer: "Stratifikasi sosial"
  },

  {
    id: "paket-6-9",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Teori Sosiologi yang mengalami perubahan dan penyempurnaan menunjukkan bahwa sebagai ilmu, Sosiologi bersifat ....",
    options: [
      "Statis",
      "Empiris",
      "Teoritis",
      "Non etis",
      "Kumulatif",
    ],
    answer: "Kumulatif"
  },

  {
    id: "paket-6-10",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: null,
    question: "Sosialisasi yang bertujuan agar anggota masyarakat memahami tertib sosial adalah ....",
    options: [
      "Penggunaan nalurinya untuk berinteraksi",
      "Penciptaan berbagai bentuk perilaku sosial",
      "Pembentukan perilaku sosialnya sendiri",
      "Pengendalian norma-norma sosial",
      "Perilaku sesuai dengan norma yang berlaku",
    ],
    answer: "Perilaku sesuai dengan norma yang berlaku"
  },

  {
    id: "paket-6-11",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Pada era globalisasi, media internet telah berhasil menembus ruang dan waktu sehingga suatu peristiwa di suatu negara secara cepat dapat diketahui oleh penduduk di bagian negara lain.\nSEBAB\nBerpikir kosmopolitan membuat seseorang tidak lagi terikat tradisi.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat"
  },

  {
    id: "paket-6-12",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Sosialisasi anak dalam keluarga inti dilakukan dengan melibatkan ayah, ibu, dan saudara kandung yang berperan sebagai agen.\nSEBAB\nSosialisasi primer adalah sosialisasi yang pertama diterima oleh individu untuk menjadi anggota masyarakat.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan salah"
  },

  {
    id: "paket-6-13",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Lembaga agama memperkuat perasaan dan ide kolektif yang menjadi pedoman untuk berperilaku baik bagi masyarakat.\nSEBAB\nSemua umat beragama berusaha menunjukkan identitas sosialnya dan memperlakukan kelompok lain yang tidak seagama sebagai lawan.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan salah"
  },

  {
    id: "paket-6-14",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Konflik dalam tataran tertentu dapat membantu mempererat ikatan kelompok yang terstruktur secara longgar.\nSEBAB\nBerakhirnya konflik justru dapat memperburuk ketegangan mendasar di dalam masyarakat.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan salah"
  },

  {
    id: "paket-6-15",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK B untuk menjawab soal berikut!",
      title: "PETUNJUK B",
      paragraphs: [
        "Soal terdiri atas tiga bagian, yaitu PERNYATAAN, kata SEBAB, dan ALASAN yang disusun secara berurutan.",
        "Pilihlah:",
        "A. Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
        "B. Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
        "C. Jika pernyataan benar dan alasan salah.",
        "D. Jika pernyataan salah dan alasan benar.",
        "E. Jika pernyataan dan alasan keduanya salah.",
      ],
      image: null,
      source: null
    },
    question: "Amin dipilih sebagai informan penelitian karena ia adalah satu-satunya orang yang mengerti permasalahan yang sedang diteliti.\nSEBAB\nPenentuan informan yang memahami permasalahan penelitian akan menghasilkan data yang menyeluruh dan mendalam dalam penelitian kualitatif.",
    options: [
      "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
      "Pernyataan benar, alasan salah",
      "Pernyataan salah, alasan benar",
      "Pernyataan dan alasan keduanya salah",
    ],
    answer: "Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat"
  },

  {
    id: "paket-6-16",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Lembaga sosial yang mengawasi dan mengatur tata kelakuan warga masyarakat adalah lembaga ....\n(1) perkawinan\n(2) ekonomi\n(3) pendidikan\n(4) hukum",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Hanya pernyataan (4) yang benar"
  },

  {
    id: "paket-6-17",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Faktor-faktor yang mendorong terbentuknya integrasi sosial adalah ....\n(1) adanya toleransi terhadap kelompok atau kebudayaan lain\n(2) adanya musuh bersama dari luar\n(3) terjadinya perkawinan campuran\n(4) terbentuknya organisasi politik oposisi",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  },

  {
    id: "paket-6-18",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Aktivitas pengelolaan kredit, tabungan, dan penjaminan usaha merupakan pengembangan atau bentuk dari lembaga ....\n(1) koperasi\n(2) industri perbankan\n(3) tengkulak\n(4) ekonomi",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Hanya pernyataan (4) yang benar"
  },

  {
    id: "paket-6-19",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Mobilitas sosial vertikal pada masyarakat modern ditentukan oleh faktor-faktor antara lain ....\n(1) status sosial\n(2) status ekonomi\n(3) pendidikan\n(4) transportasi",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  },

  {
    id: "paket-6-20",
    category: "Tryout Paket 6",
    type: "single",
    stimulus: {
      instruction: "Gunakan PETUNJUK C untuk menjawab soal berikut!",
      title: "PETUNJUK C",
      paragraphs: [
        "Soal terdiri atas empat pernyataan bernomor (1) sampai (4). Tentukan pernyataan mana yang benar, lalu pilihlah:",
        "A. Jika pernyataan (1), (2), dan (3) benar.",
        "B. Jika pernyataan (1) dan (3) benar.",
        "C. Jika pernyataan (2) dan (4) benar.",
        "D. Jika hanya pernyataan (4) yang benar.",
        "E. Jika semua pernyataan benar.",
      ],
      image: null,
      source: null
    },
    question: "Sebagai anggota masyarakat, setiap individu terikat di dalam norma-norma sosial yang berlaku agar tercipta keteraturan. Hal ini disebabkan norma sosial berisi ....\n(1) perintah\n(2) larangan\n(3) sanksi\n(4) status",
    options: [
      "Pernyataan (1), (2), dan (3) benar",
      "Pernyataan (1) dan (3) benar",
      "Pernyataan (2) dan (4) benar",
      "Hanya pernyataan (4) yang benar",
      "Semua pernyataan benar",
    ],
    answer: "Pernyataan (1), (2), dan (3) benar"
  }
]

export const questionPackages = {
  1: paket1,
  2: paket2,
  3: paket3,
  4: paket4,
  5: paket5,
  6: paket6
}

export default paket1