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

export type Platform = "windows" | "macos" | "linux" | "other";

export function currentPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    return "windows"
  } else if (userAgent.includes("mac os")) {
    return "macos"
  } else if (userAgent.includes("linux")) {
    return "linux"
  }

  return "other"
}