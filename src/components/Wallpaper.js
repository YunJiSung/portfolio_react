// Wallpaper.js
import React from 'react';
import DraggableIcon from './DraggableIcon';
// import youtubeIcon from '../../assets/img/youtube.png';
// import netflixIcon from '../../assets/img/netflix.png';


import youtubeIcon from '../assets/img/youtube.png'; // 경로를 프로젝트에 맞게 수정하세요
import netflixIcon from '../assets/img/netflix.png'; // 경로를 프로젝트에 맞게 수정하세요

const Wallpaper = () => {
    return (
        <div className="wallpapers">
            <DraggableIcon>
                <div className="draggableIcon youtubeIcon">
                    <img src={youtubeIcon} alt="youtube" />
                    <span>나만의 유튜브</span>
                </div>
            </DraggableIcon>
            <DraggableIcon>
                <div className="draggableIcon youtubeIcon">
                    <img src={netflixIcon} alt="youtube" />
                    <span>나만의 유튜브</span>
                </div>
            </DraggableIcon>
            {/* <DraggableIcon  icon={youtubeIcon} altText="YouTube" />
            <DraggableIcon icon={netflixIcon} altText="Netflix" /> */}
           
        </div>
    );
};

export default Wallpaper;



// import React from 'react';
// import DraggableIcon from './DraggableIcon';
// import youtubeIcon from '../assets/images/youtube.png';
// import netflixIcon from '../assets/images/netflix.png';

// const Wallpaper = () => {
//     return (
//         <div className="wallpapers">
//             <DraggableIcon iconName="youtube" />
//             <DraggableIcon iconName="netflix" />
//         </div>
//     );
// };

// export default Wallpaper;