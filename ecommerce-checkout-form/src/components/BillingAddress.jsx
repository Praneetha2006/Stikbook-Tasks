import InputField from "./InputField";

function BillingAddress({
  data,
  errors,
  handleChange,
}) {
  return (
    <div className="section">
      <h2>Billing Address</h2>

      <InputField
        label="Billing Address"
        type="text"
        name="billingAddress"
        value={data.billingAddress}
        onChange={handleChange}
        error={errors.billingAddress}
        placeholder="Enter billing address"
      />

      <InputField
        label="Billing City"
        type="text"
        name="billingCity"
        value={data.billingCity}
        onChange={handleChange}
        error={errors.billingCity}
        placeholder="Enter billing city"
      />

      <InputField
        label="Billing Pincode"
        type="text"
        name="billingPincode"
        value={data.billingPincode}
        onChange={handleChange}
        error={errors.billingPincode}
        placeholder="Enter billing pincode"
      />
    </div>
  );
}

export default BillingAddress;