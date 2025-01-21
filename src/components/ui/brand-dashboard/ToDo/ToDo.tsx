"use client";
import { useState } from 'react';
import { Input, Button, List } from 'antd';
import { StarOutlined, StarFilled, DeleteOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import AddTaskModal from './AddTaskModal';

interface Todo {
  id: string;
  text: string;
  starred: boolean;
}

function ToDo() {  
    const [isModalOpen, setIsModalOpen] = useState(false); 
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Review applicants',
      starred: true,
    },
    {
      id: '2',
      text: 'Leave a review for the influencer',
      starred: false,
    },
    {
      id: '3',
      text: 'Review Submissions',
      starred: false,
    },
  ]);

  const toggleStar = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, starred: !todo.starred } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div >
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>  

        <div className=' flex items-center gap-5'> 
      <h1 className="text-xl font-semibold text-black">To Do List</h1>   
      <Input
        prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
        placeholder="Search"
        style={{  height:"43px" , width:"400px" }}
      />
        </div>
        <button  className=' flex items-center gap-1 px-4 py-1.5 text-[14px] border-2 border-black/50 text-gray-700 rounded-md   ' onClick={() => setIsModalOpen(true)} >  
            <span> <PlusOutlined /></span>
  <span>    Add New Task </span>       
        </button>
      </div>

   
<List
  dataSource={todos}
  renderItem={(todo) => (
    <List.Item
      key={todo.id} 
      className=' bg-white  mb-5 px-8 py-6 rounded-lg '
      actions={[
        <>
          <Button
            type="text" 
            className=' text-xl'
            icon={todo.starred ? <StarFilled style={{ color: '#faad14' }} size={28} /> : <StarOutlined size={28}  />}
            onClick={() => toggleStar(todo.id)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => deleteTodo(todo.id)}
          />
        </>
      ]}
    > 
    <div className=' px-6  text-[18px] '>
      <p>{todo.text}</p>
    </div>
    </List.Item>
  )}
  style={{
  
    borderRadius: '8px',
    padding: '8px' , 
   
  }}
/> 

<AddTaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div> 
  );
}

export default ToDo;