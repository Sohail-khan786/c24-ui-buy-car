import { Card, Button, Descriptions, Space, Tag, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";

interface CarDetails {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: string;
  description: string;
  mileage: number;
  transmission: string;
  fuelType: string;
  color: string;
  imageUrl?: string;
}

const carsData: Record<string, CarDetails> = {
  "1": {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28000,
    status: "Available",
    description: "Reliable and efficient sedan with excellent fuel economy",
    mileage: 15000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    color: "Silver",
  },
  "2": {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    price: 24000,
    status: "Available",
    description: "Sporty and stylish compact car with great performance",
    mileage: 22000,
    transmission: "Manual",
    fuelType: "Gasoline",
    color: "Blue",
  },
  "3": {
    id: 3,
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 65000,
    status: "Sold",
    description: "Luxury SUV with premium features and top-notch performance",
    mileage: 8000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Black",
  },
  "4": {
    id: 4,
    brand: "Mercedes",
    model: "C-Class",
    year: 2021,
    price: 42000,
    status: "Available",
    description: "Premium executive sedan with cutting-edge technology",
    mileage: 32000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    color: "White",
  },
  "5": {
    id: 5,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: 45000,
    status: "Available",
    description: "Elegant and powerful luxury sedan",
    mileage: 25000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    color: "Gray",
  },
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const car = id ? carsData[id] : null;
  const isLoading = !car;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" tip="Loading car details..." />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Car Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The car you're looking for doesn't exist.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/buy")}
            >
              Back to Listing
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        size="large"
        onClick={() => navigate("/buy")}
        className="mb-6"
      >
        Back to Listing
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Image Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-6xl text-gray-300 mb-4">🚗</div>
              <p className="text-gray-600">
                {car.brand} {car.model} Image Placeholder
              </p>
            </div>
          </Card>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg mb-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {car.year} {car.brand} {car.model}
              </h1>
              <Tag
                color={car.status === "Available" ? "green" : "red"}
                className="mt-2"
              >
                {car.status}
              </Tag>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold text-blue-600">
                ${car.price.toLocaleString()}
              </p>
            </div>

            <Space direction="vertical" style={{ width: "100%" }} size="middle">
              <Button type="primary" size="large" block>
                Contact Dealer
              </Button>
              <Button size="large" block>
                Schedule Test Drive
              </Button>
              <Button size="large" block>
                Add to Wishlist
              </Button>
            </Space>
          </Card>
        </div>
      </div>

      {/* Details Section */}
      <Card className="mt-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Car Details</h2>
        <Descriptions
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label="Brand">{car.brand}</Descriptions.Item>
          <Descriptions.Item label="Model">{car.model}</Descriptions.Item>
          <Descriptions.Item label="Year">{car.year}</Descriptions.Item>
          <Descriptions.Item label="Color">{car.color}</Descriptions.Item>
          <Descriptions.Item label="Mileage">
            {car.mileage.toLocaleString()} miles
          </Descriptions.Item>
          <Descriptions.Item label="Transmission">
            {car.transmission}
          </Descriptions.Item>
          <Descriptions.Item label="Fuel Type">
            {car.fuelType}
          </Descriptions.Item>
          <Descriptions.Item label="Price">
            ${car.price.toLocaleString()}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Description Section */}
      <Card className="mt-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{car.description}</p>
      </Card>
    </div>
  );
};

export default Detail;
