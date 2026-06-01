import InputField from "./InputField";

function ShippingAddress({
  data,
  errors,
  handleChange,
}) {
  return (
    <div className="section">
      <h2>Shipping Address</h2>

      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        value={data.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="Enter full name"
      />

      <InputField
        label="Phone"
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="9876543210"
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter email"
      />

      <InputField
        label="Address"
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
        error={errors.address}
        placeholder="Enter address"
      />

      <InputField
        label="City"
        type="text"
        name="city"
        value={data.city}
        onChange={handleChange}
        error={errors.city}
        placeholder="Enter city"
      />

      <InputField
        label="Pincode"
        type="text"
        name="pincode"
        value={data.pincode}
        onChange={handleChange}
        error={errors.pincode}
        placeholder="6 digit pincode"
      />
    </div>
  );
}

export default ShippingAddress;