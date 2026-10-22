import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { Camera, Heart } from "lucide-react";

import { useFetchPhotos } from "../hooks/useFetchPhotos";
import {
  favouritesReducer,
  initialFavourites,
} from "../reducers/favouritesReducer";

import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    initialFavourites
  );

  useEffect(() => {
    localStorage.setItem(
      "photo-gallery-favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: id,
    });
  }, []);

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return photos;
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch)
    );
  }, [photos, searchTerm]);

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-[420px] overflow-hidden">
        <div className="absolute left-1/2 top-[-280px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-14">
  {/* Top brand row */}
  <div className="mb-10 flex items-center justify-between">
    <div className="flex items-center gap-3 animate-fade-up">
      <div
        className="
          flex h-10 w-10 items-center justify-center
          rounded-2xl bg-neutral-900 text-white
          shadow-lg shadow-neutral-900/15
          transition-transform duration-300
          hover:scale-105
        "
      >
        <Camera size={19} strokeWidth={2} />
      </div>

      <span className="text-sm font-bold tracking-[-0.02em] text-neutral-900">
        Lumina
      </span>
    </div>

    <div
      className="
        flex items-center gap-2 rounded-full
        border border-neutral-200 bg-white/80
        px-4 py-2 text-xs font-semibold
        text-neutral-500 backdrop-blur
        animate-fade-up
      "
      style={{ animationDelay: "120ms" }}
    >
      <Heart size={14} />

      <span>
        {favourites.length}{" "}
        {favourites.length === 1 ? "Favourite" : "Favourites"}
      </span>
    </div>
  </div>

  {/* Hero */}
  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
    <div>
      {/* Badge */}
      <div
        className="
          mb-5 inline-flex items-center gap-2
          rounded-full border border-neutral-200
          bg-white/90 px-3.5 py-2
          text-[10px] font-bold uppercase
          tracking-[0.2em] text-neutral-500
          shadow-sm backdrop-blur
          animate-fade-up-soft
        "
        style={{ animationDelay: "180ms" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        Photo Collection
      </div>

      {/* Main heading */}
      <h1
  className="
    max-w-4xl
    font-serif
    text-5xl font-semibold
    leading-[0.94]
    tracking-[-0.055em]
    animate-fade-up

    bg-gradient-to-r
    from-[#0F766E]
    via-[#287C72]
    to-[#A67C52]

    bg-clip-text
    text-transparent

    sm:text-6xl
    lg:text-[5.25rem]
  "
  style={{ animationDelay: "250ms" }}
>
  Discover moments
  <br />
  worth remembering.
</h1>
      {/* Description */}
      <p
  className="
    mt-7 max-w-xl
    text-[15px] leading-7
    tracking-[-0.01em]
    text-[#64706D]
    animate-fade-up-soft
    sm:text-base
  "
  style={{ animationDelay: "400ms" }}
>
  Explore a curated collection of photography from
  creators around the world.
</p>
    </div>

    {/* Search */}
    <div
      className="animate-fade-up-soft"
      style={{ animationDelay: "500ms" }}
    >
      <SearchBar
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  </div>
</header>
        {/* Gallery */}
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                {searchTerm
                  ? `${filteredPhotos.length} Search Results`
                  : `${photos.length} Photographs`}
              </p>

              {searchTerm && (
                <p className="text-xs text-neutral-400">
                  Searching for{" "}
                  <span className="font-semibold text-neutral-700">
                    "{searchTerm}"
                  </span>
                </p>
              )}
            </div>

            {filteredPhotos.length > 0 ? (
              <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredPhotos.map((photo) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavourite={favourites.includes(photo.id)}
                    onToggleFavourite={handleToggleFavourite}
                  />
                ))}
              </section>
            ) : (
              <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 bg-white px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                  <Camera size={22} className="text-neutral-400" />
                </div>

                <h2 className="mt-5 text-lg font-bold text-neutral-900">
                  No photographers found
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                  Try searching with a different photographer name.
                </p>
              </div>
            )}
          </>
        )}

        <footer className="mt-20 border-t border-neutral-200 py-8">
          <div className="flex flex-col gap-2 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Lumina Gallery</p>

            <p>Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Gallery;