export type Platform = "windows" | "macos" | "linux" | "other";

export function currentPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    return "windows"
  } else if (userAgent.includes("mac os")) {
    return "macos"
  } else if (userAgent.includes("linux")) {
    return "linux"
  }

  return "other"
}
