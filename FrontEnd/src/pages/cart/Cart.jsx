import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";

import { loadStripe } from "@stripe/stripe-js";
import { CreateProductsCheckoutSession } from "../../api/api";
import Loader from "../../components/loaders/Loader";
import AuthLoader from "../../components/loaders/AuthLoader";
import toast from "react-hot-toast";
import { removeFromBasket } from "../../store/features/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const [showNote, setShowNote] = useState(false);

  const handleButtonClick = () => {
    // Navigate to the home page ("/")
    navigate("/");
  };

  const toggleNote = () => {
    setShowNote(!showNote);
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageloading, setPageLoading] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [sameAddress, setSameAddress] = useState(false);

  // const storeCart = useSelector((state) => state.basket.items);
  // console.log("SC", storeCart);
  // const auth = useSelector((state) => state.user.user);

  // const totalCartPrice = storeCart.reduce((accumulator, currentItem) => {
  //   return accumulator + currentItem.price;
  // }, 0);
  const storeCart = useSelector((state) => state.basket.items);
  const auth = useSelector((state) => state.user.user);
  console.log("cart :", storeCart);
  const initialCounts = JSON.parse(localStorage.getItem("productCounts")) || {};
  const [productCounts, setProductCounts] = useState(initialCounts);

  useEffect(() => {
    // Save counts to localStorage whenever they change
    localStorage.setItem("productCounts", JSON.stringify(productCounts));
  }, [productCounts]);

  const handleIncrement = (itemId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 1) - 1, 0),
    }));
  };
  const handleRemove = (itemId) => {
    debugger;
    dispatch(removeFromBasket({ id: itemId }));
  };

  const totalCartPrice = storeCart.reduce((accumulator, currentItem) => {
    const count = productCounts[currentItem.id] || 1;
    return accumulator + count * currentItem.price;
  }, 0);

  const createBlobUrl = (data, contentType) => {
    const byteArray = new Uint8Array(data);
    const blob = new Blob([byteArray], { type: contentType });
    return URL.createObjectURL(blob);
  };

  const handleRedirectToLogin = () => {
    navigate("/pages/login");
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const createCheckoutSession = async () => {
    const address = {};

    if (!deliveryAddress.trim()) {
      toast.error("Delivery address is required");
      return; // Billing address is required
    }

    if (!sameAddress && !billingAddress.trim()) {
      toast.error("Billing address is required");
      return; // Delivery address is required if not the same as billing address
    }

    if (sameAddress === true) {
      setBillingAddress(deliveryAddress);
    }
    if (deliveryAddress) {
      address.deliveryAddress = deliveryAddress;
    }
    if (billingAddress) {
      address.billingAddress = billingAddress;
    }
    if (sameAddress) {
      address.billingAddress = deliveryAddress;
    }
    console.log("Address", address);

    setLoading(true);
    const stripe = await stripePromise;

    const formData = new FormData();
    formData.append("products", JSON.stringify(storeCart));
    formData.append("address", JSON.stringify(address));
    // Create the checkout session on the server
    const { data, error } = await CreateProductsCheckoutSession(formData);
    if (data) {
      console.log("Data", data);
      console.log("Session Id", data?.sessionId);
      // Redirect to Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId, // Replace with the actual property returned by your API
      });

      if (result.error) {
        window.alert(result.error.message);
      }
      setLoading(false);
    } else if (error) {
      setLoading(false);
      console.warn("Error creating checkout session:", error);
    }
  };

  useEffect(() => {
    setPageLoading(false);
  }, []);
  if (storeCart == 0) {
    return (
      <>
        <Layout>
          <div className="flex flex-col items-center justify-center h-full mt-20">
            <h1 class="text-6xl text-color-success ">Warenkorb</h1>
            <p className="text-center color-green mb-4 mt-5">
              Dein Warenkorb ist leer
            </p>
            <button
              className="site-button text-white px-4 py-2 mb-20"
              onClick={handleButtonClick}
            >
              Jetzt einkaufen
            </button>
          </div>
        </Layout>
      </>
    );
  }
  return (
    <Layout>
      {pageloading ? (
        <AuthLoader />
      ) : (
        <div className="w-[100%] md:w-[90%] mx-auto shadow-xl rounded-xl p-5 md:p-10">
          <div className="flex">
            <h1 className="mx-auto text-[#5a8560] text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
              Warenkorb
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-8 col-span-12">
              <div className="flex flex-row space-x-reverse ">
                <p className="ml-10">PRODUKT</p>
                <div className="ml-auto flex flex-row  space-x-reverse ">
                  <p className="mr-12">MENGE</p>
                  <p className="mr-11">GESAMT</p>
                </div>
              </div>
              <div className="md:col-span-8 col-span-12">
                {storeCart &&
                  storeCart.map((item) => (
                    <div key={item?.id}>
                      <div className="grid grid-cols-12 gap-4 border-b">
                        <div className="col-span-4 my-2">
                          <img
                            src={createBlobUrl(
                              item?.defaultImg?.data?.data,
                              item?.contentType
                            )}
                            alt=""
                            className="rounded-md h-36 w-36"
                          />
                        </div>
                        <div className="col-span-4 my-auto">
                          <h5 className="font-bold text-gray-600">
                            {item?.name}
                          </h5>
                          <p className="text-gray-600">
                            Dimension {item?.minDimension} -{" "}
                            {item?.maxDimension}
                          </p>
                        </div>
                        <div className="col-span-2 my-auto font-semibold">
                          <div className="border-solid border-2 border-gray flex space-x-5   ">
                            <button
                              className="ml-2"
                              onClick={() => handleDecrement(item.id)}
                            >
                              -
                            </button>
                            <p>{productCounts[item.id] || 1}</p>
                            <button onClick={() => handleIncrement(item.id)}>
                              +
                            </button>
                          </div>
                          <p
                            onClick={() => handleRemove(item.id)}
                            className={`underline cursor-pointer text-gray-500 mt-2 transition-colors duration-300 hover:text-black`}
                          >
                            Entfernen
                          </p>
                        </div>
                        <div className="col-span-2 font-semibold mt-12 ml-5">
                          {item?.price * (productCounts[item.id] || 1)} €
                        </div>
                        <div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="md:col-span-4 col-span-12 ">
              {/* <div>
                <div className="relative z-0 w-full mb-5 group mt-4">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Delivery Addressed
                  </label>
                </div>
                {!sameAddress && (
                  <div className="relative z-0 w-full mb-5 group mt-4">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Billing Address
                    </label>
                  </div>
                )}
                <input
                  type="checkbox"
                  value={sameAddress}
                  onChange={(e) => setSameAddress(!sameAddress)}
                />
                <label htmlFor="" className="ml-4">
                  Billing Address Same as Delivery Address
                </label>
              </div> */}
              <div
                className=" py-2 md:p-5   ml-5  rounded-2xl"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <div className="m-5">
                  <form
                    action="
                "
                  >
                    <div className="flex justify-between mb-5">
                      <span className="text-lg   font-bold">Gesamt</span>
                      <span className="text-lg font-bold">
                        {totalCartPrice} €
                      </span>
                    </div>
                    <p style={{ color: "gray" }}>
                      inkl. MwSt, der Versand wird an der Kasse berechnet
                    </p>
                    <div>
                      <h1
                        onClick={toggleNote}
                        className={`underline cursor-pointer text-gray-500 mt-5 transition-colors duration-300 hover:text-black`}
                      >
                        Notiz hinzufügen
                      </h1>
                      {showNote && (
                        <div className="cart__order-note">
                          <textarea
                            is="cart-note"
                            aria-owns="order-note-toggle"
                            name="note"
                            className="input__field input__field--textarea "
                            rows="3"
                            placeholder="Wie können wir Dir helfen?"
                            aria-label="Bestellnotiz"
                            style={{
                              width: "100%",
                              border: "1px solid #C0C0C0",
                              marginTop: "15px",
                              padding: "15px",
                              backgroundColor: "#F5F5F5",
                            }}
                          ></textarea>
                        </div>
                      )}
                    </div>
                    <div className="mt-5">
                      <button
                        onClick={
                          auth?.authUser
                            ? createCheckoutSession
                            : handleRedirectToLogin
                        }
                        className="site-button w-full py-3 flex mt-3 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-lock mr-10"
                        >
                          <rect
                            width="18"
                            height="11"
                            x="3"
                            y="11"
                            rx="2"
                            ry="2"
                          />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        ZUR KASSE
                        {/* <p className="ml-auto">ZUR KASSE</p> <p className="mx-4">-</p>
                  <p className="mr-auto">{totalCartPrice} €</p> */}
                        {loading && (
                          <div className="ml-2 mt-1 animate-spin rounded-full h-4 w-4 border-t-4 border-white border-solid"></div>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-5">
                <p className=" text-center ">Wir akzeptieren</p>
                <div
                  className="m-5"
                  style={{ display: "flex", marginLeft: "15px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 38 24"
                    width="70"
                    height="40"
                    aria-labelledby="pi-google_pay"
                    style={{ marginLeft: "15px" }}
                  >
                    <title id="pi-google_pay">Google Pay</title>
                    <path
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      fill="#000"
                      opacity=".07"
                    ></path>
                    <path
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      fill="#FFF"
                    ></path>
                    <path
                      d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                      fill="#5F6368"
                    ></path>
                    <path
                      d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 38 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="40"
                    role="img"
                    aria-labelledby="pi-paypal"
                    style={{ marginLeft: "15px" }}
                  >
                    <title id="pi-paypal">PayPal</title>
                    <path
                      opacity=".07"
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    ></path>
                    <path
                      fill="#003087"
                      d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                    ></path>
                    <path
                      fill="#3086C8"
                      d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                    ></path>
                    <path
                      fill="#012169"
                      d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 38 24"
                    width="70"
                    height="40"
                    aria-labelledby="pi-stripe"
                    style={{ marginLeft: "15px" }}
                  >
                    <title id="pi-stripe">Stripe</title>
                    <rect width="100%" height="100%" fill="#6772E5" />
                    <g fill="#FFF">
                      <path d="M0 0h38v4H0zM0 6h38v4H0zM0 12h38v4H0zM0 18h38v4H0z" />
                    </g>
                  </svg>
                  <svg
                    role="img"
                    // viewBox="0 0 24 24"
                    width="70"
                    height="40"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Klarna</title>
                    <path d="M4.592 2v20H0V2h4.592zm11.46 0c0 4.194-1.583 8.105-4.415 11.068l-.278.283L17.702 22h-5.668l-6.893-9.4 1.779-1.332c2.858-2.14 4.535-5.378 4.637-8.924L11.562 2h4.49zM21.5 17a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
