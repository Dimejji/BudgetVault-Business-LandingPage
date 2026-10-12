<script setup>
defineProps({
  id: { type: String, default: undefined },
  alt: { type: Boolean, default: false },
})
</script>

<template>
  <section :id="id" :class="['py-20 sm:py-24', alt && 'border-y border-line bg-raised/60']">
    <div class="mx-auto max-w-6xl px-6">
      <slot />
    </div>
  </section>
</template>
