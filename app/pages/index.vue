<template>
  <div class="flex flex-col">
    <ui-hero :data="data.hero" />
    <ui-experience :data="data.experience" />
    <ui-projects />
  </div>
</template>

<script setup>
const data = computed(() => useStateMachineStore().data);
</script>
