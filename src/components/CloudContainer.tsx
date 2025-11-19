import type { ReactNode } from "react";
import Miku from "@/components/Miku.tsx";

interface CloudContainerProps {
    children: ReactNode;
}

export default function CloudContainer({ children }: CloudContainerProps) {
    return (
        <div>
            <div className="cloud relative">
                <Miku className="absolute bottom-2"/>
            </div>
            <div className="bg-white py-10 px-7">
                {children}
            </div>
            <div className="cloud reversed"></div>
        </div>
    )
}