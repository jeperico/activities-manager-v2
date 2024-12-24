import React from "react"
import type { Metadata } from "next"
import '../global.css'

export const metadata: Metadata = {
  title: "Activities Manager",
  description: "System to manage teacher's activities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <title>Activities Manager</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
