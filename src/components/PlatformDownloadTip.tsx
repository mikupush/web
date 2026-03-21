import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";
import i18n from 'i18next'
import { currentPlatform } from "@/lib/platform";
import { useTranslation } from "react-i18next";

export function PlatformDownloadTip() {
  const { t } = useTranslation()
  const lang = i18n.language
  const platform = currentPlatform()

  if (platform !== 'windows') {
    return ''
  }

  return (
    <div>
      <Alert className="mb-5 max-w-md">
        <TriangleAlert className="size-5" />
        <AlertTitle className="text-left text-lg">{t('not_code_signed')}</AlertTitle>
        <AlertDescription className="text-left">
          {t('not_code_signed_windows')}&nbsp;
          <a className="underline" href={lang !== 'en' ? `/${lang}/docs/client/building-from-source` : '/docs/client/building-from-source'}>
            {t('build_from_source')}
          </a>
        </AlertDescription>
      </Alert>
    </div>
  )
}
