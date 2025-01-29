/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { imageUrl } from "@/redux/base/baseApi";
import { useApplicantsByIdQuery } from "@/redux/features/brand-dashboardApi/applicants";
import { useCreateFavoriteMutation } from "@/redux/features/brand-dashboardApi/favorite";
import { useCreateInitialChatMutation } from "@/redux/features/brand-dashboardApi/inbox";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";

export default function Details() {
  const { id } = useParams();
  const router = useRouter();
  const { data: details } = useApplicantsByIdQuery(id);
  const [createFavorite, { isSuccess, isError, error, data }] = useCreateFavoriteMutation()
  const [createInitialChat] = useCreateInitialChatMutation()

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          text: data?.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        })
      }
    }
    if (isError) {
      Swal.fire({
        //@ts-ignore
        text: error?.data?.message,
        icon: "error",
      })
    }
  }, [isSuccess, isError, error, data]);

  const handleFavorite = async (id: string) => {

    const data = {
      influencer: id
    }
    await createFavorite(data)
  }

  const handleMessage = async () => {

    const data = {
      influencer: details?.influencer?._id
    }
    await createInitialChat(data).then((res) => {

      if (res?.data?.success) {
        router.push("/inbox")
      }
    })
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <button
            className="hover:bg-gray-100 p-1 rounded-full"
            onClick={() => router.push("/applicants")}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold">Campaign Applicants</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm border border-black text-black rounded-md hover:bg-black hover:text-white" onClick={() => handleFavorite(details?.influencer?._id)} >
            Add to Favorite
          </button>

          <div
            onClick={handleMessage}
            className={`flex items-center justify-center gap-1  font-medium h-[45px] w-[120px] rounded-lg cursor-pointer bg-black text-white`}
          >
            <FiSend size={21} />
            <p>Message</p>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-xl">
        {/* Profile Card */}
        <div className="w-1/2 border border-gray-300 rounded-xl mb-6">
          <div className="rounded-lg p-4 my-2">
            <div className="flex items-center gap-5 px-4">
              <div className="w-[30%]">
                <img
                  src={
                    details?.influencer?.profile?.startsWith("http")
                      ? details?.influencer?.profile : `${imageUrl}${details?.influencer?.profile}`
                  }
                  alt={details?.influencer?.name || "Applicant"}
                  className="rounded-full h-[110px] w-[110px]"
                />
              </div>
              <div className="flex items-center">
                <div className="border-e-2 border-gray-200 p-4">
                  <h2 className="text-xl font-medium mb-2">
                    {details?.influencer?.name || "N/A"}
                  </h2>
                  <p className="text-gray-600 text-[16px] mb-3">
                    {details?.influencer?.about ||
                      "Bio not available."}
                  </p>
                </div>
                <div className="flex flex-col ps-3 gap-4">
                  <div className="flex items-center gap-1">
                    <FaFacebookF size={20} className="text-blue-600" />
                    <span className="text-sm font-medium">2.2K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiFillInstagram size={21} className="text-pink-600" />
                    <span className="text-sm">2.2K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaYoutube size={22} className="text-red-600" />
                    <span className="text-sm">2.2K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaTiktok size={20} />
                    <span className="text-sm">2.2K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          {details?.questions?.map((q: { _id: string; question: string; answer: string; }) => (
            <FormField key={q._id} label={q.question} placeholder={q.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
}

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-[16px] text-gray-600 mb-1.5">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md border bg-gray-50 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}
