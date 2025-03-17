
import { GetLocalStorage } from "@/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.creatorbriefs.com/api/v1" ,
      // baseUrl: "http://192.168.10.15:8000/api/v1" , 
      prepareHeaders: (headers) => {
        const token = GetLocalStorage("creatorToken");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  endpoints: () => ({}), 
  tagTypes: ["favorites" , "chats"],
});

// export const imageUrl = "http://192.168.10.15:8000/";
export const imageUrl = "https://api.creatorbriefs.com"; 
export const socketURL = "https://api.creatorbriefs.com" 