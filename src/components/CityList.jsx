export default function CityList({ cities, selectedId, onSelect, favorites, onToggleFavorite }) {
  return (
    <ul className="city-list">
      {cities.map(c => (
        <li key={c.id}>
          <button
            className={`city-item ${c.id === selectedId ? 'active' : ''}`}
            onClick={() => onSelect(c)}
            aria-pressed={c.id === selectedId}
          >
            {c.name}
          </button>
          <button
            className="fav-btn"
            onClick={() => onToggleFavorite(c.id)}
            aria-label={`Yêu thích ${c.name}`}
          >
            {favorites.includes(c.id) ? '★' : '☆'}
          </button>
        </li>
      ))}
    </ul>
  );
}