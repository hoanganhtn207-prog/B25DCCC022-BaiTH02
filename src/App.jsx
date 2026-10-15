import { useMemo, useState } from 'react';
import './App.css';
import { CITIES } from './data/cities';
import { useWeather } from './hooks/useWeather';
import { useFavorites } from './hooks/useFavorites';
import { describeWeather } from './utils/weatherCode';
import { removeAccents } from './utils/format';
import CityList from './components/CityList';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import StatusView from './components/StatusView';
import UnitToggle from './components/UnitToggle';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [unit, setUnit] = useState('C');
  const [query, setQuery] = useState('');
  const { favorites, toggle } = useFavorites();
  const { state, retry } = useWeather(selected);

  const filtered = useMemo(() => {
    const q = removeAccents(query.trim());
    const list = CITIES.filter(c => removeAccents(c.name).includes(q));
    // thành phố yêu thích lên đầu
    return [...list].sort(
      (a, b) => Number(favorites.includes(b.id)) - Number(favorites.includes(a.id))
    );
  }, [query, favorites]);

  const theme =
    state.status === 'success'
      ? describeWeather(state.data.current.weather_code).theme
      : 'default';

  return (
    <div className={`app theme-${theme}`}>
      <header className="header">
        <h1>🌤️ Thời tiết Việt Nam</h1>
        <UnitToggle unit={unit} onChange={setUnit} />
      </header>

      <main className="layout">
        <aside className="sidebar">
          <input
            className="search"
            placeholder="Tìm thành phố (vd: da nang)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <CityList
            cities={filtered}
            selectedId={selected?.id ?? null}
            onSelect={setSelected}
            favorites={favorites}
            onToggleFavorite={toggle}
          />
          {filtered.length === 0 && <p>Không tìm thấy thành phố.</p>}
        </aside>

        <section className="content">
          {state.status === 'idle' && <StatusView kind="idle" />}
          {state.status === 'loading' && <StatusView kind="loading" />}
          {state.status === 'error' && (
            <StatusView kind="error" message={state.message} onRetry={retry} />
          )}
          {state.status === 'success' && selected && (
            <>
              <CurrentWeather cityName={selected.name} current={state.data.current} unit={unit} />
              <Forecast daily={state.data.daily} unit={unit} />
            </>
          )}
        </section>
      </main>
    </div>
  );
}