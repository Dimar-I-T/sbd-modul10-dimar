'use server'
import { cookies } from "next/headers";

export default async function getUser() {
    const dataUser = (await cookies()).get('user')?.value;
    if (!dataUser){
        return null;
    }

    try {
        return JSON.parse(dataUser);
    } catch {
        return null;
    }
}