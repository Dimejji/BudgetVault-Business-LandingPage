<script setup>
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <SectionShell>
    <SectionHeading kicker="Product philosophy" title="Accounting tells you what happened. Budget Vault tells you what to do about it." />

    <div class="relative grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
      <div class="bg-raised p-8 sm:p-10">
        <p class="text-sm text-stone">Accounting software</p>
        <p class="mt-4 font-serif text-3xl italic leading-snug text-ink-soft">“What happened?”</p>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-soft">A ledger of the past: transactions recorded, categorized, and reconciled after the fact.</p>
      </div>
      <div class="cta-backdrop bg-brand p-8 text-white sm:p-10">
        <p class="text-sm text-white/70">Budget Vault Business</p>
        <p class="mt-4 font-serif text-3xl italic leading-snug">“What should we do with our money?”</p>
        <p class="mt-3 text-[15px] leading-relaxed text-white/85">A planning and decision layer that sits above the ledger, turning numbers into direction.</p>
      </div>
      <span class="absolute top-1/2 left-1/2 hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-brand shadow-sm md:grid" aria-hidden="true">→</span>
    </div>
  </SectionShell>
</template>
