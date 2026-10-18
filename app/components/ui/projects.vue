<template>
  <section id="projects" class="w-full scroll-mt-16 md:scroll-mt-20">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-24 md:gap-20 md:px-20 md:py-32">
      <div class="flex flex-col gap-8">
        <header class="flex items-center gap-4">
          <h2 class="font-display text-3xl font-medium text-content md:text-5xl">
            {{ projects.title }}
          </h2>
          <icons-project-road class="size-7 text-accent md:size-9" aria-hidden="true" />
        </header>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <km-article
            :title="projects.elumian?.title" href="https://www.npmjs.com/package/elumian"
            :description="projects.elumian?.description">
            <template #footer>
              <km-repo-footer language="TypeScript" color-class="bg-nord-9" />
            </template>
          </km-article>
          <km-article
            :title="projects.templateCreator?.title" href="https://km-template-creator.vercel.app"
            :description="projects.templateCreator?.description">
            <template #footer>
              <km-repo-footer language="Vue" color-class="bg-aurora-green" />
            </template>
          </km-article>
          <km-article
            :title="projects.kia?.title" href="https://kia-page.vercel.app/kiaSuscripcion"
            :description="projects.kia?.description">
            <template #footer>
              <km-repo-footer language="Vue" color-class="bg-aurora-green" />
            </template>
          </km-article>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = computed(() => useStateMachineStore().data?.projects ?? {});
</script>
