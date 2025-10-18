import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MusicPlayer from './components/MusicPlayer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navigation />
          <AnimatedBackground />
          <div className="content">{children}</div>
          <MusicPlayer />
          <Footer />
        </div>
      </body>
    </html>
  );
    }
