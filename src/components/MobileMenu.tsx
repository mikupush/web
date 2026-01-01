import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Menu, X} from "lucide-react";
import NavLinks from "@/components/NavLinks.tsx";
import ThemeSwitch from "@/components/ThemeSwitch.tsx";
import LanguageSelect from "@/components/LanguageSelect.tsx";
import {useTranslation} from "react-i18next";

export default function MobileMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    document.querySelector('header')?.classList.toggle('sticky', false)
    setIsOpen(true);
  }

  const closeMenu = () => {
    document.querySelector('header')?.classList.toggle('sticky', true);
    setIsOpen(false);
  }

  useEffect(() => {
    document.querySelectorAll('a').forEach(anchor => {
      if (anchor.parentElement?.id === 'mobile-menu') {
        anchor.addEventListener('click', closeMenu);
      }
    })
  }, [isOpen]);

  return (
    <>
      {!isOpen ? (
        <div className="md:hidden">
          <Button variant="ghost" size="icon-lg" aria-label={t('open_menu')} onClick={openMenu}>
            <Menu className="size-6" />
          </Button>
        </div>
      ) : (
        <div className="fixed top-0 right-0 w-full h-full bg-primary text-primary-foreground z-20 flex flex-col">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center">
              <ThemeSwitch />
              <LanguageSelect />
            </div>
            <Button onClick={closeMenu} aria-label={t('close_menu')} variant="ghost" size="icon-lg">
              <X className="size-6" />
            </Button>
          </div>
          <div id="mobile-menu" className="flex flex-col flex-1 items-center justify-center p-4 space-y-5">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  )
}
