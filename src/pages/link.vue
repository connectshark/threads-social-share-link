<template>
  <section class="py-10">
    <div class="w-11/12 mx-auto">
      <div class="bg-base-100 shadow-xl p-6 max-w-xl mx-auto rounded-xl">
        <div v-if="resolve">
          <div class="mb-10 font-mono">
            <input type="url" placeholder="Threads追蹤連結" class="input input-bordered w-full input-md" disabled
              :value="result" />
          </div>
        </div>
        <form v-else @submit.prevent="submitHandler">
          <div class="mb-10 font-mono">
            <label class="input input-bordered input-primary flex items-center gap-2">
              <i class='bx bx-user'></i>
              <input required type="text" class="grow" placeholder="使用者ID" v-model="username" minlength="1"
                maxlength="100" />
            </label>
          </div>
          <div class="text-center">
            <button type="submit" :disabled="loading" class="btn btn-active btn-primary">產生</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const username = ref('')

const loading = ref(false)
const resolve = ref(false)

const submitHandler = () => {
  resolve.value = true
}

const result = computed(() => `https://www.threads.net/intent/follow?username=${username.value}`)
</script>