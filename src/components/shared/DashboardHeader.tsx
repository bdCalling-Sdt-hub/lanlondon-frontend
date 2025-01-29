"use client"
import React, { useEffect, useState } from 'react'

import { FaRegBell } from 'react-icons/fa6';
import { Badge } from 'antd';
import Link from 'next/link';
import { useBrandProfileQuery } from '@/redux/features/auth/authApi';
import { io } from 'socket.io-client';
import { imageUrl, socketURL } from '@/redux/base/baseApi';


const DashboardHeader = () => { 
    const [notificationCount, setNotificationCount] = useState(0); 
    const {data:profile} = useBrandProfileQuery(undefined)  
    

    useEffect(() => {
  
        const socket = io(socketURL, {
          query: { token: localStorage.getItem("creatorToken") }, 
        });
    
    
        socket.on('get-notification::677cc986a7e6ba1aff44bd42', () => {
         
          setNotificationCount((prevCount) => prevCount + 1);
        });
    
       
        return () => {
          socket.disconnect();
        };
      }, []);  


    return (
        <div className='flex items-center gap-5 justify-end'>
            <Link href="/notification" className='h-fit mt-[10px]'>
                <Badge count={notificationCount} >
                    <FaRegBell color="#7a777a" size={24}/>
                </Badge>
            </Link>

            <Link href="/profile" className='flex  items-center gap-3'>
                <img
                    style={{ 
                        clipPath: "circle()",
                        width: 52,
                        height: 52,
                    }}
                    src={profile?.data?.profile?.startsWith("https") ? profile?.data?.profile : `${imageUrl}${profile?.data?.profile}`}
                    alt="person-male--v2"
                    className='clip'
                />
                <p className=' text-[18px] font-medium'> {profile?.data?.name}</p>
            </Link>
        </div>
    )
}

export default DashboardHeader