import { Routes, Route, Navigate } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import Payment from "./pages/Payement";
import PaymentStatus from "./pages/PaymentStatus";

const BuyCarApp = () => {
  return (
    <Routes>
      <Route index element={<Listing />} />
      <Route path=":id" element={<Detail />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/status" element={<PaymentStatus />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
};

export default BuyCarApp;
