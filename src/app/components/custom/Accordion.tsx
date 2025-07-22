import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionProps {
  description: string
  details: string
}

function AccordionProdukt({ description, details }: AccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Produkt Beschreibung</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{description}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Technische Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{details}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Lieferung & Rückgabe</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If youre not completely satisfied, simply return the item in
            its original condition.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionProdukt
