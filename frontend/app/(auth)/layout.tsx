import PageIllustration from '@/components/main-ui/page-illustration'
import Header from '@/components/main-ui/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">
      <PageIllustration />
      <Header />
      {children}      
    </main>
  )
}
