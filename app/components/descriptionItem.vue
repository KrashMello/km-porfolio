<template>
  <div class="relative pb-10 last:pb-0 md:pb-14">
    <span
aria-hidden="true"
      class="absolute top-1.5 -left-[calc(1.5rem+7px)] size-3.5 rounded-full ring-4 ring-surface-alt transition-colors duration-500 md:-left-[calc(2.5rem+7px)]"
      :class="current ? 'bg-aurora-green' : 'bg-nord-9'" />
    <dt class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
      <span class="text-lg font-semibold text-content md:text-xl">
        <slot name="title" />
      </span>
      <span v-if="$slots.meta" class="font-mono text-sm text-content-muted">
        <slot name="meta" />
      </span>
    </dt>
    <dd class="mt-3 md:mt-4">
      <slot name="description" />
    </dd>
  </div>
</template>
<script setup>
defineProps({
  current: {
    type: Boolean,
    default: false
  }
})
</script>
