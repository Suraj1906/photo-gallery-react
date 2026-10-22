import { useEffect, useState } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        if (!cancelled) {
          setPhotos(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    photos,
    loading,
    error,
  };
}