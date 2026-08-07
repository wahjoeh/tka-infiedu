<template>
  <div class="smp-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMA Simulation</p>
    </div>

    <div class="smp-card">
      <h1 class="page-title">TKA SMA</h1>
      <p class="page-subtitle">
        Pilih mode pembelajaran yang ingin kamu gunakan
      </p>

      <div class="mode-grid">
        <button class="mode-card" @click="goToPractice">
          <div class="mode-icon">📚</div>
          <h3>Latihan</h3>
          <p>Berlatih soal berdasarkan mata pelajaran</p>
        </button>

        <button class="mode-card" @click="goToTest">
          <div class="mode-icon">📝</div>
          <h3>Tes</h3>
          <p>Simulasi ujian dengan timer dan skor akhir</p>
        </button>
      </div>

      <button class="back-btn" @click="goBack">
        ← Kembali
      </button>
    </div>
    <FullTestPasswordDialog :visible="showPasswordDialog" @close="showPasswordDialog = false" @unlocked="openFullTest" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FullTestPasswordDialog from '../../components/FullTestPasswordDialog.vue'
import '../../styles/sma.css'

const router = useRouter()
const showPasswordDialog = ref(false)

const goToPractice = () => {
  router.push('/sma/practice')
}

const goToTest = () => {
  showPasswordDialog.value = true
}

const openFullTest = () => { sessionStorage.setItem('smaCombinedFullTestUnlocked', 'true'); router.push('/sma/test') }

const goBack = () => {
  router.push('/')
}
</script>
