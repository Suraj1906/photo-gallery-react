import { Camera } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-teal-100/50 blur-xl" />

        {/* Static ring */}
        <div className="absolute inset-0 rounded-full border border-neutral-200" />

        {/* Animated ring */}
        <div
          className="
            absolute inset-0 rounded-full
            border-2 border-transparent
            border-t-teal-600
            border-r-emerald-400
            animate-spin
          "
        />

        {/* Inner circle */}
        <div
          className="
            relative flex h-12 w-12 items-center justify-center
            rounded-full border border-neutral-200
            bg-white shadow-sm
          "
        >
          <Camera
            size={20}
            strokeWidth={1.7}
            className="text-neutral-600"
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm font-semibold tracking-tight text-neutral-700">
          Curating your gallery
        </p>

        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="h-1 w-1 animate-pulse rounded-full bg-teal-500" />
          <span
            className="h-1 w-1 animate-pulse rounded-full bg-teal-500"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-1 w-1 animate-pulse rounded-full bg-teal-500"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;