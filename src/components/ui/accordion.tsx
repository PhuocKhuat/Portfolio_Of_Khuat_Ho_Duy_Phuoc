import { forwardRef } from 'react'
import {
  Root as AccordionRoot,
  Item as AccordionPrimitiveItem,
  Header as AccordionPrimitiveHeader,
  Trigger as AccordionPrimitiveTrigger,
  Content as AccordionPrimitiveContent
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import cn from '@/lib/utils'

const Accordion = AccordionRoot

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitiveItem>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveItem>
>(({ className, ...props }, ref) => (
  <AccordionPrimitiveItem ref={ref} className={cn('border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitiveTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitiveHeader className='flex'>
    <AccordionPrimitiveTrigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
    </AccordionPrimitiveTrigger>
  </AccordionPrimitiveHeader>
))
AccordionTrigger.displayName = AccordionPrimitiveTrigger.displayName

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitiveContent
    ref={ref}
    className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitiveContent>
))
AccordionContent.displayName = AccordionPrimitiveContent.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
