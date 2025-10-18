import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MusicPlayer from './components/MusicPlayer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <div className="relative z-10">
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
            <MusicPlayer />
          </div>
        </div>
      </body>
    </html>
  );
}
