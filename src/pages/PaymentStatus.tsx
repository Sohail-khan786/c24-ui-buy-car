import Failure from "./Failure";
import Success from "./Success";
import Pending from "./Pending";
import { useEffect, useState, useRef } from "react";
import usePaymentStore from "../store/paymentStore";
import { getRazorPayOrderStatus } from "../services/razorPay-service.js";

const PaymentStatus = () => {
  const [currentStatus, setCurrentStatus] = useState<
    "paid" | "expired" | "created"
  >("created");

  const timerRef = useRef(null);

  const paymentLinkId = usePaymentStore((state) => state.paymentLinkId);

  const endPollingBasedOnStatus = (status: string) => {
    if (status === "paid" || status === "expired") {
      clearInterval(timerRef.current);
    }
  };

  const fetchPayementStatus = async () => {
    const PaymentStatus = await getRazorPayOrderStatus(paymentLinkId);
    const { status } = PaymentStatus;
    setCurrentStatus(status);
    endPollingBasedOnStatus(status);
  };

  const startPollPaymentStatusApi = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      fetchPayementStatus();
    }, 5000);
  };

  useEffect(() => {
    if (paymentLinkId) {
      startPollPaymentStatusApi();
    }
  }, [paymentLinkId]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      {currentStatus === "paid" && <Success />}
      {currentStatus === "expired" && <Failure />}
      {currentStatus === "created" && <Pending />}
    </div>
  );
};

export default PaymentStatus;
