// =====================================================================
// SOAL EKONOMI - Naskah Soal Paket Prediksi & Tryout TKA InfiEdu
// Ditranskripsi dari PDF "3__EKONOMI-ED.pdf"
// Struktur mengikuti pola fulltest.js Matematika (id, category, type,
// stimulus opsional, question, options, answer).
// =====================================================================

// Opsi baku untuk soal tipe "pernyataan-SEBAB-alasan" (assertion-reason)
const opsiSebab = [
  'Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat',
  'Pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat',
  'Pernyataan benar, alasan salah',
  'Pernyataan salah, alasan benar',
  'Pernyataan dan alasan salah'
]

// Opsi baku untuk soal tipe pilihan ganda kompleks bernomor (1)(2)(3)(4)
const opsiNomor = [
  'Jika (1), (2), dan (3) benar',
  'Jika (1) dan (3) benar',
  'Jika (2) dan (4) benar',
  'Jika hanya (4) yang benar',
  'Jika semua pilihan (1), (2), (3), dan (4) benar'
]

// Helper untuk membentuk soal SEBAB-akibat
const sebabQuestion = (id, category, pernyataan, alasan, answer) => ({
  id,
  category,
  type: 'single',
  stimulus: {
    instruction: `<b>Pernyataan:</b> ${pernyataan}<br><b>SEBAB</b><br><b>Alasan:</b> ${alasan}`
  },
  question: 'Berdasarkan pernyataan dan alasan tersebut, pilihan yang tepat adalah...',
  options: opsiSebab,
  answer: opsiSebab[answer]
})

// Helper untuk membentuk soal bernomor (1)(2)(3)(4)
const nomorQuestion = (id, category, questionText, statementsHtml, answer) => ({
  id,
  category,
  type: 'single',
  stimulus: {
    instruction: statementsHtml
  },
  question: questionText,
  options: opsiNomor,
  answer: opsiNomor[answer]
})

// =====================================================================
// PREDIKSI PAKET 1
// =====================================================================
const prediksiPaket1 = [
  {
    id: 'prediksi1-1',
    category: 'Prediksi Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan di bawah ini!<br>(1) Menghasilkan barang dan jasa<br>(2) Menyediakan faktor produksi<br>(3) Membayar balas jasa<br>(4) Membayar pajak<br>(5) Memberi pelayanan kepada masyarakat'
    },
    question: 'Yang termasuk peran dari rumah tangga produsen adalah...',
    options: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(1), (3), dan (4)', '(2), (4), dan (5)', '(3), (4), dan (5)'],
    answer: '(1), (3), dan (4)'
  },
  {
    id: 'prediksi1-2',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Pasir memiliki nilai guna lebih tinggi jika sudah diangkut dari sungai ke daratan seperti membangun rumah dan gedung mewah maka pasir memiliki …',
    options: ['Nilai guna bentuk', 'Nilai guna tempat', 'Nilai guna waktu', 'Nilai guna dasar', 'Nilai guna kepemilikan'],
    answer: 'Nilai guna tempat'
  },
  {
    id: 'prediksi1-3',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika harga pertamax meningkat maka...',
    options: ['Harga pertalite turun', 'Permintaan pertamax meningkat', 'Permintaan pertalite menurun', 'Permintaan sepeda meningkat', 'Permintaan angkutan umum menurun'],
    answer: 'Permintaan angkutan umum menurun'
  },
  {
    id: 'prediksi1-4',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika diketahui fungsi permintaan Pd = 20 – 3Q dan fungsi penawaran Ps = –10 + 2Q. Jika pemerintah menetapkan pajak sebesar Rp5,- per unit. Jumlah pajak yang diterima pemerintah adalah …',
    options: ['Rp18,-', 'Rp25,-', 'Rp28,-', 'Rp30,-', 'Rp35,-'],
    answer: 'Rp25,-'
  },
  {
    id: 'prediksi1-5',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Pak Aris adalah satu satunya penjual minyak di desanya, untuk meningkatkan penjualannya Pak Aris akan …',
    options: ['Menaikkan harga karena inelastis', 'Menurunkan harga karena inelastis', 'Menaikkan harga karena elastis', 'Menurunkan harga karena elastis', 'Harga tetap karena kebutuhan pokok'],
    answer: 'Menaikkan harga karena inelastis'
  },
  {
    id: 'prediksi1-6',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Yang bukan merupakan ciri pasar persaingan sempurna adalah...',
    options: ['Banyak penjual dengan barang homogen', 'Tidak ada hambatan memasuki pasar', 'Memiliki nilai P sama dengan MR-nya', 'Kurva perusahaan berbentuk horizontal', 'Dalam jangka panjang memperoleh laba supernormal'],
    answer: 'Dalam jangka panjang memperoleh laba supernormal'
  },
  {
    id: 'prediksi1-7',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika biaya tetap untuk memproduksi baju adalah 100, besarnya biaya variabel per unitnya adalah 50 dan jumlah baju yang dihasilkan adalah 10, maka besarnya biaya rata-rata produksi baju tersebut adalah …',
    options: ['10', '15', '50', '60', '150'],
    answer: '60'
  },
  {
    id: 'prediksi1-8',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Perusahaan akan memperoleh laba maksimal jika memproduksi Q pada saat …',
    options: ['TR > TC', 'P = AC', 'MR – MC = 0', 'TR – TC = 0', 'P > AC'],
    answer: 'MR – MC = 0'
  },
  {
    id: 'prediksi1-9',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Kurva yang menggambarkan konsumsi dua barang yang menghasilkan kepuasan sama disebut …',
    options: ['Isoquant', 'Isocost', 'Budget line', 'Indifferent', 'Lorenz'],
    answer: 'Indifferent'
  },
  {
    id: 'prediksi1-10',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika masing – masing input ditambah sebesar satu kali menyebabkan jumlah output bertambah lebih dari satu kali, dalam skala ekonomi kondisi ini disebut …',
    options: ['Increasing return to scale', 'Constant return to scale', 'Decreasing return to scale', 'Diminishing return to scale', 'Marginal return to scale'],
    answer: 'Increasing return to scale'
  },
  {
    id: 'prediksi1-11',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika Bank Indonesia melakukan pembelian SBI senilai Rp8 miliar, dan cash ratio yang berlaku adalah 5%, maka jumlah uang beredar akan bertambah sebesar …',
    options: ['Rp5 miliar', 'Rp8 miliar', 'Rp100 miliar', 'Rp106 miliar', 'Rp160 miliar'],
    answer: 'Rp160 miliar'
  },
  {
    id: 'prediksi1-12',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Kebijakan fiskal yang dapat diambil dalam kondisi perekonomian yang sedang lesu adalah...',
    options: ['Menurunkan suku bunga', 'Meningkatkan cadangan kas', 'Meningkatkan pajak', 'Meningkatkan pengeluaran', 'Mempermudah syarat kredit'],
    answer: 'Meningkatkan pengeluaran'
  },
  {
    id: 'prediksi1-13',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Di bawah ini yang tidak masuk dalam perhitungan produk nasional bruto adalah …',
    options: ['Penghasilan pengrajin batik di Solo', 'Penghasilan TKW yang bekerja di Taiwan', 'Penerimaan devisa dari investasi penduduk di luar negeri', 'Keuntungan Citybank yang ada di Indonesia', 'Pendapatan eksportir tas rajut ke Jepang'],
    answer: 'Keuntungan Citybank yang ada di Indonesia'
  },
  {
    id: 'prediksi1-14',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Jika diketahui besarnya MPC = 0,8 maka besarnya multiplier pendapatan adalah …',
    options: ['0,2', '0,8', '2', '4', '5'],
    answer: '5'
  },
  {
    id: 'prediksi1-15',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Kebijakan pemerintah untuk membatasi jumlah ekspor udang ke Jepang disebut . . .',
    options: ['Tarif', 'Kuota', 'Embargo', 'Diskriminasi harga', 'Dumping'],
    answer: 'Kuota'
  },
  {
    id: 'prediksi1-16',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Di bawah yang termasuk pajak pemerintah pusat adalah …',
    options: ['Pajak bumi dan bangunan', 'Pajak kendaraan bermotor', 'Bea balik nama', 'Pajak penghasilan', 'Pajak resto'],
    answer: 'Pajak penghasilan'
  },
  {
    id: 'prediksi1-17',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Berikut ini ciri pertumbuhan ekonomi yang benar adalah …',
    options: ['Menghitung kenaikan output', 'Menghitung populasi dan pemerataan', 'Disertai dengan kemajuan IPTEK', 'Ada perubahan struktur ekonomi', 'Terjadi dibidang ekonomi, sosial, dan budaya'],
    answer: 'Menghitung kenaikan output'
  },
  {
    id: 'prediksi1-18',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Koperasi yang beranggotakan minimal lima koperasi yang berada dalam satu kabupaten yang sama disebut …',
    options: ['Koperasi primer', 'Koperasi sekunder', 'Pusat koperasi', 'Gabungan koperasi', 'Induk koperasi'],
    answer: 'Pusat koperasi'
  },
  {
    id: 'prediksi1-19',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Diketahui data aset Salon Syantiek per 1 Januari sebesar Rp30.000 dan besarnya utang Rp10.000. Sedangkan besarnya modal per 31 Januari diketahui sebesar Rp45.000 dan besarnya utang Rp15.000. Maka besarnya tambahan modal selama bulan Januari sebesar …',
    options: ['Rp15.000', 'Rp20.000', 'Rp25.000', 'Rp30.000', 'Rp40.000'],
    answer: 'Rp25.000'
  },
  {
    id: 'prediksi1-20',
    category: 'Prediksi Paket 1',
    type: 'single',
    question: 'Salon Syantiek telah menyelesaikan pekerjaan hair style dari konsumen dan menerima pembayaran senilai Rp250.000,00. Penulisan transaksi tersebut ke dalam jurnal umum Salon Syantiek yang benar adalah …',
    options: ['Kas (Dr) dan Modal (Cr)', 'Kas (Dr) dan Pendapatan jasa (Cr)', 'Modal (Dr) dan Kas (Cr)', 'Pendapatan jasa (Dr) dan Kas (Cr)', 'Modal (Dr) dan Pendapatan jasa (Cr)'],
    answer: 'Kas (Dr) dan Pendapatan jasa (Cr)'
  }
]

