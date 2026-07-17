<template>
  <div class="indo-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SD - Bahasa Indonesia</p>
    </div>

    <div class="indo-card">
      <h1 class="page-title">Latihan Bahasa Indonesia</h1>

      <p class="page-subtitle">
        Pilih aspek materi berdasarkan kisi-kisi TKA SD 2026
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTest('idepokok')">
          <h3>Pemahaman Tekstual</h3>
          <p>
            Memahami informasi yang dikemukakan secara eksplisit, mengelompokkan, menyusun ulang, dan menyajikan kembali informasi secara eksplisit dari teks..
          </p>
        </button>

        <button class="package-card" @click="goToTest('evaluasi')">
          <h3>Pemahaman inferensial</h3>
          <p>
            Menarik kesimpulan berdasarkan informasi yang tersirat dalam teks.
          </p>
        </button>

        <button class="package-card" @click="goToTest('kebahasaan')">
          <h3>Evaluasi dan Apresiasi</h3>
          <p>
            Membuat penilaian terhadap ide, menanggapi teks secara emosional dan estetis dengan mempertimbangkan dampaknya terhadap perasaan, imajinasi, serta penggunaan bahasa oleh penulis.
          </p>
        </button>

        <button class="package-card full-test" @click="goToTest('fulltest')">
          <h3>Simulasi Tes</h3>
          <p>
            Simulasi lengkap seluruh materi Bahasa Indonesia TKA SD.
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
import '../../../styles/sd-indo.css'

const router = useRouter()

const goToTest = (type) => {
  router.push(`/sd/practice/indo/test?type=${type}`)
}

const goBack = () => {
  router.push('/sd/practice')
}
</script>