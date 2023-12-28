// import React from 'react';
// import MainIntro from '../components/MainIntro';
// import DraggableIcon from '../components/DraggableIcon';
// import PortLayer from '../components/PortLayer';
// import Wallpaper from '../components/Wallpaper';
// import '../assets/css/style.css'; // CSS 파일 임포트
// const Home = () => {
//   return (
//     <div>
//       <MainIntro >
//         <Wallpaper >
//             <DraggableIcon />
//             <PortLayer />
//         </Wallpaper>
//       </MainIntro>
//     </div>
//   );
// };

// export default Home;









// import React, { useEffect, useRef } from 'react';
// import Draggable from 'react-draggable';
// import { initializeLayers, toggleLayerVisibility, closeAllLayers } from '../animations/animations';

// import youtubeIcon from '../assets/img/youtube.png'; // 경로를 프로젝트에 맞게 수정하세요
// import netflixIcon from '../assets/img/netflix.png'; // 경로를 프로젝트에 맞게 수정하세요
// import oneIcon from '../assets/img/one.png'; // 경로를 프로젝트에 맞게 수정하세요
// import logoIcon from '../assets/img/Logo@3x.png'; // 경로를 프로젝트에 맞게 수정하세요
// import spotifyIcon from '../assets/img/spotify.png'; // 경로를 프로젝트에 맞게 수정하세요
// import newsfeedIcon from '../assets/img/newsfeed.png'; // 경로를 프로젝트에 맞게 수정하세요

// const Home = () => {
//   // 레이어 참조 생성
//   const draggableRef = useRef(null);
//   const youtubeLayerRef = useRef(null);
//   const movieLayerRef = useRef(null);
//   const aboutRef = useRef(null);
//   const layer2Ref = useRef(null);
//   const layer3Ref = useRef(null);
//   const layer4Ref = useRef(null);

//     useEffect(() => {
//       initializeLayers();
//     }, []);
  
//     const toggleLayer = (layerRef) => {
//       toggleLayerVisibility(layerRef);
//     };
//   return (
//     <div id="mainIntro">
//         <div className="wallpapers">
//             <Draggable>
//                 <div className="draggableIcon youtubeIcon">
//                     <img src={youtubeIcon} alt="youtube" />
//                     <span>나만의 유튜브</span>
//                 </div>
//             </Draggable>
//             <Draggable>
//                 <div className="draggableIcon movieIcon">
//                     <img src={netflixIcon} alt="netflix" />
//                     <span>영화 리스트</span>
//                 </div>
//             </Draggable>
//       </div>

//       <div className="footer__info">
//         <div className="weather"></div>
//         <div className="menu">
//           <ul>
//             <li className="menu1" onClick={() => toggleLayer(aboutRef)}>
//               <a href="#">
//                 <img src={oneIcon} alt="" />
//               </a>
//             </li>
//             <li className="menu2" onClick={() => toggleLayer(layer2Ref)}>
//               <a href="#">
//                 <img src={logoIcon} alt="" />
//               </a>
//             </li>
//             <li className="menu3" onClick={() => toggleLayer(layer3Ref)}>
//               <a href="#">
//                 <img src={spotifyIcon} alt="" />
//               </a>
//             </li>
//             <li className="menu4" onClick={() => toggleLayer(layer4Ref)}>
//               <a href="#">
//                 <img src={newsfeedIcon} alt="" />
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="date"></div>
//       </div>

//       {/* 여기에 추가 레이어 컴포넌트를 더 추가할 수 있습니다 */}
//       <div ref={youtubeLayerRef} className="portLayer portLayer1 youtubeLayer">
  
//       </div>

//       <div ref={movieLayerRef} className="portLayer portLayer1 MovieLayer">
     
//       </div>

//       <div ref={aboutRef} className="layer layer1 about">
//         {/* about layer 내용 */}
//       </div>

//       <div ref={layer2Ref} className="layer layer2">
//         {/* layer2 내용 */}
//       </div>

//       <div ref={layer3Ref} className="layer layer3">
//         {/* layer3 내용 */}
//       </div>

