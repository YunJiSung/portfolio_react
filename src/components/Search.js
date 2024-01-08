// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Main from '../components/section/Main'

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






// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import "../../assets/css/section/_header.css";
// import { searchKeyword } from '../../data/header.js';

// import { useParams } from 'react-router-dom'
// import VideoSearch from '../components/video/VideoSearch.jsx'
// import { fetchFromAPI } from '../utils/api.js'

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);

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
//         <>
//             <div className='search__wrap'>
//                 <div id='search'>
//                     <div className="search__inner">
//                         <label htmlFor="searchInput"></label>
//                         <input
//                             type="search"
//                             id='searchInput'
//                             placeholder='검색어를 입력해주세요!'
//                             autoComplete='off'
//                             className='search__input'
//                             value={inputKeyword}
//                             onChange={e => setInputKeyword(e.target.value)}
//                             onKeyDown={e => {
//                                 if (e.key === "Enter") {
//                                     handleSearch(inputKeyword);
//                                 }
//                             }}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <ul className='keyword'>
//                         {searchKeyword.map((keyword, index) => (
//                             <li key={index}
//                                 className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                 onClick={() => handleSearch(keyword.title)}>
//                                 <Link to={keyword.src}>
//                                     {keyword.title}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {/* <VideoSearch videos={videos} /> */}
//             </div>

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
//         </>
//     )
// }

// export default Search







// 가장 최근 사용
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// // import "../../assets/css/section/_header.css";
// import "../assets/css/section/_header.css";
// // import { searchKeyword } from '../../data/header.js';
// import { searchKeyword } from '../data/header.js';

// import VideoSearch from './video/VideoSearch.jsx'; // 경로 확인 필요
// import { fetchFromAPI } from '../utils/api.js'; // 경로 확인 필요

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [inputKeyword, setInputKeyword] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();

//     // URL의 searchId 변경을 감지하여 비디오를 검색합니다.
//     useEffect(() => {
//         if (searchId) {
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     // 입력된 검색어 또는 클릭된 키워드에 따라 비디오를 검색합니다.
//     const fetchVideos = (query, pageToken = '') => {
//         setLoading(true);
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(prevVideos => [...prevVideos, ...data.items]);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     };

//     // 검색 입력 필드에서 엔터를 누르거나 키워드를 클릭했을 때 호출됩니다.
//     const handleSearch = (keyword) => {
//         setInputKeyword('');
//         setVideos([]);
//         fetchVideos(keyword);
//         navigate(`/search/${keyword}`);
//     };

//     // '더 보기' 버튼을 클릭했을 때 다음 페이지의 비디오를 불러옵니다.
//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(searchId, nextPageToken);
//         }
//     };

//     // 로딩 상태에 따라 클래스를 변경합니다.
//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <>
//             <div className='search__wrap'>
//                 <div id='search'>
//                     <div className="search__inner">
//                         <input
//                             type="search"
//                             id='searchInput'
//                             placeholder='검색어를 입력해주세요!'
//                             autoComplete='off'
//                             className='search__input'
//                             value={inputKeyword}
//                             onChange={e => setInputKeyword(e.target.value)}
//                             onKeyDown={e => {
//                                 if (e.key === "Enter") {
//                                     handleSearch(inputKeyword);
//                                 }
//                             }}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <ul className='keyword'>
//                         {searchKeyword.map((keyword, index) => (
//                             <li key={index}
//                                 className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                 onClick={() => handleSearch(keyword.title)}>
//                                 <Link to={keyword.src}>
//                                     {keyword.title}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <div className='video__more'>
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     </div>
//                 )}
//             </section>
//         </>
//     );
// };

// export default Search;


// html 키워드 까지 나오는 코드
// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import "../assets/css/section/_header.css";
// import { searchKeyword } from '../data/header.js';

// import VideoSearch from './video/VideoSearch.jsx';
// import { fetchFromAPI } from '../utils/api.js';

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const location = useLocation();

//     // URL의 searchId 변경을 감지하여 비디오를 검색합니다.
//     useEffect(() => {
//         if (searchId) {
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     const fetchVideos = (query, pageToken = '') => {
//         setLoading(true);
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(prevVideos => [...prevVideos, ...data.items]);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     };

//     // 키워드 클릭 시 해당 키워드로 비디오를 검색합니다.
//     const handleKeywordClick = (keyword) => {
//         fetchVideos(keyword);
//         // URL이 변경되지 않도록 navigate 함수를 호출하지 않습니다.
//     };

