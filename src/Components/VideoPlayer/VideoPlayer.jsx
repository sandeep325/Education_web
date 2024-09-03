import React, { useRef } from 'react'
import "./videoPlayer.css";
import video from "../../assets/collage-video-lac.mp4"
const VideoPlayer = (props) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current) {
            props.setPlayStae(false);
        }

    }
  return (
    <div className={`video-player ${props?.playState ? '': 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer;
