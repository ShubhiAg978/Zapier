import './css/style.css'
import { Toaster } from "@/components/main-ui/toaster"

export const metadata = {
  title: "Automate your work today | Zapier",
  description: "Workflow automation software for everyone. Zapier automates your work across 7000+ app integrations, so you can focus on what matters.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      </head>
      <body className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight flex flex-col min-h-screen overflow-auto">
      {/* <body className="font-inter antialiased tracking-tight flex flex-col min-h-screen overflow-auto"> */}
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}





