/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/baseApi"

const campaignApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createCampaign: build.mutation({
            query: (data) => ({
                url: "/campaign",
                method: "POST",
                body: data,
            })
        }), 

        updateCampaign: build.mutation({    
            query: (data) => ({
                url: "/campaign",
                method: "PATCH",
                body: data,
            })
        }),

        getCampaign: build.query({
            query: () => ({
                url: "/campaign",
            }),
            transformResponse: (response: { data: any }) => response.data
        }) , 

        createQuestions: build.mutation({ 
            query: (data) => ({
                url: "/question",
                method: "POST",
                body: data,
            })
        })

    })
})

export const { useCreateCampaignMutation , useGetCampaignQuery , useCreateQuestionsMutation , useUpdateCampaignMutation } = campaignApi