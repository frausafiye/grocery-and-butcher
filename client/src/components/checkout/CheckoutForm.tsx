import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import CartDetails from "../cartReview/CartReviewTable";
import { InvalidFeedback } from "./InvalidFeedback";
import { PaymentMethods } from "./PaymentMethods";
import { CheckoutFormAddressFields } from "./CheckoutFormAddressFields";

interface Props {}

export default function CheckoutForm({}: Props): ReactElement {
  const [willSave, setWillSave] = useState<boolean>(false);

  function handleSave(e: ChangeEvent) {
    if ((e.target as HTMLInputElement).checked) {
      setWillSave(true);
    }
  }
  function handleSubmit(e: FormEvent) {
    const isValidated = handleValidate(e);
    if (isValidated) {
      //do what you want to do onsubmit!
    }
  }
  //bootstrap validation on submit
  //for disabling form submissions if there are invalid fields
  function handleValidate(e: FormEvent): boolean {
    e.preventDefault();
    console.log(e.target);
    if (!(e.target as HTMLFormElement).checkValidity()) {
      e.stopPropagation();
      return false;
    }
    (e.target as HTMLFormElement).classList.add("was-validated");
    return true;
  }

  return (
    <div className="form-container">
      <div className="py-5 text-center">
        <CartDetails />
        <p className="lead">Fill out the form below to complete your order</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3 text-white">Billing address</h4>
          <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  defaultValue=""
                  required
                />
                <InvalidFeedback problemField="first name" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  defaultValue=""
                  required
                />
                <InvalidFeedback problemField="last name" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <InvalidFeedback problemField="user name" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <InvalidFeedback problemField="email address from shipping updates." />
            </div>
            <CheckoutFormAddressFields />
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
                onChange={handleSave}
              />
              <label className="custom-control-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3 text-white">Payment</h4>
            <PaymentMethods />

            <hr className="mb-4" />
            <div className="text-center">
              <button
                className="btn btn-primary btn-lg d-inline m-auto"
                type="submit"
              >
                Continue to checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
