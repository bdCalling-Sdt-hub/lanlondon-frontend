import { baseApi } from "@/redux/base/baseApi";

const budgetApi = baseApi.injectEndpoints({
    endpoints: (build) => ({   
        
        getBudget: build.query({
            query: () => ({
                url: "/wallet",
            }),
            transformResponse: (response: { data: any }) => response.data
        }) , 

        createRecharge: build.mutation({
            query:(data)=>({
                url: "/recharge",
                method: "POST",
                body: data,
            })
        })

    }) 
}) 

export const {useCreateRechargeMutation , useGetBudgetQuery } = budgetApi