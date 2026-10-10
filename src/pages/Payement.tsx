import { Card, Button } from "antd";
import { createRazorPayOrder } from "../services/razorPay-service.js";
import usePaymentStore from "../store/paymentStore";

const Payment = () => {
  // Implementation Diagram [ owner : saniyamansuri2805@gmail.com ] : https://app.diagrams.net/#G1cry_x4KRPh4vRYfu67N99hOJhlYcYf7n#%7B%22pageId%22%3A%22fe5UAn29KyGcuIzdaK1w%22%7D

  const { setPaymentLinkId, paymentLinkId } = usePaymentStore();
  console.log("🚀 ~ Payment ~ paymentLinkId:", paymentLinkId);
  const onPaymentButtonClick = async () => {
    console.log("Payment button clicked");
    const response = await createRazorPayOrder(1000, "INR");
    console.log("Razorpay order created:", response);
    const { short_url, id: paymentLinkId } = response;
    setPaymentLinkId(paymentLinkId);
    window.open(short_url, "_blank");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <Card>
        <Button
          onClick={() => {
            onPaymentButtonClick();
          }}
        >
          Pay this amount
        </Button>
      </Card>
    </div>
  );
};

export default Payment;
