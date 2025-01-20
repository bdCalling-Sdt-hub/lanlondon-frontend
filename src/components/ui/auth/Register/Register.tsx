"use client";

import TextInput from "@/components/shared/TextInput";
import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    console.log(values);
    localStorage.setItem("userType", "register");
    router.push(`/verify-otp?email=${values.email}`);
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

          <div className=" grid grid-cols-2 gap-3 w-full"> 

          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
          </div>
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
