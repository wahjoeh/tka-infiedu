<template>
  <div class="indo-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMP - Bahasa Indonesia</p>
    </div>

    <div class="indo-card package-view">
      <h1 class="page-title">Menyiapkan Paket Soal</h1>

      <p class="page-subtitle">
        Menyiapkan 1 paket latihan berisi 20 soal untuk Anda.
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
  router.replace('/smp/practice/indo/test?')
})
</script>
