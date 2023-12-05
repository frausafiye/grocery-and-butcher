type PaymentMethodProps = {
  method: MethodType;
  setPaymentMethod: React.Dispatch<React.SetStateAction<null | string>>;
};
type MethodType = "creditCard" | "debitCard" | "paypal";

export default function PaymentMethods({
  method,
  setPaymentMethod,
}: PaymentMethodProps) {
  const labelText =
    method === "creditCard"
      ? "Credit Card"
      : "debitCard"
      ? "Debit Card"
      : "paypal"
      ? "Paypal"
      : "";
  return (
    <div className="custom-control custom-radio">
      <input
        id={method}
        name="paymentMethod"
        type="radio"
        className="custom-control-input"
        required
        onChange={() => setPaymentMethod(method)}
      />
      <label className="custom-control-label" htmlFor={method}>
        {labelText}
      </label>
    </div>
  );
}
