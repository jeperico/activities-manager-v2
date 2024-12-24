'use client'

import React from 'react'
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen">
        {pathname === '/login' ? (
          <>{children}</>
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  )
}
