<template>
  <div class="result-container">
    <div class="top-banner">
      <div class="banner-left">
        <h2>TKA InfiEdu</h2>
        <p>TKA SMP Simulation Result</p>
      </div>

      <div class="banner-right">
        <h4>Simulasi Lengkap</h4>
        <p>Bahasa Indonesia + Bahasa Inggris + Matematika + IPA</p>
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
        <div v-for="section in sections" :key="section.label" class="score-card">
          <h3>{{ section.label.split(' (')[0] }}</h3>
          <p class="score-number">{{ section.correctCount }} / {{ section.total }}</p>
        </div>
      </div>

      <div
        v-for="section in sections"
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
                  <span v-html="formatReviewAnswer(item.userAnswer)"></span>
                </div>
              </td>

              <td>
                <div class="key-box">
                  <span v-html="formatReviewAnswer(item.correctAnswer)"></span>
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
import { ref, computed, onMounted } from 'vue'

const router = useRouter()
const result = ref(null)
const sections = computed(() => result.value
  ? [result.value.indo, result.value.english, result.value.math, result.value.ipas].filter(Boolean)
  : [])

const formatReviewAnswer = (answer) => {
  const escaped = String(answer ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  return escaped.replace(/\^\{?(-?\d+)\}?/g, '<sup class="math-exponent">$1</sup>')
}

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
