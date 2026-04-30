type Props = {
    children: React.ReactNode;
    width?: number;
}

export default function CardDefault({ children, width=600 }: Props) {
    return (
        <div className={`w-[${width}px] max-md:w-full px-7 py-5 flex flex-col gap-5 bg-black/50 rounded-xl`}>
            {children}
        </div>
    )
}