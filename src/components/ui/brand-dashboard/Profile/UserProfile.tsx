/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Form, Input } from "antd";
import { useBrandProfileQuery, useUpdateProfileMutation } from '@/redux/features/auth/authApi';
import { imageUrl } from '@/redux/base/baseApi';
import Swal from 'sweetalert2';


const UserProfile = () => {
    const [form] = Form.useForm(); 
    const [image, setImage] = useState(
        "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"
    );
    const [imgURL, setImgURL] = useState(image);  
    const {data:userProfile , refetch} = useBrandProfileQuery(undefined)  
    const [updateProfile , {isLoading , isSuccess , isError , error , data}] = useUpdateProfileMutation() 

    console.log(userProfile);


    useEffect(() => {
        if (userProfile?.data) {
            form.setFieldsValue({
                name: userProfile?.data?.name,
                email: userProfile?.data?.email,
                contact: userProfile?.data?.contact,
                location: userProfile?.data?.location,            
            }); 
            setImgURL(userProfile?.data?.profile?.startsWith("https") ? userProfile?.data?.profile : `${imageUrl}${userProfile?.data?.profile }`) 
        }
    }, [userProfile, form]); 

    useEffect(() => {
        if (isSuccess) { 
            Swal.fire({
              text: data?.message ,
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            }).then(() => { 
              refetch(); 
            });
        }
        if (isError) {
          Swal.fire({ 
            //@ts-ignore
            text: error?.data?.message,  
            icon: "error",
          });
        }
      }, [isSuccess, isError, error, data , refetch])   
 


    const handleSubmit = async(values:{name:string , email:string , contact:string , location:string}) => { 
        const formData = new FormData() 
        if(image){
            formData?.append("image" , image)
        }       

        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        })
      
        await updateProfile(formData)
    }; 


    const onChange = (e:any) => {
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
        setImage(file);
    };

    return (

        <div className=" lg:grid lg:grid-rows-2">
            {/* image   */}
            <div className='col-row-1'>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}
                >
                    <input
                        onChange={onChange}
                        type="file"
                        name=""
                        id="img"
                        style={{ display: "none" }}
                    />
                    <label
                        className="relative"
                        htmlFor="img"
                        style={{
                            width: "195px",
                            cursor: "pointer",
                            height: "195px",
                            borderRadius: "100%",
                            border: "1px solid black",
                            background: "white",
                            backgroundImage: `url(${imgURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div
                            className="absolute -right-1 bottom-1 "
                            style={{
                                background: "white",
                                width: "50px",
                                height: "50px",
                                border: "2px solid  black",
                                borderRadius: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MdOutlineAddPhotoAlternate size={22} color="black" />

                        </div>

                    </label>
                </div>
            </div>


            {/* forms  */}
            <div className="lg:col-rows-1  flex justify-center items-center  ">
                <Form
                    name="normal_login"
                    className="login-form"
                    layout='vertical'
                    style={{ width: "80%" }}
                    onFinish={handleSubmit}
                    form={form}
                >
                    <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 w-full gap-y-7 ">

                        <div >

                            <Form.Item style={{ marginBottom: 0 }} name="name" label={<p style={{ display: "block" }}>
                                Full Name
                            </p>}
                            >
                                <Input
                                    placeholder="Enter Your Full Name"
                                    type="text"
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

                        <div >

                            <Form.Item name="email" style={{ marginBottom: 0 }} label={<p
                                style={{ display: "block" }}

                            >
                                Email
                            </p>}>
                                <Input
                                    type="text"
                                    placeholder="Enter Email"
                                    style={{
                                        border: "1px solid #E0E4EC",
                                        height: "52px",
                                        background: "white",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }} 

                                    readOnly
                                />
                            </Form.Item>
                        </div>

                        <div >

                            <Form.Item style={{ marginBottom: 0 }} name="contact" label={<p style={{}} >
                                Phone Number
                            </p>}>
                                <Input
                                    type="text"
                                    placeholder="Enter Phone Number"
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

                        <div>

                            <Form.Item name="location" style={{ marginBottom: 0 }} label={<p
                                style={{ display: "block" }}

                            >
                                Location
                            </p>}>
                                <Input
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
                    </div>

                    <div className='text-end mt-6'>
                        <Form.Item>
                            <button
                                type='submit'
                                style={{
                                    border: "none",
                                    height: "41px",
                                    background: "black",
                                    color: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                    width: "150px",

                                }}
                            >
                             {isLoading ? "Saving..." : "Save"} 
                            </button>
                        </Form.Item>
                    </div>

                </Form>
            </div>
        </div>

    );
};
;

export default UserProfile;