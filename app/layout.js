import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MusicPlayer from './components/MusicPlayer';
import './globals.css';

export const metadata = {
  title: 'OBED TECH KENYA - Web Hosting & Social Media Solutions',
  description: 'Your trusted partner for cutting-edge web hosting and social media downloader solutions in Kenya. Empowering businesses and creators with innovative technology.',
  keywords: 'web hosting Kenya, social media downloader, Kenya tech, website hosting, digital solutions',
  authors: [{ name: 'OBED TECH KENYA' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <div className="app">
          <Navigation />
          <AnimatedBackground />
          <main className="content fade-in">
            {children}
          </main>
          <MusicPlayer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
