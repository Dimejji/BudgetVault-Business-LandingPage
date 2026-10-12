import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { nairaCompact } from '../utils/format'

export const useLandingStore = defineStore('landing', () => {
  /* ---------- UI state ---------- */
  const menuOpen = ref(false)
  const toggleMenu = () => (menuOpen.value = !menuOpen.value)
  const closeMenu = () => (menuOpen.value = false)

  const navLinks = [
    { label: 'The problem', href: '#problem' },
    { label: 'Pillars', href: '#pillars' },
    { label: 'AI coach', href: '#coach' },
    { label: 'Roadmap', href: '#roadmap' },
  ]

  /* ---------- Snapshot ---------- */
  const today = { label: 'Tuesday, 25 August 2026', day: 25 }
  const snapshot = {
    balance: 8_420_000,
    available: 4_870_000,
    goalSavings: 800_000,
    health: 82,
  }

  /* ---------- Calendar ---------- */
  const calendar = [
    { day: 24, events: [] },
    { day: 25, events: [{ label: 'Internet', amount: 120_000 }] },
    { day: 26, urgent: true, events: [{ label: 'Supplier', amount: 450_000 }] },
    { day: 27, events: [] },
    { day: 28, urgent: true, events: [{ label: 'Payroll', amount: 1_400_000 }] },
    { day: 29, events: [] },
    { day: 30, events: [] },
    { day: 31, events: [{ label: 'Rent', amount: 500_000 }] },
  ]

  const upcomingEvents = computed(() => calendar.flatMap((d) => d.events.map((e) => ({ ...e, day: d.day }))))
  const obligations = computed(() => upcomingEvents.value.reduce((sum, e) => sum + e.amount, 0))
  const payroll = computed(() => upcomingEvents.value.find((e) => e.label === 'Payroll'))
  const payrollDays = computed(() => (payroll.value ? payroll.value.day - today.day : null))

  /* ---------- Budget ---------- */
  const budget = [
    { category: 'Payroll', planned: 1_500_000, actual: 1_400_000 },
    { category: 'Rent', planned: 500_000, actual: 500_000 },
    { category: 'Utilities', planned: 250_000, actual: 180_000 },
    { category: 'Marketing', planned: 400_000, actual: 280_000 },
    { category: 'Operations', planned: 600_000, actual: 520_000 },
    { category: 'Transport', planned: 200_000, actual: 140_000 },
  ]
  const budgetRows = computed(() => budget.map((r) => ({ ...r, left: r.planned - r.actual })))
  const marketingUnderPct = computed(() => {
    const m = budget.find((r) => r.category === 'Marketing')
    return Math.round((1 - m.actual / m.planned) * 100)
  })
  const redirectAmount = 80_000

  /* ---------- Dashboard alerts ---------- */
  const alerts = computed(() => [
    { type: 'warn', text: `Payroll is due in ${payrollDays.value} days` },
    { type: 'warn', text: 'Electricity bill increased 18%' },
    { type: 'ok', text: 'Marketing budget is on track' },
  ])

  /* ---------- Goals ---------- */
  const goals = { branchCapital: 12_000_000, branchAllocated: 5_400_000, monthlySurplus: 1_800_000, equipmentFunded: 67 }
  const chat = {
    question: 'Can we afford to open another branch next year?',
    verdict: 'Possible, but aggressive.',
    body: `Based on your current average monthly surplus of ${nairaCompact(goals.monthlySurplus)}, opening the branch would require approximately ${nairaCompact(goals.branchCapital)} in additional capital. You currently have ${nairaCompact(goals.branchAllocated)} allocated toward the expansion goal.`,
    recommendation: 'Increase monthly savings by ₦350K, reduce discretionary spending by about 8%, and delay the equipment purchase until Q2.',
  }

  /* ---------- Health & runway ---------- */
  const healthBreakdown = [
    { name: 'Cash reserve', pct: 90 },
    { name: 'Budget discipline', pct: 82 },
    { name: 'Savings', pct: 76 },
    { name: 'Obligations', pct: 88 },
    { name: 'Spending control', pct: 75 },
  ]
  const runway = [
    { month: 'Aug', months: 8.4 },
    { month: 'Sep', months: 7.9 },
    { month: 'Oct', months: 6.6 },
    { month: 'Nov', months: 8.8 },
    { month: 'Dec', months: 10.1 },
    { month: 'Jan', months: 12.4 },
  ]
  const runwayMax = computed(() => Math.max(...runway.map((r) => r.months)))
  const runwayLow = computed(() => runway.reduce((min, r) => (r.months < min.months ? r : min)))
  const safetyReserve = 5_000_000

  /* ---------- AI coach briefing ---------- */
  const briefing = computed(() => [
    { label: 'Available to spend', value: nairaCompact(snapshot.available) },
    { label: 'Due this week', value: nairaCompact(upcomingEvents.value.filter((e) => e.day <= 28).reduce((s, e) => s + e.amount, 0)) },
    { label: 'Payroll due in', value: `${payrollDays.value} days` },
    { label: 'Revenue vs. average', value: '+12%' },
    { label: 'Marketing vs. budget', value: `−${marketingUnderPct.value}%` },
    { label: 'Equipment goal', value: `${goals.equipmentFunded}% funded` },
  ])

  /* ---------- Marketing content ---------- */
  const loop = ['Plan', 'Spend', 'Track', 'Analyze', 'Improve', 'Grow']

  const problem = {
    chain: ['Bank app', 'WhatsApp', 'Excel', 'Calculator', 'Notebook', 'Accounting software', 'Payroll spreadsheet'],
    questions: [
      ['How much money', 'do we actually have?'],
      ['Which bills', 'are due, and who needs to be paid?'],
      ['Can we', 'afford payroll this month?'],
      ['What are we', 'saving toward, and are we on track?'],
      ['Where is our', 'money going, and why did it change?'],
      ['What financial', 'decision should we make next?'],
    ],
  }

  const pillars = [
    { icon: 'budget', span: 'lg:col-span-2', title: 'Budget Planner', text: 'Monthly and yearly budgets by category, with planned vs. actual tracked automatically.' },
    { icon: 'bills', title: 'Bills & Obligations', text: 'Every recurring obligation — rent, suppliers, tax, subscriptions — with smart due-date alerts.' },
    { icon: 'payroll', title: 'Payroll & Salary Planning', text: 'Employee records, salary components, and rolling payroll forecasts against income.' },
    { icon: 'goals', title: 'Goals & Dreams', text: 'Fund a branch, a van, or a hire with contribution pacing and target-date projections.' },
    { icon: 'settle', title: 'Spending & Settlement', text: 'Track who paid for what on the business’s behalf, and settle it cleanly.' },
    { icon: 'reports', span: 'lg:col-span-2', title: 'Reports & Financial History', text: 'Monthly reports that explain the “why” behind every change, not just the number.' },
    { icon: 'coach', span: 'lg:col-span-4', featured: true, title: 'AI Financial Coach', text: 'Ask your business’s finances a question and get a straight, specific answer. The coach reads the budget, bills, payroll, and goals together, so the answer fits your actual numbers.' },
  ]

  const nairaTags = [
    '₦ Naira formatting', 'POS expenses', 'Bank transfers', 'Bank charges', 'VAT', 'PAYE', 'Supplier payments',
    'Salaries', 'Mobile & data', 'Electricity', 'Fuel', 'Logistics', 'Inventory', 'Tax obligations',
  ]

  const roadmap = [
    { phase: 'MVP · Phase 1', title: 'The financial foundation', items: ['Business & owner profile', 'Dashboard', 'Budget Planner', 'Expenses', 'Bills & reminders', 'Goals', 'Monthly reports', 'Ask-a-question AI Coach'] },
    { phase: 'Phase 2', title: 'Team & intelligence', items: ['Payroll planning', 'Employee expenses', 'Settlements', 'Receipt uploads', 'Approval workflows', 'Recurring transactions', 'Financial calendar', 'Cash runway', 'Health score', 'Forecasting'] },
    { phase: 'Phase 3', title: 'Infrastructure', items: ['Bank integrations', 'Automatic transaction sync', 'Payment integrations', 'Salary payments', 'Supplier payments', 'Invoice management', 'Tax planning', 'Multi-currency'] },
    { phase: 'Phase 4', title: 'Budget Vault Intelligence', items: ['Continuous monitoring', 'Proactive recommendations', 'Advanced AI financial agent'] },
  ]

  /* ---------- Early access form ---------- */
  const signup = reactive({ email: '', status: 'idle', error: '' })

  async function submitEarlyAccess() {
    const email = signup.email.trim()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      signup.status = 'error'
      signup.error = 'Enter a valid email address.'
      return
    }
    signup.status = 'loading'
    signup.error = ''
    try {
      // TODO: replace with your real endpoint, e.g.
      // await fetch('/api/early-access', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      await new Promise((resolve) => setTimeout(resolve, 600))
      signup.status = 'success'
    } catch {
      signup.status = 'error'
      signup.error = 'Something went wrong. Try again in a moment.'
    }
  }

  return {
    menuOpen, toggleMenu, closeMenu, navLinks,
    today, snapshot, calendar, obligations, payrollDays,
    budgetRows, marketingUnderPct, redirectAmount, alerts,
    goals, chat,
    healthBreakdown, runway, runwayMax, runwayLow, safetyReserve,
    briefing, loop, problem, pillars, nairaTags, roadmap,
    signup, submitEarlyAccess,
  }
})
