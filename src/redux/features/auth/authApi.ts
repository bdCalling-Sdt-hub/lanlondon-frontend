import { baseApi } from "@/redux/base/baseApi";

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
      query: (value) => {
        return {
          url: "/auth/reset-password",
          headers: { "authorization": localStorage.getItem("resetToken") },
          method: "POST",
          body: value
        }
      }
    }),

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
  useResetPasswordsMutation,
  useForgetPasswordMutation,
  useBrandProfileQuery,
  useUpdateProfileMutation
} = authApi;