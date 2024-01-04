import React from 'react';
import "../assets/css/section/_home.css";
import youtube from '../assets/img/youtube_project.png';
import { Link } from 'react-router-dom';


const Travel = () => {
    return (
        <div className="layer layer1 about">
            <div className="layer__contents">
                <div className="layerheader">
                    <div className="headerinfo">
                        <h3>travel youtube</h3>
                        <span className="small">React project</span>
                        <span className="mail"></span>
                        <div className="img">
                            <img src={youtube} alt="bg" />
                        </div>
                    </div>
                </div>

                <div className="intro1">
                    <p>
                        여행을 사랑하는 모든 이들에게, '여행 유튜버 사이트'은 여러분의 호기심을 자극하고, 새로운 여행지의 발견을 돕는 유튜브 기반의 정보 플랫폼입니다.
                        이곳은 여행에 대한 영감을 주는 다양한 콘텐츠와 생생한 사용자 경험을 공유하는 공간으로, 여행을 준비하는 이들에게 실질적인 도움과 즐거움을 제공합니다.
                    </p>
                    <br />
                    <p>
                        여행지의 숨겨진 이야기부터, 실제 여행자들의 후기와 팁까지, 여행에 관한 모든 것을 한눈에 볼 수 있도록 디자인되었습니다.
                        기술적인 면에서 '여행유튜버 사이트'는  React를 중심으로 제작 하였습니다 Git과 같은 협업 도구를 사용하여 지속적인 개선과 업데이트가 이루어집니다.
                        또한, 강력한 API 통합을 통해 유튜브에서 실시간으로 콘텐츠를 불러와 최신의 여행 관련 비디오를 제공합니다.
                        사용자들은 원하는 여행지의 유튜브 콘텐츠를 검색하고, 추천 받으며, 자신만의 여행 리스트를 만들 수 있습니다.
                    </p>
                    <br />
                    <p>
                        '여행 유튜버 사이트'는 여러분이 원하는 여행을 계획하고, 나아가 새로운 세계를 경험하도록 도와줄 것입니다. 여러분의 다음 여행지는 어디인가요? 지금 바로 '여행 유튜버 사이트'과 함께 그 여행을 시작하세요.
                    </p>
                    <br />
                </div>
                <p className="intro1">
                    개요<br />

                    이 플랫폼은 다양한 YouTube 채널로부터 여행 관련 콘텐츠를 수집하여 표시하는 데 중점을 두고 있습니다. <br />
                    React의 강력한 기능을 활용하여, 동적이고 사용자 친화적인 인터페이스를 제공함으로써 전반적인 탐색 경험을 향상시킵니다. <br />
                    YouTube API와의 통합은 여행 블로그, 가이드 및 기타 관련 콘텐츠의 원활하고 최신의 스트림을 보장하여 여행 애호가들을 위한 원스톱 목적지를 만듭니다.<br />
                    <br />

                    주요 페이지 및 기능<br />
                    <br />
                    채널 페이지 (Channel.js):<br />
                    <br />
                    기능: 특정 YouTube 채널에 대한 자세한 정보를 표시합니다. 배너, 프로필 사진 및 구독자 수, 비디오 수, 전체 조회수와 같은 주요 통계를 포함합니다. <br />
                    채널의 비디오 목록을 표시하고 추가 콘텐츠를 가져오기 위한 '더 보기' 기능을 제공합니다.<br />
                    코드 하이라이트: React 훅 (useState, useEffect) 및 useParams를 사용하여 채널 세부 정보 및 비디오를 가져오고 표시합니다. <br />
                    fetchFromAPI를 사용한 비동기 데이터 가져오기를 구현합니다.<br />
                    <br />
                    홈 페이지 (Home.js):<br />
                    <br />
                    기능: 다양한 채널에서 가져온 비디오 컬렉션을 특색있고 매력적인 레이아웃으로 표시하는 주요 랜딩 페이지입니다.<br />
                    코드 하이라이트: 서로 다른 채널의 비디오를 저장하기 위해 여러 상태 변수를 사용합니다. useEffect 훅은 컴포넌트 마운트 시 각 채널의 비디오 데이터를 가져옵니다.<br />
                    <br />
                    검색 페이지 (Search.js):<br />
                    <br />
                    기능: 특정 쿼리에 따라 YouTube 비디오를 검색할 수 있습니다. 페이지네이션을 위한 '더 보기' 버튼이 포함되어 있습니다.<br />
                    코드 하이라이트: useParams와 fetchFromAPI를 사용하여 검색 기능을 구현합니다. 비디오, 로딩 상태 및 페이지네이션을 위한 상태 관리를 합니다.<br />
                    <br />
                    오늘 및 유튜버 섹션 (Today.js, Youtuber.js):<br />
                    <br />
                    기능: 새로운 콘텐츠 발견을 증진시키기 위해 선정된 비디오와 YouTube 채널을 전시합니다.<br />
                    코드 하이라이트: 렌더링을 위해 todayText 및 travelerText의 정적 데이터를 사용합니다.<br />
                    <br />
                    비디오 페이지 (Video.js):<br />
                    <br />
                    기능: 선택된 비디오에 대한 자세한 보기를 제공하며, 댓글 및 관련 통계를 포함합니다.<br />
                    코드 하이라이트: useParams에서 비디오 ID를 사용하여 비디오 세부 정보 및 댓글을 가져오고 표시합니다.<br />
                    <br />
                    재사용 가능한 컴포넌트 (Header.js, Footer.js, Main.js):<br />
                    <br />
                    기능: 사이트 전반에 걸쳐 일관된 탐색, 브랜딩 및 레이아웃 구조를 제공합니다.<br />
                    코드 하이라이트: Header는 탐색 및 소셜 미디어 링크를 포함하고, Footer는 연락처 정보를 제공하며, Main은 Helmet을 사용한 전체 페이지 레이아웃 및 SEO를 관리합니다.<br />
                </p>
                <div className="layer__scrollable">
                    <div className="content-grid">
                        {/* <section className="experience-container">
                            <div className="inner">
                                <h2 className="section-title">Learning</h2>
                                <div className="section-content">
                                    <ol className="item-text">
                                        <li>
                                            <div className="title">Basic</div>
                                            <div className="subtitle"><span>html, css, javascript</span></div>
                                            <p className="text">
                                                - HTML, css는 웹페이지의 구조를 정의하고 스타일을 적용하여 디자인을 결정합니다<br />
                                                - JavaScript는 웹페이지에 동적인 요소와 사용자 인터페이스를 생성하게 해줍니다.<br />
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title">Practice</div>
                                            <div className="subtitle"><span>React,Node.js</span></div>
                                            <p className="text">
                                                - React는 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반 개발을 통해 재사용 가능하고 관리하기 쉬운 UI를 만듭니다.<br />
                                                - Node.js는 서버 사이드에서 JavaScript를 실행할 수 있게 해주는 크로스 플랫폼 런타임 환경으로 높은 성능의 애플리케이션을 구축할 수 있습니다.<br />
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title">Publish</div>
                                            <div className="subtitle"><span>Git, Netlify</span></div>
                                            <p className="text">
                                                - Git은 분산 버전 관리 시스템으로, 소프트웨어 개발에서 소스 코드의 변경 사항을 추적하고 협업을 용이하게 하는 도구입니다.<br />
                                                - Netlify는 웹 앱을 구축, 테스트 및 배포할 수 있는 클라우드 기반 서비스로 지속적인 통합 및 배포를 자동화하여 개발자의 작업 흐름을 간소화합니다.<br />
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section> */}

                        {/* <section className="project-container">
                            <div className="inner">
                                <h2 className="section-title">Skill</h2>
                                <div className="section-content">
                                    <ol className="item-text">
                                        <li>
                                            <div className="title">Programming tools</div>
                                            <div className="subtitle"><span>React</span></div>
                                            <p className="text">
                                                - 가상 DOM을 사용하여 애플리케이션의 성능을 최적화하고 빠른 렌더링을 가능하게 합니다.<br />
                                                - 컴포넌트 기반의 구조를 통해 대규모 애플리케이션의 데이터 관리가 용이해집니다.<br />
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title">Programming tools</div>
                                            <div className="subtitle"><span>Node.js</span></div>
                                            <p className="text">
                                                - NPM(Node Package Manager)을 통해 다양한 모듈과 라이브러리를 쉽게 설치하고 관리할 수 있어 개발자 생산성을 크게 향상시킵니다.<br />
                                                - Node.js는 비동기 이벤트 주도 방식으로 설계된 서버 사이드 JavaScript 환경으로, 빠른 네트워크 애플리케이션 구축에 적합합니다.<br />
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title">Programming tools</div>
                                            <div className="subtitle"><span>Firebase,MongoDB</span></div>
                                            <p className="text">
                                                - Firebase는 실시간 데이터 동기화와 백엔드 서비스를 제공하는 클라우드 기반 플랫폼이며, 클라이언트 개발을 간소화하는 데 중점을 둡니다.<br />
                                                - MongoDB는 문서 지향 NoSQL 데이터베이스로, 대규모 분산 데이터 세트를 위한 확장성과 성능을 제공합니다.<br />
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
            <div className="travel__footer">
                <div>😎 윤지성 개발자입니다.</div>
                <div className="work_btn">
                    <Link to="https://glittery-meringue-6e4151.netlify.app/" target="_blank" className="ko">view</Link>
                    <Link to="https://github.com/YunJiSung/youtube-project" target="_blank" className="ko">code</Link>
                </div>
            </div>
        </div>
    );
};

export default Travel;