// =====================================================================
// PREDIKSI PAKET 2
// =====================================================================
const prediksiPaket2 = [
  {
    id: 'prediksi2-1',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Di bawah ini yang termasuk dalam pembahasan ekonomi mikro adalah...',
    options: ['Inflasi dan kebijakannya', 'Pertumbuhan ekonomi', 'Pengangguran', 'Elastisitas pendapatan', 'Neraca pembayaran'],
    answer: 'Elastisitas pendapatan'
  },
  {
    id: 'prediksi2-2',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Pandemi mengharuskan setiap orang untuk memakai masker. Ibu Ani adalah seorang produsen masker kain, tetapi beberapa bulan belakangan omzet maskernya menurun tajam. Hal ini karena masyarakat lebih suka menggunakan masker sekali pakai model KF94 atau KF95, karena selain melindungi dari virus masker tersebut dapat membuat penampilan terlihat lebih fashionable.'
    },
    question: 'Sehingga permintaan masker kain dipengaruhi oleh faktor…',
    options: ['Pendapatan masyarakat', 'Perubahan selera', 'Jumlah pengguna masker', 'Perubahan harga barang pengganti', 'Bertambahnya jumlah penjual'],
    answer: 'Perubahan selera'
  },
  {
    id: 'prediksi2-3',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Kenaikan Upah Minimum Regional (UMR) akan mengakibatkan …',
    options: ['Kurva permintaan akan bergeser ke kanan', 'Kurva permintaan akan bergeser ke kiri', 'Kurva penawaran bergeser ke kanan', 'Kurva penawaran bergeser ke kiri', 'Kurva permintaan bergeser ke kanan dan penawaran ke kiri'],
    answer: 'Kurva penawaran bergeser ke kiri'
  },
  {
    id: 'prediksi2-4',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Di bawah ini yang benar berkaitan dengan pendekatan kardinal adalah …',
    options: [
      'Membahas konsumsi dua barang',
      'Kepuasan tidak dapat dihitung tetapi dapat dibandingkan',
      'Analisisnya menggunakan kurva indiferen dan kepuasan total',
      'Kepuasan maksimal tercapai saat kepuasan marginal nol',
      'Kepuasan maksimal saat indiferen bersinggungan dengan budget line'
    ],
    answer: 'Kepuasan maksimal tercapai saat kepuasan marginal nol'
  },
  {
    id: 'prediksi2-5',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika sebuah barang memiliki elastisitas pendapatan Ey = –0,2 maka barang tersebut bersifat …',
    options: ['Elastis', 'Inelastis', 'Inferior', 'Uniter', 'Kebutuhan pokok'],
    answer: 'Inferior'
  },
  {
    id: 'prediksi2-6',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Kurva perusahaan dalam pasar oligopoli berbentuk …',
    options: ['Kurva horizontal', 'Kurva vertikal', 'Sangat elastis', 'Inelastis', 'Kurva patah'],
    answer: 'Kurva patah'
  },
  {
    id: 'prediksi2-7',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika diketahui fungsi biaya sebuah perusahaan TC = 150 – 5Q + Q². Jika diketahui jumlah produksinya adalah 10 maka besarnya biaya marginalnya adalah …',
    options: ['15', '20', '50', '150', '200'],
    answer: '15'
  },
  {
    id: 'prediksi2-8',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika perusahaan menjual barang pada saat harga berada di antara biaya rata-rata dan biaya variabel rata-ratanya maka perusahaan akan …',
    options: ['Melanjutkan usahanya karena laba', 'Melanjutkan usahanya karena rugi minimal', 'Menutup usahanya karena rugi', 'Berada pada kondisi laba maksimal', 'Berada pada kondisi break even point'],
    answer: 'Melanjutkan usahanya karena rugi minimal'
  },
  {
    id: 'prediksi2-9',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan kurva penawaran-permintaan berikut: kurva penawaran bergeser dari S0 ke S1 (ke arah kiri), sehingga harga keseimbangan naik dari P menjadi P1, sementara jumlah keseimbangan berkurang.'
    },
    question: 'Inflasi yang digambarkan oleh kurva di atas disebut dengan …',
    options: ['Cost push inflation', 'Demand pull inflation', 'Bottle neck inflation', 'Spirall inflation', 'Hyperinflation'],
    answer: 'Cost push inflation'
  },
  {
    id: 'prediksi2-10',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Kebijakan moneter kontraktif yang diambil pemerintah melalui Bank Sentral akan menyebabkan ....',
    options: ['Jumlah uang beredar bertambah', 'Inflasi meningkat', 'Jumlah produksi naik', 'Suku bunga meningkat', 'Investasi meningkat'],
    answer: 'Suku bunga meningkat'
  },
  {
    id: 'prediksi2-11',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika S = –150 + 0,4Y dan diketahui besarnya konsumsi adalah Rp750 maka besarnya tingkat pendapatan adalah …',
    options: ['Rp150', 'Rp250', 'Rp600', 'Rp1.000', 'Rp2.250'],
    answer: 'Rp1.000'
  },
  {
    id: 'prediksi2-12',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Pandemi membatasi gerak setiap orang. Hal ini membawa dampak menurunnya aktivitas perekonomian dan banyak perusahaan yang terpaksa tutup dan mengurangi karyawan sehingga menambah tingkat pengangguran. Pengangguran ini disebut sebagai …',
    options: ['Pengangguran friksional', 'Pengangguran musiman', 'Pengangguran teknologi', 'Pengangguran struktural', 'Pengangguran konjungtural'],
    answer: 'Pengangguran konjungtural'
  },
  {
    id: 'prediksi2-13',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Manfaat pasar modal bagi emiten adalah …',
    options: ['Sebagai sumber dana selain bank', 'Sebagai sarana memilih investasi', 'Sebagai sarana memperluas lapangan kerja', 'Sebagai pedoman perhitungan pajak', 'Sebagai sarana untuk mencari keuntungan'],
    answer: 'Sebagai sumber dana selain bank'
  },
  {
    id: 'prediksi2-14',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Tarif pajak yang besarnya ditetapkan dalam persentase yang sama berapa pun nilai objeknya disebut …',
    options: ['Tarif tetap', 'Tarif proporsional', 'Tarif progresif', 'Tarif degresif', 'Tarif personal'],
    answer: 'Tarif proporsional'
  },
  {
    id: 'prediksi2-15',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jika diketahui jumlah uang beredar Rp10 miliar. Tingkat kecepatan peredaran uang 5 kali. Jika banyaknya jumlah barang yang diperdagangkan adalah 4 juta, besarnya tingkat harga yang berlaku adalah ....',
    options: ['Rp2.500,00', 'Rp5.000,00', 'Rp10.000,00', 'Rp12.500,00', 'Rp15.000,00'],
    answer: 'Rp12.500,00'
  },
  {
    id: 'prediksi2-16',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: `
<table class="data-table">
  <thead><tr><th>Negara</th><th>Beras</th><th>Radio</th><th>NTDN</th></tr></thead>
  <tbody>
    <tr><td>Kamboja</td><td>10</td><td>5</td><td>1 beras = 0,5 radio</td></tr>
    <tr><td>Melati</td><td>5</td><td>4</td><td>1 beras = 0,8 radio</td></tr>
  </tbody>
</table>`.trim()
    },
    question: 'Kesimpulan yang tepat dalam melakukan perdagangan adalah ....',
    options: [
      'Negara Kamboja mengekspor beras',
      'Negara Melati mengekspor beras',
      'Negara Kamboja mengekspor radio',
      'Negara Melati mengekpor beras dan radio',
      'Negara Kamboja mengekspor beras dan radio'
    ],
    answer: 'Negara Kamboja mengekspor beras'
  },
  {
    id: 'prediksi2-17',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Di bawah ini yang bukan termasuk unsur manajemen …',
    options: ['Money', 'Material', 'Method', 'Manage', 'Market'],
    answer: 'Manage'
  },
  {
    id: 'prediksi2-18',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Badan usaha yang didirikan oleh dua pihak, di mana satu pihak berperan sebagai penyetor modal dan pihak lainnya bertindak sebagai penyetor modal sekaligus menjalankan perusahaan …',
    options: ['Perseorangan', 'Firma', 'Persekutuan komanditer', 'Perseroan terbatas', 'Persero'],
    answer: 'Persekutuan komanditer'
  },
  {
    id: 'prediksi2-19',
    category: 'Prediksi Paket 2',
    type: 'single',
    question: 'Jurnal khusus yang digunakan untuk mencatat transaksi pembelian yang dilakukan secara kredit adalah …',
    options: ['Jurnal penerimaan kas', 'Jurnal pengeluaran kas', 'Jurnal pembelian', 'Jurnal penjualan', 'Jurnal umum'],
    answer: 'Jurnal pembelian'
  },
  {
    id: 'prediksi2-20',
    category: 'Prediksi Paket 2',
    type: 'single',
    stimulus: {
      instruction: 'Persediaan awal Rp7.500.000,-<br>Pembelian Rp60.000.000,-<br>Biaya angkut pembelian Rp750.000,-<br>Retur pembelian Rp1.000.000,-<br>Potongan pembelian Rp500.000,-'
    },
    question: 'Berdasarkan data tersebut, besarnya barang yang tersedia untuk dijual jika besarnya persediaan barang akhir Rp8.500.000,- adalah ....',
    options: ['Rp68.250.000,-', 'Rp66.750.000,-', 'Rp66.000.000,-', 'Rp74.500.000,-', 'Rp75.250.000,-'],
    answer: 'Rp66.750.000,-'
  }
]

