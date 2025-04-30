import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {Toaster} from '@/components/ui/toaster';

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});

export const metadata: Metadata = {
  title: 'AgencyFlow - Marketing Solutions',
  description: 'Modern marketing solutions tailored for your growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Can add Header here if needed site-wide */}
          <main className="flex-1">{children}</main>
          {/* Can add Footer here if needed site-wide */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
