// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YouTubeLayer = () => {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_RAPID_API_KEY}&channelId=${video.id.videoId}&part=snippet,id&order=date&maxResults=20`);
//                 setVideos(response.data.items);
//             } catch (error) {
//                 console.error('Error fetching YouTube videos:', error);
//             }
//         };

//         fetchVideos();
//     }, []);

//     return (
//         <div>
//             {videos.map(video => (
//                 <div key={video.id.videoId}>
//                     <h3>{video.snippet.title}</h3>
//                     <iframe
//                         width="560"
//                         height="315"
//                         src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default YouTubeLayer;
