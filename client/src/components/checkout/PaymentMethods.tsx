import { useState } from "react";
import CreditCartForm from "./CreditCartForm";
import SinglePaymentMethod from "./SinglePaymentMethod";

export const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState<null | string>(null);
  return (
    <>
      <div className="d-block my-3">
        <SinglePaymentMethod
          method="creditCard"
          setPaymentMethod={setPaymentMethod}
        />
        <SinglePaymentMethod
          method="debitCard"
          setPaymentMethod={setPaymentMethod}
        />
        <SinglePaymentMethod
          method="paypal"
          setPaymentMethod={setPaymentMethod}
        />
      </div>
      {paymentMethod === "creditCard" && <CreditCartForm />}
    </>
  );
};
