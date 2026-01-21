import { CrossLineIcon, SearchIcon } from "../icons";

function SearchInput() {
  return (
    <div className="flex items-center font-secondary font-normal text-[16px] text-primary-input px-4 py-2 border border-border-input rounded-2xl placeholder:text-primary-input focus-within:ring-2 focus-within:ring-border-focus">
      <div className="flex items-center gap-4">
        <SearchIcon />
        <input
          className="w-full outline-none "
          type="search"
          name="search"
          placeholder="Rechercher"
        />
      </div>
      <CrossLineIcon />
    </div>
  );
}

export default SearchInput;
