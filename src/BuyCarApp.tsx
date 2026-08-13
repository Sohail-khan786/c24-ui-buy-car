import { Routes, Route, Navigate } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";

const BuyCarApp = () => {
  return (
    <Routes>
      <Route index element={<Listing />} />
      <Route path=":id" element={<Detail />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
};

export default BuyCarApp;
