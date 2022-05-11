import Arrow from '../vectors/Arrow';
import Pause from '../vectors/Pause';
import { useState, useRef, useEffect } from 'react';

export default function LargeHero() {
  const videoRef = useRef(null);

  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className='large__hero'>
      <div className='video'>
        <video ref={videoRef}>
          <source src='/showreel.mp4' type='video/mp4' />
        </video>
      </div>
      <div className={`large__hero__text ${videoPlaying ? 'playing' : ''}`}>
        <h1>
          <span>Building brands </span>
          <span>for the future</span>
        </h1>
        <div
          className='view'
          onClick={() => {
            setVideoPlaying(!videoPlaying);

            if (videoPlaying) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          <div className='btn'>
            <span>{videoPlaying ? 'Pause showreel' : 'Watch showreel'}</span>
            <div className='arrow'>
              {videoPlaying ? <Pause /> : <Arrow />}
              <div className='btn__hover'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
