
var VideoListEntry = ({ video, handleVideoListEntryTitleClick }) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img
        className="media-object"
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
    </div>
    <div className="media-body">
      <div
        className="video-list-entry-title"
        onClick={() => handleVideoListEntryTitleClick(video)}>
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);


VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;