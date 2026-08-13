import { Table, Button, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import type { TableColumnsType } from "antd";

interface DataType {
  key: string;
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: string;
}

const Listing = () => {
  const data: DataType[] = [
    {
      key: "1",
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2023,
      price: 28000,
      status: "Available",
    },
    {
      key: "2",
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2022,
      price: 24000,
      status: "Available",
    },
    {
      key: "3",
      id: 3,
      brand: "BMW",
      model: "X5",
      year: 2023,
      price: 65000,
      status: "Sold",
    },
    {
      key: "4",
      id: 4,
      brand: "Mercedes",
      model: "C-Class",
      year: 2021,
      price: 42000,
      status: "Available",
    },
    {
      key: "5",
      id: 5,
      brand: "Audi",
      model: "A4",
      year: 2022,
      price: 45000,
      status: "Available",
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toLocaleString()}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Available" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/buy/${record.id}`}>
            <Button type="primary">View Details</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Available Cars
        </h1>
        <p className="text-gray-600">Browse and select your dream car</p>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        className="shadow-lg rounded-lg"
      />
    </div>
  );
};

export default Listing;
