<template>
  <div class="math-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SMA - Sosiologi</p>
    </div>

    <div class="math-card">
      <h1 class="page-title">Latihan Sosiologi</h1>

      <p class="page-subtitle">
        Pilih mode untuk memulai latihan atau simulasi
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTrial"><h3>Trial</h3><p>Kerjakan 10 soal Matematika untuk mencoba kemampuanmu.</p></button>
        <button class="package-card full-test" @click="showPasswordDialog = true">
          <h3>Full Test Simulation</h3>
          <p>
            Simulasi lengkap seluruh materi Sosiologi TKA SMA.
          </p>
        </button>
      </div>

      <button class="back-btn" @click="goBack">
        ← Kembali
      </button>
    </div>
    <PracticePasswordDialog :visible="showPasswordDialog" @close="showPasswordDialog = false" @unlocked="openFullTest" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PracticePasswordDialog from '../../../components/PracticePasswordDialog.vue'
import '../../../styles/sma-math.css'
import '../../../styles/password-modal.css'

const router = useRouter()
const showPasswordDialog = ref(false)

const goToTrial = () => router.push('/sma/practice/sosiologi/test?mode=trial')
const openFullTest = () => { sessionStorage.setItem('smaSosiologiFullTestUnlocked', 'true'); router.push('/sma/practice/sosiologi/test?mode=fulltest') }

const goBack = () => {
  router.push('/sma/practice')
}
</script>
