/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import {  Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react"; 
import "../VerifyOtp/OtpStyle.css"
import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import Swal from "sweetalert2";
import { SetLocalStorage } from "@/util/LocalStroage";
const ForgetPassword = () => { 
    const router  = useRouter() 
    const [forgetPassword] = useForgetPasswordMutation()

    const onFinish = async (values: { email: string }) => {
  
      await forgetPassword(values).then((res) => {
        if (res?.data?.success) {
          Swal.fire({
            text: res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
  
            const value = {
              userType: "loginUser",
              email: values?.email
            }
            if (values?.email) {
              SetLocalStorage("userInfo", value)
            }
  
            router.push("/verify-otp")
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
    }
  
    return (
        <div className="bg-white rounded-lg shadow-2xl p-[30px] pt-[55px] lg:w-[600px] ">

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