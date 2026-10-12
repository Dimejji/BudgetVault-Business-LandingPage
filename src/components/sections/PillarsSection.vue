<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import PillarIcon from '../ui/PillarIcon.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell id="pillars" alt>
    <SectionHeading
      kicker="Seven pillars"
      title="Everything a business needs to run on one financial system."
      text="Underneath all seven is one system that understands the relationship between income, budget, bills, payroll, spending, savings, goals, and cash flow."
    />

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="p in s.pillars"
        :key="p.title"
        :class="[
          'group relative overflow-hidden rounded-2xl border p-6 transition duration-300',
          p.span,
          p.featured
            ? 'cta-backdrop border-brand-deep bg-brand-deep text-white sm:col-span-2 lg:flex lg:items-center lg:gap-8 lg:p-8'
            : 'border-line bg-paper hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-ink/5',
        ]"
      >
        <span
          :class="[
            'grid size-11 shrink-0 place-items-center rounded-xl',
            p.featured ? 'bg-white/10 text-gold-soft ring-1 ring-white/20' : 'bg-brand-soft text-brand ring-1 ring-brand/15 transition group-hover:bg-brand group-hover:text-white',
          ]"
        >
          <PillarIcon :name="p.icon" />
        </span>
        <div :class="p.featured ? 'mt-5 lg:mt-0' : 'mt-5'">
          <h3 :class="['font-serif font-medium', p.featured ? 'text-2xl' : 'text-lg']">{{ p.title }}</h3>
          <p :class="['mt-2 leading-relaxed', p.featured ? 'max-w-2xl text-base text-white/80' : 'text-sm text-ink-soft']">{{ p.text }}</p>
        </div>
      </li>
    </ul>
  </SectionShell>
</template>
