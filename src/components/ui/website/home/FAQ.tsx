"use client"

import React from 'react';

import type { CSSProperties } from 'react' 
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { Plus } from 'lucide-react';
import {  Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400" , "500", "600", "700"] });

const text = `
To place an order, download our app or visit our website, enter your location, and browse local restaurants. Add items to your cart, proceed to checkout, and confirm your order. We’ll take care of the rest! You’ll receive updates on your order status and can track your delivery in real-time. Enjoy fresh, delicious food delivered right to your door!
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p className='font-sans' style={{ color: '#4E4E4E', fontSize: '19px' }}> How do I place an order?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How long will my order take to arrive? </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How will I know if order is placed successfully ? </p>,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How do I track my order?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> Can I cancel my order ?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> What are the payment options?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '7',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> Are there any delivery fees?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },


]; 
const FAQ = () => { 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#edeef0",  
    
      borderRadius: token.borderRadiusLG,
    
    };  
    return (
        <div>
          
            <div className='mb-[100px]'> 

<div className=' container'>  

    <div className=' pb-[40px]'>
    <p className="mb-4 inline-block uppercase text-[24px] font-medium text-gray-600">
            — FAQ
          </p>
          
          <h2 className={` text-[40px] font-[500] leading-tight text-gray-900 ${urbanist.className}` }>
          Got Questions? We Have Answers!
          </h2>

    </div> 

    <Collapse
bordered={false}
expandIcon={({ isActive }) => <Plus  size={22} style={{ 
transform: `rotate(${isActive ? 0 : 270}deg)`,
transition: 'transform 0.3s ease', 
color: 'black' 
}}  />} 
expandIconPosition="end"
style={{ background: "#fff"  , color: '#222222'}}  
items={getItems(panelStyle)}
/>  

</div>
</div>
        </div>
    );
};

export default FAQ;