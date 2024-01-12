// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Main from '../components/section/Main'
// // import "../assets/css/section/_header.css";

// import VideoSearch from '../components/video/VideoSearch'
// import { fetchFromAPI } from '../utils/api'

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setVideos([]);
//         fetchVidoes(searchId);
//         setLoading(true);
//     }, [searchId]);

//     const fetchVidoes = (query, pageToken = '') => {
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos((preVideos) => [...preVideos, ...data.items]);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log('Error fetching data', error);
//                 setLoading(false);
//             })
//     }

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVidoes(searchId, nextPageToken);
//         }
//     }

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <Main
//             title="유투브 검색"
//             description="유튜브 검색 결과 페이지입니다.">

//             <section id='searchPage' className={searchPageClass}>
//                 <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 <div className='video__more'>
//                     {nextPageToken && (
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     )}
//                 </div>
//             </section>
//         </Main>
//     )
// }

// export default Search
// 위에 코드가 가장 최근에 되던 코드

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import "../../assets/css/section/_header.css";
// import { searchKeyword } from '../../data/header.js'; // 키워드 배열
// import VideoSearch from '../components/video/VideoSearch';
// import { fetchFromAPI } from '../utils/api';

// const Search = () => {
//     const [inputKeyword, setInputKeyword] = useState(''); // 검색 입력을 위한 상태
//     const [videos, setVideos] = useState([]); // 비디오 목록을 위한 상태
//     const location = useLocation();

//     useEffect(() => {
//         if (inputKeyword) {
//             fetchVidoes(inputKeyword);
//         }
//     }, [inputKeyword]);

//     const fetchVidoes = (query) => {
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}`)
//             .then((data) => {
//                 setVideos(data.items);
//             })
//             .catch((error) => {
//                 console.log('Error fetching data', error);
//             })
//     };

//     const handleSearch = () => {
//         if (inputKeyword) {
//             setInputKeyword(inputKeyword); // 검색 후 입력 필드 유지
//         }
//     };

//     const handleKeywordClick = (keyword) => {
//         setInputKeyword(keyword);
//     };

//     return (
//         <div className='search__wrap'>
//             <div id='search'>
//                 <div className="search__inner">
//                     <label htmlFor="searchInput"></label>
//                     <input
//                         type="search"
//                         id='searchInput'
//                         placeholder='검색어를 입력해주세요!'
//                         autoComplete='off'
//                         className='search__input'
//                         value={inputKeyword}
//                         onChange={e => setInputKeyword(e.target.value)}
//                         onKeyDown={e => {
//                             if (e.key === "Enter") {
//                                 handleSearch();
//                             }
//                         }}
//                     />
//                 </div>
//             </div>
//             <div>
//                 <ul className='keyword'>
//                     {searchKeyword.map((keyword, key) => (
//                         <li key={key} className={location.pathname === keyword.src ? 'active' : ''}
//                             onClick={() => handleKeywordClick(keyword.title)}>
//                             <a href="#">{keyword.title}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="video__inner search">
//                 <VideoSearch videos={videos} />
//             </div>
//         </div>
//     );
// }

// export default Search;
