<script setup>
import { useLandingStore } from '../../stores/landing'
import { naira, nairaCompact } from '../../utils/format'

const s = useLandingStore()
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-line bg-raised shadow-xl shadow-ink/10" role="img" aria-label="Preview of the Budget Vault Business dashboard">
    <div class="border-b border-line px-6 py-5">
      <p class="font-serif text-lg font-medium">Good morning, Budget Vault</p>
      <p class="mt-1 text-xs text-stone">{{ s.today.label }} · Your business at a glance</p>
    </div>

    <dl class="grid grid-cols-2 divide-x divide-line border-b border-line">
      <div class="px-6 py-5">
        <dt class="text-xs text-stone">Business balance</dt>
        <dd class="mt-1 font-serif text-2xl font-medium">{{ nairaCompact(s.snapshot.balance) }}</dd>
      </div>
      <div class="px-6 py-5">
        <dt class="text-xs text-stone">Available to spend</dt>
        <dd class="mt-1 font-serif text-2xl font-medium">{{ nairaCompact(s.snapshot.available) }}</dd>
      </div>
    </dl>

    <div class="px-6 py-5">
      <ul class="divide-y divide-dashed divide-line font-mono text-[13px]">
        <li class="flex justify-between py-2.5"><span>Upcoming obligations</span><span class="font-semibold">{{ naira(s.obligations) }}</span></li>
        <li class="flex justify-between py-2.5"><span>Payroll (due in {{ s.payrollDays }} days)</span><span class="font-semibold">{{ naira(1_400_000) }}</span></li>
        <li class="flex justify-between py-2.5"><span>Goal savings this month</span><span class="font-semibold">{{ naira(s.snapshot.goalSavings) }}</span></li>
      </ul>

      <div class="mt-4">
        <div class="flex justify-between text-xs text-stone"><span>Financial health</span><span class="text-ink">{{ s.snapshot.health }}%</span></div>
        <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-line"><div class="h-full rounded-full bg-brand" :style="{ width: s.snapshot.health + '%' }" /></div>
      </div>

      <ul class="mt-4 space-y-1.5 text-[13px] text-ink-soft">
        <li v-for="a in s.alerts" :key="a.text" class="flex gap-2">
          <span :class="a.type === 'warn' ? 'text-gold' : 'text-brand'" aria-hidden="true">{{ a.type === 'warn' ? '⚠' : '✓' }}</span>
          {{ a.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
