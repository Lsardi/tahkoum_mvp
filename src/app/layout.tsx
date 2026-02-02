import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DZLearner - Apprends le Darija & Kabyle',
  description: "Application immersive d'apprentissage du darija algérien et du kabyle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
