<template>
  <div @click="toggleTheme">
    <icons-moon v-if="theme === 'light'" />
    <icons-sun v-else />
  </div>
</template>

<script setup>
const toggleTheme = useStateMachineStore().toggleTheme;
const theme = computed(() => useStateMachineStore().theme);
</script>
