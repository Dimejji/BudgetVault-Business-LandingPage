<script setup>
import { useLandingStore } from '../../stores/landing'
import { nairaCompact } from '../../utils/format'
import BaseButton from '../ui/BaseButton.vue'
import DashboardPreview from './DashboardPreview.vue'

const s = useLandingStore()
</script>

<template>
  <section class="relative isolate pt-16 pb-24 lg:pt-24">
    <div class="hero-backdrop absolute inset-0 -z-10" aria-hidden="true" />

    <div class="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium text-brand-deep motion-safe:animate-rise">
          <span class="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          Built for Nigerian SMEs
        </span>
        <h1 class="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] motion-safe:animate-rise" style="animation-delay: 80ms">
          Your business's <em class="font-normal text-brand">financial command center.</em>
        </h1>
        <p class="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft motion-safe:animate-rise" style="animation-delay: 160ms">
          Plan your money, control your spending, and build your business from one place. Budget Vault Business replaces the bank app, the WhatsApp threads, the spreadsheet, and the notebook with a single financial operating system.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 motion-safe:animate-rise" style="animation-delay: 240ms">
          <BaseButton href="#early-access" arrow>Request early access</BaseButton>
          <BaseButton href="#budget" variant="ghost">See how it works</BaseButton>
        </div>
        <ol class="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone motion-safe:animate-rise" style="animation-delay: 320ms" aria-label="How it works">
          <template v-for="(step, i) in s.loop" :key="step">
            <li class="font-medium text-ink-soft">{{ step }}</li>
            <li v-if="i < s.loop.length - 1" aria-hidden="true">→</li>
          </template>
        </ol>
      </div>

      <div class="relative motion-safe:animate-rise" style="animation-delay: 200ms">
        <DashboardPreview />

        <!-- floating chips (decorative) -->
        <div class="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lg shadow-ink/10 sm:flex lg:-left-10" aria-hidden="true">
          <span class="grid size-9 place-items-center rounded-lg bg-gold-soft text-gold">⚠</span>
          <div>
            <p class="text-sm font-medium leading-tight">Payroll in {{ s.payrollDays }} days</p>
            <p class="font-mono text-xs text-stone">{{ nairaCompact(1_400_000) }} scheduled</p>
          </div>
        </div>
        <div class="absolute -top-5 -right-2 hidden items-center gap-3 rounded-xl border border-line bg-white py-2.5 pr-4 pl-2.5 shadow-lg shadow-ink/10 sm:flex lg:-right-6" aria-hidden="true">
          <span
            class="grid size-10 place-items-center rounded-full"
            :style="{ background: `conic-gradient(var(--color-brand) ${s.snapshot.health}%, var(--color-line) 0)` }"
          >
            <span class="grid size-7 place-items-center rounded-full bg-white font-mono text-[11px] font-semibold">{{ s.snapshot.health }}</span>
          </span>
          <p class="text-sm font-medium leading-tight">Health<br />score</p>
        </div>
      </div>
    </div>
  </section>
</template>
