<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProblemSection from './components/sections/ProblemSection.vue'
import PhilosophySection from './components/sections/PhilosophySection.vue'
import PillarsSection from './components/sections/PillarsSection.vue'
import BudgetCalendarSection from './components/sections/BudgetCalendarSection.vue'
import GoalsSection from './components/sections/GoalsSection.vue'
import HealthRunwaySection from './components/sections/HealthRunwaySection.vue'
import CoachSection from './components/sections/CoachSection.vue'
import NairaSection from './components/sections/NairaSection.vue'
import LoopSection from './components/sections/LoopSection.vue'
import RoadmapSection from './components/sections/RoadmapSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
</script>

<template>
  <div id="top">
    <AppHeader />
    <main>
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <PillarsSection />
      <BudgetCalendarSection />
      <GoalsSection />
      <HealthRunwaySection />
      <CoachSection />
      <NairaSection />
      <LoopSection />
      <RoadmapSection />
      <CtaSection />
    </main>
    <AppFooter />
  </div>
</template>
