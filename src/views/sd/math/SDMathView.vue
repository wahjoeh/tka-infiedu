<template>
  <div class="math-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SD - Matematika</p>
    </div>

    <div class="math-card">
      <h1 class="page-title">Latihan Matematika</h1>

      <p class="page-subtitle">
        Pilih aspek materi berdasarkan kisi-kisi TKA SD 2026
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTest('statistics')">
          <h3>Bilangan Rasional</h3>
          <p>
            Memuat konsep bilangan, pecahan, dan operasi hitung dalam berbagai bentuk.
          </p>
        </button>

        <button class="package-card" @click="goToTest('social')">
          <h3>Objek Geometri dan Pengukuran</h3>
          <p>
            Memuat materi bangun datar, bangun ruang, satuan, dan berbagai pengukuran.
          </p>
        </button>

        <button class="package-card" @click="goToTest('linear')">
          <h3>Penyajian dan Penggunaan Data</h3>
          <p>
            Memuat penyajian, pembacaan, dan penggunaan data untuk memperoleh informasi.
          </p>
        </button>

        <button class="package-card full-test" @click="goToTest('full')">
          <h3>Simulasi Tes</h3>
          <p>
            Simulasi lengkap seluruh materi Matematika TKA SD.
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
import '../../../styles/sd-math.css'

const router = useRouter()

const goToTest = (type) => {
  router.push(`/sd/practice/math/test?type=${type}`)
}

const goBack = () => {
  router.push('/sd/practice')
}
</script>