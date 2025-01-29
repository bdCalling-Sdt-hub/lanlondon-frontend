import { baseApi } from "@/redux/base/baseApi";

const footerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({   
    
            getPrivacy: build.query({ 
                query: () => ( {
                    url: "/rule/privacy-policy"
                } ) ,
                transformResponse: (res: { data: any }) => res.data 
            }) , 

            getAbout: build.query({ 
                query: () => ( {
                    url: "/rule/about"
                } ) ,
                transformResponse: (res: { data: any }) => res.data 
            }) , 


    }) 
}) 

export const {useGetAboutQuery , useGetPrivacyQuery} = footerApi