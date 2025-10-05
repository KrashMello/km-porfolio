<template>
  <section
id="experience"
    class="snap-start w-full min-h-screen h-fit flex px-10 md:px-20 py-32 dark:bg-gray-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6">
    <div class="w-full max-w-7xl self-center">
      <header class="max-w-[1920px] mx-auto w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2 class=" flex items-center gap-4 text-[#5E81AC] dark:text-[#88C0D0] text-3xl md:text-6xl font-normal">
          {{ data.title }}
          <span>
            <icons-case />
          </span>
        </h2>
      </header>
      <div class="w-full mx-auto max-w-[1920px]">
        <dl class="text-slate-500 dark:text-white flex flex-wrap justify-start gap-12 justify-center w-full">
          <DescriptionItem v-for="item in data.list" :key="`${item.name}-${item.zone}`">
            <template #title>
              {{ item.name }} - {{ item.zone }}
              <span class="text-sm text-gray-500 dark:text-gray-300">
                {{ item.dateBegin }} - {{ item.dateEnd }}
              </span>
            </template>
            <template #description>
              <ul class="list-disc flex flex-col gap-3">
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
