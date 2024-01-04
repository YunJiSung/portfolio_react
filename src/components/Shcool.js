import React from 'react';
import "../assets/css/section/_home.css";
import schoolMainImage from '../assets/img/shcoolmain.png';
import figma from '../assets/img/figma.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="layer layer1 about">
            <div className="layer__contents">
                <div className="layerheader">
                    <div className="headerinfo">
                        <h3>PHP 블로그</h3>
                        <span className="small">Team project</span>
                        <span className="mail"></span>
                        <div className="img">
                            <img src={schoolMainImage} alt="bg" />
                        </div>
                    </div>
                </div>

                <p className="intro1">
                    Go!교복
                    팀플 블로그 사이트 만들기<br />
                    <br />
                    직장인 커뮤니티, 대학생 커뮤니티 <br />
                    "왜 청소년을 위한 커뮤니티는 없을까?" 라는 생각에서 진행하게 된 프로젝트입니다!<br />
                    학교에서 얻을 수 없는 독특한 정보를 제공하고자,<br />
                    전국 고등학교의 교복을 소개하는 커뮤니티 사이트를 제작하였습니다.<br />
                    <br />
                    전국의 교복을 구경하며 투표를 할 수 있고,<br />
                    그에 대한 평가는 댓글로도 자유롭게 논할 수 있습니다.<br />
                    <br />
                    투표가 진행된 해당 학교의 교복은 인기순위로 매겨지고<br />
                    각 조회수, 좋아요, 싫어요 순으로 순위를 확인할 수 있습니다.<br />
                    <br />
                    또, "수다방" 커뮤니티에서 학생들만의 이야기로<br />
                    수다의 꽃을 피울 수 있습니다!
                </p>
                <div className="intro1">
                    <h3>Figma</h3>
                    <div className="img">
                        <img src={figma} alt="figma" />
                    </div>

                    <br />
                    1. HEADER<br />
                    <br />
                    - 메인 컬러 : #1976DE, 서브 컬러 : black, white, #D2E7FF<br />
                    - 로고 : 롯데리아 촵땡겨체(LotteriaChab)<br />
                    - 메뉴 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                    <br />
                    2. MAIN<br />
                    <br />
                    - Main Visual<br />
                    1 애니메이션 교실 배경 이미지<br />
                    2 메인 문구 폰트 : Londrina Solid 구글 폰트<br />
                    3 서브 폰트 : 샌드박스 어그로체<br />
                    - Main Section<br />
                    1 메인 폰트 : 샌드박스 어그로체<br />
                    2 서브 폰트 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                    <br />
                    3. SUB<br />
                    <br />
                    - 상단 배너 이미지 : 애니메니션 학교 배경, 실사 교복 착용 화보 이미지<br />
                    1 전체 폰트 : 샌드박스 어그로체<br />
                    2 교복 상세페이지 : 인스타그램 레이아웃 참고<br />
                    <br />
                    4. FOOTER<br />
                    <br />
                    - Black 색상 배경<br />
                    - 전체 폰트 : 샌드박스 어그로체<br />

                </div>

                <div className="intro1">

                    <h3>Page-list</h3>
                    <br />
                    1. HEADER<br />
                    - logo 제작<br />
                    - nav - menu 구성 (교복소개, 인기순위, 수다방, 로그인, 회원가입)<br />
                    <br />
                    2. . 메인페이지<br />
                    - Main Visual : gsap를 이용한 애니메이션<br />
                    - section01 : 이미지 슬라이드, 배경 고정 효과<br />
                    - section02 : 마우스 Hover 효과, 링크 바로가기<br />
                    - section03 : php를 이용하여 게시판 리스트 정보 가져오기<br />
                    - section04 : css animation 효과, 유튜브 영상 탭메뉴 구현<br />
                    <br />
                    3. 교복소개<br />
                    - json을 이용하여 전국 학교 정보 출력<br />
                    - 지역별 필터 검색<br />
                    - 키워드 검색<br />
                    - 교복 목록 조회수, 댓글수 표시<br />
                    <br />
                    4. 교복소개 상세<br />
                    - 교복 이미지 swiper를 이용한 슬라이드<br />
                    - 좋아요, 싫어요 투표 기능 : 클릭 시, 배경 색상 변경 효과<br />
                    - 댓글 : 댓글작성, 댓글 좋아요/좋아요 취소, 이모티콘 작성<br />
                    <br />
                    5. 인기순위<br />
                    - 조회수, 좋아요, 싫어요 순으로 리스트 정렬<br />
                    - 각 조회수, 좋아요, 싫어요 수 노출<br />
                    <br />
                    6. 수다방<br />
                    - 게시판 목록 : NO, Title, Name, Date, View, Like<br />
                    - 게시판 상세 : 게시글 좋아요 기능, 댓글 기능(댓글 작성, 랜덤 프로필, 댓글 좋아요 기능)<br />
                    <br />
                    7. 마이페이지<br />
                    - 내 정보 변경 : 회원가입 정보 불러오기/정보 수정 기능<br />
                    - 내가 쓴 글 : 각 회원별 게시판 작성글 불러오기<br />
                    - 내가 좋아한 교복 : 교복소개 페이지에서 좋아요 누른 교복 정보 불러오기<br />
                    - 비밀번호 변경 : 비밀번호 변경 기능<br />
                    - 회원 탈퇴하기 : 회원 정보 삭제<br />
                    <br />
                    8. 로그인<br />
                    - 아이디, 비밀번호 입력 시 일치하는 정보  가져오기<br />
                    - 아이디 찾기 : 연락처, 이름 일치 정보<br />
                    - 비밀번호 찾기 기능 : 아이디, 연락처 일치 정보<br />
                    <br />
                    9. 회원가입<br />
                    - 아이디 : 중복 검사 기능<br />
                    - 이름<br />
                    - 이메일 : 중복 검사 기능<br />
                    - 비밀번호, 비밀번호 확인<br />
                    - 주소 : 주소 검색 기능<br />
                    - 연락처<br />
                    - 약관 동의<br />
                    - 가입 완료 시, 회원 정보 저장<br />
                    <br />
                    10. FOOTER<br />
                    - Copyright 2023 Gogyobok
                </div>


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
            <div className="shcool__footer">
                <div>😎 윤지성 개발자입니다.</div>
                <div className="work_btn">
                    <Link to="http://capitaljs10.dothome.co.kr/blog_php/index.html" target="_blank" className="ko">view</Link>
                    <Link to="https://github.com/YunJiSung/SUsite" target="_blank" className="ko">code</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
