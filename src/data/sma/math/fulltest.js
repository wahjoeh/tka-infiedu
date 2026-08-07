import sistemPertidaksamaanDaerah from '/images/sma/math/sistem-pertidaksamaan-daerah-arsir.png'
import daerahPenyelesaianLima from '/images/sma/math/daerah-penyelesaian-lima-wilayah.png'
import buketBungaDiagram from '/images/sma/math/buket-bunga-diagram.png'
import fungsiFGrafik from '/images/sma/math/fungsi-f-grafik.png'
import garisSudutBerpotongan from '/images/sma/math/garis-sudut-berpotongan.png'
import bangunRuangGabungan from '/images/sma/math/bangun-ruang-gabungan.png'
import tamanTrapesium4Daerah from '/images/sma/math/taman-trapesium-4-daerah.png'
import segitigaAbcTitikB from '/images/sma/math/segitiga-abc-titik-b.png'
import segitigaAbcVektor from '/images/sma/math/segitiga-abc-vektor.png'
import trigonometriSegitigaSiku from '/images/sma/math/trigonometri-segitiga-siku.png'
import sudutKoordinatKartesius from '/images/sma/math/sudut-koordinat-kartesius.png'
import histogramNilaiMatematika from '/images/sma/math/histogram-nilai-matematika.png'
import barisanSiswaUpacara from '/images/sma/math/barisan-siswa-upacara.jpeg'
import kapalRumahSakitApung from '/images/sma/math/kapal-rumah-sakit-apung.jpeg'
import PakAgung from '/images/sma/math/pakagung.png'
import Rika from '/images/sma/math/rika.png'


// Gambar per-opsi (setiap opsi jawaban memuat gambarnya sendiri)
import vennOpsiA from '/images/sma/math/venn-opsi-a.png'
import vennOpsiB from '/images/sma/math/venn-opsi-b.png'
import vennOpsiC from '/images/sma/math/venn-opsi-c.png'
import vennOpsiD from '/images/sma/math/venn-opsi-d.png'
import vennOpsiE from '/images/sma/math/venn-opsi-e.png'

import inversGrafikOpsiA from '/images/sma/math/invers-grafik-opsi-a.png'
import inversGrafikOpsiB from '/images/sma/math/invers-grafik-opsi-b.png'
import inversGrafikOpsiC from '/images/sma/math/invers-grafik-opsi-c.png'
import inversGrafikOpsiD from '/images/sma/math/invers-grafik-opsi-d.png'
import inversGrafikOpsiE from '/images/sma/math/invers-grafik-opsi-e.png'

import titikBOpsiA from '/images/sma/math/titik-b-opsi-a.png'
import titikBOpsiB from '/images/sma/math/titik-b-opsi-b.png'
import titikBOpsiC from '/images/sma/math/titik-b-opsi-c.png'
import titikBOpsiD from '/images/sma/math/titik-b-opsi-d.png'
import titikBOpsiE from '/images/sma/math/titik-b-opsi-e.png'

import segitigaAbcOpsiA from '/images/sma/math/segitiga-abc-opsi-a.png'
import segitigaAbcOpsiB from '/images/sma/math/segitiga-abc-opsi-b.png'
import segitigaAbcOpsiC from '/images/sma/math/segitiga-abc-opsi-c.png'
import segitigaAbcOpsiD from '/images/sma/math/segitiga-abc-opsi-d.png'
import segitigaAbcOpsiE from '/images/sma/math/segitiga-abc-opsi-e.png'

// Bungkus setiap gambar opsi dalam tag <img>, supaya bisa dirender lewat
// v-html di dalam <span> pada label opsi (lihat SMAMathTestView.vue).
const optionImage = (src, label) =>
  `<img src="${src}" alt="${label}" class="option-image" />`

// =====================================================================
// TABEL BANTUAN (dipakai lebih dari satu soal)
// =====================================================================
const tabelKursusRika = `
<table class="data-table">
  <thead>
    <tr><th>Nama</th><th>Nilai Rapor</th><th>Uang yang Dimiliki</th></tr>
  </thead>
  <tbody>
    <tr><td>Andre</td><td>90</td><td>Rp885.000</td></tr>
    <tr><td>Brian</td><td>92</td><td>Rp786.000</td></tr>
    <tr><td>Cesa</td><td>89</td><td>Rp980.000</td></tr>
    <tr><td>Dani</td><td>85</td><td>Rp787.000</td></tr>
  </tbody>
</table>
`.trim()

const tabelHasilPanen = `
<table class="data-table">
  <thead>
    <tr><th>Tahun</th><th>Kelompok A</th><th>Kelompok B</th><th>Kelompok C</th></tr>
  </thead>
  <tbody>
    <tr><td>2018</td><td>52</td><td>48</td><td>50</td></tr>
    <tr><td>2019</td><td>55</td><td>50</td><td>52</td></tr>
    <tr><td>2020</td><td>58</td><td>54</td><td>56</td></tr>
    <tr><td>2021</td><td>60</td><td>58</td><td>60</td></tr>
    <tr><td>2022</td><td>62</td><td>60</td><td>58</td></tr>
    <tr><td>2023</td><td>65</td><td>60</td><td>61</td></tr>
    <tr><td>2024</td><td>64</td><td>62</td><td>65</td></tr>
    <tr><td>2025</td><td>68</td><td>64</td><td>70</td></tr>
  </tbody>
</table>
`.trim()

