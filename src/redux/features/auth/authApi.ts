import { baseApi } from "@/redux/base/baseApi";
import { GetLocalStorage } from "@/util/LocalStroage";
const resetToken = GetLocalStorage("resetToken")  
console.log(resetToken);
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    createUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      })
    }),

    loginUser: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: build.mutation({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
    }),

    forgetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPasswords: build.mutation({
      query:(value)=>({
          url:"/auth/reset-password" ,
          headers: {authorization: resetToken},
          method:"POST" ,
          body: value
      })
  }) ,  

    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
  useVerifyEmailMutation,
 useResetPasswordsMutation ,
  useForgetPasswordMutation
} = authApi;