//     // '더 보기' 버튼을 클릭했을 때 다음 페이지의 비디오를 불러옵니다.
//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(searchId, nextPageToken);
//         }
//     };

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <>
//             <div className='search__wrap'>
//                 <div className="search__inner">
//                     {/* 검색 입력 필드 */}
//                 </div>
//                 <ul className='keyword'>
//                     {searchKeyword.map((keyword, index) => (
//                         <li key={index}
//                             className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                             onClick={() => handleKeywordClick(keyword.title)}> {/* 여기를 수정했습니다 */}
//                             {keyword.title}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <button onClick={handleLoadMore} className='video__more'>더 보기</button>
//                 )}
//             </section>
//         </>
//     );
// };

// export default Search;



// 키워드까지 구현됨
// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import "../assets/css/section/_header.css";
// import { searchKeyword } from '../data/header.js';
// import VideoSearch from './video/VideoSearch.jsx';
// import { fetchFromAPI } from '../utils/api.js';

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [inputKeyword, setInputKeyword] = useState(''); // 이 부분 추가
//     const location = useLocation();

//     useEffect(() => {
//         if (searchId) {
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     const fetchVideos = (query, pageToken = '') => {
//         setLoading(true);
//         setVideos([]); // 현재 비디오 목록을 비우기
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(data.items); // 새로운 비디오 목록 설정
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     };

//     const handleKeywordClick = (keyword) => {
//         fetchVideos(keyword); // 해당 키워드로 비디오 검색
//     };

//     // 검색 입력 처리 함수 추가
//     const handleSearch = (keyword) => {
//         fetchVideos(keyword);
//         setInputKeyword(''); // 검색 후 입력 필드 초기화
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(searchId, nextPageToken);
//         }
//     };

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <>
//             <div className='search__wrap'>
//                 <div id='search'>

//                     <div className="search__inner">
//                         <input
//                             type="search"
//                             id='searchInput'
//                             placeholder='검색어를 입력해주세요!'
//                             autoComplete='off'
//                             className='search__input'
//                             value={inputKeyword}
//                             onChange={e => setInputKeyword(e.target.value)}
//                             onKeyDown={e => {
//                                 if (e.key === "Enter") {
//                                     handleSearch(inputKeyword);
//                                 }
//                             }}
//                         />
//                     </div>

//                 </div>
//                 <ul className='keyword'>
//                     {searchKeyword.map((keyword, index) => (
//                         <li key={index}
//                             className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                             onClick={() => handleKeywordClick(keyword.title)}>
//                             {keyword.title}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <div className='video__more'>
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     </div>
//                 )}
//             </section>
//         </>
//     );
// };

// export default Search;




// 코드 밑에 사용하기 전 코드 내용
// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import "../assets/css/section/_header.css";
// import "../assets/css/section/_Video.css";
// import { searchKeyword } from '../data/header.js';
// import VideoSearch from './video/VideoSearch.jsx';
// import { fetchFromAPI } from '../utils/api.js';

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [inputKeyword, setInputKeyword] = useState('');
//     const location = useLocation();

//     useEffect(() => {
//         if (searchId) {
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     const fetchVideos = (query, pageToken = '') => {
//         setLoading(true);
//         setVideos([]);
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(data.items);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     };

//     const handleKeywordClick = (keyword) => {
//         fetchVideos(keyword);
//     };

//     const handleSearchChange = (event) => {
//         setInputKeyword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (inputKeyword) {
//             fetchVideos(inputKeyword);
//         }
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(searchId, nextPageToken);
//         }
//     };

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <div className='search__contents'>
//             <div className='search__wrap'>
//                 <div id='search'>
//                     <div className="search__inner">
//                         <h3>코딩 유튜버</h3>
//                         <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
//                         <span className="mail"></span>
//                         <div className='info'>
//                             <div>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         type="search"
//                                         id='searchInput'
//                                         placeholder='검색어를 입력해주세요!'
//                                         autoComplete='off'
//                                         className='search__input'
//                                         value={inputKeyword}
//                                         onChange={handleSearchChange}
//                                     />
//                                     <button type="submit">검색</button>
//                                 </form>
//                             </div>
//                             <div>
//                                 <ul className='keyword'>
//                                     {searchKeyword.map((keyword, index) => (
//                                         <li key={index}
//                                             className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                             onClick={() => handleKeywordClick(keyword.title)}>
//                                             {keyword.title}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div>
//                         <ul className='keyword'>
//                             {searchKeyword.map((keyword, index) => (
//                                 <li key={index}
//                                     className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                     onClick={() => handleKeywordClick(keyword.title)}>
//                                     {keyword.title}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div> */}
//                 </div>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 {/* <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2> */}
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <div className='video__more'>
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     </div>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default Search;














