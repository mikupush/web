/**
 * Miku Push! Web is the main web page of Miku Push!
 * Copyright (C) 2025  Miku Push! Team
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import AppleIcon from "@/components/icons/AppleIcon.tsx";
import WindowsIcon from "@/components/icons/WindowsIcon.tsx";
import LinuxIcon from "@/components/icons/LinuxIcon.tsx";
import {type Platform, currentPlatform} from "@/lib/platform.ts";
import {debianReleaseUrl, macOSAppleSiliconReleaseUrl, windowsReleaseUrl} from "@/lib/release.ts";
import {Loader} from "lucide-react";

export default function PlatformDownloadButton() {
  const [platform, setPlatform] = useState<Platform>('other');
  const [isFetching, setIsFetching] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setPlatform(currentPlatform())
  }, [])

  const Icon = () => {
    if (platform === "windows") return <WindowsIcon className="h-5 w-5 text-foreground" />
    if (platform === "linux") return <LinuxIcon className="h-5 w-5 text-foreground" />
    if (platform === "macos") return <AppleIcon className="h-5 w-5 text-foreground" />
    return ''
  }

  const label = () => {
    if (platform === "windows") return t('download_for_windows')
    if (platform === "linux") return t('download_for_linux_deb')
    if (platform === "macos") return t('download_for_macos_apple')
    return ''
  }

  const downloadRelease = () => {
    const releaseUrl = sessionStorage.getItem("release_url")

    if (releaseUrl != null) {
      window.location.href = releaseUrl
    }

    setIsFetching(true);
    let url: Promise<string | undefined> | undefined = undefined
    if (platform === "windows") url = windowsReleaseUrl()
    if (platform === "linux") url = debianReleaseUrl()
    if (platform === "macos") url = macOSAppleSiliconReleaseUrl()

    if (url === undefined) {
      return
    }

    url.then(url => {
      if (url === undefined) return
      sessionStorage.setItem('release_url', url)
      window.location.href = url
    }).finally(() => {
      setIsFetching(false);
    })
  }

  return (
    <>
      {platform !== 'other' ? (
          <>
            <Button
              onClick={downloadRelease}
              size="lg"
              className="bg-background shadow-xs hover:bg-background/70 hover:text-accent-foreground hover:cursor-pointer p-6"
              disabled={isFetching}
            >
              <Icon />
              <span className="text-base">{label()}</span>
              {isFetching && <Loader className="animate-spin" />}
            </Button>
            <a href="#downloads" className="mt-3 text-sm font-medium opacity-90 hover:opacity-100 underline">
              {t('or_other')}
            </a>
          </>
      ) : (
        <Button asChild size="lg" className="bg-background shadow-xs hover:bg-background/70 hover:text-accent-foreground hover:cursor-pointer p-6">
          <a href="#downloads">
            <span className="text-base">{t('download_not_found_for_platform')}</span>
          </a>
        </Button>
      )}
    </>
  )
}