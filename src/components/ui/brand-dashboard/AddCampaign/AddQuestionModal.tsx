
import { Modal, Form, Input, Select, Button, Space } from "antd";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

const { Option } = Select;

const AddQuestionModal = ({open , setOpen}:{open: boolean, setOpen: (value: boolean) => void}) => { 

    const [form] = Form.useForm();
    const [showOptionsField, setShowOptionsField] = useState(false);
    const [options, setOptions] = useState<string[]>([]);
  
    const handleSelectChange = (value: string) => {
      setShowOptionsField(value === "option");
    };
  
    const handleAddOption = () => {
      const currentOption = form.getFieldValue("currentOption");
      if (currentOption && !options.includes(currentOption)) {
        setOptions([...options, currentOption]);
        form.setFieldsValue({ currentOption: "" });
      }
    };
  
    const handleRemoveOption = (option: string) => {
      setOptions(options.filter((opt) => opt !== option));
    };
  
    const handleSubmit = (values: { questionName: string, type: string, currentOption: string }) => {
      console.log("Form Values:", values);
      setOpen(false);
      form.resetFields();
    }; 

    return (
        <div>
                   <Modal
      title="Add Question"
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={500}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ type: "input" }}
      >
        {/* Question Name */}
        <Form.Item
          name="questionName"
          label="Question Name"
          rules={[{ required: true, message: "Please enter a question name" }]}
        >
          <Input placeholder="Enter question name" style={{ height: 45 }} />
        </Form.Item>

        {/* Question Type */}
        <Form.Item
          name="type"
          label="Question Type"
          rules={[{ required: true, message: "Please select a question type" }]}
        >
          <Select placeholder="Select question type" onChange={handleSelectChange} style={{ height: 45 }}>
            <Option value="number">Number</Option>
            <Option value="input">Input</Option>
            <Option value="boolean">Boolean</Option>
            <Option value="option">Options</Option>
          </Select>
        </Form.Item>

        {/* Options Field (visible when 'option' is selected) */}
        {showOptionsField && (
          <div>
            <Form.Item label="Add Options">
              <Space>
                <Form.Item
                  name="currentOption"
                  noStyle
                  rules={[{ required: true, message: "Please enter an option" }]}
                >
                  <Input placeholder="Enter option" style={{ height: 40 }} />
                </Form.Item>
                <button  className="bg-black text-white px-4 py-2 rounded" onClick={handleAddOption}>
                 <GoPlus color="white" size={20} />
                </button>
              </Space>
            </Form.Item>

            <div>
              {options.map((option, index) => (
                <div key={index} className="flex items-center justify-between mb-2 border border-gray-100 p-1 ps-3">
                  <span>{option}</span>
                  <Button
                    type="link"
                    danger
                    onClick={() => handleRemoveOption(option)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Form.Item className=" flex items-center justify-end">
          <button type="submit" className="bg-black text-white px-8 py-2 rounded mt-6">
            Submit
          </button>
        </Form.Item>
      </Form>
    </Modal>
        </div>
    );
};

export default AddQuestionModal;