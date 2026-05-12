import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Jessie Boggs | Mortgage Loan Strategist — Eastern WA & North Idaho',
  description: 'Jessie Boggs, Mortgage Loan Strategist. NMLS #2803455. Powered by Edge Home Finance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}