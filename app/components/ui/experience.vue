<template>
  <section id="experience"
    class="transition-color duration-500 ease-in-out snap-start w-full min-h-screen h-fit flex px-10 md:px-20 py-16 md:py-32 dark:bg-slate-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6">
    <div class="w-full max-w-7xl self-center">
      <header class="max-w-[1920px] mx-auto w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2
          class="transition-color duration-500 ease-in-out flex items-center gap-4 text-slate-600 dark:text-slate-200 text-3xl md:text-6xl font-normal">
          {{ data.title }}
          <span>
            <icons-case />
          </span>
        </h2>
      </header>
      <div class="w-full mx-auto max-w-[1920px]">
        <dl
          class="transition-color duration-500 ease-in-out text-slate-600 dark:text-cyan-200 grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-1 justify-center w-full">
          <DescriptionItem v-for="item in data.list" :key="`${item.name}-${item.zone}`">
            <template #title>
              {{ item.name }} - {{ item.zone }}
              <span class="transition-color duration-500 ease-in-out text-sm text-slate-500 dark:text-slate-300">
                {{ item.dateBegin }} - {{ item.dateEnd }}
              </span>
            </template>
            <template #description>
              <ul
                class="transition-color duration-500 ease-in-out text-slate-600 dark:text-slate-200 list-disc flex flex-col gap-3">
                <li v-for="task in item.task" :key="task">{{ task }}</li>
              </ul>
            </template>
          </DescriptionItem>
        </dl>
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
      list: []
    }
  }
})
</script>
