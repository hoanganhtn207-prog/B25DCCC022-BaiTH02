import { describeWeather } from '../utils/weatherCode';
import { formatTemp, formatUpdateTime } from '../utils/format';

export default function CurrentWeather({ cityName, current, unit }) {
  const info = describeWeather(current.weather_code);
  return (
    <section className="card current">
      <h2>{cityName}</h2>
      <div className="current-main">
        <span className="icon-lg">{info.icon}</span>
        <div>
          <div className="temp-lg">{formatTemp(current.temperature_2m, unit)}</div>
          <div>{info.label}</div>
        </div>
      </div>
      <ul className="metrics">
        <li>💧 Độ ẩm: {current.relative_humidity_2m}%</li>
        <li>💨 Gió: {current.wind_speed_10m} km/h</li>
        <li>🕐 Cập nhật: {formatUpdateTime(current.time)}</li>
      </ul>
    </section>
  );
}