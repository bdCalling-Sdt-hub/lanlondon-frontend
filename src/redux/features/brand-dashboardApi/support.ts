import { baseApi } from "@/redux/base/baseApi";

const supportApi = baseApi.injectEndpoints({
  endpoints: (build) => ({  

    getSupport: build.query({
      query: () => ({
        url: "/support",
      }) 
    }), 

      createSupport: build.mutation({
        query: (data) => ({
          url: "/support",
          method: "POST",
          body: data,
        })
      }), 

   
  }) 
})  

export const {useGetSupportQuery , useCreateSupportMutation} = supportApi 