// =====================================================================
// PREDIKSI PAKET 3
// =====================================================================
const prediksiPaket3 = [
  {
    id: 'prediksi3-1',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Anggaran Pendapatan dan Belanja Negara yang sudah disetujui oleh DPR dapat menjadi pedoman bagi pemerintah untuk membiayai pelaksanaan berbagai program dan kegiatan pembangunan. Hal ini merupakan fungsi APBN untuk ....',
    options: ['Otorisasi', 'Perencanaan', 'Pengalokasian', 'Pendistribusian', 'Stabilisasi'],
    answer: 'Otorisasi'
  },
  {
    id: 'prediksi3-2',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Peran yang dimainkan oleh para pelaku ekonomi antara lain sebagai pengguna faktor produksi, pemilik faktor produksi, penghasil barang dan jasa, pengguna barang dan jasa, pembayaran faktor produksi dan penyedia faktor produksi. Peran yang dapat dimainkan oleh rumah tangga produsen adalah .…',
    options: [
      'Pengguna faktor produksi, pemilik faktor produksi, dan penghasil barang dan jasa',
      'Pengguna faktor produksi, penghasil barang dan jasa, dan melakukan pembayaran faktor produksi',
      'Pemilik faktor produksi, penghasil barang dan jasa, serta pengguna barang dan jasa',
      'Pemilik faktor produksi, pengguna barang dan jasa, serta penyedia faktor produksi',
      'Penghasil barang dan jasa, pengguna barang dan jasa, serta penyedia faktor produksi'
    ],
    answer: 'Pengguna faktor produksi, penghasil barang dan jasa, dan melakukan pembayaran faktor produksi'
  },
  {
    id: 'prediksi3-3',
    category: 'Prediksi Paket 3',
    type: 'single',
    stimulus: {
      instruction: `
<table class="data-table">
  <thead><tr><th>A</th><th>B</th><th>C</th></tr></thead>
  <tbody>
    <tr><td>1. terdapat beberapa produsen</td><td>1. penjual bebas keluar masuk</td><td>1. produk homogen</td></tr>
    <tr><td>2. terdapat banyak penjual dan pembeli</td><td>2. penjual sulit masuk ke pasar</td><td>2. produk terstandarisasi</td></tr>
    <tr><td>3. terdapat banyak penjual, sedikit pembeli</td><td>3. terdapat rintangan untuk masuk ke dalam pasar</td><td>3. produk terdiferensiasi</td></tr>
  </tbody>
</table>`.trim()
    },
    question: 'Berdasarkan tabel di atas, yang merupakan ciri-ciri pasar oligopoli adalah ….',
    options: ['A2, B1, C2', 'A3, B3, C1', 'A2, B1, C3', 'A1, B2, C3', 'A1, B1, C3'],
    answer: 'A1, B1, C3'
  },
  {
    id: 'prediksi3-4',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Pemerintah meningkatkan belanja infrastruktur untuk membangun berbagai sarana transportasi, baik darat, laut maupun udara di Indonesia. Kebijakan seperti ini berada dalam kondisi ekonomi ....',
    options: ['Fiskal ekspansif', 'Fiskal kontraktif', 'Moneter kontraktif', 'Moneter ekspansif', 'Pasar terbuka'],
    answer: 'Fiskal ekspansif'
  },
  {
    id: 'prediksi3-5',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Dalam elastisitas silang, dua barang yang menghasilkan koefisien-koefisien positif berarti merupakan barang ….',
    options: ['Inferior', 'Substitusi', 'Superior', 'Komplementer', 'Normal'],
    answer: 'Komplementer'
  },
  {
    id: 'prediksi3-6',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Jika permintaan suatu barang bersifat elastis maka untuk meningkatkan penerimaan perusahaan (total revenue) pengusaha tersebut harus ....',
    options: ['Menurunkan harga', 'Menaikkan harga', 'Meningkatkan pelayanan', 'Menurunkan biaya produksi', 'Meningkatkan teknologi produksi'],
    answer: 'Menurunkan harga'
  },
  {
    id: 'prediksi3-7',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Biaya total (Total Cost) adalah ....',
    options: [
      'Hasil kali biaya rata-rata (AC) dengan jumlah output (Q)',
      'Hasil bagi biaya rata-rata (AC) dengan jumlah output (Q)',
      'Penjumlahan biaya tetap rata-rata (AFC) dan biaya variabel rata–rata (AVC)',
      'Hasil kali biaya marginal (MC) dengan jumlah output (Q)',
      'Hasil kali biaya variabel rata–rata (AVC) dengan jumlah output (Q)'
    ],
    answer: 'Hasil kali biaya rata-rata (AC) dengan jumlah output (Q)'
  },
  {
    id: 'prediksi3-8',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Apabila nilai Produk Domestik Bruto (PDB) nominal suatu negara lebih besar dari nilai PDB riil, maka hal ini menunjukkan adanya ....',
    options: ['Ekspor lebih besar daripada impor', 'Impor lebih besar daripada ekspor', 'Inflasi', 'Kenaikan tingkat bunga', 'Kenaikan jumlah uang beredar'],
    answer: 'Inflasi'
  },
  {
    id: 'prediksi3-9',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Dalam perekonomian tertutup, diketahui fungsi konsumsi C = 10 + 0,8Y. Jika ada peningkatan investasi otonom sebesar Rp50 juta, pendapatan masyarakat akan meningkat sebesar ....',
    options: ['Rp50 juta', 'Rp200 juta', 'Rp250 juta', 'Rp300 juta', 'Rp400 juta'],
    answer: 'Rp250 juta'
  },
  {
    id: 'prediksi3-10',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Sifat permintaan harga barang-barang pokok (seperti beras dan minyak goreng) yang sekarang ini cenderung naik adalah ....',
    options: ['Elastis', 'Inelastis', 'Elastis sempurna', 'Unitary elasticity', 'Inelastis sempurna'],
    answer: 'Inelastis'
  },
  {
    id: 'prediksi3-11',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Pernyataan berikut yang salah mengenai kurva isoquant adalah ....',
    options: [
      'Isoquant cembung ke arah titik origin',
      'Isoquant merupakan kurva yang menunjukkan penggunaan faktor produksi yang sama',
      'Isoquant tidak saling berpotongan',
      'Sumbu vertikal dan horizontal masing-masing menunjukkan penggunaan faktor produksi',
      'Pada isoquant, titik yang berada di kurva sebelah kanan atas menunjukkan tingkat output yang lebih tinggi dibandingkan yang di kiri bawah'
    ],
    answer: 'Pada isoquant, titik yang berada di kurva sebelah kanan atas menunjukkan tingkat output yang lebih tinggi dibandingkan yang di kiri bawah'
  },
  {
    id: 'prediksi3-12',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Yang dimaksud dengan keseimbangan konsumen adalah jika ....',
    options: [
      'Kurva penawaran berpotongan dengan kurva permintaan',
      'Terbentuk harga keseimbangan di pasar',
      'Kurva indiferensi berpotongan dengan budget line',
      'Kurva indiferensi bersinggungan dengan budget line',
      'Kurva indiferensi sama dengan budget line'
    ],
    answer: 'Kurva indiferensi bersinggungan dengan budget line'
  },
  {
    id: 'prediksi3-13',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Pembayaran deviden kepada pemegang saham akan ....',
    options: [
      'Meningkatkan aset dan menurunkan kewajiban',
      'Meningkatkan aset dan meningkatkan kewajiban',
      'Tidak berpengaruh pada ekuitas atau pendapatan',
      'Menurunkan aset dan ekuitas/modal',
      'Mengurangi pendapatan'
    ],
    answer: 'Menurunkan aset dan ekuitas/modal'
  },
  {
    id: 'prediksi3-14',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Kemampuan manajemen koperasi dalam menghasilkan sisa hasil usaha pada tiap akhir tahun tercermin pada ....',
    options: ['Likuiditas', 'Rentabilitas', 'Solvabilitas', 'Rasio modal', 'Rasio utang'],
    answer: 'Rentabilitas'
  },
  {
    id: 'prediksi3-15',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Pengangguran yang disebabkan kesenjangan antara pencari kerja dengan lowongan kerja seperti waktu, informasi ataupun kondisi geografis disebut pengangguran ….',
    options: ['struktural', 'siklis', 'musiman', 'terbuka', 'friksional'],
    answer: 'friksional'
  },
  {
    id: 'prediksi3-16',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Manajer lini pertama dalam perusahaan mempunyai tugas .… ',
    options: [
      'Membuat rencana membangun pabrik baru',
      'Bernegosiasi dengan pihak luar',
      'Mengevaluasi hasil kerja karyawan dibawahnya setiap hari atau bahkan setiap jam',
      'Menentukan jumlah salesman untuk suatu daerah pemasaran',
      'Menentukan peralatan untuk pabrik baru perusahaan'
    ],
    answer: 'Mengevaluasi hasil kerja karyawan dibawahnya setiap hari atau bahkan setiap jam'
  },
  {
    id: 'prediksi3-17',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Penetapan harga barang floor price untuk suatu komoditas dilakukan pemerintah apabila ....',
    options: ['permintaan lebih besar daripada penawaran', 'terdapat surplus produksi', 'nilai tukar tidak stabil', 'harga ekuilibrium dianggap terlalu tinggi', 'pendapatan masyarakat meningkat'],
    answer: 'terdapat surplus produksi'
  },
  {
    id: 'prediksi3-18',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Diketahui fungsi permintaan Q = P² – 5P + 100. Apabila harga barang diminta P = 5 maka besar elastisitas permintaan adalah ....',
    options: ['0,5', '0,33', '1,00', '0,25', '2,00'],
    answer: '0,25'
  },
  {
    id: 'prediksi3-19',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Pada tanggal 31 Desember 2017, diketahui usaha kursus akuntansi milik Nona Nirma memperoleh laba sebesar Rp10.000.000,00. Ayat jurnal yang diperlukan untuk menutup akun tersebut adalah ....',
    options: [
      'Laba Rp10.000.000,00 / Ikhtisar L/R Rp10.000.000,00',
      'Ikhtisar L/R Rp10.000.000,00 / Laba Rp10.000.000,00',
      'Ikhtisar L/R Rp10.000.000,00 / Modal Rp10.000.000,00',
      'Modal Rp10.000.000,00 / Ikhtisar L/R Rp10.000.000,00',
      'Pendapatan Rp10.000.000,00 / Ikhtisar L/R Rp10.000.000,00'
    ],
    answer: 'Ikhtisar L/R Rp10.000.000,00 / Modal Rp10.000.000,00'
  },
  {
    id: 'prediksi3-20',
    category: 'Prediksi Paket 3',
    type: 'single',
    question: 'Dari hasil perhitungan stock opname persediaan di gudang diperoleh nilai persediaan sebesar Rp25.000.000,00 dan dari nilai tersebut ternyata ada barang konsinyasi senilai Rp2.000.000,00. Kemudian, terdapat pembelian persediaan dengan FOB shipping point yang belum tiba di gudang perusahaan sebesar Rp1.500.000,00 dan penjualan dengan FOB destination point yang belum sampai di gudang pembeli sebesar Rp2.000.000,00. Berdasarkan data tersebut, nilai persediaan yang harus dilaporkan pada laporan posisi keuangan (neraca) adalah ....',
    options: ['Rp30.500.000,00', 'Rp28.500.000,00', 'Rp27.000.000,00', 'Rp26.500.000,00', 'Rp25.000.000,00'],
    answer: 'Rp26.500.000,00'
  }
]

