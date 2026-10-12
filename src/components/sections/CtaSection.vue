<script setup>
import { useLandingStore } from '../../stores/landing'
import BaseButton from '../ui/BaseButton.vue'

const s = useLandingStore()
</script>

<template>
  <section id="early-access" class="py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="cta-backdrop relative overflow-hidden rounded-3xl bg-brand-deep px-6 py-14 text-center text-white sm:px-14 sm:py-16">
        <p class="text-sm font-medium text-gold-soft">Early access for Nigerian SMEs</p>
        <h2 class="mx-auto mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
          Plan your money. Control your spending. Build your business.
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
          Budget Vault Business is in development. Join the early access list and help shape the MVP.
        </p>

        <form class="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" novalidate @submit.prevent="s.submitEarlyAccess">
          <label for="ea-email" class="sr-only">Work email</label>
          <input
            id="ea-email"
            v-model="s.signup.email"
            type="email"
            autocomplete="email"
            placeholder="you@yourbusiness.com"
            :aria-invalid="s.signup.status === 'error'"
            aria-describedby="ea-message"
            :disabled="s.signup.status === 'success'"
            class="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          />
          <BaseButton variant="light" type="submit" :disabled="s.signup.status === 'loading' || s.signup.status === 'success'">
            {{ s.signup.status === 'loading' ? 'Joining…' : 'Request access' }}
          </BaseButton>
        </form>

        <p id="ea-message" class="mt-3 min-h-5 text-sm" aria-live="polite">
          <span v-if="s.signup.status === 'success'" class="text-gold-soft">You're on the list. We'll be in touch.</span>
          <span v-else-if="s.signup.status === 'error'" class="text-gold-soft">{{ s.signup.error }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
