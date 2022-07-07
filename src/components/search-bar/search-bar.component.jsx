const SearchBar = ({ placeholder, onChangeHandler }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
