"use client"             
import { FaChartLine } from "react-icons/fa"
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6"
import { FiBox } from "react-icons/fi"
import { LuTimerReset, LuUsersRound } from "react-icons/lu"

const DashboardStats = () => {
  const data = [
    {
      name: "Views",
      count: "40,689",
      icon: <LuUsersRound className="w-8 h-8 text-blue-500" />,
      change: "+8.5%",
      trend: "up",
      period: "from yesterday",
      iconBg: "bg-blue-50",
    },
    {
      name: "Likes",
      count: "$89,000",
      icon: <FaChartLine className="w-8 h-8 text-green-500" />,
      change: "-4.3%",
      trend: "down",
      period: "from yesterday",
      iconBg: "bg-green-50",
    },
    {
      name: "Comments",
      count: "10293",
      icon: <FiBox className="w-8 h-8 text-yellow-500" />,
      change: "+1.3%",
      trend: "up",
      period: "from past week",
      iconBg: "bg-yellow-50",
    },
    {
      name: "Share",
      count: "2040",
      icon: <LuTimerReset className="w-8 h-8 text-orange-500" />,
      change: "+1.8%",
      trend: "up",
      period: "from yesterday",
      iconBg: "bg-orange-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
       
            <div className="flex items-center  justify-between "> 
                <div> 
                <p className="text-sm font-medium text-gray-500">{item.name}</p> 
                <p className="text-2xl font-semibold text-gray-800 mt-2">{item.count}</p> 
                </div>
              <div className={`${item.iconBg} p-3 rounded-lg`}>{item.icon}</div>
             
            </div>
      
          <div className="mt-4">
           
            <div className="flex items-center gap-1 mt-2">
              <span className={`flex items-center gap-1 text-sm ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {item.trend === "up" ? <FaArrowTrendUp className="w-4 h-4" /> : <FaArrowTrendDown className="w-4 h-4" />} 
                  {item.change}
              </span>
              <span className="text-sm text-gray-500">{item.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats

