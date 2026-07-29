<template>
  <div class="result-container">
    <div class="top-banner">
      <div class="banner-left">
        <h2>TKA InfiEdu</h2>
        <p>TKA SMP Simulation Result</p>
      </div>

      <div class="banner-right">
        <h4>Simulasi Lengkap</h4>
        <p>Bahasa Indonesia + Matematika</p>
      </div>
    </div>

    <div
      v-if="result"
      class="result-card"
    >
      <div class="result-header">
        <div class="result-icon">📊</div>

        <h1 class="result-title">Reviu Hasil Simulasi TKA SMP</h1>

        <div class="result-subtitle">
          Total Benar: {{ result.totalCorrect }} / {{ result.totalQuestions }}
        </div>
      </div>

      <div class="score-summary">
        <div class="score-card">
          <h3>Bahasa Indonesia</h3>
          <p class="score-number">
            {{ result.indo.correctCount }} / {{ result.indo.total }}
          </p>
        </div>

        <div class="score-card">
          <h3>Matematika</h3>
          <p class="score-number">
            {{ result.math.correctCount }} / {{ result.math.total }}
          </p>
        </div>
      </div>

      <div
        v-for="section in [result.indo, result.math]"
        :key="section.label"
        class="subject-section"
      >
        <h2 class="subject-section-title">{{ section.label }}</h2>

        <table class="result-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Jawaban Anda</th>
              <th>Kunci Jawaban</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in section.results" :key="item.no">
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
      </div>

      <div class="result-footer">
        <button class="back-btn" @click="goBack">
          Kembali
        </button>

        <button class="retry-btn" @click="retryTest">
          Ulangi Test
        </button>
      </div>
    </div>

    <div
      v-else
      class="result-card"
    >
      <h2>Data hasil tidak ditemukan.</h2>

      <div class="result-footer">
        <button class="back-btn" @click="goBack">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../../styles/result.css'
import '../../styles/smp-fulltest-result.css'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const result = ref(null)

onMounted(() => {
  const saved = sessionStorage.getItem('smpFullTestResult')

  if (saved) {
    result.value = JSON.parse(saved)
  }
})

const goBack = () => {
  router.push('/smp')
}

const retryTest = () => {
  router.push('/smp/test')
}
</script>