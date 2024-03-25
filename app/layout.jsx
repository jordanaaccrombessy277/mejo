import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import BackToTop from './components/backToTop'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Méjo',
  description: 'Votre partenaire santé pour une vie meilleure.',
  icons: {
    icon: "méjo-ico.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  )
}
