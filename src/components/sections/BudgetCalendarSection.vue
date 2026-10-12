<script setup>
import { useLandingStore } from '../../stores/landing'
import { naira, nairaCompact } from '../../utils/format'
import SectionShell from '../ui/SectionShell.vue'
import BaseCard from '../ui/BaseCard.vue'
import InsightCallout from '../ui/InsightCallout.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell id="budget">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="text-sm font-medium text-brand">Budget Planner</p>
        <h2 class="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
          See what's planned, what's actual, and what's left, by category.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Budget Vault doesn't stop at showing a remaining balance. It reads the pattern behind it and tells you what to do with the difference.
        </p>
        <InsightCallout>
          <strong class="font-semibold">Budget Vault:</strong>
          “You're spending {{ s.marketingUnderPct }}% less on marketing than planned. You could redirect approximately {{ naira(s.redirectAmount) }} toward your equipment goal without affecting this month's operating budget.”
        </InsightCallout>
      </div>

      <BaseCard>
        <h3 class="mb-4 text-sm font-medium text-stone">August 2026 business budget</h3>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[420px] border-collapse font-mono text-[13px]">
            <thead>
              <tr class="border-b border-line text-left text-xs font-medium text-stone">
                <th scope="col" class="pb-3 font-medium">Category</th>
                <th scope="col" class="pb-3 text-right font-medium">Planned</th>
                <th scope="col" class="pb-3 text-right font-medium">Actual</th>
                <th scope="col" class="pb-3 text-right font-medium">Left</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in s.budgetRows" :key="row.category" class="border-b border-dashed border-line last:border-0">
                <th scope="row" class="py-2.5 text-left font-normal">{{ row.category }}</th>
                <td class="py-2.5 text-right tabular-nums">{{ naira(row.planned) }}</td>
                <td class="py-2.5 text-right tabular-nums">{{ naira(row.actual) }}</td>
                <td class="py-2.5 text-right tabular-nums text-brand-deep">{{ naira(row.left) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BaseCard>
    </div>

    <div id="calendar" class="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <BaseCard class="order-2 lg:order-1">
        <h3 class="mb-4 text-sm font-medium text-stone">August financial calendar</h3>
        <ul class="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <li
            v-for="d in s.calendar"
            :key="d.day"
            :class="['min-h-[72px] rounded-lg border p-2.5 text-xs', d.urgent ? 'border-gold bg-gold-soft' : 'border-line bg-white']"
          >
            <span class="text-stone">{{ d.day }} Aug</span>
            <p v-for="e in d.events" :key="e.label" :class="['mt-1.5 leading-snug', d.urgent ? 'font-semibold text-brick' : 'text-ink']">
              {{ e.label }}<br />{{ nairaCompact(e.amount) }}
            </p>
          </li>
        </ul>
      </BaseCard>

      <div class="order-1 lg:order-2">
        <p class="text-sm font-medium text-brand">Bills & financial calendar</p>
        <h2 class="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
          Every obligation, laid out before it becomes a problem.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Electricity, suppliers, payroll, rent — plotted on a calendar so the business can see its financial future, not just its past.
        </p>
        <InsightCallout>
          <strong class="font-semibold">Budget Vault:</strong>
          “You have {{ naira(s.obligations) }} in obligations due before month end. Your available balance may fall below your recommended safety reserve after these payments.”
        </InsightCallout>
      </div>
    </div>
  </SectionShell>
</template>
