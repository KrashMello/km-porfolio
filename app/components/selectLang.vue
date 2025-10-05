<template>
  <div class="group/select relative">
    <input
readOnly :value="lang"
      class="w-9 bg-transparent ring-0 outline-none focus:ring-slate-700 px-1 cursor-pointer font-bold">
    <ul class="hidden group-focus-within/select:flex flex-col absolute  gap-1 top-6 font-bold">
      <li class="hover:bg-slate-500 hover:text-white px-1">
        <button @click="useStateMachineStore().changeLang('es')">es</button>
      </li>
      <li class="hover:bg-slate-500 hover:text-white px-1">
        <button @click="useStateMachineStore().changeLang('en')">en</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
const lang = computed(() => useStateMachineStore().lang)
</script>
