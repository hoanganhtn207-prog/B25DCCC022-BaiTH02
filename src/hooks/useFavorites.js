import { useEffect, useState } from 'react';

const KEY = 'weather:favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch { /* bỏ qua */ }
  }, [favorites]);

  const toggle = id =>
    setFavorites(f => (f.includes(id) ? f.filter(x => x !== id) : [...f, id]));

  return { favorites, toggle };
}