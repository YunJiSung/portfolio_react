// import React, { useState, useEffect, useCallback } from 'react';
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
//     const [currentSearchKeyword, setCurrentSearchKeyword] = useState('');
//     const location = useLocation();

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

//     useEffect(() => {
//         if (searchId) {
//             setCurrentSearchKeyword(searchId);
//             fetchVideos(searchId);
//         }
//     }, [searchId, fetchVideos]);

//     const handleKeywordClick = (keyword) => {
//         setCurrentSearchKeyword(keyword);
//         fetchVideos(keyword);
//     };

//     const handleSearchChange = (event) => {
//         setInputKeyword(event.target.value);
//         if (event.target.value === '') {
//             fetchVideos('');
//         }
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
// import "../assets/css/section/_header.css";
// import "../assets/css/section/_Video.css";
import { searchKeyword } from '../data/header.js';
import VideoSearch from './video/VideoSearch.jsx';
import { fetchFromAPI } from '../utils/api.js';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inputKeyword, setInputKeyword] = useState('');
    const [currentSearchKeyword, setCurrentSearchKeyword] = useState('코딩');
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
        } else {
            fetchVideos(currentSearchKeyword);
        }
    }, [searchId, currentSearchKeyword, fetchVideos]);

    const handleKeywordClick = (keyword) => {
        setCurrentSearchKeyword(keyword);
        fetchVideos(keyword);
    };

    const handleSearchChange = (event) => {
        setInputKeyword(event.target.value);
        if (event.target.value === '') {
            setCurrentSearchKeyword('코딩');
            fetchVideos('코딩');
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