// =====================================================================
// PREDIKSI PAKET 4
// =====================================================================
const prediksiPaket4 = [
  {
    id: 'prediksi4-1',
    category: 'Prediksi Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Data pendapatan negara Astina (dalam miliar rupiah):<br>PDB: 3.000<br>Pendapatan neto terhadap luar negeri: 200<br>Penyusutan barang modal: 60<br>Pajak tak langsung: 40<br>Pajak Perseroan: 35<br>Laba ditahan: 50<br>Iuran asuransi: 2<br>Transfer payment: 20<br>Pajak langsung: 15'
    },
    question: 'Berapakah disposable income warga negara Astina?',
    options: ['Rp2.608 miliar', 'Rp2.613 miliar', 'Rp2.615 miliar', 'Rp2.718 miliar', 'Rp2.618 miliar'],
    answer: 'Rp2.618 miliar'
  },
  {
    id: 'prediksi4-2',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Production Possibility Curve (PPC) adalah kurva yang menunjukkan ....',
    options: [
      'Tingkat output maksimum yang dapat dihasilkan dari penggunaan jumlah tenaga kerja tertentu',
      'Tambahan output yang dihasilkan karena menambah tenaga kerja sebanyak satu orang',
      'Korelasi antara berbagai tingkat output dengan jumlah tenaga kerja yang digunakan',
      'Berbagai kombinasi penggunaan dua macam faktor produksi (tenaga kerja dan modal) yang menghasilkan tingkat output yang sama',
      'Berbagai kombinasi output dua macam barang yang maksimum dapat dihasilkan pada saat sumber daya ekonomi dan teknologi digunakan sepenuhnya'
    ],
    answer: 'Berbagai kombinasi output dua macam barang yang maksimum dapat dihasilkan pada saat sumber daya ekonomi dan teknologi digunakan sepenuhnya'
  },
  {
    id: 'prediksi4-3',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Berikut ini perilaku yang bisa mendapatkan premi konsumen adalah . . .',
    options: [
      'Agung sangat berharap membeli kamus Bahasa Inggris Lengkap. Dengan uang sebesar Rp125.000,00 yang dimiliki ia mencoba ke toko buku, ternyata harga kamus tersebut Rp150.000,00.',
      'Pak Handoko memproduksi bata merah dengan mengeluarkan biaya produksi sebesar Rp280,00 per unit. Ternyata harga bata merah pada musim hujan hanya Rp250,00 per unit karena jarang orang membangun.',
      'Antono punya uang Rp60.000,00, ia ingin membeli sepatu sekolah. Ternyata harga sepatu sekolah yang termurah dengan harga Rp60.000,00.',
      'Bu Solekhah dapat membuat kue tart dengan biaya sangat rendah, tetapi ia dapat menjual kue tart dengan harga yang tinggi karena rasanya sangat lezat.',
      'Pak Dodi mau ganti mobil merek BMW keluaran terbaru, meskipun harganya Rp400.000.000,00 tidak masalah karena ia mempunyai uang untuk membeli mobil tersebut sebesar Rp450.000.000,00.'
    ],
    answer: 'Pak Dodi mau ganti mobil merek BMW keluaran terbaru, meskipun harganya Rp400.000.000,00 tidak masalah karena ia mempunyai uang untuk membeli mobil tersebut sebesar Rp450.000.000,00.'
  },
  {
    id: 'prediksi4-4',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Fungsi permintaan perusahaan monopoli adalah P = 100 − 0,5Q sehingga penerimaan marginalnya adalah ....',
    options: ['−0,5', '100 − 0,5Q²', '100 − Q', '200 − 2Q', '−5Q'],
    answer: '100 − Q'
  },
  {
    id: 'prediksi4-5',
    category: 'Prediksi Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Data buku besar Perusahaan Bola Boli (dalam ribuan rupiah, seluruhnya saldo normal): Utang dagang Rp600, Pendapatan jasa Rp1.900, Piutang dagang Rp900, Ekuitas pemilik Rp1.700, Pendapatan sewa Rp1.100, Peralatan Rp1.900, Kas Rp1.600, Beban gaji Rp500, Prive Rp200, Beban asuransi Rp2.000.'
    },
    question: 'Berapakah total debit pada neraca saldo perusahaan tersebut?',
    options: ['Rp11.700.000,00', 'Rp7.100.000,00', 'Rp7.200.000,00', 'Rp5.500.000,00', 'Rp5.300.000,00'],
    answer: 'Rp7.100.000,00'
  },
  {
    id: 'prediksi4-6',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Untuk mengendalikan inflasi, pemerintah dapat melakukan kebijakan moneter ….',
    options: [
      'Ekspansif dengan menaikkan reserve requirement ratio',
      'Ekspansif dengan menurunkan reserve requirement ratio',
      'Kontraktif dengan menurunkan reserve requirement ratio',
      'Kontraktif dengan menaikkan reserve requirement ratio',
      'Ekspansif dengan menaikkan tingkat diskonto'
    ],
    answer: 'Kontraktif dengan menaikkan reserve requirement ratio'
  },
  {
    id: 'prediksi4-7',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Diketahui fungsi tabungan S = 0,25Y – 10 dan besarnya investasi (I) = 20. Maka besarnya pendapatan nasional adalah....',
    options: ['150', '120', '110', '100', '90'],
    answer: '120'
  },
  {
    id: 'prediksi4-8',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'APBN berfungsi untuk pembagian pendapatan nasional yang adil ke beberapa sektor dan diserahkan kepada masyarakat dalam bentuk tunjangan pegawai, kenaikan gaji, dan pensiun. Pernyataan tersebut merupakan fungsi . . . .',
    options: ['alokasi', 'stabilisasi', 'regulasi', 'distribusi', 'otorisasi'],
    answer: 'distribusi'
  },
  {
    id: 'prediksi4-9',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Pada tahun berjalan terdapat transaksi pembelian perlengkapan Rp500.000,00 tetapi terbukukan sebagai akun peralatan kantor. Jurnal perbaikan dari transaksi tersebut adalah…',
    options: [
      'Perlengkapan Rp500.000 / Kas Rp500.000',
      'Peralatan Rp500.000 / Kas Rp500.000',
      'Beban Peralatan Rp500.000 / Peralatan Rp500.000',
      'Peralatan Rp500.000 / Perlengkapan Rp500.000',
      'Perlengkapan Rp500.000 / Peralatan Rp500.000'
    ],
    answer: 'Perlengkapan Rp500.000 / Peralatan Rp500.000'
  },
  {
    id: 'prediksi4-10',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Dalam melakukan produksi barang akan terjadi law of diminishing return pada saat setelah . . . .',
    options: ['Produk total telah mencapai maksimum', 'Biaya per unit mencapai maksimum', 'Produk marginal mencapai maksimum', 'Penggunaan input sudah maksimum', 'Produk rata-rata maksimum'],
    answer: 'Produk marginal mencapai maksimum'
  },
  {
    id: 'prediksi4-11',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Pernyataan yang salah mengenai kurva isoquant adalah....',
    options: [
      'Isoquant cembung ke arah titik origin',
      'Isoquant merupakan kurva yang menunjukkan penggunaan faktor produksi yang sama',
      'Isoquant tidak saling berpotongan',
      'Sumbu vertikal dan horizontal masing-masing menunjukkan penggunaan faktor produksi',
      'Pada isoquant titik yang berada di kurva sebelah kanan atas menunjukkan tingkat output yang lebih tinggi dibandingkan yang di kiri bawah'
    ],
    answer: 'Isoquant merupakan kurva yang menunjukkan penggunaan faktor produksi yang sama'
  },
  {
    id: 'prediksi4-12',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Perbedaan mendasar antara Mazhab Klasik dengan Keynesian adalah . . . .',
    options: [
      'Mazhab Klasik menggunakan pendekatan penawaran, sedangkan Mazhab Keynesian menekankan permintaan',
      'Mazhab Keynesian bersifat liberal, sedangkan Mazhab Klasik sebaliknya',
      'Mazhab Klasik menekankan pada kebebasan dengan peran pemerintah, sedangkan Mazhab Keynesian sebaliknya',
      'Mazhab Keynesian berpendapat hukum Say berlaku mutlak, sedangkan Mazhab Klasik menyatakan hukum Say tidak berlaku mutlak',
      'Mazhab Keynesian timbul pada saat revolusi industri, sedangkan Mazhab Klasik pada saat great depression'
    ],
    answer: 'Mazhab Klasik menggunakan pendekatan penawaran, sedangkan Mazhab Keynesian menekankan permintaan'
  },
  {
    id: 'prediksi4-13',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Sebuah perusahaan berada pada pasar persaingan monopolistik menderita kerugian. Agar kerugian sekecil mungkin, maka perusahaan ....',
    options: [
      'menjual saham',
      'menjual barang dengan harga yang sama dengan biaya produksi per unitnya',
      'berproduksi pada saat biaya marginalnya sama dengan penerimaan marginal',
      'berproduksi pada saat biaya per unitnya minimum',
      'berproduksi pada saat penerimaan totalnya maksimum'
    ],
    answer: 'menjual barang dengan harga yang sama dengan biaya produksi per unitnya'
  },
  {
    id: 'prediksi4-14',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Jika pendapatan Santi Rp5 juta per bulan, maka Santi akan menggunakan angkutan umum sebagai modal transportasi ke kantornya. Namun, ketika pendapatan Santi meningkat menjadi Rp10 juta per bulan, Santi menggunakan mobil pribadi sebagai modal transportasinya. Dengan demikian, angkutan umum bagi Santi merupakan barang ....',
    options: ['primer', 'normal', 'inferior', 'buruk', 'giffen'],
    answer: 'inferior'
  },
  {
    id: 'prediksi4-15',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Berikut ini yang termasuk kajian dalam ekonomi makro adalah....',
    options: ['Keseimbangan pasar', 'Perilaku konsumen', 'Defisit neraca pembayaran', 'Elastisitas', 'Efisiensi produksi'],
    answer: 'Defisit neraca pembayaran'
  },
  {
    id: 'prediksi4-16',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Semakin banyak mengonsumsi nasi, tambahan kepuasan yang diperoleh akan semakin berkurang. Pernyataan tersebut merupakan bunyi hukum....',
    options: ['Permintaan', 'Penawaran', 'Tambahan kepuasan yang semakin berkurang', 'Kepuasan produk yang semakin berkurang', 'Tambahan hasil yang semakin berkurang'],
    answer: 'Tambahan kepuasan yang semakin berkurang'
  },
  {
    id: 'prediksi4-17',
    category: 'Prediksi Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Pak Husein bekerja di PT. Santosa dengan memperoleh gaji satu bulan sebesar Rp5.000.000,00, tunjangan jabatan sebesar 5%. Pak Husein telah menikah dan mempunyai 2 anak. Besarnya pendapatan tidak kena pajak (PTKP) yang ditentukan adalah: wajib pajak = Rp15.840.000,00 dan tanggungan sebesar Rp1.320.000,00 per orang.'
    },
    question: 'Berdasarkan bacaan di atas, besarnya PTKP Pak Husein dalam satu tahun sebesar ....',
    options: ['Rp15.280.000,00', 'Rp15.840.000,00', 'Rp17.160.000,00', 'Rp18.480.000,00', 'Rp19.800.000,00'],
    answer: 'Rp19.800.000,00'
  },
  {
    id: 'prediksi4-18',
    category: 'Prediksi Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Pak Husein bekerja di PT. Santosa dengan memperoleh gaji satu bulan sebesar Rp5.000.000,00, tunjangan jabatan sebesar 5%. Pak Husein telah menikah dan mempunyai 2 anak.'
    },
    question: 'Yang dibayarkan oleh Pak Husein adalah pajak penghasilan (PPh) berdasarkan ....',
    options: ['Pasal 25', 'Pasal 24', 'Pasal 23', 'Pasal 22', 'Pasal 21'],
    answer: 'Pasal 21'
  },
  {
    id: 'prediksi4-19',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Jenis pajak yang dibayarkan oleh Pak Husein termasuk pajak ....',
    options: ['nasional', 'pusat', 'lokal', 'pemerintah provinsi', 'pemerintah kabupaten/kota'],
    answer: 'pusat'
  },
  {
    id: 'prediksi4-20',
    category: 'Prediksi Paket 4',
    type: 'single',
    question: 'Dasar pungutan yang harus dibayarkan oleh Pak Husein adalah ....',
    options: ['Undang-Undang', 'Peraturan Pemerintah', 'Peraturan Menteri Keuangan', 'Peraturan Bank Indonesia', 'Surat Edaran Menteri Keuangan'],
    answer: 'Undang-Undang'
  }
]

// =====================================================================
// TRYOUT PAKET 1
// =====================================================================
const tryoutPaket1 = [
  {
    id: 'tryout1-1',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Arman memperoleh tambahan uang saku menjadi Rp500.000,00 per bulan ketika Arman menjadi juara di sekolahnya. Dengan uang sakunya yang baru tersebut (ceteris paribus) ….',
    options: [
      'Pilihan konsumsi Arman menjadi lebih banyak',
      'Garis anggaran Arman bergeser ke kiri',
      'Lebih banyak jumlah barang yang dapat dikonsumsi oleh Arman',
      'Tingkat kepuasan Arman tidak berubah',
      'Jumlah konsumsinya tetap'
    ],
    answer: 'Lebih banyak jumlah barang yang dapat dikonsumsi oleh Arman'
  },
  {
    id: 'tryout1-2',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Pak Dadang adalah seorang pengusaha pakaian jadi. Untuk meningkatkan kapasitas produksinya, yang dapat dilakukan Pak Dadang adalah ....',
    options: [
      'Dalam jangka pendek, Pak Dadang dapat menambah pabrik baru',
      'Dalam jangka pendek, Pak Dadang dapat menambah mesin baru',
      'Dalam jangka pendek, Pak Dadang dapat mempekerjakan tenaga kerja baru',
      'Dalam jangka pendek, Pak Dadang dapat mengembangkan teknologi baru',
      'Dalam jangka pendek, Pak Dadang dapat menambah peralatan baru'
    ],
    answer: 'Dalam jangka pendek, Pak Dadang dapat menambah mesin baru'
  },
  {
    id: 'tryout1-3',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Pernyataan berikut ini yang benar mengenai kurva indiferensi, kecuali ….',
    options: [
      'Kurva indiferensi, yaitu kurva yang menunjukkan berbagai titik-titik kombinasi dua barang yang memberikan kepuasan yang sama',
      'Kurva indiferensi berbentuk menurun dari kiri atas ke kanan bawah (downward sloping) dan cembung terhadap titik origin (convex to origin)',
      'Semakin jauh kurva indiferen dari titik origin, semakin tinggi kepuasannya',
      'Salah satu ciri kurva indiferen adalah tidak saling berpotongan',
      'Jika seluruh bagian kurva indiferensi A berada di sebelah kanan atas kurva indiferensi B, tingkat kepuasan yang digambarkan oleh kurva A lebih rendah daripada kepuasan yang digambarkan oleh kurva B'
    ],
    answer: 'Jika seluruh bagian kurva indiferensi A berada di sebelah kanan atas kurva indiferensi B, tingkat kepuasan yang digambarkan oleh kurva A lebih rendah daripada kepuasan yang digambarkan oleh kurva B'
  },
  {
    id: 'tryout1-4',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Produk marginal negatif terjadi pada waktu ….',
    options: [
      'produk total berada pada kondisi maksimum',
      'produk total telah melewati kondisi maksimum',
      'produk rata-rata berada pada titik maksimum',
      'produk rata-rata memiliki kemiringan negatif',
      'produk total belum mencapai maksimum'
    ],
    answer: 'produk total telah melewati kondisi maksimum'
  },
  {
    id: 'tryout1-5',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Jika diketahui permintaan suatu barang adalah Q = 10 – P dan fungsi penawaran adalah Q = 4 + 2P maka harga dan kuantitas keseimbangannya adalah ….',
    options: ['8 dan 2', '2 dan 8', '4 dan 6', '6 dan 4', '2 dan 4'],
    answer: '2 dan 8'
  },
  {
    id: 'tryout1-6',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Faktor yang tidak menggeser kurva permintaan telepon seluler (HP) merek Nokia ke kanan adalah ….',
    options: [
      'penurunan harga HP merek Nokia',
      'penurunan harga pulsa HP',
      'kenaikan harga HP merek Samsung',
      'kenaikan pendapatan konsumen',
      'peningkatan jumlah penduduk'
    ],
    answer: 'penurunan harga HP merek Nokia'
  },
  {
    id: 'tryout1-7',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Diketahui permintaan suatu barang adalah Q = 25 − 3P² dan fungsi penawarannya adalah Q = −50 + 5P², maka pernyataan di bawah ini yang benar adalah …',
    options: [
      'harga keseimbangan adalah 5',
      'kuantitas keseimbangan 25',
      'kuantitas keseimbangan 2',
      'elastisitasnya pada titik keseimbangan adalah elastis',
      'elastisitasnya pada titik keseimbangan adalah inelastis'
    ],
    answer: 'elastisitasnya pada titik keseimbangan adalah inelastis'
  },
  {
    id: 'tryout1-8',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Harga suatu barang di pasar mengalami kenaikan dari Rp5.000,00 per unit menjadi Rp6.000,00. Kenaikan harga menyebabkan jumlah barang yang diminta berkurang dari 500 unit menjadi 400 unit. Dari uraian tersebut jenis elastisitas permintaannya adalah . . . .',
    options: ['elastis', 'inelastis', 'elastis uniter', 'elastis sempurna', 'inelastis sempurna'],
    answer: 'elastis uniter'
  },
  {
    id: 'tryout1-9',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Kurva biaya total (TC) menggambarkan hubungan antara lain .…',
    options: [
      'jumlah input yang digunakan dan biaya total',
      'jumlah output yang diproduksi dan biaya total',
      'jumlah output yang diproduksi dan penerimaan total',
      'biaya total dan laba',
      'biaya total dan penerimaan total'
    ],
    answer: 'jumlah output yang diproduksi dan biaya total'
  },
  {
    id: 'tryout1-10',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Perusahaan memiliki fungsi biaya rata-rata sebagai berikut: AC = 750 + 320Q. Fungsi biaya marginalnya adalah ....',
    options: ['MC = 750 + 320Q', 'MC = 750Q + 640Q', 'MC = 750 + 320Q', 'MC = 750 + 640Q', 'MC = 750Q + 320'],
    answer: 'MC = 750 + 640Q'
  },
  {
    id: 'tryout1-11',
    category: 'Tryout Paket 1',
    type: 'single',
    stimulus: {
      instruction: 'Data aset bengkel Amar per 31 Desember 2019: Asuransi dibayar dimuka Rp10.000.000; Kas Rp7.500.000; Pendapatan yang masih harus dibayar Rp5.000.000; Pendapatan yang masih harus diterima Rp2.500.000; Perlengkapan Rp12.500.000; Peralatan Rp20.000.000.'
    },
    question: 'Berdasarkan informasi di atas, besarnya nilai aset lancar adalah ....',
    options: ['Rp57.500.000', 'Rp50.000.000', 'Rp37.500.000', 'Rp32.500.000', 'Rp30.000.000'],
    answer: 'Rp32.500.000'
  },
  {
    id: 'tryout1-12',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Pada tanggal 1 Oktober 2019 PT JAYA membayar dimuka Rp12.000.000,00 untuk satu tahun asuransi. Manakah dari pernyataan berikut ini yang akan menjadi bagian dari jurnal penyesuaian pada tanggal 31 Desember 2019?',
    options: [
      'Debit asuransi dibayar dimuka untuk Rp3.000.000,00',
      'Debit asuransi dibayar dimuka untuk Rp9.000.000,00',
      'Debit biaya asuransi untuk Rp3.000.000,00',
      'Debit biaya asuransi untuk Rp9.000.000,00',
      'Kredit biaya asuransi untuk Rp3.000.000,00'
    ],
    answer: 'Debit biaya asuransi untuk Rp3.000.000,00'
  },
  {
    id: 'tryout1-13',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Pada pasar oligopoli, harga cenderung kaku karena ....',
    options: [
      'perusahaan sebagai price taker',
      'perusahaan sebagai price maker',
      'ketika perusahaan menurunkan harga, perusahaan lain akan mengikuti',
      'biaya produksi tidak berpengaruh terhadap harga jual',
      'jumlah output tidak berpengaruh terhadap harga jual'
    ],
    answer: 'perusahaan sebagai price maker'
  },
  {
    id: 'tryout1-14',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'CV Makmur Jaya adalah perusahaan kecil yang menghasilkan barang yang sama persis dengan barang-barang yang dihasilkan oleh perusahaan-perusahaan lainnya dalam satu industri. Perusahaan tersebut memproduksi sebanyak 750 unit dengan biaya total Rp7.500.000,00, biaya tetap rata-rata Rp3.000,00, diperoleh penerimaan total sebesar Rp8.250.000,00. Perusahaan memperoleh laba maksimum. Berdasarkan bacaan di atas, maka dalam jangka panjang, CV Makmur Jaya akan ....',
    options: [
      'menderita kerugian karena CV Makmur Jaya merupakan perusahaan kecil',
      'bisa menjadi perusahaan besar karena dapat meningkatkan labanya',
      'hanya memperoleh laba normal',
      'memperoleh laba sebesar Rp750.000,00',
      'memperoleh laba super normal jika berproduksi pada saat MR = MC'
    ],
    answer: 'hanya memperoleh laba normal'
  },
  {
    id: 'tryout1-15',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Diketahui fungsi konsumsi C = 100 + 0,8Yd. Jika pemerintah mengenakan pajak pendapatan sebesar 25%, fungsi konsumsinya menjadi ….',
    options: ['C = 100 − 0,8Y', 'C = 100 + 0,8Y', 'C = 100 + 0,6Y', 'C = 100 − 0,6Y', 'C = 100 − Y'],
    answer: 'C = 100 + 0,6Y'
  },
  {
    id: 'tryout1-16',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Perhitungan pertumbuhan ekonomi menggunakan angka produk domestik bruto (PDB) berdasarkan harga konstan dimaksudkan untuk menghilangkan pengaruh ....',
    options: ['inflasi', 'kebijakan pemerintah', 'suku bunga', 'investasi', 'tabungan masyarakat'],
    answer: 'inflasi'
  },
  {
    id: 'tryout1-17',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Pemerintah dapat melakukan kebijakan moneter dengan cara membeli surat berharga dari masyarakat. Dampak langsung dari kebijakan ini adalah ....',
    options: ['harga barang lebih murah', 'suku bunga naik', 'lapangan kerja bertambah', 'pendapatan masyarakat naik', 'jumlah uang beredar bertambah'],
    answer: 'jumlah uang beredar bertambah'
  },
  {
    id: 'tryout1-18',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Strategi yang dibuat oleh departemen pemasaran dan departemen keuangan untuk mendukung strategi unit bisnis di mana ia berada tergolong dalam ....',
    options: ['strategi tingkat individual', 'strategi tingkat divisi', 'strategi tingkat unit bisnis', 'strategi tingkat fungsional', 'strategi tingkat korporasi'],
    answer: 'strategi tingkat fungsional'
  },
  {
    id: 'tryout1-19',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Salah satu ciri badan usaha perseroan terbatas adalah ....',
    options: ['tidak banyak peraturan', 'pajak rendah', 'mudah didirikan', 'tanggung jawab perusahaan terbatas', 'keuntungan seluruhnya diserahkan kepada pemilik'],
    answer: 'tanggung jawab perusahaan terbatas'
  },
  {
    id: 'tryout1-20',
    category: 'Tryout Paket 1',
    type: 'single',
    question: 'Tujuan yang harus dicapai manajer keuangan bagi keberlangsungan perusahaan adalah .…',
    options: ['memperoleh keuntungan yang sebesar-besarnya', 'meningkatkan efisiensi dan efektivitas', 'meningkatkan nilai perusahaan', 'meningkatkan penjualan', 'menurunkan biaya'],
    answer: 'memperoleh keuntungan yang sebesar-besarnya'
  }
]

