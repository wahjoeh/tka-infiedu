<template>
  <div class="math-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMP - Matematika</p>
    </div>

    <div class="math-card">
      <h1 class="page-title">Latihan Matematika</h1>

      <p class="page-subtitle">
        Pilih aspek materi berdasarkan kisi-kisi TKA SMP 2026
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTest('statistics')">
          <h3>Statistika & Peluang</h3>
          <p>
            Diagram, mean, median, modus, dan probabilitas dalam konteks
            kehidupan sehari-hari.
          </p>
        </button>

        <button class="package-card" @click="goToTest('social')">
          <h3>Aritmetika Sosial</h3>
          <p>
            Diskon, bunga bank, bruto, tara, neto, serta analisis untung-rugi.
          </p>
        </button>

        <button class="package-card" @click="goToTest('linear')">
          <h3>Persamaan & Pertidaksamaan Linear</h3>
          <p>
            Pemecahan masalah harga barang, umur, dan hubungan antar variabel.
          </p>
        </button>

        <button class="package-card" @click="goToTest('geometry')">
          <h3>Geometri & Pengukuran</h3>
          <p>
            Volume, luas permukaan, Teorema Pythagoras, dan aplikasi spasial.
          </p>
        </button>

        <button class="package-card full-test" @click="goToTest('full')">
          <h3>Full Test Simulation</h3>
          <p>
            Simulasi lengkap seluruh materi Matematika TKA SMP.
          </p>
        </button>
      </div>

      <button class="back-btn" @click="goBack">
        ← Kembali
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import '../../../styles/smp-math.css'

const router = useRouter()

const goToTest = (type) => {
  router.push(`/smp/practice/math/test?type=${type}`)
}

const goBack = () => {
  router.push('/smp/practice')
}
</script>