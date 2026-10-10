import axios from "axios";

const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
const razorpayKeySecret = import.meta.env.VITE_RAZORPAY_KEY_SECRET;

const getAuthConfigRazorpay = () => {
  return {
    auth: {
      username: razorpayKeyId,
      password: razorpayKeySecret,
    },
  };
};

export const createRazorPayOrder = async (amount, currency) => {
  try {
    const currentUnixTimeStampInSeconds = Math.floor(Date.now() / 1000);
    const linkExpiryMinutes = 20;
    const expire_by = currentUnixTimeStampInSeconds + linkExpiryMinutes * 60;
    console.log("🚀 ~ createRazorPayOrder ~ expire_by:", expire_by);

    const response = await axios.post(
      `https://api.razorpay.com/v1/payment_links/`,
      {
        amount: 1000,
        currency: "INR",
        accept_partial: true,
        first_min_partial_amount: 100,
        reference_id: Date.now().toString(),
        description: "Payment for policy no #23456",

        notify: {
          sms: true,
          email: true,
        },
        reminder_enable: true,
        notes: {
          policy_name: "Life Insurance Policy",
        },
        expire_by: expire_by,
        callback_url: "http://localhost:3000/buy/payment/status",
        callback_method: "get",
      },
      getAuthConfigRazorpay(),
    );
    console.log("Razorpay order created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
  }
};

export const getRazorPayOrderStatus = async (paymentLinkId) => {
  try {
    const response = await axios.get(
      `https://api.razorpay.com/v1/payment_links/${paymentLinkId}`,
      getAuthConfigRazorpay(),
    );
    console.log("Razorpay order status fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Razorpay order status:", error);
  }
};
