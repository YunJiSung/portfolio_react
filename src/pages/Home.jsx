// import React, { useState } from 'react';
// import DraggableIcon from '../components/DraggableIcon';
// import Layer from '../components/Layer';
// import "../assets/css/section/_MovieLists.css";
// import '../assets/css/section/_home.css'; // Home 컴포넌트에 특정한 스타일
// import "../assets/css/section/_Video.css";
// import youtubeIcon from '../assets/img/youtube.png';
// import netflixIcon from '../assets/img/netflix.png';
// import vueIcon from '../assets/img/vue.png';
// import BackgroundChanger from '../components/BackgroundChanger'; // BackgroundChanger 컴포넌트 추가

// import viteIcon from '../assets/img/vite.png';
// import reactIcon from '../assets/img/react.png';
// import oneIcon from '../assets/img/one.png';
// import logoIcon from '../assets/img/Logo@3x.png';
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png';
// import Banner from '../components/Banner';
// import MovieLists from '../components/MovieLists';
// // import YouTubeLayer from '../components/YouTubeLayer';
// import Search from "../components/Search";
// import About from '../components/About';
// import Shcool from '../components/Shcool';
// import Travel from '../components/Travel';
// // import NewsList from '../components/news/NewsList';
// // import { gsap } from 'gsap';


// const Home = () => {
//     const [activeLayer, setActiveLayer] = useState('');
//     const [backgroundImage, setBackgroundImage] = useState(localStorage.getItem('background-image') || '');

//     const toggleLayer = (layerName) => {
//         setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
//     };

//     const closeLayer = () => {
//         setActiveLayer('');
//     };

//     const handleSetBackground = (url) => {
//         setBackgroundImage(url);
//         if (url) localStorage.setItem('backgroundImage', url);
//     };

//     // backgroundImage가 비어있는 경우, 인라인 스타일을 적용하지 않습니다.
//     const backgroundStyle = backgroundImage
//         ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }
//         : {};

//     return (
//         <div id="mainIntro" style={backgroundStyle}>
//             <div className="wallpapers">
//                 <DraggableIcon
//                     icon={youtubeIcon}
//                     label="나만의 유튜브"
//                     className="youtubeIcon"
//                     onClick={() => toggleLayer('youtubeLayer')}
//                 />
//                 <DraggableIcon
//                     icon={netflixIcon}
//                     label="영화 리스트"
//                     className="movieIcon"
//                     onClick={() => toggleLayer('movieLayer')}
//                 />
//                 <DraggableIcon
//                     icon={viteIcon}
//                     label="vite"
//                     className="viteIcon"
//                     onClick={() => toggleLayer('viteLayer')}
//                 />
//                 <DraggableIcon
//                     icon={reactIcon}
//                     label="react"
//                     className="reactIcon"
//                     onClick={() => toggleLayer('reactLayer')}
//                 />
//                 <DraggableIcon
//                     icon={vueIcon}
//                     label="vue"
//                     className="vueIcon"
//                     onClick={() => toggleLayer('vueLayer')}
//                 />

//             </div>

