import React from 'react';

import { PayPal } from '../components';

function Support() {
  return (
    <section className="container container--offset_top container--offset_left container--offset_bottom text-page">
      <h1 className="title">Support</h1>
      <p className="text">
        Making a profit is not the goal of the project. However, its maintenance
        requires costs, including financial ones. All collected funds will be
        used to pay for server capacity and improve product quality. You can
        make a donation using the forms below.
      </p>
      {/* <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=My%20name%20and%20my%20email&default-sum=100&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fscratch.radio%2Fsupport%2Fthank-you-page%2F&quickpay=shop&account=4100110355156177" width="100%" height="227" frameborder="0" allowtransparency="true" scrolling="no"></iframe> */}

      {/* <div id="smart-button-container" className="paypal">
        <div className="paypal__field">
          <label htmlFor="description">Name and email </label>
          <input type="text" name="descriptionInput" id="description" maxLength="127" value="" />
        </div>
        <p id="descriptionError" className="paypal__error">Please enter a description</p>
        <div className="paypal__field">
          <label htmlFor="amount">Sum </label>
          <input name="amountInput" type="number" id="amount" value="" />
          <span> EUR</span>
        </div>
        <p id="priceLabelError" className="paypal__error">Please enter a price</p>
        <div id="invoiceidDiv" className="paypal__field paypal__field--hidden">
          <label htmlFor="invoiceid"> </label>
          <input name="invoiceid" maxLength="127" type="text" id="invoiceid" value="" />
        </div>
        <p id="invoiceidError" className="paypal__error">Please enter an Invoice ID</p>
        <div className="paypal__btn" id="paypal-button-container" />
      </div> */}
      <PayPal />
    </section>
  );
}

export default Support;
