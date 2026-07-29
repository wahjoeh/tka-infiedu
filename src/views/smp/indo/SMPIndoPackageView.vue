<template>
  <div class="indo-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMP - Bahasa Indonesia</p>
    </div>

    <div class="indo-card package-view">
      <h1 class="page-title">Menyiapkan Paket Soal</h1>

      <p class="page-subtitle">
        Sistem sedang memilih Paket 1 atau Paket 2 untuk Anda.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import '../../../styles/smp-indo.css'

const router = useRouter()

onMounted(() => {
  const randomPackage = Math.random() < 0.5 ? 1 : 2
  router.replace(`/smp/practice/indo/test?package=${randomPackage}`)
})
</script>
