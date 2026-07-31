import geometriBalok from '/images/smp/math/geometri-balok.jpg'
import geometriSegitigaBC from '/images/smp/math/geometri-segitiga-bc.jpg'
import geometriGarisPQ from '/images/smp/math/geometri-garis-pq.jpg'
import geometriSudutA from '/images/smp/math/geometri-sudut-a.jpg'
import geometriSegitigaABC from '/images/smp/math/geometri-segitiga-abc.jpg'
import dataDiagramHobi from '/images/smp/math/data-diagram-hobi.jpg'

const tabelResep = `
<table class="data-table">
  <thead>
    <tr><th>Makanan</th><th>Telur (butir)</th><th>Terigu (gram)</th><th>Gula (gram)</th><th>Porsi</th></tr>
  </thead>
  <tbody>
    <tr><td>Bolu Kukus</td><td>6</td><td>200</td><td>300</td><td>12</td></tr>
    <tr><td>Kue Pisang</td><td>2</td><td>100</td><td>180</td><td>8</td></tr>
    <tr><td>Kue Cokelat</td><td>3</td><td>150</td><td>240</td><td>10</td></tr>
  </tbody>
</table>
`.trim()

const tabelMediaSosial = `
<table class="data-table">
  <thead>
    <tr><th>Media Sosial</th><th>2024</th><th>2025</th></tr>
  </thead>
  <tbody>
    <tr><td>Youtube</td><td>88%</td><td>94%</td></tr>
    <tr><td>Instagram</td><td>84%</td><td>88%</td></tr>
    <tr><td>Facebook</td><td>82%</td><td>87%</td></tr>
    <tr><td>Whatsapp</td><td>75%</td><td>78%</td></tr>
    <tr><td>TikTok</td><td>25%</td><td>39%</td></tr>
  </tbody>
</table>
`.trim()

const tabelUsiaKlub = `
<table class="data-table">
  <thead>
    <tr><th>Usia</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th></tr>
  </thead>
  <tbody>
    <tr><td>Frekuensi</td><td>4</td><td>5</td><td>8</td><td>6</td><td>7</td></tr>
  </tbody>
</table>
`.trim()

