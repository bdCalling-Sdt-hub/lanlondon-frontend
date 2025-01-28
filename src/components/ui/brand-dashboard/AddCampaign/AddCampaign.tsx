/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import { Form, Input, DatePicker, ConfigProvider, Select } from "antd"
import { PiImageThin } from 'react-icons/pi';
import { useEffect, useState } from "react";
import AddQuestionModal from "./AddQuestionModal";
import moment from "moment";
import { useCreateCampaignMutation, useGetCampaignQuery } from "@/redux/features/brand-dashboardApi/campaign";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { imageUrl } from "@/redux/base/baseApi";
const { TextArea } = Input


const AddCampaign = () => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const [doArray, setDoArray] = useState([""]);
  const [dontArray, setDontArray] = useState([""]);
  const [hashtagArray, setHashtagArray] = useState([""]);
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState<string | null>()
  const [createCampaign , {isLoading ,  error , data ,  isSuccess , isError}] = useCreateCampaignMutation()  
  const {data:getCampaignData , refetch} = useGetCampaignQuery(undefined)  
  console.log(getCampaignData);
  const router = useRouter() 

 useEffect(() => {
  if (getCampaignData) {
    form.setFields([
      { name: 'name', value: getCampaignData.name },
      { name: 'objective', value: getCampaignData.objective },
      { name: 'description', value: getCampaignData.description },
      { name: 'message', value: getCampaignData.message },
      { name: 'startDate', value: getCampaignData.startDate ? moment(getCampaignData.startDate) : null },
      { name: 'endDate', value: getCampaignData.endDate ? moment(getCampaignData.endDate) : null },
      { name: 'platforms', value: getCampaignData.platforms },
      { name: 'budget', value: getCampaignData.budget },
      { name: 'target_age', value: getCampaignData.target_age },
      { name: 'target_gender', value: getCampaignData.target_gender },
      { name: 'target_location', value: getCampaignData.target_location },
      // { name: 'target_demo', value: getCampaignData.target_demo }, 
      { name: 'submission_date', value: getCampaignData.submission_date ? moment(getCampaignData.submission_date) : null },
    ]);

    setDoArray(getCampaignData.do || [""]);
    setDontArray(getCampaignData.do_not || [""]);
    setHashtagArray(getCampaignData.hashtag || [""]);

    if (getCampaignData.image) {
      setImgUrl(getCampaignData?.image?.startsWith("http") ? getCampaignData?.image : `${imageUrl}${getCampaignData?.image}`); 
      setImgFile(getCampaignData?.image?.startsWith("http") ? getCampaignData?.image : `${imageUrl}${getCampaignData?.image}`)
    }  

   } 

 }, [getCampaignData , form]);

    useEffect(() => {
      if (isSuccess) {
        if (data) {
          Swal.fire({
            text: data?.message,
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {  
            refetch() 
          })
        }
      }
      if (isError) {
        Swal.fire({
          //@ts-ignore
          text: error?.data?.message,
          icon: "error",
        }).then(() => {
          if(error?.data?.message === "You have to add business information first"){
            router.push("/business-info")
          }
        })
      }
    }, [isSuccess, isError, error, data , router , form , refetch ]); 

  const handleChange = (e) => {
    const file = e.target.files[0]
    setImgFile(file);
    setImgUrl(URL.createObjectURL(file)) 
    setDontArray([""]) 
    setDoArray([""])
  };

  const handleAddDo = () => {
    setDoArray([...doArray, ""]);
  };

  const handleAddDont = () => {
    setDontArray([...dontArray, ""]);
  };

  const handleAddHashtag = () => {
    setHashtagArray([...hashtagArray, ""]);
  };


  const handleDoChange = (index: number, value) => {
    const updatedDoArray = [...doArray];
    updatedDoArray[index] = value;
    setDoArray(updatedDoArray);
  };

  const handleDontChange = (index: number, value) => {
    const updatedDontArray = [...dontArray];
    updatedDontArray[index] = value;
    setDontArray(updatedDontArray);
  };

  const handleChangeHashtag = (value, index: number) => {
    const updatedHashtagArray = [...hashtagArray];
    updatedHashtagArray[index] = value;
    setHashtagArray(updatedHashtagArray);
  };

  const onFinish = async (values) => {
    const formData = new FormData()
    if (imgFile) {
      formData.append("image", imgFile)
    } 
    doArray.forEach((item) => {
      formData.append("do[]", item);
    });
    
    dontArray.forEach((item) => {
      formData.append("do_not[]", item);
    });
    
    hashtagArray.forEach((item) => {
      formData.append("hashtag[]", item);
    }); 

    const data = {
      ...values,
      target_age: values.target_age && parseInt(values.target_age),
      startDate: values.startDate ? moment(values.startDate).format("YYYY-MM-d") : undefined,
      endDate: values.endDate ? moment(values.endDate).format("YYYY-MM-d") : undefined,
      submission_date: values.submission_date ? moment(values.submission_date).format("YYYY-MM-d") : undefined, 
    };

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createCampaign(formData)

  };

  return (
    <div>
      <div className="p-6">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium">Creating New Campaign</h1> 

            { 
              getCampaignData?._id && (
                <button
                  className="bg-[#9FE870] hover:bg-[#8ed462] border-none text-black h-[45px] px-4 rounded-md"
                  onClick={() => router.push(`/add-questions?id=${getCampaignData?._id}`)}
                >
                  + Add Question
                </button>
              )
            }
          </div>

          <div className="bg-white p-6 rounded-xl">
            {/* Form */}
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryHover: "#C1FF72",
                  colorPrimaryActive: "#C1FF72",
                },
              }}
            >
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Campaign Name */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Campaign Name</p>}
                      name="name"
                      rules={[{ required: true, message: "Campaign Name is required!" }]}
                    >
                      <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Campaign Objective */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Campaign Objective</p>}
                      name="objective"
                      rules={[{ required: true, message: "Campaign Objective is required!" }]}
                    >
                      <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Campaign Description */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Campaign Description</p>}
                      name="description"
                      rules={[{ required: true, message: "Campaign Description is required!" }]}
                    >
                      <TextArea rows={4} style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Key Messages */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Key Messages</p>}
                      name="message"
                      rules={[{ required: true, message: "Key Messages are required!" }]}
                    >
                      <TextArea rows={4} style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Campaign Start Date */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Campaign Start Date</p>}
                      name="startDate"
                      rules={[{ required: true, message: "Start Date is required!" }]}
                    >
                      <DatePicker className="w-full h-[45px]" format="YYYY-MM-DD" />
                    </Form.Item>

                    {/* Campaign End Date */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Campaign End Date</p>}
                      name="endDate"
                      rules={[{ required: true, message: "End Date is required!" }]}
                    >
                      <DatePicker className="w-full h-[45px]" format="YYYY-MM-DD" />
                    </Form.Item>

                    {/* Preferred Platform */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Preferred Platform</p>}
                      name="platforms"
                      rules={[{ required: true, message: "Preferred Platform is required!" }]}
                    >
                      <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Number of Budget */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Number of Budget</p>}
                      name="budget"
                      rules={[{ required: true, message: "Budget is required!" }]}
                    >
                      <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                    </Form.Item>

                    {/* Hashtags & Tags */}
                    <div>
                      <p className="text-[#666666] text-[14px]">Hashtags & Tags</p>
                      {hashtagArray.map((hashtag, index) => (
                        <div key={index} className="mt-4">
                          <Input
                            value={hashtag}
                            onChange={(e) => handleChangeHashtag(e.target.value, index)}
                            className="h-[45px] mb-2"
                            style={{ backgroundColor: "#F5F5F5" }}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        className="bg-primary w-full mt-4 border-none text-black h-[45px] rounded-lg"
                        onClick={handleAddHashtag}
                      >
                        ADD MORE
                      </button>
                    </div>

                    {/* Content Submission Deadline */}
                    <Form.Item
                      label={<p className="text-[#666666] text-[14px]">Content Submission Deadline</p>}
                      name="submission_date"
                      rules={[{ required: true, message: "Submission Date is required!" }]}
                    >
                      <DatePicker className="w-full h-[45px]" format="YYYY-MM-DD" />
                    </Form.Item>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Campaign Thumbnail */}
                    <div>
                      <p className="text-[#6D6D6D] py-1">Campaign Thumbnail</p>
                      <label htmlFor="image" style={{ display: "block", backgroundColor: "white" }} className="p-3 border rounded-lg">
                        <div
                        >
                          <div className="flex justify-center items-center w-full h-full py-4">
                            {imgUrl ? (
                              <img src={imgUrl} alt="Campaign Thumbnail" />
                            ) : (
                              <PiImageThin className="text-7xl flex items-center justify-center text-[#666666] font-[400]" />
                            )}
                          </div>
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
                      </label>
                    </div>

                    {/* Brand Guidelines */}
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-[#666666]">Brand Guidelines</h3>
                      {/* Campaign Do's */}
                      <div>
                        <label className="block mb-2 text-[#666666]">Campaign Do&apos;s</label>
                        {doArray.map((doItem, index) => (
                          <div key={index} className="mt-4">
                            <Input
                              value={doItem}
                              onChange={(e) => handleDoChange(index, e.target.value)}
                              className="h-[50px]"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          className="bg-primary w-full mt-4 border-none text-black h-[45px] rounded-lg"
                          onClick={handleAddDo}
                        >
                          ADD MORE
                        </button>
                      </div>

                      {/* Campaign Don'ts */}
                      <div>
                        <label className="block mb-2 text-[#666666]">Campaign Don&apos;ts</label>
                        {dontArray.map((dontItem, index) => (
                          <div key={index} className="mt-4">
                            <Input
                              value={dontItem}
                              onChange={(e) => handleDontChange(index, e.target.value)}
                              className="h-[50px] mb-2"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          className="bg-primary w-full mt-4 border-none text-black h-[45px] rounded-lg"
                          onClick={handleAddDont}
                        >
                          ADD MORE
                        </button>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-[#666666]">Target Audience</h3>
                      <div className="space-y-4">
                        <Form.Item
                          label={<p className="text-[#666666] text-[14px]">Age</p>}
                          name="target_age"
                          rules={[{ required: true, message: "Target Age is required!" }]}
                        >
                          <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                        </Form.Item>

                        <Form.Item
                          label={<p className="text-[#666666] text-[14px]">Gender</p>}
                          name="target_gender"
                          rules={[{ required: true, message: "Target Gender is required!" }]}
                        >
                          <Select
                            placeholder="Select Gender"
                            className="h-[45px]"
                            style={{ backgroundColor: "#F5F5F5" , height: "45px" }}
                          >
                            <Select.Option value="MALE">Male</Select.Option>
                            <Select.Option value="FEMALE">Female</Select.Option>
                            <Select.Option value="OTHERS">Others</Select.Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          label={<p className="text-[#666666] text-[14px]">Location</p>}
                          name="target_location"
                          rules={[{ required: true, message: "Target Location is required!" }]}
                        >
                          <Input className="h-[45px]" style={{ backgroundColor: "#F5F5F5" }} />
                        </Form.Item>

                        {/* <Form.Item
                          label={<p className="text-[#666666] text-[14px]">Demographics</p>}
                          name="target_demo"
                          rules={[{ required: true, message: "Demographics are required!" }]}
                        >
                          <TextArea rows={4} style={{ backgroundColor: "#F5F5F5" }} />
                        </Form.Item> */}
                      </div>
                    </div>
                  </div>
                </div>

                <Form.Item className="flex justify-end gap-4">

                  <button
                    type="submit"
                    className="bg-black px-8 py-3 text-white rounded-lg mt-3 "
                  >
                 {isLoading ? "Loading..." : "Save Campaign"}   
                  </button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </div> 
      <AddQuestionModal open={open} setOpen={setOpen} id={getCampaignData?._id} />
    </div>
  );
};

export default AddCampaign;