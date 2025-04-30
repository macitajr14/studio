import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {Toaster} from '@/components/ui/toaster';

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});

export const metadata: Metadata = {
  title: 'TipoLike - Soluções Criativas',
  description: 'Soluções criativas e modernas adaptadas para o seu crescimento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Pode adicionar Cabeçalho aqui se necessário em todo o site */}
          <main className="flex-1">{children}</main>
          {/* Pode adicionar Rodapé aqui se necessário em todo o site */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
