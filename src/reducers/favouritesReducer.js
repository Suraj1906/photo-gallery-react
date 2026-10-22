const initialFavourites = () => {
  try {
    const savedFavourites = localStorage.getItem(
      "photo-gallery-favourites"
    );

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  } catch {
    return [];
  }
};

function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const isFavourite = state.includes(action.payload);

      if (isFavourite) {
        return state.filter((id) => id !== action.payload);
      }

      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export { favouritesReducer, initialFavourites };