// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NewsList = () => {
//     const [newsData, setNewsData] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
//                     params: {
//                         query: '&#xd574;&#xc678;&#xcd95;&#xad6c;',
//                         display: "10",
//                         start: "1",
//                         sort: "sim"
//                     },
//                     headers: {
//                         'X-Naver-Client-Id': "eJs5Tgn2LwpYT70N32MQ",
//                         'X-Naver-Client-Secret': "KxLbjp4Nua"
//                     }
//                 });
//                 setNewsData(response.data.items);
//             } catch (error) {
//                 console.error("Error fetching news data:", error);
//             }
//         };

//         fetchNews();
//     }, []);

//     return (
//         <div>
//             <h1>News</h1>
//             <ul>
//                 {newsData.map((news, index) => (
//                     <li key={index}>
//                         <a href={news.link} target="_blank" rel="noopener noreferrer">
//                             {news.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NewsList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {

                    params: {
                        query: 'encodeURI', // 쿼리를 디코딩하거나 변경해야 할 수 있습니다
                        display: "10",
                        start: "1",
                        sort: "sim"
                    },
                    headers: {
                        'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
                        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET
                    }
                });
                setNewsData(response.data.items);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <h1>News</h1>
            <ul>
                {newsData.map((news, index) => (
                    <li key={index}>
                        <a href={news.link} target="_blank" rel="noopener noreferrer">
                            {news.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;

