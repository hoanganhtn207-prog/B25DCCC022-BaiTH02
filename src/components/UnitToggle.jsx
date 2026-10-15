export default function UnitToggle({ unit, onChange }) {
  return (
    <div className="unit-toggle">
      {['C', 'F'].map(u => (
        <button key={u} className={u === unit ? 'active' : ''} onClick={() => onChange(u)}>
          °{u}
        </button>
      ))}
    </div>
  );
}