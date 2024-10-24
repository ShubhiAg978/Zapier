'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/main-ui/page-illustration'
import Header from '@/components/main-ui/header'
import Footer from '@/components/main-ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <main className="grow">
      <PageIllustration />
      <Header/>
      {children}
      <Footer />
    </main>
  )
}
