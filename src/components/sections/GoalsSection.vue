<script setup>
import { useLandingStore } from '../../stores/landing'
import SectionShell from '../ui/SectionShell.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const s = useLandingStore()
</script>

<template>
  <SectionShell alt>
    <SectionHeading
      kicker="Goals, meet intelligence"
      title="Not just tracking expenses. Planning the business's future."
      text="A goal isn't just a target and a progress bar. Budget Vault reads it against real cash flow and tells the owner what it would actually take."
    />

    <div class="max-w-3xl space-y-3 rounded-2xl border border-line bg-paper p-5 sm:p-7">
      <p class="ml-auto w-fit max-w-[85%] rounded-xl border border-line bg-white px-4 py-3 font-serif text-[15px] italic text-ink-soft">
        “{{ s.chat.question }}”
      </p>
      <div class="max-w-[92%] rounded-xl bg-brand px-4 py-4 text-sm leading-relaxed text-white">
        <p class="font-semibold text-gold-soft">{{ s.chat.verdict }}</p>
        <p class="mt-3">{{ s.chat.body }}</p>
        <p class="mt-3"><span class="font-semibold text-gold-soft">Recommended:</span> {{ s.chat.recommendation }}</p>
      </div>
    </div>
  </SectionShell>
</template>
