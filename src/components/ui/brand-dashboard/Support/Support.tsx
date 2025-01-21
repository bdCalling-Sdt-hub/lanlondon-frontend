/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';


const Support = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('');

    const press = {
        description: "Tradcouples Matchmaking Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions You deserve nothing less than extraordinary – find someone born for you."
    }

    const pressDataSave = async () => {

    }

    useEffect(() => {
        setContent(press?.description);
    }, [press])

    return (
        <div >
            <h1 className="text-xl font-semibold text-black pb-4">Support</h1>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={newContent => { setContent(newContent) }} 
                
            />

            <div className='flex items-center justify-center mt-5'>
                <button onClick={pressDataSave} type="submit" className="bg-black text-white w-[160px] h-[42px] rounded-lg">
                    Submit
                </button>

            </div>
        </div>
    );
};

export default Support;