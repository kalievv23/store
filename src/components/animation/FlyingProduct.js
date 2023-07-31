import React from 'react';
import { useTransition, animated as a } from '@react-spring/web';

const FlyingProduct = ({ startPosition, endPosition, key, url }) => {
  const transition = useTransition(true, {
    from: { xy: startPosition, opacity: 1 },
    enter: { xy: endPosition, opacity: 0 },
    config: { duration: 700 },
  });

  return transition((style, item) => item && 
    <a.div
      key={key}  
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 90, 
        height: 120, 
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        transform: style.xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
        opacity: style.opacity
      }}
    />
  );
}

export default FlyingProduct;
