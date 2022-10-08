import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBar = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
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
