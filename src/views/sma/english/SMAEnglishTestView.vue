<template>
  <div class="test-container sma-english-test exam-math-theme">

    <header class="test-header">

      <div class="header-title">
        <img src="/logo.png" alt="InfiEdu" class="brand-logo" />
        <h2>TKA SMA InfiEdu</h2>
        <p>TKA SMA - Bahasa Inggris (Paket {{ selectedPackage }})</p>
      </div>

      <div class="header-right">

        <div class="timer">
          Sisa Waktu: {{ formattedTime }}
        </div>

        <button
          class="question-list-btn"
          @click="toggleSidebar"
        >
          Daftar Soal
        </button>

      </div>

    </header>

    <div
      v-if="questions.length"
      class="test-card"
    >

      <h2>
        Soal Nomor {{ currentQuestion + 1 }} dari {{ questions.length }}
      </h2>

      <div
        class="question-box split-layout"
        :class="{ 'no-stimulus': !questions[currentQuestion]?.stimulus }"
      >

        <!-- ========================= -->
        <!-- STIMULUS -->
        <!-- ========================= -->

        <div
          v-if="questions[currentQuestion]?.stimulus"
          class="question-left"
        >

          <div
            v-if="questions[currentQuestion].stimulus.instruction"
            class="reading-title"
            v-html="formatFraction(questions[currentQuestion].stimulus.instruction)"
          >
          </div>

          <div
            v-if="questions[currentQuestion].stimulus.title"
            class="reading-subtitle"
            v-html="formatFraction(questions[currentQuestion].stimulus.title)"
          >
          </div>

          <img
            v-if="questions[currentQuestion].stimulus.image"
            :src="questions[currentQuestion].stimulus.image"
            class="question-image"
          />

          <div
            v-for="(paragraph,index) in questions[currentQuestion].stimulus.paragraphs || []"
            :key="index"
            class="reading-paragraph"
            v-html="formatFraction(paragraph)">
          </div>

          <div
            v-if="questions[currentQuestion].stimulus.source"
            class="question-source"
            v-html="formatFraction(questions[currentQuestion].stimulus.source)"
          >
          </div>

        </div>

        <!-- ========================= -->
        <!-- QUESTION -->
        <!-- ========================= -->

        <div class="question-right">

          <p class="question-text" v-html="formatFraction(questions[currentQuestion]?.question)">
          </p>

          <!-- ========================= -->
          <!-- SINGLE -->
          <!-- ========================= -->

          <div
            v-if="questions[currentQuestion]?.type === 'single'"
            class="options"
          >

            <label
              v-for="option in questions[currentQuestion].options"
              :key="option"
              class="option"
            >

              <input
                type="radio"
                :value="option"
                v-model="answers[currentQuestion]"
              />

              <span v-html="formatFraction(option)"></span>

            </label>

          </div>

          <!-- ========================= -->
          <!-- MULTIPLE -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'multiple'"
            class="options"
          >

            <label
              v-for="option in questions[currentQuestion].options"
              :key="option"
              class="option"
            >

              <input
                type="checkbox"
                :value="option"
                v-model="answers[currentQuestion]"
              />

              <span v-html="formatFraction(option)"></span>

            </label>

          </div>

          <!-- ========================= -->
          <!-- TRUE / FALSE -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'truefalse'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>
                  <th class="statement-col">
                    Statement
                  </th>

                  <th class="choice-col">
                    Correct
                  </th>

                  <th class="choice-col">
                    Wrong
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`tf-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`tf-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SETUJU / TIDAK SETUJU -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'agreement'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Statement
                  </th>

                  <th class="choice-col">
                    Agree
                  </th>

                  <th class="choice-col">
                    Disagree
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`agreement-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`agreement-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- BAIK / TIDAK BAIK -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'goodbad'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Statement
                  </th>

                  <th class="choice-col">
                    Good
                  </th>

                  <th class="choice-col">
                    Not Good
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`goodbad-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`goodbad-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SESUAI / KURANG SESUAI -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'suitable'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Statement
                  </th>

                  <th class="choice-col">
                    Suitable
                  </th>

                  <th class="choice-col">
                    Less Suitable
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`suitable-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`suitable-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- KATEGORI (KLASIFIKASI) -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'category'"
            class="tf-table-container"
          >

            <table class="tf-table category-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Statement
                  </th>

                  <th
                    v-for="cat in questions[currentQuestion].categories"
                    :key="cat"
                    class="choice-col category-col"
                  >
                    {{ cat }}
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td
                    v-for="cat in questions[currentQuestion].categories"
                    :key="cat"
                    class="choice-cell"
                  >
                    <input
                      type="radio"
                      :name="`category-${currentQuestion}-${index}`"
                      :value="cat"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- URUTAN (ORDERING) -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'order'"
            class="tf-table-container"
          >

            <table class="tf-table order-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Langkah
                  </th>

                  <th class="choice-col order-col">
                    Urutan
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <select
                      class="order-select"
                      v-model.number="answers[currentQuestion][index]"
                    >
                      <option :value="null">-</option>
                      <option
                        v-for="n in questions[currentQuestion].statements.length"
                        :key="n"
                        :value="n"
                      >
                        {{ n }}
                      </option>
                    </select>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SHORT ANSWER (JAWABAN PENDEK) -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'short'"
            class="short-answer-container"
          >

            <div class="short-answer-wrapper">
              <label class="short-answer-label">
                Jawaban:
                <input
                  type="text"
                  class="short-answer-input"
                  v-model="answers[currentQuestion]"
                  placeholder="Tulis jawabanmu di sini..."
                />
              </label>
            </div>

          </div>

        </div>

      </div>

      <div class="navigation">

        <button
          class="nav-btn prev-btn"
          @click="prevQuestion"
        >
          <span class="btn-text">← Sebelumnya</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button
          class="nav-btn flag-btn"
          :class="{ active: flagged[currentQuestion] }"
          @click="toggleFlag"
        >
          <span class="btn-text">Ragu-ragu</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="3"/>
          </svg>
        </button>

        <button
          class="nav-btn next-btn"
          @click="nextQuestion"
        >
          <span class="btn-text">Berikutnya →</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>

    </div>

    <div
      v-else
      class="test-card"
    >
      <h2>Data soal tidak ditemukan.</h2>
    </div>

    <!-- ========================= -->
    <!-- SIDEBAR -->
    <!-- ========================= -->

    <div
      class="sidebar"
      :class="{ open: showSidebar }"
    >

      <div class="sidebar-header">

        <h3>Daftar Soal</h3>

        <button @click="toggleSidebar">
          ✕
        </button>

      </div>

      <div class="question-grid">

        <div
          v-for="(q,index) in questions"
          :key="q.id"
          class="question-number"
          :class="{
            active: currentQuestion === index,
            answered: isAnswered(index),
            flagged: flagged[index]
          }"
          @click="goToQuestion(index)"
        >
          {{ q.displayId || q.id }}
        </div>

      </div>

      <div class="legend-box">

        <div class="legend-item">
          <span class="legend-color active-box"></span>
          Soal Aktif
        </div>

        <div class="legend-item">
          <span class="legend-color answered-box"></span>
          Terisi
        </div>

        <div class="legend-item">
          <span class="legend-color empty-box"></span>
          Belum Terisi
        </div>

      </div>

      <button
        class="submit-btn"
        @click="submitTest"
      >
        Submit Test
      </button>

    </div>

    <div
      v-if="showSidebar"
      class="overlay"
      @click="toggleSidebar"
    ></div>

  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

