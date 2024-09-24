import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const bitter = Bitter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calculizky.com'), // TBD
  title: {
    template: 'Tomas Monguillot',
    default: 'Tomas Monguillot',
  },
  description: 'Tomas Monguillot business web card',
  applicationName: 'Tomas Monguillot',
  authors: [{ name: 'Izky', url: 'https://izky.dev/' }],
  keywords: 'expenses, manage expenses',
  openGraph: {
    title: 'Tomas Monguillot',
    description: 'Tomas Monguillot business web card',
    url: 'www.tomasmonguillot.com',
    siteName: 'Tomas Monguillot',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'opengraph-image.alt.txt',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${bitter.className} antialiased`}>
        <ThemeProvider defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
