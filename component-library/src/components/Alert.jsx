function Alert({ type, message, onClose }) {
  return (
    <div className={type}>
      <p>{message}</p>

      <button onClick={onClose}>X</button>
    </div>
  );
}

export default Alert;