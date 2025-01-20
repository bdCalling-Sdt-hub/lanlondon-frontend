import React from 'react'

import { FaRegBell } from 'react-icons/fa6';
import { Badge } from 'antd';
import Link from 'next/link';


const DashboardHeader = () => {
    return (
        <div className='flex items-center gap-5 justify-end'>
            <Link href="/notification" className='h-fit mt-[10px]'>
                <Badge count={5} >
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
                    src="/img1.webp"
                    alt="person-male--v2"
                    className='clip'
                />
                <p className=' text-[18px] font-medium'>Cheryl Chan</p>
            </Link>
        </div>
    )
}

export default DashboardHeader