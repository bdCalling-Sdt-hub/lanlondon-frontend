"use client"
import { Form, Input, DatePicker, Upload, ConfigProvider } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";


const { TextArea } = Input


const AddCampaign = () => {
  const [form] = Form.useForm() 
   const [open , setOpen] = useState(false)
  return (
    <div>
      <div className="  p-6">
        <div className="">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium ">Creating New campaign</h1>
            <button className="bg-[#9FE870] hover:bg-[#8ed462] border-none text-black h-[45px] px-4 rounded-md" onClick={() => setOpen(true)}>
              + Add Question
            </button>
          </div>

          <div className=" bg-white p-6 rounded-xl">

            {/* Form */}
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryHover: "#C1FF72",
                  colorPrimaryActive: "#C1FF72"
                },
              }}
            >
              <Form form={form} layout="vertical" className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {/* Left Column */}
                  <div className="space-y-4">

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Campaign Name </p>} name="name">
                      <Input className="h-[45px]" style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Campaign Objective </p>} name="objective">
                      <Input className="h-[45px]" style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Campaign Description </p>} name="description">
                      <TextArea rows={4} style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Key Messages</p>} name="keyMessages">
                      <TextArea rows={4} style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <h3 className="text-lg font-medium mt-8 mb-4">Campaign Details</h3>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Campaign Start Date </p>} name="startDate">
                      <DatePicker
                        className="w-full h-[45px]" style={{
                          backgroundColor: "#F5F5F5",
                        }}
                      />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Campaign End Date</p>} name="endDate">
                      <DatePicker
                        className="w-full  h-[45px]" style={{
                          backgroundColor: "#F5F5F5",
                        }}
                      />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Preferred Platform</p>} name="platform">
                      <Input className="h-[45px]" style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Number of Budget</p>} name="budget">
                      <Input className="h-[45px]" style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Hashtags & Tags</p>} name="hashtags">
                      <Input className="h-[45px]" style={{
                        backgroundColor: "#F5F5F5",
                      }} />
                    </Form.Item>

                    <Form.Item label={<p className=" text-[#666666] text-[14px]">Content Submission Deadline</p>} name="deadline">
                      <DatePicker className="w-full h-[45px]" />
                    </Form.Item>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 text-[#666666]">Campaign Thumbnail</label>
                      <Upload.Dragger className="bg-white rounded-lg" height={300}>
                        <p className="text-gray-500">
                          <UploadOutlined className="text-2xl mb-2" />
                          <br />
                          Click or drag file to upload
                        </p>
                      </Upload.Dragger>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4 text-[#666666]">Brand Guidelines</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2 text-[#666666]">Campaign Do&apos;s</label>
                          <Input className="h-[50px] mb-2"
                            style={{
                              backgroundColor: "#F5F5F5",
                            }} />
                          <button className="bg-primary w-full mt-4 border-none text-black h-[45px] rounded-lg">
                            ADD MORE
                          </button>
                        </div>

                        <div>
                          <label className="block mb-2">Campaign Do not&apos;s</label>
                          <Input className="h-[50px] mb-2" style={{
                            backgroundColor: "#F5F5F5",
                          }} />
                          <button className="bg-primary w-full mt-4 border-none text-black h-[45px] rounded-lg">
                            ADD MORE
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4 text-[#666666]">Target Audience</h3>
                      <div className="space-y-4">
                        <Form.Item label={<p className=" text-[#666666] text-[14px]">Age</p>} name={["targetAudience", "age"]}>
                          <Input className="h-[45px]" style={{
                            backgroundColor: "#F5F5F5",
                          }} />
                        </Form.Item>

                        <Form.Item label={<p className=" text-[#666666] text-[14px]"> Gender </p>} name={["targetAudience", "gender"]}>
                          <Input className="h-[45px]" style={{
                            backgroundColor: "#F5F5F5",
                          }} />
                        </Form.Item>

                        <Form.Item label={<p className=" text-[#666666] text-[14px]">Locations</p>} name={["targetAudience", "locations"]}>
                          <Input className="h-[45px]" style={{
                            backgroundColor: "#F5F5F5",
                          }} />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex items-center justify-center mt-4 " >
                  <button className=" bg-black w-1/5 mt-4 border-none text-white h-[45px] rounded-lg">
                    Publish
                  </button>
                </div>
              </Form>

            </ConfigProvider>

          </div>
        </div>
      </div> 
      <AddQuestionModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddCampaign;