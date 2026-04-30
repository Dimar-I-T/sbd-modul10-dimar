"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Props } from "../types/types";
import axios from "axios";

export default function Header({ user }: Props) {
    const router = useRouter();
    const [dropdown, setDropdown] = useState<boolean>(false);

    const handleLogout = async () => {
        axios.post('/api/auth/logout').then(() => {
            router.replace('/auth/login');
            router.refresh();
        })
    }

    return (
        <div className="fixed z-10 w-full bg-black h-20 max-md:h-15 flex flex-row justify-between items-center px-20 max-md:px-5">
            <button
                onClick={() => { router.push('/') }}
                className="bg-transparent flex justify-center items-center m-0">
                <h1 className="text-2xl max-md:text-[15px] font-extrabold text-blue-400 select-none cursor-pointer">
                    DimarStore
                </h1>
            </button>

            <button
                onClick={() => { setDropdown(!dropdown) }}
                className="md:hidden flex flex-col gap-1 justify-center items-center w-5 h-5 cursor-pointer">
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
            </button>

            {dropdown &&
                <div className="absolute bg-black/50 rounded-md w-20 flex flex-col justify-center py-2 items-center gap-2 top-0 right-0 mt-15">
                    {user &&
                        <>
                            <button
                                onClick={() => { router.push('/items') }}
                                className="text-sm bg-transparent text-blue-400 cursor-pointer ">
                                Items
                            </button>

                            <button
                                onClick={() => { router.push('/profile') }}
                                className="text-sm bg-transparent text-blue-400 cursor-pointer">
                                Profile
                            </button>

                            <button
                                onClick={handleLogout}
                                className="text-sm bg-transparent text-blue-400 cursor-pointer">
                                Logout
                            </button>
                        </>
                    }

                    {!user &&
                        <>
                            <button
                                onClick={() => { router.push('/auth/register') }}
                                className="text-sm bg-transparent text-blue-400 cursor-pointer ">
                                Register
                            </button>

                            <button
                                onClick={() => { router.push('/auth/login') }}
                                className="text-sm bg-transparent text-blue-400 cursor-pointer">
                                Login
                            </button>
                        </>
                    }
                </div>
            }

            <div className="max-md:hidden flex flex-row gap-10 justify-center items-center">
                {user &&
                    <>
                        <button
                            onClick={() => { router.push('/items') }}
                            className="bg-transparent flex justify-center items-center m-0">
                            <h1 className="text-xl font-bold text-blue-400 select-none cursor-pointer">
                                Items
                            </h1>
                        </button>

                        <button
                            onClick={() => { router.push('/profile') }}
                            className="bg-transparent flex justify-center items-center m-0">
                            <h1 className="text-xl font-bold text-blue-400 select-none cursor-pointer">
                                Profile
                            </h1>
                        </button>

                        <button
                            onClick={handleLogout}
                            className="bg-transparent flex justify-center items-center m-0">
                            <h1 className="text-xl font-bold text-blue-400 select-none cursor-pointer">
                                Logout
                            </h1>
                        </button>
                    </>
                }

                {!user &&
                    <>
                        <button
                            onClick={() => { router.push('/auth/register') }}
                            className="bg-transparent flex justify-center items-center m-0">
                            <h1 className="text-xl font-bold text-blue-400 select-none cursor-pointer">
                                Register
                            </h1>
                        </button>

                        <button
                            onClick={() => { router.push('/auth/login') }}
                            className="bg-transparent flex justify-center items-center m-0">
                            <h1 className="text-xl font-bold text-blue-400 select-none cursor-pointer">
                                Login
                            </h1>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}