import InputField from "./InputField";

function PaymentMethod({
  data,
  errors,
  handleChange,
}) {
  return (
    <div className="section">
      <h2>Payment Method</h2>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            checked={data.payment === "Credit Card"}
            onChange={handleChange}
          />
          Credit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Debit Card"
            checked={data.payment === "Debit Card"}
            onChange={handleChange}
          />
          Debit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={data.payment === "UPI"}
            onChange={handleChange}
          />
          UPI
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Wallet"
            checked={data.payment === "Wallet"}
            onChange={handleChange}
          />
          Wallet
        </label>
      </div>

      {(data.payment === "Credit Card" ||
        data.payment === "Debit Card") && (
        <>
          <InputField
            label="Card Number"
            type="text"
            name="cardNumber"
            value={data.cardNumber}
            onChange={handleChange}
            error={errors.cardNumber}
            placeholder="16 digit card number"
          />

          <InputField
            label="CVV"
            type="password"
            name="cvv"
            value={data.cvv}
            onChange={handleChange}
            error={errors.cvv}
            placeholder="3 digit CVV"
          />

          <InputField
            label="Expiry"
            type="text"
            name="expiry"
            value={data.expiry}
            onChange={handleChange}
            error={errors.expiry}
            placeholder="MM/YY"
          />
        </>
      )}

      {data.payment === "UPI" && (
        <InputField
          label="UPI ID"
          type="text"
          name="upi"
          value={data.upi}
          onChange={handleChange}
          error={errors.upi}
          placeholder="example@upi"
        />
      )}
    </div>
  );
}

export default PaymentMethod;