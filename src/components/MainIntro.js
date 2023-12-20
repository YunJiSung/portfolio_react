// MainIntro.js
import React, { useState } from 'react';
import { gsap } from 'gsap';
import Wallpaper from './Wallpaper';
import PortLayer from './PortLayer';

import oneIcon from '../assets/img/one.png';
import logoIcon from '../assets/img/Logo@3x.png';
import spotifyIcon from '../assets/img/spotify.png';
import newsfeedIcon from '../assets/img/newsfeed.png';

const MainIntro = () => {
    const [activeLayer, setActiveLayer] = useState('layer1');

    const toggleLayer = (layerName) => {
        if (activeLayer === layerName) {
            gsap.to(`.${layerName}`, { autoAlpha: 0, y: 20, duration: 0.5 });
            setActiveLayer('');
        } else {
            if (activeLayer) {
                gsap.to(`.${activeLayer}`, { autoAlpha: 0, y: 20, duration: 0.5 });
            }
            gsap.to(`.${layerName}`, { autoAlpha: 1, y: 0, duration: 0.5 });
            setActiveLayer(layerName);
        }
    };

    return (
        <div id="mainIntro">
            <Wallpaper />
            <div className="footer__info">
                <div className="menu">
                    <ul>
                        <li className="menu-item" onClick={() => toggleLayer('layer1')}>
                            <img src={oneIcon} alt="One" />
                        </li>
                        <li className="menu-item" onClick={() => toggleLayer('layer2')}>
                            <img src={logoIcon} alt="Logo" />
                        </li>
                        <li className="menu-item" onClick={() => toggleLayer('layer3')}>
                            <img src={spotifyIcon} alt="Spotify" />
                        </li>
                        <li className="menu-item" onClick={() => toggleLayer('layer4')}>
                            <img src={newsfeedIcon} alt="Newsfeed" />
                        </li>
                    </ul>
                </div>
            </div>
            <PortLayer layerClass="layer1" isActive={activeLayer === 'layer1'} />
            <PortLayer layerClass="layer2" isActive={activeLayer === 'layer2'} />
            <PortLayer layerClass="layer3" isActive={activeLayer === 'layer3'} />
            <PortLayer layerClass="layer4" isActive={activeLayer === 'layer4'} />
        </div>
    );
};

export default MainIntro;




// import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';
// import Wallpaper from './Wallpaper';
// import PortLayer from './PortLayer';



// const MainIntro = () => {
//     const [visibleLayer, setVisibleLayer] = useState(null);

//     useEffect(() => {
//         gsap.set(".layer", { autoAlpha: 0, y: 20 });
//     }, []);

//     const toggleLayer = (layerName) => {
//         if (visibleLayer === layerName) {
//             gsap.to(`.${layerName}`, { autoAlpha: 0, y: 20, duration: 0.5 });
//             setVisibleLayer(null);
//         } else {
//             gsap.to(".layer", { autoAlpha: 0, y: 20, duration: 0.5 });
//             gsap.to(`.${layerName}`, { autoAlpha: 1, y: 0, duration: 0.5 });
//             setVisibleLayer(layerName);
//         }
//     };
// const MainIntro = () => {
//     const [visibleLayer, setVisibleLayer] = useState('layer1');

//     useEffect(() => {
//         gsap.set(".layer", { autoAlpha: 0, y: 20 });
//         gsap.set(".layer1", { autoAlpha: 1 });
//     }, []);

//     const toggleLayer = (layerName) => {
//         setVisibleLayer(layerName);
//         gsap.to(".layer", { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//         gsap.to(`.${layerName}`, { autoAlpha: 1, y: 0, backdropFilter: 'blur(10px)', duration: 0.5 });
//     };

//     return (
//         <div id="mainIntro">
//             <Wallpaper />
//             <div className="footer__info">
//                 <div className="menu">
//                     <ul>
//                         <li className="menu1" onClick={() => toggleLayer('layer1')}>Menu 1</li>
//                         <li className="menu2" onClick={() => toggleLayer('layer2')}>Menu 2</li>
//                         <li className="menu3" onClick={() => toggleLayer('layer3')}>Menu 3</li>
//                         <li className="menu4" onClick={() => toggleLayer('layer4')}>Menu 4</li>
//                     </ul>
//                 </div>
//             </div>
//             <PortLayer layerClass="layer1" isVisible={visibleLayer === 'layer1'} />
//             <PortLayer layerClass="layer2" isVisible={visibleLayer === 'layer2'} />
//             <PortLayer layerClass="layer3" isVisible={visibleLayer === 'layer3'} />
//             <PortLayer layerClass="layer4" isVisible={visibleLayer === 'layer4'} />
//         </div>
//     );
// };

// export default MainIntro;
