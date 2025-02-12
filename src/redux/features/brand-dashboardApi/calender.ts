/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/baseApi"

const calenderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        makeNotes: build.mutation({
            query: (data) => ({
                url: "/note",
                method: "POST",
                body: data,
            })
        }),

        getNotes: build.query({
            query: () => ({
                url: "/note",
            }),
            transformResponse: (response: { data: any }) => response.data
        }),
    })
})

export const { useGetNotesQuery , useMakeNotesMutation } = calenderApi