//             <div className="footer__info">
//                 <div className="menu">
//                     <ul>
//                         <li onClick={() => toggleLayer('about')}>
//                             <img src={oneIcon} alt="About Icon" />
//                         </li>
//                         <li onClick={() => toggleLayer('projects')}>
//                             <img src={logoIcon} alt="Projects Icon" />
//                         </li>
//                         <li onClick={() => toggleLayer('newsLayer')}>
//                             <img src={spotifyIcon} alt="Skills Icon" />
//                         </li>
//                         <li onClick={() => toggleLayer('contact')}>
//                             <img src={newsfeedIcon} alt="Contact Icon" />
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <Layer isActive={activeLayer === 'youtubeLayer'} content={<Search />} onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'movieLayer'} content={
//                 <>
//                     <Banner content="Movie Section Information" />
//                     <MovieLists title="Movie Title" id="movieId" fetchUrl="API_ENDPOINT" />
//                 </>
//             } onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'viteLayer'} content={<Shcool />} onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'reactLayer'} content={<Travel />} onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'vueLayer'} content={
//                 <BackgroundChanger setBackground={handleSetBackground} />
//             } onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'newsLayer'} content={<About />} onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'about'} content={<About />} onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'projects'} content="Projects Layer Content" onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'skills'} content="Skills Layer Content" onClose={closeLayer} />
//             <Layer isActive={activeLayer === 'contact'} content="Contact Layer Content" onClose={closeLayer} />
//         </div>
//     );
// };

// export default Home;














// Home.js 지금 코드 아직 미완성 코드 
import React, { useState } from 'react';
import DraggableIcon from '../components/DraggableIcon';
import Layer from '../components/Layer';
import Search from "../components/Search";
import About from '../components/About';
import School from '../components/Shcool';
import Travel from '../components/Travel';
import Banner from '../components/Banner';
import MovieLists from '../components/MovieLists';
import BackgroundChanger from '../components/BackgroundChanger';
import "../assets/css/section/_MovieLists.css";
import '../assets/css/section/_home.css';
import "../assets/css/section/_Video.css";
import youtubeIcon from '../assets/img/youtube.png';
import netflixIcon from '../assets/img/netflix.png';
import vueIcon from '../assets/img/vue.png';
import viteIcon from '../assets/img/vite.png';
import reactIcon from '../assets/img/react.png';
import oneIcon from '../assets/img/one.png';
import logoIcon from '../assets/img/Logo@3x.png';
import spotifyIcon from '../assets/img/spotify.png';
import newsfeedIcon from '../assets/img/newsfeed.png';

const Home = () => {
    const [activeLayer, setActiveLayer] = useState('');
    const [backgroundImage, setBackgroundImage] = useState(localStorage.getItem('background-image') || '');

    const toggleLayer = (layerName) => {
        setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
    };

    const closeLayer = () => {
        setActiveLayer('');
    };

    const handleSetBackground = (url) => {
        setBackgroundImage(url);
        localStorage.setItem('backgroundImage', url);
    };

    const backgroundStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }
        : {};

    return (
        <div id="mainIntro" style={backgroundStyle}>
            <div className="wallpapers">
                {/* Draggable icons */}
                <DraggableIcon icon={youtubeIcon} label="나만의 유튜브" className="youtubeIcon" onClick={() => toggleLayer('youtubeLayer')} />
                <DraggableIcon icon={netflixIcon} label="영화 리스트" className="movieIcon" onClick={() => toggleLayer('movieLayer')} />
                <DraggableIcon icon={viteIcon} label="vite" className="viteIcon" onClick={() => toggleLayer('viteLayer')} />
                <DraggableIcon icon={reactIcon} label="react" className="reactIcon" onClick={() => toggleLayer('reactLayer')} />
                <DraggableIcon icon={vueIcon} label="vue" className="vueIcon" onClick={() => toggleLayer('vueLayer')} />
            </div>

            <div className="footer__info">
                <div className="menu">
                    <ul>
                        <li onClick={() => toggleLayer('about')}><img src={oneIcon} alt="About Icon" /></li>
                        <li onClick={() => toggleLayer('projects')}><img src={logoIcon} alt="Projects Icon" /></li>
                        <li onClick={() => toggleLayer('newsLayer')}><img src={spotifyIcon} alt="Skills Icon" /></li>
                        <li onClick={() => toggleLayer('contact')}><img src={newsfeedIcon} alt="Contact Icon" /></li>
                    </ul>
                </div>
            </div>

            {/* Layer components for different layers */}
            <Layer isActive={activeLayer === 'youtubeLayer'} content={<Search />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'movieLayer'} content={
                <>
                    <Banner content="Movie Section Information" />
                    <MovieLists title="Movie Title" id="movieId" fetchUrl="API_ENDPOINT" />
                </>
            } onClose={closeLayer} />
            <Layer isActive={activeLayer === 'viteLayer'} content={<School />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'reactLayer'} content={<Travel />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'vueLayer'} content={<BackgroundChanger setBackground={handleSetBackground} />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'newsLayer'} content={<About />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'about'} content={<About />} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'projects'} content={<div>Projects Layer Content</div>} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'skills'} content={<div>Skills Layer Content</div>} onClose={closeLayer} />
            <Layer isActive={activeLayer === 'contact'} content={<div>Contact Layer Content</div>} onClose={closeLayer} />
        </div>
    );
};

export default Home;
