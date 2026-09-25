<template>
  <div v-if="visible" class="full-test-password-overlay" @click.self="close">
    <form class="full-test-password-dialog" @submit.prevent="submit">
      <h2>Full Test Simulation</h2>
      <p>Masukkan password untuk memulai simulasi.</p>
      <input v-model="inputPassword" type="password" placeholder="Password" autofocus />
      <p v-if="hasError" class="password-error">Password tidak sesuai.</p>
      <div class="full-test-password-actions">
        <button type="button" class="full-test-password-cancel" @click="close">Batal</button>
        <button type="submit" class="full-test-password-submit">Masuk</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import '../styles/password-modal.css'

// Ubah nilai ini untuk mengganti password seluruh pemakaian komponen.
const PRACTICE_PASSWORD = 'asd'

const props = defineProps({ visible: Boolean })
const emit = defineEmits(['close', 'unlocked'])
const inputPassword = ref('')
const hasError = ref(false)

watch(() => props.visible, (isVisible) => {
  if (isVisible) {
    inputPassword.value = ''
    hasError.value = false
  }
})

const close = () => emit('close')
const submit = () => {
  if (inputPassword.value !== PRACTICE_PASSWORD) {
    hasError.value = true
    return
  }

  emit('unlocked')
}
</script>
