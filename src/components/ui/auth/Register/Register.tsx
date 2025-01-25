/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import TextInput from "@/components/shared/TextInput";
import { useCreateUserMutation } from "@/redux/features/auth/authApi";
import { SetLocalStorage } from "@/util/LocalStroage";
import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from 'sweetalert2' 

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter(); 
  const [createUser] = useCreateUserMutation();
 
  const onFinish = async (values: ValuesType) => {
  
const data={
  role: "BRAND" , 
  ...values
}

console.log(data);

    await createUser(data).then((res) => {
    
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => { 
          const value = {
            userType: "registerUser",
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

  };

  return ( 
    <div className="grid grid-cols-1 md:grid-cols-2  " >

    <div>
      <div className=" mb-6">
        <h1 className="text-[48px] font-semibold mb-2 ">Join Us Now</h1>
        <p className="text-[#262626] text-[32px] w-[450px]"> Create your campaign and boost your growth Faster</p>

        <img src="/auth.png" alt="" className="h-[500px] w-[500px]" />
      </div>
    </div>

    <div>
      <div className=" bg-white  rounded-lg w-[600px]  shadow-2xl p-[30px] pt-[55px] ">
        <p className="text-[32px] font-semibold pb-4">Sign Up</p>
        <Form onFinish={onFinish} layout="vertical"> 

          <TextInput name="name" label="Name" />       
          <TextInput name="email" label="Email" />
          <TextInput name="contact" label="Phone Number" />

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              }, 
               {
                min: 8,
                message: "Password must be at least 8 characters long!",
            }
            ]}
            className="mb-3"
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to continue!"));
                },
              },
            ]}
          >
            <Checkbox>
              I agree with terms of service and privacy policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
          <button 
            type="submit"
                className="w-full py-4 rounded-full   text-[20px] text-white leading-6 font-medium shadow-sm bg-black mt-2 "

              >Sign Up
              </button>
          </Form.Item>
        </Form>

        <div className=" flex items-center justify-center gap-1 py-2">
          <p className="text-[#636363]">Already have an account?  </p>
          <Link href="/login" className="text-[#1854F9] font-semibold underline underline-offset-4" > Log in</Link>
        </div>
      </div>


    </div>
  </div>
   
  );
};

export default Register;
