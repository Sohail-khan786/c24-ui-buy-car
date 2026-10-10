import { Card } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Pending = () => {
  return (
    <div className="p-6 bg-gray-50  flex justify-center items-center">
      <Card>
        <div>
          <LoadingOutlined style={{ color: "#FF7B00", fontSize: "26px" }} />
        </div>
        <div
          className="text-lg font-semibold mt-4"
          style={{ fontSize: "24px" }}
        >
          Transaction is processing!
        </div>
        <div className="text-gray-600 mt-2">
          Your payment is being processed. Please wait.
        </div>
      </Card>
    </div>
  );
};

export default Pending;