//       <div ref={layer4Ref} className="layer layer4">
//         {/* layer4 내용 */}
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import DraggableIcon from '../components/DraggableIcon';
import Layer from '../components/Layer';
import "../assets/css/section/_MovieLists.css";
import '../assets/css/section/_home.css'; // Home 컴포넌트에 특정한 스타일
import "../assets/css/section/_Video.css";
import youtubeIcon from '../assets/img/youtube.png'; 
import netflixIcon from '../assets/img/netflix.png'; 

import oneIcon from '../assets/img/one.png'; 
import logoIcon from '../assets/img/Logo@3x.png'; 
import spotifyIcon from '../assets/img/spotify.png';
import newsfeedIcon from '../assets/img/newsfeed.png';
import Banner from '../components/Banner';
import MovieLists from '../components/MovieLists';
// import YouTubeLayer from '../components/YouTubeLayer';
import Search from "../components/Search";
import About from '../components/About'; 

const Home = () => {
    // 각 레이어의 상태를 관리하는 상태 변수들
    const [activeLayer, setActiveLayer] = useState('');

    // 레이어를 표시하거나 숨기는 함수
    const toggleLayer = (layerName) => {
        setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
    };

    return (
        <div id="mainIntro">
            <div className="wallpapers">
                    <DraggableIcon 
                        icon={youtubeIcon}
                        label="나만의 유튜브" 
                        className="youtubeIcon"
                        onClick={() => toggleLayer('youtubeLayer')} 
                    />
                    <DraggableIcon 
                        icon={netflixIcon} 
                        label="영화 리스트" 
                        className="movieIcon"
                        onClick={() => toggleLayer('movieLayer')} 
                    />
            </div>

            <div className="footer__info">
                <div className="menu">
                    <ul>
                        <li onClick={() => toggleLayer('about')}>
                            <img src={oneIcon} alt="About Icon" />
                        </li>
                        <li onClick={() => toggleLayer('projects')}>
                            <img src={logoIcon} alt="Projects Icon" />
                        </li>
                        <li onClick={() => toggleLayer('skills')}>
                            <img src={spotifyIcon} alt="Skills Icon" />
                        </li>
                        <li onClick={() => toggleLayer('contact')}>
                            <img src={newsfeedIcon} alt="Contact Icon" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* <Layer isActive={activeLayer === 'youtubeLayer'} content="YouTube Layer Content" /> */}
            <Layer isActive={activeLayer === 'youtubeLayer'} content={<Search />} />

            <Layer isActive={activeLayer === 'movieLayer'} content={
             <>
             <Banner content="Movie Section Information" />
             <MovieLists title="Movie Title" id="movieId" fetchUrl="API_ENDPOINT" />
           </> 
            } />
            <Layer isActive={activeLayer === 'about'} content={<About />} />
            <Layer isActive={activeLayer === 'projects'} content="Projects Layer Content" />
            <Layer isActive={activeLayer === 'skills'} content="Skills Layer Content" />
            <Layer isActive={activeLayer === 'contact'} content="Contact Layer Content" />
        </div>
    );
};

export default Home;



// import React, { useState } from 'react';
// import Layer from '../components/Layer';
// import DraggableIcon from '../components/DraggableIcon';

// import oneIcon from '../assets/img/one.png'; 
// import logoIcon from '../assets/img/Logo@3x.png'; 
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png';
// const Home = () => {
//     const [activeLayer, setActiveLayer] = useState('');

//     const toggleLayer = (layerName) => {
//         setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
//     };

//     return (
//         <>
//             <div id="mainIntro">
//                 <div className="wallpapers">
                    
//                     <DraggableIcon icon="../assets/img/youtube.png" label="나만의 유튜브" />
//                     <DraggableIcon icon="../assets/img/netflix.png" label="영화 리스트" />
//                 </div>

