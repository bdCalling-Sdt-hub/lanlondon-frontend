
import { GetLocalStorage } from "@/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.0.80.75:6005/api/v1" ,
      // baseUrl: "http://192.168.10.15:8000/api/v1" , 
      prepareHeaders: (headers) => {
        const token = GetLocalStorage("creatorToken");
        if (token) {
          headers.set("Authorization", `${token}`);
        }
        return headers;
      },
    }),
  endpoints: () => ({}), 
  tagTypes: ["favorites" , "chats"],
});

// export const imageUrl = "http://192.168.10.15:8000/";
export const imageUrl = "http://10.0.80.75:6005/"; 
export const socketURL = "http://10.0.80.75:6005" 