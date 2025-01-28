/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/baseApi";

const businessInfoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({    
        createBusinessInfo: build.mutation({
            query: (data) => ({
                url: "/business",
                method: "POST",
                body: data,
            })
        }) , 

        getBusinessInfo: build.query({
            query: () => ({
                url: "/business",             
            }) ,
             transformResponse: (res: { data: any }) => res.data,
        }) ,
    }) 
}) 

export const {useCreateBusinessInfoMutation , useGetBusinessInfoQuery } = businessInfoApi