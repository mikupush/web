import {useEffect, useState} from "react";

export type Platform = "windows" | "macos" | "linux" | "other";

export function usePlatform() {
  const [platform, setPlatform] = useState<Platform>('other')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("win")) {
      setPlatform("windows")
    } else if (userAgent.includes("mac os")) {
      setPlatform("macos")
    } else if (userAgent.includes("linux")) {
      setPlatform("linux")
    } else {
      setPlatform("other")
    }
  }, [])

  return {platform}
}
