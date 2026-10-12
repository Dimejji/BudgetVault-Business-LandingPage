<script setup>
defineProps({ name: { type: String, required: true } })

const paths = {
  budget: 'M3 7h18v12H3z M3 7l2.5-3.5h13L21 7 M15.5 13h2',
  bills: 'M7 3h10a1 1 0 011 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 011-1z M9 8h6 M9 12h6',
  payroll: 'M16 20v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 004 18.5V20 M10 12a3 3 0 100-6 3 3 0 000 6z M20 20v-1.5a3.5 3.5 0 00-2.5-3.35 M15.5 6.2a3 3 0 010 5.6',
  goals: 'M12 21a9 9 0 100-18 9 9 0 000 18z M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z M12 12h.01',
  settle: 'M7 7h12l-3-3 M17 17H5l3 3',
  reports: 'M5 21V10 M12 21V4 M19 21v-8',
  coach: 'M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z',
}
</script>

<template>
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="paths[name]" />
  </svg>
</template>