const tabelBeratBadan = `
<table class="data-table">
  <thead>
    <tr><th>Berat Badan (kg)</th><th>Frekuensi</th></tr>
  </thead>
  <tbody>
    <tr><td>40 - 45</td><td>5</td></tr>
    <tr><td>46 - 51</td><td>6</td></tr>
    <tr><td>52 - 57</td><td>10</td></tr>
    <tr><td>58 - 63</td><td>12</td></tr>
    <tr><td>64 - 69</td><td>7</td></tr>
  </tbody>
</table>
`.trim()

const tabelPenontonFutsal = `
<table class="data-table">
  <thead>
    <tr><th>Hari</th><th>Senin</th><th>Selasa</th><th>Rabu</th><th>Kamis</th><th>Jumat</th></tr>
  </thead>
  <tbody>
    <tr><td>Jumlah Penonton</td><td>80</td><td>m</td><td>100</td><td>n</td><td>120</td></tr>
  </tbody>
</table>
`.trim()

// =====================================================================
// BILANGAN
// =====================================================================
const bilangan = [
  {
    id: 'bilangan-1',
    category: 'Bilangan',
    type: 'single',
    stimulus: {
      instruction: 'Diberikan tiga himpunan berikut:<br> A = {x | 2 < x ≤ 5, x ∈ bilangan asli}<br> B = {x | x < 10, x ∈ bilangan prima}<br> C = {x | x^2 < 30, x ∈ bilangan bulat}'
    },
    question: 'Berdasarkan himpunan-himpunan tersebut, hasil dari (C - A) ∩ B adalah...',
    options: [
      '{-5, -4, -3, -2, -1, 0, 1, 2, 3, 5, 7}',
      '{2}',
      '{1, 2, 3, 4, 5}',
      '{2, 3}',
      '{-5, -4, -3, -2, -1, 0, 1, 3, 5, 7}'
    ],
    answer: '{2}'
  },
  {
    id: 'bilangan-2',
    category: 'Bilangan',
    type: 'single',
    stimulus: {
      instruction: 'Diberikan tiga himpunan berikut:<br> A = {x | 2 < x ≤ 5, x ∈ bilangan asli}<br> B = {x | x < 10, x ∈ bilangan prima}<br> C = {x | x^2 < 30, x ∈ bilangan bulat}<br>dengan semesta S merupakan bilangan bulat.'
    },
    question: 'Diagram Venn yang tepat menggambarkan himpunan A, B, C tersebut adalah...',
    options: [
      optionImage(vennOpsiA, 'Opsi A'),
      optionImage(vennOpsiB, 'Opsi B'),
      optionImage(vennOpsiC, 'Opsi C'),
      optionImage(vennOpsiD, 'Opsi D'),
      optionImage(vennOpsiE, 'Opsi E')
    ],
    answer: optionImage(vennOpsiA, 'Opsi A')
  },
  {
    id: 'bilangan-3',
    category: 'Bilangan',
    type: 'single',
    question: 'Bentuk sederhana dari (32^{4/5} × 3^{2/3}) / (9^{5/6} × 16^{6/2}) adalah...',
    options: ['12', '16', '1/12', '1/2', '1'],
    answer: '1/12'
  },
  {
    id: 'bilangan-4',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Operasi biner # didefinisikan sebagai a # b = ((a + b)^2 - 2ab - 2b^2) / (a - b). Jika x # 2 = 7, tentukan Benar atau Salah pada setiap pernyataan berikut!',
    statements: [
      'x merupakan bilangan ganjil',
      'x # 5 = 11',
      'x adalah salah satu faktor prima dari 35'
    ],
    answer: [true, false, true]
  },
  {
    id: 'bilangan-5',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Misalkan p adalah hasil dari operasi 3/(√5 - √2) - √5 + 4^{3/4}. Pilih pernyataan berikut yang bernilai benar!',
    statements: [
      'Nilai dari p^2 = 18',
      'Bentuk sederhana dari p adalah 3√2',
      'p adalah bilangan genap',
      'p adalah bilangan prima',
      'p bukanlah bilangan rasional'
    ],
    answer: [true, true, false, false, true]
  },
  {
    id: 'bilangan-6',
    category: 'Bilangan',
    type: 'single',
    stimulus: {
      instruction: 'Misalkan 2ab8 adalah sebuah bilangan asli (dengan a dan b masing-masing sebuah digit) dengan ciri-ciri berikut:<br>• habis dibagi 4<br>• jika dibulatkan ke ribuan terdekat menjadi 3000<br>• a dan b adalah bilangan prima '
    },
    question: 'Berapakah nilai a + b yang mungkin?',
    options: ['4', '5', '9', '10', '11'],
    answer: '9'
  },
  {
    id: 'bilangan-7',
    category: 'Bilangan',
    type: 'single',
    question: 'Hasil dari 20 + (1/4 - 1/12) × 0,6 adalah...',
    options: ['20,2', '20,3', '22,2', '21,3', '21,2'],
    answer: '20,2'
  }
]

