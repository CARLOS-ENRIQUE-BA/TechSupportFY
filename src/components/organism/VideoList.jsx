import '../../assets/style/pages.css';
import VideoItem from './VideoItem';
import React from "react";

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div id='rendered' className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;