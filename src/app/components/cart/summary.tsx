const summary = [
  { label: 'Zwischensumme', value: total.toFixed(2) + ' €' },
  { label: 'Steuer', value: tax.toFixed(2) + ' €' },
  { label: 'Total', value: (total + tax).toFixed(2) + ' €' },
]

export function Summary() {
  return (
    <dl className="space-y-4 text-base font-medium text-gray-900">
      {summary.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between border-b border-gray-200 pb-2"
        >
          <dt>{item.label}</dt>
          <dd className="text-right slashed-zero tabular-nums">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
