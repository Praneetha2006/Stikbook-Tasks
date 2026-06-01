import { useState } from "react";

import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

import "./styles/Checkout.css";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",

    sameAddress: true,

    billingAddress: "",
    billingCity: "",
    billingPincode: "",

    payment: "",

    cardNumber: "",
    cvv: "",
    expiry: "",

    upi: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (value.length < 3) {
          error = "Minimum 3 characters required";
        }
        break;

      case "phone":
        if (!/^[0-9]{10}$/.test(value)) {
          error = "Phone must be 10 digits";
        }
        break;

      case "email":
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            value
          )
        ) {
          error = "Invalid email";
        }
        break;

      case "pincode":
      case "billingPincode":
        if (!/^[0-9]{6}$/.test(value)) {
          error = "Pincode must be 6 digits";
        }
        break;

      case "cardNumber":
        if (!/^[0-9]{16}$/.test(value)) {
          error = "Card number must be 16 digits";
        }
        break;

      case "cvv":
        if (!/^[0-9]{3}$/.test(value)) {
          error = "CVV must be 3 digits";
        }
        break;

      case "upi":
        if (
          !/^[a-zA-Z0-9._-]+@[a-zA-Z]+$/.test(value)
        ) {
          error = "Invalid UPI ID";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    const fieldValue =
      type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    setErrors({
      ...errors,
      [name]: validate(name, fieldValue),
    });
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.phone &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.pincode &&
      formData.payment &&
      Object.values(errors).every(
        (error) => error === ""
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Order Placed Successfully!");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
      sameAddress: true,
      billingAddress: "",
      billingCity: "",
      billingPincode: "",
      payment: "",
      cardNumber: "",
      cvv: "",
      expiry: "",
      upi: "",
    });

    setErrors({});
  };

  return (
    <div className="checkout-container">
      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <div className="left">
          <ShippingAddress
            data={formData}
            errors={errors}
            handleChange={handleChange}
          />

          <div className="checkbox">
            <input
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleChange}
            />

            <label>Same as Shipping Address</label>
          </div>

          {!formData.sameAddress && (
            <BillingAddress
              data={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}

          <PaymentMethod
            data={formData}
            errors={errors}
            handleChange={handleChange}
          />

          <button
            type="submit"
            disabled={!isFormValid()}
          >
            Place Order
          </button>
        </div>

        <div className="right">
          <OrderSummary />
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;