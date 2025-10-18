'use client';

import { useRef } from 'react';

export default function MusicPlayer() {
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
      <audio ref={audioRef} src="/tech-music.mp3" loop />
      <button onClick={togglePlay}>Play/Pause Tech Tune</button>
    </div>
  );
}
