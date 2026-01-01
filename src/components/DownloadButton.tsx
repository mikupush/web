import {Loader} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {
  debianReleaseUrl,
  macOSAppleSiliconReleaseUrl,
  macOSIntelReleaseUrl,
  redHatReleaseUrl,
  windowsReleaseUrl
} from "@/lib/release.ts";

interface DownloadButtonProps {
  children?: React.ReactNode;
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
      className="border-primary"
      disabled={isFetching}
    >
      <span className="text-base">{props.children}</span>
      {isFetching && <Loader className="animate-spin" />}
    </Button>
  )
}
