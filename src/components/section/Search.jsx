// import React, { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import "../../assets/css/section/_header.css";
// import { headerMenus, searchKeyword } from '../../data/header.js'


// const Search = () => {
//     const [searchKeyword, setSearchKeyword] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();


//     const handleSearch = () => {
//         if (searchKeyword) {
//             navigate(`/search/${searchKeyword}`);
//             setSearchKeyword('');
//         }
//     }
//     handleSearch();

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
//                         // onChange={e => setSearchKeyword(e.target.value)}
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
//         </div   >
//     )
// }

// export default Search





import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../assets/css/section/_header.css";
import { searchKeyword } from '../../data/header.js'; // 키워드 배열

const Search = () => {
    const [inputKeyword, setInputKeyword] = useState(''); // 검색 입력을 위한 상태
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        if (inputKeyword) {
            navigate(`/search/${inputKeyword}`);
            setInputKeyword(''); // 검색 후 입력 필드 초기화
        }
    };

    return (
        <div className='search__wrap'>
            <div id='search'>
                <div className="search__inner">
                    <label htmlFor="searchInput"></label>
                    <input
                        type="search"
                        id='searchInput'
                        placeholder='검색어를 입력해주세요!'
                        autoComplete='off'
                        className='search__input'
                        value={inputKeyword}
                        onChange={e => setInputKeyword(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                </div>
            </div>
            <div>
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;



// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import "../../assets/css/section/_header.css";
// import { searchKeyword } from '../../data/header.js'; // 키워드 배열

// const Search = () => {
//     const [inputKeyword, setInputKeyword] = useState('');
//     const [videos, setVideos] = useState([]); // 검색된 영상 목록을 위한 상태
//     const navigate = useNavigate();
//     const location = useLocation();

//     const fetchVideos = async (keyword) => {
//         // YouTube Data API 호출 및 검색 결과 처리
//         // 예시로, 여기에는 단순히 가상의 데이터를 사용합니다.
//         // 실제 구현에서는 API 요청을 보내고 응답을 처리해야 합니다.
//         const fetchedVideos = [
//             // 키워드에 따른 가상의 검색 결과
//             { id: { videoId: '1' }, snippet: { title: `${keyword} 관련 영상 1`, description: '설명 1' } },
//             { id: { videoId: '2' }, snippet: { title: `${keyword} 관련 영상 2`, description: '설명 2' } },
//             // 더 많은 영상 데이터...
//         ];
//         setVideos(fetchedVideos);
//     };

//     const handleSearch = () => {
//         if (inputKeyword) {
//             fetchVideos(inputKeyword);
//             setInputKeyword('');
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
//                         <li key={key} onClick={() => fetchVideos(keyword.title)} className={location.pathname === keyword.src ? 'active' : ''}>
//                             <Link to={keyword.src}>
//                                 {keyword.title}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div>
//                 {videos.map(video => (
//                     <div key={video.id.videoId}>
//                         <h3>{video.snippet.title}</h3>
//                         <p>{video.snippet.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Search;
