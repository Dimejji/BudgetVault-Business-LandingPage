<script setup>
defineProps({
  href: { type: String, default: undefined },
  variant: { type: String, default: 'primary' },
  arrow: { type: Boolean, default: false },
})

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'
const variants = {
  primary:
    'border-transparent bg-brand text-white shadow-sm shadow-brand/30 hover:-translate-y-px hover:bg-brand-deep hover:shadow-md hover:shadow-brand/30',
  ghost: 'border-line bg-raised/60 text-ink hover:border-brand/40 hover:bg-raised',
  light: 'border-transparent bg-white text-brand-deep hover:bg-gold-soft',
}
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" :class="[base, variants[variant]]">
    <slot />
    <svg v-if="arrow" class="size-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </component>
</template>
