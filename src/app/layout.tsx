'use client'

import React from "react"
import '@/styles/global.css'
import Header from '@/layout/Header'
import { usePathname } from "next/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return(
    <html lang="en">
      <head />
      <body className="min-h-screen">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {pathname === '/login' ? (
          <>{children}</>
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
