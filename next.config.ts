import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    domains: ['placehold.co'],
  },
})

export default nextConfig
