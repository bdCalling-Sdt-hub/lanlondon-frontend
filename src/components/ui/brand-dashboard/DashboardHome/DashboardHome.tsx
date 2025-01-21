"use client"
import React from 'react';
import DashboardStats from './DashboardStats';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, Line, Legend } from 'recharts';

const platformData = [
  { name: 'TikTok', value: 15000 },
  { name: 'Instagram', value: 25000 },
  { name: 'Facebook', value: 20000 },
  { name: 'Twitter', value: 30000 },
  { name: 'Youtube', value: 12000 },
  { name: 'Other', value: 18000 },
];

const locationData = [
  { name: 'United States', value: 52.1 },
  { name: 'Canada', value: 22.8 },
  { name: 'Mexico', value: 13.5 },
  { name: 'Other', value: 11.5 },
];

const engagementData = Array.from({ length: 7 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i],
  thisYear: Math.floor(Math.random() * 20000) + 10000,
  lastYear: Math.floor(Math.random() * 20000) + 8000,
})); 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DashboardHome = () => {
    return (
        <div>
           <div className="">
            <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white px-6 pt-4 pb-2 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Traffic by Platform</h2>
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white px-6 pt-4 pb-2 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Traffic by Location</h2>
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {locationData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white px-6 pt-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">User Engagement</h2>
            <div className="h-[270px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="thisYear"
                    stroke="#6366f1"
                    name="This Year"
                  />
                  <Line
                    type="monotone"
                    dataKey="lastYear"
                    stroke="#94a3b8"
                    name="Last Year"
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      
        </div>  
        </div>
    );
};

export default DashboardHome;