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
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  // width: 768px;
  padding: 5%;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          // `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7997af86564840c38d40ddd4a11b0c48`
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=7997af86564840c38d40ddd4a11b0c48'

          // `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7997af86564840c38d40ddd4a11b0c48`
        );
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return <NewsListBlock>뉴스가 없습니다.</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';

// // 스타일 컴포넌트 정의
// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   padding: 5%;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// // NewsList 컴포넌트
// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // 'all'일 때 카테고리 파라미터를 포함하지 않음
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7997af86564840c38d40ddd4a11b0c48`
//         );
//         console.log(response)
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);

//   // 로딩 중인 경우
//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }

//   // 기사가 없는 경우
//   if (!articles) {
//     return <NewsListBlock>뉴스가 없습니다.</NewsListBlock>;
//   }

//   // 기사 목록 표시
//   return (
//     <NewsListBlock>
//       {articles.map(article => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

// export default NewsList;
