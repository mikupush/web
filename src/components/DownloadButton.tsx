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

import {Loader} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useState, type ReactNode} from "react";
import {
  debianReleaseUrl,
  macOSAppleSiliconReleaseUrl,
  macOSIntelReleaseUrl,
  redHatReleaseUrl,
  windowsReleaseUrl
} from "@/lib/release.ts";

interface DownloadButtonProps {
  children?: ReactNode
  artifact: 'windows'
    | 'linux-deb'
    | 'linux-rpm'
    | 'macos-intel'
    | 'macos-apple-silicon'
}

export default function DownloadButton(props: DownloadButtonProps) {
  const [isFetching, setIsFetching] = useState(false);

  const downloadRelease = () => {
    const artifactUrl = sessionStorage.getItem(`${props.artifact}-url`)

    if (artifactUrl != null) {
      window.location.href = artifactUrl
    }

    let url: Promise<string | undefined> | undefined = undefined
    if (props.artifact === 'windows') url = windowsReleaseUrl()
    if (props.artifact === 'linux-deb') url = debianReleaseUrl()
    if (props.artifact === 'linux-rpm') url = redHatReleaseUrl()
    if (props.artifact === 'macos-intel') url = macOSIntelReleaseUrl()
    if (props.artifact === 'macos-apple-silicon') url = macOSAppleSiliconReleaseUrl()

    if (url === undefined) {
      return
    }

    setIsFetching(true)
    url.then(url => {
      if (url === undefined) return
      sessionStorage.setItem(`${props.artifact}-url`, url)
      window.location.href = url
    }).finally(() => {
      setIsFetching(false)
    })
  }

  return (
    <Button
      onClick={downloadRelease}
      size="lg"
      variant="outline"
      className="border-primary dark:border-primary"
      disabled={isFetching}
    >
      <span className="text-base">{props.children}</span>
      {isFetching && <Loader className="animate-spin" />}
    </Button>
  )
}