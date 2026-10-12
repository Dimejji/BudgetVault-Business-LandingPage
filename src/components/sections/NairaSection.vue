<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell>
    <SectionHeading
      kicker="Built around Nigeria, not adapted to it"
      title="Naira-native. SME-real."
      text="Every figure, category, and alert is built around how Nigerian businesses actually spend and get paid."
    />
    <ul class="flex flex-wrap gap-2.5">
      <li v-for="tag in s.nairaTags" :key="tag" class="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft">{{ tag }}</li>
    </ul>
  </SectionShell>
</template>