//                 <div className="footer__info">
//                     <div className="menu">
//                         <ul>
//                             <li className="menu1" onClick={() => toggleLayer('about')}>
//                                 <img src={oneIcon} alt="어바웃 아이콘" />
//                             </li>
//                             <li className="menu2" onClick={() => toggleLayer('projects')}>
//                                 <img src={logoIcon} alt="프로젝트 아이콘" />
//                             </li>
//                             <li className="menu3" onClick={() => toggleLayer('skills')}>
//                                 <img src={spotifyIcon} alt="스킬 아이콘" />
//                             </li>
//                             <li className="menu4" onClick={() => toggleLayer('contact')}>
//                                 <img src={newsfeedIcon} alt="컨택트 아이콘" />
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 <Layer isActive={activeLayer === 'about'} content="About Layer Content" />
//                 <Layer isActive={activeLayer === 'projects'} content="프로젝트 레이어 내용" />
//                 <Layer isActive={activeLayer === 'skills'} content="스킬 레이어 내용" />
//                 <Layer isActive={activeLayer === 'contact'} content="컨택트 레이어 내용" />
//             </div>
//         </>
//     );
// };

// export default Home;







// css 안먹음
// import React, { useState } from 'react';
// import DraggableIcon from '../components/DraggableIcon';
// import Layer from '../components/Layer';
// import youtubeIcon from '../assets/img/youtube.png'; 
// import netflixIcon from '../assets/img/netflix.png'; 
// import oneIcon from '../assets/img/one.png'; 
// import logoIcon from '../assets/img/Logo@3x.png'; 
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png';
// import "../assets/css/style.css";


// const Home = () => {
//     const [activeLayer, setActiveLayer] = useState('');

//     return (
//         <>
//             <div id="mainIntro">
//                 <div className="wallpapers">
//                     <DraggableIcon icon={youtubeIcon} label="나만의 유튜브" />
//                     <DraggableIcon icon={netflixIcon} label="영화 리스트" />
//                 </div>

//                 <div className="footer__info">
//                     <div className="weather"></div>
//                     <div className="menu">
//                         <ul>
//                             <li onClick={() => setActiveLayer('layer1')}>
//                                 <img src={oneIcon} alt="" />
//                             </li>
//                             <li onClick={() => setActiveLayer('layer2')}>
//                                 <img src={logoIcon} alt="" />
//                             </li>
//                             <li onClick={() => setActiveLayer('layer3')}>
//                                 <img src={spotifyIcon} alt="" />
//                             </li>
//                             <li onClick={() => setActiveLayer('layer4')}>
//                                 <img src={newsfeedIcon} alt="" />
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="date"></div>
//                 </div>

//                 <Layer isActive={activeLayer === 'layer1'} />
//                 <Layer isActive={activeLayer === 'layer2'} />
//                 <Layer isActive={activeLayer === 'layer3'} />
//                 <Layer isActive={activeLayer === 'layer4'} />
//             </div>
//         </>
//     );
// };

// export default Home;



//수정하기 전에 사용하던거
// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import Draggable from 'react-draggable';
// import youtubeIcon from '../assets/img/youtube.png'; 
// import netflixIcon from '../assets/img/netflix.png'; 
// import oneIcon from '../assets/img/one.png'; 
// import logoIcon from '../assets/img/Logo@3x.png'; 
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png'; 

// const Home = () => {
//     const [activeLayers, setActiveLayers] = useState({
//         youtubeLayer: false,
//         movieLayer: false,
//         about: true,
//         layer2: false,
//         layer3: false,
//         layer4: false
//     });

//     const layerRefs = {
//         youtubeLayer: useRef(null),
//         movieLayer: useRef(null),
//         about: useRef(null),
//         layer2: useRef(null),
//         layer3: useRef(null),
//         layer4: useRef(null)
//     };

//     const toggleLayer = (layerName) => {
//         setActiveLayers(prev => ({
//             ...prev,
//             [layerName]: !prev[layerName]
//         }));
//     };

//     useEffect(() => {
//         Object.keys(activeLayers).forEach(layerName => {
//             const layer = layerRefs[layerName].current;
//             if (layer && activeLayers[layerName]) {
//                 gsap.to(layer, { autoAlpha: 1, y: 0, duration: 0.5 });
//             } else if (layer) {
//                 gsap.to(layer, { autoAlpha: 0, y: 20, duration: 0.5 });
//             }
//         });

