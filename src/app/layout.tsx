import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/ui/theme-provider"
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mark Ghattas | Software Engineer",
  description: "Personal website of Mark Ghattas, software engineer and technology enthusiast.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "64x64 32x32 24x24 16x16", type: "image/png" }
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
