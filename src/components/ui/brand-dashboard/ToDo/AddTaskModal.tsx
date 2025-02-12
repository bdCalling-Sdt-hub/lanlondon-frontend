/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMakeTodoMutation } from '@/redux/features/brand-dashboardApi/todo';
import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AddTaskModal = ({ isModalOpen, setIsModalOpen , refetch }:{ isModalOpen: boolean, setIsModalOpen: (value: boolean) => void , refetch: () => void }) => { 
    const [form] = Form.useForm()  
    const [makeTodo , { isError , isSuccess , data , error }] = useMakeTodoMutation() 
 
   useEffect(() => {
     if (isSuccess) {
       if (data) {
         Swal.fire({
           text: data?.message,
           icon: "success",
           timer: 1500,
           showConfirmButton: false
         }).then(() => {  
           form.resetFields(); 
           setIsModalOpen(false);
           refetch();
         })
       }
     }
     if (isError) {
       Swal.fire({
         //@ts-ignore
         text: error?.data?.message,
         icon: "error",
       })
     }
   }, [isSuccess, isError, error, data, form, setIsModalOpen , refetch ]); 
   
    const handleAddTask = async(values:{subject:string , details:string}) => { 
      // console.log(values); 

      await makeTodo(values)
       
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