<template>
  <Analytics />
  <SpeedInsights />
  <NuxtLayout />
</template>
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