// =====================================================================
// ALJABAR
// =====================================================================
const aljabar = [
  {
    id: 'aljabar-1',
    category: 'Aljabar',
    type: 'multiple',
    question: 'Diketahui persamaan x^2 - 5x + 6 = 0. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Akar-akar persamaan x = 2 dan x = 3',
      'Akar-akar persamaan x = 2 dan x = -3',
      'Jumlah akar adalah 5',
      'Jumlah akar adalah -1'
    ],
    answer: ['Akar-akar persamaan x = 2 dan x = 3', 'Jumlah akar adalah 5']
  },
  {
    id: 'aljabar-2',
    category: 'Aljabar',
    type: 'multiple',
    question: 'Jika x = 4 dan y = 3, maka pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: ['x + y = 7', '-x + y = -1', '2x - 2y = -2', '2x - 3y = 1'],
    answer: ['x + y = 7', '-x + y = -1']
  },
  {
    id: 'aljabar-3',
    category: 'Aljabar',
    type: 'single',
    question: 'Bentuk sederhana dari (2x^2 - 3x + 5) - (x^2 - 2x - 4) adalah...',
    options: ['x^2 - x + 9', 'x^2 - x - 9', 'x^2 - 5x + 1', '3x^2 - 5x + 1'],
    answer: 'x^2 - x + 9'
  },
  {
    id: 'aljabar-4',
    category: 'Aljabar',
    type: 'single',
    question: 'Diketahui suatu deret aritmatika memiliki U_1 = 6 dan b = 3. Jumlah 10 suku pertama adalah...',
    options: ['110', '137', '195', '390'],
    answer: '195'
  },
  {
    id: 'aljabar-5',
    category: 'Aljabar',
    type: 'single',
    question: 'Jika suatu deret aritmatika memiliki U_1 = 7 dan b = 4, maka 4 suku pertamanya adalah...',
    options: ['4, 7, 10, 13', '4, 8, 12, 16', '7, 9, 11, 13', '7, 11, 15, 19'],
    answer: '7, 11, 15, 19'
  },
  {
    id: 'aljabar-6',
    category: 'Aljabar',
    type: 'single',
    question: 'Persamaan garis yang melalui (1, -5) dan (-2, 4) adalah...',
    options: ['y = 3x + 2', 'y = 3x - 2', 'y = -3x + 2', 'y = -3x - 2'],
    answer: 'y = -3x - 2'
  },
  {
    id: 'aljabar-7',
    category: 'Aljabar',
    type: 'single',
    question: 'Persamaan garis yang melalui (2, -7) dan tegak lurus terhadap 4x - 3y + 8 = 0 adalah...',
    options: ['3x + 4y = -22', '-3x - 4y = 21', '4x + 3y = 28', '4x - 3y = -33'],
    answer: '3x + 4y = -22'
  },
  {
    id: 'aljabar-8',
    category: 'Aljabar',
    type: 'single',
    question: 'Kemiringan garis lurus yang melalui (2, 4) dan (-4, 10) adalah...',
    options: ['-1/2', '-1', '1', '2'],
    answer: '-1'
  },
  {
    id: 'aljabar-9',
    category: 'Aljabar',
    type: 'single',
    question: 'Hasil dari 0,25 + 3/5 + 3/20 adalah...',
    options: ['0,9', '1', '1,25', '2'],
    answer: '1'
  },
  {
    id: 'aljabar-10',
    category: 'Aljabar',
    type: 'single',
    question: 'Hasil dari √144 + √225 - √100 adalah...',
    options: ['17', '24', '27', '34'],
    answer: '17'
  },
  {
    id: 'aljabar-11',
    category: 'Aljabar',
    type: 'single',
    question: 'Hasil dari 2^5 × 2^3 : 2^4 adalah...',
    options: ['4', '8', '16', '32'],
    answer: '16'
  },
  {
    id: 'aljabar-12',
    category: 'Aljabar',
    type: 'multiple',
    question: 'Persamaan 2x - 6 < 8 adalah... (Jawaban lebih dari satu)',
    options: ['x < 7', 'x > 7', '2x < 14', '2x > 14'],
    answer: ['x < 7', '2x < 14']
  },
  {
    id: 'aljabar-13',
    category: 'Aljabar',
    type: 'multiple',
    question: 'Akar-akar dari persamaan x^2 - 3x - 10 = 0 adalah... (Jawaban lebih dari satu)',
    options: ['x = 2', 'x = -2', 'x = 5', 'x = -5'],
    answer: ['x = -2', 'x = 5']
  },
  {
    id: 'aljabar-14',
    category: 'Aljabar',
    type: 'single',
    question: 'Diberikan fungsi f(x) = 2x + 2. Nilai untuk f(-4) adalah...',
    options: ['6', '10', '-6', '-10'],
    answer: '-6'
  },
  {
    id: 'aljabar-15',
    category: 'Aljabar',
    type: 'single',
    question: 'Diberikan fungsi f(x) = -3x + 4. Nilai untuk f(3) adalah...',
    options: ['5', '13', '-5', '-13'],
    answer: '-5'
  }
]

