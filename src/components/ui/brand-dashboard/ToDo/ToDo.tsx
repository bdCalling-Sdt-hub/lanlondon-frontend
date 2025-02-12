/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RiDeleteBin6Line } from "react-icons/ri";
import AddTaskModal from './AddTaskModal';
import { useDeleteTodoMutation, useGetTodoQuery, useUpdateTodoMutation } from '@/redux/features/brand-dashboardApi/todo';
import { GoStar, GoStarFill } from 'react-icons/go';
import Swal from 'sweetalert2';

function ToDo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: AllTodos, refetch } = useGetTodoQuery(undefined);
  const [deleteTodo] = useDeleteTodoMutation() 
  const [updateTodo] = useUpdateTodoMutation()
  // console.log(AllTodos);

  const todos = AllTodos?.map((todo: { _id: string, subject: string, details: string, important: boolean }) => ({
    id: todo?._id,
    subject: todo?.subject,
    details: todo?.details,
    important: todo?.important
  }))

  const toggleStar = async(id: string) => { 

    await updateTodo(id).then((res) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch();
        });
      } else {
        Swal.fire({
          title: "Oops",
          //@ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      } 
    })

  };

  const handleDeleteTodo = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTodo(id).then((res) => {
          if (res?.data?.success) {
            Swal.fire({
              text: res?.data?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              refetch();
            });
          } else {
            Swal.fire({
              title: "Oops", 
              //@ts-ignore
              text: res?.error?.data?.message,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }

        })
      }
    });
  };

  return (
    <div >
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <div className=' flex items-center gap-5'>
          <h1 className="text-xl font-semibold text-black">To Do List</h1>
        </div>
        <button className=' flex items-center gap-1 px-4 py-1.5 text-[14px] border-2 border-black/50  rounded-md text-white bg-black  ' onClick={() => setIsModalOpen(true)} >
          <span> <PlusOutlined /></span>
          <span>    Add New Task </span>
        </button>
      </div>


      <div>
        {
          todos?.map((todo: { id: string, subject: string, details: string, important: boolean }) => <div key={todo.id} className='bg-white  mb-5 px-8 py-6 rounded-lg'>

            <div className=' flex items-center justify-between  '>
              <p className=' text-[18px] '> {todo?.subject} </p>

              <div className=' flex items-center gap-2'>
                <Button
                  type="text"
                  className=' text-xl'
                  icon={todo.important ? <GoStarFill color='#FFC000' size={28} /> : <GoStar color='#FFC000' size={24} />}
                  onClick={() => toggleStar(todo.id)}
                />
                <Button
                  type="text"
                  danger
                  icon={<RiDeleteBin6Line size={24} color='#d62a05' />}
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </div>
            </div>

            <p className=' text-gray-500 text-[16px]'> {todo?.details}</p>
          </div>)

        }
      </div>
      <AddTaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} refetch={refetch} />
    </div>
  );
}

export default ToDo;