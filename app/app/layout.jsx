import '../styles/globals.scss';
import ScrollRevealInit from '../components/ScrollRevealInit';

export const metadata = {
  title: 'Tanya Gangegedara — Software Engineer',
  description:
    'Frontend-focused Software Engineer with 3+ years building production-grade platforms with React, Next.js & Angular.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
