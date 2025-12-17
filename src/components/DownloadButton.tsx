import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import {type DownloadUrl, latestReleaseUrlForCurrentPlatform} from "@/lib/release.ts";
import {useTranslation} from "react-i18next";
import AppleIcon from "@/components/icons/AppleIcon.tsx";
import WindowsIcon from "@/components/icons/WindowsIcon.tsx";
import LinuxIcon from "@/components/icons/LinuxIcon.tsx";

export default function DownloadButton() {
  const [download, setDownload] = useState<DownloadUrl | null>(null)
  const { t } = useTranslation();

  useEffect(() => {
    latestReleaseUrlForCurrentPlatform()
      .then(result => setDownload(result))
  }, [])

  const Icon = () => {
    if (download == null) {
      return ''
    }

    if (download.os === "windows") {
      return <WindowsIcon className="h-5 w-5 text-foreground" />
    }

    if (download.os === "linux") {
      return <LinuxIcon className="h-5 w-5 text-foreground" />
    }

    if (download.os === "macos") {
      return <AppleIcon className="h-5 w-5 text-foreground" />
    }

    return ''
  }

  return (
    <>
      {download ? (
          <>
            <Button asChild size="lg" className="bg-background shadow-xs hover:bg-background/70 hover:text-accent-foreground hover:cursor-pointer p-6">
              <a href={download.url}>
                <Icon />
                <span className="text-base">{download.label}</span>
              </a>
            </Button>
            <a href="#download" className="mt-3 text-sm font-medium opacity-90 hover:opacity-100 underline">
              {t('or_other')}
            </a>
          </>
      ) : (
        <Button asChild size="lg" className="bg-background shadow-xs hover:bg-background/70 hover:text-accent-foreground hover:cursor-pointer p-6">
          <a href="#download">
            <span className="text-base">{t('download_not_found_for_platform')}</span>
          </a>
        </Button>
      )}
    </>
  )
}
