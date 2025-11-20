import { translations as languageTranslations, defaultLanguage } from "@/i18n/languages"
import { useEffect, useState } from "react"

interface TranslationVariables {
    [variable: string]: string | number
}

export function useTranslation() {
    const language = navigator.language
    const defaultTranslations = languageTranslations[defaultLanguage]
    const translations = languageTranslations[language] ?? defaultTranslations

    const t = (key: string, variables: TranslationVariables = {}) => {
        let translation: string = translations[key] ?? defaultTranslations[key] ?? key

        Object.entries(variables).forEach(([variable, value]) => {
            translation = translation.replaceAll(new RegExp(`{{ *${variable} *}}`, 'g'), String(value))
        })

        return translation
    }

    return { t }
}
