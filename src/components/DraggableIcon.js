// import React from 'react';
// import Draggable from 'react-draggable';

// const DraggableIcon = ({ icon, label, className, onClick }) => {
//     return (
//         <Draggable>
//             <div className={`icon ${className}`} onClick={onClick}>
//                 <img src={icon} alt={label} />
//                 <span>{label}</span>
//             </div>
//         </Draggable>
//     );
// };
// export default DraggableIcon;





// import React from 'react';
// import Draggable from 'react-draggable';

// const DraggableIcon = ({ icon, label, className, onClick }) => {
//     return (
//         <Draggable>
//             <div className={`icon ${className}`} onClick={onClick}>
//                 <img src={icon} alt={label} />
//                 <span>{label}</span>
//             </div>
//         </Draggable>
//     );
// };

// export default DraggableIcon;


import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const DraggableIcon = ({ icon, label, className, onClick }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={`icon ${className}`} onClick={onClick}>
                <img src={icon} alt={label} />
                <span>{label}</span>
            </div>
        </Draggable>
    );
};

export default DraggableIcon;



// import React, { useRef } from 'react';
// import Draggable from 'react-draggable';

// const DraggableIcon = ({ icon, label, className, onClick }) => {
//     const nodeRef = useRef(null);

//     const handleDragStop = () => {
//         console.log('드래그가 끝났습니다.');
//         // 드래그가 끝났을 때 실행될 추가적인 로직을 여기에 작성하세요.
//     };

//     return (
//         <Draggable nodeRef={nodeRef} onStop={handleDragStop}>
//             <div ref={nodeRef} className={`icon ${className}`} onClick={onClick}>
//                 <img src={icon} alt={label} />
//                 <span>{label}</span>
//             </div>
//         </Draggable>
//     );
// };

// export default DraggableIcon;
