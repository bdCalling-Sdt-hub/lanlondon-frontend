"use client"
import {  Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react"; 
import "../VerifyOtp/OtpStyle.css"
const ForgetPassword = () => { 
    const router  = useRouter()

    const onFinish = async(values:{email:string}) => { 
        localStorage.setItem("userType","forget")
  
          router.push(`/verify-otp?email=${values?.email}`);
  
    };
  
    return (
        <div className="bg-white rounded-lg shadow-2xl p-[30px] pt-[55px] w-[600px] ">

        <div className="text-center mb-4">
          <h1 className="text-[25px] font-semibold ">Forgot Password ?</h1>
        
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          
            <Form.Item
              label={<p>Email</p>}
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                style={{
                  height: 48,
                  border: "1px solid #d9d9d9",
                  outline: "none",
                  boxShadow: "none"
                }}
              />
            </Form.Item>

          <Form.Item>
          <button 
            type="submit"
                className="w-full py-4 rounded-full   text-[20px] text-white leading-6 font-medium shadow-sm bg-black mt-5 "

              >  Send OTP
              </button>
          </Form.Item>
        </Form>
    </div>
    );
};

export default ForgetPassword;