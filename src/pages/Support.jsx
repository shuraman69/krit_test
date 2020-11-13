import React from 'react';

function Support() {
  return (
    <section className="container container--offset_top container--offset_left container--offset_bottom text-page">
      <h1 className="title">Support</h1>
      <p className="text">Making a profit is not the goal of the project. However, its maintenance requires costs, including financial ones. All collected funds will be used to pay for server capacity and improve product quality. You can make a donation using the forms below.
      </p>
      <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=My%20name%20and%20my%20email&default-sum=100&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fscratch.radio%2Fsupport%2Fthank-you-page%2F&quickpay=shop&account=4100110355156177" width="100%" height="227" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
          
        {/*<div id="smart-button-container">
            <div style="text-align: center">
                <label for="description">Name and email </label>
                <input type="text" name="descriptionInput" id="description" maxlength="127" value="" />
            </div>
            <p id="descriptionError" style="visibility: hidden; color:red; text-align: center;">Please enter a description</p>
            <div style="text-align: center">
                <label for="amount">Sum </label>
                <input name="amountInput" type="number" id="amount" value="" /><span> EUR</span>
            </div>
            <p id="priceLabelError" style="visibility: hidden; color:red; text-align: center;">Please enter a price</p>
            <div id="invoiceidDiv" style="text-align: center; display: none;">
                <label for="invoiceid"> </label>
                <input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="" />
            </div>
            <p id="invoiceidError" style="visibility: hidden; color:red; text-align: center;">Please enter an Invoice ID</p>
            <div style="text-align: center; margin-top: 0.625rem;" id="paypal-button-container"></div>
        </div>
  
  <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=EUR" data-sdk-integration-source="button-factory"></script>
  <script>
  function initPayPalButton() {
    var description = document.querySelector('#smart-button-container #description');
    var amount = document.querySelector('#smart-button-container #amount');
    var descriptionError = document.querySelector('#smart-button-container #descriptionError');
    var priceError = document.querySelector('#smart-button-container #priceLabelError');
    var invoiceid = document.querySelector('#smart-button-container #invoiceid');
    var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
    var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

    var elArr = [description, amount];

    if (invoiceidDiv.firstChild.innerHTML.length > 1) {
      invoiceidDiv.style.display = "block";
    }

    var purchase_units = [];
    purchase_units[0] = {};
    purchase_units[0].amount = {};

    function validate(event) {
      return event.value.length > 0;
    }

    paypal.Buttons({
      style: {
        color: 'white',
        shape: 'rect',
        label: 'paypal',
        layout: 'vertical',
        
      },

      onInit: function (data, actions) {
        actions.disable();

        if(invoiceidDiv.style.display === "block") {
          elArr.push(invoiceid);
        }

        elArr.forEach(function (item) {
          item.addEventListener('keyup', function (event) {
            var result = elArr.every(validate);
            if (result) {
              actions.enable();
            } else {
              actions.disable();
            }
          });
        });
      },

      onClick: function () {
        if (description.value.length < 1) {
          descriptionError.style.visibility = "visible";
        } else {
          descriptionError.style.visibility = "hidden";
        }

        if (amount.value.length < 1) {
          priceError.style.visibility = "visible";
        } else {
          priceError.style.visibility = "hidden";
        }

        if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
          invoiceidError.style.visibility = "visible";
        } else {
          invoiceidError.style.visibility = "hidden";
        }

        purchase_units[0].description = description.value;
        purchase_units[0].amount.value = amount.value;

        if(invoiceid.value !== '') {
          purchase_units[0].invoice_id = invoiceid.value;
        }
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: purchase_units,
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },

      onError: function (err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();
  </script>*/}
    </section>
  );
}

export default Support;
