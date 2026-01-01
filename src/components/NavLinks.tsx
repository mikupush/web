import LinkButton from "@/components/LinkButton.tsx";
import {SquareArrowOutUpRight} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation()

  return (
    <>
      {/*<LinkButton href="#docs">{t('docs')}</LinkButton>*/}
      <LinkButton href="#downloads">{t('download')}</LinkButton>
      <LinkButton
        href="https://github.com/mikupush"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        {t('github')}
        <SquareArrowOutUpRight className="w-4 h-4"/>
      </LinkButton>
    </>
  )
}
