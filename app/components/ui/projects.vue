<template>
  <section
id="projects"
    class="snap-start w-full min-h-screen h-fit flex px-5 md:px-20 py-32 flex-col justify-center md:justify-start items-start gap-6">
    <header class="w-full max-w-7xl mx-auto h-12 md:h-24 md:py-2 justify-start items-start gap-1">
      <h2 class=" flex items-center gap-4 text-[#5E81AC] dark:text-[#88C0D0] text-3xl md:text-6xl font-normal">
        Últimos proyectos
        <span>
          <icons-project-road />
        </span>
      </h2>
    </header>
    <div class="flex flex-wrap gap-5 max-w-7xl w-full mx-auto">
      <km-article
v-for="repo in repoData" :key="repo.id" :title="repo.name"
        :href="repo.homepage !== '' ? repo.homepage : repo.html_url" :description="repo.description">
        <template #footer>
          <div class="w-full flex text-slate-200 items-center justify-between gap-2.5 text-xs">
            <div class="flex gap-2.5">
              <span
:class="`${repo.language == 'TypeScript' ? 'bg-blue-700' : repo.language === 'Vue' ? 'bg-green-500' :
                repo.language === 'HTML' ? 'bg-orange-500' : 'bg-yellow-400'} flex w-3 h-3 rounded-full`" />
              <span class="font-bold text-zinc-600 dark:text-gray-100">
                {{ repo.language }}
              </span>
            </div>
            <span class="text-zinc-600 dark:text-gray-100">
              <strong>last Update:</strong>
              {{ repo.updated_at.replace(
                /(T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)/g,
                "",
              ) }}
            </span>
          </div>
        </template>
      </km-article>
    </div>
    <div class="w-full max-w-7xl mx-auto h-12 md:h-24 md:py-2 justify-start items-start gap-1">
      <h2 class=" flex items-center gap-4 text-[#5E81AC] dark:text-[#88C0D0] text-3xl md:text-6xl font-normal">
        Todos los proyectos
        <span>
          <icons-project-road />
        </span>
      </h2>
    </div>
    <div class="flex max-w-7xl mx-auto flex-wrap gap-5 w-full">
      <km-article
title="Kia Landing" href="https://kia-page.vercel.app/kiaSuscripcion"
        description="Landing de suscripcion kia motors ecuador">
        <template #footer>
          <div class="w-full flex text-slate-200 items-center justify-between gap-2.5 text-xs">
            <div class="flex gap-2.5">
              <span class="`bg-green-500 flex w-3 h-3 rounded-full`" />
              <span class="font-bold text-zinc-600 dark:text-gray-100">
                vue
              </span>
            </div>
            <span class="text-zinc-600 dark:text-gray-100">
              <strong>last Update:</strong>2023-10-11
            </span>
          </div>
        </template>
      </km-article>
      <km-article
v-for="repo in allRepoData" :key="`all-${repo.id}`" :title="repo.name"
        :href="repo.homepage != null ? repo.homepage : repo.html_url" :description="repo.description">
        <template #footer>
          <div class="w-full flex text-slate-200 items-center justify-between gap-2.5 text-xs">
            <div class="flex gap-2.5">
              <span
:class="`${repo.language === 'TypeScript' ? 'bg-blue-700' : repo.language === 'Vue' ? 'bg-green-500' :
                repo.language === 'HTML' ? 'bg-orange-500' : 'bg-yellow-400'} flex w-3 h-3 rounded-full`" />
              <span class="font-bold text-zinc-600 dark:text-gray-100">
                {{ repo.language }}
              </span>
            </div>
            <span class="text-zinc-600 dark:text-gray-100">
              <strong>last Update:</strong>
              {{ repo.updated_at.replace(
                /(T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)/g,
                "",
              ) }}
            </span>
          </div>
        </template>
      </km-article>
    </div>
  </section>
</template>
<script setup>
let repoData = ref([]);
let allRepoData = ref([]);
onMounted(async () => {
  await fetch("https://api.github.com/users/krashmello/repos")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      repoData.value = result;
      allRepoData.value = result
    });
  repoData.value = repoData.value.filter((v) => {
    return v.name === "dotfile" ||
      v.name === "MAPANI-front" ||
      v.name === "MAPANI_back" ||
      v.name === "krashmello.github.io" ||
      v.name === "KrashMello" ||
      v.name === "efelian" ||
      v.name === "trading-bot" ||
      v.name === "km-porfolio" ||
      v.name === "km-contable" ||
      v.name === "km-contable-back" ||
      v.name === "kanban-tui" ||
      v.name === "facebook-template" ||
      v.name === "ds4drv" ||
      v.name === "password-chest" ||
      v.name === "waterfall-firefox-theme" ||
      v.name === "poimandres.nvim" ||
      v.name === "km-component"
      ? false
      : true;
  });
  allRepoData.value = allRepoData.value.filter((v) => {
    return v.name === "MAPANI-front" ||
      v.name === "MAPANI_back" ||
      v.name === "krashmello.github.io" ||
      v.name === "waterfall-firefox-theme" ||
      v.name === "KrashMello" ||
      v.name === "ds4drv" ||
      v.name === "efelian" ||
      v.name === "kanban-tui" ||
      v.name === "trading-bot"
      ? false
      : true;
  });
})

</script>
