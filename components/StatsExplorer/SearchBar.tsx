import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type SearchBarProps = {} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const SearchBar = (props: SearchBarProps) => {
  return (
    <form
      action=""
      {...props}
      onSubmit={(e) => e.preventDefault()}
      className="w-full backdrop-saturate-150"
    >
      <div className="relative flex items-center text-gray-500 focus-within:text-gray-900">
        <MagnifyingGlassIcon className="absolute w-6 h-6 ml-3 pointer-events-none" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          className="w-full py-[1rem] pr-3 pl-12 text-xl font-medium text-gray-400 focus:text-gray-800 outline-none border-white/30  placeholder-gray-400  rounded-2xl bg-white/40 backdrop-saturate-150 focus:bg-white/50 hover:bg-white/50 focus:ring-0 focus:shadow-lg focus:shadow-white/10 hover:shadow-lg hover:shadow-white/10 focus:border-white/60"
        />
      </div>
    </form>
  );
};

export { SearchBar };
