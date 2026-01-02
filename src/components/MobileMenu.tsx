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