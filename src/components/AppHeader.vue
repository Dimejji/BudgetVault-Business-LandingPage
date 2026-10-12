<script setup>
import { useLandingStore } from '../stores/landing'
import BaseButton from './ui/BaseButton.vue'

const s = useLandingStore()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#top" class="flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight" @click="s.closeMenu">
        <span class="grid size-7 place-items-center rounded-md bg-brand font-mono text-sm font-semibold text-white" aria-hidden="true">₦</span>
        <span>Budget Vault <span class="font-normal text-stone">Business</span></span>
      </a>

      <nav class="hidden md:block" aria-label="Primary">
        <ul class="flex gap-8 text-sm text-ink-soft">
          <li v-for="link in s.navLinks" :key="link.href">
            <a :href="link.href" class="transition-colors hover:text-brand-deep">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden sm:block">
          <BaseButton href="#early-access">Request early access</BaseButton>
        </div>
        <button
          type="button"
          class="grid size-10 place-items-center rounded-lg border border-line md:hidden"
          :aria-expanded="s.menuOpen"
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          @click="s.toggleMenu"
        >
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path v-if="!s.menuOpen" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav v-if="s.menuOpen" id="mobile-nav" class="border-t border-line bg-paper md:hidden" aria-label="Mobile">
      <ul class="mx-auto flex max-w-6xl flex-col px-6 py-3 text-sm">
        <li v-for="link in s.navLinks" :key="link.href">
          <a :href="link.href" class="block py-3 text-ink-soft" @click="s.closeMenu">{{ link.label }}</a>
        </li>
        <li class="py-3">
          <BaseButton href="#early-access" @click="s.closeMenu">Request early access</BaseButton>
        </li>
      </ul>
    </nav>
  </header>
</template>
