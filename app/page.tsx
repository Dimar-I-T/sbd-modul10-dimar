'use client'
import Image from "next/image";
import { User } from "./types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    phone: "",
    balance: 0,
    token: ""
  });

  useEffect(() => {
    const getUser = () => {
      const dataUser = localStorage.getItem('user');
      if (dataUser) {
        setUser(JSON.parse(dataUser));
      }
    }

    getUser();
  }, [])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-700 font-sans">
      {
        Object.entries(user).filter(([key]) => key != 'token').map(([key, value]) => (
          <h1 key={key} className="text-2xl">
            {key}: {value}
          </h1>
        ))
      }
    </div>
  );
}
