import { baseApi } from "@/redux/base/baseApi"

const inboxApi = baseApi.injectEndpoints({
    endpoints: (build) => ({    
 
        createInitialChat: build.mutation({
            query: (value) => {
                return {
                    method: "POST",
                    url: `/chat`,      
                    body: value           
                }
            }, 

            invalidatesTags: ["chats"]
        }),

        getChatList: build.query({ 
            query: (search) => {  
                const params= new URLSearchParams() 
               if(search) params.append('search', search)
                return {
                    url: `/chat?${params.toString()}`,
                }
            } , 
            providesTags: ["chats"]
        }),

        sendMessage: build.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/message",
                    body: data,
                }
            }, 
        }),

        getMessageList: build.query({
            query: (id) => {
                return {
                    url: `/message/${id}`,

                }
            } ,   
        }), 

        reportUser: build.mutation({
            query: (data) => ({
                method: "POST",
                url: "/report",
                body: data,
            }),
        }),

    }) 
}) 

export const {useCreateInitialChatMutation , useGetChatListQuery , useSendMessageMutation , useGetMessageListQuery ,  useReportUserMutation} = inboxApi