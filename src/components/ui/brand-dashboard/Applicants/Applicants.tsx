/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { imageUrl } from '@/redux/base/baseApi';
import { useGetApplicantsQuery } from '@/redux/features/brand-dashboardApi/applicants';
import { ConfigProvider, Input, Table } from 'antd'
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF,  FaYoutube } from 'react-icons/fa';
import { RiTiktokFill } from 'react-icons/ri';



const Applicants = () => {
    const [search, setSearch] = useState("") 
    const router = useRouter()
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 10;  
    const {data:applicants} = useGetApplicantsQuery({page, search})
    console.log(applicants); 


 
    const handleDetails =(id:string)=>{
        router.push(`/applicants/${id}`)
    }

    const columns = [
        {
            title: " No.",
            dataIndex: "name",
            key: "name", 
            width: 100,
            render: (_:any,record:any, index:number) =><p className='text-center'>{((page - 1) * itemsPerPage) + index + 1}</p>
        },
        {
            title: "Creator",
            dataIndex: "influencer",
            key: "influencer",
            render: (_:any,record:any) => <div className='flex items-center gap-x-2'>
                <img 
                    src={record?.influencer?.profile?.startsWith("http") ? record?.influencer?.profile : `${imageUrl}${record?.influencer?.profile}`}
                    style={{height: 40, width: 40, borderRadius: 8}} 
                    alt=""
                />
                <p> {record?.influencer?.name}</p>
            </div>
        },
        
        {
            title: "Location",
            dataIndex: "influencer",
            key: "influencer", 
            render: (_:any,record:any) => <p>{record?.influencer?.location}</p>
           
        }, 
        {
            title: "View Social",
            dataIndex: "influencer",
            key: "influencer", 
            render: (_:any,record:any) => <div className='flex items-center gap-x-2'>  
             <a href={record?.influencer?.facebook}>  <FaFacebookF size={20} className="text-blue-600" /> </a> 
                <a href={record?.influencer?.instagram}> <AiFillInstagram size={21} className="text-pink-600" /></a>
            <a href={record?.influencer?.tiktok}> <RiTiktokFill size={20} className="text-black" /> </a> 
            <a href={record?.influencer?.youtube}>  <FaYoutube size={22} className="text-red-600" /> </a>

            </div>     
        },
        {
            title: "ACTIONS",
            dataIndex: "actions",
            key: "actions",
            render: (_:any,record:any) => 
                <div className=' flex items-center gap-x-3 '>  
                <button className='text-white bg-black py-1 px-4 ' onClick={()=>handleDetails(record?._id)}> Details</button>
                <button className='text-[#FF3131] bg-[#ffd6d6] py-1 px-4 rounded-md '> Decline</button>
                <button className='text-black bg-[#c1ff72] py-1 px-4 rounded-md '> Accept</button>


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
                    dataSource={applicants} 
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