import { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ placeholder, handleOnChange }: SearchBoxProps) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar"
        type="search"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
