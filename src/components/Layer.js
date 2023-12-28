


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Layer = ({ isActive, content }) => {
    const layerRef = useRef(null);

    useEffect(() => {
        gsap.to(layerRef.current, { autoAlpha: isActive ? 1 : 0, duration: 0.5 });
    }, [isActive]);

    return (
        <div ref={layerRef} className={`portLayer ${isActive ? 'active' : ''}`}>
            {content}
        </div>
    );
};

export default Layer;