// =====================================================================
// TRYOUT PAKET 2
// =====================================================================
const tryoutPaket2 = [
  {
    id: 'tryout2-1',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Air sangat berguna bagi kehidupan harganya lebih murah, sedangkan berlian yang kurang berguna bagi kehidupan harganya sangat tinggi. Keadaan tersebut dapat dijelaskan melalui konsep ….',
    options: ['Paradoks dalam berhemat', 'Teori konsumsi', 'Teori kardinal', 'Paradoks nilai', 'Koefisien gini'],
    answer: 'Paradoks nilai'
  },
  {
    id: 'tryout2-2',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Akibat krisis keuangan global, pertumbuhan ekonomi Indonesia pada tahun 2009 diprediksikan mengalami penurunan dari sekitar 6% menjadi 4%. Hal ini berarti pada tahun 2009 …',
    options: [
      'Produksi nasional Indonesia (GDP) merosot 2%',
      'Produksi nasional Indonesia (GDP) mengalami pertumbuhan 4%',
      'Konsumsi masyarakat Indonesia akan mengalami penurunan sekitar 2%',
      'Konsumsi masyarakat Indonesia tinggal 4% saja',
      'Pendapatan nasional tumbuh melambat dibanding tahun sebelumnya'
    ],
    answer: 'Pendapatan nasional tumbuh melambat dibanding tahun sebelumnya'
  },
  {
    id: 'tryout2-3',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Diketahui bahwa fungsi produksi adalah Q = 100 + X + 0,25X², Q adalah output, dan X adalah input. Pada tingkat penggunaan input X sebesar 100 unit, besarnya produksi marginal (marginal productivity) adalah ....',
    options: ['27 unit', '51 unit', '151 unit', '601 unit', '2.700 unit'],
    answer: '51 unit'
  },
  {
    id: 'tryout2-4',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Yang tidak sesuai dengan kondisi dalam pasar monopoli, yaitu ….',
    options: [
      'Dalam jangka pendek, monopolis (perusahaan monopoli) tidak akan menderita rugi karena merupakan satu-satunya perusahaan dalam industri',
      'Perusahaan lain sangat sulit masuk ke dalam industri',
      'Kurva permintaan pasar adalah juga sebagai kurva permintaan perusahaan',
      'Dihasilkan barang unik',
      'Perusahaan memiliki daya monopoli yang besar'
    ],
    answer: 'Dalam jangka pendek, monopolis (perusahaan monopoli) tidak akan menderita rugi karena merupakan satu-satunya perusahaan dalam industri'
  },
  {
    id: 'tryout2-5',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Perusahaan membayar utang jangka panjang yang sudah jatuh tempo sebesar Rp80.000.000,00 dengan tunai, sementara modal sendiri masih tetap sebesar Rp70.000.000,00, maka ....',
    options: [
      'Aktiva berkurang sebesar Rp80.000.000,00',
      'Aktiva berkurang sebesar Rp10.000.000,00',
      'Pasiva berkurang sebesar Rp70.000.000,00',
      'Pasiva berkurang sebesar Rp10.000.000,00',
      'Aktiva lancar berkurang sebesar Rp10.000.000,00'
    ],
    answer: 'Aktiva berkurang sebesar Rp80.000.000,00'
  },
  sebabQuestion(
    'tryout2-6',
    'Tryout Paket 2',
    'Kegiatan operasional koperasi sehari-hari dilaksanakan oleh pengurus koperasi.',
    'Pengurus koperasi melaksanakan tugas dan tanggung jawab ke luar dan ke dalam, termasuk merumuskan kebijakan umum dalam usaha koperasi.',
    2
  ),
  sebabQuestion(
    'tryout2-7',
    'Tryout Paket 2',
    'Pendapatan per kapita negara Indonesia saat ini sudah mencapai di atas US $1.000 sehingga Indonesia tidak lagi dikelompokkan sebagai negara miskin, tetapi dikelompokkan sebagai negara berpenghasilan menengah.',
    'Pendapatan per kapita adalah satu-satunya ukuran yang paling akurat untuk melihat standar kemakmuran dan tingkat kemajuan perekonomian di berbagai negara.',
    2
  ),
  sebabQuestion(
    'tryout2-8',
    'Tryout Paket 2',
    'Ketika pemerintah meningkatkan penerimaan pajak, maka pendapatan nasional akan turun sebesar pertambahan penerimaan pajak itu sendiri.',
    'Angka pengganda pajak lebih kecil daripada angka pengganda pengeluaran pemerintah.',
    3
  ),
  nomorQuestion(
    'tryout2-9',
    'Tryout Paket 2',
    'Fungsi konsumsi sebuah negara adalah S = –100 + 0,25Y. Bila pendapatan nasional (Y) sebesar Rp1.000 triliun tahun 2008, berdasarkan model persamaan tersebut dapat diketahui …',
    '(1) Besarnya konsumsi C adalah Rp1.150 triliun<br>(2) Persamaan fungsi konsumsi adalah C = 100 + 0,75Y<br>(3) Besarnya tabungan (S) adalah Rp150 triliun<br>(4) Besarnya koefisien MPS adalah 0,25',
    2
  ),
  nomorQuestion(
    'tryout2-10',
    'Tryout Paket 2',
    'Faktor yang memengaruhi ekspor produk Indonesia ke luar negeri adalah . . . .',
    '(1) Jumlah uang beredar di Indonesia<br>(2) Pendapatan negara mitra dagang<br>(3) Pendapatan nasional Indonesia<br>(4) Depresiasi atau apresiasi rupiah',
    3
  ),
  {
    id: 'tryout2-11',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Bila pemerintah mengurangi subsidi harga penjualan BBM di dalam negeri, harga jual BBM akan naik. Bila kenaikan harga BBM sebesar 30%, jumlah permintaan terhadap BBM akan turun sebesar 20%. Hal ini BBM tergolong barang ....',
    options: ['lux (mewah)', 'bersifat elastis', 'inferior', 'bersifat inelastis', 'bersifat unitary elastic'],
    answer: 'bersifat inelastis'
  },
  {
    id: 'tryout2-12',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Dalam sistem ekonomi kapitalis murni, ketika jumlah mobil yang diminta masyarakat terus bertambah, sedangkan ketersediaan baja (sebagai bahan baku pembuat mobil) semakin sulit, maka penyelesaian terhadap persoalan ini diserahkan kepada ….',
    options: ['campur tangan pemerintah', 'keputusan produsen', 'keputusan konsumen', 'kerja sama antara masyarakat dan pemerintah', 'mekanisme penentuan harga'],
    answer: 'mekanisme penentuan harga'
  },
  nomorQuestion(
    'tryout2-13',
    'Tryout Paket 2',
    'Masalah pemilihan (problem of choice) dalam kehidupan ekonomi TIDAK AKAN mungkin timbul manakala ….',
    '(1) Jumlah barang yang dapat disediakan untuk memenuhi kebutuhan tak terbatas jumlahnya<br>(2) Tak ada kelangkaan (scarcity)<br>(3) Keinginan manusia atas barang dan jasa dapat ditentukan<br>(4) Sumber daya yang tersedia secara potensial cukup banyak',
    4
  ),
  {
    id: 'tryout2-14',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Untuk mengendalikan inflasi, Bank Indonesia dapat melakukan kebijakan yang bersifat ….',
    options: [
      'ekspansif dengan cara menjual SBI dan SBPU',
      'ekspansif dengan cara membeli SBI dan SBPU',
      'kontraktif dengan cara menerapkan pajak progesif',
      'kontraktif dengan cara menurunkan tingkat diskonto',
      'kontraktif dengan cara menaikkan giro wajib minimum'
    ],
    answer: 'kontraktif dengan cara menaikkan giro wajib minimum'
  },
  {
    id: 'tryout2-15',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Uji kepatutan dan kelayakan (fit and proper test) terhadap pejabat struktural merupakan bagian dari fungsi manajemen ….',
    options: ['organizing', 'staffing', 'leading', 'planning', 'controlling'],
    answer: 'staffing'
  },
  {
    id: 'tryout2-16',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Keseimbangan pasar yang baru ditandai oleh meningkatnya jumlah barang yang ditransaksikan dan tidak berubahnya harga barang. Hal ini digambarkan oleh ….',
    options: [
      'Peningkatan permintaan dan penurunan penawaran dalam proporsi yang sama',
      'Penurunan permintaan dan peningkatan penawaran dalam proporsi yang sama',
      'Penurunan permintaan dan penawaran',
      'Peningkatan permintaan dan penawaran',
      'Peningkatan permintaan dan penawaran dalam proporsi yang sama'
    ],
    answer: 'Peningkatan permintaan dan penawaran dalam proporsi yang sama'
  },
  {
    id: 'tryout2-17',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Susunan berdasarkan angka elastisitas, mulai dari yang tertinggi di antara kebutuhan manusia berikut (1) pakaian jadi, (2) beras, dan (3) telepon seluler (HP). Susunan yang benar adalah ….',
    options: ['(3); (2); (1)', '(3); (1); (2)', '(2); (3); (1)', '(2); (1); (3)', '(1); (2); (3)'],
    answer: '(3); (1); (2)'
  },
  sebabQuestion(
    'tryout2-18',
    'Tryout Paket 2',
    'Dalam perekonomian terbuka, jika terdapat kenaikan ekspor yang lebih tinggi dibandingkan kenaikan impor, maka pendapatan nasional akan mengalami penurunan.',
    'Kenaikan ekspor dapat menaikkan devisa, sedangkan kenaikan impor dapat menurunkan devisa.',
    3
  ),
  {
    id: 'tryout2-19',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pemerintah meningkatkan belanja infrastruktur untuk membangun berbagai sarana transportasi, baik darat, laut, dan udara di Indonesia. Kebijakan seperti ini diprediksi akan .…',
    options: [
      'meningkatkan permintaan agregat',
      'menurunkan permintaan agregat',
      'meningkatkan jumlah uang beredar',
      'menurunkan jumlah uang beredar',
      'menurunkan tingkat inflasi'
    ],
    answer: 'meningkatkan permintaan agregat'
  },
  {
    id: 'tryout2-20',
    category: 'Tryout Paket 2',
    type: 'single',
    question: 'Pada tanggal 31 Desember 2018, diketahui usaha kursus akuntansi milik Nona Ana memperoleh laba sebesar Rp8.000.000,00. Ayat jurnal yang diperlukan untuk menutup akun tersebut adalah .…',
    options: [
      'Laba Rp8.000.000,00 / Ikhtisar L/R Rp8.000.000,00',
      'Ikhtisar L/R Rp8.000.000,00 / Laba Rp8.000.000,00',
      'Ikhtisar L/R Rp8.000.000,00 / Modal Rp8.000.000,00',
      'Modal Rp8.000.000,00 / Ikhtisar L/R Rp8.000.000,00',
      'Pendapatan Rp8.000.000,00 / Ikhtisar Rp8.000.000,00'
    ],
    answer: 'Ikhtisar L/R Rp8.000.000,00 / Modal Rp8.000.000,00'
  }
]