import {
  useRoute,
  useRouter
} from 'vue-router'

import '../../../styles/sma-english-test.css'

import fulltestQuestions from '../../../data/sma/english/fulltest'

const route = useRoute()
const router = useRouter()

// =========================
// PAKET SOAL (RANDOM PACKAGE, SEBARAN TOPIK RATA)
// =========================
// Bank soal berisi 50 soal dari 6 teks bacaan (id 1-50). Dibagi jadi
// 3 paket @ 20 soal, dengan jatah tiap teks proporsional terhadap
// jumlah soalnya (Borobudur 4, Japan 3, Batik 3, Rice Fields 3,
// Social Media 3, Text A&B 4 -> total 20/paket).
const TOPIC_POOLS = {
  borobudur: Array.from({ length: 8 }, (_, i) => i + 1),        // id 1-8
  japan: Array.from({ length: 8 }, (_, i) => i + 9),            // id 9-16
  batik: Array.from({ length: 8 }, (_, i) => i + 17),           // id 17-24
  ricefields: Array.from({ length: 8 }, (_, i) => i + 25),      // id 25-32
  socialmedia: Array.from({ length: 8 }, (_, i) => i + 33),     // id 33-40
  textab: Array.from({ length: 10 }, (_, i) => i + 41)          // id 41-50
}
const TOPIC_TARGET_PER_PACKAGE = {
  borobudur: 4,
  japan: 3,
  batik: 3,
  ricefields: 3,
  socialmedia: 3,
  textab: 4
} // 20/paket
const PACKAGE_COUNT = 3

