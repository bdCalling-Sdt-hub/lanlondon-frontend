/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ChangePassword = () => {   
    const [form] = Form.useForm()
    const [changePassword , {data , isError , isLoading , isSuccess , error }] = useChangePasswordMutation() 
 
    useEffect(() => {
        if (isSuccess) { 
          if (data) {
            Swal.fire({
              text: data?.message ,
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            }).then(() => { 
              window.location.reload(); 
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
      }, [isSuccess, isError, error, data])   


    const handleChangePassword = async(values:{currentPassword:string , newPassword:string , confirmPassword:string}) => {
        await changePassword(values)
    };   

    return (
        <div>
        {" "}
        <div className="">
          <div>
            <Form
            form={form}
            layout='vertical'
              className="lg:ms-[50px] pe-[30px] mt-[30px] "
              initialValues={{
                remember: true,
              }}
              style={{
                width: "100%",
                height: "fit-content",
              }}
              onFinish={handleChangePassword}
            >
              <div className=" mb-[20px]  lg:w-[50%] w-[100%]">
               
                <Form.Item
                  style={{ marginBottom: 0 }}
                  name="currentPassword" 
                  label={ <p style={{ display: "block"}}>
                  Current Password
                </p>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your current password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter Password"
                    type="password"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "52px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>
  
              <div className=" mb-[20px]  lg:w-[50%] w-[100%]">
                
                <Form.Item
                  name="newPassword"  
                  label={<p
                  style={{ display: "block"}}
                >
                  New Password
                </p>}
                  dependencies={["currentPassword"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("currentPassword") === value) {                     
                          return Promise.reject(
                            new Error(
                             "The new password and current password do not match!"
                            )
                          );
                        }
                        return Promise.resolve(); 
                      },
                    }),
                  ]} 
  
                  style={{ marginBottom: 0 }}
                >
                  <Input.Password
                    type="password"
                    placeholder="Enter password"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "52px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>
  
              <div className=" mb-[40px]  lg:w-[50%] w-[100%]">
                
                <Form.Item
                  name="confirmPassword" 
                  label={<p
                    style={{ display: "block"}} >
                    Re-Type Password
                  </p>}
                  style={{ marginBottom: 0 }}
                  dependencies={["new_password"]}
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
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="Enter password"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "52px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>
      <div
    style={{
      width: "50%",
      display: "flex",
      gap: "16px",
      alignItems: "center",
      marginBottom: "20px",
    }}
  >
    <div style={{ width: "100%", position: "relative" }}>
      <Form.Item className='flex items-center  justify-end'>
        <button
          type="submit"
          className='bg-black text-white px-4 py-3 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:font-medium hover:text-black transition-colors'
        >
       {isLoading ? "Loading..." : "Change Password"}   Submit
        </button>
      </Form.Item>
    </div>
  </div> 

         
            </Form>
          </div>
        </div>
      </div>
    );
};

export default ChangePassword;