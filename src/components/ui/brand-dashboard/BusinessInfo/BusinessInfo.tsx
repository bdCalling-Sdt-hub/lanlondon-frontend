/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ArrowLeft } from "lucide-react"
import { Input, Upload as AntUpload, Form } from "antd"
import { InboxOutlined } from "@ant-design/icons";

const { TextArea } = Input
const { Dragger } = AntUpload

export default function BusinessInfo() {
    const [form] = Form.useForm();

    const uploadProps = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", // Replace with your actual upload URL
      onChange(info:any) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          console.log(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          console.log(`${info.file.name} file upload failed.`);
        }
      },
    };
  
    const onFinish = (values:any) => {
      console.log("Form values:", values);
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
            name="brandName"
            label={<p className="text-[18px] text-gray-500">Brand Name</p>}
            rules={[{ required: true, message: "Please enter the brand name" }]}
          >
            <Input placeholder="Enter brand name" style={{ height:"45px"}} />
          </Form.Item>

          <Form.Item
            name="websiteLink"
            label={<p className="text-[18px] text-gray-500">Brand Website Link</p>}
            rules={[
              { required: true, message: "Please enter the website URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="Enter website URL" style={{ height:"45px"}} />
          </Form.Item>

          <Form.Item
            name="socialHandles"
            label={<p className="text-[18px] text-gray-500">Brand Social Handles Link</p>}
            rules={[{ required: true, message: "Please enter social media handles" }]}
          >
            <TextArea
              placeholder="Enter social media handles"
              rows={6}
            />
          </Form.Item>
        </div>

        {/* Right Column - Image Upload */}
        <div>
          <Form.Item
            name="images"
            label={<p className="text-[18px] text-gray-500">Brand Product/Service Images</p>}
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)} 
            
          >
            <Dragger {...uploadProps} className="bg-white rounded-lg" >
              <div className="p-8 text-center" style={{ 
                height:"300px"
            }}>
                <div className="flex justify-center mb-4">
                  <InboxOutlined className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-gray-600">Click or drag files to upload</p>
              </div>
            </Dragger>
          </Form.Item>
        </div>
      </div>

      {/* Submit Button */}
      <Form.Item className=" flex items-center justify-center">
        <button
          type="submit"
          className="bg-black text-white py-2 px-8 mt-10 rounded "
        >
          Submit
        </button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

