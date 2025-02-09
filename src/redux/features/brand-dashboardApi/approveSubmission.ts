import { baseApi } from "@/redux/base/baseApi";

const approveSubmissionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({     

getApprovedSubmission: build.query({
    query: () => ({
        url: `application/approved`,
        method: "GET",
    }), 
    transformResponse: (res: { data: any }) => res.data,
}),

    }) 
}) 

export const {useGetApprovedSubmissionQuery} = approveSubmissionApi