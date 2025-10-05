<template>
  <div class="w-full min-h-screen bg-slate-200         dark:bg-slate-800">
    <header
      class="w-full  h-24 flex justify-center p-4 drop-shadow-2xl z-50 fixed bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div class="w-full flex justify-between items-center max-w-7xl">
        <img v-if="theme === 'light'" src="/img/logo64x64_light.png" alt="logo">
        <img v-else src="/img/logo64x64_dark.png" alt="logo">
        <nav class="">
          <ul class="flex items-center gap-4 text-zinc-600 dark:text-white">
            <li> <switch-theme /> </li>
            <li v-for="item in items" :key="item.key">
              <a
:href="item.to"
                class="px-2.5 py-2 focus:underline active:underline font-semibold underline-offset-4 hover:underline text-center">
                {{ item.title }}
              </a>
            </li>
            <li>
              <a
:href="`/Joel_Soteldo_CV_${lang}.pdf`" aria-label="github"
                class="px-2.5 py-2 focus:underline active:underline font-semibold underline-offset-4 hover:underline text-center"
                target="_blank">
                CV
              </a>
            </li>
            <li>
              <select-lang />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="w-full h-full">
      <NuxtPage />
    </main>
    <footer class="w-full flex flex-wrap items-center h-40 justify-center py-5 mt-12">
      <div class="flex flex-col gap-3">
        <logo-large />
        <div class="w-full flex text-zinc-600 dark:text-white  justify-center gap-3 ">
          <a href="https://www.linkedin.com/in/joel-enrike-soteldo" aria-label="linkedin" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="h-4 w-4" viewBox="0 0 24 24">
              <path
fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://twitter.com/Krashmello" aria-label="twitter" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M6.26933 4.43378L11.2747 11.5662H9.944L4.94756 4.43378H6.26933ZM16 16H0V0H16V16ZM12.9227 12.4444L9.20178 7.12L12.2436 3.55556H11.0782L8.67467 6.36444L6.71289 3.55556H3.29067L6.79378 8.56267L3.472 12.4444H4.65689L7.32444 9.31911L9.50933 12.4444H12.9227Z"
                fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.instagram.com/krashmello/" aria-label="instagram" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M4.44444 0C1.99022 0 0 1.99022 0 4.44444V11.5556C0 14.0098 1.99022 16 4.44444 16H11.5556C14.0098 16 16 14.0098 16 11.5556V4.44444C16 1.99022 14.0098 0 11.5556 0H4.44444ZM13.3333 1.77778C13.824 1.77778 14.2222 2.176 14.2222 2.66667C14.2222 3.15733 13.824 3.55556 13.3333 3.55556C12.8427 3.55556 12.4444 3.15733 12.4444 2.66667C12.4444 2.176 12.8427 1.77778 13.3333 1.77778ZM8 3.55556C10.4542 3.55556 12.4444 5.54578 12.4444 8C12.4444 10.4542 10.4542 12.4444 8 12.4444C5.54578 12.4444 3.55556 10.4542 3.55556 8C3.55556 5.54578 5.54578 3.55556 8 3.55556ZM8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29276 5.33333 8C5.33333 8.70724 5.61428 9.38552 6.11438 9.88562C6.61448 10.3857 7.29276 10.6667 8 10.6667C8.70724 10.6667 9.38552 10.3857 9.88562 9.88562C10.3857 9.38552 10.6667 8.70724 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61428 8.70724 5.33333 8 5.33333Z"
                fill="currentColor" />
            </svg>
          </a>
          <a href="https://github.com/KrashMello" aria-label="github" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M7.10197 0.0571176C3.4145 0.469726 0.448494 3.52303 0.0476819 7.23651C-0.35313 11.115 1.81125 14.5809 5.09791 15.9013C5.3384 15.9838 5.57889 15.8188 5.57889 15.4887V14.1683C5.57889 14.1683 5.25824 14.2509 4.85743 14.2509C3.73515 14.2509 3.25418 13.2606 3.17402 12.6829C3.09385 12.3529 2.93353 12.1053 2.69304 11.8577C2.45255 11.7752 2.37239 11.7752 2.37239 11.6927C2.37239 11.5276 2.61288 11.5276 2.69304 11.5276C3.17402 11.5276 3.57483 12.1053 3.73515 12.3529C4.13596 13.013 4.61694 13.1781 4.85743 13.1781C5.17808 13.1781 5.41856 13.0956 5.57889 13.013C5.65905 12.4354 5.89954 11.8577 6.38051 11.5276C4.53678 11.115 3.17402 10.0422 3.17402 8.22677C3.17402 7.31903 3.57483 6.41129 4.13596 5.75112C4.0558 5.58607 3.97564 5.17347 3.97564 4.59581C3.97564 4.26573 3.97564 3.85312 4.13596 3.52303C4.13596 3.35799 4.29629 3.27547 4.37645 3.27547H4.45661C4.85743 3.35799 5.65905 3.60555 6.38051 4.34825C6.86149 4.18321 7.42262 4.10068 7.98376 4.10068C8.5449 4.10068 9.10603 4.18321 9.58701 4.34825C10.3085 3.60555 11.1903 3.35799 11.5911 3.27547H11.6712C11.8316 3.27547 11.9117 3.35799 11.9919 3.52303C11.9919 3.85312 11.9919 4.26573 11.9919 4.59581C11.9919 5.25599 11.9117 5.58607 11.8316 5.75112C12.3927 6.41129 12.7935 7.23651 12.7935 8.22677C12.7935 10.0422 11.4307 11.115 9.58701 11.5276C10.068 11.9402 10.3886 12.6829 10.3886 13.4256V15.5712C10.3886 15.8188 10.6291 16.0663 10.9498 15.9838C13.9158 14.746 16 11.7752 16 8.30929C16 3.35799 11.9117 -0.520535 7.10197 0.0571176Z"
                fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  useStateMachineStore().inizialiceTheme();
  useStateMachineStore().inizialiceLang();
})
const theme = computed(() => useStateMachineStore().theme);
const lang = computed(() => useStateMachineStore().lang);
const items = ref([
  {
    key: "Inicio",
    title: "Inicio",
    to: "/#me",
  },
  {
    key: "Experience",
    title: "Experiencia",
    to: "/#experience",
  },
  {
    key: "projects",
    title: "Proyectos",
    to: "/#projects",
  },
]);
</script>
