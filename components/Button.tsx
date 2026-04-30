import { useRouter } from "next/navigation"

type Props = {
    children: React.ReactNode | string;
    src: string
}

export default function Button({ children, src }: Props) {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.push(src)}
            className="bg-blue-400/90 hover:bg-blue-400 max-md:w-20 max-md:h-9 w-35 h-15 text-black font-bold text-xl rounded-xl">
            {children}
        </button>
    )
}