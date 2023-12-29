export const CartReviewHead = () => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed text-center">
      <div className="col-sm text-start">
        <h6 className="my-0 ">ITEM</h6>
      </div>
      <span className="col-sm">CONTENT</span>
      <span className="col-sm">QUANTITY</span>
      <span className="col-sm text-muted text-end">TOTAL</span>
    </li>
  );
};
