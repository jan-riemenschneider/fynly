interface SectionProps {
  children: React.ReactNode
  fullWidth?: boolean
  background?: string
  className?: string
}

export function Section({
  children,
  fullWidth = false,
  background = '',
  className = '',
}: SectionProps) {
  if (fullWidth) {
    return (
      <section className={`col-span-12 w-screen ${background} ${className}`}>
        <div className="container mx-auto grid grid-cols-12 items-center gap-8 px-6">
          {children}
        </div>
      </section>
    )
  }

  return (
    <section className={`col-span-12 ${background} ${className}`}>
      <div className="container mx-auto grid grid-cols-12 items-center gap-8 px-6">
        {children}
      </div>
    </section>
  )
}
