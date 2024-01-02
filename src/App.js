// import React, { useState } from 'react';
// import { gsap } from 'gsap';

// function App() {
//   const [allLayers, setAllLayers] = useState(
//     document.querySelectorAll('.layer')
//   );

//   // 모든 팝업을 닫는 함수
//   function closeAllLayers() {
//     allLayers.forEach(layer => {
//       gsap.to(layer, { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//     });
//   }

//   // 레이어의 가시성을 토글하는 함수
//   function toggleLayer(layer) {
//     if (gsap.getProperty(layer, "autoAlpha") === 1) {
//       gsap.to(layer, { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//     } else {
//       closeAllLayers();
//       gsap.to(layer, { autoAlpha: 1, y: 0, backdropFilter: 'blur(10px)', duration: 0.5 });
//     }
//   }

//   function handleMenuClick(menuId) {
//     const selectedLayer = document.querySelector(`.layer${menuId}`);
//     toggleLayer(selectedLayer);
//   }

//   return (
//     <div>
//       {/* HTML 부분 */}
//       <div id="mainIntro">
//         <div className="wallpapers">
//           <div className="draggableIcon youtubeIcon">
//             <img src="assets/img/youtube.png" alt="youtube" />
//             <span>나만의 유튜브</span>
//           </div>
//           <div className="draggableIcon movieIcon">
//             <img src="assets/img/netflix.png" alt="netflix" />
//             <span>영화 리스트</span>
//           </div>
//         </div>

//         <div className="footer__info">
//           {/* 다른 부분 */}
//         </div>

//         <div className="portLayer portLayer1 youtubeLayer">
//           {/* 포트 레이어의 내용 */}
//         </div>

//         <div className="portLayer portLayer1 MovieLayer">
//           {/* 포트 레이어의 내용 */}
//         </div>

//         <div className="layer layer1 about">
//           {/* 일반 레이어의 내용 */}
//         </div>

//         {/* 나머지 레이어들 */}
//       </div>

//       {/* 메뉴 항목 */}
//       <div className="menu1" onClick={() => handleMenuClick(1)}>
//         <img src="assets/img/one.png" alt="" />
//       </div>
//       {/* 나머지 메뉴 항목들 */}
//     </div>
//   );
// }

// export default App;


// 가장 최근에 사용하던거
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Video from './pages/Video';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/video/:videoId" element={<Video />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Video from './pages/Video';
// import NewsPage from './pages/NewsPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/video/:videoId" element={<Video />} />
//         <Route path="/news" element={<NewsPage />} />
//         <Route path="/news/:category" element={<NewsPage />} />
//         {/* 추가적인 라우트 경로를 이곳에 배치할 수 있습니다 */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<Video />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:category" element={<NewsPage />} />

    </Routes>
  );
};

export default App;

