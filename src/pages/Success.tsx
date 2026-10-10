import { Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const Success = () => {
  return (
    <div className="p-6 bg-gray-50  flex justify-center items-center">
      <Card>
        <div>
          <CheckCircleOutlined style={{ color: "#008000", fontSize: "26px" }} />
        </div>
        <div
          className="text-lg font-semibold mt-4"
          style={{ fontSize: "24px" }}
        >
          Payment Successful!
        </div>
        <div className="text-gray-600 mt-2">
          Your payment has been processed successfully. Thank you for your
          purchase!
        </div>
      </Card>
    </div>
  );
};

export default Success;