// =====================================================================
// BILANGAN
// =====================================================================
const bilangan = [
  {
    id: 'bilangan-1',
    category: 'Bilangan',
    type: 'single',
    question: 'Hasil dari (3^2 × 2^3 - 3^2 × 2) / 3^2 + 6^2 adalah...',
    options: ['36', '42', '48', '54'],
    answer: '42'
  },
  {
    id: 'bilangan-2',
    category: 'Bilangan',
    type: 'single',
    question: 'Sebuah bilangan jika dibagi 9, maka sisanya 5, jika dibagi 6, maka sisanya...',
    options: ['2', '3', '4', '5'],
    answer: '2'
  },
  {
    id: 'bilangan-3',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Harga beras merah Rp20.000,00/kg, sementara harga kacang hijau adalah Rp10.000,00/kg. Jika Ibu memiliki uang Rp120.000,00, maka tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Jika Ibu membeli 4 kg beras merah dan 2 kg kacang hijau, maka uang Ibu masih Rp20.000,00.',
      'Jika Ibu membeli 5 kg beras merah dan 2 kg kacang hijau maka Ibu masih bisa membayar parkir Rp5.000,00.',
      'Jika Ibu membeli 8 kg beras merah dan 2 kg kacang hijau maka uang Ibu tidak bersisa.'
    ],
    answer: [false, true, true]
  },
  {
    id: 'bilangan-4',
    category: 'Bilangan',
    type: 'single',
    question: 'Hasil penjumlahan semua bilangan prima antara 20 sampai 40 adalah...',
    options: ['83', '120', '141', '159'],
    answer: '120'
  },
  {
    id: 'bilangan-5',
    category: 'Bilangan',
    type: 'single',
    question: 'Hari Pahlawan jatuh pada hari Senin. Maka, hari Natal jatuh pada hari...',
    options: ['Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    answer: 'Kamis'
  },
  {
    id: 'bilangan-6',
    category: 'Bilangan',
    type: 'multiple',
    question: 'Bus jalur A berhenti setiap 30 menit sekali. Bus jalur B berhenti tiap 45 menit sekali. Jika kedua bus tersebut berhenti pada pukul 09.00, maka pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Pada pukul 10.30 Bus A dan Bus B sama-sama berhenti',
      'Pada pukul 10.45 Bus A dan Bus B sama-sama berhenti',
      'Pada pukul 11.00 Bus A dan Bus B sama-sama berhenti',
      'Pada pukul 12.00 Bus A dan Bus B sama-sama berhenti'
    ],
    answer: [
      'Pada pukul 10.30 Bus A dan Bus B sama-sama berhenti',
      'Pada pukul 12.00 Bus A dan Bus B sama-sama berhenti'
    ]
  },
  {
    id: 'bilangan-7',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Segulung pita dengan panjang 24 meter dipotong menjadi 3 bagian, misalkan bagian A, B, dan C dengan perbandingan 2:3:5. Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Bagian A sepanjang 4,8 meter',
      'Bagian B sepanjang 6 meter',
      'Bagian C sepanjang 12 meter'
    ],
    answer: [true, false, true]
  },
  {
    id: 'bilangan-8',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Seorang pedagang membeli 10 kg beras dengan harga Rp15.000,00/kg dan 20 kg tepung dengan harga Rp10.000,00/kg. Pedagang mengambil keuntungan dengan menaikkan harga 20% dari harga beli. Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Harga jual beras adalah Rp17.500,00/kg',
      'Keuntungan total penjualan tepung adalah Rp40.000,00',
      'Total penjualan tepung dan beras adalah Rp420.000,00'
    ],
    answer: [false, true, true]
  },
  {
    id: 'bilangan-9',
    category: 'Bilangan',
    type: 'truefalse',
    question: 'Umur Roni 1/7 kali umur ayah. Umur kakek saat ini adalah 2,25 kali umur ayah. Jika umur ayah saat ini adalah 18 tahun, maka tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Umur Roni 7 tahun',
      'Umur kakek 63 tahun',
      'Umur Roni 2 tahun lagi adalah 1/5 umur ayah'
    ],
    answer: [false, true, true]
  },
  {
    id: 'bilangan-10',
    category: 'Bilangan',
    type: 'multiple',
    stimulus: { paragraphs: [tabelResep] },
    question: 'Berdasarkan data pada tabel, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Rasio kebutuhan terigu untuk bolu kukus dan kue cokelat adalah 4:2',
      'Rasio kebutuhan gula untuk kue pisang dan kue cokelat adalah 3:4',
      'Jika ingin membuat 3 porsi bolu kukus, maka diperlukan gula sebanyak 75 gram',
      'Jika ingin membuat 16 porsi kue pisang, maka diperlukan 4 butir telur'
    ],
    answer: [
      'Rasio kebutuhan terigu untuk bolu kukus dan kue cokelat adalah 4:2',
      'Rasio kebutuhan gula untuk kue pisang dan kue cokelat adalah 3:4',
      'Jika ingin membuat 3 porsi bolu kukus, maka diperlukan gula sebanyak 75 gram'
    ]
  },
  {
    id: 'bilangan-11',
    category: 'Bilangan',
    type: 'truefalse',
    stimulus: { paragraphs: [tabelResep] },
    question: 'Berdasarkan tabel pada soal sebelumnya, tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Jika memiliki 10 butir telur, maka cukup untuk membuat 24 porsi bolu kukus',
      'Jika memiliki 150 gram gula, maka cukup untuk membuat 24 porsi bolu kukus',
      'Jika memiliki 50 gram terigu, maka cukup untuk membuat 4 porsi kue pisang'
    ],
    answer: [false, true, true]
  },
  {
    id: 'bilangan-12',
    category: 'Bilangan',
    type: 'single',
    question: 'Sebuah mikroba memiliki ukuran diameter 2^{-3} mm. Jika dalam bentuk desimal adalah ... mm',
    options: ['0,8', '0,4', '0,25', '0,125'],
    answer: '0,125'
  },
  {
    id: 'bilangan-13',
    category: 'Bilangan',
    type: 'single',
    question: 'Bilangan 4/(√7 + √5) dapat disederhanakan menjadi...',
    options: ['2√7 + 2√5', '2√7 - 2√5', '4√7 + 4√5', '4√7 - 4√5'],
    answer: '2√7 - 2√5'
  },
  {
    id: 'bilangan-14',
    category: 'Bilangan',
    type: 'single',
    stimulus: {
      instruction: 'Untuk menjawab soal nomor 14-15, cermatilah data yang tersaji berikut ini!',
      paragraphs: [
        'Pengguna media sosial di Indonesia tahun 2024 adalah sebanyak 180 juta, lalu meningkat pada tahun 2025 menjadi 200 juta pengguna. Adapun media sosial yang diakses, yaitu Youtube, Whatsapp, Instagram, Facebook, dan TikTok, seperti pada tabel berikut.',
        tabelMediaSosial
      ]
    },
    question: 'Perubahan jumlah pengguna Whatsapp dari tahun 2024 ke tahun 2025 adalah...',
    options: ['25 juta pengguna', '40 juta pengguna', '151 juta pengguna', '176 juta pengguna'],
    answer: '25 juta pengguna'
  },
  {
    id: 'bilangan-15',
    category: 'Bilangan',
    type: 'single',
    stimulus: {
      instruction: 'Untuk menjawab soal nomor 14-15, cermatilah data yang tersaji berikut ini!',
      paragraphs: [
        'Pengguna media sosial di Indonesia tahun 2024 adalah sebanyak 180 juta, lalu meningkat pada tahun 2025 menjadi 200 juta pengguna. Adapun media sosial yang diakses, yaitu Youtube, Whatsapp, Instagram, Facebook, dan TikTok, seperti pada tabel berikut.',
        tabelMediaSosial
      ]
    },
    question: 'Perbandingan jumlah pengguna TikTok dengan pengguna Facebook di tahun 2024 adalah...',
    options: ['1:2', '1:3', '1:4', '2:3'],
    answer: '1:3'
  }
]

