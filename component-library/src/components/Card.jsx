function Card({ title, children, footer }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div>{children}</div>

      {footer && <div>{footer}</div>}
    </div>
  );
}

export default Card;