import React from 'react'

const Home = () => {
    return (
        <>
            <div id="mainIntro">
                <div class="wallpapers">
                    <div class="draggableIcon youtubeIcon">
                        <img src="assets/img/youtube.png" alt="youtube" />
                        <span>나만의 유튜브</span>
                    </div>
                    <div class="draggableIcon movieIcon">
                        <img src="assets/img/netflix.png" alt="netflix" />
                        <span>영화 리스트</span>
                    </div>
                </div>

                <div class="footer__info">
                    <div class="weather"></div>
                    <div class="menu">
                        <ul>
                            <li class="menu1">
                                <a href="#">
                                    <img src="assets/img/one.png" alt="" />
                                </a>
                            </li>
                            <li class="menu2">
                                <a href="#">
                                    <img src="assets/img/Logo@3x.png" alt="" />
                                </a>
                            </li>
                            <li class="menu3">
                                <a href="#">
                                    <img src="assets/img/spotify.png" alt="" />
                                </a>
                            </li>
                            <li class="menu4">
                                <a href="#">
                                    <img src="assets/img/newsfeed.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="date"></div>
                </div>

                <div class="portLayer portLayer1 youtubeLayer">
                    <div class="portLayer__contents">
                        <h3>Search</h3>
                        <div class="info">
                            <div>
                                <input type="search" />
                            </div>
                            <div>
                                <ul>
                                    <li>all</li>
                                    <li>coding</li>
                                    <li>react</li>
                                    <li>node.js</li>
                                    <li>javascript</li>
                                </ul>
                            </div>
                        </div>
                        <div class="view">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div class="portLayer portLayer1 MovieLayer">
                    <div class="portLayer__contents">
                        <h3>Search</h3>
                        <div class="info">
                            <div>
                                <input type="search" />
                            </div>
                            <div>
                                <ul>
                                    <li>all</li>
                                    <li>coding</li>
                                    <li>react</li>
                                    <li>node.js</li>
                                    <li>javascript</li>
                                </ul>
                            </div>
                        </div>
                        <div class="view">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div class="layer layer1 about">
                    <div class="layer__contents">
                        <div class="layerheader">
                            <div class="headerinfo">
                                <h3>윤지성</h3>
                                <span class="small">Frontend developer</span>
                                <span class="mail">frontend@naver.com</span>
                            </div>
                        </div>

                        <p class="intro1">
                            안녕하세요:D😎 창의적인 웹 디자인과 최신 프론트엔드 기술에 열정을 윤지성 입니다.<br />
                            국비지원강의를 통하여 HTML, CSS, JavaScript, react, node.js를 학습하였고 프론트엔드 개발자가 되기 위해 노력하고있습니다.
                            새로운 기술을 배우고 도전하는 것을 좋아하며, 팀과 협력하여 혁신적이고 효과적인 솔루션을 만드는 데 기여하고 싶습니다.
                        </p>
                        <p class="intro2">
                        </p>
                        <div class="layer__scrollable">
                            <div class="content-grid">
                                <section class="experience-container">
                                    <div class="inner">
                                        <h2 class="section-title">
                                            Learning</h2>
                                        <div class="section-content">
                                            <ol class="item-text">
                                                <li>
                                                    <div class="title">Basic</div>
                                                    <div class="subtitle"><span>html, css, javascript</span></div>
                                                    <p class="text">
                                                        - HTML,css는 웹페이지의 구조를 정의하고 스타일을 적용하여 디자인을 결정합니다 <br />
                                                        - JavaScript는 웹페이지에 동적인 요소와 사용자 인터페이스를 생성하게 해줍니다. <br />

                                                    </p>
                                                </li>
                                                <li>
                                                    <div class="title">Practice</div>
                                                    <div class="subtitle"><span>React,Node.js</span></div>
                                                    <p class="text">
                                                        - React는 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반 개발을 통해 재사용 가능하고 관리하기
                                                        쉬운 UI를 만듭니다. <br />
                                                        - Node.js는 서버 사이드에서 JavaScript를 실행할 수 있게 해주는 크로스 플랫폼 런타임 환경으로 높은 성능의
                                                        애플리케이션을 구축할 수 있습니다.<br />

                                                    </p>
                                                </li>
                                                <li>
                                                    <div class="title">Publish</div>
                                                    <div class="subtitle"><span>Git, Netlify</span></div>
                                                    <p class="text">
                                                        - Git은 분산 버전 관리 시스템으로, 소프트웨어 개발에서 소스 코드의 변경 사항을 추적하고 협업을 용이하게 하는 도구입니다.
                                                        <br>
                                                            - Netlify는 웹 앱을 구축, 테스트 및 배포할 수 있는 클라우드 기반 서비스로 지속적인 통합 및 배포를 자동화하여 개발자의
                                                            작업 흐름을 간소화합니다.<br>

                                                            </p>
                                                        </li>
                                                    </ol>
                                                </div>
                                        </div>
                                </section>

                                <section class="project-container">
                                    <div class="inner">
                                        <h2 class="section-title">Skill</h2>
                                        <div class="section-content">
                                            <ol class="item-text">
                                                <li>
                                                    <div class="title">Programming tools</div>
                                                    <div class="subtitle"><span>React</span></div>
                                                    <p class="text">
                                                        - 가상 DOM을 사용하여 애플리케이션의 성능을 최적화하고 빠른 렌더링을 가능하게 합니다.<br />
                                                        - 컴포넌트 기반의 구조를 통해 대규모 애플리케이션의 데이터 관리가 용이해집니다. <br />

                                                    </p>
                                                </li>
                                                <li>
                                                    <div class="title">Programming tools</div>
                                                    <div class="subtitle"><span>Node.js</span></div>
                                                    <p class="text">
                                                        - NPM(Node Package Manager)을 통해 다양한 모듈과 라이브러리를 쉽게 설치하고 관리할 수 있어 개발자 생산성을
                                                        크게 향상시킵니다. <br />
                                                        - Node.js는 비동기 이벤트 주도 방식으로 설계된 서버 사이드 JavaScript 환경으로, 빠른 네트워크 애플리케이션
                                                        구축에 적합합니다. <br />

                                                    </p>
                                                </li>
                                                <li>
                                                    <div class="title">Programming tools</div>
                                                    <div class="subtitle"><span>Firebase,MongoDB</span></div>
                                                    <p class="text">
                                                        - Firebase는 실시간 데이터 동기화와 백엔드 서비스를 제공하는 클라우드 기반 플랫폼이며, 클라이언트 개발을 간소화하는 데
                                                        중점을 둡니다. <br />
                                                        - MongoDB는 문서 지향 NoSQL 데이터베이스로, 대규모 분산 데이터 세트를 위한 확장성과 성능을 제공합니다 <br />

                                                    </p>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                    <div class="layer__footer">😎 윤지성 개발자입니다.</div>
                </div>

                <div class="layer layer2">
                    <div class="layer__contents">

                    </div>
                    <div class="layer__footer">layer2</div>
                </div>

                <div class="layer layer3">
                    <div class="layer__contents"></div>
                    <div class="layer__footer">layer3</div>
                </div>

                <div class="layer layer4">
                    <div class="layer__contents"></div>
                    <div class="layer__footer">layer4</div>
                </div>


            </div>
        </>
    )
}

export default Home