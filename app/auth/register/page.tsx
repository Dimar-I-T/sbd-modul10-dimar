'use client'

import React, { useState } from "react"
import { RegisterForm } from "@/app/types/types"
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
    const baseUrl = 'http://localhost:3000/user';
    const router = useRouter();
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/register`, registerForm);
            if (response) {
                alert('Successfully Registered!\n' + JSON.stringify(response.data));
                router.push('/auth/login');
            }
        } catch (error: any) {
            alert('Cannot register: ' + JSON.stringify(error.response.data.message));
        }
    }

    const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setRegisterForm((prev) => ({
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
                            Name
                        </h1>

                        <input
                            type="text"
                            value={registerForm.name}
                            onChange={(e) => handleChange("name", e)}
                            placeholder="Enter your name here"
                            className="border w-full rounded-xl h-10 px-3"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Username
                        </h1>

                        <input
                            type="text"
                            value={registerForm.username}
                            onChange={(e) => handleChange("username", e)}
                            placeholder="Enter your username here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Email
                        </h1>

                        <input
                            type="text"
                            value={registerForm.email}
                            onChange={(e) => handleChange("email", e)}
                            placeholder="Enter your email here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Phone Number
                        </h1>

                        <input
                            type="text"
                            value={registerForm.phone}
                            onChange={(e) => handleChange("phone", e)}
                            placeholder="Enter your phone number here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">
                            Password
                        </h1>

                        <input
                            type="password"
                            value={registerForm.password}
                            onChange={(e) => handleChange("password", e)}
                            placeholder="Enter your password here"
                            className="border w-full rounded-xl h-10 px-5"
                        />
                    </div>

                    <button
                        type="submit" 
                        className="w-full h-15 rounded-xl text-xl text-black font-bold bg-blue-500/90 hover:bg-blue-500 text-center flex justify-center items-center">
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    )
}