// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './assets/css/style.css';
// import App from './App';

// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// 가장 최근 사용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './assets/css/style.css'; // CSS 파일 임포트
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css'; // 첫 번째 CSS 파일

import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



