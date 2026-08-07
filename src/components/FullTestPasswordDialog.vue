<template>
  <div v-if="visible" class="full-test-password-overlay" @click.self="close">
    <form class="full-test-password-dialog" @submit.prevent="submit">
      <h2>Full Test Simulation</h2>
      <p>Masukkan password untuk memulai simulasi.</p>
      <input v-model="password" type="password" placeholder="Password" autofocus />
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

const props = defineProps({ visible: Boolean })
const emit = defineEmits(['close', 'unlocked'])
const password = ref('')
const hasError = ref(false)
const FULL_TEST_PASSWORD = 'asd'

watch(() => props.visible, (isVisible) => {
  if (isVisible) { password.value = ''; hasError.value = false }
})

const close = () => emit('close')
const submit = () => {
  if (password.value !== FULL_TEST_PASSWORD) { hasError.value = true; return }
  emit('unlocked')
}
</script>
