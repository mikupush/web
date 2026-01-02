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

interface WindowsIconProps {
  className?: string;
}

export default function WindowsIcon(props: WindowsIconProps) {
  return (
    <svg className={props.className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.875 3.04286L11.594 10.9024C11.594 10.9024 9 9.10003 7.094 9.28693C5.219 9.47382 2.688 10.4053 2.688 10.4053L5.001 2.48317C5.001 2.48317 9.782 -0.0647663 13.876 3.04286H13.875ZM12.813 11.648L15.094 3.85008C15.782 4.31632 17 5.15536 18.969 5.40389C20.938 5.6216 24 4.37895 24 4.37895L21.719 12.2385C21.375 12.3627 19.938 13.171 17.313 13.326C14.657 13.4811 12.813 11.648 12.813 11.648ZM0 19.6944L2.281 11.7722C2.281 11.7722 4.844 10.5912 7 10.7473C9.125 10.8716 10.844 12.0526 11.188 12.3319L8.907 20.2541C8.907 20.2541 6.282 18.5452 4.469 18.7003C2.656 18.8553 1.063 19.1665 0 19.6944ZM10.125 20.937L12.406 13.0775C12.406 13.0775 14.844 14.6621 16.437 14.5995C18.031 14.5687 19.125 14.4752 21.281 13.6362H21.312C21.156 14.0398 19.031 21.4341 19.031 21.4341C19.031 21.4341 16.531 22.6151 14.218 22.4908C11.937 22.3974 10.562 21.0931 10.124 20.937H10.125Z" fill="currentcolor"/>
    </svg>
  )
}