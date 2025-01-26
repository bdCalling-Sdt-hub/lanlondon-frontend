import { baseApi } from "@/redux/base/baseApi"

const campaignApi = baseApi.injectEndpoints({
    endpoints: (build) => ({    

 createCampaign: build.mutation({
    query: (data) => ({
        url: "/campaign",
        method: "POST",
        body: data,     
    })
 })
    }) 
}) 

export const { useCreateCampaignMutation} = campaignApi