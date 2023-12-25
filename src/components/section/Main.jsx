import { HelmetProvider, Helmet } from 'react-helmet-async'
import React from 'react'
import Search from './Search';
// import Search from './Search'
// import Header from './Header'
// import Footer from './Footer'
import ScrollTo from '../../utils/scrollTo'; // 대문자 'S'를 소문자 's'로 변경

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Traverler Youtuber"
                defaultTitel="Traverler Youtuber"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.decription} />
            </Helmet>

            {/* <Header /> */}
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            {/* <Footer /> */}
        </HelmetProvider>
    )
}

export default Main