// import React, { useState, useEffect, useCallback } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import _ from 'lodash';
// import "../assets/css/section/_header.css";
// import "../assets/css/section/_Video.css";
// import { searchKeyword } from '../data/header.js';
// import VideoSearch from './video/VideoSearch.jsx';
// import { fetchFromAPI } from '../utils/api.js';

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [inputKeyword, setInputKeyword] = useState('');
//     const [currentSearchKeyword, setCurrentSearchKeyword] = useState('');
//     const location = useLocation();

//     useEffect(() => {
//         if (searchId) {
//             setCurrentSearchKeyword(searchId);
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     // const fetchVideos = (query, pageToken = '') => {
//     //     setLoading(true);
//     //     setVideos([]);
//     //     fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//     //         .then((data) => {
//     //             setNextPageToken(data.nextPageToken);
//     //             setVideos(prevVideos => pageToken ? [...prevVideos, ...data.items] : data.items);
//     //             setLoading(false);
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error fetching data', error);
//     //             setLoading(false);
//     //         });
//     // };
//     const fetchVideos = useCallback((query, pageToken = '') => {
//         setLoading(true);
//         setVideos([]);
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(prevVideos => pageToken ? [...prevVideos, ...data.items] : data.items);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     }, [setLoading, setVideos, setNextPageToken]); // 의존성 배열에 필요한 상태 업데이트 함수들을 포함

//     const debouncedFetchVideos = useCallback(
//         _.debounce((query) => {
//             fetchVideos(query);
//         }, 500),
//         [fetchVideos] // 의존성 배열에 fetchVideos 추가
//     );



//     // const debouncedFetchVideos = useCallback(_.debounce((query) => {
//     //     fetchVideos(query);
//     // }, 500), []); // 500ms 디바운스 시간

//     const handleKeywordClick = (keyword) => {
//         setCurrentSearchKeyword(keyword);
//         fetchVideos(keyword);
//     };

//     const handleSearchChange = (event) => {
//         setInputKeyword(event.target.value);
//         debouncedFetchVideos(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (inputKeyword) {
//             setCurrentSearchKeyword(inputKeyword);
//             fetchVideos(inputKeyword);
//         }
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(currentSearchKeyword, nextPageToken);
//         }
//     };

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <div className='search__contents'>
//             <div className="search__inner">
//                 <h3>코딩 유튜버</h3>
//                 <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
//                 <div className='info'>
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="search"
//                                 id='searchInput'
//                                 placeholder='검색'
//                                 autoComplete='off'
//                                 className='search__input'
//                                 value={inputKeyword}
//                                 onChange={handleSearchChange}
//                             />
//                         </form>
//                     </div>
//                     <div>
//                         <ul className='keyword'>
//                             {searchKeyword.map((keyword, index) => (
//                                 <li key={index}
//                                     className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                     onClick={() => handleKeywordClick(keyword.title)}>
//                                     {keyword.title}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <div className='video__more'>
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     </div>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default Search;








// import React, { useState, useEffect, useCallback } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import "../assets/css/section/_header.css";
// import "../assets/css/section/_Video.css";
// import { searchKeyword } from '../data/header.js';
// import VideoSearch from './video/VideoSearch.jsx';
// import { fetchFromAPI } from '../utils/api.js';

// // 커스텀 debounce 훅
// const useDebouncedEffect = (effect, deps, delay) => {
//     useEffect(() => {
//         const handler = setTimeout(() => {
//             effect();
//         }, delay);

//         return () => clearTimeout(handler);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [...deps || [], delay]);
// };

// const Search = () => {
//     const { searchId } = useParams();
//     const [videos, setVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [inputKeyword, setInputKeyword] = useState('');
//     const [currentSearchKeyword, setCurrentSearchKeyword] = useState('');
//     const location = useLocation();

//     useEffect(() => {
//         if (searchId) {
//             setCurrentSearchKeyword(searchId);
//             fetchVideos(searchId);
//         }
//     }, [searchId]);

