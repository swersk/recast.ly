//import components
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
const { useState } = React;


var App = () => {


  const [videoList, setVideoList] = useState({exampleVideoData});
  const [currentVideo, setCurrentVideo] = useState({});

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> view goes here</h5>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={exampleVideoData} currentVideoTitle={currentVideo}/></em> view goes here</h5></div>
        </div>
      </div>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

