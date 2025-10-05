<template>
  <div class="group/select relative">
    <button
class="w-9 bg-transparent ring-0 outline-none focus:ring-slate-700 px-1 cursor-pointer font-bold"
      @click="handleShow()">{{ lang
      }}</button>
    <div :class="`${show ? 'flex' : 'hidden'} flex-col absolute  gap-1 top-6 font-bold`">
      <button
class="hover:bg-slate-500 hover:text-white size-12 md:size-7 px-1"
        @click="() => { useStateMachineStore().changeLang('es'); show = false }">
        es
      </button>
      <button
class="hover:bg-slate-500 hover:text-white px-1 size-12 md:size-7"
        @click="() => { useStateMachineStore().changeLang('en'); show = false }">
        en
      </button>
    </div>
  </div>
</template>
<script setup>
const lang = computed(() => useStateMachineStore().lang)
const show = ref(false)
const handleShow = () => {
  show.value = true
}
</script>