//         const draggableIcons = document.querySelectorAll('.draggableIcon');
//         draggableIcons.forEach(icon => {
//             makeDraggable(icon);
//         });

//         function makeDraggable(element) {
//             var posX = 0, posY = 0, mouseX = 0, mouseY = 0;
//             element.onmousedown = function(e) {
//                 e.preventDefault();
//                 mouseX = e.clientX;
//                 mouseY = e.clientY;
//                 document.onmousemove = onMouseMove;
//                 document.onmouseup = onMouseUp;
//             };

//             function onMouseMove(e) {
//                 posX = mouseX - e.clientX;
//                 posY = mouseY - e.clientY;
//                 mouseX = e.clientX;
//                 mouseY = e.clientY;
//                 element.style.left = (element.offsetLeft - posX) + "px";
//                 element.style.top = (element.offsetTop - posY) + "px";
//             }

//             function onMouseUp() {
//                 document.onmousemove = null;
//                 document.onmouseup = null;
//             }
//         }
//     }, [activeLayers]);

//     return (
//         <>
//             <div id="mainIntro">
//                 <div className="wallpapers">
//                     <Draggable>
//                         <div className="draggableIcon youtubeIcon">
//                             <img src={youtubeIcon} alt="youtube" />
//                             <span>나만의 유튜브</span>
//                         </div>
//                     </Draggable>
//                     <Draggable>
//                         <div className="draggableIcon movieIcon">
//                             <img src={netflixIcon} alt="netflix" />
//                             <span>영화 리스트</span>
//                         </div>
//                     </Draggable>
//                 </div>

//                 <div className="footer__info">
//                     <div className="weather"></div>
//                     <div className="menu">
//                         <ul>
//                             <li className="menu1" onClick={() => toggleLayer('layer1')}>
//                                 <a href="#">
//                                     <img src={oneIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu2" onClick={() => toggleLayer('layer2')}>
//                                 <a href="#">
//                                     <img src={logoIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu3" onClick={() => toggleLayer('layer3')}>
//                                 <a href="#">
//                                     <img src={spotifyIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu4" onClick={() => toggleLayer('layer4')}>
//                                 <a href="#">
//                                     <img src={newsfeedIcon} alt="" />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="date"></div>
//                 </div>

//                 {Object.keys(layerRefs).map(key => (
//                     <div ref={layerRefs[key]} className={`portLayer ${key}`}>
//                         {/* 각 레이어의 내용을 여기에 추가 */}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;









// 그전에 되던거
// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import Draggable from 'react-draggable';
// import youtubeIcon from '../assets/img/youtube.png'; 
// import netflixIcon from '../assets/img/netflix.png'; 
// import oneIcon from '../assets/img/one.png'; 
// import logoIcon from '../assets/img/Logo@3x.png'; 
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png'; 


// const Home = () => {
//     const [activeLayers, setActiveLayers] = useState({
//         youtubeLayer: false,
//         movieLayer: false,
//         about: true, // 기본적으로 활성화
//         layer2: false,
//         layer3: false,
//         layer4: false
//     });

//     // 레이어들에 대한 참조를 생성
//     const layerRefs = {
//         youtubeLayer: useRef(null),
//         movieLayer: useRef(null),
//         about: useRef(null),
//         layer2: useRef(null),
//         layer3: useRef(null),
//         layer4: useRef(null)
//     };

//     // 레이어의 표시 상태를 토글하는 함수
//     const toggleLayer = (layerName) => {
//         setActiveLayers(prev => ({
//             ...prev,
//             [layerName]: !prev[layerName]
//         }));
//     };

//     // GSAP 애니메이션 적용
//     useEffect(() => {
//         Object.keys(activeLayers).forEach(layerName => {
//             const layer = layerRefs[layerName].current;
//             if (layer && activeLayers[layerName]) {
//                 gsap.to(layer, { autoAlpha: 1, y: 0, duration: 0.5 });
//             } else if (layer) {
//                 gsap.to(layer, { autoAlpha: 0, y: 20, duration: 0.5 });
//             }
//         });
//     }, [activeLayers]);

