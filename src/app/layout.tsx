import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application with ShadCN and Tailwind CSS integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}