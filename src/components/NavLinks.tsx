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