// =====================================================================
// ALJABAR
// =====================================================================
const aljabar = [
  {
    id: 'aljabar-1',
    category: 'Aljabar',
    type: 'single',
    question: 'Seorang peneliti memodelkan peningkatan suhu akibat pemanasan global dengan fungsi linear y = 0,02x - 39,9, dengan x mewakili tahun dan y mewakili peningkatan suhu (°C) pada tahun tersebut. Jika suhu rata-rata global pada tahun 2010 adalah 14,63°C, berapakah perkiraan suhu bumi pada tahun 2020?',
    options: ['15,11°C', '15,12°C', '15,13°C', '15,14°C', '15,15°C'],
    answer: '15,13°C'
  },
  {
    id: 'aljabar-2',
    category: 'Aljabar',
    type: 'single',
    question: 'Seorang peneliti memodelkan peningkatan suhu akibat pemanasan global dengan fungsi linear y = 0,02x - 39,9, dengan x mewakili tahun dan y mewakili peningkatan suhu (°C) pada tahun tersebut. Pada tahun berapakah peningkatan suhu diperkirakan mencapai 0,6°C?',
    options: ['Tahun 2021', 'Tahun 2022', 'Tahun 2050', 'Tahun 2025', 'Tahun 2019'],
    answer: 'Tahun 2025'
  },
  {
    id: 'aljabar-3',
    category: 'Aljabar',
    type: 'truefalse',
    stimulus: {
      instruction: 'Tempat Les Bimbelku memberikan potongan biaya kursus kepada 50 pendaftar pertama. Biaya kursus setelah potongan pertama dinyatakan oleh fungsi dibawah,<br>Rika adalah seorang pendaftar ke-50 dengan rata-rata nilai rapot 93 membayar kursus tersebut sebesar Rp637.500. setelah itu datang empat siswa lainnya yang juga akan mengikuti kursus dengan informasi berikut',
      image: Rika, 
      paragraphs: [tabelKursusRika]
    },
    question: 'Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    statements: [
      'Biaya kursus sebelum ada potongan biaya adalah sebesar Rp1.000.000',
      'Rika memperoleh total diskon sebesar 35%'
    ],
    answer: [true, false]
  },
  {
    id: 'aljabar-4',
    category: 'Aljabar',
    type: 'single',
    stimulus: {
      instruction: 'Tempat Les Bimbelku memberikan potongan biaya kursus kepada 50 pendaftar pertama. Biaya kursus setelah potongan pertama dinyatakan oleh fungsi dibawah,<br>Rika adalah seorang pendaftar ke-50 dengan rata-rata nilai rapot 93 membayar kursus tersebut sebesar Rp637.500. setelah itu datang empat siswa lainnya yang juga akan mengikuti kursus dengan informasi berikut',
      image: Rika, 
      paragraphs: [tabelKursusRika]
    },
    question: 'Dengan uang yang dimiliki, siapakah siswa yang pasti dapat mengikuti kursus?',
    options: ['Cesa', 'Andre dan Cesa', 'Andre, Brian, Cesa', 'Andre, Brian, Cesa, Dani', 'Tidak ada yang dapat mengikuti kursus'],
    answer: 'Andre, Brian, Cesa'
  },
  {
    id: 'aljabar-5',
    category: 'Aljabar',
    type: 'truefalse',
    question: 'Sebuah gedung pertunjukan memiliki jumlah kursi pada setiap baris yang membentuk barisan aritmetika. Baris pertama terdiri atas 20 kursi. Setiap baris berikutnya memiliki 4 kursi lebih banyak daripada baris sebelumnya. Pilih pernyataan berikut yang bernilai benar!',
    statements: [
      'Jumlah kursi pada baris ke-5 adalah 36',
      'Jumlah kursi pada baris ke-8 adalah 45',
      'Jumlah kursi pada baris ke-10 adalah 56',
      'Selisih jumlah kursi antara baris ke-12 dan baris ke-7 adalah 20',
      'Total kursi dari baris pertama hingga baris ketiga adalah 70 kursi'
    ],
    answer: [true, false, true, true, false]
  },
  {
    id: 'aljabar-6',
    category: 'Aljabar',
    type: 'single',
    stimulus: {
      instruction: 'Seorang pasien mengonsumsi obat tertentu. Setelah diminum, kadar zat aktif obat dalam tubuh pada hari pertama adalah 80 mg. Setiap hari tubuh menguraikan 30% zat aktif yang masih tersisa.<br>Dokter memberikan ketentuan:<br>• Obat masih bekerja efektif jika kadar zat aktif minimal 20 mg<br>• Pasien diperbolehkan mengonsumsi dosis berikutnya jika kadar zat aktif kurang dari 35 mg. ',
    },
    question: 'Pada hari keberapa obat masih bekerja efektif, tetapi pasien sudah diperbolehkan mengonsumsi dosis berikutnya?',
    options: ['Hari ke-2', 'Hari ke-3', 'Hari ke-4', 'Hari ke-5', 'Hari ke-6'],
    answer: 'Hari ke-4'
  },
  {
    id: 'aljabar-7',
    category: 'Aljabar',
    type: 'single',
    question: 'Seorang peneliti melakukan pengamatan terhadap bakteri tertentu. Setiap 1/2 hari bakteri membelah diri menjadi dua. Pada awal pengamatan terdapat 2 bakteri. Jika setiap 2 hari 1/4 dari jumlah bakteri mati, banyak bakteri setelah lima hari adalah...',
    options: ['120 bakteri', '188 bakteri', '288 bakteri', '128 bakteri', '192 bakteri'],
    answer: '288 bakteri'
  },
  {
    id: 'aljabar-8',
    category: 'Aljabar',
    type: 'single',
    question: 'Dalam sebuah pertunjukan pentas seni, panitia menata kursi penonton menjadi 12 baris di depan panggung. Jumlah kursi pada setiap baris semakin ke belakang semakin banyak dengan selisih yang tetap. Ketika acara dimulai, semua kursi telah terisi. Diketahui jumlah penonton pada baris keempat adalah 16 orang dan pada baris kesepuluh adalah 28 orang. Berapakah jumlah seluruh penonton yang hadir pada pertunjukan tersebut?',
    options: ['240', '245', '250', '251', '252'],
    answer: '252'
  },
  {
    id: 'aljabar-9',
    category: 'Aljabar',
    type: 'single',
    stimulus: {
      instruction: 'Daerah yang diarsir pada gambar merupakan himpunan penyelesaian dari suatu sistem pertidaksamaan.',
      image: sistemPertidaksamaanDaerah
    },
    question: 'Daerah yang diarsir pada gambar merupakan himpunan penyelesaian dari sistem pertidaksamaan...',
    options: [
      '3x + 4y ≤ 0 ; x - 2y ≤ -2 ; x ≥ 0',
      '4x + 3y ≤ 12 ; -2x + y ≥ -2 ; x ≥ 0',
      '4x + 3y ≤ 12 ; -2x + y ≥ -2 ; y ≥ 0',
      '4x + 3y ≤ 12 ; -2x + y ≤ -2 ; x ≥ 0',
      '4x + 3y ≤ 12 ; x - 2y ≥ -2 ; x ≥ 0'
    ],
    answer: '4x + 3y ≤ 12 ; -2x + y ≥ -2 ; x ≥ 0'
  },
  {
    id: 'aljabar-10',
    category: 'Aljabar',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan beberapa daerah I, II, III, IV, dan V berikut ini.',
      image: daerahPenyelesaianLima
    },
    question: 'Penyelesaian dari sistem pertidaksamaan y ≥ 2x ; y - 4x ≤ 1 ; 3x + 4y ≥ 12 ditunjukkan oleh daerah...',
    options: ['I', 'II', 'III', 'IV', 'V'],
    answer: 'II'
  },
  {
    id: 'aljabar-11',
    category: 'Aljabar',
    type: 'truefalse',
    stimulus: {
      instruction: 'Bu Ratri adalah seorang perangkai bunga yang menyusun berbagai jenis buket bunga dari bunga mawar, lili, dan anyelir. Harga buket ditentukan dari total harga bunga yang digunakan. Tiga jenis buket yang biasa ia siapkan beserta komposisi dan harganya ditunjukkan pada gambar berikut.',
      image: buketBungaDiagram
    },
    question: 'Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    statements: [
      'Harga setangkai bunga mawar adalah Rp16.000',
      'Jika membeli buket dengan variasi 2 tangkai bunga lili dan 1 tangkai bunga anyelir, maka total harganya adalah Rp35.000',
      'Harga setangkai bunga lili lebih murah dari harga bunga mawar'
    ],
    answer: [true, false, true]
  },
  {
    id: 'aljabar-12',
    category: 'Aljabar',
    type: 'single',
    question: 'Diketahui fungsi f(x) = x^2 + x + 1 dan g(x) = 2x - 3. Fungsi komposisi (f ° g)(x) adalah...',
    options: ['4x^2 - 10x + 7', '4x^2 - 10x + 5', '4x^2 - 9x + 7', '2x^2 - 2x - 1', '2x^2 + 2x - 1'],
    answer: '4x^2 - 10x + 7'
  },
  {
    id: 'aljabar-13',
    category: 'Aljabar',
    type: 'single',
    question: 'Domain dari fungsi z(x) = √(2x - 8) / (x - 1) adalah...',
    options: [
      '{x | x ≥ 4, x ≠ 1, x ∈ ℝ}',
      '{x | x ≥ 4, x ≠ -1, x ∈ ℝ}',
      '{x | x ≥ 1, x ≠ 4, x ∈ ℝ}',
      '{x | x ≥ -4, x ≠ 1, x ∈ ℝ}',
      '{x | x ≥ -4, x ≠ -1, x ∈ ℝ}'
    ],
    answer: '{x | x ≥ 4, x ≠ 1, x ∈ ℝ}'
  },
  {
    id: 'aljabar-14',
    category: 'Aljabar',
    type: 'truefalse',
    question: 'Sebuah pabrik roti melakukan dua tahap produksi: mengolah tepung menjadi adonan, lalu mengolah adonan menjadi roti siap jual. Banyak adonan yang dihasilkan dari x kg tepung mengikuti fungsi f(x) = (1/2)x + 10, sedangkan banyak roti yang dihasilkan dari y adonan mengikuti fungsi g(y) = 2y - 8. Pilih pernyataan berikut yang bernilai benar!',
    statements: [
      'Jika tersedia 10 kg tepung, banyak roti yang dihasilkan adalah 22 roti',
      '5 adonan roti bisa dibuat 2 roti',
      'Jika satu roti mendapatkan keuntungan Rp10.000, dan saat ini terdapat 8 kg tepung, maka penjual mendapatkan keuntungan sebesar Rp180.000',
      'Fungsi banyak roti terhadap banyak tepung adalah r(x) = x + 12',
      'Fungsi banyak roti terhadap banyak tepung adalah r(x) = x - 12'
    ],
    answer: [true, true, false, true, false]
  },
  {
    id: 'aljabar-15',
    category: 'Aljabar',
    type: 'single',
    question: 'Diketahui f(x) = (9x + 18)/(x + 3) ; x ≠ -2 dan f^{-1} adalah invers dari f(x). Jika f^{-1}(10) = a dan f^{-1}(b) = 0, berapakah nilai dari a + b?',
    options: ['6', '12', '-6', '0', '18'],
    answer: '-6'
  },
  {
    id: 'aljabar-16',
    category: 'Aljabar',
    type: 'single',
    stimulus: {
      instruction: 'Diberikan sebuah fungsi f dengan grafik seperti berikut.',
      image: fungsiFGrafik
    },
    question: 'Grafik berikut yang menunjukkan invers dari fungsi f adalah...',
    options: [
      optionImage(inversGrafikOpsiA, 'Opsi A'),
      optionImage(inversGrafikOpsiB, 'Opsi B'),
      optionImage(inversGrafikOpsiC, 'Opsi C'),
      optionImage(inversGrafikOpsiD, 'Opsi D'),
      optionImage(inversGrafikOpsiE, 'Opsi E')
    ],
    answer: optionImage(inversGrafikOpsiD, 'Opsi D')
  }
]