// =====================================================================
// GEOMETRI DAN PENGUKURAN
// =====================================================================
const geometri = [
  {
    id: 'geometri-1',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Sebuah tabung dan kerucut memiliki panjang rusuk dan tinggi yang sama, yaitu 7 cm dan 14 cm. Perbandingan volume tabung dan kerucut adalah...',
    options: ['1 : 3', '1 : 7', '3 : 1', '7 : 1'],
    answer: '1 : 3'
  },
  {
    id: 'geometri-2',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Sebuah tabung dan bola memiliki panjang rusuk yang sama, yaitu 10 cm. Tabung memiliki tinggi 20 cm. Perbandingan luas permukaan tabung dan bola adalah...',
    options: ['2 : 3', '3 : 2', '3 : 4', '4 : 3'],
    answer: '2 : 3'
  },
  {
    id: 'geometri-3',
    category: 'Geometri dan Pengukuran',
    type: 'truefalse',
    stimulus: { image: geometriBalok },
    question: 'Jika balok memiliki panjang AB = 8 cm, BC = 6 cm, AE = 24 cm, maka tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Diagonal ruang CE adalah 25 cm',
      'Volume balok adalah 1.152 cm^3',
      'Luas permukaan balok adalah 768 cm^2'
    ],
    answer: [false, true, true]
  },
  {
    id: 'geometri-4',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Bak mandi berbentuk kubus berukuran 50 cm terisi air. Jika air terpakai 20% dari volume total, maka sisa air dalam bak mandi adalah...',
    options: ['20 liter', '25 liter', '100 liter', '125 liter'],
    answer: '100 liter'
  },
  {
    id: 'geometri-5',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Kubus memiliki luas permukaan 600 cm^2. Volume kubus tersebut adalah...',
    options: ['100 cm^3', '216 cm^3', '1000 cm^3', '2160 cm^3'],
    answer: '1000 cm^3'
  },
  {
    id: 'geometri-6',
    category: 'Geometri dan Pengukuran',
    type: 'truefalse',
    question: 'Diketahui persegi panjang memiliki panjang 3√5 cm dan lebar 2√5 cm. Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Keliling persegi panjang adalah 10√5 cm',
      'Luas persegi panjang adalah 30 cm^2',
      'Luas persegi panjang lebih besar daripada 35 cm^2'
    ],
    answer: [true, true, false]
  },
  {
    id: 'geometri-7',
    category: 'Geometri dan Pengukuran',
    type: 'multiple',
    question: 'Limas segi empat memiliki panjang sisi alas 12 cm dan tinggi 10 cm. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Volume limas adalah 10√5 cm^3',
      'Volume limas adalah 384 cm^3',
      'Luas permukaan limas adalah 384 cm^2',
      'Luas permukaan limas adalah 480 cm^2'
    ],
    answer: ['Volume limas adalah 10√5 cm^3', 'Volume limas adalah 384 cm^3']
  },
  {
    id: 'geometri-8',
    category: 'Geometri dan Pengukuran',
    type: 'truefalse',
    stimulus: { image: geometriSegitigaBC },
    question: 'Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Panjang BC adalah 19 km',
      'Panjang BD adalah 63 km',
      'Panjang CD adalah 44 km'
    ],
    answer: [false, false, false]
  },
  {
    id: 'geometri-9',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Persegi panjang memiliki panjang diagonal 25 cm dan panjang 24 cm. Lebar persegi panjang tersebut adalah...',
    options: ['7', '10', '15', '16'],
    answer: '7'
  },
  {
    id: 'geometri-10',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    question: 'Sebuah belah ketupat memiliki sisi 13 cm dan salah satu diagonalnya 10 cm. Maka, panjang diagonal lainnya adalah...',
    options: ['10', '13', '23', '24'],
    answer: '24'
  },
  {
    id: 'geometri-11',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    stimulus: { image: geometriGarisPQ },
    question: 'Garis PQ mengalami ... terhadap sumbu (0,0)',
    options: ['Translasi', 'Refleksi', 'Rotasi', 'Dilatasi'],
    answer: 'Refleksi'
  },
  {
    id: 'geometri-12',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    stimulus: { image: geometriSudutA },
    question: 'Besar sudut A adalah...',
    options: ['45', '90', '130', '180'],
    answer: '130'
  },
  {
    id: 'geometri-13',
    category: 'Geometri dan Pengukuran',
    type: 'single',
    stimulus: { image: geometriSegitigaABC },
    question: 'Diketahui ∠ABC = 90°, panjang AB = 4 cm, dan BC = 3 cm. Panjang AC adalah...',
    options: ['3 cm', '4 cm', '5 cm', '6 cm'],
    answer: '5 cm'
  },
  {
    id: 'geometri-14',
    category: 'Geometri dan Pengukuran',
    type: 'multiple',
    question: 'Sebuah balok memiliki panjang 12 cm, lebar setengah dari panjang, dan tinggi 8 cm. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Volume balok adalah 432 cm^3',
      'Volume balok adalah 576 cm^3',
      'Sisi lebar tidak lebih besar daripada tingginya',
      'Luas permukaan balok adalah 432 cm^2'
    ],
    answer: [
      'Volume balok adalah 576 cm^3',
      'Sisi lebar tidak lebih besar daripada tingginya',
      'Luas permukaan balok adalah 432 cm^2'
    ]
  },
  {
    id: 'geometri-15',
    category: 'Geometri dan Pengukuran',
    type: 'multiple',
    question: 'Sebuah tabung memiliki diameter 28 cm dan tinggi 10 cm. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Volume tabung adalah 6.160 cm^3',
      'Volume tabung adalah 24.640 cm^3',
      'Luas permukaan tabung adalah 2.112 cm^2',
      'Luas permukaan tabung adalah 6.688 cm^2'
    ],
    answer: ['Volume tabung adalah 6.160 cm^3', 'Luas permukaan tabung adalah 2.112 cm^2']
  }
]

