import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Video from './components/Video'
import ServiceManage from './components/ServiceManage'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Industry from './components/Industry'
import About from './components/About'
import Clients from './components/Clients'
import Journey from './components/Journey'
import ChooseUs from './components/ChooseUs'
import Blog from './components/Blog'
import Faq from './components/Faq'
import Trusted from './components/Trusted'
import Services from './components/Services'
import Statistics from './components/Statistics'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Register karo',
  description: 'registerkaro.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <TopNav/>
    <Header/>
    <Hero/>
    <Trusted/>
    <Services/>
    <About/>
    <Clients/>
    <ChooseUs/>
    <Journey/>
      <body className={inter.className}>{children}</body>
      <Video/>
     <Statistics/>
      <ServiceManage/>
      <Blog/>
      <Industry/>
      <Faq/>
      <Partners/>
    <Footer/>
    </html>
  )
}
