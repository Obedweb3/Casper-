import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MusicPlayer from './components/MusicPlayer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <MusicPlayer />
        </div>
      </body>
    </html>
  );
}
