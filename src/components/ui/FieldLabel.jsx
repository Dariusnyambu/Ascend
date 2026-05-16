export default function FieldLabel({ children, required = false }) {
  return (
    <label className="field-label">
      {children}{required && <span style={{ color: '#DC2626', marginLeft: 2 }}>*</span>}
    </label>
  )
}
