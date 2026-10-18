<template>
  <div ref="root" class="relative">
    <button
type="button" :aria-expanded="show" aria-haspopup="listbox" :aria-label="label"
      class="flex items-center gap-1 rounded-lg px-2.5 py-2 font-mono font-medium text-content-muted transition-colors duration-200 hover:text-content"
      @click="show = !show">
      {{ lang }}
    </button>
    <ul
v-show="show" role="listbox" :aria-label="label"
      class="absolute bottom-full left-0 z-50 mb-1 w-16 overflow-hidden rounded-lg border border-content/10 bg-surface shadow-lg md:top-full md:bottom-auto md:left-auto md:right-0 md:mt-1 md:mb-0">
      <li v-for="option in options" :key="option" role="option" :aria-selected="option === lang">
        <button
type="button"
          class="w-full px-3 py-2 text-left font-mono text-sm transition-colors duration-150 hover:bg-surface-alt"
          :class="option === lang ? 'text-accent' : 'text-content-muted'" @click="select(option)">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
const options = ["es", "en"];
const lang = computed(() => useStateMachineStore().lang);
const show = ref(false);
const root = ref(null);
const label = computed(() => useStateMachineStore().data?.a11y?.selectLang ?? "Seleccionar idioma");

const select = (option) => {
  useStateMachineStore().changeLang(option);
  show.value = false;
};

const onClickOutside = (event) => {
  if (root.value && !root.value.contains(event.target)) show.value = false;
};
const onKeydown = (event) => {
  if (event.key === "Escape") show.value = false;
};

onMounted(() => {
  document.addEventListener("click", onClickOutside);
  document.addEventListener("keydown", onKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
  document.removeEventListener("keydown", onKeydown);
});
</script>
