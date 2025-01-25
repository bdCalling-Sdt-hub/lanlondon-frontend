/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useResetPasswordsMutation } from "@/redux/features/auth/authApi";
import {  Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ResetPassword = () => { 
  const router = useRouter()
  const [resetPasswords , {isError ,isLoading , isSuccess , error ,data}] = useResetPasswordsMutation()  

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          router.push("/login")
        
        });
      }
    }
    if (isError) {
      Swal.fire({
       //@ts-ignore
        text: error?.data?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, router]);  


  const onFinish = async(values:{ newPassword: string , confirmPassword: string}) => {   
    await resetPasswords(values).then((res)=>{
      console.log(res);
    })
  }  
    return (
        <div className="bg-white rounded-lg shadow-2xl p-[30px] pt-[55px] w-[600px]">

        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold text-black text-center mb-4">Verification Process</h1> 
          <p className="text-center ">Fill in the information below to proceed onward.</p>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >

            <Form.Item
              name="newPassword" 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
              
                className="font-semibold "
              >
                New Password
              </p>}
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>       
           
            <Form.Item
              style={{ marginBottom: 0 }} 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
                className="font-semibold"
              >
                Confirm Password
              </p>}
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>
      

            <Form.Item style={{marginBottom: 0}}>
            <button 
            type="submit"
                className="w-full py-4 rounded-full   text-[20px] text-white leading-6 font-medium shadow-sm bg-black mt-5 "

              > {isLoading ? "Loading..." : "Submit"}
              </button>
          </Form.Item>


         
        </Form>


    </div>
    );
};

export default ResetPassword;