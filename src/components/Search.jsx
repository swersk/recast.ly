
// This is the conrolled component solution
// https://facebook.github.io/react/docs/forms.html#controlled-components
const { useState } = React;

function Search(props) {
  const [entry, setEntry] = useState("");

  const handleInputChange = (event) => {
    props.handleSearchInputChange(event.target.value);
    setEntry(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={entry}
        onChange={handleInputChange}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

// This is the uncontrolled component solution
// It is not used, just here for reference

var UncontrolledSearch = ({ handleSearchInputChange }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);


export default Search;