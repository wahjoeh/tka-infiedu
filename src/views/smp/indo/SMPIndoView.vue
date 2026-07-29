<template>
  <div class="indo-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMP - Bahasa Indonesia</p>
    </div>

    <div class="indo-card">
      <h1 class="page-title">Latihan Bahasa Indonesia</h1>

      <p class="page-subtitle">
        Pilih aspek materi berdasarkan kisi-kisi TKA SMP 2026
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTest('idepokok')">
          <h3>Ide Pokok & Simpulan</h3>
          <p>
            Menentukan inti paragraf dan simpulan tersurat maupun tersirat.
          </p>
        </button>

        <button class="package-card" @click="goToTest('evaluasi')">
          <h3>Evaluasi Kualitas Informasi</h3>
          <p>
            Membedakan fakta dan opini serta mengevaluasi data dan informasi.
          </p>
        </button>

        <button class="package-card" @click="goToTest('kebahasaan')">
          <h3>Kebahasaan & Struktur</h3>
          <p>
            Ejaan, tanda baca, kalimat efektif, dan susunan paragraf.
          </p>
        </button>

        <button class="package-card" @click="goToTest('sastra')">
          <h3>Literasi Sastra</h3>
          <p>
            Watak tokoh, latar, konflik, dan pesan moral.
          </p>
        </button>

        <button class="package-card full-test" @click="goToTest('fulltest')">
          <h3>Full Test Simulation</h3>
          <p>
            Simulasi lengkap seluruh materi Bahasa Indonesia TKA SMP.
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
import '../../../styles/smp-indo.css'

const router = useRouter()

const goToTest = (type) => {
  if (type === 'fulltest') {
    router.push('/smp/practice/indo/packages')
    return
  }

  router.push(`/smp/practice/indo/test?type=${type}`)
}

const goBack = () => {
  router.push('/smp/practice')
}
</script>
