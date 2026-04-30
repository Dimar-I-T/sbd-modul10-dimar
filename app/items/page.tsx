'use client'

import { useState, useEffect } from "react"
import { Item } from "../types/types"
import axios from "axios"

export default function Items() {
    const baseUrl = "http://localhost:3000/items";
    const [items, setItems] = useState<Item[]>([])
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const getToken = () => {
            const user = localStorage.getItem('user');
            if (user) {
                const userJson = JSON.parse(user);
                setToken(JSON.stringify(userJson.token));
            }
        }

        getToken();
    }, []);

    useEffect(() => {
        const getItems = async () => {
            const bearerToken = 'Bearer ' + token;
            try {
                const result = await axios.get(`${baseUrl}`, {headers: {
                    'Authorization': bearerToken,
                    'Content-Type': 'application/json'
                }});

                if (result) {
                    setItems(result.data.payload);
                }
            } catch (error: any) {
                alert("There's an error retrieving items " + JSON.stringify(error.response.data.message));
            }
        }

        getItems();
    }, [token]);

    return (
        <div className="w-full min-h-screen mt-15 bg-gray-800 flex flex-col p-10 items-center gap-5">
            {items.map((isi, index) => (
                <div key={index} className="w-[500px] flex flex-col bg-black/50 rounded-xl p-5">
                    <h1 className="text-xl font-bold text-blue-400">
                        {isi.name}
                    </h1>

                    <h1 className="text-xl font-bold text-blue-400">
                        Price: <span className="text-white font-medium"> {isi.price} </span>
                    </h1>

                    <h1 className="text-xl font-bold text-blue-400">
                        Stock: <span className="text-white font-medium"> {isi.stock} </span>
                    </h1>
                </div>
            ))}
        </div>
    )
}