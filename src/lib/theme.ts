export const DARK_THEME = 'dark'
export const LIGHT_THEME = 'light'
export const THEME_KEY = 'theme'

export function getCurrentTheme() {
  const detectSystemTheme = () => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    return query.matches ? DARK_THEME : LIGHT_THEME
  }

  return localStorage.getItem(THEME_KEY) ?? detectSystemTheme()
}

export function toggleDarkTheme() {
  const currentTheme = getCurrentTheme()
  const theme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME

  applyTheme(theme)
  return theme
}

export function applyTheme(theme: string) {
  if (theme === DARK_THEME) {
    document.documentElement.classList.toggle('dark', true)
  } else {
    document.documentElement.classList.toggle('dark', false)
  }

  localStorage.setItem(THEME_KEY, theme)
}