// =====================================================================
// TRYOUT PAKET 3
// =====================================================================
const tryoutPaket3 = [
  {
    id: 'tryout3-1',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Pak Ucok menjual barang X rata-rata 40 unit per hari. Namun, Pak Ucok kecewa karena jumlah penjualannya menurun sebesar 20% per hari pada saat pendapatan masyarakat mengalami peningkatan. Hal ini berarti barang X merupakan barang ....',
    options: ['inferior', 'mewah', 'normal', 'prestise', 'giffen'],
    answer: 'inferior'
  },
  {
    id: 'tryout3-2',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Jika pemerintah menaikkan pajak kendaraan bermotor .....',
    options: [
      'permintaan kendaraan bermotor naik',
      'permintaan sepeda turun',
      'permintaan BBM naik',
      'permintaan minyak pelumas/oli naik',
      'permintaan angkutan umum naik'
    ],
    answer: 'permintaan angkutan umum naik'
  },
  {
    id: 'tryout3-3',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Semakin banyak terdapat barang substitusinya, permintaan terhadap suatu barang semakin ....',
    options: [
      'besar di daerah tersebut',
      'elastis terhadap perubahan pendapatan',
      'elastis terhadap perubahan harga',
      'inelastis terhadap perubahan pendapatan',
      'inelastis terhadap perubahan harga'
    ],
    answer: 'elastis terhadap perubahan harga'
  },
  {
    id: 'tryout3-4',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Keseimbangan konsumen akan tercapai pada saat ....',
    options: [
      'kurva indiferensi berpotongan dengan garis anggaran',
      'kurva indiferensi berada di atas garis anggaran',
      'kurva indiferensi berada di bawah garis anggaran',
      'kurva indiferensi bersinggungan dengan garis anggaran',
      'kurva indiferensi berpotongan dengan sumbu horizontal'
    ],
    answer: 'kurva indiferensi bersinggungan dengan garis anggaran'
  },
  {
    id: 'tryout3-5',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Jika kurva biaya marginal (MC) berada di atas kurva biaya rata-rata (AC), biaya rata-rata akan ....',
    options: ['turun', 'naik', 'tetap', 'berada pada titik minimum', 'berada pada titik maksimum'],
    answer: 'naik'
  },
  {
    id: 'tryout3-6',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Pada pasar oligopoli, harga cenderung kaku karena ....',
    options: [
      'perusahaan sebagai price taker',
      'perusahaan sebagai price maker',
      'ketika perusahaan menurunkan harga, perusahaan lain akan mengikuti',
      'biaya produksi tidak berpengaruh terhadap harga jual',
      'jumlah output tidak berpengaruh terhadap harga jual'
    ],
    answer: 'ketika perusahaan menurunkan harga, perusahaan lain akan mengikuti'
  },
  {
    id: 'tryout3-7',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berikut ini yang TIDAK termasuk dalam penghitungan Produk Nasional Bruto Indonesia adalah .…',
    options: [
      'Gaji tenaga kerja Indonesia di Arab Saudi',
      'Keuntungan bank asing di Indonesia',
      'Keuntungan Bank Mandiri kantor perwakilan di Kuala Lumpur',
      'Gaji pekerja Indonesia di bank asing di Indonesia',
      'Gaji para diplomat Indonesia di luar negeri'
    ],
    answer: 'Keuntungan bank asing di Indonesia'
  },
  {
    id: 'tryout3-8',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Sumber Anggaran Pendapatan dan Belanja Daerah (APBD) terdapat pada setiap provinsi di Indonesia, kecuali ....',
    options: ['Pendapatan Asli Daerah (PAD)', 'Dana Alokasi Umum (DAU)', 'Dana Alokasi Khusus (DAK)', 'Dana Otonomi Khusus (Otsus)', 'Dana Bagi Hasil (DBH)'],
    answer: 'Dana Otonomi Khusus (Otsus)'
  },
  nomorQuestion(
    'tryout3-9',
    'Tryout Paket 3',
    'Yang disebut penganggur adalah penduduk yang .…',
    '(1) Tidak bekerja<br>(2) Sedang mencari pekerjaan<br>(3) Sedang mempersiapkan suatu usaha baru<br>(4) Sedang menempuh pendidikan formal',
    0
  ),
  {
    id: 'tryout3-10',
    category: 'Tryout Paket 3',
    type: 'single',
    stimulus: {
      instruction: 'Data aset Bengkel Amar per 31 Desember 2016: Asuransi dibayar dimuka Rp10.000.000,00; Kas Rp7.500.000,00; Pendapatan yang masih harus dibayar Rp5.000.000,00; Pendapatan yang masih harus diterima Rp2.500.000,00; Perlengkapan Rp12.500.000,00; Peralatan Rp20.000.000,00.'
    },
    question: 'Berdasarkan informasi di atas, besarnya nilai aset lancar adalah ....',
    options: ['Rp57.500.000,00', 'Rp50.000.000,00', 'Rp37.500.000,00', 'Rp32.500.000,00', 'Rp30.000.000,00'],
    answer: 'Rp32.500.000,00'
  },
  {
    id: 'tryout3-11',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Di bawah ini merupakan transaksi yang akan memengaruhi arus kas dari aktivitas pendanaan, kecuali ....',
    options: [
      'menerima pinjaman dari pihak lain',
      'menerbitkan obligasi',
      'melunasi pinjaman',
      'membeli kembali saham treasury',
      'membayar premi asuransi'
    ],
    answer: 'membayar premi asuransi'
  },
  sebabQuestion(
    'tryout3-12',
    'Tryout Paket 3',
    'Pengawasan dan pengaturan terhadap operasional perbankan dilakukan oleh Bank Indonesia sebagai bank sentral.',
    'Bank Indonesia mempunyai tugas membuat kebijakan moneter.',
    3
  ),
  nomorQuestion(
    'tryout3-13',
    'Tryout Paket 3',
    'Perusahaan pada pasar persaingan sempurna yang memaksimalkan laba dihadapkan pada kondisi ketika harga sama dengan ....',
    '(1) penerimaan marginal<br>(2) penerimaan rata-rata<br>(3) biaya marginal<br>(4) biaya rata-rata',
    0
  ),
  nomorQuestion(
    'tryout3-14',
    'Tryout Paket 3',
    'Pembangunan ekonomi yang berkualitas ditunjukkan dalam bentuk ....',
    '(1) menurunnya angka kemiskinan<br>(2) meningkatnya kesempatan kerja<br>(3) menurunnya tingkat pengangguran<br>(4) meningkatnya pendapatan per kapita',
    4
  ),
  nomorQuestion(
    'tryout3-15',
    'Tryout Paket 3',
    'Berikut ini yang merupakan fungsi perencanaan adalah .…',
    '(1) Menjadi suatu pedoman<br>(2) Meminimalkan dampak perubahan<br>(3) Meminimalkan pemborosan<br>(4) Menetapkan standar dalam pengawasan kualitas',
    4
  ),
  sebabQuestion(
    'tryout3-16',
    'Tryout Paket 3',
    'Kebijakan anggaran berimbang, yakni kebijakan anggaran yang mengusahakan agar pengeluaran (belanja) dan pendapatan atau penerimaan sama; menjadi salah satu pilihan negara-negara berkembang.',
    'Negara berkembang butuh kestabilan ekonomi dan anggaran, sehingga pengeluaran harus disesuaikan dengan pengeluaran.',
    4
  ),
  {
    id: 'tryout3-17',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Berikut termasuk kredit aktif, kecuali .…',
    options: ['Kredit berjangka', 'Kredit rekening koran (R/K)', 'Kredit aksep', 'Kredit dokumenter', 'Kredit reimburse (Letter of Credit)'],
    answer: 'Kredit berjangka'
  },
  {
    id: 'tryout3-18',
    category: 'Tryout Paket 3',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan grafik permintaan-penawaran: kurva penawaran (S1→S2) dan permintaan (D) bergeser sehingga harga naik dari P1 ke P2 dan kuantitas naik dari Q1 ke Q2.'
    },
    question: 'Berdasarkan grafik tersebut, penyebab inflasi adalah .… ',
    options: ['naiknya permintaan', 'naiknya biaya produksi', 'kuantitas produksi', 'kualitas produksi', 'kenaikan upah'],
    answer: 'naiknya biaya produksi'
  },
  {
    id: 'tryout3-19',
    category: 'Tryout Paket 3',
    type: 'single',
    question: 'Product, price, promotion, people, process, dan physical evidence adalah elemen-elemen bauran pemasaran dari jenis perusahaan .…',
    options: ['agribisnis', 'tambang', 'moneter', 'jasa', 'fabrikasi (manufacturing)'],
    answer: 'jasa'
  },
  nomorQuestion(
    'tryout3-20',
    'Tryout Paket 3',
    'Jurnal penyesuaian digunakan untuk .…',
    '(1) Menutup rekening pendapatan<br>(2) Menyesuaikan kas<br>(3) Menutup rekening pengeluaran<br>(4) Menyesuaikan pendapatan diterima dimuka',
    3
  )
]

