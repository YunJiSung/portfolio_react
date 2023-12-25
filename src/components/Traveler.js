import React from 'react'
// import React, { useState, useEffect } from 'react';
import { travelerText } from '../data/traveler'
import { Link } from 'react-router-dom'
// import Main from './section/Main'
import Main from './section/Main'
const Youtuber = () => {
    return (
        <Main
            title="여행 유튜버 모음"
            description="여행 유튜버 모음 페이지입니다."
        >
            <section id='travelerPage'>
                <h2></h2>
                <div className='traveler__inner'>
                    {travelerText.map((traveler, key) => (
                        <div className='traveler play__icon' key={key}>
                            <div className="traveler__img">
                                <Link to={`/channel/${traveler.channelId}`}>
                                    <img src={traveler.img} alt={traveler.author} />
                                </Link>
                            </div>
                            <div className='traveler__info'>{traveler.author}</div>
                        </div>

                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Youtuber