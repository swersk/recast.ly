
const { useState, useEffect } = React;
import Search from "./Search.js";
import searchYouTube from "../lib/searchYouTube.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoList from "./VideoList.js";

function App(props) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const getYouTubeVideos = (query) => {
    searchYouTube(query, (videos) => {
      setCurrentVideo(videos[0]);
      setVideos(videos);
    });
  };

  const handleVideoListEntryTitleClick = (video) => {
    setCurrentVideo(video);
  };

  useEffect(function () {
    getYouTubeVideos("react tutorials");
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={getYouTubeVideos} />
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
            videos={videos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;