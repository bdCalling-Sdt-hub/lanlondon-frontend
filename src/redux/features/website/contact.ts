import { baseApi } from "@/redux/base/baseApi";

const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({   
 
        makeContact: build.mutation({
            query: (data) => ({
                url: "/contact",
                method: "POST",
                body: data,
            })  
        }),
    }) 
}) 

export const {useMakeContactMutation} = contactApi