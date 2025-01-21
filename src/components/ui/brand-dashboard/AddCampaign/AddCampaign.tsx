"use client"
import { Form, Input, DatePicker, Upload, Button } from "antd"
import { PlusOutlined, UploadOutlined } from "@ant-design/icons"


const { TextArea } = Input 


const AddCampaign = () => { 
    const [form] = Form.useForm()
    return (
        <div>
               <div className="  p-6">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium">Creating New campaign</h1>
          <Button type="primary" className="bg-[#9FE870] hover:bg-[#8ed462] border-none text-black h-9">
            Publish
          </Button>
        </div>
 
 <div className=" bg-white p-6 rounded-xl"> 
        {/* Form */}
        <Form form={form} layout="vertical" className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium flex justify-between items-center">
                Campaign Details
                <Button type="link" className="text-[#9FE870] flex items-center">
                  <PlusOutlined /> Add Question
                </Button>
              </h2>

              <Form.Item label="Campaign Name" name="name">
                <Input className="h-10" />
              </Form.Item>

              <Form.Item label="Campaign Objective" name="objective">
                <Input className="h-10" />
              </Form.Item>

              <Form.Item label="Campaign Description" name="description">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item label="Key Messages" name="keyMessages">
                <TextArea rows={4} />
              </Form.Item>

              <h3 className="text-lg font-medium mt-8 mb-4">Campaign Details</h3>

              <Form.Item label="Campaign Start Date" name="startDate">
                <DatePicker
                  className="w-full h-10"
                  suffixIcon={
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/placeholder.svg" alt="" className="w-4 h-4 rounded-full" />
                    </div>
                  }
                />
              </Form.Item>

              <Form.Item label="Campaign End Date" name="endDate">
                <DatePicker
                  className="w-full h-10"
                  suffixIcon={
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/placeholder.svg" alt="" className="w-4 h-4 rounded-full" />
                    </div>
                  }
                />
              </Form.Item>

              <Form.Item label="Preferred Platform" name="platform">
                <Input className="h-10" />
              </Form.Item>

              <Form.Item label="Number of Budget" name="budget">
                <Input className="h-10" />
              </Form.Item>

              <Form.Item label="Hashtags & Tags" name="hashtags">
                <Input className="h-10" />
              </Form.Item>

              <Form.Item label="Content Submission Deadline" name="deadline">
                <DatePicker className="w-full h-10" />
              </Form.Item>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Campaign Thumbnail</label>
                <Upload.Dragger className="bg-white border-dashed border-2 border-gray-300 rounded-lg" height={200}>
                  <p className="text-gray-500">
                    <UploadOutlined className="text-2xl mb-2" />
                    <br />
                    Click or drag file to upload
                  </p>
                </Upload.Dragger>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Brand Guidelines</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Campaign Do&apos;s</label>
                    <Input className="h-10 mb-2" />
                    <Button block className="bg-[#9FE870] hover:bg-[#8ed462] border-none text-black h-9">
                      ADD MORE
                    </Button>
                  </div>

                  <div>
                    <label className="block mb-2">Campaign Do not&apos;s</label>
                    <Input className="h-10 mb-2" />
                    <Button block className="bg-[#9FE870] hover:bg-[#8ed462] border-none text-black h-9">
                      ADD MORE
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Target Audience</h3>
                <div className="space-y-4">
                  <Form.Item label="Age" name={["targetAudience", "age"]}>
                    <Input className="h-10" />
                  </Form.Item>

                  <Form.Item label="Gender" name={["targetAudience", "gender"]}>
                    <Input className="h-10" />
                  </Form.Item>

                  <Form.Item label="Locations" name={["targetAudience", "locations"]}>
                    <Input className="h-10" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </Form>
 </div>
      </div>
    </div>
        </div>
    );
};

export default AddCampaign;