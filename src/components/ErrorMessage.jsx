function ErrorMessage({ message }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-bold text-red-500 shadow-sm">
          !
        </div>

        <h2 className="mt-5 text-lg font-bold text-neutral-900">
          Couldn't load the gallery
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;