import React from "react";
import '../../assets/style/pages.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item-item'>
            <img className='ui-image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
                <div className='desciption'>{video.snippet.description}</div>
            </div>
        </div>
    )
};
export default VideoItem;