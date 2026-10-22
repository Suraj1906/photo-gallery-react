import { Heart } from "lucide-react";

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-3xl border border-neutral-200/80
        bg-white
        shadow-[0_6px_25px_rgba(0,0,0,0.05)]
        transition-all duration-500
        hover:-translate-y-2
        hover:scale-[1.015]
        hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-700
            ease-out
            group-hover:scale-110
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/20 via-transparent to-transparent
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          className={`
            absolute right-4 top-4
            flex h-11 w-11 items-center justify-center
            rounded-full border shadow-lg
            backdrop-blur-md
            transition-all duration-300
            hover:scale-110
            active:scale-95
            ${
              isFavourite
                ? "border-white/40 bg-white text-red-500"
                : "border-white/30 bg-black/20 text-white hover:bg-white hover:text-neutral-900"
            }
          `}
        >
          <Heart
            size={19}
            strokeWidth={2}
            fill={isFavourite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
            Photographer
          </p>

          <h2 className="truncate text-sm font-semibold text-neutral-800">
            {photo.author}
          </h2>
        </div>

        <span
          className="
            shrink-0 rounded-full bg-neutral-100
            px-3 py-1.5 text-[11px] font-semibold
            text-neutral-500
            transition-colors duration-300
            group-hover:bg-neutral-900
            group-hover:text-white
          "
        >
          #{photo.id}
        </span>
      </div>
    </article>
  );
}

export default PhotoCard;