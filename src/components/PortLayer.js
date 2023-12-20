// PortLayer.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PortLayer = ({ layerClass, isActive }) => {
    const layerRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            gsap.to(layerRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
        } else {
            gsap.to(layerRef.current, { autoAlpha: 0, y: 20, duration: 0.5 });
        }
    }, [isActive]);

    return (
        <div ref={layerRef} className={`portLayer ${layerClass}`}>
            {/* Layer-specific content goes here */}
        </div>
    );
};

export default PortLayer;





// import React from 'react';

// const PortLayer = ({ layerClass, isVisible }) => {
//     return (
//         <div className={`portLayer ${layerClass}`} style={{ display: isVisible ? 'block' : 'none' }}>
//             {/* 레이어 내용 */}
//         </div>
//     );
// };

// export default PortLayer;