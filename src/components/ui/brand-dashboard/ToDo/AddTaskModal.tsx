import { Form, Input, Modal } from 'antd';
import React from 'react';

const AddTaskModal = ({ isModalOpen, setIsModalOpen }:{ isModalOpen: boolean, setIsModalOpen: (value: boolean) => void }) => { 
    const [form] = Form.useForm() 
   
    const handleAddTask = () => {
        setIsModalOpen(false);
      }; 

    return (
        <Modal
        title="Adding New Task"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500} 
        centered
        className=""
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddTask}
          className="mt-6"
        >
          <Form.Item
            name="subject"
            label="Subject :"
            className="mb-4"
            rules={[{ required: true, message: 'Please enter a subject' }]}
          >
            <Input className="rounded-md border-gray-300" style={{ height:"45px"}} />
          </Form.Item>

          <Form.Item
            name="details"
            label="Details :"
            className="mb-8" 
            rules={[{ required: true, message: 'Please enter a Details' }]}
          >
            <Input.TextArea 
              rows={6}
              className="rounded-md border-gray-300 " 
              style={{ 
                resize: "none",
              }}
            />
          </Form.Item>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-black  w-24 py-2 rounded"
            >
              Save
            </button>
          </div>
        </Form>
      </Modal>
    );
};

export default AddTaskModal;