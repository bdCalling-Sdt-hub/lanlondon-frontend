import { baseApi } from "@/redux/base/baseApi";

const faqApi = baseApi.injectEndpoints({
    endpoints: (build) => ({   
 
        getFaq: build.query({ 
            query: () => ( {
                url: "/faq"
            } ) ,
            transformResponse: (res: { data: any }) => res.data
        }) ,
    }) 
}) 

export const {useGetFaqQuery} = faqApi