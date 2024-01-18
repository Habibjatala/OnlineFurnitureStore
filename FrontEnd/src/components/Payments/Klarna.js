// import GooglePayButton from "@google-pay/button-react";
// import React, { useEffect } from "react";

// const Klarna = () => {
//   window.klarnaExpressButtonAsyncCallback = function () {
//     console.log("Button is clicked");
//     Klarna.ExpressButton.on("user-authenticated", function (callbackData) {
//       console.log("the Button function is called ");
//       // ... implement pre-fill logic here
//       // callbackData (see schema below) can be used to map user properties
//       // to already existing fields/forms in your checkout flow
//     });
//   };
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://x.klarnacdn.net/express-button/v1/lib.js";
//     script.async = true;
//     script.setAttribute("data-id", "PK164329_328dabc8e5bf");
//     script.setAttribute("data-environment", "playground"); // Change to 'playground' for testing

//     document.head.appendChild(script);

//     return () => {
//       // Clean up script on component unmount
//       document.head.removeChild(script);
//     };

//   }, []);
//   return (
//     <>
//       <p>hi</p>
//       <klarna-express-button
//         data-locale="en-DE"
//         data-theme="default"
//         data-shape="default"
//         data-label="klarna"
//       />
//     </>
//   );
// };

// export default Klarna;
// Klarna.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Klarna = () => {
  const [klarnaOrder, setKlarnaOrder] = useState(null);

  // const handleKlarnaIntegration = async () => {
  //   try {
  //     // Replace with your actual order details
  //     const orderData = {
  //       purchase_country: "DE",
  //       purchase_currency: "EUR",
  //       locale: "en-DE",
  //       order_amount: 50000,
  //       order_tax_amount: 4545,
  //       order_lines: [
  //         {
  //           type: "physical",
  //           reference: "19-402-EUR",
  //           name: "Red T-Shirt",
  //           quantity: 5,
  //           quantity_unit: "pcs",
  //           unit_price: 10000,
  //           tax_rate: 1000,
  //           total_amount: 50000,
  //           total_discount_amount: 0,
  //           total_tax_amount: 4545,
  //         },
  //       ],
  //       merchant_urls: {
  //         terms: "https://www.example.com/terms.html",
  //         checkout:
  //           "https://www.example.com/checkout.html?order_id={checkout.order.id}",
  //         confirmation:
  //           "https://www.example.com/confirmation.html?order_id={checkout.order.id}",
  //         push: "https://www.example.com/api/push?order_id={checkout.order.id}",
  //       },
  //     };

  //     const createOrderResponse = await axios.post(
  //       "http://localhost:8081/api/v1/payment/create-order",
  //       orderData
  //     );
  //     const orderId = createOrderResponse.data.order_id;

  //     // Get Klarna Checkout Snippet (Client Side) via Ajax call
  //     const getSnippetResponse = await axios.get(
  //       `http://localhost:8081/api/v1/payment/get-checkout-snippet/${orderId}`
  //     );
  //     const htmlSnippet = getSnippetResponse.data;

  //     // Dynamically inject the HTML snippet into the page
  //     var checkoutContainer = document.getElementById(
  //       "klarna-checkout-container"
  //     );
  //     checkoutContainer.innerHTML = htmlSnippet;

  //     // Parse and evaluate script tags
  //     var scriptsTags = checkoutContainer.getElementsByTagName("script");
  //     for (var i = 0; i < scriptsTags.length; i++) {
  //       var parentNode = scriptsTags[i].parentNode;
  //       var newScriptTag = document.createElement("script");
  //       newScriptTag.type = "text/javascript";
  //       newScriptTag.text = scriptsTags[i].text;
  //       parentNode.removeChild(scriptsTags[i]);
  //       parentNode.appendChild(newScriptTag);
  //     }

  //     // Read Klarna Order
  //     const readOrderResponse = await axios.get(
  //       `http://localhost:8081/api/v1/payment/read-order/${orderId}`
  //     );
  //     setKlarnaOrder(readOrderResponse.data);

  //     // Render Klarna Confirmation Snippet (Client Side)
  //     const confirmationSnippetResponse = await axios.get(
  //       `http://localhost:8081/api/v1/payment/confirmation-page/${orderId}`
  //     );
  //     document.getElementById("klarna-confirmation-container").innerHTML =
  //       confirmationSnippetResponse.data;
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };
  useEffect(() => {
    // This will trigger the Klarna SDK initialization once the component is mounted
    window.klarnaAsyncCallback();
  }, []);
  Klarna.Payments.load(
    {
      container: "#klarna-payments-container",
    },
    {},
    function (res) {
      console.debug(res);
    }
  );
  return (
    <div>
      {/* Other content in your component */}
      <div id="klarna-payments-container">JI</div>
    </div>
    // <div>

    //   {/* Display Klarna order details */}
    //   {klarnaOrder && (
    //     <div>
    //       <p>Order ID: {klarnaOrder.order_id}</p>
    //       {/* Add other relevant details from the response */}
    //     </div>
    //   )}

    //   {/* Button to initiate Klarna integration */}
    //   <button onClick={handleKlarnaIntegration}>
    //     Initiate Klarna Integration
    //   </button>

    //   {/* Container for Klarna Checkout snippet */}
    //   <div id="klarna-checkout-container"></div>

    //   {/* Container for Klarna Confirmation snippet */}
    //   <div id="klarna-confirmation-container"></div>
    // </div>
  );
};

export default Klarna;
