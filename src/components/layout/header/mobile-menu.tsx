import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import SupportButton from '@/components/ui/support-button'
import { Link } from '@/i18n/routing'

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

            <SupportButton />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
