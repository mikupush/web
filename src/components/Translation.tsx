import {useTranslation} from "@/hooks/i18n.ts";

interface TranslationProps {
  key: string
}

export default function Translation({key}: TranslationProps) {
  const {t} = useTranslation()
  return t(key)
}