// =====================================================================
// GEOMETRI
// =====================================================================
const geometri = [
  {
    id: 'geometri-1',
    category: 'Geometri',
    type: 'truefalse',
    stimulus: { image: garisSudutBerpotongan },
    question: 'Berdasarkan gambar tersebut, tentukan Benar atau Salah setiap pasangan sudut berikut sebagai pasangan sudut berpasangan linear!',
    statements: [
      '∠A dan ∠F',
      '∠F dan ∠B',
      '∠A dan ∠C',
      '∠F dan ∠E',
      '∠E dan ∠D'
    ],
    answer: [false, true, false, true, true]
  },
  {
    id: 'geometri-2',
    category: 'Geometri',
    type: 'single',
    stimulus: { image: garisSudutBerpotongan },
    question: 'Jika m∠F = (2x - 20)° dan m∠C = (x + 10)°, berapakah besar ∠E?',
    options: ['140°', '150°', '120°', '115°', '100°'],
    answer: '140°'
  },
  {
    id: 'geometri-3',
    category: 'Geometri',
    type: 'truefalse',
    stimulus: { image: bangunRuangGabungan },
    question: 'Perhatikan ruas garis AB pada balok ABCD.EFGH. Pilih semua pernyataan yang benar!',
    statements: [
      'AB sejajar dengan EF',
      'AB sejajar dengan HE',
      'AB berpotongan dengan AE',
      'AB bersilangan dengan FG',
      'AB bersilangan dengan CD'
    ],
    answer: [true, false, true, true, false]
  },
  {
    id: 'geometri-4',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan pernyataan berikut:<br>(1) Jika dua ruas garis sejajar, maka keduanya tidak pernah berpotongan.<br>(2) Jika dua ruas garis tidak berpotongan, maka keduanya pasti sejajar.<br>(3) Dua ruas garis yang bersilangan tidak terletak pada bidang yang sama.<br>(4) Dua ruas garis yang berpotongan pasti terletak pada bidang yang sama.<br>(5) Dua ruas garis yang sejajar pasti terletak pada bidang yang sama. ',
    },
    question: 'Banyak pernyataan yang bernilai benar adalah...',
    options: ['0', '1', '2', '3', '4'],
    answer: '4'
  },
  {
    id: 'geometri-5',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Sebuah taman berbentuk trapesium akan dibagi menjadi 4 daerah dengan ukuran tampak seperti pada denah berikut (skala 1:30). Pada denah, panjang KL = 32 cm, KN = 16 cm, dan OP = 18 cm. Trapesium KLMN dan NMPO dibuat sebangun.',
      image: tamanTrapesium4Daerah
    },
    question: 'Jika pada sisi ON akan dipasang banner bertuliskan "TAMAN BUNGA", berapakah panjang maksimum banner yang dapat dibuat?',
    options: ['3 m', '3,1 m', '3,3 m', '3,5 m', '3,6 m'],
    answer: '3,6 m'
  },
  {
    id: 'geometri-6',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Sebuah taman berbentuk trapesium akan dibagi menjadi 4 daerah dengan ukuran tampak seperti pada denah berikut (skala 1:30). Pada denah, panjang KL = 32 cm, KN = 16 cm, dan OP = 18 cm. Trapesium KLMN dan NMPO dibuat sebangun.',
      image: tamanTrapesium4Daerah
    },
    question: 'Jika sekeliling taman diberi pagar, berapakah panjang pagar yang dapat dibuat?',
    options: [
      '(117 + 21√5)/5 m',
      '(117 + 20√5)/5 m',
      '(117 + 21√6)/5 m',
      '(117 + 22√5)/5 m',
      '(117 + 21√7)/5 m'
    ],
    answer: '(117 + 21√5)/5 m'
  },
  {
    id: 'geometri-7',
    category: 'Geometri',
    type: 'truefalse',
    stimulus: {
      instruction: 'Sebuah taman berbentuk trapesium dibagi menjadi 4 daerah seperti pada denah berikut (skala 1:30). Pada denah, panjang KL = 32 cm, KN = 16 cm, dan OP = 18 cm; trapesium KLMN dan NMPO sebangun. Setiap daerah ditanami jenis bunga berbeda: KRQN bunga mawar merah, NQPO bunga mawar putih, PQM bunga sepatu, dan RLMQ bunga lili.',
      image: tamanTrapesium4Daerah
    },
    question: 'Tentukan pernyataan berikut yang bernilai benar!',
    statements: [
      'Luas daerah bunga mawar merah pada denah adalah 288 cm^2',
      'Luas daerah bunga mawar putih pada denah adalah 216 cm^2',
      'Luas daerah bunga sepatu pada denah adalah 30 cm^2',
      'Luas daerah bunga lili pada denah adalah 160 cm^2',
      'Luas daerah bunga mawar merah dua kali luas daerah bunga lili'
    ],
    answer: [true, true, false, true, false]
  },
  {
    id: 'geometri-8',
    category: 'Geometri',
    type: 'single',
    question: 'Sebuah gudang berbentuk kubus dengan panjang rusuk 6 m. Titik-titik sudut gudang diberi nama ABCD.EFGH. Sebuah sensor suhu dipasang tepat di titik tengah rusuk EH dan diberi nama P. Sebuah kabel penghubung dipasang menghubungkan titik tengah rusuk BF dan titik tengah rusuk CG, masing-masing diberi nama Q dan R.<br>Untuk mengetahui jangkauan sensor terhadap kabel tersebut, teknisi perlu menghitung jarak terpendek dari sensor P ke kabel QR. Berapakah jarak tersebut?',
    options: ['3√7 m', '3√6 m', '3√5 m', '3√3 m', '2√3 m'],
    answer: '3√5 m'
  },
  {
    id: 'geometri-9',
    category: 'Geometri',
    type: 'single',
    question: 'Jika luas bidang diagonal sebuah kubus adalah 49√2 cm^2, volume kubus tersebut adalah...',
    options: ['340 cm^3', '343 cm^3', '216 cm^3', '512 cm^3', '125 cm^3'],
    answer: '343 cm^3'
  },
  {
    id: 'geometri-10',
    category: 'Geometri',
    type: 'truefalse',
    stimulus: {
      instruction: 'Pak Agung memiliki usaha dibidang pembuatan taman. Suatu hari pak Agung diminta untuk membuat sebuah taman kota. Sebelum membangun taman tersebut, pak Agung membuat rancangan taman seperti pada gambar berikut.',
      image: PakAgung
    },
    question: 'Pak Agung berencana membuat pagar hias di sekeliling taman tersebut. Berdasarkan hal tersebut, tentukan pernyataan berikut benar atau salah!',
    statements: [
      'Total panjang pagar hias yang mengelilingi taman tersebut adalah 80 m',
      'Selisih luas taman dan luas tempat parkir adalah 25 m^2',
      'Jika biaya perawatan dari taman tersebut adalah Rp25.000 per meter persegi, maka biaya total perawatan taman tersebut adalah Rp4.850.000'
    ],
    answer: [false, false, true]
  },
  {
    id: 'geometri-11',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Rumah sakit apung adalah fasilitas pelayanan medis bergerak yang beroperasi menggunakan kapal untuk menjangkau masyarakat di wilayah kepulauan, pesisir, dan daerah terpencil. Gambar berikut merupakan ilustrasi rute sekali perjalanan rumah sakit apung ke beberapa pulau.',
      image: kapalRumahSakitApung
    },
    question: 'Berdasarkan peta rute rumah sakit apung tersebut, jarak tempuh total Rumah Sakit Apung dalam sekali perjalanan adalah...',
    options: ['80 km', '81 km', '83 km', '84 km', '85 km'],
    answer: '84 km'
  },
  {
    id: 'geometri-12',
    category: 'Geometri',
    type: 'single',
  stimulus: {
    instruction: "(1) Perbandingan tinggi terhadap jari-jari 3:2<br>(2) Luas selimut tabung adalah 108π cm²"
  },
    question: 'Sebuah tabung memiliki volume 324π cm^3. Apakah luas permukaan tabung kurang dari 300π cm^2? Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup.',
      'DUA pernyataan bersama-sama cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.',
      'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.'
    ],
    answer: 'Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup.'
  },
  {
    id: 'geometri-13',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Titik B ditranslasikan oleh vektor (2, -3) kemudian dicerminkan terhadap sumbu-y sehingga menghasilkan bayangan B\' seperti pada gambar berikut.',
      image: segitigaAbcTitikB
    },
    question: 'Gambar titik B\' yang sesuai adalah...',
    options: [
      optionImage(titikBOpsiA, 'Opsi A'),
      optionImage(titikBOpsiB, 'Opsi B'),
      optionImage(titikBOpsiC, 'Opsi C'),
      optionImage(titikBOpsiD, 'Opsi D'),
      optionImage(titikBOpsiE, 'Opsi E')
    ],
    answer: optionImage(titikBOpsiE, 'Opsi E')
  },
  {
    id: 'geometri-14',
    category: 'Geometri',
    type: 'truefalse',
    question: 'Persamaan peta garis x - 2y = 4 dirotasikan dengan pusat O(0,0) sebesar 90° berlawanan arah jarum jam, kemudian dilanjutkan dengan pencerminan terhadap garis y = x. Identifikasi Benar atau Salah pernyataan berikut!',
    statements: [
      'Bayangan garis tersebut memotong sumbu x di titik (4,0)',
      'Bayangan garis dan peta garis saling berpotongan di titik (0,4)',
      'Bayangan garis dan peta garis saling sejajar'
    ],
    answer: [true, false, false]
  },
  {
    id: 'geometri-15',
    category: 'Geometri',
    type: 'single',
    stimulus: {
      instruction: 'Sebuah segitiga ABC digeser searah dengan vektor (-9, 0) kemudian dicerminkan terhadap sumbu-x, seperti pada gambar berikut.',
      image: segitigaAbcVektor
    },
    question: 'Bayangan segitiga ABC yang tepat ditunjukkan oleh gambar...',
    options: [
      optionImage(segitigaAbcOpsiA, 'Opsi A'),
      optionImage(segitigaAbcOpsiB, 'Opsi B'),
      optionImage(segitigaAbcOpsiC, 'Opsi C'),
      optionImage(segitigaAbcOpsiD, 'Opsi D'),
      optionImage(segitigaAbcOpsiE, 'Opsi E')
    ],
    answer: optionImage(segitigaAbcOpsiA, 'Opsi A')
  }
]

