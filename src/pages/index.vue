<template>
<section class="bg-base-200 rounded-b-[3rem] shadow-sm py-32">
  <div class=" w-11/12 max-w-5xl mx-auto flex flex-col gap-8 md:flex-row items-center md:gap-32">
    <div class="grid w-40 md:order-1 md:w-2/3 max-w-48">
      <div class="row-start-1 row-end-2 col-start-1 col-end-2 blur-2xl bg-gradient-to-tr from-primary to-accent rounded-full scale-125"></div>
      <figure class="z-10 col-start-1 col-end-2 row-start-1 row-end-2 text-base-content">
        <ThreadsLogo/>
      </figure>
    </div>
    <div class="text-center md:text-left md:w-1/2 shrink-0">
      <h1 class="bg-clip-text font-focus text-transparent bg-gradient-to-r from-accent to-secondary text-4xl font-bold md:text-5xl leading-loose">ThreadsLinker</h1>
      <p class="text-xl md:text-2xl">一鍵連結想法到Threads</p>
    </div>
  </div>
</section>
<section class="py-20">
  <div class="w-11/12 mx-auto max-w-2xl bg-base-300 rounded-3xl p-10">
    <h2 class="text-center md:text-left text-xl/loose md:text-4xl/loose font-focus">Follow</h2>
    <p class="mb-10 text-center md:text-left text-lg md:text-2xl text-base-content/80">產生追蹤帳號連結</p>
    <Transition>
      <div class="mb-10" v-if="isUsername">
        <p class=" mb-4">
          <a class="underline text-xs" :href="followUser" target="_blank" rel="noopener noreferrer">{{ followUser }}<i class='bx bx-link-external'></i></a>
        </p>
        <p class=" space-x-2 text-center">
          <button class="btn btn-ghost" @click="clearUsername">
            <i class='bx bx-x bx-sm' />
          </button>
          <button class="btn btn-secondary" @click="copy(followUser)">
            <i v-if="copied" class='bx bxs-copy-alt bx-sm' />
            <i v-else class='bx bx-copy-alt bx-sm' />
          </button>
        </p>
      </div>
    </Transition>
    <form @submit.prevent="isUsername = true">
      <div class="mb-8">
        <label class="input input-bordered input-accent flex items-center gap-2">
          <ThreadsLogo class=" w-3"/>
          <input v-model.trim="username" :disabled="isUsername" required type="text" class="grow" placeholder="Threads" />
        </label>
      </div>
      <div class=" text-center">
        <button :disabled="isUsername" type="submit" class="btn btn-primary">產生</button>
      </div>
    </form>
  </div>
</section>
<section class="mb-20">
  <div class="w-11/12 mx-auto max-w-2xl bg-base-300 rounded-3xl p-10">
    <h2 class="text-center md:text-left text-xl/loose md:text-4xl/loose font-focus">Post</h2>
    <p class="mb-10 text-center md:text-left text-lg md:text-2xl text-base-content/80">製作發佈內容</p>
    <Transition>
    <div class="mb-10" v-if="isLink">
      <p class=" mb-4 text-center">
        <a class=" text-xs underline" :href="postContent" target="_blank" rel="noopener noreferrer">{{ postContent }}<i class='bx bx-link-external'></i></a>
      </p>
      <p class=" space-x-2 text-center">
        <button class="btn btn-ghost" @click="clearLink">
          <i class='bx bx-x bx-sm' />
        </button>
        <button class="btn btn-secondary" @click="copiedPost(postContent)">
          <i v-if="copiedPost" class='bx bxs-copy-alt bx-sm' />
          <i v-else class='bx bx-copy-alt bx-sm' />
        </button>
      </p>
    </div>
    </Transition>
    <form @submit.prevent="isLink = true">
      <div class="mb-8">
        <label class="input input-bordered input-accent flex items-center gap-2">
          <i class='bx bx-link'></i>
          <input v-model.trim="link" :disabled="isLink" required type="url" class="grow" placeholder="連結" />
        </label>
      </div>
      <div class=" text-center">
        <button type="submit" :disabled="isLink" class="btn btn-primary">產生</button>
      </div>
    </form>
  </div>
</section>
</template>

<script setup>
import ThreadsLogo from '@/components/ThreadsLogo.vue'
import { useClipboard } from '@vueuse/core'
import { ref, computed } from 'vue'

const username = ref('')
const isUsername = ref(false)

const followUser = computed(() => `https://www.threads.net/intent/follow?username=${ username.value }`)

const clearUsername = () => {
  isUsername.value = false
  username.value = ''
}

const {
  copy,
  copied
} = useClipboard()

const {
  copy: copyPost,
  copied: copiedPost
} = useClipboard()
const link = ref('')
const isLink = ref(false)

const clearLink =  () => {
  isLink.value = false
  link.value = ''
}

const postContent = computed(() => {
  return `https://www.threads.net/intent/post?url=${ encodeURI(link.value) }`
})
</script>