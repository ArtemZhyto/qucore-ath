// Styles
import './global.css'
import './layout.scss'

// Types
import { Layout } from '@shared-types/layouts'

const RootLayout = ({ children }: Layout) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
