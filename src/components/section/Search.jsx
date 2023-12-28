
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import "../../assets/css/section/_header.css";
// import { searchKeyword } from '../../data/header.js'; // 키워드 배열

// const Search = () => {
//     const [inputKeyword, setInputKeyword] = useState(''); // 검색 입력을 위한 상태
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleSearch = () => {
//         if (inputKeyword) {
//             navigate(`/search/${inputKeyword}`);
//             setInputKeyword(''); // 검색 후 입력 필드 초기화
//         }
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
//                         <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
//                             <Link to={keyword.src}>
//                                 {keyword.title}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Search;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import "../../assets/css/section/_header.css";
// import { searchKeyword } from '../../data/header.js';
// // import VideoSearch from '../components/video/VideoSearch';
// import VideoSearch from '../video/VideoSearch.jsx';
// import { fetchFromAPI } from '../../utils/api.js';

// const Search = () => {
//     const [inputKeyword, setInputKeyword] = useState('');
//     const [videos, setVideos] = useState([]);
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         // 컴포넌트 마운트 시 URL에서 검색 키워드를 추출하여 검색을 수행합니다.
//         const keywordFromURL = location.pathname.split('/')[2] || '';
//         if (keywordFromURL) {
//             handleSearch(keywordFromURL);
//         }
//     }, [location]);

//     const handleSearch = (keyword) => {
//         setInputKeyword(keyword); // 검색어 상태를 업데이트
//         fetchVideos(keyword); // 비디오를 검색하는 함수 호출
//         navigate(`/search/${keyword}`); // URL을 업데이트합니다.
//     };

//     const fetchVideos = (query) => {
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}`)
//             .then((data) => {
//                 setVideos(data.items); // 검색 결과로 비디오 목록을 설정
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//             });
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
//                                 handleSearch(inputKeyword);
//                             }
//                         }}
//                     />
//                 </div>
//             </div>
//             <div>
//                 <ul className='keyword'>
//                     {searchKeyword.map((keyword, index) => (
//                         <li key={index}
//                             className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                             onClick={() => handleSearch(keyword.title)}>
//                             <Link to={keyword.src}>
//                                 {keyword.title}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <VideoSearch videos={videos} />
//         </div>
//     );
// };

// export default Search;
