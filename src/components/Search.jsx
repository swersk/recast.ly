const { useState } = React;
const { useEffect } = React;
import searchYouTube from '/src/lib/searchYouTube.js';

var Search = ({setVideoList, setCurrentVideo}) => {

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setTimeout(searchYouTube(query, (data) => {
      setVideoList(data);
      setCurrentVideo(data[0]);
    })
    , 500);
  }, [query]);

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(event) => handleChange(event)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
