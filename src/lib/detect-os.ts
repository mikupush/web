export type OS = "windows" | "macos" | "linux" | "other";

export function detectOS(): OS {
  const u = navigator.userAgent.toLowerCase();
  if (u.includes("win")) return "windows";
  if (u.includes("mac os")) return "macos";
  if (u.includes("linux")) return "linux";
  return "other";
}

export function downloadLabel(os: OS) {
  switch (os) {
    case "windows": return "Download for Windows";
    case "macos":   return "Download for macOS";
    case "linux":   return "Download for Linux";
    default:        return "Download";
  }
}
