export function formatAmountAsPrice(locale: string, currency: string, amount: number) {
  return Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