// =====================================================================
// TRYOUT PAKET 4
// =====================================================================
const tryoutPaket4 = [
  {
    id: 'tryout4-1',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Peran yang dimainkan oleh para pelaku ekonomi antara lain sebagai pengguna faktor produksi, pemilik faktor produksi, penghasil barang dan jasa, pengguna barang dan jasa, dan penyedia faktor produksi. Peran yang dapat dimainkan oleh rumah tangga konsumen adalah .…',
    options: [
      'Pengguna faktor produksi, pemilik faktor produksi, dan penghasil barang dan jasa',
      'Pengguna faktor produksi, penghasil barang dan jasa, serta pengguna barang dan jasa',
      'Pemilik faktor produksi, penghasil barang dan jasa, serta pengguna barang dan jasa',
      'Pemilik faktor produksi, pengguna barang dan jasa, serta penyedia faktor produksi',
      'Penghasil barang dan jasa, pengguna barang dan jasa, serta penyedia faktor produksi'
    ],
    answer: 'Pemilik faktor produksi, pengguna barang dan jasa, serta penyedia faktor produksi'
  },
  {
    id: 'tryout4-2',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Tina merupakan lulusan SMK jurusan Akuntansi. Setelah selesai sekolah, Tina bekerja sebagai buruh pembuat bulu mata palsu dan sampai sekarang Tina sudah bekerja selama lima tahun. Dalam hal ini Tina digolongkan sebagai . . . .',
    options: ['Pengangguran terbuka', 'Setengah menganggur', 'Pengangguran terselubung', 'Pengangguran struktural', 'Pengangguran friksional'],
    answer: 'Pengangguran terselubung'
  },
  {
    id: 'tryout4-3',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Ketika manusia sudah mendapatkan sesuatu yang diinginkannya, pasti akan muncul keinginan-keinginan yang lain, padahal sumber daya yang dimiliki terbatas. Pernyataan tersebut merupakan konsep dari masalah inti ekonomi, yaitu adanya . . . .',
    options: ['kemakmuran', 'keinginan', 'kebutuhan', 'kekayaan', 'kelangkaan'],
    answer: 'kelangkaan'
  },
  {
    id: 'tryout4-4',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pernyataan yang paling tepat berkaitan dengan biaya produksi adalah .…',
    options: [
      'Kurva biaya marginal (MC) memotong kurva biaya rata-rata (AC) pada saat kurva AC menurun',
      'Kurva MC memotong kurva AC pada saat kurva AC naik',
      'Kurva MC memotong kurva AC pada titik minimal AC',
      'Kurva MC memotong kurva biaya variabel (AVC) pada saat AVC naik',
      'Kurva MC memotong kurva AVC pada saat AVC menurun'
    ],
    answer: 'Kurva MC memotong kurva AC pada titik minimal AC'
  },
  nomorQuestion(
    'tryout4-5',
    'Tryout Paket 4',
    'Perusahaan dapat memilih untuk melakukan investasi riil di bawah ini . . . .',
    '(1) Investasi emas dan logam mulia<br>(2) Investasi mesin produksi<br>(3) Investasi aset tetap<br>(4) Investasi kendaraan',
    4
  ),
  nomorQuestion(
    'tryout4-6',
    'Tryout Paket 4',
    'Salah satu kebijakan moneter oleh Bank Sentral adalah adanya politik uang ketat, yaitu dengan cara . . . .',
    '(1) Menjual Sertifikat Bank Indonesia (SBI)<br>(2) Membeli surat berharga dari masyarakat<br>(3) Meningkatkan suku bunga<br>(4) Menurunkan cadangan kas minimum',
    1
  ),
  sebabQuestion(
    'tryout4-7',
    'Tryout Paket 4',
    'Salah satu dampak inflasi adalah merugikan pedagang.',
    'Jika inflasi berkepanjangan, akan banyak produsen yang mengalami kebangkrutan yang dikarenakan banyak masyarakat yang tidak mampu membeli karena produknya relatif akan semakin mahal.',
    0
  ),
  nomorQuestion(
    'tryout4-8',
    'Tryout Paket 4',
    'Penyebab inflasi, yaitu cost push inflation yang antara lain karena hal-hal berikut, kecuali . . . .',
    '(1) Kenaikan biaya tenaga kerja<br>(2) Kenaikan biaya overhead pabrik<br>(3) Kenaikan harga bahan baku<br>(4) Penurunan jumlah uang yang beredar',
    3
  ),
  nomorQuestion(
    'tryout4-9',
    'Tryout Paket 4',
    'Berikut ini yang merupakan sumber devisa Indonesia adalah . . . .',
    '(1) Hasil ekspor atas barang yang dijual ke Thailand<br>(2) Kunjungan wisatawan Australia ke Pulau Bali<br>(3) Gaji TKI yang bekerja di Arab Saudi<br>(4) Hibah dari negara lain',
    4
  ),
  {
    id: 'tryout4-10',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Jika koefisien elastisitas silang barang N terhadap M adalah sebesar 1,10, hal ini menunjukkan bahwa ....',
    options: [
      'Kedua barang tersebut bersifat substitusi, jika harga barang M turun 10%, maka permintaan atas barang N akan turun sebesar 11%',
      'Kedua barang tersebut bersifat substitusi, jika harga barang M turun 10%, maka permintaan atas barang N akan naik sebesar 11%',
      'Jika pendapatan konsumen naik 10% maka permintaan barang N akan naik sebesar 11%',
      'Kedua barang tersebut bersifat pelengkap, jika harga barang M naik 10% maka permintaan barang N naik 11%',
      'Kedua barang tersebut bersifat pelengkap, jika harga barang M naik 11% maka permintaan barang N naik 10%'
    ],
    answer: 'Kedua barang tersebut bersifat substitusi, jika harga barang M turun 10%, maka permintaan atas barang N akan turun sebesar 11%'
  },
  {
    id: 'tryout4-11',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Memimpin organisasi atau perusahaan secara keseluruhan dan memimpin para manajer agar dapat membentuk tim kerja yang baik merupakan tugas .…',
    options: ['Manajer lini pertama', 'Manajer menengah', 'Manajer puncak', 'Supervisor', 'Auditor'],
    answer: 'Manajer puncak'
  },
  {
    id: 'tryout4-12',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Suatu perekonomian tiga sektor dengan fungsi konsumsi rumah tangga C = 60 + 0,60Y, pengeluaran pemerintah = 35, investasi oleh pihak swasta = 25. Hal tersebut menunjukkan bahwa ....',
    options: [
      'Pendapatan nasional keseimbangan = 360',
      'Kecenderungan menabung = 75',
      'Jika pendapatan nasional = 200, maka konsumsi rumah tangga 180',
      'Angka pengganda perekonomian 3',
      'MPC = 0,40'
    ],
    answer: 'Jika pendapatan nasional = 200, maka konsumsi rumah tangga 180'
  },
  {
    id: 'tryout4-13',
    category: 'Tryout Paket 4',
    type: 'single',
    stimulus: {
      instruction: 'Terdapat lima grafik kurva permintaan (Grafik A sampai E) dengan bentuk berbeda-beda: menurun landai (normal), garis horizontal datar, garis vertikal tegak lurus, menurun curam dari satu titik, dan garis diagonal menurun lurus.'
    },
    question: 'Berdasarkan kurva elastisitas permintaan tersebut, yang menunjukkan permintaan elastis sempurna adalah ....',
    options: ['Grafik A (menurun landai/normal)', 'Grafik B (garis horizontal/datar)', 'Grafik C (garis vertikal tegak lurus)', 'Grafik D (menurun curam dari satu titik)', 'Grafik E (garis diagonal menurun lurus)'],
    answer: 'Grafik B (garis horizontal/datar)'
  },
  sebabQuestion(
    'tryout4-14',
    'Tryout Paket 4',
    'Pada akhir periode akun pendapatan, beban, modal, dan prive bersaldo nol.',
    'Pada akhir periode dibuat jurnal penutup.',
    3
  ),
  {
    id: 'tryout4-15',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pada tanggal 23 Februari 2014, Tuan Yuza membeli peralatan untuk kepentingan perusahaannya dengan harga Rp25.000.000, masa manfaat peralatan tersebut adalah 5 tahun dengan nilai residu Rp4.000.000. Ayat jurnal penyesuaian yang harus dibuat oleh Tuan Yuza adalah . . . .',
    options: [
      'Beban Penyusutan Peralatan Rp4.200.000 / Akumulasi Penyusutan Peralatan Rp4.200.000',
      'Akumulasi Penyusutan Peralatan Rp4.200.000 / Beban Penyusutan Peralatan Rp4.200.000',
      'Beban Penyusutan Peralatan Rp3.500.000 / Akumulasi Penyusutan Peralatan Rp3.500.000',
      'Penyusutan Peralatan Rp3.500.000 / Akumulasi Penyusutan Peralatan Rp3.500.000',
      'Beban Penyusutan Peralatan Rp3.850.000 / Akumulasi Penyusutan Peralatan Rp3.850.000'
    ],
    answer: 'Beban Penyusutan Peralatan Rp3.500.000 / Akumulasi Penyusutan Peralatan Rp3.500.000'
  },
  {
    id: 'tryout4-16',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Pernyataan berikut yang benar tentang kurva penawaran untuk barang normal adalah .…',
    options: [
      'Kurva yang menunjukkan hubungan antara harga dan penawaran suatu barang, cateris paribus',
      'Kurva yang menunjukkan hubungan antara harga suatu barang atau jasa dan kuantitas barang atau jasa yang ditawarkan, cateris paribus',
      'Kurva yang menunjukkan hubungan antara biaya dan penawaran suatu barang atau jasa, cateris paribus',
      'Kurva yang menunjukkan hubungan antara biaya dan jumlah barang atau jasa yang ditawarkan, cateris paribus',
      'Kurva yang menunjukkan kombinasi input yang digunakan untuk memproduksi suatu output'
    ],
    answer: 'Kurva yang menunjukkan hubungan antara harga suatu barang atau jasa dan kuantitas barang atau jasa yang ditawarkan, cateris paribus'
  },
  {
    id: 'tryout4-17',
    category: 'Tryout Paket 4',
    type: 'single',
    question: 'Ketika harga barang per unit suatu barang Rp100.000,00, jumlah barang yang ditawarkan 50 unit; ketika harga per unit turun menjadi Rp50.000,00, jumlah barang yang ditawarkan menjadi 30 unit. Nilai koefisien elastisitas penawaran barang tersebut bersifat .…',
    options: ['elastis', 'inelastis', 'elastisitas uniter', 'elastis sempurna', 'inelastis sempurna'],
    answer: 'elastis'
  },
  nomorQuestion(
    'tryout4-18',
    'Tryout Paket 4',
    'Faktor-faktor produksi yang tersedia dalam perekonomian dibedakan menjadi beberapa golongan yaitu .…',
    '(1) Tanah dan sumber daya alam<br>(2) Tenaga kerja<br>(3) Modal<br>(4) Kewirausahaan',
    4
  ),
  sebabQuestion(
    'tryout4-19',
    'Tryout Paket 4',
    'Kurva penawaran tanah tegak lurus sejajar sumbu harga.',
    'Penawaran tanah bersifat inelastis sempurna.',
    0
  ),
  nomorQuestion(
    'tryout4-20',
    'Tryout Paket 4',
    'Kurva garis anggaran bergeser sejajar ke kanan, berarti .…',
    '(1) Harga salah satu barang turun<br>(2) Pendapatan nominal meningkat<br>(3) Pendapatan riil menurun<br>(4) Daya beli meningkat',
    2
  )
]

