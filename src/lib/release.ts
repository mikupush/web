import {currentPlatform, type Platform} from "@/lib/platform.ts";
import { UAParser } from 'ua-parser-js'
import { t } from 'i18next'

export interface Asset {
  browser_download_url: string
  name: string
}

export interface Release {
  assets: Asset[]
}

export interface DownloadUrl {
  url: string
  os: Platform
  label: string
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

/**
 * Fetch the current release url for the current platform
 */
export async function latestReleaseUrlForCurrentPlatform(): Promise<DownloadUrl | null> {
  const assets = await fetchLatestReleaseAssets()
  const platform = currentPlatform()

  const download: DownloadUrl = { url: '', os: platform, label: '' }

  switch (true) {
    case platform === 'windows':
      download.url = assetUrl(assets, 'x64_en-US.msi') ?? ''
      download.label = t('download_for_windows')
      break
    case platform === 'macos':
      download.url = assetUrl(assets, 'aarch64.dmg') ?? ''
      download.label = t('download_for_macos_apple')
      break
    case platform === 'linux':
      download.url = assetUrl(assets, 'amd64.deb') ?? ''
      download.label = t('download_for_linux_deb')
      break
    default:
      return null
  }

  return download
}

export async function debianReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'amd64.deb')
}

export async function redHatReleaseUrl() {
  const assets = await fetchLatestReleaseAssets()
  return assetUrl(assets, 'amd64.rpm')
}
