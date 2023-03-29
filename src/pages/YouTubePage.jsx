import React from "react";
import SearchBar from "../components/organism/SearchBar"
import VideoDetail from "../components/organism/VideoDetail"
import VideoList from "../components/organism/VideoList"
import youtube from "../components/molecules/YouTubeApi"

        class YouTubePage extends React.Component {
            state = {
                videos: [],
                selectedVideo: null
            }
            handleSubmit = async (termFromSearchBar) => {
                const response = await youtube.get('/search', {
                    params: {
                        q: termFromSearchBar
                    }
                })
                this.setState({
                    videos: response.data.items
                })
            };
            handleVideoSelect = (video) => {
                this.setState({selectedVideo: video})
            }
        
            render() {
                return (
                    <div className='ui container' style={{marginTop: '3em'}}>
                        <SearchBar handleFormSubmit={this.handleSubmit}/>
                        <div className='ui grid'>
                            <div  className="ui row">
                                <div id="contenido"  className="eleven wide column">
                                    <VideoDetail video={this.state.selectedVideo}/>
                                </div>
                                <div className="five wide column">
                                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
export default YouTubePage;