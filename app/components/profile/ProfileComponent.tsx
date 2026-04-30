'use client'
import { Props } from "@/app/types/types"
import CardDefault from "@/components/CardDefault"

export default function ProfileComponent({ user }: Props) {
    return (
        <div className="flex flex-col flex-1 items-center px-3 justify-center bg-gray-800 font-sans">
            <CardDefault width={300}>
                <h1 className="text-2xl font-extrabold text-blue-400">
                    Profile
                </h1>

                <div className="mt-3 flex flex-col gap-5">
                    {Object.entries(user).filter(([key]) => key !== 'token').map(([key, value]) => (
                        <h1 key={key} className="text-xl font-bold text-blue-400">
                            {key}: <span className="text-white font-medium"> {value} </span>
                        </h1>
                    ))}
                </div>
            </CardDefault>
        </div>
    )
}