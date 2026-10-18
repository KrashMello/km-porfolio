<template>
  <a
:href="props.href" target="_blank" rel="noopener noreferrer"
    class="group flex h-full flex-col gap-3 rounded-xl border border-content/10 bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_10px_30px_-12px_rgba(46,52,64,0.35)] focus-visible:-translate-y-0.5 dark:bg-nord-1 dark:hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] md:p-7">
    <header class="flex w-full items-start justify-between gap-3">
      <h3 class="font-display text-lg font-semibold text-content">
        {{ props.title }}
      </h3>
      <svg
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true"
        class="size-5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        <path
fill="currentColor"
          d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-30a84 84 0 0 0-81.36 63a12 12 0 1 1-23.24-6A107.94 107.94 0 0 1 165 92h30l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01ZM192 204H44V88a12 12 0 0 0-24 0v120a20 20 0 0 0 20 20h152a12 12 0 0 0 0-24Z" />
      </svg>
    </header>
    <p v-if="props.description" class="line-clamp-2 text-sm leading-relaxed text-content-muted">
      {{ props.description }}
    </p>
    <footer class="mt-auto w-full pt-2 text-xs">
      <slot name="footer" />
    </footer>
  </a>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  href: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
});
</script>
