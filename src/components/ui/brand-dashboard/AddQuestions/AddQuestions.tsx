/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import { useCreateQuestionsMutation } from "@/redux/features/brand-dashboardApi/campaign";
import { Form, Input, Select, Button, Space } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import Swal from "sweetalert2";

const { Option } = Select;

const AddQuestions = () => {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState<any[]>([]);
  const [showOptionsField, setShowOptionsField] = useState(false); 
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); 
  const [createQuestions , {  isError , isSuccess , data , error }] = useCreateQuestionsMutation();
 
      useEffect(() => {
            if (isSuccess) {
              if (data) {
                Swal.fire({
                  position: "center",
                  text: data?.message,
                  icon: "success",
                  timer: 1500,
                  showConfirmButton: false
                })
              }
            }
            if (isError) {
              Swal.fire({
                position: "center",
                text: error?.data?.message,
                icon: "error",
              });
            }
          }, [isSuccess, isError, error, data , form ]);  

  const handleSelectChange = (value: string) => {
    setShowOptionsField(value === "RADIO");
  };

  const handleSubmit = (values: { questionName: string; type: string; options?: string[] }) => {
    const newQuestion = {
      question: values.questionName,
      type: values.type.toUpperCase(),
      ...(values.type === "RADIO" ? { options: values.options || [] } : {}),
    };
    setQuestions([...questions, newQuestion]);
    form.resetFields(); 
    setShowOptionsField(false);
  }; 

  const handleSubmitQuestions = async() => {
    console.log(questions); 

    await createQuestions({questions , campaign: id}).unwrap().then((res) => {
      console.log(res);
    }) 
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-[30px] w-2/3">
      <p className="text-[20px] font-medium">Applicant Questions</p>

      <div className="mt-4">
        {questions.map((question, index) => ( 
            <div className="  "   key={index}> 
 <p className="mb-1 "> <span className=" text-[18px] "> Question {index + 1} </span></p>
          <div
          
            className="border border-gray-200 rounded p-4 mb-4 shadow-sm"
          >
            <p className=""> <span className="font-semibold"> Question Name :  </span> {question.question}</p>
            <p><span className="font-semibold">Question  type: </span>  {question.type}</p>
            {question.options && ( 
              <div className="  mt-2">
                {question.options.map((option: string, idx: number) => (
                  <p key={idx}> <span className="font-medium"> Option {idx + 1} : </span>  {option}</p>
                ))}
              </div>
            )}
          </div>
            </div>
        ))}
      </div>

      <div className="my-6 border border-gray-200  p-5 pb-0 rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ type: "input" }}
        >
          <Form.Item
            name="questionName"
            label="Question (e.g : Are you happy for the brand to reuse your content for marketing? )"
            rules={[{ required: true, message: "Please enter a question name" }]}
          >
            <Input placeholder="Enter question name" style={{ height: 45 }} />
          </Form.Item>

          <Form.Item
            name="type"
            label="Question Type"
            rules={[{ required: true, message: "Please select a question type" }]}
          >
            <Select
              placeholder="Select question type"
              onChange={handleSelectChange}
              style={{ height: 45 }}
            >
              <Option value="NUMBER">Number</Option>
              <Option value="INPUT">Input</Option>
              <Option value="BOOLEAN">Boolean</Option>
              <Option value="RADIO">Options</Option>
            </Select>
          </Form.Item>

          {showOptionsField && (
            <Form.List name="options" initialValue={[]}>
              {(fields, { add, remove }) => (
                <div>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={name}
                        rules={[{ required: true, message: "Missing option" }]}
                      >
                        <Input placeholder="Enter option" style={{ height: 40 }} />
                      </Form.Item>
                      <Button type="link" danger onClick={() => remove(name)}>
                        Remove
                      </Button>
                    </Space>
                  ))}
                  <Button type="dashed" onClick={() => add()} block icon={<GoPlus />} style={{ width: "100%" , height: 45 ,marginBottom: 20 }}>
                    Add Option
                  </Button>
                </div>
              )}
            </Form.List>
          )}

          <Form.Item className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-black text-white px-2 py-2 rounded text-[12px] "
            >
             +  Ask Another Question
            </button>
          </Form.Item>
        </Form>
      </div> 

        <div className="flex items-center justify-center mt-7" >
            <button className="bg-primary text-black px-8 py-2 rounded" type="submit" onClick={handleSubmitQuestions}>
            Submit Campaign Brief
            </button>
        </div>
    </div>
  );
};

export default AddQuestions;
