
import VideoListEntry from "./VideoListEntry.js";

var VideoList = ({ videos, handleVideoListEntryTitleClick }) => (
  <div className="video-list">
    {videos.map((video) => (
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    ))}
  </div>
);


VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;