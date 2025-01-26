/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

import Swal from 'sweetalert2';
import { useCreateSupportMutation } from '@/redux/features/brand-dashboardApi/support';

const Support = () => {
    const editor = useRef(null);
    const { data: support, refetch } = useSupportQuery()
    const [createSupport] = useCreateSupportMutation()
    const supportContents = support?.data
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(supportContents?.content)
    }, [supportContents])

    const handleSubmit = async () => {
        const data = {
          message: content
        }
            await createSupport(data).then((res) => {
                if (res?.data?.success) {
                    Swal.fire({
                        text: res?.data?.message,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        refetch();

                    })
                } else {
                    Swal.fire({
                        title: "Oops", 
                        //@ts-ignore
                        text: res?.error?.data?.message,
                        icon: "error",
                        timer: 1500,
                        showConfirmButton: false,
                    });

                }
            })
       
    }

    return (
        <div className=" ">
            <h1 className="text-xl font-semibold text-black pb-4">Support</h1>
            <div>

                <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />
            </div>
            <div className="flex items-center justify-center mt-5">
        <button
          type="submit"
          className="bg-black text-white w-[160px] h-[42px] rounded-lg" 
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
        </div>
    );
};

export default Support;