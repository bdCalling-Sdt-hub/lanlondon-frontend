import { baseApi } from "@/redux/base/baseApi"

const favoriteApi = baseApi.injectEndpoints({
    endpoints: (build) => ({  

        getFavorite: build.query({ 
            query: () => ({
                url: "/favorite",               
            })
        }), 

        createFavorite: build.mutation({
            query: (data) => ({
                url: "/favorite",
                method: "POST",
                body: data,
            })
        }),

    }) 
}) 

export const { useGetFavoriteQuery , useCreateFavoriteMutation} = favoriteApi