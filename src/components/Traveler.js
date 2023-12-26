// import React from 'react'
// import { travelerText } from '../data/traveler'
// import { Link } from 'react-router-dom'
// import Main from './section/Main'
// const Youtuber = () => {
//     return (
//         <Main
//             title="여행 유튜버 모음"
//             description="여행 유튜버 모음 페이지입니다."
//         >
//             <section id='travelerPage'>
//                 <h2></h2>
//                 <div className='traveler__inner'>
//                     {travelerText.map((traveler, key) => (
//                         <div className='traveler play__icon' key={key}>
//                             <div className="traveler__img">
//                                 <Link to={`/channel/${traveler.channelId}`}>
//                                     <img src={traveler.img} alt={traveler.author} />
//                                 </Link>
//                             </div>
//                             <div className='traveler__info'>{traveler.author}</div>
//                         </div>

//                     ))}
//                 </div>
//             </section>

//         </Main>
//     )
// }

// export default Youtuber

import React, { useState } from 'react';
import { travelerText } from '../data/traveler';
import Main from './section/Main';
import Modal from './Modal.js'; // 모달 컴포넌트 import
import { fetchFromAPI } from '../utils/api'; // API 호출 함수
import { Link } from 'react-router-dom';

const Youtuber = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState(null);

    const handleImageClick = async (channelId) => {
        try {
            const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
            setSelectedChannel(data.items[0]);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error fetching channel details:", error);
        }
    };

    return (
        <Main title="여행 유튜버 모음" description="여행 유튜버 모음 페이지입니다.">
            <section id='travelerPage'>
                <div className='traveler__inner'>
                    {travelerText.map((traveler, key) => (
                        <div className='traveler play__icon' key={key} onClick={() => handleImageClick(traveler.channelId)}>
                            <Link className="traveler__img">
                                <img src={traveler.img} alt={traveler.author} />
                            </Link>
                            <div className='traveler__info'>{traveler.author}</div>
                        </div>
                    ))}
                </div>
            </section>
            <Modal isOpen={isModalOpen} channel={selectedChannel} onClose={() => setIsModalOpen(false)} />
        </Main>
    );
};

export default Youtuber;
