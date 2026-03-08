const baseUrl =
  process.env.MODE === 'prod' ? `https://${process.env.SITE}` : 'http://localhost:3020'

const title = 'QuCore Auth'
const description =
  'Centralized authentication and authorization service for the QuCore Dynamic ecosystem'

export const siteConfig = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: `${title} logo`,
      },
    ],
    url: new URL(baseUrl),
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: ['/icon-512.png'],
    site: title,
    creator: 'Artem Zhytovoz',
  },
  robots: {
    index: false,
    follow: false,
  },
}
