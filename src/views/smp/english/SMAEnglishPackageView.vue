<template>
  <div class="indo-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMA - Bahasa Inggris</p>
    </div>

    <div class="indo-card package-view">
      <h1 class="page-title">Pilih Paket Soal</h1>

      <p class="page-subtitle">
        Pilih paket latihan Bahasa Inggris yang ingin dikerjakan
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToPackage1">
          <div class="package-badge">PACKAGE 1</div>
          <h3>Paket 1</h3>
          <p>20 Soal • 30 Menit</p>
        </button>

        <button class="package-card" @click="goToPackage2">
          <div class="package-badge">PACKAGE 2</div>
          <h3>Paket 2</h3>
          <p>20 Soal • 30 Menit</p>
        </button>

        <button class="package-card" @click="goToPackage3">
          <div class="package-badge">PACKAGE 3</div>
          <h3>Paket 3</h3>
          <p>20 Soal • 30 Menit</p>
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
import '../../../styles/sma-english.css'

const router = useRouter()

const goToPackage1 = () => {
  router.push('/sma/practice/english/test?package=1')
}

const goToPackage2 = () => {
  router.push('/sma/practice/english/test?package=2')
}

const goToPackage3 = () => {
  router.push('/sma/practice/english/test?package=3')
}

const goBack = () => {
  router.push('/sma/practice/english')
}
</script>