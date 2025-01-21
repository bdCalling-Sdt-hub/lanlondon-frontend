"use client"

import { Card, Table } from "antd"

const cardData = [
    {
      title: "Total Balance",
      amount: "$50,000",
      icon: "/wallet1.png",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Spent",
      amount: "$23,000",
      icon: "/wallet2.png",
      bgColor: "bg-red-100",
    },
    {
      title: "Total Recharge",
      amount: "$200",
      icon: "/wallet3.png",
      bgColor: "bg-blue-100",
    },
  ];

const columns = [
  {
    title: "Transaction ID",
    dataIndex: "transactionId",
    key: "transactionId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  }, 
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => `$${amount.toLocaleString()}`,
  },


]

const data = [
    {
      key: "1",
      transactionId: "Transaction ID #2343",
      name: "Meera Bhai",
      email: "meera.bhai@example.com",
      date: "25 Dec 2019",
      amount: 451212,
    },
    {
      key: "2",
      transactionId: "Transaction ID #2343",
      name: "Meera Bhai",
      email: "meera.bhai@example.com",
      date: "25 Dec 2019",
      amount: 85,
    },
    {
      key: "3",
      transactionId: "Transaction ID #2343",
      name: "Meera Bhai",
      email: "meera.bhai@example.com",
      date: "25 Dec 2019",
      amount: 7400,
    },
  ];

export default function Wallet() {
  return (
    <div className="p-6  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {cardData.map((card, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center space-x-4"> 
            <img src={card?.icon} alt=""  className=" w-[48px] h-[48px]" />
           
            <div className=" flex flex-col gap-1">
              <p className="text-[16px] text-gray-600">{card.title}</p>
              <p className="text-xl font-semibold">{card.amount}</p>
            </div>
          </div>
        </Card>
      ))} 
       <Card  className="">
          <div className="flex items-center justify-center text-xl font-medium text-center text-gray-600">
         Recharge
          </div>
        </Card>
      </div>

      <div className="">
        <div className="   pb-4">
          <h2 className="text-xl font-semibold">Transaction History</h2>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="[&_.ant-table-thead_.ant-table-cell]:bg-gray-50 [&_.ant-table-thead_.ant-table-cell]:font-semibold"
        />
      </div>
    </div>
  )
}

