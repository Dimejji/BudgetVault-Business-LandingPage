<script setup>
import { useLandingStore } from '../../stores/landing'
import { naira } from '../../utils/format'
import SectionShell from '../ui/SectionShell.vue'
import BaseCard from '../ui/BaseCard.vue'
import InsightCallout from '../ui/InsightCallout.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell id="coach" alt>
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="text-sm font-medium text-brand">AI Financial Coach</p>
        <h2 class="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
          A daily briefing that understands your business's actual numbers.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Not a generic chatbot bolted onto a dashboard. An assistant that reads the budget, the bills, the payroll, and the goals together, then tells the owner what matters today.
        </p>
      </div>

      <BaseCard>
        <p class="mb-3 font-serif text-lg font-medium">Good morning. Here's what matters today.</p>
        <dl class="divide-y divide-dashed divide-line font-mono text-[13px]">
          <div v-for="row in s.briefing" :key="row.label" class="flex justify-between py-2.5">
            <dt>{{ row.label }}</dt>
            <dd class="font-semibold">{{ row.value }}</dd>
          </div>
        </dl>
        <InsightCallout>Consider moving {{ naira(150_000) }} from your unused operations budget into your equipment goal.</InsightCallout>
      </BaseCard>
    </div>
  </SectionShell>
</template>
