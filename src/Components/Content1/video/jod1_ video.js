// import React, { Component } from 'react';
// import VideoPlayer from 'react-video-js-player';
   
// class VideoApp extends Component {
//     player = {}
//     state = {
//         video: {
//             src: ,
//             poster: "/Project1//1.png"
//         }
//     }
   
//     onPlayerReady(player){
//         this.player = player;
//     }
   
//     render() {
//         return (
//             <div>
//                 <VideoPlayer
//                     controls={true}
//                     src={this.state.video.src}
//                     poster={this.state.video.poster}
//                     width="600px"
//                     height="300px"
                  
//                 />
                
//             </div>
//         );
//     }
// }
// export default VideoApp;





// "/Project1/ScholarProject 1M.mp4"

import React, { useEffect, useRef } from "react";


export default function VideoApp() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
 
        <video
        //   style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
        width="1000px"
        height="600px"
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="/Project1/ScholarProject 1M.mp4"
          ref={videoEl}
        />
    
  );
}





