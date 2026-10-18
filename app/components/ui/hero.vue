<template>
  <section id="me" class="relative flex min-h-screen w-full items-center overflow-hidden">
    <div
      class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-10 py-24 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-20 md:py-32">
      <div class="order-2 flex animate-[hero-in_600ms_ease-out_both] flex-col gap-5 md:order-1 md:gap-7">
        <div class="w-44 md:w-60">
          <img
class="h-auto w-full dark:hidden" src="/img/full_logo_light.png" alt="KrashMello" width="320"
            height="48">
          <img
class="hidden h-auto w-full dark:block" src="/img/full_logo_dark.png" alt="KrashMello" width="320"
            height="48">
        </div>
        <h1 class="font-display text-3xl font-medium tracking-tight text-content sm:text-4xl md:text-6xl lg:text-7xl">
          {{ data.title }}
        </h1>
        <p class="max-w-[58ch] text-base leading-relaxed text-content-muted md:text-xl">
          {{ data.description }}
        </p>
      </div>
      <div class="order-1 flex justify-center md:order-2 md:justify-end">
        <div
          class="w-48 animate-[hero-in_600ms_ease-out_both] [animation-delay:180ms] sm:w-60 md:w-[min(38vw,30rem)] md:translate-x-6 lg:translate-x-16">
          <img
class="h-auto w-full dark:hidden" src="/img/logoDeer_light.webp" alt="Ciervo KrashMello" width="512"
            height="512">
          <img
class="hidden h-auto w-full dark:block" src="/img/logoDeer_dark.webp" alt="Ciervo KrashMello"
            width="512" height="512">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    default: () => ({
      title: "Title",
      description: "Description"
    })
  }
})
</script>
