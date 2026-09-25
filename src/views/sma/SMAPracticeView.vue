<template>
  <div class="practice-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMA Practice</p>
    </div>

    <div class="practice-card">
      <h1 class="page-title">Latihan TKA SMA</h1>
      <p class="page-subtitle">
        Pilih mata pelajaran untuk memulai latihan
      </p>

      <div class="subject-grid">
        <button class="subject-card" @click="goToMath">
          <div class="subject-icon">🔢</div>
          <h3>Matematika</h3>
        </button>

        <button class="subject-card" @click="goToIndo">
          <div class="subject-icon">📖</div>
          <h3>Bahasa Indonesia</h3>
        </button>

        <button class="subject-card" @click="goToEnglish">
          <div class="subject-icon">🌍</div>
          <h3>Bahasa Inggris</h3>
        </button>

        <button class="subject-card" @click="goToSosiologi">
          <div class="subject-icon">👥</div>
          <h3>Sosiologi</h3>
        </button>

        <button class="subject-card" @click="goToEkonomi">
          <div class="subject-icon">📈</div>
          <h3>Ekonomi</h3>
        </button>

        <button class="subject-card" @click="goToBiologi">
          <div class="subject-icon">🧬</div>
          <h3>Biologi</h3>
        </button>

        <button class="subject-card" @click="goToFisika">
          <div class="subject-icon">⚛️</div>
          <h3>Fisika</h3>
        </button>
      </div>

      <button class="back-btn" @click="goBack">
        ← Kembali
      </button>
    </div>
  </div>
</template>

<script setup>
import '../../styles/sma-practice.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToMath = () => {
  router.push('/sma/practice/math')
}

const goToIndo = () => {
  router.push('/sma/practice/indo')
}

const goToEnglish = () => {
  router.push('/sma/practice/english')
}

const goToSosiologi = () => {
  router.push('/sma/practice/sosiologi')
}

const goToEkonomi = () => {
  router.push('/sma/practice/ekonomi')
}

const goToBiologi = () => {
  router.push('/sma/practice/biologi')
}

const goToFisika = () => {
  router.push('/sma/practice/fisika')
}

const goBack = () => {
  router.push('/sma')
}
</script>
