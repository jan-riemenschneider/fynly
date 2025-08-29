import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

interface AccordionProps {
  firstTitle: string
  firstText?: string
  firstButtonText?: string
  firstButtonAction?: () => void

  secondTitle?: string
  secondText?: string
  secondButtonText?: string
  secondButtonAction?: () => void

  thirdTitle?: string
  thirdText?: string
  thirdButtonText?: string
  thirdButtonAction?: () => void
}

export function InfoAccordion({
  firstTitle,
  firstText,
  firstButtonText,
  firstButtonAction,
  secondTitle,
  secondText,
  secondButtonText,
  secondButtonAction,
  thirdTitle,
  thirdText,
  thirdButtonText,
  thirdButtonAction,
}: AccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{firstTitle}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {firstText && <p>{firstText}</p>}
          {firstButtonText && firstButtonAction && (
            <Button
              variant="link"
              size="link"
              onClick={firstButtonAction}
              className="justify-start p-0"
            >
              {firstButtonText}
            </Button>
          )}
        </AccordionContent>
      </AccordionItem>

      {secondTitle &&
        (secondText || (secondButtonText && secondButtonAction)) && (
          <AccordionItem value="item-2">
            <AccordionTrigger>{secondTitle}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {secondText && <p>{secondText}</p>}
              {secondButtonText && secondButtonAction && (
                <Button
                  variant="link"
                  size="link"
                  onClick={secondButtonAction}
                  className="justify-start p-0"
                >
                  {secondButtonText}
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        )}

      {thirdTitle && (thirdText || (thirdButtonText && thirdButtonAction)) && (
        <AccordionItem value="item-3">
          <AccordionTrigger>{thirdTitle}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {thirdText && <p>{thirdText}</p>}
            {thirdButtonText && thirdButtonAction && (
              <Button
                variant="link"
                size="link"
                onClick={thirdButtonAction}
                className="justify-start p-0"
              >
                {thirdButtonText}
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  )
}
