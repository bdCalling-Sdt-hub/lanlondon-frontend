"use client";

import { Building2, Phone, Mail } from "lucide-react";
import React from 'react'; 
import { Form, Input, message } from "antd";
import TextInput from "@/components/shared/TextInput";
import { useMakeContactMutation } from "@/redux/features/website/contact";

const Contact = () => {  
const [makeContact] = useMakeContactMutation(); 
const [form] = Form.useForm();

    const contactDetails = [
        // {
        //   title: "Corporate Office",
        //   description: "Goethestrasse 14, 8000 Graz Mur, Austria",
        
        //   icon: <Building2 className="w-7 h-7 text-pink-500" />,
        // },
        // {
        //   title: "Customer Support",
        //   description: ["+41 949 214802", "+41 773 34593"],
         
        //   icon: <Phone className="w-7 h-7 text-pink-500" />,
        // },
        {
          title: "Email",
          description: "Hello@creatorbriefs.com",
         
          icon: <Mail className="w-7 h-7 text-pink-500" />,
        },
      ];
      
      const ContactCard = ({ title, description, icon }: {title: string; description: string | string[];  icon: React.ReactNode}) => (
        <div className="bg-pink-200 p-[35px] rounded-lg shadow-sm  border-2 border-black/30">
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <div className={`h-14 w-14 flex items-center justify-center rounded-full bg-white`}>
              {icon}
            </div>
            
              <h3 className="font-semibold text-gray-800 text-[20px]">{title}</h3>
              {Array.isArray(description) ? (
                description.map((desc, index) => (
                  <p key={index} className="text-[16px] text-gray-600 ">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-600 ">{description}</p>
              )}
           
          </div>
        </div>
      );  


      const onFinish = async(values:{name:string , email:string , message:string}) => {
       await makeContact(values).then((res) => { 
        if(res?.data?.success){
          message.success(res?.data?.message)  
          form.resetFields()
        }else{
          message.error(res?.data?.message)  
        }
       })
      };
   
     
    return (
        <div  style={{
          backgroundImage: `url('/banner.svg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          width: "100%", 
          height: "100%",   
          objectFit: 'cover', 
          backgroundColor: "#ffe6f7"
      }}>
         
            <div className=" ">
      <div className="container mx-auto pb-[146px]">
        <div className="flex items-center justify-center pt-[100px] mb-[100px]">
        {contactDetails.map((detail, index) => (
      <ContactCard key={index} {...detail} />
    ))} 
        </div> 


        {/* Contact Form */}
        <div className="bg-[#f9fff1] rounded-lg shadow-sm p-9 max-w-2xl mx-auto mt-[100px] border-2 border-black/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Get in touch with us
          </h2>
          <p className="text-[#787878] mb-6 leading-6">
            Have inquiries about our services or a specific request?
            <br />
            Feel free to get in touch, and we&apos;ll be happy to assist!
          </p>

          <Form  className="space-y-4" layout="vertical" onFinish={onFinish} form={form}>
        <TextInput name="name" label="Full Name" />
        <TextInput name="email" label="Email" />
        
            <Form.Item name="message" label={<p className="text-[#4E4E4E] text-[16px]">Message</p>}  rules={[
        {
          required: true,
          message: `Please enter your ${"Message".toLowerCase()}`,
        },
      ]}>
              <Input.TextArea
                placeholder="Your message" 
                name="message"             
                rows={5} 
                style={{
                    resize: "none", 
                    border: "1px solid #d9d9d9",
                    outline: "none",
                    boxShadow: "none",
                    backgroundColor: "white",
                    borderRadius: "4px", 
                    padding: "8px",
                }}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4D4F] focus:border-transparent resize-none"
              
             
              />
            </Form.Item> 

            <div className="flex justify-end mt-4">

            <button
              type="submit"
              className="px-6 py-2 bg-pink-200 text-black rounded-md  font-medium transition-colors duration-200 border-2 border-black/30"
            >
              Submit your message
            </button>
            </div>
          </Form>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Contact;