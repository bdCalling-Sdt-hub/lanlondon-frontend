/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useCreateRechargeMutation } from "@/redux/features/brand-dashboardApi/budget";
import { Modal, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddFundsModal = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void, }) => {
  const [form] = Form.useForm(); 
  const [createRecharge , { isError , isSuccess , data , error }] = useCreateRechargeMutation()  
  const router = useRouter() 

  
   useEffect(() => {
     if (isSuccess) {
       if (data) {
         Swal.fire({
           text: data?.message,
           icon: "success",
           timer: 1500,
           showConfirmButton: false
         }).then(() => { 
          router.push(data?.data)
          setOpen(false);
          form.resetFields();
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
   }, [isSuccess, isError, error, data, form, setOpen , router]);

  const handleSubmit = async(values: { amount: string }) => {
   
    const data = {
      amount: parseInt(values.amount)
    }
    await createRecharge(data)
   
  };

  return (
    <div>
      <Modal
      
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
          className=" mt-6"
        >
          {/* Question Name */}
          <Form.Item
            name="amount"
            label="Amount £ (GBP)"
            rules={[{ required: true, message: "Please enter a amount" }]}
          >
            <Input placeholder="Enter amount" style={{ height: 45 }} />
          </Form.Item>




          {/* Submit Button */}
          <Form.Item className=" flex items-center justify-end">
            <button type="submit" className="bg-black text-white px-8 py-2 rounded mt-2">
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddFundsModal;