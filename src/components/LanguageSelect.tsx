import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Languages} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    if (value === "en") {
      window.location.href = '/'
    } else {
      window.location.href = `/${value}`
    }
  }

  return (
    <Select value={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger
        className="border-0 shadow-transparent hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 gap-3"
        aria-label={t('select_language')}
      >
        <Languages className="h-4" />
        <SelectValue placeholder={t('select_language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="es">Español</SelectItem>
      </SelectContent>
    </Select>
  )
}