// =====================================================================
// TRIGONOMETRI
// =====================================================================
const trigonometri = [
  {
    id: 'trigonometri-1',
    category: 'Trigonometri',
    type: 'truefalse',
    stimulus: { image: trigonometriSegitigaSiku },
    question: 'Jika AB = 34, CD = 24, AB = BD, dan sin α = 15/17, tentukan Benar atau Salah pernyataan-pernyataan berikut!',
    statements: [
      'sin β = 0,6',
      'cos β = 3/5',
      'cos α + cos β = 108/85'
    ],
    answer: [true, false, true]
  },
  {
    id: 'trigonometri-2',
    category: 'Trigonometri',
    type: 'single',
    question: 'Diketahui cos β = a/(3b), nilai dari cot β = ...',
    options: [
      'a / √(9b^2 + a^2)',
      'b / √(9b^2 - a^2)',
      'a / √b',
      '(a / (9b^2 - a^2)) √(9b^2 - a^2)',
      '(a / (9b^2 - a^2)) √(9a^2 - b^2)'
    ],
    answer: '(a / (9b^2 - a^2)) √(9b^2 - a^2)'
  },
  {
    id: 'trigonometri-3',
    category: 'Trigonometri',
    type: 'single',
    question: 'Ekspresi berikut yang ekivalen dengan (sin x + cos x)^2 / cos x adalah...',
    options: ['sec x + 2 sin x', 'sec x + (1/2) sin x', '2 sec x + sin x', 'cosec x + 2 sin x', 'cosec x + 2 cos x'],
    answer: 'sec x + 2 sin x'
  },
  {
    id: 'trigonometri-4',
    category: 'Trigonometri',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan sudut yang terbentuk pada koordinat kartesius berikut.',
      image: sudutKoordinatKartesius
    },
    question: 'Perhatikan pernyataan-pernyataan berikut:<br>(1) Cosinus dari sudut tersebut bernilai positif.<br>(2) Sinus dari sudut tersebut bernilai negatif.<br>(3) Cosinus dari sudut tersebut nilainya sama dengan cos 330°.<br>(4) Sinus dari sudut tersebut nilainya sama dengan sin 60°.<br>(5) Jika sudut tersebut diputar 60° berlawanan arah jarum jam, maka akan memberikan nilai cosinus yang berbeda. Banyak pernyataan yang bernilai SALAH adalah...',
    options: ['0', '1', '2', '3', '4'],
    answer: '2'
  },
  {
    id: 'trigonometri-5',
    category: 'Trigonometri',
    type: 'single',
    question: 'Nilai dari cos 300° + cos 150° + cot 45° adalah...',
    options: ['1/2', '1/√3', '1', '(3 - √3)/2', '(3 + √3)/2'],
    answer: '(3 - √3)/2'
  },
  {
    id: 'trigonometri-6',
    category: 'Trigonometri',
    type: 'single',
    question: 'Jika cot θ = -3/2 (0° ≤ θ ≤ 180°), maka nilai dari (5 sin θ + 6 cos θ)/(2 cos θ - 3 sin θ) adalah...',
    options: ['2/3', '1/3', '1', '4/3', '5/3'],
    answer: '2/3'
  },
  {
    id: 'trigonometri-7',
    category: 'Trigonometri',
    type: 'single',
    question: 'Dalam segitiga siku-siku PQR, panjang PR adalah x satuan dan besar ∠PRQ = α. Tinggi t dari segitiga di atas (garis tinggi dari titik sudut siku-siku ke sisi PR) dapat dinyatakan sebagai...',
    options: ['x sin^2 α cos α', 'x^2 sin α cos^2 α', 'x sin α', 'x sin α cos α', 'x cos α'],
    answer: 'x sin α cos α'
  }
]

