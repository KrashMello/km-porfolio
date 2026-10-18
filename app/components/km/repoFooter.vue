<template>
  <div class="flex w-full items-center justify-between gap-2.5">
    <div v-if="props.language" class="flex items-center gap-2.5">
      <span :class="`${props.colorClass} size-3 rounded-full`" aria-hidden="true" />
      <span class="font-medium text-content">{{ props.language }}</span>
    </div>
    <span v-if="props.updatedAt" class="text-content-muted">{{ props.label }}: <span class="font-mono">{{ props.updatedAt }}</span></span>
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: ""
  },
  updatedAt: {
    type: String,
    default: ""
  },
  colorClass: {
    type: String,
    default: "bg-nord-3"
  }
});
</script>
