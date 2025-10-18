import { useRef } from 'react';
import techMusic from '../assets/tech-music.mp3';

function MusicPlayer() {
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={techMusic} loop />
      <button onClick={togglePlay}>Play/Pause Tech Tune</button>
    </div>
  );
}

export default MusicPlayer;
