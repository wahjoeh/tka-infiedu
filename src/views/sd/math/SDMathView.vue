<template>
  <div class="math-container">
    <div class="top-banner">
      <h2>TKA InfiEdu</h2>
      <p>TKA SD - Matematika</p>
    </div>

    <div class="math-card">
      <h1 class="page-title">Latihan Matematika</h1>

      <p class="page-subtitle">
        Pilih mode untuk memulai latihan atau simulasi
      </p>

      <div class="package-grid">
        <button class="package-card" @click="goToTrial">
          <h3>Trial</h3>
          <p>Kerjakan 10 soal Matematika untuk mencoba kemampuanmu.</p>
        </button>
        <button class="package-card full-test" @click="showPasswordDialog = true">
          <h3>Full Test Simulation</h3>
          <p>Simulasi lengkap Matematika. Membutuhkan password untuk masuk.</p>
        </button>
      </div>

      <button class="back-btn" @click="goBack">
        ← Kembali
      </button>
    </div>
    <div v-if="showPasswordDialog" class="full-test-password-overlay" @click.self="closePasswordDialog">
      <form class="full-test-password-dialog" @submit.prevent="openFullTest">
        <h2>Full Test Simulation</h2><p>Masukkan password untuk memulai simulasi.</p>
        <input v-model="password" type="password" placeholder="Password" autofocus />
        <p v-if="passwordError" class="password-error">Password tidak sesuai.</p>
        <div class="full-test-password-actions">
          <button type="button" class="full-test-password-cancel" @click="closePasswordDialog">Batal</button>
          <button type="submit" class="full-test-password-submit">Masuk</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import '../../../styles/sd-math.css'
import '../../../styles/password-modal.css'

const router = useRouter()
const password = ref('')
const passwordError = ref(false)
const showPasswordDialog = ref(false)
const FULL_TEST_PASSWORD = 'asd'

const goToTrial = () => router.push('/sd/practice/math/test?mode=trial')
const openFullTest = () => {
  if (password.value !== FULL_TEST_PASSWORD) { passwordError.value = true; return }
  sessionStorage.setItem('sdMathFullTestUnlocked', 'true')
  router.push('/sd/practice/math/test?mode=fulltest')
}
const closePasswordDialog = () => { showPasswordDialog.value = false; password.value = ''; passwordError.value = false }

const goBack = () => {
  router.push('/sd/practice')
}
</script>
