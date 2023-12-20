// import React from 'react';

// const Layer = ({ id, active, children }) => {
//   const visibility = active ? 'visible' : 'hidden';
//   const opacity = active ? 1 : 0;

//   return (
//     <div id={id} className="layer" style={{ visibility, opacity }}>
//       <div className="layer__contents">
//         {children}
//       </div>
//       <div className="layer__footer">😎 윤지성 개발자입니다.</div>
//     </div>
//   );
// };

// export default Layer;



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









// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import "../assets/css/style.css";

// const Layer = ({ isActive }) => {
//     const layerRef = useRef(null);

//     useEffect(() => {
//         if (layerRef.current) {
//             gsap.to(layerRef.current, { autoAlpha: isActive ? 1 : 0, y: isActive ? 0 : 20, duration: 0.5 });
//         }
//     }, [isActive]);

//     return (
//         <div ref={layerRef} className="portLayer">
//             {/* 레이어 내용 */}
//         </div>
//     );
// };

// export default Layer;
