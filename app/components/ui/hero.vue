<template>
  <section
id="me"
    class="max-w-7xl self-center w-full min-h-screen h-fit flex items-center justify-center px-10 md:px-20 py-32">
    <div class=" w-full max-w-[1920px] mx-auto flex flex-col gap-6 md:gap-11">
      <div class="w-full flex justify-center">
        <img
class="sm:dark:block md:hidden hidden dark:hidden w-[320px] h-[356px]" src="/img/logoDeer_dark.webp"
          alt="Logo deer krashmello">
        <img
class="sm:dark:hidden sm:block hidden dark:hidden w-[320px] h-[356px]" src="/img/logoDeer_light.webp"
          alt="Logo deer krashmello">
        <img
class="dark:block hidden sm:dark:hidden sm:hidden w-[200px] h-[200px]" src="/img/logoDeer_dark.webp"
          alt="Logo deer krashmello">
        <img
class="dark:hidden block sm:dark:hidden sm:hidden w-[200px] h-[200px]" src="/img/logoDeer_light.webp"
          alt="Logo deer krashmello">
      </div>
      <div class="w-full flex justify-center">
        <img
class="sm:dark:block md:hidden dark:hidden hidden w-[320] h-[48px]" src="/img/full_logo_dark.png"
          alt="Logo deer krashmello">

        <img
class="sm:dark:hidden sm:block hidden dark:hidden w-[320px] h-[48px]" src="/img/full_logo_light.png"
          alt="Logo deer krashmello">

        <img
class="dark:block hidden sm:dark:hidden w-[200px] h-[32px]" src="/img/full_logo_dark.png"
          alt="Logo deer krashmello">

        <img
class="dark:hidden block sm:hidden w-[200px] h-[32px]" src="/img/full_logo_light.png"
          alt="Logo deer krashmello">
      </div>
      <div class="w-full flex-col text-slate-600 dark:text-gray-100 justify-start items-center gap-6 flex">
        <h1 class="text-center text-4xl md:text-7xl font-medium">
          {{ data.title }}
        </h1>
        <p class="self-stretch text-center text-lg md:text-2xl font-normal leading-5 md:leading-10">
          {{ data.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    default: {
      title: "Title",
      description: "Description"
    }
  }
})
</script>
