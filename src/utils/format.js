// YC5: dữ liệu luôn là °C, chỉ quy đổi khi hiển thị
export function formatTemp(celsius, unit) {
  const v = unit === 'C' ? celsius : (celsius * 9) / 5 + 32;
  return `${Math.round(v)}°${unit}`;
}

const WEEKDAYS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

export function formatDay(iso) {
  // thêm T00:00:00 để tránh lệch ngày do múi giờ
  const d = new Date(`${iso}T00:00:00`);
  return {
    weekday: WEEKDAYS[d.getDay()],
    date: `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`,
  };
}

export function formatUpdateTime(iso) {
  // "2026-10-15T14:30" -> "14:30 15/10/2026"
  const [date, time] = iso.split('T');
  const [y, m, d] = date.split('-');
  return `${time} ${d}/${m}/${y}`;
}

// Tìm kiếm không phân biệt dấu
export function removeAccents(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}