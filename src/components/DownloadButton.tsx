import {usePlatform} from "@/hooks/os.ts";
import {useTranslation} from "@/hooks/i18n";
import {Button} from "@/components/ui/button.tsx";
import macIcon from "@/assets/os-macos.svg?url";
import winIcon from "@/assets/os-windows.svg?url";
import linuxIcon from "@/assets/os-linux.svg?url";

export default function DownloadButton() {
  const {platform} = usePlatform();
  const {t} = useTranslation()

  const platformIcon = {
    windows: winIcon,
    macos: macIcon,
    linux: linuxIcon,
    other: undefined
  }

  return (
    <Button asChild variant="primary" size="lg" className="bg-white hover:bg-neutral-200 gap-3 px-6">
      <a href={`#download-${platform}`}>
        {platformIcon[platform] && <img src={platformIcon[platform]} alt="" aria-hidden className="h-5 w-5"/>}
        <span className="text-base">{t('download_for_platform', {platform})}</span>
      </a>
    </Button>
  )
}
