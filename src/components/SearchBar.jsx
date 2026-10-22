import { Search, X } from "lucide-react";

function SearchBar({ value, onChange }) {
  const clearSearch = () => {
    onChange("");
  };

  return (
    <div className="relative w-full max-w-xl">
      <div
        className="
          group flex items-center gap-3
          rounded-2xl border border-neutral-200
          bg-white px-4 py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
          transition-all duration-300
          focus-within:border-neutral-300
          focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        "
      >
        <Search
          size={20}
          strokeWidth={1.8}
          className="shrink-0 text-neutral-400 transition-colors group-focus-within:text-neutral-700"
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by photographer..."
          className="
            w-full bg-transparent text-sm font-medium
            text-neutral-900 outline-none
            placeholder:text-neutral-400
          "
        />

        {value && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              flex h-7 w-7 shrink-0 items-center justify-center
              rounded-full bg-neutral-100
              text-neutral-500
              transition-all duration-200
              hover:scale-105 hover:bg-neutral-200
              hover:text-neutral-900
            "
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;