import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "home": "Home",
                    "about-me": "About Me",
                    "apartments": "Apartments",
                    "name": `Samantha Azoulay`,
                    "real-estate": 'Real Estate',
                    "first-line-hero-section": "Are you looking for an apartment in Israel?",
                    "second-line-hero-section": "Do you need help finding a buyer or a seller?",
                    "about-title": "Meet Samantha",
                    "about-content":
                        `Since entering the real estate industry about a decade ago, Samantha has built an unparalleled
                        reputation for providing her clients with impeccable five-star service and exceptional results with
                        selling, renting, buying, and even renovating properties.
                        Samantha is easily reachable and speaks 3 languages (Hebrew, English, and French)
                        Samantha's success is based on hard work, her extensive market knowledge,
                        and not to mention her deep connections.
                        Over the years, she became a well-regarded realtor and an industry innovator.
                        Everything from purchasing and selling your home, to a leaky faucet, to a complete demo & renovationâ€¦
                        From real-estate lawyers, the appraiser, and the mortgage advisor.`,
                    "reliability": "Reliability",
                    "reliability-text": "You can count on me for whatever you need!",
                    "for-any-purpose": "For Any Purpose",
                    "for-any-purpose-text": "For good investments and living!",
                    "multi-language-support": "Multi Language Support",
                    "multi-language-support-text": "Hebrew, English and French",
                    "under-maintenance": 'Website is Under Maintenace',
                    "number-of-rooms": "Number of rooms",
                    "number-of-bedrooms": "Number of bedrooms",
                    "number-of-bathrooms": "Number of bathrooms",
                    "square-feet": "Total square feet",
                    "copyright": `Copyright Â© Developed by Noam Azoulay.`
                }
            },
            he: {
                translations: {
                    "home": "×“×Ł ×”×‘×™×Ş",
                    "about-me": "×?×•×“×•×Ş×™×™",
                    "apartments": "×“×™×¨×•×Ş",
                    "name": `×ˇ×ž× ×?×” ×?×–×•×ś×?×™`,
                    "real-estate": '× ×“×ś"×ź',
                    "first-line-hero-section": "×ž×—×¤×©×™×ť ×ś×§× ×•×Ş ×?×• ×ś×”×©×›×™×¨ ×“×™×¨×”?",
                    "second-line-hero-section": "×ž×˘×•× ×™×™× ×™×ť ×ś×‘×—×•×ź × ×›×ˇ ×ś×¦×•×¨×š ×ž×›×™×¨×” ×?×• ×”×©×›×¨×”?",
                    "about-title": "×”×›×™×¨×• ×?×Ş ×ˇ×ž× ×?×”",
                    "about-content":
                        `×ž×?×– ×›× ×™×ˇ×Ş×” ×?×ś ×Ş×—×•×ť ×˘×ˇ×§×™ ×”× ×“×ś"×ź ×ś×¤× ×™ ×˘×©×•×¨, ×ˇ×ž× ×?×” ×‘× ×Ş×” ×?×Ş ×Ş×“×ž×™×Ş×” ×˘"×™ × ×Ş× ×™×Ş ×©×™×¨×•×Ş ×ž×˘×•×ś×” ×ś×ś×§×•×—×•×Ş×™×”,
                        ×˘×ť ×Ş×•×¦×?×•×Ş ×™×•×¦×?×•×Ş ×“×•×¤×ź, ×‘×ž×›×™×¨×”, ×”×©×›×¨×”, ×§× ×™×™×” ×•×?×Ł ×—×™×“×•×© ×“×™×¨×•×Ş ×ś×©×ť ×”×˘×ś×?×Ş ×˘×¨×›×ť.
                        ×ˇ×ž× ×?×” ×“×•×‘×¨×Ş ×›3 ×©×¤×•×Ş (×˘×‘×¨×™×Ş, ×?× ×’×ś×™×Ş ×•×¦×¨×¤×Ş×™×Ş) ×•×‘×›×ź ×–×ž×™× ×” ×ś×§×”×ś ×¨×—×‘ ×™×•×Ş×¨ ×©×ś ×ś×§×•×—×•×Ş.
                        ×”×¦×ś×—×Ş×” ×‘× ×•×™×” ×˘×ś ×˘×‘×•×“×” ×§×©×” ×•×”×™×“×˘ ×”×¨×—×‘ ×©×ś×” ×‘×©×•×§ ×”× ×“×ś"×ź ×™×—×“ ×˘×ť ×§×©×¨×™×™×” ×”×ž×¨×•×‘×™×ť.
                        ×“×•×?×’×Ş ×•×˘×•×–×¨×Ş ×ś×›×ś ×ž×” ×©×ž×ˇ×‘×™×‘, ×›×•×ś×ś ×˘×•×¨×›×™ ×“×™×ź, ×™×•×˘×¦×™ ×ž×©×›× ×Ş×?×•×Ş ×•×©×ž×?×™×ť.`,
                    "reliability": "×‘×”×Ş×—×™×™×‘×•×Ş",
                    "reliability-text": "×Ş×•×›×ś×• ×ś×ˇ×ž×•×š ×˘×ś×™×™ ×‘×›×ś ×“×‘×¨ ×•×˘× ×™×™×ź ×‘×˘×ˇ×§×”!",
                    "for-any-purpose": "×ś×›×ś ×ž×?×¨×”",
                    "for-any-purpose-text": "×ś×—×™×¤×•×© ×“×™×¨×”, ×ž×›×™×¨×•×Ş, ×”×©×›×¨×•×Ş ×•×?×¤×™×ś×• ×”×©×§×˘×•×Ş",
                    "multi-language-support": "×“×•×‘×¨×Ş ×©×¤×•×Ş",
                    "multi-language-support-text": "×˘×‘×¨×™×Ş, ×?× ×’×ś×™×Ş ×•×¦×¨×¤×Ş×™×Ş.",
                    "under-maintenance": '×”×?×Ş×¨ ×Ş×—×Ş ×˘×‘×•×“×•×Ş ×Ş×—×–×•×§×”.',
                    "number-of-rooms": "×—×“×¨×™×ť",
                    "number-of-bedrooms": "×—×“×¨×™ ×©×™× ×”",
                    "number-of-bathrooms": "×ž×§×ś×—×•×Ş / ×©×™×¨×•×Ş×™×ť",
                    "square-feet": "×ž×?×¨ ×¨×‘×•×˘",
                    "copyright": `.×¤×•×Ş×— ×˘"×™ × ×•×˘×ť ×?×–×•×ś×?×™ Â© ×›×ś ×”×–×›×•×™×•×Ş ×©×ž×•×¨×•×Ş`
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    })

export default i18n