// =====================================================================
// DATA DAN PELUANG
// =====================================================================
const peluang = [
  {
    id: 'peluang-1',
    category: 'Data dan Peluang',
    type: 'truefalse',
    stimulus: {
      instruction: 'Tabel berikut menunjukkan hasil panen tiga kelompok tani selama beberapa tahun.',
      paragraphs: [tabelHasilPanen]
    },
    question: 'Pilih pernyataan yang benar berikut ini!',
    statements: [
      'Kelompok A mengalami tepat satu kali penurunan hasil panen.',
      'Kelompok B mengalami dua kali hasil panen yang tetap.',
      'Kelompok C selalu mengalami kenaikan hasil panen.',
      'Pada tahun 2022 hasil panen seluruh kelompok meningkat dibanding tahun sebelumnya.',
      'Tahun 2025 merupakan tahun dengan hasil panen tertinggi untuk ketiga kelompok.'
    ],
    answer: [true, true, false, false, true]
  },
  {
    id: 'peluang-2',
    category: 'Data dan Peluang',
    type: 'single',
    stimulus: {
      instruction: 'Tabel berikut merupakan data berat badan 40 siswa.',
      paragraphs: [tabelBeratBadan]
    },
    question: 'Rata-rata berat badan 40 siswa tersebut adalah...',
    options: ['43', '56', '52', '60', '50'],
    answer: '56'
  },
  {
    id: 'peluang-3',
    category: 'Data dan Peluang',
    type: 'single',
    stimulus: {
      instruction: 'Perhatikan histogram data nilai matematika siswa berikut.',
      image: histogramNilaiMatematika
    },
    question: 'Nilai matematika terbanyak (modus) yang diperoleh siswa adalah...',
    options: ['70,00', '71,38', '73,83', '78,83', '75,00'],
    answer: '73,83'
  },
  {
    id: 'peluang-4',
    category: 'Data dan Peluang',
    type: 'truefalse',
    stimulus: {
      instruction: 'Perhatikan data jumlah penonton pertandingan futsal antarkelas selama lima hari berikut. Diketahui bahwa rata-rata jumlah penonton per hari adalah 100 orang, jumlah penonton setiap hari berada antara 70 dan 130 orang, dan median data tersebut adalah 100.',
      paragraphs: [tabelPenontonFutsal]
    },
    question: 'Tentukan Benar atau Salah setiap pernyataan berikut.',
    statements: [
      'Jumlah penonton pada hari Selasa pasti lebih sedikit daripada hari Jumat.',
      'Jumlah penonton pada hari Kamis mungkin tepat 100 orang.',
      'Jumlah penonton pada hari Selasa dan Kamis mungkin sama banyak.'
    ],
    answer: [false, true, true]
  },
  {
    id: 'peluang-5',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Misal lima buah bilangan bulat diurutkan dari yang terkecil hingga terbesar, a ≤ b ≤ c ≤ d ≤ e. Jika rata-ratanya adalah 40, mediannya adalah 41, dan modus tunggalnya 42, nilai terkecil yang mungkin dari kelima bilangan tersebut adalah...',
    options: ['33', '34', '35', '36', '37'],
    answer: '35'
  },
  {
    id: 'peluang-6',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Sebuah platform pembelajaran daring menyediakan kode kelas yang terdiri atas 4 karakter. Karakter pertama harus berupa salah satu huruf vokal, dua karakter berikutnya berupa angka yang berbeda, dan karakter terakhir berupa salah satu huruf konsonan dari himpunan {B, C, D, F, G}. Banyak kode kelas yang dapat dibuat adalah...',
    options: ['9000', '1025', '1125', '1200', '2250'],
    answer: '2250'
  },
  {
    id: 'peluang-7',
    category: 'Data dan Peluang',
    type: 'single',
    stimulus: {
      instruction: 'Delapan siswa akan berbaris untuk mengikuti upacara. Dua di antaranya, Andi dan Budi, berdampingan (berurutan depan-belakang).',
      image: barisanSiswaUpacara
    },
    question: 'Banyak susunan yang mungkin adalah...',
    options: ['1.440', '2.880', '5.040', '7.200', '10.080'],
    answer: '10.080'
  },
  {
    id: 'peluang-8',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Sebuah kantong berisi 5 jeruk, 6 stroberi, dan 7 apel. Jika satu buah diambil secara acak dalam 42 percobaan, berapa kali diperkirakan buah stroberi yang akan terambil?',
    options: ['14', '17', '20', '10', '11'],
    answer: '14'
  },
  {
    id: 'peluang-9',
    category: 'Data dan Peluang',
    type: 'single',
    stimulus: {
      instruction: 'Sebuah toko memberikan hadiah kepada pelanggan melalui undian. Dalam sebuah kotak terdapat 20 kupon, terdiri atas:<br>• 8 kupon hadiah alat tulis<br>• 7 kupon hadiah buku<br>• 5 kupon hadiah voucher.'
    },
    question: 'Seorang pelanggan mengambil dua kupon secara acak tanpa pengembalian. Peluang pelanggan memperoleh setidaknya satu voucher adalah...',
    options: ['15/38', '17/38', '19/38', '21/38', '23/38'],
    answer: '17/38'
  }
]

export const questionsByCategory = {
  bilangan,
  aljabar,
  geometri,
  trigonometri,
  peluang
}

// Gabungan seluruh 54 soal, urut sesuai dokumen sumber (Naskah Soal TO TKA Matematika SMA InfiEdu)
const fulltestQuestions = [...bilangan, ...aljabar, ...geometri, ...trigonometri, ...peluang]

export default fulltestQuestions