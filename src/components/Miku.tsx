import {useEffect, useState} from "react";
import mikuSvg from "../assets/Miku-logo512.svg?url"

interface MikuProps {
    className?: string;
}

export default function Miku({ className }: MikuProps) {
    const [positionX, setPositionX] = useState(0)

    const resolvePosition = () => {
        const element = document.getElementById('hero-title')
        if (element == null) {
            return
        }

        const offset = ((document.body.clientWidth - element.offsetWidth) / 2) + element.offsetWidth
        setPositionX(offset - 100)
    }

    useEffect(() => {
        window.addEventListener('resize', () => resolvePosition())
        resolvePosition()
    }, []);

    if (positionX === 0) {
        return
    }

    return (
      <img id="miku" className={className} style={{ left: positionX }} src={mikuSvg} alt="" />
    )
}