//     const fetchVideos = useCallback((query, pageToken = '') => {
//         setLoading(true);
//         setVideos([]);
//         fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
//             .then((data) => {
//                 setNextPageToken(data.nextPageToken);
//                 setVideos(prevVideos => pageToken ? [...prevVideos, ...data.items] : data.items);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//                 setLoading(false);
//             });
//     }, [setLoading, setVideos, setNextPageToken]);

//     const debouncedFetchVideos = useCallback(() => {
//         fetchVideos(inputKeyword);
//     }, [inputKeyword, fetchVideos]);

//     useDebouncedEffect(() => {
//         if (inputKeyword) {
//             debouncedFetchVideos();
//         }
//     }, [debouncedFetchVideos], 500);

//     const handleKeywordClick = (keyword) => {
//         setCurrentSearchKeyword(keyword);
//         fetchVideos(keyword);
//     };

//     const handleSearchChange = (event) => {
//         setInputKeyword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (inputKeyword) {
//             setCurrentSearchKeyword(inputKeyword);
//             fetchVideos(inputKeyword);
//         }
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchVideos(currentSearchKeyword, nextPageToken);
//         }
//     };

//     const searchPageClass = loading ? 'isLoading' : 'isLoaded';

//     return (
//         <div className='search__contents'>
//             <div className="search__inner">
//                 <h3>코딩 유튜버</h3>
//                 <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
//                 <div className='info'>
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="search"
//                                 id='searchInput'
//                                 placeholder='검색'
//                                 autoComplete='off'
//                                 className='search__input'
//                                 value={inputKeyword}
//                                 onChange={handleSearchChange}
//                             />
//                         </form>
//                     </div>
//                     <div>
//                         <ul className='keyword'>
//                             {searchKeyword.map((keyword, index) => (
//                                 <li key={index}
//                                     className={location.pathname.includes(keyword.src) ? 'active' : ''}
//                                     onClick={() => handleKeywordClick(keyword.title)}>
//                                     {keyword.title}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <section id='searchPage' className={searchPageClass}>
//                 <div className="video__inner search">
//                     <VideoSearch videos={videos} />
//                 </div>
//                 {nextPageToken && (
//                     <div className='video__more'>
//                         <button onClick={handleLoadMore}>더 보기</button>
//                     </div>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default Search;


import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "../assets/css/section/_header.css";
import "../assets/css/section/_Video.css";
import { searchKeyword } from '../data/header.js';
import VideoSearch from './video/VideoSearch.jsx';
import { fetchFromAPI } from '../utils/api.js';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inputKeyword, setInputKeyword] = useState('');
    const [currentSearchKeyword, setCurrentSearchKeyword] = useState('');
    const location = useLocation();

    const fetchVideos = useCallback((query, pageToken = '') => {
        setLoading(true);
        setVideos([]);
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos(prevVideos => pageToken ? [...prevVideos, ...data.items] : data.items);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data', error);
                setLoading(false);
            });
    }, [setLoading, setVideos, setNextPageToken]);

    useEffect(() => {
        if (searchId) {
            setCurrentSearchKeyword(searchId);
            fetchVideos(searchId);
        }
    }, [searchId, fetchVideos]);

    const handleKeywordClick = (keyword) => {
        setCurrentSearchKeyword(keyword);
        fetchVideos(keyword);
    };

    const handleSearchChange = (event) => {
        setInputKeyword(event.target.value);
        if (event.target.value === '') {
            fetchVideos('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputKeyword) {
            setCurrentSearchKeyword(inputKeyword);
            fetchVideos(inputKeyword);
        }
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(currentSearchKeyword, nextPageToken);
        }
    };

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <div className='search__contents'>
            <div className="search__inner">
                <h3>코딩 유튜버</h3>
                <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
                <div className='info'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="search"
                                id='searchInput'
                                placeholder='검색'
                                autoComplete='off'
                                className='search__input'
                                value={inputKeyword}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                    <div>
                        <ul className='keyword'>
                            {searchKeyword.map((keyword, index) => (
                                <li key={index}
                                    className={location.pathname.includes(keyword.src) ? 'active' : ''}
                                    onClick={() => handleKeywordClick(keyword.title)}>
                                    {keyword.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <section id='searchPage' className={searchPageClass}>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                {nextPageToken && (
                    <div className='video__more'>
                        <button onClick={handleLoadMore}>더 보기</button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Search;
