'use client'

import React from 'react';
import '@/styles/global.css';
import { Suspense } from 'react';
import Header from '@/layout/Header';
import { usePathname } from 'next/navigation';

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
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div>Loading...</div>
            </div>
          }
        >
          {pathname === '/login' ? (
            <>{children}</>
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </Suspense>
      </body>
    </html>
  )
}
