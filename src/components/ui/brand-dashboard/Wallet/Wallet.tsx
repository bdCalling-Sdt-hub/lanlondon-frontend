"use client"

import { useGetBudgetQuery } from "@/redux/features/brand-dashboardApi/budget";
import { Table } from "antd"
import { useState } from "react";
import AddFundsModal from "./AddFundsModal";


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
    render: (amount: number) => ` £ ${amount.toLocaleString()}`,
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

  const { data: allBudget } = useGetBudgetQuery(undefined)
  const [open , setOpen] = useState(false)

  const cardData = [
    {
      title: "Campaign Balance",
      amount: allBudget?.balance,
      icon: "/wallet1.png",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Spent",
      amount: allBudget?.totalTransaction,
      icon: "/wallet2.png",
      bgColor: "bg-red-100",
    },
  ];

  // console.log(allBudget);
  return (
    <div className="p-6 min-h-[calc(100vh-120px)] mx-auto relative">
      <div className="   pb-4">
        <h2 className="text-xl font-semibold">Campaign Budget</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
        {cardData.map((card, index) => (
          <div key={index} className="p-6 bg-[#ffe6f7] rounded-3xl flex items-center justify-center ">
            <div className="flex items-center space-x-4">
              <img src={card?.icon} alt="" className=" w-[48px] h-[48px]" />

              <div className=" flex flex-col gap-1">
                <p className="text-[16px] text-gray-600">{card.title}</p>
                <p className="text-xl font-semibold">{card.amount}</p>
              </div>
            </div>
          </div>
        ))}
        <div className=" bg-[#ffe6f7] flex items-center justify-center rounded-3xl border border-black cursor-pointer ">
          <div className="text-xl font-medium text-center text-gray-600" onClick={() => setOpen(true)}> 
            Add Funds
          </div>
        </div>

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

     <div className=" absolute bottom-0 left-1/2"> 
 <p className=" text-red-800"> For Bank Transfer Please Email Hello@CreatorBriefs.com</p>
      </div> 
      <AddFundsModal open={open} setOpen={setOpen} />
    </div>
  )
}

