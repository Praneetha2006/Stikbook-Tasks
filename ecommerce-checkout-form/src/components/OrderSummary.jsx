function OrderSummary() {
  return (
    <div className="summary">
      <h2>Order Summary</h2>

      <div className="summary-item">
        <p>Product 1</p>
        <p>₹999</p>
      </div>

      <div className="summary-item">
        <p>Product 2</p>
        <p>₹1499</p>
      </div>

      <div className="summary-item total">
        <p>Total</p>
        <p>₹2498</p>
      </div>
    </div>
  );
}

export default OrderSummary;