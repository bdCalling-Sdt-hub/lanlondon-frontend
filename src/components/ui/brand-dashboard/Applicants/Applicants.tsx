/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ConfigProvider, Input, Table } from 'antd'
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FiEye } from 'react-icons/fi';
import { LuCheck } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';



const data = [
    {
        key: "1",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe",
        location: "New York, USA",
        date: "2025-01-20",
    },
    {
        key: "2",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Jane Smith",
        location: "Los Angeles, USA",
        date: "2025-01-20",
    },
    {
        key: "3",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Michael Johnson",
        location: "Chicago, USA",
        date: "2025-01-20",
    },
    {
        key: "4",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Emily Davis",
        location: "Houston, USA",
        date: "2025-01-20",
    },
    {
        key: "5",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Chris Brown",
        location: "Phoenix, USA",
        date: "2025-01-20",
    },
    {
        key: "6",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Sophia Wilson",
        location: "Philadelphia, USA",
        date: "2025-01-20",
    },
    {
        key: "7",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "David Taylor",
        location: "San Antonio, USA",
        date: "2025-01-20",
    },
    {
        key: "8",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Olivia Martinez",
        location: "San Diego, USA",
        date: "2025-01-20",
    },
];



const Applicants = () => {
    const [search, setSearch] = useState("") 
    const router = useRouter()
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 10; 
    console.log(search);
 
    const handleDetails =(id:string)=>{
        router.push(`/applicants/${id}`)
    }

    const columns = [
        {
            title: "Serial No.",
            dataIndex: "name",
            key: "name",
            render: (_:any,record:any, index:number) =><p>{((page - 1) * itemsPerPage) + index + 1}</p>
        },
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            render: (_:any,record:any) => <div className='flex items-center gap-x-2'>
                <img 
                    src={record?.image}
                    style={{height: 40, width: 40, borderRadius: 8}} 
                    alt=""
                />
                <p> {record?.name}</p>
            </div>
        },
        
        {
            title: "Address",
            dataIndex: "location",
            key: "location",
           
        }, 
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "ACTIONS",
            dataIndex: "actions",
            key: "actions",
            render: (_:any,record:any) => 
                <div className=' flex items-center gap-x-3 '> 
<FiEye size={22} color='#999999' onClick={() => handleDetails(record?.key)} className={"cursor-pointer"}/>  

<RxCross2 size={22} color='red' onClick={() => handleDetails(record?.key)} className={"cursor-pointer"}/>  

<LuCheck size={22} color='green' onClick={() => handleDetails(record?.key)} className={"cursor-pointer"}/> 


                </div> 
            
        },
    ];
    return (
        <>
            <div className='flex items-center justify-between mb-4'> 
            <h1 className="text-xl font-semibold text-black">Applicants</h1>
             
                <Input
                    style={{
                        width: 300, 
                        height: 45,
                        outline: "none",
                        border: "1px solid #d9d9d9",
                        boxShadow: "none"
                    }} 

                    prefix={<Search className=" text-gray-400" size={18} />}
                    placeholder="Search.."
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>

            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            itemActiveBg: "#C1FF72",
                          colorBgTextActive: "black"
                        }
                    },
                    token:{
                        colorPrimary: "black"
                    }
                }}
            >
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                        current: page,
                        onChange: (page)=> setPage(page)
                    }}
                />
            </ConfigProvider>
        </>
    )
}

export default Applicants;