import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import CartDetails from "./CartDetails";
import CreditCartForm from "./CreditCartForm";

interface Props {}

export default function CheckoutForm({}: Props): ReactElement {
  const [paymentMethod, setPaymentMethod] = useState<null | string>(null);
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
        <p className="lead">
          To continue to give your order, please fill in the form below
        </p>
      </div>
      <div className="row">
        <CartDetails />
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
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
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
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
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
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
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  Your username is required.
                </div>
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
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input type="text" className="form-control" id="address2" />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="custom-select d-block w-100 text-black"
                  id="country"
                  required
                >
                  <option defaultValue="">Choose...</option>
                  <option>United States</option> <option>Germany</option>
                  <option>Kosovo</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100 text-black"
                  id="state"
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
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

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                  onChange={() => setPaymentMethod("creditCard")}
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                  onChange={() => setPaymentMethod("debit")}
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                  onChange={() => setPaymentMethod("paypal")}
                />
                <label className="custom-control-label" htmlFor="paypal">
                  Paypal
                </label>
              </div>
            </div>
            {paymentMethod === "creditCard" && <CreditCartForm />}
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