// =====================================================================
// TRYOUT PAKET 5
// =====================================================================
const tryoutPaket5 = [
  {
    id: 'tryout5-1',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Kegiatan ekonomi di negara Alengka ditentukan oleh pemerintah dan seluruh faktor produksi dimiliki oleh negara. Peranan masyarakat hampir tidak terlihat karena peranan pemerintah sangat dominan, dapat dikatakan bahwa negara Alengka menganut sistem ekonomi .…',
    options: ['campuran', 'tradisional', 'pasar', 'kerakyatan', 'sosialis'],
    answer: 'sosialis'
  },
  {
    id: 'tryout5-2',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Kenaikan selera masyarakat terhadap suatu barang dan perbaikan cara memproduksi barang tersebut akan memengaruhi pasar. Pengaruh tersebut dicerminkan oleh kurva permintaan dan penawaran .…',
    options: [
      'Bergeser ke kanan dan kurva penawaran bergeser ke kanan',
      'Bergeser ke kanan dan kurva penawaran bergeser ke kiri',
      'Bergeser ke kiri dan kurva penawaran bergeser ke kanan',
      'Bergeser ke kiri dan kurva penawaran bergeser ke kiri',
      'Bergeser ke kiri dan kurva penawaran tetap'
    ],
    answer: 'Bergeser ke kanan dan kurva penawaran bergeser ke kanan'
  },
  {
    id: 'tryout5-3',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Di Indonesia, ketersediaan barang pengganti bahan bakar kendaraan bermotor sangat sedikit. Oleh karena itu, permintaan terhadap bahan bakar kendaraan bermotor ....',
    options: [
      'cenderung bersifat elastis terhadap perubahan harga',
      'cenderung bersifat inelastis terhadap perubahan harga',
      'akan turun banyak ketika harganya naik sedikit',
      'akan naik banyak ketika harga mobil naik',
      'akan turun ketika harga sepeda motor turun'
    ],
    answer: 'cenderung bersifat inelastis terhadap perubahan harga'
  },
  {
    id: 'tryout5-4',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pernyataan berikut yang paling tepat berkaitan dengan kurva indiferensi (IC) adalah .…',
    options: [
      'IC adalah kurva yang menunjukkan tingkat konsumsi sama dari berbagai kombinasi dua macam faktor produksi',
      'IC adalah kurva yang menunjukkan tingkat produksi sama dari berbagai kombinasi dua macam faktor produksi',
      'Keseimbangan konsumen terjadi ketika IC bersinggungan dengan kurva anggaran (budget line/BL)',
      'Semakin tinggi pendapatan konsumen, IC akan bergeser ke kanan dengan BL yang sama',
      'Semakin tinggi pendapatan konsumen, IC akan bergeser ke kiri dengan BL yang sama'
    ],
    answer: 'Keseimbangan konsumen terjadi ketika IC bersinggungan dengan kurva anggaran (budget line/BL)'
  },
  {
    id: 'tryout5-5',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Kurva biaya marginal (MC) memotong kurva biaya rata-rata (AC) pada saat kurva ....',
    options: ['AC menurun', 'AC minimum', 'AC menaik', 'MC menurun', 'MC minimum'],
    answer: 'AC minimum'
  },
  {
    id: 'tryout5-6',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Berikut ini adalah kondisi di pasar oligopoli yang TIDAK sesuai dengan kondisi di pasar monopoli ....',
    options: [
      'sulit untuk masuk ke dalam industri',
      'perusahaan sebagai price maker',
      'perusahaan menetapkan harga di atas biaya marginal',
      'perusahaan dapat menghasilkan barang homogen',
      'perusahaan berproduksi pada saat MR = MC agar ruginya minimum'
    ],
    answer: 'perusahaan dapat menghasilkan barang homogen'
  },
  {
    id: 'tryout5-7',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Data yang digunakan untuk menghitung pertumbuhan ekonomi suatu negara adalah ….',
    options: [
      'produk domestik bruto berdasarkan harga berlaku',
      'produk domestik bruto berdasarkan harga konstan',
      'produk nasional neto minimal',
      'produk nasional neto riil',
      'pendapatan per kapita riil'
    ],
    answer: 'produk domestik bruto berdasarkan harga konstan'
  },
  {
    id: 'tryout5-8',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Salah satu fungsi APBN dan APBD adalah untuk penyediaan barang publik. Penyediaan barang publik termasuk fungsi ….',
    options: ['stabilisasi', 'desentralisasi', 'sentralisasi', 'alokasi', 'distribusi'],
    answer: 'alokasi'
  },
  sebabQuestion(
    'tryout5-9',
    'Tryout Paket 5',
    'Perkembangan ilmu ekonomi tidak dapat dipisahkan dari fakta bahwa manusia selalu berusaha memenuhi kebutuhan hidupnya yang tidak terbatas, namun berhadapan dengan sumber daya yang terbatas.',
    'Prinsip ekonomi adalah bagaimana pelaku ekonomi menentukan kegiatan yang seminimum mungkin untuk mendapatkan hasil yang maksimal.',
    0
  ),
  {
    id: 'tryout5-10',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Bila suatu transaksi mengakibatkan bertambahnya aset dan bertambahnya kewajiban, maka transaksi yang tepat dari pengaruh tersebut adalah . . . .',
    options: [
      'Dibeli persediaan barang dagang Rp8.500.000, dengan pembayaran tunai 40%, sisanya dibayar kemudian',
      'Diterima pendapatan sewa perlengkapan pesta Rp10.500.000 dengan pembayaran tunai 50%, sisanya 2 hari kemudian',
      'Diterima pendapatan sewa perlengkapan pesta Rp8.500.000 yang telah dilakukan 7 hari sebelumnya',
      'Diterima tunai pendapatan yang masih harus diterima Rp2.000.000',
      'Melakukan prive Rp10.000.000'
    ],
    answer: 'Dibeli persediaan barang dagang Rp8.500.000, dengan pembayaran tunai 40%, sisanya dibayar kemudian'
  },
  {
    id: 'tryout5-11',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Pada akhir tahun akun retur penjualan dan akun beban angkut pembelian masing-masing menunjukkan saldo debit sebesar Rp200.000,00 dan Rp2.000.000,00. Jurnal yang diperlukan untuk menutup akun-akun tersebut adalah ….',
    options: [
      '(D) Ikhtisar Laba-Rugi Rp2.200.000,00; (K) Retur Penjualan Rp200.000,00; (K) Beban Angkut Rp2.000.000,00',
      '(D) Ikhtisar Laba-Rugi Rp1.800.000,00; (D) Retur Penjualan Rp200.000,00; (K) Beban Angkut Rp2.000.000,00',
      '(D) Beban Angkut Rp2.000.000,00; (K) Retur Penjualan Rp200.000,00; (K) Ikhtisar Laba-Rugi Rp1.800.000,00',
      '(D) Beban Angkut Rp2.000.000,00; (D) Retur Penjualan Rp200.000,00; (K) Ikhtisar Laba-Rugi Rp2.000.000,00',
      '(D) Beban Angkut dan Retur Penjualan Rp2.200.000,00; (K) Ikhtisar Laba-Rugi Rp2.200.000,00'
    ],
    answer: '(D) Ikhtisar Laba-Rugi Rp2.200.000,00; (K) Retur Penjualan Rp200.000,00; (K) Beban Angkut Rp2.000.000,00'
  },
  sebabQuestion(
    'tryout5-12',
    'Tryout Paket 5',
    'Untuk mengendalikan inflasi, Bank Indonesia dapat melakukan kebijakan moneter ekspansif dengan menjual Surat Berharga Pasar Uang (SBPU) dan Sertifikat Bank Indonesia (SBI).',
    'Bank Indonesia mempunyai tugas antara lain menjaga nilai rupiah.',
    0
  ),
  sebabQuestion(
    'tryout5-13',
    'Tryout Paket 5',
    'Dalam pasar persaingan sempurna harga ditentukan oleh permintaan dan penawaran.',
    'Dalam jangka pendek keuntungan maksimum dalam pasar persaingan sempurna akan diperoleh pada saat Marginal Revenue sama dengan Marginal Cost (MR = MC).',
    1
  ),
  nomorQuestion(
    'tryout5-14',
    'Tryout Paket 5',
    'Data yang ada dalam neraca pembayaran diperlukan dalam penghitungan ….',
    '(1) pertumbuhan ekonomi<br>(2) pendapatan nasional dengan metode penerimaan<br>(3) laju inflasi<br>(4) jumlah cadangan devisa',
    3
  ),
  nomorQuestion(
    'tryout5-15',
    'Tryout Paket 5',
    'Kekurangan badan usaha dalam bentuk perseroan terbatas adalah ….',
    '(1) tanggung jawab yang terbatas dapat menyebabkan pemegang saham kurang memperhatikan keadaan badan usaha<br>(2) saham-saham perusahaan sulit diperdagangkan sehingga dapat menimbulkan spekulasi bagi pemegangnya<br>(3) kurang terjaminnya rahasia karena ada kewajiban manajemen melaporkan kepada pemegang saham<br>(4) dividen yang diterima oleh pemegang saham dikenai pajak penghasilan yang cukup tinggi',
    1
  ),
  {
    id: 'tryout5-16',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Seorang karyawan senior bekerja sangat baik dalam hal interaksi dengan rekan-rekan kerja dan membuat mereka bersemangat dalam kerja. Karyawan tersebut mempunyai kelebihan dalam hal .…',
    options: ['Human relations skills', 'Technical skills', 'Accounting skills', 'Conceptual skills', 'Communication skills'],
    answer: 'Human relations skills'
  },
  sebabQuestion(
    'tryout5-17',
    'Tryout Paket 5',
    'Fungsi biaya produksi sebuah perusahaan dalam jangka panjang selalu terdiri dari biaya tetap (fixed cost) dan biaya variabel (variable cost).',
    'Fungsi biaya produksi disebut jangka panjang jika perusahaan tersebut telah berproduksi lebih dari 10 tahun.',
    4
  ),
  {
    id: 'tryout5-18',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Karakteristik yang TIDAK sesuai dengan kondisi pasar oligopoli adalah .…',
    options: [
      'Jumlah produsen dalam industri sedikit',
      'Perusahaan tidak akan menderita rugi',
      'Sulit untuk masuk ke dalam industri',
      'Perusahaan bertindak sebagai price maker',
      'Dihasilkan barang homogen dan barang diferensiasi'
    ],
    answer: 'Perusahaan tidak akan menderita rugi'
  },
  {
    id: 'tryout5-19',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Sumber Anggaran Pendapatan dan Belanja Daerah terdapat pada setiap provinsi di Indonesia, kecuali …',
    options: ['Pendapatan Asli Daerah (PAD)', 'Dana Alokasi Umum (DAU)', 'Dana Alokasi Khusus (DAK)', 'Dana Otonomi Khusus (DOK)', 'Dana Bagi Hasil (DBH)'],
    answer: 'Dana Otonomi Khusus (DOK)'
  },
  {
    id: 'tryout5-20',
    category: 'Tryout Paket 5',
    type: 'single',
    question: 'Perusahaan memiliki persediaan barang dagang awal dan akhir masing-masing sebesar Rp7.500.000,00 dan Rp10.000.000,00. Selain itu, perusahaan juga membeli perlengkapan sebesar Rp5.000.000,00 dan yang telah terpakai sebesar Rp3.000.000,00. Berdasarkan informasi tersebut, besarnya nilai aset lancar yang tercatat dalam laporan posisi keuangan akhir periode .…',
    options: ['Rp12.000.000,00', 'Rp13.000.000,00', 'Rp15.000.000,00', 'Rp19.500.000,00', 'Rp22.500.000,00'],
    answer: 'Rp12.000.000,00'
  }
]

export const questionsByCategory = {
  prediksiPaket1,
  prediksiPaket2,
  prediksiPaket3,
  prediksiPaket4,
  tryoutPaket1,
  tryoutPaket2,
  tryoutPaket3,
  tryoutPaket4,
  tryoutPaket5
}

// Gabungan seluruh 180 soal, urut sesuai dokumen sumber
// (Paket Prediksi TKA InfiEdu Ekonomi - 4 Paket Prediksi + 5 Paket Tryout, @20 soal)
const fulltestQuestions = [
  ...prediksiPaket1,
  ...prediksiPaket2,
  ...prediksiPaket3,
  ...prediksiPaket4,
  ...tryoutPaket1,
  ...tryoutPaket2,
  ...tryoutPaket3,
  ...tryoutPaket4,
  ...tryoutPaket5
]

export default fulltestQuestions