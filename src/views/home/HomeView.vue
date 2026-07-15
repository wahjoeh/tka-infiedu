<template>
  <div class="home-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>Platform Belajar TKA Modern</p>
    </div>

    <div class="home-card">
      <img
        src="/logo.png"
        alt="Logo TKA InfiEdu"
        class="home-logo"
      />

      <h1 class="home-title">Simulasi TKA</h1>

      <p class="home-subtitle">
        Pilih jenjang pendidikan untuk memulai simulasi TKA
      </p>

      <h2 class="section-title">
        Pilih Jenjang Pendidikan
      </h2>

      <div class="menu-grid">

        <button class="menu-card" @click="goToSD">
          <span class="menu-icon">🎒</span>
          <span>TKA SD</span>
        </button>

        <button class="menu-card" @click="goToSMP">
          <span class="menu-icon">📘</span>
          <span>TKA SMP</span>
        </button>

        <button class="menu-card" @click="goToSMA">
          <span class="menu-icon">🎓</span>
          <span>TKA SMA</span>
        </button>

      </div>

      <div class="credit">
        © 2026 TKA InfiEdu
        <br />
        Smart Learning Platform for TKA Preparation
      </div>
    </div>
  </div>
</template>

<script setup>
import '../../styles/home.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSD = () => {
  router.push('/sd')
}

const goToSMP = () => {
  router.push('/smp')
}

const goToSMA = () => {
  router.push('/sma')
}
</script>