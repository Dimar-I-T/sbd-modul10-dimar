'use client'
import { Props } from "@/app/types/types"
import Button from "@/components/Button"
import CardDefault from "@/components/CardDefault"

export default function HomeComponent({ user }: Props) {
    return (
        <div className="flex flex-col flex-1 items-center px-3 justify-center bg-gray-800 font-sans">
            <CardDefault>
                <h1 className="text-2xl font-extrabold text-blue-400">
                    Welcome to DimarStore!
                </h1>

                <p className="text-xl text-white">
                    This is DimarStore, a platform where you can buy anything you like. We sell original stuff only btw.
                </p>

                <div className="w-full flex flex-row justify-center items-center gap-5">
                    {user &&
                        <>
                            <Button src="/items">
                                Items
                            </Button>
                            <Button src="/profile">
                                Profile
                            </Button>
                        </>
                    }

                    {!user &&
                        <>
                            <Button src="/auth/register" >
                                Register
                            </Button>
                            <Button src="/auth/login">
                                Login
                            </Button>
                        </>
                    }
                </div>
            </CardDefault>
        </div>
    )
}