import React from 'react';

export default function PayPal() {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [
            {
              description: 'Your description',
              amount: {
                currency_code: 'EUR',
                value: 1,
              },
            },
          ],
        }),
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();

          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  return (
    <div className="paypal">
      <h2 className="title">Total Amount 1 EUR</h2>
      <div ref={paypalRef} />
    </div>
  );
}
