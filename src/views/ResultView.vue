<template>
  <div class="result-container">
    <div class="top-banner">
      <div class="banner-left">
        <h2>TKA InfiEdu</h2>
        <p>TKA Simulation Result</p>
      </div>

      <div class="banner-right">
        <h4>Bahasa Indonesia</h4>
        <p>Reviu Hasil Simulasi</p>
      </div>
    </div>

    <div class="result-card">
      <div class="result-header">
        <div class="result-icon">📊</div>

        <h1 class="result-title">Reviu Hasil Simulasi</h1>

        <div class="result-subtitle">
          Bahasa Indonesia - TKA
        </div>
      </div>

      <table class="result-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Jawaban Anda</th>
            <th>Kunci Jawaban</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in results" :key="item.no">
            <td class="number-col">{{ item.no }}</td>

            <td>
              <div
                class="answer-box"
                :class="{
                  correct: item.correct,
                  wrong: !item.correct && item.userAnswer !== 'Tidak dijawab',
                  empty: item.userAnswer === 'Tidak dijawab'
                }"
              >
                {{ item.userAnswer }}
              </div>
            </td>

            <td>
              <div class="key-box">
                {{ item.correctAnswer }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="result-footer">
        <button class="back-btn" @click="goBack">
          Kembali
        </button>

        <button class="retry-btn" @click="retryTest">
          Ulangi Test
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../styles/result.css'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const results = ref([])

onMounted(() => {
  const savedResult = sessionStorage.getItem('indoResult')

  if (savedResult) {
    results.value = JSON.parse(savedResult)
  }
})

const goBack = () => {
  router.push('/sd/practice/indo')
}

const retryTest = () => {
  router.back()
}
</script>