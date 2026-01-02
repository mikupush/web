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

export interface Asset {
  browser_download_url: string
  name: string
}

export interface Release {
  assets: Asset[]
}

let assets: Asset[] = []

async function fetchLatestReleaseAssets() {
  if (assets.length === 0) {
    const response = await fetch('https://api.github.com/repos/mikupush/mikupush/releases/latest')
    const data: Release = await response.json()
    assets = data.assets
  }

  return assets
}

function assetUrl(assets: Asset[], suffix: string){
  const asset = assets.findLast(asset => asset.name.includes(suffix))
  return asset?.browser_download_url
}

export async function windowsReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'x64_en-US.msi')
}

export async function macOSIntelReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'x64.dmg')
}

export async function macOSAppleSiliconReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'aarch64.dmg')
}

export async function debianReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'amd64.deb')
}

export async function redHatReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'x86_64.rpm')
}