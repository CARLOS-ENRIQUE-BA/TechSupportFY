import React from "react";
import SearchBar from "../components/organism/SearchBar"
import VideoDetail from "../components/organism/VideoDetail"
import VideoList from "../components/organism/VideoList"
import youtube from "../components/molecules/YouTubeApi"
import Footer from "../components/organism/Footer";
import Header from "../components/organism/Header";
import SubTitle from "../components/atoms/SubTitle";
import Question from "../components/atoms/Question";
import "../assets/style/ContentPages.css";
import "../assets/style/pages.css";


class HpPage extends React.Component {
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
            <>
                <Header/>
                <div className="body">
                    <div className="containerTitulo">
                        <SubTitle>Soporte para HP laptop</SubTitle>
                        <Question>Seleccionamos los videos oficiales para una mayor calidad y seguridad.</Question>
                    </div>
                    <div>
                        <SearchBar handleFormSubmit={this.handleSubmit}/>
                        <div className='ui-grid'>
                            <div  className="ui-row">
                                <div id="contenido"  className="eleven-wide-column">
                                    <VideoDetail video={this.state.selectedVideo}/>
                                </div>
                                <div className="five-wide-column">
                                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default HpPage;