import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
});
export const metadata = {
  title: 'Toxic Frontent TV Shows',
  description: 'Codetest for Toxic by Emma Ramstedt',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
