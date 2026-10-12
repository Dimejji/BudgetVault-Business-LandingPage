<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell alt>
    <SectionHeading center kicker="The core loop" title="A financial operating system, not a spreadsheet." />
    <ol class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-y-3">
      <template v-for="(step, i) in s.loop" :key="step">
        <li class="rounded-full border border-brand bg-raised px-5 py-2.5 text-sm font-semibold text-brand-deep">{{ step }}</li>
        <li v-if="i < s.loop.length - 1" class="px-2.5 text-stone" aria-hidden="true">→</li>
      </template>
    </ol>
  </SectionShell>
</template>
