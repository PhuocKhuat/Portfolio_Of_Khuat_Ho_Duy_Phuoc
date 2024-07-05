'use client'

import { forwardRef, ElementRef, ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import {
  Root as DropdownMenu,
  Trigger as DropdownMenuTrigger,
  Group as DropdownMenuGroup,
  Portal as DropdownMenuPortal,
  Sub as DropdownMenuSub,
  RadioGroup as DropdownMenuRadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item as DropdownMenuItem,
  CheckboxItem as DropdownMenuCheckboxItem,
  RadioItem as DropdownMenuRadioItem,
  Label as DropdownMenuLabel,
  Separator as DropdownMenuSeparator,
  ItemIndicator
} from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons'

import cn from '@/lib/utils'

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className='ml-auto h-4 w-4' />
  </SubTrigger>
))
DropdownMenuSubTrigger.displayName = SubTrigger.displayName

const DropdownMenuSubContent = forwardRef<ElementRef<typeof SubContent>, ComponentPropsWithoutRef<typeof SubContent>>(
  ({ className, ...props }, ref) => (
    <SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
)
DropdownMenuSubContent.displayName = SubContent.displayName

const DropdownMenuContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPortal>
      <Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </DropdownMenuPortal>
  )
)
DropdownMenuContent.displayName = Content.displayName

const CustomDropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuItem> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
CustomDropdownMenuItem.displayName = DropdownMenuItem.displayName

const CustomDropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuCheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuCheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <CheckIcon className='h-4 w-4' />
      </ItemIndicator>
    </span>
    {children}
  </DropdownMenuCheckboxItem>
))
CustomDropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem.displayName

const CustomDropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuRadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuRadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <DotFilledIcon className='h-4 w-4 fill-current' />
      </ItemIndicator>
    </span>
    {children}
  </DropdownMenuRadioItem>
))
CustomDropdownMenuRadioItem.displayName = DropdownMenuRadioItem.displayName

const CustomDropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuLabel>,
  ComponentPropsWithoutRef<typeof DropdownMenuLabel> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuLabel
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
CustomDropdownMenuLabel.displayName = DropdownMenuLabel.displayName

const CustomDropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuSeparator>,
  ComponentPropsWithoutRef<typeof DropdownMenuSeparator>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeparator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
))
CustomDropdownMenuSeparator.displayName = DropdownMenuSeparator.displayName

const DropdownMenuShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): JSX.Element => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  CustomDropdownMenuItem as DropdownMenuItem,
  CustomDropdownMenuCheckboxItem as DropdownMenuCheckboxItem,
  CustomDropdownMenuRadioItem as DropdownMenuRadioItem,
  CustomDropdownMenuLabel as DropdownMenuLabel,
  CustomDropdownMenuSeparator as DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
}
