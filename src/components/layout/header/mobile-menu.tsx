import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import LocaleSwitcherSelect from './locale-select'

import { links } from '.'

export default function MobileMenu(): React.JSX.Element {
  const [open, setOpen] = useState(false)
  const t = useTranslations('shared')

  function handleOpenChange(open: boolean) {
    setOpen(open)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className="lg:hidden">
        <Menu className="size-7" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-0 z-50 grid size-full max-w-lg place-items-center bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full">
          <Dialog.Title className="hidden" />
          <div className="absolute top-8 flex w-full items-center justify-between px-4">
            <Image
              alt="logo"
              className="h-[52px] w-[140px] object-cover"
              height={500}
              src={'/images/logos/logo-orange.png'}
              width={500}
            />
            <Dialog.Close>
              <X className="size-7" />
            </Dialog.Close>
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => {
              return (
                <Link
                  className="text-lg"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {t(link.label)}
                </Link>
              )
            })}

            <div className="mt-4">
              <LocaleSwitcherSelect />
            </div>

            <Link
              className={cn(
                'group/interactive relative block w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-orange p-2 px-6 text-center text-base font-bold text-white'
              )}
              href={'/'}
            >
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-white transition-all duration-300 md:group-hover/interactive:scale-[100.8]"></div>
                <span className="inline-block transition-all duration-300 md:group-hover/interactive:translate-x-12 md:group-hover/interactive:opacity-0">
                  Підтримати
                </span>
              </div>

              <div className="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-base font-bold text-orange opacity-0 transition-all duration-300 md:group-hover/interactive:-translate-x-5 md:group-hover/interactive:opacity-100">
                <span>Підтримати</span>
                <ArrowRight />
              </div>
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
