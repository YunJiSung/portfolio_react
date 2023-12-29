// 현재 사용 코드
// import React from 'react'
// import { Link } from 'react-router-dom'

// const VideoSearch = ({ videos }) => {
//     return (
//         <>
//             {videos.map((video, index) => (
//                 <div className="video" key={index}>
//                     <div className="video__thumb play__icon">
//                         <Link
//                             to={`/video/${video.id.videoId}`}
//                             style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
//                         </Link>
//                     </div>
//                     <div className="video__info">
//                         <div className="title">
//                             <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
//                         </div>
//                         <div className="info">
//                             <span className="author">
//                                 <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default VideoSearch

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import VideoModal from './VideoModal'; // 임포트가 필요합니다.



// const VideoSearch = ({ videos }) => {

//     const [modalVideoId, setModalVideoId] = useState(null);

//     const handleVideoClick = (videoId) => {
//         setModalVideoId(videoId); // 모달을 열 때 현재 비디오 ID를 설정합니다.
//     };

//     const handleCloseModal = () => {
//         setModalVideoId(null); // 모달을 닫습니다.
//     };

//     return (
//         <>
//             {videos.map((video, index) => (
//                 <div className="video" key={index} onClick={() => handleVideoClick(video.id.videoId)}>
//                     <div className="video__thumb play__icon" style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
//                         <Link
//                             to={`/video/${video.id.videoId}`}
//                             style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
//                         </Link>
//                     </div>
//                     <div className="video__info">
//                         <div className="title">
//                             <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
//                         </div>
//                         <div className="info">
//                             <span className="author">
//                                 <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//             {modalVideoId && <VideoModal videoId={modalVideoId} onClose={handleCloseModal} />}
//         </>
//     )
// }

// export default VideoSearch


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 이 부분은 모달이 렌더링될 때 앱의 root를 설정하는 것입니다.

const VideoSearch = ({ videos }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const openModal = (videoId) => {
        setModalIsOpen(true);
        setSelectedVideoId(videoId);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedVideoId(null);
    };

    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video__thumb play__icon" onClick={() => openModal(video.id.videoId)}>
                        <Link to="#" style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }} />
                    </div>
                    <div className="video__info">
                        <div className="title">
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </div>
                        <div className="info">
                            <span className="author">
                                <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="video-modal"
                overlayClassName="video-modal-overlay"
            >
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${selectedVideoId}`}
                    playing={modalIsOpen}
                    width='100%'
                    height='100%'
                />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </>
    )
}

export default VideoSearch;
