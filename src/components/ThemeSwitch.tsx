import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {DARK_THEME, getCurrentTheme, toggleDarkTheme} from "@/lib/theme.ts";
import {Sun, Moon} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function ThemeSwitch() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(getCurrentTheme());

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(toggleDarkTheme())}
      aria-label={theme === DARK_THEME ? t('set_light_theme') : t('set_dark_theme')}
    >
      {theme === DARK_THEME ? <Sun /> : <Moon />}
    </Button>
  )
}
