import { useState } from 'react';
import Image from 'next/image';
import VolumeUp from '../../../images/volume-up.png';

function Volume({ onClick }) {
  const [volumeValue, setVolumeValue] = useState(50);

  return (
    <div className="volume">
      <div
        className="volume__icon"
        onClick={onClick}
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src={VolumeUp}
          layout="fill"
          alt="Volume"
        />
      </div>

      <div className="volume__slider">
        <input
          className="volume__slider-input"
          type="range"
          min="0"
          max="100"
          value={volumeValue}
          onChange={(event) => setVolumeValue(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Volume;
