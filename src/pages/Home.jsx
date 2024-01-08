// import React, { useState } from 'react';
// import DraggableIcon from '../components/DraggableIcon';
// import Layer from '../components/Layer';
// import "../assets/css/section/_MovieLists.css";
// import '../assets/css/section/_home.css'; // Home 컴포넌트에 특정한 스타일
// import "../assets/css/section/_Video.css";
// import youtubeIcon from '../assets/img/youtube.png'; 
// import netflixIcon from '../assets/img/netflix.png'; 
// import oneIcon from '../assets/img/one.png'; 
// import logoIcon from '../assets/img/Logo@3x.png'; 
// import spotifyIcon from '../assets/img/spotify.png';
// import newsfeedIcon from '../assets/img/newsfeed.png';
// import Banner from '../components/Banner';
// import MovieLists from '../components/MovieLists';
// // import YouTubeLayer from '../components/YouTubeLayer';
// import Search from "../components/Search";
// import About from '../components/About'; 
// import NewsList from '../components/news/NewsList'; // 뉴스 리스트 컴포넌트 임포트

// const Home = () => {
//     const [activeLayer, setActiveLayer] = useState('');

//     const toggleLayer = (layerName) => {
//         setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
//     };

//     return (
//         <div id="mainIntro">
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

//             <Layer isActive={activeLayer === 'youtubeLayer'} content={<Search />} />
//             <Layer isActive={activeLayer === 'movieLayer'} content={
//                 <>
//                     <Banner content="Movie Section Information" />
//                     <MovieLists title="Movie Title" id="movieId" fetchUrl="API_ENDPOINT" />
//                 </>
//             } />
//             <Layer isActive={activeLayer === 'newsLayer'} content={<NewsList />} />
//             <Layer isActive={activeLayer === 'about'} content={<About />} />
//             <Layer isActive={activeLayer === 'projects'} content="Projects Layer Content" />
//             <Layer isActive={activeLayer === 'skills'} content="Skills Layer Content" />
//             <Layer isActive={activeLayer === 'contact'} content="Contact Layer Content" />
//         </div>
//     );
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
import vueIcon from '../assets/img/vue.png';

import viteIcon from '../assets/img/vite.png';
import reactIcon from '../assets/img/react.png';
import oneIcon from '../assets/img/one.png';
import logoIcon from '../assets/img/Logo@3x.png';
import spotifyIcon from '../assets/img/spotify.png';
import newsfeedIcon from '../assets/img/newsfeed.png';
import Banner from '../components/Banner';
import MovieLists from '../components/MovieLists';
// import YouTubeLayer from '../components/YouTubeLayer';
import Search from "../components/Search";
import About from '../components/About';
import Shcool from '../components/Shcool';
import Travel from '../components/Travel';
// import NewsList from '../components/news/NewsList';



const Home = () => {
    const [activeLayer, setActiveLayer] = useState('');

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
                <DraggableIcon
                    icon={viteIcon}
                    label="vite"
                    className="viteIcon"
                    onClick={() => toggleLayer('viteLayer')}
                />
                <DraggableIcon
                    icon={reactIcon}
                    label="react"
                    className="reactIcon"
                    onClick={() => toggleLayer('reactLayer')}
                />
                <DraggableIcon
                    icon={vueIcon}
                    label="react"
                    className="vueIcon"
                    onClick={() => toggleLayer('vueLayer')}
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
                        <li onClick={() => toggleLayer('newsLayer')}>
                            <img src={spotifyIcon} alt="Skills Icon" />
                        </li>
                        <li onClick={() => toggleLayer('contact')}>
                            <img src={newsfeedIcon} alt="Contact Icon" />
                        </li>
                    </ul>
                </div>
            </div>

            <Layer isActive={activeLayer === 'youtubeLayer'} content={<Search />} />
            <Layer isActive={activeLayer === 'movieLayer'} content={
                <>
                    <Banner content="Movie Section Information" />
                    <MovieLists title="Movie Title" id="movieId" fetchUrl="API_ENDPOINT" />
                </>
            } />
            <Layer isActive={activeLayer === 'viteLayer'} content={<Shcool />} />
            <Layer isActive={activeLayer === 'reactLayer'} content={<Travel />} />
            <Layer isActive={activeLayer === 'vueLayer'} content="Projects Layer Content" />
            <Layer isActive={activeLayer === 'newsLayer'} content={<About />} />
            <Layer isActive={activeLayer === 'about'} content={<About />} />
            <Layer isActive={activeLayer === 'projects'} content="Projects Layer Content" />
            <Layer isActive={activeLayer === 'skills'} content="Skills Layer Content" />
            <Layer isActive={activeLayer === 'contact'} content="Contact Layer Content" />
        </div>
    );
};

export default Home;



