<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell id="roadmap">
    <SectionHeading
      kicker="Building it in order"
      title="Not everything at once. The features that create the strongest value come first."
    />

    <ol class="ml-1.5 border-l-2 border-line pl-8">
      <li v-for="item in s.roadmap" :key="item.phase" class="relative pb-11 last:pb-0">
        <span class="absolute top-1 -left-[41px] size-3 rounded-full border-[3px] border-paper bg-brand ring-1 ring-brand/30" aria-hidden="true" />
        <p class="text-sm font-medium text-gold">{{ item.phase }}</p>
        <h3 class="mt-1.5 font-serif text-xl font-medium">{{ item.title }}</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="f in item.items" :key="f" class="rounded-md border border-line bg-raised px-2.5 py-1 text-[13px] text-ink-soft">{{ f }}</li>
        </ul>
      </li>
    </ol>
  </SectionShell>
</template>
