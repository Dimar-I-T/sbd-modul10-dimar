import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/types/types";
import axios from "axios";

export async function POST(req: NextRequest) {
    const cookieStore = await cookies();
    try {
        const baseUrl = 'https://sbd-modul8-backend-dimar.vercel.app/user';
        const body = await req.json();
        const response = await axios.post(`${baseUrl}/login`, body);
        if (response) {
            const dataForStorage: User = {
                name: response.data.payload.name,
                username: response.data.payload.username,
                email: response.data.payload.email,
                phone: response.data.payload.phone,
                balance: response.data.payload.balance,
                token: response.data.payload.token
            }

            cookieStore.set("user", JSON.stringify(dataForStorage), {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24
            })

            return NextResponse.json({
                success: true,
                message: "Successfully Logged in",
                data: response.data.payload
            });
        }
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Failed logging in",
            error: JSON.stringify(error.response.data.message)
        })
    }
}