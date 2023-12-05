import { InvalidFeedback } from "./InvalidFeedback";

export const CheckoutFormAddressFields = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="1234 Main St"
          required
        />
        <InvalidFeedback problemField="shipping address" />
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
          <InvalidFeedback problemField="country" />
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

          <InvalidFeedback problemField="state" />
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
          <InvalidFeedback problemField="Zip code" />
        </div>
      </div>
    </>
  );
};
