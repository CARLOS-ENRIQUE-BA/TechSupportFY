import '../../assets/style/pages.css';
import React from "react";

const VideoDetail = ({video}) => {
    if (!video) {
        return;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='video-principal'>
            <div  className='ui-embed'>
                <iframe id='contenido1' src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui-segment'>
                <h4 className='ui-header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;