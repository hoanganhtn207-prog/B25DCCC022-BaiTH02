export function describeWeather(code) {
  if (code === 0) return { label: 'Trời quang', icon: '☀️', theme: 'clear' };
  if (code <= 2) return { label: 'Ít mây', icon: '🌤️', theme: 'clear' };
  if (code === 3) return { label: 'Nhiều mây', icon: '☁️', theme: 'cloudy' };
  if (code === 45 || code === 48) return { label: 'Sương mù', icon: '🌫️', theme: 'fog' };
  if (code >= 51 && code <= 57) return { label: 'Mưa phùn', icon: '🌦️', theme: 'rain' };
  if (code >= 61 && code <= 67) return { label: 'Mưa', icon: '🌧️', theme: 'rain' };
  if (code >= 71 && code <= 77) return { label: 'Tuyết', icon: '❄️', theme: 'snow' };
  if (code >= 80 && code <= 82) return { label: 'Mưa rào', icon: '🌦️', theme: 'rain' };
  if (code >= 85 && code <= 86) return { label: 'Tuyết rơi', icon: '🌨️', theme: 'snow' };
  if (code === 95) return { label: 'Dông', icon: '⛈️', theme: 'storm' };
  if (code === 96 || code === 99) return { label: 'Dông kèm mưa đá', icon: '⛈️', theme: 'storm' };
  return { label: 'Không xác định', icon: '❓', theme: 'cloudy' };
}