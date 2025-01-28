import { baseApi } from "@/redux/base/baseApi";

const todoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({    
 
        getTodo:build.query({   
            query: () => ({
                url: "/todo",             
            })  , 
            transformResponse: (res: { data: any }) => res.data,
        }) ,   

        makeTodo:build.mutation({   
            query: (data) => ({
                url: "/todo",
                method: "POST",
                body: data,
            }) 
        }) ,  

        updateTodo:build.mutation({   
            query: (id) => ({
                url: `/todo/${id}`,
                method: "PATCH",      
            }) 
        }) , 

        deleteTodo:build.mutation({   
            query: (id) => ({
                url: `/todo/${id}`,
                method: "DELETE",
            }) 
        })


    }) 
}) 

export const {useDeleteTodoMutation , useGetTodoQuery , useMakeTodoMutation , useUpdateTodoMutation } = todoApi