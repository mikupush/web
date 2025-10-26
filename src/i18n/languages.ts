import { en } from "@/i18n/en"
import { es } from "@/i18n/es"

interface Translation {
    [key: string]: string
}

interface Translations {
    [language: string]: Translation
}

export const defaultLanguage = 'en'

export const translations: Translations = { 
    en, 
    'es-ES': es 
}
