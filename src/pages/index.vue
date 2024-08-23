<template>
<section class="py-10">
  <div class=" w-11/12 max-w-5xl mx-auto flex flex-col gap-8 md:flex-row items-center md:gap-32">
    <div class="grid w-40 md:order-1 md:w-2/3 max-w-48">
      <div class="row-start-1 row-end-2 col-start-1 col-end-2 blur-2xl bg-gradient-to-tr from-primary to-accent rounded-full scale-125"></div>
      <figure class="z-10 col-start-1 col-end-2 row-start-1 row-end-2 text-base-content">
        <ThreadsLogo/>
      </figure>
    </div>
    <div class="text-center md:text-left md:w-1/2 shrink-0">
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary text-4xl font-bold md:text-5xl leading-loose">ThreadsLinker</h1>
      <p class="text-xl md:text-2xl">Connect and Expand Your Threads Network</p>
    </div>
  </div>
</section>
<section class="w-11/12 mx-auto max-w-5xl">
  <div>
    <h2 class=" text-center md:text-left text-2xl">Follow</h2>
    <div class=" bg-secondary p-10 rounded-3xl">

    </div>
  </div>
</section>
</template>

<script setup>
import ThreadsLogo from '@/components/ThreadsLogo.vue'
</script>