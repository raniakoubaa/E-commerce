import React, { useEffect, useRef, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as paypalCheckout from "braintree-web/paypal-checkout";

export default function App() {
  const [payPalInstance, setPayPalInstance] = useState(false);

  const createBillingAgreement = () => {
    return payPalInstance.createPayment({
      flow: "vault"
    });
  };

  const onApprove = (data) => {
    return payPalInstance.tokenizePayment(data).then((payload) => {
      console.log("Payload & nonce", payload);
    });
  };

  useEffect(() => {
    paypalCheckout
      .create({ authorization: "sandbox_w3yd874v_7b4b2w6nhvfxq3w5" })
      .then((instance) => {
        setPayPalInstance(instance);
      });
  }, []);

  return (
    <div className="App">
      <PayPalScriptProvider
        options={{ "client-id": "sb", vault: true, intent: "tokenize" }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          fundingSource="paypal"
          createBillingAgreement={createBillingAgreement}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
}
