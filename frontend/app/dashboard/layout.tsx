import PageIllustration from '@/components/main-ui/page-illustration'
import Header from './header'
import Footer from './footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <div>
      <Header />
      <PageIllustration />
      <main className="grow pt-16">       
        {children}     
      </main>
      <Footer /> 
    </div>
  )
}