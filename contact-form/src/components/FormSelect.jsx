function FormSelect({ label, name, value, onChange, options, error, valid }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "invalid" : valid && value ? "valid" : ""}
      >
        <option value="">Select Priority</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FormSelect;
