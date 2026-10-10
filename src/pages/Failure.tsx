import { Card, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const Failure = () => {
  return (
    <div className="p-6 bg-gray-50  flex justify-center items-center">
      <Card>
        <div>
          <CloseCircleOutlined style={{ color: "red", fontSize: "26px" }} />
        </div>
        <div
          className="text-lg font-semibold mt-4"
          style={{ fontSize: "24px" }}
        >
          Ooops! Something went wrong
        </div>
        <div className="text-gray-600 mt-2">
          Your payment failed. Please try again.
        </div>
      </Card>
    </div>
  );
};

export default Failure;
