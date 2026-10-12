<script setup>
defineProps({ tone: { type: String, default: 'brand' } })
const tones = {
  brand: 'border-brand/20 bg-brand-soft text-brand-deep',
  warn: 'border-gold/30 bg-gold-soft text-ink',
}
</script>

<template>
  <div :class="['mt-5 rounded-lg border p-4 text-sm leading-relaxed', tones[tone]]">
    <slot />
  </div>
</template>
