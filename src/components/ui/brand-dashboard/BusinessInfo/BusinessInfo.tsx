/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */ 
//@ts-nocheck
"use client"

import { ArrowLeft } from "lucide-react"
import { Input, Form } from "antd"
import { PiImageThin } from 'react-icons/pi';
import { useEffect, useState } from "react";
import { useCreateBusinessInfoMutation, useGetBusinessInfoQuery } from "@/redux/features/brand-dashboardApi/businessInfo";
import Swal from "sweetalert2";
import { imageUrl } from "@/redux/base/baseApi";

export default function BusinessInfo() {
    const [form] = Form.useForm();  
    const [imgFile, setImgFile] = useState(null);  
    const [imgUrl , setImgUrl] =useState<string | null>()    
    const [createBusinessInfo , {isLoading ,  error , data ,  isSuccess , isError}] = useCreateBusinessInfoMutation(); 
    const {data:businessInfo } = useGetBusinessInfoQuery(undefined); 
  // console.log(businessInfo);

    const handleChange = (e) => { 
      const file = e.target.files[0]
      setImgFile(file); 
      setImgUrl(URL.createObjectURL(file))
    };  

    useEffect(() => {
      if (businessInfo) {
        form.setFieldsValue({
          name: businessInfo?.name,
          facebook: businessInfo?.facebook,
          instagram: businessInfo?.instagram,
          linkedin: businessInfo?.linkedin,
          website: businessInfo?.website,
          twitter: businessInfo?.twitter,
        }); 

        setImgUrl(businessInfo?.image?.startsWith("http") ? businessInfo?.image : `${imageUrl}${businessInfo?.image}`)
      }
    }, [businessInfo , form]);
 

    
        useEffect(() => {
          if (isSuccess) {
            if (data) {
              Swal.fire({
                position: "center",
                text: data?.message,
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              }).then(() => {
               form.resetFields() 
               setImgFile(null); 
                setImgUrl(null);
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
        }, [isSuccess, isError, error, data , form ]);  

    const onFinish = async(values:any) => {
      const formData = new FormData();

      if(imgFile){
        formData.append("image", imgFile)
      } 

      Object.entries(values).forEach(([key, value]) => {  
        formData.append(key, value);
      })

      await createBusinessInfo(formData)
    };

  return (
    <div className=" ">
      <div className=" mx-auto p-6 ps-0">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button className="hover:bg-gray-200 p-2 rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium">Business Information</h1>
        </div>

        {/* Form */}
        <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        brandName: "",
        websiteLink: "",
        socialHandles: "",
        images: [],
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Inputs */}
        <div className="space-y-6">
          <Form.Item
            name="name"
            label={<p className="text-[18px] text-gray-500">Brand Name</p>}
            rules={[{ required: true, message: "Please enter the brand name" }]}
          >
            <Input placeholder="Enter brand name" style={{ height:"45px"}} />
          </Form.Item>

          <Form.Item
            name="website"
            label={<p className="text-[18px] text-gray-500">Brand Website Link</p>}
            rules={[
              { required: true, message: "Please enter the website URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter website URL" style={{ height:"45px"}} />
          </Form.Item> 

          <Form.Item
            name="facebook"
            label={<p className="text-[18px] text-gray-500">Facebook Link</p>}
            rules={[
              { required: true, message: "Please enter the facebook URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter facebook URL" style={{ height:"45px"}} />
          </Form.Item>

          <Form.Item
            name="linkedin"
            label={<p className="text-[18px] text-gray-500">Linkedin Link</p>}
            rules={[
              { required: true, message: "Please enter the linkedin URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter linkedin URL" style={{ height:"45px"}} />
          </Form.Item>
   

   
        </div>

        {/* Right Column - Image Upload */} 
        <div> 

        <Form.Item
            name="twitter"
            label={<p className="text-[18px] text-gray-500">Twitter Link</p>}
            rules={[
              { required: true, message: "Please enter the twitter URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter twitter URL" style={{ height:"45px"}} />
          </Form.Item>
   
          <Form.Item
            name="instagram"
            label={<p className="text-[18px] text-gray-500">Instagram Link</p>}
            rules={[
              { required: true, message: "Please enter the instagram URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter instagram URL" style={{ height:"45px"}} />
          </Form.Item> 
        <div>
                <p className="text-[#6D6D6D] py-1"> Brand Product/Service Images</p> 
                <label
                htmlFor="image"
                style={{ display: "block", backgroundColor:"white" }}
                className="p-3 border rounded-lg"
              > 
              
                <div  >
                  <div className="flex justify-center items-center w-full h-full   py-4">
                    {imgUrl ? (
                      <img src={imgUrl} alt="" />
                    ) 
                     : (
                      <PiImageThin className="text-7xl flex items-center justify-center text-[#666666] font-[400]" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </label>
                </div>
        </div>
          
      </div>

      {/* Submit Button */}
      <Form.Item className=" flex items-center justify-center">
        <button
          type="submit"
          className="bg-black text-white py-2 px-8 mt-10 rounded "
        >
        {isLoading ? "Loading..." : "Submit"}
        </button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

