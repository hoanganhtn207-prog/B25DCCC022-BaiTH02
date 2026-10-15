export default function StatusView({ kind, message, onRetry }) {
  if (kind === 'idle')
    return <div className="card status">👈 Hãy chọn một thành phố để xem thời tiết</div>;
  if (kind === 'loading')
    return <div className="card status" role="status">⏳ Đang tải dữ liệu...</div>;
  return (
    <div className="card status error" role="alert">
      <p>⚠️ {message ?? 'Đã xảy ra lỗi'}</p>
      <button onClick={onRetry}>Thử lại</button>
    </div>
  );
}