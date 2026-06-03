function Badge({ text, color = "blue", size = "medium" }) {
  return (
    <span
      style={{
        background: color,
        color: "white",
        padding: size === "small" ? "5px" : "10px",
        borderRadius: "5px",
      }}
    >
      {text}
    </span>
  );
}

export default Badge;