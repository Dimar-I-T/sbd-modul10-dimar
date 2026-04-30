'use client'

import React, { useState } from "react"
import { LoginForm, User } from "@/app/types/types"
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
    const baseUrl = 'http://localhost:3000/user';
    const router = useRouter();
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/login`, loginForm);
            if (response) {
                const dataForStorage : User = {
                    name: response.data.payload.name,
                    username: response.data.payload.username,
                    email: response.data.payload.email,
                    phone: response.data.payload.phone,
                    balance: response.data.payload.balance,
                    token: response.data.payload.token
                }

                // janlup kalau get diparse
                localStorage.setItem("user", JSON.stringify(dataForStorage));
                alert('Successfully Logged in!\n' + JSON.stringify(response.data));
                router.push('/');
            }
        } catch (error: any) {
            alert('Cannot Login: ' + JSON.stringify(error.response.data.message));
        }
    }

    const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setLoginForm((prev) => ({
            ...prev,
            [key]: newValue
        }));
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-3 justify-center items-center bg-gray-700">
            <div className="md:w-[400px] w-full p-10 max-md:p-8 rounded-xl bg-black/50">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Email
                        </h1>

                        <input
                            type="text"
                            value={loginForm.email}
                            onChange={(e) => handleChange("email", e)}
                            placeholder="Enter your email here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Password
                        </h1>

                        <input
                            type="password"
                            value={loginForm.password}
                            onChange={(e) => handleChange("password", e)}
                            placeholder="Enter your password here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>

                    <button
                        type="submit" 
                        className="w-full h-15 rounded-xl text-xl text-black font-bold bg-blue-500/90 hover:bg-blue-500 text-center flex justify-center items-center">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}