function buildPackages() {
  // Tiap paket disusun sebagai daftar blok per teks bacaan, bukan
  // daftar id yang rata - supaya urutan blok bisa diacak nanti tanpa
  // memecah soal-soal dari teks yang sama.
  const packages = Array.from({ length: PACKAGE_COUNT }, () => [])

  Object.entries(TOPIC_POOLS).forEach(([topic, pool]) => {
    const perPackage = TOPIC_TARGET_PER_PACKAGE[topic]

    for (let pkg = 0; pkg < PACKAGE_COUNT; pkg++) {
      const ids = []

      for (let i = 0; i < perPackage; i++) {
        const poolIndex = (pkg * perPackage + i) % pool.length
        ids.push(pool[poolIndex])
      }

      packages[pkg].push({ topic, ids })
    }
  })

  return packages
}

const QUESTION_PACKAGE_BLOCKS = buildPackages() // index 0-2 => paket 1-3

const getRandomPackageIndex = () =>
  Math.floor(Math.random() * QUESTION_PACKAGE_BLOCKS.length)

// Paket bisa dipaksa lewat query (?package=2), misalnya untuk keperluan
// testing/preview. Kalau tidak ada atau tidak valid, siswa dapat paket acak.
const requestedPackageIndex = Number(route.query.package) - 1
const isTrial = route.query.mode === 'trial'

const selectedPackageIndex =
  Number.isInteger(requestedPackageIndex) && QUESTION_PACKAGE_BLOCKS[requestedPackageIndex]
    ? requestedPackageIndex
    : getRandomPackageIndex()

const selectedPackage = isTrial ? 'Trial' : selectedPackageIndex + 1

// Urutan blok teks bacaan TETAP (tidak diacak), supaya posisi soal di
// dalam satu paket selalu sama setiap kali dibuka - paket 1 akan
// selalu menampilkan soal dengan urutan yang sama.
const packageIds = isTrial
  ? [...fulltestQuestions].sort(() => Math.random() - 0.5).slice(0, 10).map((question) => question.id)
  : QUESTION_PACKAGE_BLOCKS[selectedPackageIndex].flatMap((block) => block.ids)

// Nomor soal ditampilkan berurutan 1..20 sesuai urutan blok di atas,
// bukan berdasarkan id asli di bank soal.
let questions = packageIds
  .map((id) => fulltestQuestions.find((question) => question.id === id))
  .filter(Boolean)
  .map((q, index) => ({
    ...q,
    displayId: index + 1,
    originalId: q.id
  }))

const currentQuestion = ref(0)
const showSidebar = ref(false)

const answers = ref({})
const flagged = ref({})

// Inisialisasi answers untuk setiap soal
questions.forEach((q, index) => {

  if (
    q.type === 'multiple' ||
    q.type === 'truefalse' ||
    q.type === 'agreement' ||
    q.type === 'goodbad' ||
    q.type === 'suitable' ||
    q.type === 'category' ||
    q.type === 'order'
  ) {

    answers.value[index] = []

  } else if (q.type === 'short') {

    answers.value[index] = ''

  } else if (q.type === 'single') {

    answers.value[index] = null

  }

})

// Durasi disesuaikan untuk 20 soal per paket (sebelumnya 90 menit
// untuk 30 soal acak). Materi berbasis bacaan sehingga waktu per soal
// dibuat lebih longgar dibanding SMP/SD. Ubah sesuai kebutuhan.
const timeLeft = ref(25 * 60)

