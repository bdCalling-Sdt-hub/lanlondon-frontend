"use client"
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import io, { Socket } from "socket.io-client";
import { useMemo } from "react";
import { socketURL } from '@/redux/base/baseApi';
import { useBrandProfileQuery } from '@/redux/features/auth/authApi';


interface UserContextType {
    user: null;
    socket: Socket;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: profile } = useBrandProfileQuery(undefined)
    const [user, setUser] = useState(null);
    const socket = useMemo(() => io(socketURL), []);

    useEffect(() => {
        const handleConnection = () => {
            console.log("Connected to socket server");
        };

        socket.on("connect", handleConnection);
        return () => {
            socket.off('connect', handleConnection);
        };

    }, [socket]);



    useEffect(() => {
        if (profile) {
            setUser(profile?.data);
        }
    }, [profile])


    return (
        <UserContext.Provider value={{ user, socket, setUser }}>
            {children}
        </UserContext.Provider>
    )
}