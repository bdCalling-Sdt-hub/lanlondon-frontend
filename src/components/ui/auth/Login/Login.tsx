/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import TextInput from "@/components/shared/TextInput";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { SetLocalStorage } from "@/util/LocalStroage";
import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter()
  const [loginUser, { isSuccess, isError, data, error, isLoading }] = useLoginUserMutation()

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({    
          text: data?.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then( () => {
 
          if (data) {
            SetLocalStorage("creatorToken", data?.data?.accessToken); 
            router.push("/brand-home");         
          }
        });
      }
 
    }
    if (isError) {
      Swal.fire({
        title: "Failed to Login",
        //@ts-ignore
        text: error?.data?.message,
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, router ]);
 
 
  const onFinish = async (values:{email:string , password:string}) => {
    await loginUser(values)
  };
 


  return ( 
    <div className="grid grid-cols-1 md:grid-cols-2  bg-[#f9bdf5] " >

      <div>
        <div className=" mb-6">
          <h1 className="text-[48px] font-semibold mb-2 ">Join Us Now</h1>
          <p className="text-[#262626] text-[32px] w-[450px]"> Create your campaign and boost your growth Faster</p>

          <img src="/auth.png" alt="" className="h-[500px] w-[500px]" />
        </div>
      </div>

      <div>
        <div className=" bg-white  rounded-lg w-[600px]  shadow-2xl p-[30px] pt-[55px] ">
          <p className="text-[32px] font-semibold pb-4">Sign In</p>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className=""
          >

            <TextInput name={"email"} label={"Email"} />

            <Form.Item
              name="password"
              label={<p className="text-[16px] text-[#666666]">Password</p>}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  height: 48,
                  border: "1px solid #d9d9d9",
                  outline: "none",
                  boxShadow: "none"
                }}
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <Form.Item style={{ marginBottom: 0 }} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a
                className="login-form-forgot text-[#007BC8] font-semibold"
                href="/forgot-password"
              >
                Forgot password
              </a>
            </div>

            <div className="w-full  space-y-4 mt-3">
              <button
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full  text-black border-2 border-black text-[20px] hover:text-white leading-6 font-medium shadow-sm hover:bg-black "

              >
                <span> <FcGoogle size={24} /></span>
                <span>  Continue with Google </span>
              </button>

              <button
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full  text-black border-2 border-black text-[20px] hover:text-white leading-6 font-medium shadow-sm hover:bg-black "

              >
                <span> <FaFacebook size={24} /></span>
                <span>  Continue with Facebook </span>
              </button>
            </div>

            <Form.Item style={{ marginBottom: 0 }}>
            <button 
            type="submit"
                className="w-full py-4 rounded-full   text-[20px] text-white leading-6 font-medium shadow-sm bg-black mt-5 "
 
              >{isLoading ? "Loading..." : "Sign In"} 
              </button>
            </Form.Item>


          </Form>

          <div className=" flex items-center justify-center gap-1 py-4">
            <p className="text-[#636363]">Don’t have any account?</p>
            <Link href="/register" className="text-[#1854F9] font-semibold underline underline-offset-4" > Create Account</Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Login;