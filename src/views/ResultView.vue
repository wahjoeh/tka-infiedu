<template>
  <div class="result-container">
    <div class="top-banner">
      <div class="banner-left">
        <h2>TKA InfiEdu</h2>
        <p>TKA Simulation Result</p>
      </div>

      <div class="banner-right">
          <h4>{{ subjectName }}</h4>
        <p>Reviu Hasil Simulasi</p>
      </div>
    </div>

    <div class="result-card">
      <div class="result-header">
        <div class="result-icon">📊</div>

        <h1 class="result-title">Reviu Hasil Simulasi</h1>

        <div class="result-subtitle">
          {{ subjectName }} - TKA
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
                {{ formatAnswer(item.userAnswer) }}
              </div>
            </td>

            <td>
              <div class="key-box">
                {{ formatAnswer(item.correctAnswer) }}
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
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const results = ref([])

const subject = computed(() => route.query.subject || 'indo')

const subjectName = computed(() => (
  subject.value === 'english'
    ? 'Bahasa Inggris'
    : subject.value === 'ipas' || subject.value === 'science'
      ? 'IPA'
    : subject.value === 'biologi'
      ? 'Biologi'
    : subject.value === 'sosiologi'
      ? 'Sosiologi'
      : 'Bahasa Indonesia'
))

const resultStorageKey = computed(() => (
  subject.value === 'english'
    ? 'englishResult'
    : subject.value === 'ipas'
      ? 'smpIpaResult'
    : subject.value === 'science'
      ? 'scienceResult'
    : subject.value === 'biologi'
      ? 'smaBiologiResult'
    : subject.value === 'sosiologi'
      ? 'smaSosiologiResult'
      : 'indoResult'
))

const formatAnswer = (answer) => {
  if (answer === undefined || answer === null || answer === '') {
    return 'Tidak dijawab'
  }

  if (Array.isArray(answer)) {
    return answer.length ? answer.join(', ') : 'Tidak dijawab'
  }

  return String(answer)
}

onMounted(() => {
  const savedResult = sessionStorage.getItem(resultStorageKey.value)

  if (savedResult) {
    results.value = JSON.parse(savedResult)
  }
})

const goBack = () => {
  if (subject.value === 'english') {
    router.push(`/${route.query.level || 'sma'}/practice/english`)
    return
  }

  if (subject.value === 'ipas' || subject.value === 'science') {
    router.push('/smp/practice/ipas')
    return
  }

  if (subject.value === 'sosiologi') {
    router.push('/sma/practice/sosiologi')
    return
  }

  if (subject.value === 'biologi') {
    router.push('/sma/practice/biologi')
    return
  }

  router.push('/sd/practice/indo')
}

const retryTest = () => {
  router.back()
}
</script>
