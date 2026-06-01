function FormInput({
  label,
  type,
  name,
  value,
  onChange,
  error,
  valid,
  placeholder,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "invalid" : valid && value ? "valid" : ""}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FormInput;
