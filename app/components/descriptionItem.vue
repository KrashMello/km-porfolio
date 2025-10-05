<template>
  <div className="w-full md:w-[40%]">
    <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
      <slot name="title" />
    </dt>
    <dd className="py-3 pl-12">
      <slot name="description" />
    </dd>
  </div>
</template>
