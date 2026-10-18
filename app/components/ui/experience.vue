<template>
  <section
id="experience"
    class="w-full scroll-mt-16 bg-surface-alt transition-colors duration-500 ease-in-out md:scroll-mt-20">
    <div class="mx-auto max-w-7xl px-10 py-24 md:px-20 md:py-32">
      <header class="mb-10 flex items-center gap-4 md:mb-14">
        <h2 class="font-display text-3xl font-medium text-content md:text-5xl">
          {{ data.title }}
        </h2>
        <icons-case class="size-7 text-accent md:size-9" aria-hidden="true" />
      </header>
      <dl class="relative ml-2 border-l-2 border-nord-9/40 pl-6 md:ml-3 md:pl-10">
        <DescriptionItem v-for="item in data.list" :key="`${item.name}-${item.zone}`" :current="!!item.current">
          <template #title>
            {{ item.name }}
            <span class="font-normal text-content-muted"> · {{ item.zone }}</span>
          </template>
          <template #meta>
            <span
v-if="item.current"
              class="mt-1 inline-block w-fit rounded-full bg-aurora-green px-2.5 py-0.5 text-xs font-medium text-nord-0 md:mt-0">
              {{ item.dateBegin }} — {{ item.dateEnd }}
            </span>
            <span v-else>{{ item.dateBegin }} — {{ item.dateEnd }}</span>
          </template>
          <template #description>
            <ul class="flex list-disc flex-col gap-2.5 pl-5 text-sm leading-relaxed text-content-muted marker:text-accent md:text-base">
              <li v-for="task in item.task" :key="task">{{ task }}</li>
            </ul>
          </template>
        </DescriptionItem>
      </dl>
    </div>
  </section>
</template>
<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    default: () => ({
      title: "Title",
      list: []
    })
  }
})
</script>
