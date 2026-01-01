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