//     return (
//         <>
//             <div id="mainIntro">
//                 <div className="wallpapers">
//                 <Draggable>
//                  <div className="draggableIcon youtubeIcon">
//                      <img src={youtubeIcon} alt="youtube" />
//                      <span>나만의 유튜브</span>
//                  </div>
//              </Draggable>
//              <Draggable>
//                  <div className="draggableIcon movieIcon">
//                      <img src={netflixIcon} alt="netflix" />
//                      <span>영화 리스트</span>
//                  </div>
//              </Draggable>
//                 </div>

//                 <div className="footer__info">
//                     <div className="weather"></div>
//                     <div className="menu">
//                         <ul>
//                             <li className="menu1" onClick={() => toggleLayer('layer1')}>
//                                 <a href="#">
//                                     <img src={oneIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu2" onClick={() => toggleLayer('layer2')}>
//                                 <a href="#">
//                                     <img src={logoIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu3" onClick={() => toggleLayer('layer3')}>
//                                 <a href="#">
//                                     <img src={spotifyIcon} alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu4" onClick={() => toggleLayer('layer4')}>
//                                 <a href="#">
//                                     <img src={newsfeedIcon} alt="" />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="date"></div>
//                 </div>

//                 {Object.keys(layerRefs).map(key => (
//                     <div ref={layerRefs[key]} className={`portLayer portLayer1 ${key}`}>
//                         {/* 각 레이어의 내용을 여기에 추가 */}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;




// import React from 'react'

// const Home = () => {
//     return (
//         <>
//             <div id="mainIntro">
//                 <div className="wallpapers">
//                     <div className="draggableIcon youtubeIcon">
//                         <img src="assets/img/youtube.png" alt="youtube" />
//                         <span>나만의 유튜브</span>
//                     </div>
//                     <div className="draggableIcon movieIcon">
//                         <img src="assets/img/netflix.png" alt="netflix" />
//                         <span>영화 리스트</span>
//                     </div>
//                 </div>

//                 <div className="footer__info">
//                     <div className="weather"></div>
//                     <div className="menu">
//                         <ul>
//                             <li className="menu1">
//                                 <a href="#">
//                                     <img src="assets/img/one.png" alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu2">
//                                 <a href="#">
//                                     <img src="assets/img/Logo@3x.png" alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu3">
//                                 <a href="#">
//                                     <img src="assets/img/spotify.png" alt="" />
//                                 </a>
//                             </li>
//                             <li className="menu4">
//                                 <a href="#">
//                                     <img src="assets/img/newsfeed.png" alt="" />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="date"></div>
//                 </div>

//                 <div className="portLayer portLayer1 youtubeLayer">
//                     <div className="portLayer__contents">
//                         <h3>Search</h3>
//                         <div className="info">
//                             <div>
//                                 <input type="search" />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li>all</li>
//                                     <li>coding</li>
//                                     <li>react</li>
//                                     <li>node.js</li>
//                                     <li>javascript</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="portLayer portLayer1 MovieLayer">
//                     <div className="portLayer__contents">
//                         <h3>Search</h3>
//                         <div className="info">
//                             <div>
//                                 <input type="search" />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li>all</li>
//                                     <li>coding</li>
//                                     <li>react</li>
//                                     <li>node.js</li>
//                                     <li>javascript</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="layer layer1 about">
//                     <div className="layer__contents">
//                         <div className="layerheader">
//                             <div className="headerinfo">
//                                 <h3>윤지성</h3>
//                                 <span className="small">Frontend developer</span>
//                                 <span className="mail">frontend@naver.com</span>
//                             </div>
//                         </div>

