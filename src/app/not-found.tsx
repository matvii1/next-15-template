import BaseLayout from '@/components/layout/base-layout'
import NotFound from '@/components/layout/not-found'
import { routing } from '@/i18n/routing'

export default function RootNotFound(): React.JSX.Element {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFound />
    </BaseLayout>
  )
}
