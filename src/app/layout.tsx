import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, WhatsAppButton } from "@/components/global";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tecnovoltac.com"),
  title: {
    default: "Tecnovoltac | Instalaciones Eléctricas RETIE, Gas y Acabados en Pereira",
    template: "%s | Tecnovoltac",
  },
  description:
    "Servicios técnicos certificados en Pereira, Colombia: instalaciones eléctricas con certificación RETIE, instalaciones de gas y obras de acabados. Seguridad, calidad y profesionalismo garantizado.",
  keywords: [
    "Tecnovoltac",
    "instalaciones eléctricas Pereira",
    "certificación RETIE",
    "instalaciones de gas Pereira",
    "drywall Pereira",
    "obra blanca Pereira",
    "acabados Pereira",
    "electricista certificado Pereira",
    "servicios técnicos Pereira Colombia",
  ],
  authors: [{ name: "Tecnovoltac" }],
  creator: "Tecnovoltac",
  publisher: "Tecnovoltac",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://tecnovoltac.com",
    siteName: "Tecnovoltac",
    title: "Tecnovoltac | Servicios Técnicos Certificados en Pereira",
    description:
      "Instalaciones eléctricas RETIE, gas y acabados profesionales. Seguridad y calidad garantizada en Pereira y alrededores.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tecnovoltac - Servicios Técnicos Certificados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnovoltac | Servicios Técnicos Certificados en Pereira",
    description:
      "Instalaciones eléctricas RETIE, gas y acabados profesionales. Seguridad y calidad garantizada.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://tecnovoltac.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