//                         <p className="intro1">
//                             안녕하세요:D😎 창의적인 웹 디자인과 최신 프론트엔드 기술에 열정을 윤지성 입니다.<br />
//                             국비지원강의를 통하여 HTML, CSS, JavaScript, react, node.js를 학습하였고 프론트엔드 개발자가 되기 위해 노력하고있습니다.
//                             새로운 기술을 배우고 도전하는 것을 좋아하며, 팀과 협력하여 혁신적이고 효과적인 솔루션을 만드는 데 기여하고 싶습니다.
//                         </p>
//                         <p className="intro2">
//                         </p>
//                         <div className="layer__scrollable">
//                             <div className="content-grid">
//                                 <section className="experience-container">
//                                     <div className="inner">
//                                         <h2 className="section-title">
//                                             Learning</h2>
//                                         <div className="section-content">
//                                             <ol className="item-text">
//                                                 <li>
//                                                     <div className="title">Basic</div>
//                                                     <div className="subtitle"><span>html, css, javascript</span></div>
//                                                     <p className="text">
//                                                         - HTML,css는 웹페이지의 구조를 정의하고 스타일을 적용하여 디자인을 결정합니다 <br />
//                                                         - JavaScript는 웹페이지에 동적인 요소와 사용자 인터페이스를 생성하게 해줍니다. <br />

//                                                     </p>
//                                                 </li>
//                                                 <li>
//                                                     <div className="title">Practice</div>
//                                                     <div className="subtitle"><span>React,Node.js</span></div>
//                                                     <p className="text">
//                                                         - React는 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반 개발을 통해 재사용 가능하고 관리하기
//                                                         쉬운 UI를 만듭니다. <br />
//                                                         - Node.js는 서버 사이드에서 JavaScript를 실행할 수 있게 해주는 크로스 플랫폼 런타임 환경으로 높은 성능의
//                                                         애플리케이션을 구축할 수 있습니다.<br />

//                                                     </p>
//                                                 </li>
//                                                 <li>
//                                                     <div className="title">Publish</div>
//                                                     <div className="subtitle"><span>Git, Netlify</span></div>
//                                                     <p className="text">
//                                                         - Git은 분산 버전 관리 시스템으로, 소프트웨어 개발에서 소스 코드의 변경 사항을 추적하고 협업을 용이하게 하는 도구입니다.
//                                                         <br/>
//                                                             - Netlify는 웹 앱을 구축, 테스트 및 배포할 수 있는 클라우드 기반 서비스로 지속적인 통합 및 배포를 자동화하여 개발자의
//                                                             작업 흐름을 간소화합니다.<br/>

//                                                             </p>
//                                                         </li>
//                                                     </ol>
//                                                 </div>
//                                         </div>
//                                 </section>

//                                 <section className="project-container">
//                                     <div className="inner">
//                                         <h2 className="section-title">Skill</h2>
//                                         <div className="section-content">
//                                             <ol className="item-text">
//                                                 <li>
//                                                     <div className="title">Programming tools</div>
//                                                     <div className="subtitle"><span>React</span></div>
//                                                     <p className="text">
//                                                         - 가상 DOM을 사용하여 애플리케이션의 성능을 최적화하고 빠른 렌더링을 가능하게 합니다.<br />
//                                                         - 컴포넌트 기반의 구조를 통해 대규모 애플리케이션의 데이터 관리가 용이해집니다. <br />

//                                                     </p>
//                                                 </li>
//                                                 <li>
//                                                     <div className="title">Programming tools</div>
//                                                     <div className="subtitle"><span>Node.js</span></div>
//                                                     <p className="text">
//                                                         - NPM(Node Package Manager)을 통해 다양한 모듈과 라이브러리를 쉽게 설치하고 관리할 수 있어 개발자 생산성을
//                                                         크게 향상시킵니다. <br />
//                                                         - Node.js는 비동기 이벤트 주도 방식으로 설계된 서버 사이드 JavaScript 환경으로, 빠른 네트워크 애플리케이션
//                                                         구축에 적합합니다. <br />

//                                                     </p>
//                                                 </li>
//                                                 <li>
//                                                     <div className="title">Programming tools</div>
//                                                     <div className="subtitle"><span>Firebase,MongoDB</span></div>
//                                                     <p className="text">
//                                                         - Firebase는 실시간 데이터 동기화와 백엔드 서비스를 제공하는 클라우드 기반 플랫폼이며, 클라이언트 개발을 간소화하는 데
//                                                         중점을 둡니다. <br />
//                                                         - MongoDB는 문서 지향 NoSQL 데이터베이스로, 대규모 분산 데이터 세트를 위한 확장성과 성능을 제공합니다 <br />