let timerInterval = null

const formattedTime = computed(() => {

  const hours = String(
    Math.floor(timeLeft.value / 3600)
  ).padStart(2, '0')

  const minutes = String(
    Math.floor((timeLeft.value % 3600) / 60)
  ).padStart(2, '0')

  const seconds = String(
    timeLeft.value % 60
  ).padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`

})

const toggleSidebar = () => {

  showSidebar.value = !showSidebar.value

}

const goToQuestion = (index) => {

  currentQuestion.value = index
  showSidebar.value = false

}

const nextQuestion = () => {

  if (currentQuestion.value < questions.length - 1) {

    currentQuestion.value++

  }

}

const prevQuestion = () => {

  if (currentQuestion.value > 0) {

    currentQuestion.value--

  }

}

const toggleFlag = () => {

  flagged.value[currentQuestion.value] =
    !flagged.value[currentQuestion.value]

}

const isAnswered = (index) => {

  const q = questions[index]
  const ans = answers.value[index]

  if (q.type === 'single') {

    return ans !== null && ans !== undefined && ans !== ''

  }

  if (q.type === 'multiple') {

    return (
      Array.isArray(ans) &&
      ans.length > 0
    )

  }

  if (

    q.type === 'truefalse' ||

    q.type === 'agreement' ||

    q.type === 'goodbad' ||

    q.type === 'suitable' ||

    q.type === 'category' ||

    q.type === 'order'

  ) {

    return (

      Array.isArray(ans) &&

      ans.length === q.statements.length &&

      ans.every(item => item !== undefined && item !== null)

    )

  }

  if (q.type === 'short') {

    return ans && ans.trim().length > 0

  }

  return false

}

const formatParagraph = (text) => {
  if (!text) return ''
  return text.replace(/\n/g, '<br>')
}

// =========================
// FRACTION FORMATTER
// =========================

const formatFraction = (text) => {
  if (!text) return ''
  
  // Konversi pecahan seperti 1/2, 3/4, 12/25 menjadi format vertikal
  return text.replace(
    /(\d+)\s*\/\s*(\d+)/g,
    (_, top, bottom) => `<span class="fraction">
      <span class="top">${top}</span>
      <span class="bottom">${bottom}</span>
    </span>`
  )
}

const submitTest = () => {

  const resultData = questions.map((q, index) => {

    let correct = false

    if (q.type === 'single') {

      correct =
        answers.value[index] === q.answer

    }

    else if (q.type === 'multiple') {

      const user =
        [...(answers.value[index] || [])].sort()

      const key =
        [...q.answer].sort()

      correct =
        JSON.stringify(user) ===
        JSON.stringify(key)

    }

    else if (

      q.type === 'truefalse' ||

      q.type === 'agreement' ||

      q.type === 'goodbad' ||

      q.type === 'suitable' ||

      q.type === 'category' ||

      q.type === 'order'

    ) {

      correct =

        JSON.stringify(answers.value[index]) ===

        JSON.stringify(q.answer)

    }

    else if (q.type === 'short') {

      // Untuk jawaban pendek, kita bandingkan dengan case-insensitive
      // dan trim spasi
      correct = answers.value[index]?.trim().toLowerCase() === 
                q.answer?.trim().toLowerCase()

    }

    return {

      no: q.displayId || q.id,

      originalId: q.originalId || q.id,

      type: q.type,

      question: q.question,

      userAnswer: answers.value[index],

      correctAnswer: q.answer,

      correct

    }

  })

  sessionStorage.setItem(
    'englishResult',
    JSON.stringify(resultData)
  )

  router.push({
    path: '/result',
    query: { subject: 'english', level: 'sma' }
  })

}

onMounted(() => {

  timerInterval = setInterval(() => {

    if (timeLeft.value > 0) {

      timeLeft.value--

    }

    else {

      clearInterval(timerInterval)

      alert('Waktu habis!')

      submitTest()

    }

  }, 1000)

})

onUnmounted(() => {

  clearInterval(timerInterval)

})
</script>