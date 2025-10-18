import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './app/page';
import YouTube from './app/youtube/page';
import WebHosting from './app/webhosting/page';

function App() {
  return (
    <div className="app">
      <Navigation />
      <AnimatedBackground />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/webhosting" element={<WebHosting />} />
        </Routes>
      </div>
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
