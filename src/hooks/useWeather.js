import { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherApi';

// state.status: 'idle' | 'loading' | 'error' | 'success'
export function useWeather(city) {
  const [state, setState] = useState({ status: 'idle' });
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (!city) {
      setState({ status: 'idle' });
      return;
    }

    const ctrl = new AbortController();
    setState({ status: 'loading' });

    fetchWeather(city, ctrl.signal)
      .then(data => setState({ status: 'success', data }))
      .catch(err => {
        if (err.name === 'AbortError') return;
        setState({ status: 'error', message: err.message || 'Không tải được dữ liệu' });
      });

    return () => ctrl.abort();
  }, [city, retryKey]);

  return { state, retry: () => setRetryKey(k => k + 1) };
}