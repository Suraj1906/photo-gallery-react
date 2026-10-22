# Lumina — Modern Photo Gallery

A modern, responsive photo gallery built with **React, Vite, and Tailwind CSS**. Lumina fetches 30 photos from the Picsum Photos API and provides real-time photographer search and persistent favourites.

## ✨ Features

- 📸 Fetches 30 photos from the Picsum Photos API
- 🔍 Real-time search by photographer name
- ❤️ Add and remove photos from favourites
- 💾 Favourites persist across page refreshes using `localStorage`
- ⚡ Efficient state management with `useReducer`
- 🪝 Custom `useFetchPhotos` hook for API data fetching
- 🚀 `useCallback` for the search handler
- 🧠 `useMemo` for efficiently computing filtered photos
- ⏳ Loading state with a custom animated loader
- ⚠️ Error state for failed API requests
- 📱 Fully responsive photo grid
- ✨ Smooth hover effects and modern UI animations

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript**
- **Lucide React**
- **Picsum Photos API**

## 📐 Responsive Layout

The gallery adapts across different screen sizes:

- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 4 columns

## 🔌 API

Photos are fetched from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30).

```text
https://picsum.photos/v2/list?limit=30
```

The photos are fetched once when the application loads. Search operates entirely on the already-fetched data without making additional API requests.

## 🧩 Project Structure

```text
src/
├── components/
│   ├── ErrorMessage.jsx
│   ├── Gallery.jsx
│   ├── LoadingSpinner.jsx
│   ├── PhotoCard.jsx
│   └── SearchBar.jsx
│
├── hooks/
│   └── useFetchPhotos.js
│
├── reducers/
│   └── favouritesReducer.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Suraj1906/photo-gallery-react.git
```

### 2. Navigate to the project

```bash
cd photo-gallery-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

## 💡 State Management

Favourites are managed using React's `useReducer` instead of `useState`, as required by the project specification.

The selected favourite photo IDs are stored in `localStorage`, allowing favourites to remain available after refreshing the page.

## ⚡ Performance

The project uses:

- **`useCallback`** to memoize the search handler.
- **`useMemo`** to calculate the filtered photo list from the already-fetched photos.

This keeps the search/filtering logic efficient while avoiding unnecessary recalculation.

## 📱 Responsive & Interactive UI

Lumina is designed with a clean editorial-inspired interface featuring:

- Responsive layouts
- Smooth card hover animations
- Image zoom interactions
- Interactive favourite buttons
- Animated loading state
- Subtle page-load animations
- Modern typography and spacing

## 📄 License

This project was created as a frontend internship assignment.
