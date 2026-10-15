import { describeWeather } from '../utils/weatherCode';
import { formatDay, formatTemp } from '../utils/format';

export default function Forecast({ daily, unit }) {
  return (
    <section className="card">
      <h3>Dự báo 7 ngày</h3>
      <ul className="forecast">
        {daily.time.map((t, i) => {
          const { weekday, date } = formatDay(t);
          const info = describeWeather(daily.weather_code[i]);
          return (
            <li key={t} className="forecast-item">
              <div className="fc-day">
                <strong>{weekday}</strong>
                <small>{date}</small>
              </div>
              <span className="fc-icon" title={info.label}>{info.icon}</span>
              <div className="fc-temp">
                <span className="max">{formatTemp(daily.temperature_2m_max[i], unit)}</span>
                <span className="min">{formatTemp(daily.temperature_2m_min[i], unit)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}