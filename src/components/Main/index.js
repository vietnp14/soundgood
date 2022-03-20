import { useState } from "react";
import Image from 'next/image';

import Introduction from "./Introduction";
import Volume from "./Volume";
import { useVolumeContext } from '../contexts/useVolumeContext';
import CatLike from '../../images/cat_like.png';

const items = [
  {
    title: 'Forest',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Forest" />,
  },
  {
    title: 'Bird',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Bird" />,
  },
  {
    title: 'Campfire',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Campfire" />,
  },
  {
    title: 'Wind',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Wind" />,
  },
  {
    title: 'Rain',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Rain" />,
  },
  {
    title: 'Road',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Road" />,
  },
  {
    title: 'Ocean',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Ocean" />,
  },
  {
    title: 'Library',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Library" />,
  },
  {
    title: 'Rowling',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Rowling" />,
  },
  {
    title: 'Lighting',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Lighting" />,
  },
  {
    title: 'Office',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Office" />,
  },
  {
    title: 'Step',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Step" />,
  },
  {
    title: 'Keyboard',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Keyboard" />,
  },
  {
    title: 'Stadium',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Stadium" />,
  },
  {
    title: 'Cafe',
    imageElement: <Image src={CatLike} width="640px" height="640px" alt="Cafe" />,
  },
];

function Item({ title, imageElement }) {
  const [hovering, setHovering] = useState(false);
  const {
    currentListening,
    setCurrentListening,
  } = useVolumeContext();

  const isListening = currentListening.includes(title);
  const isActive = isListening || hovering;

  return (
    <div
      className={`item${isActive ? ' item__active' : ''}`}
      onClick={() => setCurrentListening(title)}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="item__title">
        {title}
      </div>

      <div id="image">
        {imageElement}
      </div>

      {
        isListening && (
        <Volume
          onClick={() => setCurrentListening(title)}
        />
        )
      }
    </div>
  )
}

function Main() {
  return (
  <div className="main">
    <Introduction />

    <div className="items">
      {
        items.map(({ title, imageElement }) => (
          <Item
            key={title}
            title={title}
            imageElement={imageElement}
          />
        ))
      }
    </div>
  </div>
  );
}

export default Main;
