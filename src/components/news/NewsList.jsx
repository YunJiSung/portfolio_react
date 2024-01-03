// import axios from "axios";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import NewsItem from "./NewsItem";

// interface Article {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
// }

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// export default function NewsList({ category }: { category: string }) {
//   const [articles, setArticles] = useState<Article[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     async function fetchData(): Promise<void> {
//       setLoading(true);
//       try {
//         const query = category === "all" ? "" : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=181cd9b8483e41039a15395e41f3b50b`
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     }
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }

//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article: Article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// }


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// export default function NewsList({ category }) {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7997af86564840c38d40ddd4a11b0c48`
//         );
//         console.log(fetchData)
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.error(e);
//       }
//       setLoading(false);
//     }

//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }

//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// }




// 815
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';
// import Categories from './Categories';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const NewsList = () => {
//   const[article, setArticles] = useState(null);
//   const[loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = Category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7997af86564840c38d40ddd4a11b0c48`,
//         );
//         setArticles(response.data.article);
//       }catch (e){
//         console.log(e)
//       }
//       setLoading(false)
//     };
//     fetchData();
//   }, [category]);
// }


// //대기중
// if(loading) {
//   return<NewsListBlock>대기중 ...</NewsListBlock>;
// }

// if (!article) {
//   return null;
// }

// return (
//   <NewsListBlock>
//     {article.map((article) => (
//       <NewsItem key={article.url} article={article} />
//     ))}
//   </NewsListBlock>
// )

// export default NewsList;


// 가장 최근 코드
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   // width: 768px;
//   padding: 5%;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(

//           'https://newsapi.org/v2/top-headlines?country=kr&apiKey=7997af86564840c38d40ddd4a11b0c48'


//         );
//         console.log(response.data);
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }

//   if (!articles) {
//     return <NewsListBlock>뉴스가 없습니다.</NewsListBlock>;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

// export default NewsList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsList = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
//           headers: {
//             'X-Naver-Client-Id': 'eJs5Tgn2LwpYT70N32MQ',
//             'X-Naver-Client-Secret': 'KxLbjp4Nua'
//           },
//           params: {
//             query: 'example query', // 검색어를 설정
//             display: 10, // 표시할 뉴스 수
//           }
//         });
//         setNewsData(response.data.items);
//       } catch (error) {
//         console.error("Error fetching news", error);
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



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsList = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('/v1/search/news.json', {
//           headers: {
//             'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
//             'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET
//           },
//           params: {
//             query: 'example query',
//             display: 10,
//           }
//         });
//         setNewsData(response.data.items);
//       } catch (error) {
//         console.error("Error fetching news", error);
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

// NewsList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
          headers: {
            'X-Naver-Client-Id': 'eJs5Tgn2LwpYT70N32MQ',
            'X-Naver-Client-Secret': 'KxLbjp4Nua'
          },
          params: {
            query: 'example query', // 검색어를 설정
            display: 10, // 표시할 뉴스 수
          }
        });
        setNewsData(response.data.items);
      } catch (error) {
        console.error("Error fetching news", error);
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
