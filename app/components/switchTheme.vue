<template>
  <button
type="button" class="flex items-center justify-center rounded-lg p-2 text-content-muted transition-colors duration-200 hover:text-content"
    :aria-label="label" @click="toggleTheme">
    <icons-moon v-if="theme === 'light'" class="size-5" aria-hidden="true" />
    <icons-sun v-else class="size-5" aria-hidden="true" />
  </button>
</template>

<script setup>
const toggleTheme = useStateMachineStore().toggleTheme;
const theme = computed(() => useStateMachineStore().theme);
const label = computed(() => useStateMachineStore().data?.a11y?.toggleTheme ?? "Cambiar tema");
</script>
