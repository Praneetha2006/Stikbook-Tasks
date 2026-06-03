function Button({ variant = "primary", size = "medium", disabled, onClick, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variant} ${size}`}
    >
      {children}
    </button>
  );
}

export default Button;