import {Button} from "@/components/ui/button.tsx";
import macIcon from "@/assets/os-macos.svg?url";
import winIcon from "@/assets/os-windows.svg?url";
import linuxIcon from "@/assets/os-linux.svg?url";
import {useEffect, useState} from "react";
import {type DownloadUrl, latestReleaseUrlForCurrentPlatform} from "@/lib/release.ts";
import {useTranslation} from "react-i18next";

export default function DownloadButton() {
  const [download, setDownload] = useState<DownloadUrl | null>(null)
  const { t } = useTranslation();

  useEffect(() => {
    latestReleaseUrlForCurrentPlatform()
      .then(result => setDownload(result))
  }, [])

  const platformIcon = {
    windows: winIcon,
    macos: macIcon,
    linux: linuxIcon,
    other: undefined
  }

  const icon = () => {
    if (download == null) {
      return ''
    }

    return platformIcon[download.os] ?? ''
  }

  return (
    <>
      {download ? (
          <>
            <Button asChild variant="primary" size="lg" className="bg-white hover:bg-neutral-200 gap-3 px-6">
              <a href={download.url}>
                <img src={icon()} alt="" aria-hidden className="h-5 w-5"/>
                <span className="text-base">{download.label}</span>
              </a>
            </Button>
            <a href="#download" className="mt-3 text-sm font-medium opacity-90 hover:opacity-100 underline">
              {t('or_other')}
            </a>
          </>
      ) : (
        <Button asChild variant="primary" size="lg" className="bg-white hover:bg-neutral-200 gap-3 px-6">
          <a href="#download">
            <span className="text-base">{t('download_not_found_for_platform')}</span>
          </a>
        </Button>
      )}
    </>
  )
}
