import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDate(date: string, locale: string) {
  if (!date || isNaN(new Date(date).getTime())) {
    throw new Error('Invalid date format')
  }

  const dateTimeLocale = locale === 'ua' ? 'uk-UA' : 'en-US'
  const dateFormatter = new Intl.DateTimeFormat(dateTimeLocale, {
    dateStyle: 'long',
  })

  const formattedDate = dateFormatter.format(new Date(date))

  if (formattedDate.endsWith(' р.')) {
    return formattedDate.replace(' р.', '')
  }

  return formattedDate
}
