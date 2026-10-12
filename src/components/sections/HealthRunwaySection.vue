<script setup>
import { useLandingStore } from '../../stores/landing'
import { nairaCompact } from '../../utils/format'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseCard from '../ui/BaseCard.vue'
import InsightCallout from '../ui/InsightCallout.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell>
    <SectionHeading kicker="Financial health & runway" title="Two numbers every owner should know without asking." />

    <div class="grid gap-6 lg:grid-cols-2">
      <BaseCard>
        <p class="text-sm font-medium text-stone">Business health score</p>
        <p class="mt-1 mb-6 font-serif text-4xl font-medium">{{ s.snapshot.health }}<span class="text-lg text-stone"> / 100</span></p>
        <ul class="space-y-4">
          <li v-for="h in s.healthBreakdown" :key="h.name" class="flex items-center gap-3 font-mono text-[13px]">
            <span class="w-36 shrink-0 text-ink-soft">{{ h.name }}</span>
            <div class="h-2 flex-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div class="h-full rounded-full bg-brand" :style="{ width: h.pct + '%' }" />
            </div>
            <span class="w-10 text-right">{{ h.pct }}%</span>
          </li>
        </ul>
      </BaseCard>

      <BaseCard>
        <p class="text-sm font-medium text-stone">Cash runway (months)</p>
        <p class="mt-1 mb-8 text-sm text-ink-soft">How long the business survives if revenue stopped today.</p>

        <div class="flex h-40 items-end gap-3 px-1" role="img" :aria-label="`Runway by month. Lowest in ${s.runwayLow.month} at ${s.runwayLow.months} months.`">
          <div v-for="r in s.runway" :key="r.month" class="relative flex-1">
            <span class="absolute -top-5 inset-x-0 text-center font-mono text-[11px] text-stone">{{ r.months }}</span>
            <div
              :class="['w-full rounded-t-md', r.month === s.runwayLow.month ? 'bg-gold' : 'bg-brand']"
              :style="{ height: (r.months / s.runwayMax) * 160 + 'px' }"
            />
          </div>
        </div>
        <div class="mt-2 flex gap-3 px-1" aria-hidden="true">
          <span v-for="r in s.runway" :key="r.month" class="flex-1 text-center font-mono text-[11px] text-stone">{{ r.month }}</span>
        </div>

        <InsightCallout tone="warn">
          Runway is shortest in {{ s.runwayLow.month }} at {{ s.runwayLow.months }} months. Your cash balance may fall below the {{ nairaCompact(s.safetyReserve) }} safety reserve around then.
        </InsightCallout>
      </BaseCard>
    </div>
  </SectionShell>
</template>
