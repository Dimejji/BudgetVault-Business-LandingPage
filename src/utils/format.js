const nf = new Intl.NumberFormat('en-NG')

/** 1400000 -> "₦1,400,000" */
export const naira = (n) => `₦${nf.format(n)}`

/** 8420000 -> "₦8.42M", 450000 -> "₦450K" */
export const nairaCompact = (n) => {
  if (n >= 1_000_000) return `₦${+(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `₦${Math.round(n / 1_000)}K`
  return `₦${n}`
}
