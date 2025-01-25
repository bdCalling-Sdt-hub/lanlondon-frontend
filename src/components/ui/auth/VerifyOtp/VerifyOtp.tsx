/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import {  Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"

import "./OtpStyle.css"
import Swal from "sweetalert2";
import { GetLocalStorage, SetLocalStorage } from "@/util/LocalStroage";
import { useForgetPasswordMutation, useVerifyEmailMutation } from "@/redux/features/auth/authApi";
const { Text } = Typography;

const VerifyOtp = () => { 
  const [email, setEmail] = useState<string | null>(null);
  const userInfo = GetLocalStorage("userInfo"); 
  const [verifyEmail] = useVerifyEmailMutation()
  const userType = userInfo?.userType 
  const router = useRouter() 
  const [forgetPassword] = useForgetPasswordMutation() 

  useEffect(() => {
    if (userInfo?.email) {
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleResendEmail = async () => {
    const value = {
      email: email
    }
    await forgetPassword(value).then((res) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        Swal.fire({
          title: "Oops",
          //@ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });

      }
    })

  }

  const onFinish = async(values: { otp: string}) => {
    // //console.log(values); 
    const data = {
      email: email,
      oneTimeCode: parseInt(values?.otp)
    }

    await verifyEmail(data).then((res) => {

      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => { 

          if (userType === "registerUser") {
            router.push("/login")
          } else {
            router.push("/reset-password")
          } 

          if(res?.data){   
            SetLocalStorage("resetToken", res?.data?.data); 
          }
    
        });
      } else {
        Swal.fire({
          title: "Oops",
          //@ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });

      }
    })
  };  

    return (
        <div className="bg-white rounded-lg shadow-2xl p-[30px] pt-[55px] w-[600px]">

        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold mb-4 text-black text-center ">Verification code</h1>
          <p className="text-center ">Fill in the information below to proceed onward.</p>
        </div>


        <Form layout="vertical" onFinish={onFinish}>

        <Form.Item
   className="flex items-center justify-center mx-auto"
   name="otp"
   rules={[{ required: true, message: 'Please input otp code here!' }]}
 >
   <Input.OTP
     style={{
      
       height: 50,

     }}
     className=""
     variant="filled"
     length={6}
   />
 </Form.Item>

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