//                                                     </p>
//                                                 </li>
//                                             </ol>
//                                         </div>
//                                     </div>
//                                 </section>

//                             </div>
//                         </div>
//                     </div>
//                     <div className="layer__footer">😎 윤지성 개발자입니다.</div>
//                 </div>

//                 <div className="layer layer2">
//                     <div className="layer__contents">

//                     </div>
//                     <div className="layer__footer">layer2</div>
//                 </div>

//                 <div className="layer layer3">
//                     <div className="layer__contents"></div>
//                     <div className="layer__footer">layer3</div>
//                 </div>

//                 <div className="layer layer4">
//                     <div className="layer__contents"></div>
//                     <div className="layer__footer">layer4</div>
//                 </div>


//             </div>


                
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
//     <script src="https://unpkg.com/split-type"></script>
//     <script>
//         gsap.set(".layer", { autoAlpha: 0, y: 20 });
//         gsap.set(".layer1", { autoAlpha: 1 });

//         // 메뉴 항목 선택
//         const menu1 = document.querySelector('.menu1');
//         const menu2 = document.querySelector('.menu2');
//         const menu3 = document.querySelector('.menu3');
//         const menu4 = document.querySelector('.menu4');

//         // 모든 레이어 팝업 선택
//         const allLayers = document.querySelectorAll('.layer');

//         // 모든 팝업을 닫는 함수
//         function closeAllLayers() {
//             allLayers.forEach(layer => {
//                 gsap.to(layer, { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//             });
//         }

//         // 레이어의 가시성을 토글하는 함수
//         function toggleLayer(layer) {
//             // 레이어가 이미 표시되고 있는지 확인
//             if (gsap.getProperty(layer, "autoAlpha") === 1) {
//                 // 레이어가 표시 중이면 닫기
//                 gsap.to(layer, { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//             } else {
//                 // 레이어가 표시되지 않았으면 열기
//                 closeAllLayers(); // 먼저 모든 레이어 닫기
//                 gsap.to(layer, { autoAlpha: 1, y: 0, backdropFilter: 'blur(10px)', duration: 0.5 });
//             }
//         }

//         // 메뉴 항목에 대한 이벤트 리스너
//         menu1.addEventListener('click', () => toggleLayer(document.querySelector('.layer1')));
//         menu2.addEventListener('click', () => toggleLayer(document.querySelector('.layer2')));
//         menu3.addEventListener('click', () => toggleLayer(document.querySelector('.layer3')));
//         menu4.addEventListener('click', () => toggleLayer(document.querySelector('.layer4')));

//         // 드래그
//         function makeDraggable(element) {
//             var posX = 0, posY = 0, mouseX = 0, mouseY = 0;

//             element.addEventListener('mousedown', function (e) {
//                 e.preventDefault();
//                 mouseX = e.clientX;
//                 mouseY = e.clientY;
//                 document.addEventListener('mousemove', onMouseMove);
//                 document.addEventListener('mouseup', onMouseUp);
//             });

//             function onMouseMove(e) {
//                 posX = mouseX - e.clientX;
//                 posY = mouseY - e.clientY;
//                 mouseX = e.clientX;
//                 mouseY = e.clientY;
//                 element.style.left = (element.offsetLeft - posX) + "px";
//                 element.style.top = (element.offsetTop - posY) + "px";
//             }

//             function onMouseUp() {
//                 document.removeEventListener('mousemove', onMouseMove);
//                 document.removeEventListener('mouseup', onMouseUp);
//             }
//         }

//         // Select all elements with the class 'draggableIcon'
//         var draggableIcons = document.querySelectorAll('.draggableIcon');

//         // Apply the dragging functionality to each icon
//         draggableIcons.forEach(function (icon) {
//             makeDraggable(icon);
//         });
//             </script>
//         </>
//     )
// }

// export default Home