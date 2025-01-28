
import { baseApi } from "@/redux/base/baseApi"

const applicantsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({    
        
        getApplicants: build.query({   
            query: ({search , page}) => {    
                const params = new URLSearchParams() 

                if(search){
                    params.append("search" , search)
                } 

                if(page){
                    params.append("page" , page)
                } 

                return{
                    url: `/application?${params.toString()}`,    
                }
                          
            }  , 
            transformResponse: (res: { data: any }) => res.data,
        }), 

         updateStatus: build.mutation({  
            query: (data) => ({   
                url: "/application",
                method: "PATCH",
                body: data,
            }) 
        }), 

        applicantsById: build.query({  
            query: (id) => ({   
                url: `/application/${id}`,
            })  , 
            transformResponse: (res: { data: any }) => res.data,
        }),
        
    }) 
}) 

export const {useGetApplicantsQuery , useUpdateStatusMutation , useApplicantsByIdQuery} = applicantsApi