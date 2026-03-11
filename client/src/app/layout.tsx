// Styles
import './global.css'
import './layout.scss'

// Types
import { Layout } from '@shared-types/layouts'

// Font
import { Prosto_One } from 'next/font/google'

const prosto = Prosto_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const RootLayout = ({ children }: Layout) => {
  return (
    <html lang='en'>
      <body className={prosto.className}>{children}</body>
    </html>
  )
}

export default RootLayout
