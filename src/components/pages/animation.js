import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationComponent = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
  });

  return (
    <div ref={ref} className={inView ? 'animated-element in-view' : 'animated-element'}>
      {/* Content to be animated */}
      <h2>Animate me!</h2>
    </div>
  );
};

export default AnimationComponent;
