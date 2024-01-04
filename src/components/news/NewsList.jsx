// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NewsList = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
//           params: {
//             query: '&#xd574;&#xc678;&#xcd95;&#xad6c;',
//             display: "10",
//             start: "1",
//             sort: "sim"
//           },
//           headers: {
//             'X-Naver-Client-Id': "eJs5Tgn2LwpYT70N32MQ",
//             'X-Naver-Client-Secret': "KxLbjp4Nua"
//           }
//         });
//         setNewsData(response.data.items);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div>
//       <h1>News</h1>
//       <ul>
//         {newsData.map((news, index) => (
//           <li key={index}>
//             <a href={news.link} target="_blank" rel="noopener noreferrer">
//               {news.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewsList;