// =====================================================================
// DATA DAN PELUANG
// =====================================================================
const peluang = [
  {
    id: 'peluang-1',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Tim basket terdiri atas 5 siswa dengan berat badan rata-rata 43 kg. Selisih berat anggota yang terbesar dan terkecil adalah 15 kg. Tim ini terdiri dari satu orang paling berat dan 4 orang lainnya sama beratnya. Berat badan anggota yang terbesar adalah...',
    options: ['40', '43', '55', '58'],
    answer: '55'
  },
  {
    id: 'peluang-2',
    category: 'Data dan Peluang',
    type: 'truefalse',
    stimulus: { image: dataDiagramHobi },
    question: 'Sebanyak 360 anak dijadikan sampel dalam penelitian ini. Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Banyak siswa yang memilih bermain bersama teman adalah 80 anak dan merupakan jumlah sampel terbanyak',
      'Tidak lebih dari 15% yang memilih olahraga sebagai kegiatan sepulang sekolah',
      'Membaca menempati peringkat terakhir sebagai kegiatan yang diminati sepulang sekolah'
    ],
    answer: [true, false, false]
  },
  {
    id: 'peluang-3',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Nilai rata-rata sumatif 8 siswa di kelas A adalah 72. Sementara nilai rata-rata 12 siswa di kelas B adalah 80. Nilai rata-rata kelas A dan B adalah...',
    options: ['76,8', '77,5', '78', '79,2'],
    answer: '76,8'
  },
  {
    id: 'peluang-4',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Disajikan data berikut: 12, 8, 9, 15, 16, 17, 13, 10. Nilai mean dari data tersebut adalah...',
    options: ['11,5', '12,5', '13,5', '14,5'],
    answer: '12,5'
  },
  {
    id: 'peluang-5',
    category: 'Data dan Peluang',
    type: 'truefalse',
    stimulus: { paragraphs: [tabelUsiaKlub] },
    question: 'Data usia anggota klub basket remaja disajikan dalam tabel berikut. Tentukan pernyataan di bawah ini yang benar dan salah!',
    statements: [
      'Banyak siswa yang memilih bermain bersama teman adalah 80 anak dan merupakan jumlah sampel terbanyak',
      'Tidak lebih dari 15% yang memilih olahraga sebagai kegiatan sepulang sekolah',
      'Membaca menempati peringkat terakhir sebagai kegiatan yang diminati sepulang sekolah'
    ],
    answer: [false, true, false]
  },
  {
    id: 'peluang-6',
    category: 'Data dan Peluang',
    type: 'single',
    stimulus: { paragraphs: [tabelUsiaKlub] },
    question: 'Berdasarkan data tabel usia anggota klub, usia rata-rata anggota klub adalah...',
    options: ['14,71', '15,23', '15,50', '16,13'],
    answer: '15,23'
  },
  {
    id: 'peluang-7',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Dua buah dadu dilempar bersamaan. Peluang muncul angka kembar adalah...',
    options: ['1/6', '1/9', '5/36', '7/36'],
    answer: '1/6'
  },
  {
    id: 'peluang-8',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Peluang muncul angka berjumlah 5 pada pelemparan dua dadu adalah...',
    options: ['1/6', '1/9', '5/36', '7/36'],
    answer: '1/9'
  },
  {
    id: 'peluang-9',
    category: 'Data dan Peluang',
    type: 'multiple',
    question: 'Dalam sebuah wadah terdapat 10 bola yang diberi tulisan angka 1 sampai 10. Bola diambil tanpa pengembalian. Pada pengambilan pertama dan kedua muncul angka genap. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Peluang muncul angka genap pada pengambilan ketiga adalah 3/8',
      'Peluang muncul angka genap pada pengambilan ketiga adalah 5/8',
      'Peluang muncul angka ganjil pada pengambilan ketiga adalah 3/8',
      'Peluang muncul angka ganjil pada pengambilan ketiga adalah 5/8'
    ],
    answer: [
      'Peluang muncul angka genap pada pengambilan ketiga adalah 3/8',
      'Peluang muncul angka ganjil pada pengambilan ketiga adalah 5/8'
    ]
  },
  {
    id: 'peluang-10',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Terdapat 5 bola merah, 6 bola ungu, dan 4 bola oranye dalam sebuah toples. Peluang terambilnya bola merah adalah...',
    options: ['1/3', '1/5', '2/5', '4/15'],
    answer: '1/3'
  },
  {
    id: 'peluang-11',
    category: 'Data dan Peluang',
    type: 'multiple',
    question: 'Nilai kuis 8 siswa adalah 80, 67, 50, 60, 55, 65, 70, 60. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Nilai modus adalah 60',
      'Nilai median adalah 62,5',
      'Nilai mean adalah 64,5',
      'Nilai rata-rata tidak lebih dari 65'
    ],
    answer: ['Nilai modus adalah 60', 'Nilai median adalah 62,5', 'Nilai mean adalah 64,5']
  },
  {
    id: 'peluang-12',
    category: 'Data dan Peluang',
    type: 'multiple',
    question: 'Bangun datar dengan koordinat A(1,1), B(3,1), C(3,3), D(1,3) ditranslasikan 3 satuan ke kiri dan 2 satuan ke atas. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      "Titik A'(-2, 3)",
      "Titik B'(0, -3)",
      "Titik C'(0, 5)",
      "Titik D'(-2, 5)"
    ],
    answer: ["Titik A'(-2, 3)", "Titik C'(0, 5)", "Titik D'(-2, 5)"]
  },
  {
    id: 'peluang-13',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Dalam suatu wadah terdapat 6 kelereng biru, 4 kelereng hijau, 5 kelereng merah, dan 5 kelereng kuning. Peluang terambil kelereng biru adalah...',
    options: ['1/4', '1/5', '3/10', '6/10'],
    answer: '3/10'
  },
  {
    id: 'peluang-14',
    category: 'Data dan Peluang',
    type: 'single',
    question: 'Perbandingan permen Amad, Roni, dan Nida 5:3:2. Sedangkan jumlah permen Amad dan Roni 64. Jumlah permen 3 orang tersebut adalah...',
    options: ['72', '80', '88', '96'],
    answer: '80'
  },
  {
    id: 'peluang-15',
    category: 'Data dan Peluang',
    type: 'multiple',
    question: 'Diketahui nilai sumatif siswa kelas 9 adalah 90, 95, 70, 75, 85, 80, 85. Maka, pernyataan di bawah ini yang benar adalah... (Jawaban lebih dari satu)',
    options: [
      'Nilai Mean adalah 82',
      'Nilai Modus adalah 85',
      'Nilai Median adalah 86',
      'Nilai Modus dan Median sama besar'
    ],
    answer: ['Nilai Modus adalah 85', 'Nilai Modus dan Median sama besar']
  }
]

export const questionsByCategory = {
  aljabar,
  bilangan,
  geometri,
  peluang
}

// Gabungan seluruh 60 soal, urut sesuai dokumen sumber
const fulltestQuestions = [...aljabar, ...bilangan, ...geometri, ...peluang]

export default fulltestQuestions