<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell id="problem" alt>
    <SectionHeading
      kicker="The problem"
      title="SMEs rarely have an income problem. They have a money-management problem."
      text="A business can generate ₦5m in revenue and still struggle. Bills get forgotten, salaries aren't planned, spending isn't categorized, and business money quietly mixes with personal money."
    />

    <ol class="mb-10 flex flex-wrap items-center gap-y-3 rounded-xl border border-line bg-paper p-5 text-sm" aria-label="Tools businesses juggle today">
      <template v-for="(node, i) in s.problem.chain" :key="node">
        <li class="rounded-md border border-line bg-white px-3 py-1.5 text-ink-soft">{{ node }}</li>
        <li v-if="i < s.problem.chain.length - 1" class="px-2.5 text-stone" aria-hidden="true">→</li>
      </template>
    </ol>

    <ul class="grid overflow-hidden rounded-xl border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="[lead, rest] in s.problem.questions" :key="lead" class="bg-paper p-5 text-[15px] text-ink-soft">
        <span class="font-medium text-ink">{{ lead }}</span> {{ rest }}
      </li>
    </ul>
  </SectionShell>
</template>
