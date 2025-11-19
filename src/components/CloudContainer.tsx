import type {ReactNode} from "react";
import Miku from "@/components/Miku.tsx";

interface CloudContainerProps {
  children: ReactNode;
}

export default function CloudContainer({children}: CloudContainerProps) {
  return (
    <div>
      <div className="relative h-[105px]">
        <Miku className="absolute bottom-0"/>
        <div className="cloud absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="bg-white py-10 px-7">
        {children}
      </div>
      <div className="cloud reversed"></div>
    </div>
  )
}
