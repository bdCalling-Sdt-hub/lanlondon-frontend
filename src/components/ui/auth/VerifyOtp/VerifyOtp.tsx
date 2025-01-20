"use client"
import {  Form, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import OTPInput from "react-otp-input";
import "./OtpStyle.css"
const { Text } = Typography;

const VerifyOtp = () => { 
    const router = useRouter()
    const [otp, setOtp] = useState<string>("");
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
      const emailFromQuery = new URLSearchParams(window.location.search).get('email');
      setEmail(emailFromQuery);
    }, []); 

    console.log(email);
  
    const onFinish = async(values:{otp:string}) => {  
        const userType = localStorage.getItem("userType")
        console.log(values); 
        if(userType === "forget"){
            router.push(`/reset-password`);
        }else{
            router.push(`/login`);
        }
    };
  
  
    const handleResendEmail = async() => {
  
    };
    return (
        <div className="bg-white rounded-lg shadow-2xl p-[30px] pt-[55px] w-[600px]">

        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold mb-4 text-black text-center ">Verification code</h1>
          <p className="text-center ">Fill in the information below to proceed onward.</p>
        </div>


        <Form layout="vertical" onFinish={onFinish}>

          <div className="flex items-center justify-center mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                height: 50,
                width: 50,
                borderRadius: "8px",
                margin: "16px",
                fontSize: "20px",
                border: "1px solid #818181",
                color: "#2B2A2A",
                outline: "none",
                marginBottom: 10
              }}
              renderInput={(props) => <input {...props} />}
            />

          </div>

          <div className="flex items-center justify-between mb-6 ">
            <Text>Don&apos;t received code?</Text>

            <p
              onClick={handleResendEmail}
              className="login-form-forgot underline font-medium"
              style={{ color: "#00B047", cursor: "pointer" }}
            >
              Resend
            </p>
          </div>

          <Form.Item style={{marginBottom: 0}}>
          <button 
            type="submit"
                className="w-full py-4 rounded-full   text-[20px] text-white leading-6 font-medium shadow-sm bg-black mt-5 "

              >  verify
              </button>
          </Form.Item>
        </Form>
    </div>
    );
};

export default VerifyOtp;