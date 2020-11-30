import React from 'react';

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
      <iframe
        className="mt-30"
        title="Support us"
        src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=My%20name%20and%20my%20email&default-sum=100&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fscratch.radio%2Fsupport%2Fthank-you-page%2F&quickpay=shop&account=4100110355156177"
        width="270"
        height="227"
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
      />
    </section>
  );
}

export default Support;
