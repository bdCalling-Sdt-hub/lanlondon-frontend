"use client"
import React, { useState } from 'react';
import { ConfigProvider, Pagination } from 'antd';
import { useGetNotificationQuery } from '@/redux/features/brand-dashboardApi/notification';
import moment from 'moment';

const Notifications = () => {
    const [page, setPage] = useState(1)  
    const {data} = useGetNotificationQuery(page) 
    console.log(data);

    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-xl font-semibold text-black">All Notifications</h1>          
            </div>

            <div className='grid grid-cols-1 gap-5 bg-white p-4 rounded-lg'>
                {
                    data?.notifications?.map((value:{text:string, createdAt:string}, index:number) => {
                        return (
                            <div key={index} className=''>
                              
                                <div className='flex items-center justify-between'>
                                    <p>{value?.text}</p>
                                    <p style={{ color: "gray", marginTop: "4px" }}> {moment(value?.createdAt).format("hh:mm A")}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <div className='flex items-center justify-center mt-6'>
                <ConfigProvider
                    theme={{
                        components: {
                            Pagination: {
                                itemActiveBg: "#C1FF72",

                            }
                        },
                        token: {
                            colorPrimary: "black"
                        }
                    }}
                >
                    <Pagination current={page} total={data?.pagination?.total} onChange={(page) => setPage(page)} showQuickJumper={false} showSizeChanger={false} />
                </ConfigProvider>
            </div>
        </div>
    )
}

export default Notifications