// import React from 'react';
// import { Draggable } from 'react-draggable';

// const DraggableIcon = ({ iconSrc, label, onDrag, onStop }) => {
//   return (
//     <Draggable onDrag={onDrag} onStop={onStop}>
//       <div className="draggableIcon">
//         <img src={iconSrc} alt={label} />
//         <span>{label}</span>
//       </div>
//     </Draggable>
//   );
// };

// export default DraggableIcon;



import React from 'react';
import Draggable from 'react-draggable';

const DraggableIcon = ({ icon, label }) => {
    return (
        <Draggable>
            <div className="draggableIcon">
                <img src={icon} alt={label} />
                <span>{label}</span>
            </div>
        </Draggable>
    );
};

export default DraggableIcon;


// // DraggableIcon.js
// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// const DraggableIcon = ({ icon, altText }) => {
//     const iconRef = useRef(null);

//     useEffect(() => {
//         const element = iconRef.current;
//         gsap.set(element, { x: 0, y: 0 });

//         const onMouseMove = (e) => {
//             gsap.to(element, {
//                 x: `+=${e.movementX}`,
//                 y: `+=${e.movementY}`,
//                 onUpdate: function () {
//                     gsap.set(element, {
//                         x: `${element.getBoundingClientRect().left + window.scrollX}px`,
//                         y: `${element.getBoundingClientRect().top + window.scrollY}px`,
//                     });
//                 },
//             });
//         };

//         element.addEventListener('mousedown', (e) => {
//             e.preventDefault();
//             window.addEventListener('mousemove', onMouseMove);
//         });

//         window.addEventListener('mouseup', () => {
//             window.removeEventListener('mousemove', onMouseMove);
//         });

//         return () => {
//             element.removeEventListener('mousedown', onMouseMove);
//             window.removeEventListener('mouseup', onMouseMove);
//         };
//     }, []);

//     return (
//         <div ref={iconRef} className="draggableIcon">
//             <img src={icon} alt={altText} draggable="false" />
//         </div>
//     );
// };

// export default DraggableIcon;




// import React, { useRef, useEffect } from 'react';

// const DraggableIcon = ({ icon, altText }) => {
//     const iconRef = useRef(null);

//     useEffect(() => {
//         const iconElement = iconRef.current;
//         let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

//         const onMouseMove = (e) => {
//             if (!iconElement) return;
//             posX = mouseX - e.clientX;
//             posY = mouseY - e.clientY;
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             iconElement.style.left = (iconElement.offsetLeft - posX) + "px";
//             iconElement.style.top = (iconElement.offsetTop - posY) + "px";
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         const onMouseDown = (e) => {
//             e.preventDefault();
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         };

//         iconElement.addEventListener('mousedown', onMouseDown);

//         return () => {
//             iconElement.removeEventListener('mousedown', onMouseDown);
//         };
//     }, []);

//     return (
//         <div ref={iconRef} className="draggableIcon">
//             <img src={icon} alt={altText} />
//             <span>{altText}</span>
//         </div>
//     );
// };

// export default DraggableIcon;




// import React, { useRef, useEffect, useState } from 'react';

// const DraggableIcon = ({ iconName }) => {
//     const iconRef = useRef(null);
//     const [posX, setPosX] = useState(0);
//     const [posY, setPosY] = useState(0);

//     useEffect(() => {
//         const icon = iconRef.current;
//         let mouseX = 0, mouseY = 0;

//         const onMouseDown = (e) => {
//             e.preventDefault();
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         };

//         const onMouseMove = (e) => {
//             const deltaX = mouseX - e.clientX;
//             const deltaY = mouseY - e.clientY;
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             setPosX((prevX) => prevX - deltaX);
//             setPosY((prevY) => prevY - deltaY);
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         icon.addEventListener('mousedown', onMouseDown);

//         // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
//         return () => {
//             icon.removeEventListener('mousedown', onMouseDown);
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };
//     }, []);

//     return (
//         <div
//             ref={iconRef}
//             className={`draggableIcon ${iconName}Icon`}
//             style={{ left: `${posX}px`, top: `${posY}px` }}
//         >
//             {iconName}
//         </div>
//     );
// };

// export default DraggableIcon;






// import React, { useRef, useEffect, useState } from 'react';

// const DraggableIcon = ({ iconName }) => {
//     const iconRef = useRef(null);
//     const [posX, setPosX] = useState(0);
//     const [posY, setPosY] = useState(0);

//     useEffect(() => {
//         const icon = iconRef.current;
//         let mouseX = 0, mouseY = 0;

//         const onMouseDown = (e) => {
//             e.preventDefault();
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         };

//         const onMouseMove = (e) => {
//             const deltaX = mouseX - e.clientX;
//             const deltaY = mouseY - e.clientY;
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             setPosX((prevX) => prevX - deltaX);
//             setPosY((prevY) => prevY - deltaY);
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         icon.addEventListener('mousedown', onMouseDown);

//         return () => {
//             icon.removeEventListener('mousedown', onMouseDown);
//         };
//     }, []);

//     return (
//         <div
//             ref={iconRef}
//             className={`draggableIcon ${iconName}Icon`}
//             style={{ left: `${posX}px`, top: `${posY}px` }}
//         >
//             {iconName}
//         </div>
//     );
// };

// export default DraggableIcon;











// import React, { useRef, useEffect } from 'react';




// const DraggableIcon = ({ iconName }) => {
//     const iconRef = useRef(null);

//     useEffect(() => {
//         const icon = iconRef.current;
//         let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

//         const onMouseDown = (e) => {
//             e.preventDefault();
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         };

//         const onMouseMove = (e) => {
//             posX = mouseX - e.clientX;
//             posY = mouseY - e.clientY;
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             icon.style.left = (icon.offsetLeft - posX) + "px";
//             icon.style.top = (icon.offsetTop - posY) + "px";
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         icon.addEventListener('mousedown', onMouseDown);

//         return () => {
//             icon.removeEventListener('mousedown', onMouseDown);
//         };
//     }, []);

//     return (
//         <div ref={iconRef} className={`draggableIcon ${iconName}Icon`}>
//             {iconName}
//         </div>
//     );
// };

// export default DraggableIcon;
