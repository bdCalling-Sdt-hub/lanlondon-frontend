"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Support = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1 className="text-xl font-semibold text-black pb-4">Support</h1>
      <JoditEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <div className="flex items-center justify-center mt-5">
        <button
          type="submit"
          className="bg-black text-white w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Support;
