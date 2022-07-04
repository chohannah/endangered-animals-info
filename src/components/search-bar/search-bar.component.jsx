import { Component } from "react";

class SearchBar extends Component {
  render() {
    const { placeholder, onChangeHandler } = this.props;
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
  }
}

export default SearchBar;
