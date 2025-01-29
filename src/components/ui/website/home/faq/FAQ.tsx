"use client"

import React from 'react';
import { Collapse, theme } from 'antd';
import { Plus } from 'lucide-react';
import { Urbanist } from 'next/font/google';
import "./faq.css"
import { useGetFaqQuery } from '@/redux/features/website/faq';
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


const FAQ = () => {
  const { data: allFaqs } = useGetFaqQuery(undefined)
  const { token } = theme.useToken();
  console.log(allFaqs);

  const getItems = () =>
    allFaqs?.map((faq:{question:string,answer:string,_id:string}) => ({
      key: faq._id,
      label: (
        <p
          className="font-sans"
          style={{ color: '#4E4E4E', fontSize: '19px' }}
        >
          {faq.question}
        </p>
      ),
      children: (
        <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{faq.answer}</p>
      ),
      style: panelStyle,
    }));  

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "#fff",

    borderRadius: token.borderRadiusLG,

  };
  return (
    <div className='faqBg py-[100px]'>

      <div className=''>

        <div className=' container  bg-pink-100/70 shadow-2xl rounded-xl px-8  py-5 ' >

          <div className=' pb-[40px]'>
            <p className="mb-4 inline-block uppercase text-[24px] font-medium text-gray-600">
              — FAQ
            </p>

            <h2 className={` text-[40px] font-[500] leading-tight text-gray-900 ${urbanist.className}`}>
              Got Questions? We Have Answers!
            </h2>

          </div>

          <div >
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => <Plus size={22} style={{
                transform: `rotate(${isActive ? 0 : 270}deg)`,
                transition: 'transform 0.3s ease',
                color: 'black'
              }} />}
              expandIconPosition="end"
              style={{ background: "transparent", color: '#222222' }}
              items={getItems()}
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;