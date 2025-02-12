/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/baseApi"

const notificationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({   

        getNotification: build.query({
            query: (page) => {   
                const params= new URLSearchParams() 
                if(page) params.append('page', page)
                return{
                    url: `/notification?${params.toString()}` ,
                }
            }  , 
            transformResponse: (response:{ data: any}) => response.data
        }), 

        readNotification: build.mutation({
            query: () => ({
                url: `/notification`,
                method: "PATCH",
            })
        }),

    }) 
}) 

export const {useGetNotificationQuery , useReadNotificationMutation} = notificationApi