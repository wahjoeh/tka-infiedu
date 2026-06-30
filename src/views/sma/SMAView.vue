<template>
  <div class="home-container">
    <header class="navbar">
      <h1>TKA InfiEdu</h1>
    </header>

    <section class="hero">
      <h2>Selamat Datang di TKA InfiEdu</h2>
      <p>
        Platform latihan TKA untuk membantu siswa mempersiapkan ujian dengan
        lebih efektif.
      </p>
    </section>

    <section class="level-selection">
      <div class="level-card" @click="goToSMP">
        <h3>TKA SMP</h3>
        <p>Latihan soal untuk jenjang Sekolah Menengah Pertama</p>
      </div>

      <div class="level-card" @click="goToSMA">
        <h3>TKA SMA</h3>
        <p>Latihan soal untuk jenjang Sekolah Menengah Atas</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSMP = () => {
  router.push('/smp')
}

const goToSMA = () => {
  router.push('/sma')
}
</script>