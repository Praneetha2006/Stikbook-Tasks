function Input({ label, placeholder, type = "text", error, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;