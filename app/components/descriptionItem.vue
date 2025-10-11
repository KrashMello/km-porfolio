<template>
  <div className="w-full">
    <dt className="py-5 text-sm md:text-xl flex flex-col font-semibold border-b border-b-slate-400">
      <slot name="title" />
    </dt>
    <dd className="text-sm md:text-base py-3 pl-6 md:pl-12">
      <slot name="description" />
    </dd>
  </div>
</template>
