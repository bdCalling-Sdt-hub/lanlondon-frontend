import { baseApi } from "@/redux/base/baseApi";
import { GetLocalStorage } from "@/util/LocalStroage";
const resetToken = GetLocalStorage("resetToken")  


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
      query:(value)=>{ 

        console.log("value", value);
        return {
          url:"/auth/reset-password" ,
          headers: {authorization: resetToken},
          method:"POST" ,
          body: value 
        }
      }

  }) ,  

    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }), 

    brandProfile: build.query({
      query: () => "/user/profile",
    }),  

    updateProfile: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
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
  useForgetPasswordMutation , 
  useBrandProfileQuery, 
  useUpdateProfileMutation
} = authApi;