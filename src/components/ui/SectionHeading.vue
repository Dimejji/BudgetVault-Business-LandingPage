<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  center: { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['mb-12 max-w-2xl', center && 'mx-auto text-center']">
    <p v-if="kicker" :class="['flex items-center gap-3 text-sm font-medium text-brand', center && 'justify-center']">
      <span class="h-px w-6 bg-brand/60" aria-hidden="true" />
      {{ kicker }}
    </p>
    <h2 class="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">{{ title }}</h2>
    <p v-if="text" class="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{{ text }}</p>
  </div>
</template>
