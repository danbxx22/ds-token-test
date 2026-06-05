import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'DS Token Test',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
