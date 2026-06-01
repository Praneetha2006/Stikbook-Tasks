function FormTextarea({ label, name, value, onChange, error, valid }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        className={error ? "invalid" : valid && value ? "valid" : ""}
      />

      <small>{value.length}/500</small>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FormTextarea;
